<script lang="ts">
    import { _ as t } from 'svelte-i18n'

    import logo from '../Assets/Lodestone.svg'
    import EditionCard from "../Components/EditionCard.svelte";
    import { ButtonLink, InfoCard, Scrollable, Tooltip } from "@team-lodestone/lodestone-ui";
    import {onMount} from "svelte";

    let editions: HTMLDivElement;
    let editionsScrollWidth: number = 0;
    let editionsOffsetWidth: number = 0;

    const scrollRight = () => {
        editions.scrollLeft += 150;
    }

    const scrollLeft = () => {
        editions.scrollLeft -= 150;
    }

    onMount(() => {
        editionsScrollWidth = editions.scrollWidth;
        editionsOffsetWidth = editions.offsetWidth;

        window.onresize = () => {
            if (editions) {
                editionsScrollWidth = editions.scrollWidth;
                editionsOffsetWidth = editions.offsetWidth;
            }
        }
    })
</script>
<div class="Home">
    <div class="info">
        <h1 class="logo">{$t('home.info.name')}</h1>
        <h3>{$t('home.info.header')}</h3>
        <p class="unfocused">{$t('home.info.description')}</p>
    </div>
    <div class="buttons">
        <Tooltip text={$t('home.buttons.openLodestone.tooltip')}>
            <ButtonLink href="/App" class="button" disabled title={$t('home.buttons.openLodestone.title')}>{$t('home.buttons.openLodestone.text')}</ButtonLink>
        </Tooltip>
        <ButtonLink href="/Documentation/readme" class="button" title={$t('home.buttons.openDocumentation.title')}>{$t('home.buttons.openDocumentation.text')}</ButtonLink>
        <ButtonLink href="https://discord.gg/umHRdX6R7V" class="button" title={$t('home.buttons.openDiscord.title')}><i class="fa-brands fa-discord"></i></ButtonLink>
    </div>
    <h1 class="header">
        {$t('home.supportedEditions.header')}
    </h1>
    <div class="supportedEditions">
        <div class="editions" bind:this={editions}>
            <EditionCard iconAlt={$t('home.supportedEditions.LCE.alt')} icon="fa-solid fa-gamepad">
                {$t('home.supportedEditions.LCE.title')}
            </EditionCard>
            <!-- TODO: Find a 3DS icon -->
            <EditionCard iconAlt={$t('home.supportedEditions.3DS.alt')} icon="bi bi-dpad-fill">
                {$t('home.supportedEditions.3DS.title')}
            </EditionCard>
            <EditionCard iconAlt={$t('home.supportedEditions.JE.alt')} icon="fa-solid fa-computer">
                {$t('home.supportedEditions.JE.title')}
            </EditionCard>
            <EditionCard iconAlt={$t('home.supportedEditions.BE.alt')} icon="fa-solid fa-mobile-screen">
                {$t('home.supportedEditions.BE.title')}
            </EditionCard>
            <!-- TODO: Find a Raspberry Pi logo that is more consistent with the rest of the icons -->
            <EditionCard iconAlt={$t('home.supportedEditions.PI.alt')} icon="fa-brands fa-raspberry-pi">
                {$t('home.supportedEditions.PI.title')}
            </EditionCard>
        </div>
        {#if editionsScrollWidth > editionsOffsetWidth}
            <Scrollable onScrollLeft={scrollLeft} onScrollRight={scrollRight}></Scrollable>
        {/if}
    </div>

    <h1 class="header">
        {$t('home.infoBoxes.header')}
    </h1>
    <div class="infoBoxes">
        <InfoCard title={$t('home.infoBoxes.compatible.title')} icon="fa-check" alt={$t('home.infoBoxes.compatible.alt')}>{$t('home.infoBoxes.compatible.description')}</InfoCard>
        <InfoCard title={$t('home.infoBoxes.editEverything.title')} icon="fa-solid fa-file" alt={$t('home.infoBoxes.editEverything.alt')}>{$t('home.infoBoxes.editEverything.description')}</InfoCard>
        <InfoCard title={$t('home.infoBoxes.fullControl.title')} icon="fa-solid fa-earth-americas" alt={$t('home.infoBoxes.fullControl.alt')}>{$t('home.infoBoxes.fullControl.description')}</InfoCard>
        <InfoCard title={$t('home.infoBoxes.worksEverywhere.title')} icon="fa-map" alt={$t('home.infoBoxes.worksEverywhere.alt')}>{$t('home.infoBoxes.worksEverywhere.description')}</InfoCard>
        <InfoCard title={$t('home.infoBoxes.accessible.title')} icon="fa-solid fa-universal-access" alt={$t('home.infoBoxes.accessible.alt')}>{$t('home.infoBoxes.accessible.description')}</InfoCard>
        <InfoCard title={$t('home.infoBoxes.localized.title')} icon="bi bi-translate" alt={$t('home.infoBoxes.localized.alt')}>{$t('home.infoBoxes.localized.description')}</InfoCard>
    </div>
</div>

<style>
    .header {
        transition: width 200ms ease-out;
        background-color: var(--bg-alt);
        padding: 5px;
        border-radius: 10px;
        border: 2px solid var(--bg-border);
        width: 300px;
        font-size: 30px;
    }

    .Home {
        display: flex;
        flex-direction: column;
        padding-left: 1.5em;
        padding-right: 1.5em;
    }

    .info {
        padding-bottom: 20px;
    }

    .editions {
        display: flex;
        flex-direction: row;
        gap: 10px;
        overflow-y: auto;
        background-color: var(--bg-darker);
        border-radius: 10px 10px 0 0;
        border: 2px solid var(--bg-border-darker);
        border-bottom: none;
        transition: padding 200ms ease-out, background-color 200ms ease-out, justify-content 200ms;
    }

    .supportedEditions {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    .infoBoxes {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        /*margin-top: 20px;*/
        width: 100%;
        height: 100%;
        transition: justify-content 200ms;
    }

    @media (max-width: 800px) {
        .editions {
            padding: 5px;
        }
    }

    @media (min-width: 800px) {
        .supportedEditions {
            width: fit-content !important;
        }
        .editions {
            border-radius: 0;
            padding-bottom: 0;
            background-color: transparent;
            border: none;
        }
    }


    @media (max-width: 1065px) {
        .infoBoxes {
            justify-content: center;
        }
    }

    @media (max-width: 835px) {
        .header {
            text-align: center;
            width: 100%;
        }
    }

    .buttons {
        display: flex;
        flex-direction: row;
        margin-bottom: 30px;
        gap: 10px;
    }

    .buttons a {
        font-size: 20px;
        font-weight: bold;
    }

    .logo:hover {
        filter: drop-shadow(0 0 1.0em var(--accent-saturated));
    }

    .logo {
        margin-top: 5%;
        -webkit-user-drag: none;
        /*height: 128px;*/
        /*width: 512px;*/
        will-change: filter;
        font-size: 48px;
        color: var(--accent-theme);
        transition: filter 300ms, width 200ms ease-out, height 200ms ease-out;
        margin-bottom: 10px;
    }

    .unfocused {
        color: var(--text-unfocused);
    }

</style>