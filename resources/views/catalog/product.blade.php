@extends('layouts.main')

@section('title')
    @parent Products > {{ $product->name }}
@endsection

@section('content')
    <h1>{{ $product->name }}</h1>

    <p>{{ $product->description }}</p>

    @if ($product->photos)
        @foreach ($product->photos as $photo)
            <img src="{{ $photo['file_path'] }}" alt="{{ $product->name }}">
        @endforeach
    @endif
@endsection