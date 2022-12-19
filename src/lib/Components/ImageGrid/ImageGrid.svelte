<script lang="ts">
    import { Button, Carousel, Modal } from 'flowbite-svelte';
    
    export let images: any[];

    let innerWidth: number;
    let showCaptions = false;
    let showThumbs = false;
    let showIndicators = false;
    let defaultModal = false;

    const generalItemStyle = "min-h-full min-w-full cursor-pointer";

    const imgSm = images.map((item, index) => {
        const newId = {id:index}
        const newObj = Object.assign(item, newId)
        return newObj;
    })

    function handleClick(){
        defaultModal = true
    }
   
</script>

<svelte:window bind:innerWidth/>

<section class="max-w-screen-lg md:px-8">
    {#if innerWidth < 480}
        <Carousel images = {imgSm} {showCaptions} {showThumbs} {showIndicators} />

        {:else}
            <section class="rounded-2xl border border-transparent overflow-hidden relative">
                <section class="grid grid-cols-4 grid-rows-2 w-full gap-2">
                    {#each images as item, index}
                        {#if index < 5}
                        
                        <div  
                            on:click={handleClick} 
                            on:keydown={handleClick}
                            class={ index === 0 ? `first:col-span-2 first:row-span-2 ${generalItemStyle}`  : generalItemStyle}
                            >
                            <img src={item.imgurl} alt={item.tags} />
                        </div>

                        {/if}
                    {/each}
                </section>
            
                <span class="absolute right-4 bottom-4">
                    <Button color="light" on:click={handleClick}>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg> Show all photos
                    </Button>
                </span>
            
            </section>
        
    {/if}
</section>

<Modal title=" " bind:open={defaultModal} size="lg" backdropClasses="backdrop-blur-lg"  autoclose>
    <section class="grid grid-cols-2 grid-rows-2 w-full gap-2 ">
        {#each images as item, index} 

            <img src={item.imgurl} alt={item.tags} class={ index % 3 === 0 ? `col-span-2 row-span-2 min-w-full ${generalItemStyle}` : generalItemStyle } />   

        {/each}
    </section>
</Modal>

