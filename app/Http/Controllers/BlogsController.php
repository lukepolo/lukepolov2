<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Http\Requests\BlogRequest;

class BlogsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Blog::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  BlogRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BlogRequest $request)
    {
        $blog = Blog::create([
            'html' => $request->get('html'),
            'name' => $request->get('name'),
            'draft' => $request->get('draft'),
            'link_name' => $request->get('link_name'),
            'preview_text' => $request->get('preview_text'),
        ]);

        // todo - has many tags
        // todo - update image to model as well

//        'blog_image' => $request->get('blog_image'),
        return response()->json($blog);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(
            Blog::findOrFail($id)
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  BlogRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(BlogRequest $request, $id)
    {
        $blog = Blog::findOrFail($id);

        $blog->update([
            'html' => $request->get('html'),
            'name' => $request->get('name'),
            'draft' => $request->get('draft'),
            'link_name' => $request->get('link_name'),
            'preview_text' => $request->get('preview_text'),
        ]);

        return response()->json($blog);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return response()->json(Blog::destroy($id));
    }
}
