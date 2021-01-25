@extends('layouts.main')

@section('title')
  @parent Services > {{ $service->name }}
@endsection

@section('content')
  <h1>{{ $service->name }}</h1>

  <p>{{ $service->description }}</p>
@endsection