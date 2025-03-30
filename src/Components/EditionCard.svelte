<script lang="ts">
    /** Icon class of the card */
    export let icon: string;
    /** Alt text (title) of the icon in the card */
    export let iconAlt;
</script>

<div class="EditionCard">
    <div class="iconHolder">
        <i class={`icon ${icon}`} title={iconAlt} aria-label={iconAlt}></i>
    </div>
    <p class="title">
        <slot></slot>
    </p>
</div>

<style>
    .EditionCard {
        display: flex;
        flex-direction: column;
        /*justify-content: center;*/
        justify-content: flex-start;
        align-items: center;
        text-align: center;
        background-color: var(--bg-alt);
        border-radius: 10px;
        padding: 10px;
        width: 145px;
        max-width: 145px;
        min-width: 145px;
        border: 2px solid var(--bg-border);
        transition: border 200ms, width 300ms ease-out;
    }

    .EditionCard:hover {
        border-color: var(--accent-border);
    }

    .iconHolder {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 10px;
        width: 5em;
        height: 5em;
        background-color: var(--bg-alt-2);
        border-radius: 10px;
    }

    .icon {
        font-size: 3em;
        color: var(--accent-theme);
    }

</style>