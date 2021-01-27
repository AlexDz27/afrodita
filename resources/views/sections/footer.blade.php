@php
use Illuminate\Support\Facades\Route;

$route = Route::currentRouteName();
@endphp

<footer class="footer mt-auto py-3 bg-light container-fluid text-center">
    <p>2015 - {{ now()->year }} | {{ config('app.name_home') }}</p>
</footer>

@if ($route === 'home')
    <script src="/js/index.js"></script>
@endif