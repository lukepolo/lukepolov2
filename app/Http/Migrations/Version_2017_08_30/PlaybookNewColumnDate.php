<?php

namespace App\Http\Migrations\Version_2017_08_30;

use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
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
        $data = $response->original;

        if($data instanceof LengthAwarePaginator) {
            $data = $data->getCollection();
        }

        return response()->json(
            $data->map(function($tag) {
                $tag->some_old_column_name = 'Im old';
                return $tag;
            })
        );
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