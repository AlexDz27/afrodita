@php
/** @var Illuminate\Routing\Route $route */
@endphp

@unless ($route->named('home'))
    <div class="breadcrumb-container container-fluid">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>

                @if ($route->named('catalog.*') && !$route->named('catalog.catalog'))
                    <li class="breadcrumb-item"><a href="{{ route('catalog.catalog') }}">Catalog</a></li>
                @endif

                @if ($route->named('catalog.servicesShow'))
                    <li class="breadcrumb-item"><a href="{{ route('catalog.services') }}">Services</a></li>
                @endif

                @if ($route->named('catalog.productsShow'))
                    <li class="breadcrumb-item"><a href="{{ route('catalog.products') }}">Products</a></li>
                @endif

                <li class="breadcrumb-item active">{{ $breadCrumbTitle }}</li>
            </ol>
        </nav>
    </div>
@endunless