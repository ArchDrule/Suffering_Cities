<script>
    //компоненты
    import { Modal } from "flowbite-svelte";
    import { CloseOutline, PlusOutline } from "flowbite-svelte-icons";
    import { onMount } from "svelte";
    import { scale } from "svelte/transition";
    import Selector from "../components/Selector.svelte";

    //картинки
    import headerVignette from "@/assets/vignettes/header-vignette.png";
    import banner from "@/assets/banner.png";

    //иконки
    import link from "@//assets/icons/link.svg";

    //json-ы
    import prefixes from "../json/prefixes.json";
    import roots from "../json/roots.json";
    import signs from "../json/signs.json";
    import endings from "../json/endings.json";

    let selectors = $state(JSON.parse(localStorage["selectors"]));

    $effect(() => {
        localStorage["selectors"] = JSON.stringify(selectors);
    });

    let cityName = $state("Тупо-Хулипятово");

    const getRandomElement = (array) =>
        array[Math.floor(Math.random() * array.length)];

    let noSelectedModal = $state(false);

    const generateCityName = () => {
        let name = "";
        selectors.map((selector) => {
            if (selector.type !== "" && selector.value === "")
                switch (selector.type) {
                    case "Приставка":
                        name += getRandomElement(prefixes.russian);
                        break;

                    case "Корень":
                        let allRoots = roots.russian.low;
                        if (localStorage["vulgarity"] > 0)
                            allRoots = allRoots.concat(roots.russian.middle);
                        if (localStorage["vulgarity"] > 1)
                            allRoots = allRoots.concat(roots.russian.high);
                        name += getRandomElement(allRoots);
                        break;

                    case "Знак":
                        name += getRandomElement(signs)[0];
                        break;

                    case "Окончание":
                        name += getRandomElement(endings.russian);
                        break;

                    default:
                        break;
                }
            else if (selector.value !== "") {
                if (selector.type !== "Знак") name += selector.value;
                else name += selector.value[0];
            }
        });

        if (name !== "") {
            cityName = name;
            localStorage["lastGeneratedCity"] = name;
        } else noSelectedModal = true;
    };

    let thisSavedCityExistsModal = $state(false);

    const saveCityName = () => {
        const arr = JSON.parse(localStorage["cities"]);
        if (arr !== " " && !arr.includes(cityName)) {
            arr.push(cityName);
            localStorage["cities"] = JSON.stringify(arr);
        } else thisSavedCityExistsModal = true;
    };

    onMount(() => {
        if (localStorage["lastGeneratedCity"])
            cityName = localStorage["lastGeneratedCity"];
    });
</script>

<!-- *Модалка-предупреждение о пустых селекторах -->
<Modal
    bind:open={noSelectedModal}
    transition={scale}
    params={{ duration: 150 }}
    closeBtnClass="hidden"
    class="w-[464px] left-[50vw] py-4 top-[50vh] -translate-1/2 
    border-[#D33232] border-4
    bg-[#212121] text-[#F3EFD4] dark:text-[#F3EFD4]
    backdrop:bg-[rgba(0,0,0,0.5)]"
>
    <h1 class="text-center text-[#D33232]">Предупреждение</h1>
    <h3 class="text-center mt-4">У вас не выбрана ни одна морфема.</h3>
    <CloseOutline
        onclick={() => (noSelectedModal = false)}
        class="absolute w-8 m-1.5 right-0 top-0 cursor-pointer"
    />
</Modal>

<!-- *Модалка-предупреждение о существовании такого же сохраненного города -->
<Modal
    bind:open={thisSavedCityExistsModal}
    transition={scale}
    params={{ duration: 150 }}
    closeBtnClass="hidden"
    class="w-[464px] left-[50vw] py-4 top-[50vh] -translate-1/2 
    border-[#D33232] border-4
    bg-[#212121] text-[#F3EFD4] dark:text-[#F3EFD4]
    backdrop:bg-[rgba(0,0,0,0.5)]"
>
    <h1 class="text-center text-[#D33232]">Предупреждение</h1>
    <h3 class="text-center mt-4">Вы уже сохраняли такой город.</h3>
    <CloseOutline
        onclick={() => (thisSavedCityExistsModal = false)}
        class="absolute w-8 m-1.5 right-0 top-0 cursor-pointer"
    />
</Modal>

<!-- *Главный контент -->
<img src={banner} alt="banner" class="w-[900px] -translate-y-10" />

<!-- <h1 class="absolute -translate-y-4 capitalize">{cityName}</h1> -->
<input
    bind:value={cityName}
    placeholder="Название города"
    type="text"
    class="absolute w-[532px] -translate-y-4.5 capitalize title-input"
/>

<img
    src={headerVignette}
    alt="header-vignette"
    class="absolute w-[344px] mt-14 -scale-100"
/>

<button
    onclick={() => saveCityName()}
    class="absolute w-8 h-8 translate-y-14
            rounded-full cursor-pointer
            bg-[#3d3d3d] border-2 border-[#212121]
            hover:scale-125 active:bg-[#e24844]
            transition-all duration-150"
>
    <PlusOutline class="w-6 mx-auto" />
</button>

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
    onclick={() => generateCityName()}
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

<style>
    .button-border-bg {
        background-image: url(@/assets/button-border-texture.jpg);
        background-size: 264px;
        background-position: center;
    }

    .title-input {
        font-size: 32px;
        text-align: center;
        appearance: none;
        background: transparent;
        outline: none;
        border: none;
    }

    .title-input::placeholder {
        color: rgba(243, 238, 211, 0.5);
    }

    .title-input:focus {
        outline: none;
        border: none;
        box-shadow: none;
    }
</style>
