<?php

namespace App\Providers;

use App\Services\CatalogSearchService;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\ServiceProvider;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

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

            if (is_null($query)) {
                throw new BadRequestHttpException('Query string must not be empty.');
            }

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
