@php
use Illuminate\Support\Facades\Route;

$route = Route::currentRouteName();
@endphp

@if ($route === 'home' || $route === 'dashboard')
    <!-- Load React. -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@17/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js" crossorigin></script>
    <!-- Load Babel to enable JSX. -->
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

    <!-- Load main JS file -->
    <script src="/js/index.js" type="text/babel"></script>
@endif

<footer class="footer mt-auto py-3 bg-light container-fluid text-center">
    <p>2015 - {{ now()->year }} | {{ config('app.name_home') }}</p>
</footer>