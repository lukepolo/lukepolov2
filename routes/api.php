<?php

/*
|--------------------------------------------------------------------------
| Override Auth Routes
|--------------------------------------------------------------------------
|
*/

Route::group(['middleware' => 'auth:api'], function () {
    Route::apiResource('tags', 'TagsController');
    Route::post('blogs/{blog}', 'BlogsController@update');
    Route::apiResource('blogs', 'BlogsController');
    Route::post('projects/{project}', 'ProjectsController@update');
    Route::apiResource('users', 'UsersController');
    Route::apiResource('projects', 'ProjectsController');
    Route::apiResource('timelines', 'TimelinesController');
    Route::apiResource('technologies', 'TechnologiesController');
    Route::apiResource('blogs.comments', 'BlogCommentsController');
    Route::get('admin/blog-comments', 'ModerateBlogCommentsController@index');
    Route::patch('admin/blog-comments/{comment}', 'ModerateBlogCommentsController@update');

    Route::get('admin/most-visited-pages', 'PopularPagesController@index');
    Route::get('admin/visitors-and-page-views', 'VisitorsController@index');
});



