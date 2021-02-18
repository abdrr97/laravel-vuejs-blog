<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function create_tag(Request $request)
    {
        if (!isset($request->tagName))
            return response()->json(['massage' => 'this is an Error from my test controller'], 500);

        return $request->tagName;
        // return response()->json(['' => 'hey this is from my test controller'], 200);
    }
}
