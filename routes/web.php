<?php

use App\Models\Review;
use App\Models\Skill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Index', [
        'skills' => Skill::all('nama_skill'),
        'reviews' => Review::latest()->get(),
    ]);
})->name('index');

Route::post('/reviews', function (Request $request) {
    sleep(5);
    $validatedData = $request->validate([
        'nama_reviewer' => 'required|min:3',
        'posisi' => 'required|min:3',
        'deskripsi' => 'required|max:500',
        'rating' => 'required|min:1'
    ]);

    Review::create($validatedData);
    return to_route('index');
}); 