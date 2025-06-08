<script>
    //компоненты
    import Clouds from "./components/Clouds.svelte";
    import Navbar from "./components/Navbar.svelte";
    import MainContainer from "./components/MainContainer.svelte";

    //картинки
    import logo from "@/assets/logo.png";

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

<main>
    <Clouds />

    <!-- Лого -->
    <img src={logo} alt="logo" class="w-[660px] mt-4" />

    <!-- Навбар -->
    <Navbar />

    <!-- Основной контейнер -->
    <MainContainer />
</main>
