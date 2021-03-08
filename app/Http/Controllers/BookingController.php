<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;
use App\Utils\Formatter;

class BookingController extends Controller
{
  public function index()
  {
    return view('booking.index');
  }

  public function submit(Request $request)
  {
    $payloadOrder = $request->post();

    $booking = new Booking();
    // todo: maybe find a way to do $order->serviceCategory
    $booking->service_category = $payloadOrder['details']['serviceCategory'];
    $booking->service = $payloadOrder['details']['service'];
    $booking->time = Formatter::formatOrderTimeForDb($payloadOrder['details']['time']);
    $booking->name = $payloadOrder['contactInfo']['name'];
    $booking->phone = $payloadOrder['contactInfo']['phone'];
    $booking->email = $payloadOrder['contactInfo']['email'];

    $result = $booking->save();

    return response()->json([
      'success' => $result,
      'message' => $result ? 'Order submitted successfully' : 'Problem submitting booking'
    ]);
  }
}
