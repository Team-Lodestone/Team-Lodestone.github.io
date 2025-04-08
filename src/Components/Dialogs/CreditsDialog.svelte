<script lang="ts">
    import { Dialog } from "@team-lodestone/lodestone-ui";
    import GitHubUser from "../GitHubUser.svelte";
    import LanguageCard from "../LanguageCard.svelte";
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
            <!-- TODO: Figure out how to do both Central and Northern Kurdish, (maybe combine? But there's Southern Kurdish too I think) -->
            <!-- Browsers also only have "Kurdish" (lang code: ku) -->
            <LanguageCard language="ar">
                <GitHubUser username="dTentione" displayName="DTention" noDesc noCard />
            </LanguageCard>
            <LanguageCard language="fr">
                <GitHubUser username="AikoBorowski" displayName="BreakingMC" noDesc noCard />
                <GitHubUser username="LoulouNoLegend" noDesc noCard />
            </LanguageCard>
            <LanguageCard language="ja">
                <GitHubUser username="9110751907" noDesc noCard />
            </LanguageCard>
            <LanguageCard language="nl">
                <GitHubUser username="AllanAxolotls" noDesc noCard />
            </LanguageCard>
            <LanguageCard language="ru">
                <GitHubUser username="PouffyPanda8510" noDesc noCard />
            </LanguageCard>
            <LanguageCard language="zh-CN">
                <GitHubUser username="kebufu" displayName="mckuhei" noDesc noCard />
            </LanguageCard>
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
