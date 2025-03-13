{{-- <x-filament::page> --}}
{{-- <div class="grid grid-cols-2 gap-4">
        <!-- Welcome Card -->
        <div class="p-6 bg-white rounded-lg shadow">
            <h2 class="text-xl font-bold">Welcome to the Admin Panel</h2>
            <p class="text-gray-500">Manage your news website efficiently.</p>
        </div>

        <!-- Latest News Widget -->
        <x-filament::section>
            @livewire(\App\Filament\Widgets\LatestNewsWidget::class)
        </x-filament::section>
    </div> --}}


{{-- </x-filament::page> --}}
<x-filament::page>
    {{-- @vite(['resources/css/app.css', 'resources/js/app.js']) --}}
    <div>

        @livewire(\App\Filament\Widgets\StatsOverviewWidget::class)

    </div>
</x-filament::page>
