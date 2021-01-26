@php
// TODO: how to refactor?
use Illuminate\Support\Facades\Route;

$route = Route::currentRouteName();
$isCatalogRoute = Route::getCurrentRoute()->action['prefix'] === '/catalog';
$isServicesRoute = Route::currentRouteName() === 'servicesShow';
$isProductsRoute = Route::currentRouteName() === 'productsShow';
@endphp

@if ($route !== 'home')
    <div class="breadcrumb-container container-fluid">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
                @if ($isCatalogRoute)
                    <li class="breadcrumb-item"><a href="{{ route('catalog') }}">Catalog</a></li>
                @endif
                @if ($isServicesRoute)
                    <li class="breadcrumb-item"><a href="{{ route('services') }}">Services</a></li>
                @endif
                @if ($isProductsRoute)
                    <li class="breadcrumb-item"><a href="{{ route('products') }}">Products</a></li>
                @endif
                <li class="breadcrumb-item active">{{ $breadCrumbTitle }}</li>
            </ol>
        </nav>
    </div>
@endif