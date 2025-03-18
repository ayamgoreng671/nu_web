<x-filament-widgets::widget>
    <x-filament::section>

        <div class="grid grid-cols-3 gap-4">
            <div class="p-6 text-center rounded-lg ">
                <h3 class="text-lg font-bold text-blue-600">Total News</h3>
                <p class="text-3xl font-bold">{{ $totalNews }}</p>
                <p class="text-gray-500">Published articles</p>
            </div>
            <div class="p-6 text-center rounded-lg ">
                <h3 class="text-lg font-bold text-green-600">Total Users</h3>
                <p class="text-3xl font-bold">{{ $totalUsers }}</p>
                <p class="text-gray-500">Registered users</p>
            </div>
            <div class="p-6 text-center rounded-lg ">
                <h3 class="text-lg font-bold text-purple-600">Total Categories</h3>
                <p class="text-3xl font-bold">{{ $totalCategories }}</p>
                <p class="text-gray-500">News categories</p>
            </div>


        </div>


    </x-filament::section>
</x-filament-widgets::widget>
