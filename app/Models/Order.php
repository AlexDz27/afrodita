<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
  use HasFactory;

  public function getFormattedTimeAddedAttribute(): string
  {
    $formatted = preg_replace(
      '/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/',
      '$3.$2.$1 $4:$5',
      $this->time_added
    );

    return $formatted;
  }

  public function getItemsAttribute($items): array
  {
    $items = json_decode($items);

    return $items;
  }
}
