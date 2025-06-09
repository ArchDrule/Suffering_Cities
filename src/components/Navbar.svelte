<script>
    import { isActive } from "../router";

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
            <a
                href={"/"}
                class={`flex justify-center items-center ${isActive("/") ? "active-page" : ""}`}
            >
                <img
                    src={circleVignette}
                    alt="circle-vignette"
                    class="absolute w-12 opacity-60 circle-vignette"
                />
                <h2
                    class="text-shd z-10 hover:scale-[115%] transition-all duration-100"
                >
                    <cap>Г</cap>енератор
                </h2>
            </a>

            <!-- Сохраненное -->
            <a
                href="/saves"
                class={`flex justify-center items-center ${isActive("/saves") ? "active-page" : ""}`}
            >
                <img
                    src={circleVignette}
                    alt="circle-vignette"
                    class="absolute w-12 opacity-60 circle-vignette"
                />
                <h2
                    class="text-shd z-10 hover:scale-[115%] transition-all duration-100"
                >
                    Сохраненное
                </h2>
            </a>

            <!-- Настройки -->
            <a
                href="/settings"
                class={`flex justify-center items-center ${isActive("/settings") ? "active-page" : ""}`}
            >
                <img
                    src={circleVignette}
                    alt="circle-vignette"
                    class="absolute w-12 opacity-60 circle-vignette"
                />
                <h2
                    class="text-shd z-10 hover:scale-[115%] transition-all duration-100"
                >
                    Настройки
                </h2>
            </a>
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

    .circle-vignette {
        visibility: hidden;
    }

    .active-page .circle-vignette {
        visibility: visible;
    }

    .active-page {
        color: #fac24a;
    }
</style>
