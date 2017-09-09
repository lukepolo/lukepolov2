<?php

namespace App\Http\Controllers;

use Analytics;
use Carbon\Carbon;
use Spatie\Analytics\Period;

class VisitorsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $visitors = Analytics::fetchVisitorsAndPageViews(
            Period::create(
                Carbon::now()->subDays(7),
                Carbon::now()
            )
        );

        $analytics = null;
        foreach ($visitors as $visitor) {
            $analytics['labels'][] = $visitor['date']->toDateString();
            $analytics['visitors'][] = $visitor['visitors'];
            $analytics['views'][] = $visitor['pageViews'];
        }
        return response()->json($analytics);
    }

}
