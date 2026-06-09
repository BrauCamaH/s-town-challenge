<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('books', \App\Http\Controllers\BookController::class);
    Route::resource('categories', \App\Http\Controllers\CategoryController::class);

    Route::inertia('dashboard', 'dashboard')->name('dashboard');


    Route::post('books/{book}/borrow', [\App\Http\Controllers\BookController::class, 'borrow'])->name('books.borrow');
    Route::post('books/{book}/return', [\App\Http\Controllers\BookController::class, 'returnBook'])->name('books.return');

});

require __DIR__ . '/settings.php';
