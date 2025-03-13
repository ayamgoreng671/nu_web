<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});
Route::get('/ayam', function () {
    return view("ayam");
});


require __DIR__ . '/auth.php';
