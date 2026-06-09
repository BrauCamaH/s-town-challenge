<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Category;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BookController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('books/index', [
            'books' => Book::with(['categories', 'borrower'])->paginate(5),
            'users' => User::all(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('books/create', [
            'categories' => Category::all(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255', 'not_regex:/[0-9]/'],
            'author' => ['required', 'string', 'max:255', 'not_regex:/[0-9]/'],
            'published_date' => ['required', 'date'],
            'category_ids' => ['required', 'array', 'min:1'],
            'category_ids.*' => ['exists:categories,id'],
        ], [
            'name.not_regex' => 'The name field must not contain numbers.',
            'author.not_regex' => 'The author field must not contain numbers.',
            'category_ids.min' => 'The book must be in at least one category.',
        ]);

        $book = Book::create([
            'name' => $validated['name'],
            'author' => $validated['author'],
            'published_date' => $validated['published_date'],
        ]);

        $book->categories()->sync($validated['category_ids']);

        return redirect()->route('books.index')->with('message', 'Book created successfully.');
    }

    public function destroy(Book $book)
    {
        $book->delete();

        return redirect()->route('books.index')->with('message', 'Libro eliminado.');
    }

    public function edit(Book $book): Response
    {
        return Inertia::render('books/edit', [
            'book' => $book->load('categories'),
            'categories' => Category::all(),
        ]);
    }

    public function update(Request $request, Book $book)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255', 'not_regex:/[0-9]/'],
            'author' => ['required', 'string', 'max:255', 'not_regex:/[0-9]/'],
            'published_date' => ['required', 'date'],
            'category_ids' => ['required', 'array', 'min:1'],
            'category_ids.*' => ['exists:categories,id'],
        ], [
            'name.not_regex' => 'The name field must not contain numbers.',
            'author.not_regex' => 'The author field must not contain numbers.',
            'category_ids.min' => 'The book must be in at least one category.',
        ]);

        $book->update([
            'name' => $validated['name'],
            'author' => $validated['author'],
            'published_date' => $validated['published_date'],
        ]);

        $book->categories()->sync($validated['category_ids']);

        return redirect()->route('books.index')->with('message', 'Book updated successfully.');
    }

}
