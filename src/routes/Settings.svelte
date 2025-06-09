<script>
    import { onMount } from "svelte";
    import { slide } from "svelte/transition";

    //картинки
    import headerVignette from "@/assets/vignettes/header-vignette.png";
    import doctor from "@/assets/heroes/doctor.png";
    import kolya from "@/assets/heroes/kolya.png";

    let vulgarity = $state(localStorage["vulgarity"]);

    $effect(() => {
        localStorage["vulgarity"] = vulgarity;
    });

    onMount(() => {
        vulgarity = JSON.parse(localStorage["vulgarity"]);
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

<!-- *Параметры -->
<div class="w-[532px] my-auto flex flex-col gap-6">
    <div class="w-full flex justify-between items-center">
        <span class="flex gap-1.5">
            <h3 class="mr-1.5 text-[#23201E]">⦿</h3>
            <h3 class="text-shd">Национальный колорит</h3>
        </span>

        <h3 class="text-shd">*Пока только русский*</h3>
    </div>

    <div class="w-full flex justify-between items-center">
        <span class="flex gap-1.5">
            <h3 class="mr-1.5 text-[#23201E]">⦿</h3>
            <h3 class="text-shd">Уровень вульгарности</h3>
        </span>

        <div>
            <input
                type="range"
                bind:value={vulgarity}
                min="0"
                max="2"
                style={`background-size: ${100 * (vulgarity / 2)}% 100%;`}
            />

            <!-- <p>Уровень {vulgarity + 1}</p> -->
            {#if vulgarity === 0}
                <p
                    transition:slide={{ delay: 0, duration: 200 }}
                    class="text-center mt-1 text-shd"
                >
                    (безобидный)
                </p>
            {:else if vulgarity === 1}
                <p
                    transition:slide={{ delay: 0, duration: 200 }}
                    class="text-center mt-1 text-shd"
                >
                    (стандартный)
                </p>
            {:else}
                <p
                    transition:slide={{ delay: 0, duration: 200 }}
                    class="text-center mt-1 text-shd"
                >
                    (с матюками)
                </p>
            {/if}
        </div>
    </div>

    <div class="w-full flex justify-between items-center">
        <span class="flex gap-1.5">
            <h3 class="mr-1.5 text-[#23201E]">⦿</h3>
            <h3 class="text-shd">Презентабельность</h3>
        </span>

        <h3 class="text-shd">*В разработке*</h3>
    </div>
</div>

<style>
    input[type="range"] {
        -webkit-appearance: none;
        width: 200px;
        height: 7px;
        background: #23201e;
        border-radius: 12px;
        background-image: none;
        /* background-size: 30% 100%; */
        background-repeat: no-repeat;
    }

    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 22px;
        width: 22px;
        border-radius: 50%;
        border: 2px solid #23201e;
        background: #d33232;
        cursor: pointer;
    }

    input[type="range"]::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        box-shadow: none;
        border: none;
        background: transparent;
    }
</style>
