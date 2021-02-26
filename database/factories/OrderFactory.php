<?php

namespace Database\Factories;

use App\Models\Order;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
{
  /**
   * The name of the factory's corresponding model.
   *
   * @var string
   */
  protected $model = Order::class;

  /**
   * Define the model's default state.
   *
   * @return array
   */
  public function definition()
  {
    return [
      'service_category' => $this->faker->word(),
      'service' => $this->faker->word(),
      'time' => $this->faker->dateTimeBetween('now', '+03 days'),
      'name' => $this->faker->word(),
      'phone' => $this->faker->e164PhoneNumber,
      'email' => $this->faker->email
    ];
  }
}
