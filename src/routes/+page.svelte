<script>
    import ImageGrid from "$lib/Components/ImageGrid/ImageGrid.svelte";
    import data from "$lib/data/image_data.json";

    const listing = data.map(listing => listing.images)
</script>

<section class="w-screen flex justify-center items-center flex-col">
    <ImageGrid images={listing[0]} />
</section>
