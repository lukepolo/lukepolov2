<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::post('/logout', 'Auth\OAuthController@logout');
Route::get('/oauth/{provider}', 'Auth\OAuthController@redirect');
Route::get('/oauth/callback/{provider}', 'Auth\OAuthController@callback');

// Public API Routes that can use the web
Route::group(['prefix' => 'api'], function() {
    Route::get('tags', 'TagsController@index');
    Route::get('blogs', 'BlogsController@index');
    Route::get('projects', 'ProjectsController@index');
    Route::get('blogs/{blog}', 'BlogsController@show');
    Route::get('timelines', 'TimelinesController@index');
    Route::get('blogs/{blog}/comments', 'BlogCommentsController@index');
});

Route::get('/{any}', 'Controller@app')->where('any', '.*');