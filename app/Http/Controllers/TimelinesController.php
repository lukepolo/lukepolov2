<?php

namespace App\Http\Controllers;

use App\Http\Requests\TimelineRequest;
use App\Models\Timeline;

class TimelinesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Timeline::orderBy('start_date')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  TimelineRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TimelineRequest $request)
    {
        return response()->json(
            Timeline::create([
                'name' => $request->get('name'),
                'end_date' => $request->get('end_date'),
                'start_date' => $request->get('start_date'),
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
            Timeline::findOrFail($id)
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  TimelineRequest $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(TimelineRequest $request, $id)
    {
        $timeline = Timeline::findOrFail($id);

        $timeline->update([
            'name' => $request->get('name'),
            'end_date' => $request->get('end_date'),
            'start_date' => $request->get('start_date'),
        ]);

        return response()->json($timeline);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return response()->json(Timeline::destroy($id));
    }
}
