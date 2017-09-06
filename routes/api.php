<?php

Route::group(['middleware' => 'auth:api'], function () {
    Route::apiResource('tags', 'TagsController');
    Route::apiResource('blogs', 'BlogsController');
    Route::post('projects/{project}', 'ProjectsController@update');
    Route::apiResource('projects', 'ProjectsController');
    Route::apiResource('timelines', 'TimelinesController');
    Route::apiResource('technologies', 'TechnologiesController');
    Route::apiResource('blogs.comments', 'BlogCommentsController');
});

/*
|--------------------------------------------------------------------------
| Override Auth Routes
|--------------------------------------------------------------------------
|
*/

Route::group(['middleware' => 'api'], function () {
    Route::get('tags', 'TagsController@index');
    Route::get('blogs', 'BlogsController@index');
    Route::get('projects', 'ProjectsController@index');
    Route::get('blogs/{blog}', 'BlogsController@show');
    Route::get('timelines', 'TimelinesController@index');
});

