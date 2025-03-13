<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class News extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'slug', 'content', 'image', 'category_id', 'user_id'];
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($news) {
            $news->slug = Str::slug($news->title);
        });

        static::updating(function ($news) {
            // Only update the slug if the title has changed
            // if ($news->isDirty('title')) {
            //     $news->slug = Str::slug($news->title);
            // }
            $news->slug = Str::slug($news->title);

        });
    }
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
