@extends('layouts.main')

@section('title')
    @parent Catalog
@endsection

@section('content')
    <h1>Services</h1>
    @foreach ($services as $service)
        <h2>{{ $service->name }}</h2>
        <p>{{ $service->description }}</p>
    @endforeach
@endsection