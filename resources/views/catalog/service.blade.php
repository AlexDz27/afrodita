@extends('layouts.main')

@section('title')
    @parent Services > {{ $service->name }}
@endsection

@section('content')
    <h1>{{ $service->name }}</h1>

    <p>{{ $service->description }}</p>

    @if ($service->photos)
        @foreach ($service->photos as $photo)
            <img src="{{ $photo['file_path'] }}" alt="{{ $service->name }}">
        @endforeach
    @endif
@endsection