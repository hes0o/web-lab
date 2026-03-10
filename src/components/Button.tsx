<section class="space-y-8 p-8">
    <h2 class="text-2xl font-bold">Button</h2>

    <!-- Boyut varyantlari -->
    <div class="flex flex-wrap items-end gap-4">
        <Button size="sm">Kucuk</Button>
        <Button size="md">Orta</Button>
        <Button size="lg">Buyuk</Button>
    </div>

    <!-- Renk varyantlari -->
    <div class="flex flex-wrap gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="ghost">Ghost</Button>
    </div>

    <!-- Disabled durumu -->
    <div class="flex flex-wrap gap-4">
        <Button variant="primary" disabled
            class="opacity-50 cursor-not-allowed">
            Disabled
        </Button>
    </div>
</section>