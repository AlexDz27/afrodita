@php
// TODO: how to refactor?
use Illuminate\Support\Facades\Route;

$route = Route::currentRouteName();
$isCatalogRoute = ($route === 'catalog') || (Route::getCurrentRoute()->action['prefix'] === '/catalog');

// Get action url for search
use App\Http\Controllers\SearchController;

$url = action([SearchController::class, 'show']);
@endphp

<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item {{ $route === 'home' ? 'active' : '' }}">
                    <a class="nav-link" href="{{ route('home') }}">Home</a>
                </li>
                <li class="nav-item {{ $route === 'aboutUs' ? 'active' : '' }}">
                    <a class="nav-link" href="{{ route('aboutUs') }}">About Us</a>
                </li>
                <li class="nav-item {{ $isCatalogRoute ? 'active' : '' }}">
                    <a class="nav-link" href="{{ route('catalog') }}">Catalog</a>
                </li>
            </ul>

            <form class="d-flex" action="{{ $url }}">
                @if ($route === 'home')
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