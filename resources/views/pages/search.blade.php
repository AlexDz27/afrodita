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
                <h1 style="margin-bottom: 50px;">You've typed: {{ $query }}</h1>

                @forelse ($items as $item)
                    <div style="display: flex; margin-bottom: 20px;">
                        @if ($item->photo)
                            <img style="margin-right: 22px;" src="{{ $item->photo }}" alt="{{ $item->name }}" width="100">
                        @endif
                        <div style="display: flex; flex-direction: column;">
                            <a href="{{ url("/catalog/{$item->type}s/{$item->id}") }}"><h2>{{ $item->name }}</h2></a>
                            <p>{{ Str::words($item->description, 10, '...') }}</p>
                        </div>
                    </div>
                @empty
                    <h2>Sorry, nothing has been found.</h2>
                @endforelse
            </div>
        </div>
    </div>
@endsection