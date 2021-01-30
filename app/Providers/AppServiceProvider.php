<?php

namespace App\Providers;

use App\Services\CatalogSearchService;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(CatalogSearchService::class, function () {
            $type = Request::input('type') ?? 'web';
            $query = Request::input('query');

            return new CatalogSearchService($type, $query);
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
