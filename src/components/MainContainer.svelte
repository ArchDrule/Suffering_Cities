<script>
    import { Router } from "sv-router";
    import "@/router.js";
</script>

<!-- *Основной контейнер -->
<div
    class="w-[1258px] h-[388px] p-1.5 mt-16 mb-18 rounded-lg cont-border-bg z-10"
>
    <div
        class="w-full h-full px-6 rounded-md main-cont-bg
                outline-2 outline-[#260D04] -outline-offset-[5px]
                flex flex-col items-center"
    >
        <Router />
    </div>
</div>

<style>
    .main-cont-bg {
        background-image: url(@/assets/wood-table-texture.jpg);
        background-size: 1240px;
        background-position: center;
    }

    .cont-border-bg {
        background-image: url(@/assets/container-border-texture.jpg);
        background-size: 620px;
        background-position: center;
    }
</style>
