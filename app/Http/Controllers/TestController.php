<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function create_tag()
    {
        return response()->json(['massage' => 'hey this is from my test controller'], 200);
        // return response()->json(['massage' => 'this is an Error from my test controller'], 500);
    }
}
