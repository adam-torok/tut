<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('register',[RegisterController::class, 'create']);
Route::post('login',[LoginController::class, 'login']);
Route::post('logout',[LoginController::class, 'logout']);


Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::get('/authenticated', function () {
        return true;
    });
});