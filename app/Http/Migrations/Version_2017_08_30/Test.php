<?php

namespace App\Http\Migrations\Version_2017_08_30;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use TomSchlick\RequestMigrations\RequestMigration;

class Test extends RequestMigration
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
       return $response;
    }

    /**
     * Define which named paths should this migration modify.
     *
     * @return array
     */
    public function paths() : array
    {
        return [];
    }
}