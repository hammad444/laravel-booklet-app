<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class BookableTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Factory(Bookable::class,100)->create();
        \App\Models\Bookable::factory(100)->create();
    }
}
