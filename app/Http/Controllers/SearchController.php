<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{
    public function show(Request $request)
    {
        $query = $request->input('query');

        $searchables = $this->getCatalogSearchables($query);

        return view('search', [
            'breadCrumbTitle' => 'Search',
            'query' => $query,
            'searchables' => $searchables,
        ]);
    }

    public function showForApi(Request $request)
    {
        $query = $request->input('query');

        $searchables = $this->getCatalogSearchablesForApi($query);

        foreach ($searchables as $searchable) {
            $searchable->url = config('app.url') . "/catalog/{$searchable->type}s/{$searchable->id}";

            if ($searchable->photos !== 'null') {
                $searchable->photo = json_decode($searchable->photos)[0]->file_path;
            } else {
                $searchable->photo = null;
            }
            unset($searchable->photos);
        }

        return response()->json($searchables);
    }

    private function getCatalogSearchables($query)
    {
        $sql = "SELECT id, name, description, 'product' AS type FROM products WHERE name LIKE ? 
            UNION SELECT id, name, description, 'service' AS type FROM services WHERE name LIKE ? OR description LIKE ?";

        return DB::select(DB::raw($sql),
            array_fill(0, mb_substr_count($sql, '?'), "%{$query}%")
        );
    }

    private function getCatalogSearchablesForApi($query)
    {
        $sql = "SELECT id, name, photos, 'product' AS type FROM products WHERE name LIKE ? 
            UNION SELECT id, name, photos, 'service' AS type FROM services WHERE name LIKE ? OR description LIKE ?";

        return DB::select(DB::raw($sql),
            array_fill(0, mb_substr_count($sql, '?'), "%{$query}%")
        );
    }
}
