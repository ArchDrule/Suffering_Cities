import { createRouter } from "sv-router";
import Generator from "./routes/Generator.svelte";
import Saves from "./routes/Saves.svelte";
import Settings from "./routes/Settings.svelte";

export const { p, navigate, isActive, route } = createRouter({
    "/": Generator,
    "/saves": Saves,
    "/settings": Settings,
});
