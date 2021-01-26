@extends('layouts.main')

@section('title')
    @parent Catalog > Products
@endsection

@section('content')
    <h1>Products</h1>

    @foreach ($products as $product)
        <h2><a href="{{ url("/catalog/products/{$product->id}") }}">{{ $product->name }}</a></h2>
        <p>{{ $product->description }}</p>
    @endforeach
@endsection