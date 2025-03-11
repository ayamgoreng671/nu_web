<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\News;
use App\Models\Category;
use Illuminate\Support\Str;

class NewsFactory extends Factory
{
    protected $model = News::class;

    public function definition()
    {
        $title = $this->faker->sentence(6);
        
        return [
            'category_id' => Category::inRandomOrder()->first()->id ?? 1,
            'user_id' => 1,
            'title' => $title,
            'slug' => Str::slug($title),
            'content' => $this->generateLongContent(), // Use custom function
            'image' => 'images/default.jpg',
            // 'published_at' => now(),
        ];
    }

    private function generateLongContent()
    {
        return collect($this->faker->paragraphs(5)) // Generate 5 long paragraphs
            ->map(fn($p) => str_repeat($p . ' ', 3)) // Repeat each paragraph 3 times
            ->implode("\n\n"); // Separate paragraphs with double newlines
    }
}
