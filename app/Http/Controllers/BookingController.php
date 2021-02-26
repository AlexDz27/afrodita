<?php

namespace App\Http\Controllers;

use App\Models\Order;
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
    sleep(1);

    $payloadOrder = $request->post();

    $order = new Order();
    // todo: maybe find a way to do $order->serviceCategory
    $order->service_category = $payloadOrder['details']['serviceCategory'];
    $order->service = $payloadOrder['details']['service'];
    $order->time = Formatter::formatOrderTimeForDb($payloadOrder['details']['time']);
    $order->name = $payloadOrder['contactInfo']['name'];
    $order->phone = $payloadOrder['contactInfo']['phone'];
    $order->email = $payloadOrder['contactInfo']['email'];

    $result = $order->save();

    return response()->json([
      'success' => $result,
      'message' => $result ? 'Order submitted successfully' : 'Problem submitting reminder'
    ]);
  }
}
