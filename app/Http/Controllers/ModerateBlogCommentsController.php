<?php

namespace App\Http\Controllers;

use App\Models\BlogComment;

class ModerateBlogCommentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(
            BlogComment::where('been_moderated', false)
                ->without('children')
                ->paginate(5)
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param $id
     * @return \Illuminate\Http\Response
     */
    public function update($id)
    {
        $blogComment = BlogComment::findOrFail($id);

        $blogComment->update([
            'been_moderated' => true
        ]);

        return response()->json($blogComment);
    }
}
