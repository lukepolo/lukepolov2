<?php

namespace App\Http\Migrations\Version_2017_08_01;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use TomSchlick\RequestMigrations\RequestMigration;

class PlaybookNewColumnDate extends RequestMigration
{
    /**
     * Migrate the request for the application to "read".
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Request
     */
    public function migrateRequest(Request $request) : Request
    {
        $request->merge([
            'all' => true,
        ]);

        return $request;
    }

    /**
     * Migrate the response to display to the client.
     *
     * @param \Illuminate\Http\Response $response
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function migrateResponse(Response $response) : Response
    {
        return response()->json($response->original->map(function($tag) {
            $tag->some_old_column_name = $tag->some_old_column_name. ', infact even older!';
            return $tag;
        }));
    }

    /**
     * Define which named paths should this migration modify.
     *
     * @return array
     */
    public function paths() : array
    {
        return [
            action('TagsController@index')
        ];
    }
}