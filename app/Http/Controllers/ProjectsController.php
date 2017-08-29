<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Http\Requests\ProjectRequest;

class ProjectsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Project::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  ProjectRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProjectRequest $request)
    {
        $project = Project::create([
            'url' => $request->get('url'),
            'html' => $request->get('html'),
            'name' => $request->get('name'),
            'end_date' => $request->get('end_date'),
            'timeline_id' => $request->get('timeline'),
            'start_date' => $request->get('start_date'),
        ]);

        // TODO - has many timelines
        // TODO - has many technologies

        //todo - update image to model as well

//        'project_image' => $request->get('project_image'),
        return response()->json($project);
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
            Project::findOrFail($id)
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  ProjectRequest $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ProjectRequest $request, $id)
    {
        $project = Project::findOrFail($id);

        $project->update([
            'url' => $request->get('url'),
            'html' => $request->get('html'),
            'name' => $request->get('name'),
            'end_date' => $request->get('end_date'),
            'timeline_id' => $request->get('timeline'),
            'start_date' => $request->get('start_date'),
        ]);

        return response()->json($project);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return response()->json(Project::destroy($id));
    }
}
