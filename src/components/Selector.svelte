<script>
    import {
        Dropdown,
        DropdownItem,
        DropdownHeader,
        DropdownGroup,
    } from "flowbite-svelte";
    import { SearchOutline, CloseOutline } from "flowbite-svelte-icons";
    import { slide } from "svelte/transition";

    import drop from "@/assets/icons/drop.svg";

    //json-ы
    import prefixes from "../json/prefixes.json";
    import roots from "../json/roots.json";
    import signs from "../json/signs.json";
    import endings from "../json/endings.json";

    let { morphemeValue = $bindable(), type = $bindable(), index } = $props();

    //let type = $state("");
    let typeSelectorIsOpen = $state(false);

    //let morphemeValue = $state("");
    let morphemeSelectorIsOpen = $state(false);

    const selectTypeHandle = (t) => {
        if (type !== t) type = t;
        else type = "";
        morphemeValue = "";
        typeSelectorIsOpen = false;
    };

    let getTypeColor = $derived.by(() => {
        switch (type) {
            case "Приставка":
                return "#B58724";

            case "Корень":
                return "#9F2C29";

            case "Знак":
                return "#154DA4";

            case "Окончание":
                return "#007350";

            default:
                return "#787471";
        }
    });

    let searchMorpheme = $state("");
    const filterMorphemes = (arr) => {
        return arr.filter(
            (m) => m.toLowerCase().indexOf(searchMorpheme?.toLowerCase()) !== -1
        );
    };
    let filteredMorphemes = $derived.by(() => {
        switch (type) {
            case "Приставка":
                const newPrefixes = prefixes.russian;
                return filterMorphemes(newPrefixes);

            case "Корень":
                const newRoots = roots.russian.low.concat(roots.russian.middle);
                return filterMorphemes(newRoots);

            case "Знак":
                return filterMorphemes(signs);

            case "Окончание":
                const newEndings = endings.russian;
                return filterMorphemes(newEndings);

            default:
                return [];
        }
    });
</script>

<div class="w-[162px] h-[74px] rounded-lg bg-[#212121]">
    <!-- Шапка -->
    <div
        style={`background: ${getTypeColor};`}
        class="w-full rounded-t-lg
        border-2 border-[#212121] border-b-0"
    >
        <div class="absolute w-8 h-8 rounded-full selector-index">
            <p class="absolute">{index}</p>
            <span class="absolute w-6 close-icon">
                <CloseOutline onclick={() => selectTypeHandle("")} />
            </span>
        </div>
        <p class="text-center cursor-pointer" id={`selector-header-${index}`}>
            {type ? type : "Не выбрано"}
        </p>
    </div>

    <Dropdown
        bind:isOpen={typeSelectorIsOpen}
        transition={slide}
        transitionParams={{ duration: 250 }}
        placement="top"
        triggeredBy={`#selector-header-${index}`}
        class="w-[162px] p-2 text-[#F3EFD4] bg-[#212121] text-center"
    >
        <DropdownGroup>
            <DropdownItem
                onclick={() => selectTypeHandle("Приставка")}
                class="w-full p-1 rounded-sm hover:bg-[#B58724] cursor-pointer select-none"
                >Приставка</DropdownItem
            >
            <DropdownItem
                onclick={() => selectTypeHandle("Корень")}
                class="w-full p-1 rounded-sm hover:bg-[#9F2C29] cursor-pointer select-none"
                >Корень</DropdownItem
            >
            <DropdownItem
                onclick={() => selectTypeHandle("Знак")}
                class="w-full p-1 rounded-sm hover:bg-[#154DA4] cursor-pointer select-none"
                >Знак</DropdownItem
            >
            <DropdownItem
                onclick={() => selectTypeHandle("Окончание")}
                class="w-full p-1 rounded-sm hover:bg-[#007350] cursor-pointer select-none"
                >Окончание</DropdownItem
            >
        </DropdownGroup>
    </Dropdown>

    <!-- Контент -->
    <div class="h-[36px] mt-1.5 px-3 flex gap-2">
        <input
            bind:value={morphemeValue}
            type="text"
            maxlength="10"
            class="w-full p-2 selector-input"
            placeholder="Рандом..."
        />

        <span
            inert={type === ""}
            class="my-auto"
            id={`dropdown-select-${index}`}
        >
            <img
                src={drop}
                alt="drop-down"
                width="20"
                class={`rotate-180 outline-0 ${type !== "" ? "cursor-pointer" : "opacity-60"}`}
            />
        </span>

        <Dropdown
            bind:isOpen={morphemeSelectorIsOpen}
            transition={slide}
            transitionParams={{ duration: 250 }}
            placement="top"
            triggeredBy={`#dropdown-select-${index}`}
            class="w-[162px] h-[224px] p-2 -translate-x-[59px] -translate-y-[42px]
            text-[#F3EFD4] bg-[#212121] text-center"
        >
            <DropdownHeader class="border-b-1">
                <label class="flex items-center">
                    <SearchOutline class="h-6 w-6" />
                    <input
                        bind:value={searchMorpheme}
                        type="text"
                        maxlength="10"
                        class="w-full p-2 selector-input"
                        placeholder="Поиск"
                    />
                </label>
            </DropdownHeader>
            <DropdownGroup>
                {#each filteredMorphemes as item}
                    <DropdownItem
                        onclick={() => (morphemeValue = item)}
                        class="w-full p-1 rounded-sm hover:bg-[#3D3D3D] cursor-pointer select-none"
                        >{item}</DropdownItem
                    >
                {/each}
            </DropdownGroup>
        </Dropdown>
    </div>
</div>

<style>
    .selector-input {
        appearance: none;
        background: transparent;
        outline: none;
        border: none;
    }

    .selector-input::placeholder {
        color: rgba(243, 238, 211, 0.5);
    }

    .selector-input:focus {
        outline: none;
        border: none;
        box-shadow: none;
    }

    .selector-index {
        display: flex;
        justify-content: center;
        align-items: center;

        background: #3d3d3d;
        border: 2px solid #212121;

        cursor: pointer;
        transform: translate(-50%, -4px);
        transition: all 100ms;
    }

    .selector-index:hover {
        background: #e24844;
    }

    .close-icon {
        opacity: 0%;
        transition: all 100ms;
    }

    .selector-index:hover > .close-icon {
        opacity: 100%;
    }

    .selector-index:hover > p {
        opacity: 0;
    }
</style>
