<?php

namespace App\Providers;

use App\Services\CatalogSearchService;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;

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
      return new CatalogSearchService();
    });
  }

  /**
   * Bootstrap any application services.
   *
   * @return void
   */
  public function boot(Request $request)
  {
    Paginator::useBootstrap();

    Blade::if('app', function () use ($request) {
      return $request->is('admin*') === false;
    });
  }
}
