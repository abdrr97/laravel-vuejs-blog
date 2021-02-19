<?php

namespace App\Http\Controllers;

use App\Http\Resources\AdminResource;
use App\Models\Tag;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return Tag::orderBy('created_at', 'DESC')->get();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // validation goes here
        $tag = Tag::create([
            'tag_name' => $request->tagName
        ]);

        return response()->json(
            [
                'success' => 'Tag was created successfully', 'tag' => $tag
            ],
            200
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Tag $tag)
    {
        if (!$tag)
            return response()->json(['not found' => 'Tag Not Found'], 404);

        return AdminResource::wrap($tag);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tag $tag)
    {
        // validation goes here

        $tag->update([
            'tag_name' => $request->tagName
        ]);

        return response()->json(['success' => 'Tag was updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
