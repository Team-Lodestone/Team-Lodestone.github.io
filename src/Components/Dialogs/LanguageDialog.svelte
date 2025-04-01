<script lang="ts">
    import {Dialog, DropDownBox} from "@team-lodestone/lodestone-ui";
		import { locales, locale } from 'svelte-i18n'
    import { _ as t } from 'svelte-i18n'
		import { setupL10N } from '../../main';

    let dialog: Dialog;

    export function getDialog(): Dialog {
        return dialog;
    }

		function setLanguage(e: Event): void {
			// UNTESTED (can't test until new language is added)
			localStorage.setItem("language", (e.currentTarget as HTMLSelectElement).value)
			setupL10N();
		}
</script>

<Dialog title={$t('languageDialog.title')} bind:this={dialog} noMobileUi>
	<DropDownBox class="languageBox" value={$locale ?? "default"} header={$t('languageDialog.dropDownBox.header')} selectionChange={setLanguage} tooltip={$t('languageDialog.dropDownBox.title')}>
		<option value="default">{$t(`languages.browserLanguage`)}</option>
		{#each $locales as locale}
			<option value={locale}>{$t(`languages.${locale}`)}</option>
		{/each}
	</DropDownBox>
	<button on:click={dialog.closeDialog}>{$t('languageDialog.buttons.ok.text')}</button>
</Dialog>

<style>
    :global(.languageBox) {
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>