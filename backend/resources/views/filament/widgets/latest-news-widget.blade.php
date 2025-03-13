<x-filament-widgets::widget>
    <x-filament::card>
        <h3 class="text-lg font-bold">Latest News</h3>
        <ul class="mt-2">
            {{-- {{ dd($latestNews) }} --}}
            @foreach ($latestNews as $news)
                <li class="text-gray-600">{{ $news->title }}</li>
            @endforeach
        </ul>
    </x-filament::card>
</x-filament-widgets::widget>
