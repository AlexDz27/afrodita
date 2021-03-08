<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrdersController extends Controller
{
  public function submit(Request $request)
  {
    $payloadOrder = $request->post();

    $order = new Order();
    $order->time_added = now()->toDateTimeString();
    $order->items = json_encode($payloadOrder['items']);
    $order->total_sum = $payloadOrder['totalSum'];
    $order->name = $payloadOrder['contactInfo']['name'];
    $order->phone = $payloadOrder['contactInfo']['phone'];
    $order->email = $payloadOrder['contactInfo']['email'];

    $result = $order->save();

    return response()->json([
      'success' => $result,
      'message' => $result ? 'Order submitted successfully' : 'Problem submitting order'
    ]);
  }
}
