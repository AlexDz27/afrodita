@extends('layouts.main')

@section('title')
    @parent Dashboard
@endsection

@section('content')
    <h1 style="margin-bottom: 250px;">
        Welcome to dashboard, Admin! Here you can edit products.<br>
        Or go to <a href="{{ url('/admin/bookings?time=today') }}">Bookings page</a><br>
        Or go to <a href="{{ url('/admin/orders?time=today') }}">Orders page</a><br>
    </h1>

    @foreach ($products as $product)
        <h2>Edit <a href="{{ url("/admin/products/edit/{$product->id}") }}">{{ $product->name }}</a></h2>
    @endforeach
@endsection