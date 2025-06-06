<script>
    import logo from "@/assets/logo.png";
    import vignette from "@/assets/vignette-0.png";
    import circleVignette from "@/assets/circle-vignette.png";

    import bigCloud from "@/assets/cloud-big.svg";
    import smallCloud from "@/assets/cloud-small.svg";
    import doubleCloud from "@/assets/cloud-double.svg";
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

    <img src={logo} alt="logo" class="w-[660px] mt-8" />

    <div class="flex justify-center mt-6">
        <img
            src={vignette}
            alt="vignette"
            class="absolute h-12 -translate-y-9 opacity-30"
        />
        <nav class="w-[474px] h-20 p-1.5 rounded-lg nav-border-bg z-10">
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

                <!-- Генератор -->
                <div class="flex justify-center items-center">
                    <img
                        src={circleVignette}
                        alt="circle-vignette"
                        class="absolute w-12 opacity-60 hidden"
                    />
                    <h2 class="text-shd cursor-pointer z-10">Сохраненное</h2>
                </div>

                <!-- Генератор -->
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
</main>

<style>
    .nav-bg {
        background-image: url(@/assets/wood-table-texture.jpg);
        background-size: 200%;
        background-position: top center;
    }

    .nav-border-bg {
        background-image: url(@/assets/button-border-texture.jpg);
        background-size: 130%;
        background-position: center;
    }
</style>
