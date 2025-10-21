<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia('Home');
});
Route::get('/about', function () {
    return Inertia('About/About');
});
