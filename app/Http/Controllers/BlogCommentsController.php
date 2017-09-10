<?php

namespace App\Http\Controllers;

use App\Models\BlogComment;
use App\Http\Requests\BlogCommentRequest;

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
     * @param  BlogCommentRequest $request
     * @param $blogId
     * @return \Illuminate\Http\Response
     */
    public function store(BlogCommentRequest $request, $blogId)
    {
        $parent = null;

        if($request->has('parent_comment')) {
            $parent = BlogComment::where('blog_id', $blogId)
                ->findOrFail($request->get('parent_comment'));

            if($request->user()->isAdmin() && !$parent->been_moderated) {
                $parent->update([
                    'been_moderated' => true
                ]);
            }
        }

        $blogComment = BlogComment::create([
            'blog_id' => $blogId,
            'user_id' => \Auth::user()->id,
            'comment' => $request->get('comment'),
            'been_moderated' => $request->user()->isAdmin()
        ], $parent);

        return response()->json($blogComment->fresh());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  BlogCommentRequest $request
     * @param $blogId
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(BlogCommentRequest $request, $blogId, $id)
    {
        $blogComment = BlogComment::where('blog_id', $blogId)
            ->findOrFail($id);

        $blogComment->update([
            'comment' => $request->get('comment'),
            'been_moderated' => $request->user()->isAdmin(),
        ]);

        return response()->json($blogComment);
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
        BlogComment::where('blog_id', $blogId)
            ->findOrFail($id)
            ->delete();

        return response()->json('OK');
    }
}
