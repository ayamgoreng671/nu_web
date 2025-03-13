<?php


namespace App\Filament\Widgets;

use Filament\Widgets\Widget;
use App\Models\News;
use App\Models\User;
use App\Models\Category;

class StatsOverviewWidget extends Widget
{
    protected static string $view = 'filament.widgets.stats-overview-widget'; // Use custom Blade view

    public function getViewData(): array
    {
        return [
            'totalNews' => News::count(),
            'totalUsers' => User::count(),
            'totalCategories' => Category::count(),
        ];
    }
}
