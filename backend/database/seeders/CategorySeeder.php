<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    public function run()
    {
        $categories = [
            'Khutbah Jumat',
            'Haji & Umrah',
            'Ramadhan',
            'Aqidah',
            'Fiqh',
            'Tafsir Al-Quran',
        ];

        foreach ($categories as $category) {
            Category::create([
                'name' => $category,
                'slug' => Str::slug($category), // Generate slug
            ]);
        }
    }
}
