<script lang="ts">
  import { _ as t } from 'svelte-i18n'

  import smallLogo from "./Assets/L_Lodestone.svg";
  import largeLogo from "./Assets/Lodestone.svg";
  import { Router, Route } from 'svelte5-router'
  import { isLoading } from 'svelte-i18n'
  import Home from "./Pages/Home.svelte";
  import { Topbar, ScreenAwareTopbarButton, Footer, ButtonLink } from "@team-lodestone/lodestone-ui";
  import CreditsDialog from "./Components/Dialogs/CreditsDialog.svelte";
  import LanguageDialog from "./Components/Dialogs/LanguageDialog.svelte";

  import { isMobile, setMobile } from './store';

  let creditsDialog: CreditsDialog;
  let languageDialog: LanguageDialog;

  const setShowCredits = () => {
    creditsDialog.getDialog().showDialog();
  }

  const setShowLanguageDialog = () => {
    languageDialog.getDialog().showDialog();
  }
</script>

{#if !$isLoading}
  <CreditsDialog bind:this={creditsDialog}></CreditsDialog>
  <LanguageDialog bind:this={languageDialog}></LanguageDialog>

  <Topbar isMobile={isMobile} setMobile={setMobile} logo={smallLogo} >
    <ScreenAwareTopbarButton isMobile={isMobile} href="/App" disabled title={$t('topbar.buttons.openLodestone.title')} class="button topbarButton">{$t('topbar.buttons.openLodestone.text')}</ScreenAwareTopbarButton>
    <ScreenAwareTopbarButton isMobile={isMobile} href="https://github.com/Team-Lodestone" class="button topbarButton" title={$t('topbar.buttons.openGitHub.title')} aria-label={$t('topbar.buttons.openGitHub.ariaLabel')} usesIcon mobileTitle={$t('topbar.buttons.openGitHub.text')}><i class="fa-brands fa-github"></i></ScreenAwareTopbarButton>
    <ScreenAwareTopbarButton isMobile={isMobile} href="/Documentation" class="button topbarButton" title={$t('topbar.buttons.openDocumentation.title')} aria-label={$t('topbar.buttons.openDocumentation.ariaLabel')} usesIcon mobileTitle={$t('topbar.buttons.openDocumentation.text')}><i class="fa-solid fa-book"></i></ScreenAwareTopbarButton>
    <ScreenAwareTopbarButton isMobile={isMobile} href="https://discord.gg/umHRdX6R7V" class="button topbarButton" title={$t('topbar.buttons.openDiscord.title')} aria-label={$t('topbar.buttons.openDiscord.ariaLabel')} usesIcon mobileTitle={$t('topbar.buttons.openDiscord.text')}><i class="fa-brands fa-discord"></i></ScreenAwareTopbarButton>
    <ScreenAwareTopbarButton isMobile={isMobile} class="button topbarButton" onClick={setShowLanguageDialog} title={$t('topbar.buttons.openLanguageDialog.title')} aria-label={$t('topbar.buttons.openLanguageDialog.ariaLabel')} usesIcon mobileTitle={$t('topbar.buttons.openLanguageDialog.text')}><i class="bi bi-translate"></i></ScreenAwareTopbarButton>
  </Topbar>

  <Router>
    <Route url="/">
      <Home></Home>
    </Route>
  </Router>

  <Footer logo={largeLogo} notice="Project Lodestone is NOT an official Minecraft product.">
    <button class="topbarButton" title={$t('footer.buttons.openCredits.title')} on:click={setShowCredits}>{$t('footer.buttons.openCredits.text')}</button>
    <ButtonLink class="button topbarButton" href="https://github.com/team-lodestone/team-lodestone.github.io" title={$t('footer.buttons.openSource.title')}>{$t('footer.buttons.openSource.text')}</ButtonLink>
    <ButtonLink class="button topbarButton" href="https://team-lodestone.github.io/Documentation/Team" title={$t('footer.buttons.openTeam.title')}>{$t('footer.buttons.openTeam.text')}</ButtonLink>
  </Footer>
{:else}
  <h1>Loading</h1>
{/if}