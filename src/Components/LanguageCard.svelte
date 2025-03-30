<script lang="ts">
	import { _ as t } from 'svelte-i18n'

	export let language: string;
</script>

<div class="LanguageCard">
	<h2 class="header">{$t(`languages.${language}`)}</h2>
	<div class="translators">
		<slot />
	</div>
</div>

<style>
    .LanguageCard {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 0px 10px 0px;
        background-color: var(--bg-alt-2);
				border-radius: 10px;
    }

		.translators {
        display: flex;
        flex-direction: column;
				gap: 10px;
		}

		.header {
				padding: 5px 10px 5px 10px ;
        margin: 0px 0 10px;
				width: 100%;
				text-align: center;
        background-color: var(--bg-alt);
				border-bottom: 2px solid var(--bg-border);
        border-radius: 10px 10px 0 0;
		}
</style>