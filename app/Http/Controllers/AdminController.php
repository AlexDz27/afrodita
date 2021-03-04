<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

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

  public function bookings(Request $request)
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

    $bookingsQuery = Booking::orderBy('time', 'desc');
    if ($time === TIMES['PAST']) {
      $bookingsQuery->whereDate('time', '<', Carbon::now());
    }
    if ($time === TIMES['TODAY']) {
      $bookingsQuery->whereDate('time', '=', Carbon::now());
    }
    if ($time === TIMES['TOMORROW']) {
      $bookingsQuery->whereDate('time', '=', Carbon::tomorrow());
    }
    if ($time === TIMES['DAY_AFTER_TOMORROW']) {
      $bookingsQuery->whereDate('time', '=', Carbon::now()->addDays(2));
    }
    if ($time === TIMES['SPECIFIC_DATE']) {
      $date = $request->get('date');
      $bookingsQuery->whereDate('time', '=', Carbon::createFromFormat('Y-m-d', $date));
    }

    $bookings = $bookingsQuery->paginate(10)->withQueryString();

    return view('admin.bookings', [
      'breadCrumbTitle' => 'Bookings',
      'chosenTime' => $time,
      'bookings' => $bookings
    ]);
  }
}
