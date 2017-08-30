<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use App\Http\Requests\TagRequest;
use Illuminate\Http\Request;

class TagsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if($request->get('all')) {
            return response()->json(Tag::all());
        }

        return response()->json(Tag::paginate(5));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  TagRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(TagRequest $request)
    {
        return response()->json(
            Tag::create([
                'name' => $request->get('name'),
                'color' => $request->get('color')
            ])
        );
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
            Tag::findOrFail($id)
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  TagRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(TagRequest $request, $id)
    {
        $tag = Tag::findOrFail($id);

        $tag->update([
            'name' => $request->get('name'),
            'color' => $request->get('color')
        ]);

        return response()->json($tag);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return response()->json(Tag::destroy($id));
    }
}
