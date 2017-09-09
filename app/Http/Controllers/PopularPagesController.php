<?php

namespace App\Http\Controllers;

use Analytics;
use Carbon\Carbon;
use Spatie\Analytics\Period;

class PopularPagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(
            Analytics::fetchMostVisitedPages(
                Period::create(
                    Carbon::now()->subWeek(),
                    Carbon::now()
                )
                , 10
            )
        );
    }

}
