<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Http\Requests\ProjectRequest;
use Illuminate\Http\Request;

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
        return response()->json($this->saveProject($request, new Project()));
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
        return response()->json($this->saveProject($request, Project::findOrFail($id)));
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

    /**
     * @param Request $request
     *
     * @param $project
     *
     * @return Project
     */
    private function saveProject(Request $request, Project $project)
    {
        $project->fill([
            'url' => $request->get('url'),
            'html' => $request->get('html'),
            'name' => $request->get('name'),
            'end_date' => $request->get('end_date'),
            'start_date' => $request->get('start_date'),
            'timeline_id' => $request->get('timeline_id'),
        ]);

        if($request->hasFile('project_image')) {
            $project->fill([
                'project_image' => \Storage::url(
                    $request->file('project_image')->store('public/project-photos')
                )
            ]);
        }

        if($request->get('remove_project_image') == 'true') {
            $project->fill([
                'project_image' => null
            ]);
        }

        $project->save();

        $project->technologies()->sync($request->get('technologies'));

        return $project;
    }
}
