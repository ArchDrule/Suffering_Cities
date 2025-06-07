<script>
    import logo from "@/assets/logo.png";
    import vignette from "@/assets/vignettes/vignette-0.png";
    import headerVignette from "@/assets/vignettes/header-vignette.png";
    import circleVignette from "@/assets/vignettes/circle-vignette.png";
    import banner from "@/assets/banner.png";

    import bigCloud from "@/assets/clouds/cloud-big.svg";
    import smallCloud from "@/assets/clouds/cloud-small.svg";
    import doubleCloud from "@/assets/clouds/cloud-double.svg";
</script>

<main>
    <!-- Облачки -->
    <img
        src={bigCloud}
        alt="cloud"
        class="absolute left-1/6 top-16 opacity-60"
    />

    <img
        src={doubleCloud}
        alt="cloud"
        class="absolute left-7/12 top-[146px] opacity-60"
    />

    <img
        src={smallCloud}
        alt="cloud"
        class="absolute left-1/5 top-[332px] opacity-60"
    />

    <!-- Лого -->
    <img src={logo} alt="logo" class="w-[660px] mt-4" />

    <!-- Навбар -->
    <div class="flex justify-center mt-6">
        <img
            src={vignette}
            alt="vignette"
            class="absolute w-[276px] -translate-y-9 opacity-30"
        />
        <nav class="w-[474px] h-20 p-1.5 rounded-lg cont-border-bg z-10">
            <div
                class="w-full h-full px-6 rounded-md nav-bg
                outline-2 outline-[#260D04] -outline-offset-[5px]
                flex justify-between items-center"
            >
                <!-- Генератор -->
                <div class="flex justify-center items-center">
                    <img
                        src={circleVignette}
                        alt="circle-vignette"
                        class="absolute w-12 opacity-60"
                    />
                    <h2 class="text-shd cursor-pointer z-10">
                        <cap>Г</cap>енератор
                    </h2>
                </div>

                <!-- Сохраненное -->
                <div class="flex justify-center items-center">
                    <img
                        src={circleVignette}
                        alt="circle-vignette"
                        class="absolute w-12 opacity-60 hidden"
                    />
                    <h2 class="text-shd cursor-pointer z-10">Сохраненное</h2>
                </div>

                <!-- Настройки -->
                <div class="flex justify-center items-center">
                    <img
                        src={circleVignette}
                        alt="circle-vignette"
                        class="absolute w-12 opacity-60 hidden"
                    />
                    <h2 class="text-shd cursor-pointer z-10">Настройки</h2>
                </div>
            </div>
        </nav>
    </div>

    <!-- Основной контейнер -->
    <div
        class="w-[1258px] h-[388px] p-1.5 mt-16 rounded-lg cont-border-bg z-10"
    >
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
</main>

<style>
    .cont-border-bg {
        background-image: url(@/assets/container-border-texture.jpg);
        background-size: 620px;
        background-position: center;
    }

    .nav-bg {
        background-image: url(@/assets/wood-table-texture.jpg);
        background-size: 920px;
        background-position: top center;
    }

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
