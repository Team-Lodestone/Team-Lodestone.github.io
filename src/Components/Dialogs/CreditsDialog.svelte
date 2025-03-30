<script lang="ts">
    import {Dialog} from "@team-lodestone/lodestone-ui";
    import GitHubUser from "../GitHubUser.svelte";
    import { _ as t } from 'svelte-i18n'

    let dialog: Dialog;

    export function getDialog(): Dialog {
        return dialog;
    }

</script>

<Dialog title={$t('credits.title')} bind:this={dialog}>
    <div class="creditsDialog">

        <h2>{$t('credits.website.title')}</h2>
        <hr>

        <div class="credits website">
            <GitHubUser username="dexrnzacattack" displayName="Dexrn ZacAttack">
                <ul>
                    <li>{$t('credits.website.dexrnzacattack.li-1')}</li>
                    <li>{$t('credits.website.dexrnzacattack.li-2')}</li>
                    <li>{$t('credits.website.dexrnzacattack.li-3')}</li>
                    <li>{$t('credits.website.dexrnzacattack.li-4')}</li>
                </ul>
            </GitHubUser>
            <GitHubUser username="eternalmodz" displayName="EternalModz">
                <ul>
                    <li>{$t('credits.website.eternalmodz.li-1')}</li>
                    <li>{$t('credits.website.eternalmodz.li-2')}</li>
                    <li>{$t('credits.website.eternalmodz.li-3')}</li>
                </ul>
            </GitHubUser>
        </div>

        <h2>{$t('credits.assets.title')}</h2>
        <hr>

        <div class="credits assets">
            <GitHubUser username="nikstudios" displayName="NikStudios">
                <ul>
                    <li>{$t('credits.assets.nikstudios.li-1')}</li>
                </ul>
            </GitHubUser>
            <p>{@html $t('credits.assets.external.html')}</p>
        </div>

        <h2>{$t('credits.translations.title')}</h2>
        <hr>

        <div class="credits translations">
            <!-- TODO: Organize by language instead of user -->
            <GitHubUser username="dTentione" displayName="DTention">
                <h2 class="language">{$t('languages.ar')}, {$t('languages.ckb')}, {$t('languages.kmr')}</h2>
            </GitHubUser>
            <GitHubUser username="9110751907">
                <h2 class="language">{$t('languages.ja-JP')}</h2>
            </GitHubUser>
            <GitHubUser username="AikoBorowski" displayName="BreakingMC">
                <h2 class="language">{$t('languages.fr')}</h2>
            </GitHubUser>
            <GitHubUser username="LouLouNoLegend" displayName="LouLouNoLegend">
                <h2 class="language">{$t('languages.fr')}</h2>
            </GitHubUser>
        </div>

        <h2>{$t('credits.repoContributors.title')}</h2>
        <hr>
        <a href="https://github.com/Team-Lodestone/Team-Lodestone.github.io/graphs/contributors" title={$t('credits.repoContributors.button.title')}>
            <img class="repoContributors" src="https://contrib.rocks/image?repo=Team-Lodestone/Team-Lodestone.github.io" loading="lazy" alt={$t('credits.repoContributors.button.image.alt')}>
        </a>
    </div>

</Dialog>

<style>
    .credits {
        display: flex;
        flex-direction: column;
        margin-top: 1.5em;
        gap: 1.5em;
    }

    .creditsDialog {
        margin-left: 1.5em;
        margin-right: 1.5em;
    }

    .language {
        margin: 0;
        padding: 0;
    }

    .repoContributors {
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>