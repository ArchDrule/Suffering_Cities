<script>
    import vignette from "@/assets/vignettes/vignette-0.png";
    import circleVignette from "@/assets/vignettes/circle-vignette.png";
</script>

<!-- *Навбар -->
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
</style>
