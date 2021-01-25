@php
// TODO: how to refactor?
$route = \Illuminate\Support\Facades\Route::currentRouteName();
@endphp

@if ($route !== 'home')
    <div class="breadcrumb-container container-fluid">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
                <li class="breadcrumb-item active">{{ $title }}</li>
            </ol>
        </nav>
    </div>
@endif