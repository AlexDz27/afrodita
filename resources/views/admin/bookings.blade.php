@extends('layouts.main')

@section('title')
  @parent Dashboard
@endsection

@section('content')
  <h1>Bookings</h1>

  <div>
    <a class="btn {{ $chosenTime === 'past' ? 'btn-primary' : 'btn-outline-primary' }}" href="?time=past">Past</a>
    <a class="btn {{ $chosenTime === 'today' ? 'btn-primary' : 'btn-outline-primary' }}" href="?time=today">Today</a>
    <a class="btn {{ $chosenTime === 'tomorrow' ? 'btn-primary' : 'btn-outline-primary' }}" href="?time=tomorrow">Tomorrow</a>
    <a class="btn {{ $chosenTime === 'day-after-tomorrow' ? 'btn-primary' : 'btn-outline-primary' }}" href="?time=day-after-tomorrow">Day after tomorrow</a>
    <span id="specific-date-link-container">
      <a class="btn {{ $chosenTime === 'specific-date' ? 'btn-primary' : 'btn-outline-primary' }}" href="?time=specific-date&date=">Specific date</a>
    </span>
    <a class="btn {{ ($chosenTime === 'all-time' || $chosenTime === null)  ? 'btn-primary' : 'btn-outline-primary' }}" href="?time=all-time">All time</a>
  </div>

  <table class="table">
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
    @foreach ($bookings as $booking)
      <tr class="{{ $booking->is_past ? 'table-warning text-muted' : '' }}">
        <th scope="row">{{ $booking->id }}</th>
        <td>{{ $booking->formatted_time }}</td>
        <td>{{ $booking->service_category }}</td>
        <td>{{ $booking->service }}</td>
        <td>{{ $booking->name }}</td>
        <td>{{ $booking->phone }}</td>
        <td>{{ $booking->email }}</td>
      </tr>
    @endforeach
    </tbody>

  </table>

  {{ $bookings->links() }}
@endsection