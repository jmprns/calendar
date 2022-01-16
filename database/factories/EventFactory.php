<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $date = new Carbon($this->faker->date());

        return [
            'title' => $this->faker->sentence(),
            'end' => $date->copy()->addDays($this->faker->randomDigit()),
            'start' => $date->copy()->subDays($this->faker->randomDigit()),
            'days' => $this->faker->randomElements([1,2,3,4,5,6,7], $this->faker->numberBetween(1, 7))
        ];
    }
}
