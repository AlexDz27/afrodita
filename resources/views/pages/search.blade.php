@php
use Illuminate\Support\Str;
@endphp

@extends('layouts.main')

@section('title')
    @parent Search
@endsection

@section('content')
    <div class="container mt-5">
        <div class="row">
            <div class="col">
                <h1>You've typed: {{ $query }}</h1>

                @forelse ($items as $item)
                    <a href="{{ url("/catalog/{$item->type}s/{$item->id}") }}"><h2>{{ $item->name }}</h2></a>
                    <p>{{ Str::words($item->description, 10, '...') }}</p>
                @empty
                    <h2>Sorry, nothing has been found.</h2>
                @endforelse
            </div>
        </div>
    </div>
@endsection