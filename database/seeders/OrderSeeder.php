<?php

namespace Database\Seeders;

use App\Models\Order;
use Database\Factories\OrderFactory;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $orderFactory = new OrderFactory();

    $orderFactory->count(20)->create();
  }
}
