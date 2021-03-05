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

            @app
                <div class="me-4 cart">
                    <a class="cart-link" href="#">
                        <svg enable-background="new 0 0 97.623 97.623" version="1.1" viewBox="0 0 97.623 97.623" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                            <path d="m78.617 65.562h-34.074c-4.919 0-10.185-3.585-11.987-8.163l-13.77-34.953c-0.727-1.846-3.289-3.59-5.273-3.59h-9.904c-1.993 1e-3 -3.609-1.615-3.609-3.608s1.616-3.609 3.609-3.609h9.905c4.92 0 10.185 3.585 11.987 8.163l13.77 34.953c0.727 1.846 3.289 3.59 5.272 3.59h34.074c1.935 0 4.375-1.725 5.02-3.548l6.638-18.758c0.186-0.525 0.139-0.845 0.088-0.918-0.052-0.073-0.338-0.223-0.895-0.223h-46.994c-1.993 0-3.609-1.616-3.609-3.609s1.616-3.609 3.609-3.609h46.994c2.843 0 5.317 1.194 6.789 3.275 1.471 2.081 1.771 4.811 0.822 7.491l-6.638 18.758c-1.658 4.686-6.852 8.358-11.824 8.358z"/>
                            <circle cx="35.267" cy="77.964" r="8.02"/>
                            <circle cx="86.689" cy="77.964" r="8.02"/>
                            <path d="m78.489 43.552h-31.877c-0.997 0-1.804-0.808-1.804-1.804 0-0.997 0.808-1.804 1.804-1.804h31.877c0.997 0 1.804 0.808 1.804 1.804s-0.807 1.804-1.804 1.804z"/>
                            <path d="m76.051 52.574h-26.187c-0.996 0-1.804-0.808-1.804-1.804 0-0.997 0.808-1.804 1.804-1.804h26.188c0.997 0 1.804 0.808 1.804 1.804-1e-3 0.996-0.808 1.804-1.805 1.804z"/>
                        </svg>
                    </a>
                    <span id="cart-items-count-container">
                        {{-- <CartItemsCount /> in /resources/js/components/CartItemsCount --}}
                    </span>
                </div>
            @endapp

            <div id="show-phone-button-container" data-phone="{{ config('admin.phone') }}">
                {{-- <ShowPhoneButton phone={phone} /> in /resources/js/components/ShowPhoneButton/ --}}
                <button class="btn btn-warning" type="button" style="width: 170px; margin-right: 35px;">Show our phone</button>
            </div>

            <form class="d-flex" action="{{ $action }}" method="get">
                <div id="catalog-search-container">
                    {{-- <SearchCatalogInput /> in /resources/js/components/SearchCatalogInput/ --}}
                    <input name="query" required class="form-control me-2" type="search" placeholder="Search in catalog...">
                </div>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>