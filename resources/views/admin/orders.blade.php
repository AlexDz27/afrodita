@extends('layouts.main')

@section('title')
  @parent Dashboard
@endsection

@section('content')
  <h1>Orders</h1>

  <table class="table table-striped">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Time</th>
      <th scope="col">Category</th>
      <th scope="col">Service</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
    </tr>
    </thead>
    <tbody>
    @foreach ($orders as $order)
      <tr>
        <th scope="row">{{ $order->id }}</th>
        <td>{{ $order->time }}</td>
        <td>{{ $order->service_category }}</td>
        <td>{{ $order->service }}</td>
        <td>{{ $order->name }}</td>
        <td>{{ $order->phone }}</td>
        <td>{{ $order->email }}</td>
      </tr>
    @endforeach
    </tbody>

  </table>

{{--  {{ $orders->links() }}--}}
@endsection