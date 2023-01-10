<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    function admin(){
        return view('layouts.admin');
    }

    function adminCat(){
        $categories = Category::all();
        return view('admin/categories') -> with('categories', $categories);
    }
}
