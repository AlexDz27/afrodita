<?php

// TODO: make a function, not class. Got to deal with proper autoloading...

namespace App\Utils;

class Formatter {
  public static function formatOrderTimeForDb(string $time) {
    [$date, $time] = explode(' ', $time);

    [$day, $month, $year] = explode('.', $date);
    $formattedDate = implode('-', [$year, $month, $day]);

    $formattedTime = $formattedDate . ' ' . $time . ':00';

    return $formattedTime;
  }
}