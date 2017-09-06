<?php

namespace App\Http\Controllers;

use App\Models\BlogComment;
use Illuminate\Http\Request;

class BlogCommentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param $blogId
     * @return \Illuminate\Http\Response
     */
    public function index($blogId)
    {
        return response()->json(
            BlogComment::where('blog_id', $blogId)
                ->whereIsRoot()
                ->get()
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request $request
     * @param $blogId
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $blogId)
    {
        $parent = null;

        if($request->has('parent_comment')) {
            $parent = BlogComment::where('blog_id', $blogId)
                ->findOrFail($request->get('parent_comment'));
        }

        $blogComment = BlogComment::create([
            'blog_id' => $blogId,
            'user_id' => \Auth::user()->id,
            'comment' => $request->get('comment')
        ], $parent);

        return response()->json($blogComment);
    }

    /**
     * Display the specified resource.
     *
     * @param $blogId
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($blogId, $id)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request $request
     * @param $blogId
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $blogId, $id)
    {

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $blogId
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($blogId, $id)
    {

    }
}
