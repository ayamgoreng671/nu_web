<?php

namespace App\Filament\Widgets;

use Filament\Widgets\Widget;
use App\Models\News;

class LatestNewsWidget extends Widget
{
    protected static string $view = 'filament.widgets.latest-news-widget'; // Ensure correct Blade path

    protected function getViewData(): array
    {
        return [
            'latestNews' => News::latest()->first()->get(), // Fetch latest news
        ];
    }
}

