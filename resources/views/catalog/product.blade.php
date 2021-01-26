@extends('layouts.main')

@section('title')
    @parent Products > {{ $product->name }}
@endsection

@section('content')
    <h1>{{ $product->name }}</h1>

    <p>{{ $product->description }}</p>

    @if ($product->attributes)
        <h2>Attributes:</h2>
        <table class="table table-sm" style="max-width: 320px;">
            <tbody>
            @foreach ($product->attributes as $key => $value)
                <tr>
                    {{-- TODO: refactor --}}
                    <th scope="row">{{ ucfirst(str_replace('_', ' ', $key)) }}</th>
                    <td>{{ $value }}</td>
                </tr>
            @endforeach
            </tbody>
        </table>
    @endif

    @if ($product->photos)
        <h2>Photos:</h2>
        @foreach ($product->photos as $photo)
            <img src="{{ $photo['file_path'] }}" alt="{{ $product->name }}">
        @endforeach
    @endif
@endsection