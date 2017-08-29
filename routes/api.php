<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'auth:api'], function () {
    Route::apiResource('tags', 'TagsController');
    Route::apiResource('blogs', 'BlogsController');
    Route::apiResource('projects', 'ProjectsController');
    Route::apiResource('timelines', 'TimelinesController');
    Route::apiResource('technologies', 'TechnologiesController');
});


