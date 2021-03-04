<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Database\Factories\OrderFactory;
use Carbon\Carbon;

class Booking extends Model
{
  // TODO: add @var things for all models
  use HasFactory;

  public function getFormattedTimeAttribute(): string
  {
    $formatted = preg_replace(
      '/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/',
      '$3.$2.$1 $4:$5',
      $this->time
    );

    return $formatted;
  }

  public function getIsPastAttribute(): bool
  {
    $orderTime = Carbon::createFromFormat('Y-m-d H:i:s', $this->time);
    $currentTime = Carbon::now();

    $hasOrderTimePassed = $currentTime > $orderTime;

    return $hasOrderTimePassed;
  }
}
