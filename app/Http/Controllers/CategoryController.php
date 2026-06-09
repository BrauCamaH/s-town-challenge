<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('categories/index', [
            'categories' => Category::paginate(5),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('categories/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255', 'not_regex:/[0-9]/'],
            'description' => ['nullable', 'string'],
        ], [
            'name.not_regex' => 'The name field must not contain numbers.',
        ]);

        Category::create($validated);

        return redirect()->route('categories.index')->with('message', 'Category created successfully.');
    }

    public function destroy(Category $category)
    {
        $category->delete();

        return redirect()->route('categories.index')->with('message', 'Categoria eliminada');
    }
}
