@extends('layouts.main')

@section('title')
    @parent Catalog > Products
@endsection

@section('content')
    <h1>Products</h1>

    @foreach ($products as $product)
        <h2><a href="{{ url("/catalog/products/{$product->id}") }}">{{ $product->name }}</a></h2>
        <p>{{ $product->description }}</p>
        @if ($product->photos)
            <img src="{{ $product->photos[0]['file_path'] }}" alt="{{ $product->name }}" width="150">
        @endif
    @endforeach
@endsection