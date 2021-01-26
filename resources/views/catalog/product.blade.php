@extends('layouts.main')

@section('title')
    @parent Products > {{ $product->name }}
@endsection

@section('content')
    <h1>{{ $product->name }}</h1>

    <p>{{ $product->description }}</p>
@endsection