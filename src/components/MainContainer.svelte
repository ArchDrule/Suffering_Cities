<script>
    //компоненты
    import Selector from "./Selector.svelte";

    //картинки
    import headerVignette from "@/assets/vignettes/header-vignette.png";
    import banner from "@/assets/banner.png";

    //иконки
    import link from "@//assets/icons/link.svg";

    let selectors = $state([
        {
            index: 1,
            type: "",
            value: "",
        },
        {
            index: 2,
            type: "",
            value: "",
        },
        {
            index: 3,
            type: "",
            value: "",
        },
        {
            index: 4,
            type: "",
            value: "",
        },
        {
            index: 5,
            type: "",
            value: "",
        },
        {
            index: 6,
            type: "",
            value: "",
        },
        {
            index: 7,
            type: "",
            value: "",
        },
        {
            index: 8,
            type: "",
            value: "",
        },
        {
            index: 9,
            type: "",
            value: "",
        },
        {
            index: 10,
            type: "",
            value: "",
        },
    ]);
</script>

<!-- *Основной контейнер -->
<div class="w-[1258px] h-[388px] p-1.5 mt-16 rounded-lg cont-border-bg z-10">
    <div
        class="w-full h-full px-6 rounded-md main-cont-bg
                outline-2 outline-[#260D04] -outline-offset-[5px]
                flex flex-col items-center"
    >
        <img src={banner} alt="banner" class="w-[900px] -translate-y-10" />

        <h1 class="absolute -translate-y-4">Тупо-Хулипятово</h1>

        <img
            src={headerVignette}
            alt="header-vignette"
            class="absolute w-[344px] mt-14 -scale-100"
        />

        <!-- *Селекторы -->
        <div
            class="w-7/8 mx-auto -mt-2 flex flex-wrap justify-center items-center gap-x-3 gap-y-4"
        >
            {#each selectors as selector (selector.index)}
                <Selector
                    bind:morphemeValue={selector.value}
                    bind:type={selector.type}
                    index={selector.index}
                />

                {#if selector.index !== selectors.length && selector.index !== selectors.length / 2}
                    <img src={link} alt="link" />
                {/if}
            {/each}
        </div>

        <button
            class="w-[280px] h-16 p-1 mt-auto translate-y-1/2 rounded-full button-border-bg cursor-pointer"
        >
            <div
                class="w-full h-full p-4.5 rounded-full bg-[#D33232]
                    outline-2 outline-[#260D04] -outline-offset-[4px]
                    flex justify-between items-center"
            >
                <h2 class="-translate-y-[1px]">⦿</h2>
                <h2 class="translate-y-0.5">Сгенерировать</h2>
                <h2 class="-translate-y-[1px]">⦿</h2>
            </div>
        </button>
    </div>
</div>

<style>
    .main-cont-bg {
        background-image: url(@/assets/wood-table-texture.jpg);
        background-size: 1240px;
        background-position: center;
    }

    .button-border-bg {
        background-image: url(@/assets/button-border-texture.jpg);
        background-size: 264px;
        background-position: center;
    }
</style>
