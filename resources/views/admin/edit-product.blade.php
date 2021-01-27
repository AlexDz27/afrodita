@php
    /** @var $product \App\Models\Product */
    use App\Http\Controllers\AdminController;

    $url = action([AdminController::class, 'editProduct'], ['id' => $product->id]);
@endphp

@extends('layouts.main')

@section('title')
    @parent Edit Product
@endsection

@section('content')
    <div style="margin-left: 70px;">
        <h1>Editing {{ $product->name }}</h1>

        <form action="{{ $url }}" method="post">
            @csrf

            <div class="mb-3 col-3">
                <label for="productName" class="form-label">Product name</label><br>
                <input name="name" value="{{ $product->name }}" id="productName">
            </div>
            <div class="mb-3 col-3">
                <label for="productDescription" class="form-label">Product description</label>
                <textarea name="description" class="form-control" id="productDescription" rows="6">
                    {{ $product->description }}
                </textarea>
            </div>

            <h3>Attributes:</h3>
            @foreach ($product->attributes as $key => $value)
                <div class="mb-3 col-3">
                    <label for="attribute" class="form-label">{{ ucfirst(str_replace('_', ' ', $key)) }}</label><br>
                    <input name="attributes[{{ $key }}]" value="{{ $value}}" id="attribute">
                </div>
            @endforeach
            <div id="add-attributes-button-container">
                <button class="btn btn-primary" type="button">+ Add more attributes</button>
            </div>

            <br>
            <button class="btn btn-success" type="submit">Submit</button>
        </form>
    </div>
@endsection