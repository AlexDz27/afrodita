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

                @forelse ($searchables as $searchable)
                    <a href="{{ url("/catalog/{$searchable->type}s/{$searchable->id}") }}"><h2>{{ $searchable->name }}</h2></a>
                    <p>{{ Str::words($searchable->description, 10, '...') }}</p>
                @empty
                    <h2>Sorry, nothing has been found.</h2>
                @endforelse
            </div>
        </div>
    </div>
@endsection