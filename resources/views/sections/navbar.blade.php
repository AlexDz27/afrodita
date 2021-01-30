@php
/** @var Illuminate\Routing\Route $route */
use App\Http\Controllers\CatalogSearchController;

$action = action([CatalogSearchController::class, 'show']);
@endphp

<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item {{ $route->named('home') ? 'active' : '' }}">
                    <a class="nav-link" href="{{ route('home') }}">Home</a>
                </li>
                <li class="nav-item {{ $route->named('aboutUs') ? 'active' : '' }}">
                    <a class="nav-link" href="{{ route('aboutUs') }}">About Us</a>
                </li>
                <li class="nav-item {{ $route->named('catalog*') ? 'active' : '' }}">
                    <a class="nav-link" href="{{ route('catalog.catalog') }}">Catalog</a>
                </li>
            </ul>

            <form class="d-flex" action="{{ $action }}" method="get">
                @if ($route->named('home'))
                    <div id="show-number-container" data-phone="{{ config('admin.phone') }}">
                        {{-- <ShowPhoneButton phone={phone} /> in /resources/js/components/ShowPhoneButton/ --}}
                        <button class="btn btn-warning" type="button" style="width: 170px; margin-right: 35px;">Show our phone</button>
                    </div>
                @endif

                <div id="catalog-search-container">
                    {{-- <SearchCatalogInput /> in /resources/js/components/SearchCatalogInput/ --}}
                    <input name="query" class="form-control me-2" type="search" placeholder="Search in catalog...">
                </div>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>