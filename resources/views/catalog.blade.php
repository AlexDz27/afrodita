@extends('layouts.main')

@section('title')
    @parent Catalog
@endsection

@section('content')
    <h1>Catalog</h1>

    <h2>Here you can view our services' and products' categories.</h2>

    <div class="container mt-5">
        <div class="row">
            <div class="col text-center">
                <h3><a class="display-1" href="{{ route('services') }}">Services</a></h3>
            </div>

            <div class="col text-center">
                <h3><a class="display-1" href="{{ route('products') }}">Products</a></h3>
            </div>
        </div>
    </div>
@endsection