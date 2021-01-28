<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{
    public function show(Request $request)
    {
        $query = $request->input('query');

        $sql = "SELECT id, name, description, 'product' AS type FROM products WHERE name LIKE ? 
            OR description LIKE ?
            UNION SELECT id, name, description, 'service' AS type FROM services WHERE name LIKE ? OR description LIKE ?";
        $searchables = DB::select(DB::raw($sql),
            array_fill(0, mb_substr_count($sql, '?'), "%{$query}%")
        );

        return view('search', [
            'breadCrumbTitle' => 'Search',
            'query' => $query,
            'searchables' => $searchables,
        ]);
    }
}
