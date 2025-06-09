<script>
    import { onMount } from "svelte";
    import { Tooltip } from "flowbite-svelte";

    //компоненты
    import Clouds from "./components/Clouds.svelte";
    import Navbar from "./components/Navbar.svelte";
    import MainContainer from "./components/MainContainer.svelte";

    //картинки
    import logo from "@/assets/logo.png";
    import figma from "@/assets/icons/figma.svg";
    import github from "@/assets/icons/github.svg";

    onMount(() => {
        if (!localStorage["vulgarity"]) localStorage["vulgarity"] = 0;

        if (!localStorage["cities"])
            localStorage["cities"] = JSON.stringify([]);

        if (!localStorage["selectors"])
            localStorage["selectors"] = JSON.stringify([
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
    });
</script>

<main>
    <Clouds />

    <!-- Контакты -->
    <div
        class="absolute -translate-x-[548px] ml-4 mt-2 p-1.5 rounded-full flex items-center gap-2.5 bg-[rgba(0,0,0,0.6)]"
    >
        <a
            href="https://github.com/ArchDrule/archdrule.github.io/tree/main"
            target="_blank"
            class="p-0.5 rounded-full bg-white"
            id="git-icon"
        >
            <img src={github} alt="figma" class="w-8" />
        </a>
        <Tooltip
            placement="bottom"
            triggeredBy={`#git-icon`}
            class="max-w-[224px] p-2 border-1 border-[#F3EFD4] bg-[#212121] text-[#F3EFD4] text-center"
            >Репозиторий проекта</Tooltip
        >

        <a
            href="https://www.figma.com/design/7a8lhb5b3DmXMvGuaueZQB/%D0%A1%D1%82%D1%80%D0%B0%D0%B4%D0%B0%D1%8E%D1%89%D0%B8%D0%B5-%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B0?node-id=1-2&t=ovcvFNtahboAIFdr-1"
            target="_blank"
            id="figma-icon"
        >
            <img src={figma} alt="figma" class="w-9" />
        </a>
        <Tooltip
            placement="bottom"
            triggeredBy={`#figma-icon`}
            class="max-w-[224px] p-2 border-1 border-[#F3EFD4] bg-[#212121] text-[#F3EFD4] text-center"
            >Макет сайта</Tooltip
        >
    </div>

    <!-- Лого -->
    <img src={logo} alt="logo" class="w-[660px] mt-4" />

    <!-- Навбар -->
    <Navbar />

    <!-- Основной контейнер -->
    <MainContainer />
</main>
