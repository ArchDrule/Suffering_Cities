<script>
    import { Tooltip } from "flowbite-svelte";
    import { onMount } from "svelte";
    import { TrashBinOutline, FileCopyAltOutline } from "flowbite-svelte-icons";

    //картинки
    import headerVignette from "@/assets/vignettes/header-vignette.png";
    import doctor from "@/assets/heroes/doctor.png";
    import kolya from "@/assets/heroes/kolya.png";

    let cities = $state([]);

    const copyCity = async (city) => {
        await navigator.clipboard.writeText(city);
    };

    const deleteCity = (city) => {
        cities = cities.filter((c) => c !== city);
        localStorage["cities"] = JSON.stringify(cities);
    };

    onMount(() => {
        if (localStorage["cities"]) cities = JSON.parse(localStorage["cities"]);
    });
</script>

<img
    src={headerVignette}
    alt="header-vignette"
    class="absolute w-[344px] mt-5 -scale-100"
/>

<!-- *Чумной доктор -->
<img
    src={doctor}
    alt="doctor"
    class="absolute h-[284px] mt-12 -translate-x-[424px] hero-shd"
/>

<!-- *Коля -->
<img
    src={kolya}
    alt="kolya"
    class="absolute h-[284px] mt-12 translate-x-[452px] hero-shd-r"
/>

<div
    class="w-[532px] h-[224px] mt-[86px]
flex flex-col flex-wrap gap-5 overflow-x-auto"
>
    {#if cities.length === 0}
        <h1 class="text-shd text-center mt-[42px]">Города не обнаружены</h1>
        <h3 class="text-shd text-center">
            Попробуйте сгенерировать свой новый город в <a
                href="/"
                class="text-[#fac24a]"><cap>Г</cap>енераторе</a
            >
        </h3>
    {:else}
        {#each cities as city (cities.indexOf(city))}
            <span class="flex items-center gap-1.5">
                <h3 class="text-shd capitalize">{city}</h3>
                <FileCopyAltOutline
                    onclick={() => copyCity(city)}
                    class="w-6 cursor-pointer text-[#fac24a] outline-0 active:scale-150 transition-all duration-100"
                    id={`copy-${cities.indexOf(city)}`}
                />
                <Tooltip
                    triggeredBy={`#copy-${cities.indexOf(city)}`}
                    class="max-w-[224px] p-2 border-1 border-[#F3EFD4] bg-[#212121] text-[#F3EFD4] text-center"
                    >Копировать</Tooltip
                >
                <TrashBinOutline
                    onclick={() => deleteCity(city)}
                    class="w-6 cursor-pointer text-[#212121] -translate-x-1.5 outline-0 active:scale-150 transition-all duration-100"
                    id={`delete-${cities.indexOf(city)}`}
                />
                <Tooltip
                    triggeredBy={`#delete-${cities.indexOf(city)}`}
                    class="max-w-[224px] p-2 border-1 border-[#F3EFD4] bg-[#212121] text-[#F3EFD4] text-center"
                    >Удалить</Tooltip
                >
            </span>
        {/each}
    {/if}
</div>
