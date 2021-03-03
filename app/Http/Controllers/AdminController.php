<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Exception;

class AdminController extends Controller
{
  public function dashboard()
  {
    $products = Product::all();

    return view('admin.dashboard', [
      'breadCrumbTitle' => 'Dashboard',
      'products' => $products
    ]);
  }

  public function editProduct($id, Request $request)
  {
    $product = Product::find($id) ?? throw new NotFoundHttpException();

    if ($request->isMethod('post')) {
      $product->name = $request->input('name');
      $product->description = $request->input('description');
      $product->attributes = $request->input('attributes');

      $product->save();

      return back();
    }

    return view('admin.edit-product', [
      'breadCrumbTitle' => "Editing {$product->name}",
      'product' => $product
    ]);
  }

  public function orders(Request $request)
  {
    define('TIMES', [
      'NONE' => null,
      'PAST' => 'past',
      'TODAY' => 'today',
      'TOMORROW' => 'tomorrow',
      'DAY_AFTER_TOMORROW' => 'day-after-tomorrow',
      'SPECIFIC_DATE' => 'specific-date',
      'ALL_TIME' => 'all-time',
    ]);

    $time = $request->get('time');

    $ordersQuery = Order::orderBy('time', 'desc');
    if ($time === TIMES['PAST']) {
      $ordersQuery = $ordersQuery->whereDate('time', '<', Carbon::now());
    }
    if ($time === TIMES['TODAY']) {
      $ordersQuery = $ordersQuery->whereDate('time', '=', Carbon::now());
    }
    if ($time === TIMES['TOMORROW']) {
      $ordersQuery = $ordersQuery->whereDate('time', '=', Carbon::tomorrow());
    }
    if ($time === TIMES['DAY_AFTER_TOMORROW']) {
      $ordersQuery = $ordersQuery->whereDate('time', '=', Carbon::now()->addDays(2));
    }
    if ($time === TIMES['SPECIFIC_DATE']) {
      $date = $request->get('date');
      $ordersQuery = $ordersQuery->whereDate('time', '=', Carbon::createFromFormat('Y-m-d', $date));
    }

    $orders = $ordersQuery->get();

    return view('admin.orders', [
      'breadCrumbTitle' => 'Orders',
      'chosenTime' => $time,
      'orders' => $orders
    ]);
  }
}
