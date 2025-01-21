<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home', ['name' => 'Dina Aulia Sabilla']);
});

Route::get('/about', fn() => inertia('About'));
Route::get('/portofolio', fn() => inertia('Portofolio'));