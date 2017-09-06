<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use App\Http\Requests\BlogRequest;

class BlogsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return response()->json(
            Blog::when($request->has('filters'), function($query) use($request) {
                $query->whereHas('tags', function($query)  use($request) {
                    $query->whereIn('id', explode(',', $request->get('filters')));
                });
            })
            ->paginate(5)
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  BlogRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BlogRequest $request)
    {

        return response()->json($this->saveBlog($request, new Blog));
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
        return response()->json($this->saveBlog($request, Blog::findOrFail($id)));
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

    private function saveBlog(BlogRequest $request, Blog $blog)
    {
        $blog->fill([
            'html' => $request->get('html'),
            'name' => $request->get('name'),
            'draft' => $request->get('draft'),
            'link_name' => $request->get('link_name'),
            'preview_text' => $request->get('preview_text'),
        ]);

        $blog->tags()->sync($request->get('tags'));

        // todo - update image to model as well

//        'blog_image' => $request->get('blog_image'),

        $blog->save();

        return $blog->fresh();

    }
}
