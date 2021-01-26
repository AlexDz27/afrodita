<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            'name' => 'Gel nail polish "Gelly Grattol Diamond" 3',
            'description' => '3 Gel polish GRATTOL Professional- German quality, a completely new generation, which will not leave anyone indifferent. The rich palette of Grattol gel varnishes has an incredible density. Grattol Professional is easy to apply, most colors fall amazingly in one layer, which allows you to look very natural and natural on your nails. GRATTOL Professional has achieved this effect due to its high pigment content. Grattol has a thicker and denser texture than other famous brands. Subject to the correct application technology, the durability of the coating will be at least 5-6 weeks. Volume 9 ml. Shelf life: 36 months Storage: Keep out of reach of children at a temperature of 2-24 ° C',
            'photos' => json_encode([
                ['file_path' => '/img/products/gel-nail-polish-gelly_grattol-diamond.jpg'],
            ]),
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'attributes' => json_encode([
                'manufacturer' => 'Russian',
                'type' => 'middle-market'
            ])
        ]);
    }
}
