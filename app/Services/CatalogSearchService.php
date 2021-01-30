<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;
use ReflectionClass;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class CatalogSearchService
{
    const TYPE_WEB = 'web';
    const TYPE_INPUT_AJAX = 'input-ajax';

    private string $type;
    private string $query;

    private array $availableTypes;

    private string $sqlQuery;

    private array $rawData = [];
    private array $resultData = [];

    public function __construct(string $type, string $query)
    {
        $this->type = $type;
        $this->query = $query;

        $this->availableTypes = $this->getAvailableTypes();

        return $this;
    }

    public function getAppropriateResponse()
    {
        if ($this->type === self::TYPE_WEB) {
            return view('pages.search', [
                'breadCrumbTitle' => 'Search',
                'query' => $this->query,
                'items' => $this->resultData,
            ]);
        }

        if ($this->type === self::TYPE_INPUT_AJAX) {
            return response()->json($this->resultData);
        }
    }

    public function search()
    {
        $this->fetchRawData();
        $this->prepareData();

        return $this;
    }

    private function prepareData()
    {
        if ($this->type === self::TYPE_WEB) {
            $this->resultData = $this->rawData;
        }

        if ($this->type === self::TYPE_INPUT_AJAX) {
            foreach ($this->rawData as $item) {
                $item->url = config('app.url') . "/catalog/{$item->type}s/{$item->id}";

                if ($item->photos !== 'null') {
                    $item->photo = json_decode($item->photos)[0]->file_path;
                } else {
                    $item->photo = null;
                }
                unset($item->photos);

                $this->resultData[] = $item;
            }
        }
    }

    private function fetchRawData()
    {
        if (!in_array($this->type, $this->availableTypes)) {
            throw new BadRequestHttpException(
                "Used search type [{$this->type}]. Must be one of these: "
                . implode(', ', $this->availableTypes)
            );
        }

        // TODO: also select photos and render them in search page
        if ($this->type === self::TYPE_WEB) {
            $this->sqlQuery = "SELECT id, name, description, 'product' AS type FROM products WHERE name LIKE ? 
            UNION SELECT id, name, description, 'service' AS type FROM services WHERE name LIKE ? OR description LIKE ?";
        }

        if ($this->type === self::TYPE_INPUT_AJAX) {
            $this->sqlQuery = "SELECT id, name, photos, 'product' AS type FROM products WHERE name LIKE ? 
            UNION SELECT id, name, photos, 'service' AS type FROM services WHERE name LIKE ? OR description LIKE ?";
        }

        $this->rawData = DB::select(DB::raw($this->sqlQuery),
            array_fill(0, mb_substr_count($this->sqlQuery, '?'), "%{$this->query}%")
        );
    }

    private function getAvailableTypes(): array
    {
        $reflection = new ReflectionClass(__CLASS__);

        $types = $reflection->getConstants();

        return array_values($types);
    }
}
