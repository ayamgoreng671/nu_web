<?php

namespace App\Filament\Pages;

use Filament\Pages\Page;
use Filament\Widgets;

class Dashboard extends Page
{
    protected static ?string $navigationIcon = 'heroicon-o-home'; // Change the sidebar icon
    protected static string $view = 'filament.pages.custom-dashboard'; // Custom Blade view

    protected function getHeaderWidgets(): array
    {
        return [
            Widgets\AccountWidget::class,
            // \App\Filament\Widgets\LatestNewsWidget::class,
            // \App\Filament\Widgets\StatsOverviewWidget::class, // Example custom widget
        ];
    }

}