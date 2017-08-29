<?php

namespace App\Http\Controllers;

use App\Models\Technology;
use App\Http\Requests\TechnologyRequest;

class TechnologiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Technology::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  TechnologyRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TechnologyRequest $request)
    {
        return response()->json(
            Technology::create([
                'url' => $request->get('url'),
                'name' => $request->get('name'),
                'color' => $request->get('color'),
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
            Technology::findOrFail($id)
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  TechnologyRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(TechnologyRequest $request, $id)
    {
        $technology = Technology::findOrFail($id);

        $technology->update([
            'url' => $request->get('url'),
            'name' => $request->get('name'),
            'color' => $request->get('color'),
        ]);

        return response()->json($technology);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return response()->json(Technology::destroy($id));
    }
}
