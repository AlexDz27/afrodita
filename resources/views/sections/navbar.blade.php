@php
// TODO: how to refactor?
$route = \Illuminate\Support\Facades\Route::currentRouteName();
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
                <li class="nav-item {{ $route === 'catalog' ? 'active' : '' }}">
                    <a class="nav-link" href="{{ route('catalog') }}">Catalog</a>
                </li>
            </ul>

            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search in catalog...">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>