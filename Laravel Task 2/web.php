<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index']);
Route::get('/shop', [HomeController::class, 'shop']);
Route::get('/admin', [AdminController::class, 'admin']);

Route::prefix('/admin')->group(function () {
    Route::get('categories', [CategoriesController::class, 'index']);
    Route::post('categories', [CategoriesController::class, 'store'])->name('admin.categories');
    Route::get('categories/create', [CategoriesController::class, 'create']);
    Route::get('categories/{id}/edit', [CategoriesController::class, 'edit']);
    Route::put('categories/{id}', [CategoriesController::class, 'update']);
    Route::get('categories/{id}', [CategoriesController::class, 'show']);
    Route::delete('categories/{id}', [CategoriesController::class, 'destroy']);

    Route::resource('products', ProductsController::class);
    Route::get('products', [ProductsController::class, 'index']);
    Route::post('products', [ProductsController::class, 'store'])->name('admin.products');
    Route::get('categories/create', [CategoriesController::class, 'create']);
});