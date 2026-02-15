import { mount } from 'svelte'
import './Assets/css/app.css'
import App from './App.svelte'

// region constants
export { version } from "../package.json";

/** Theme color of the site */
export const themeColor = "#AD95ED";
/** Logo (with background) */
export const logo = "/assets/Lodestone_Logo.png"
/** Background */
export const bg = "/assets/LodestoneBg.jpg"
/** Logo (no background, used as favicon) */
export const favicon = "/assets/Lodestone_Favicon.png"
/** Root site URL */
export const url = "https://team-lodestone.github.io"
// endregion

// region l10n
import { getLocaleFromNavigator, init, addMessages, register } from 'svelte-i18n';
import { initLUILanguages } from "@team-lodestone/lodestone-ui";

const initL10N = async () => {
  addMessages('en-US', (await import('./Assets/L10N/langs.json')) as never);

  // has to have US bc browser returns en-US instead of en
  // also use addMessages over register to avoid flash of content while loading other language during switch.
  addMessages('en-US', (await import('./Assets/L10N/en-us.json')) as never);
  addMessages('fr', (await import('./Assets/L10N/fr.json')) as never);
  addMessages('ru', (await import('./Assets/L10N/ru.json')) as never);
  addMessages('ja', (await import('./Assets/L10N/ja.json')) as never);
  addMessages('nl', (await import('./Assets/L10N/nl.json')) as never);
  addMessages('zh-CN', (await import('./Assets/L10N/zh-CN.json')) as never);
  addMessages('pl', (await import('./Assets/L10N/pl.json')) as never);

  // setup l10n
  await setupL10N();
}

const getLanguage = (): string | null => {
  const lang = localStorage.getItem("language");

  if (lang && lang !== "default") return lang;
  else return getLocaleFromNavigator();
}

export const setupL10N = async () => {
  await initLUILanguages({ fallbackLocale: 'en-US', initialLocale: getLanguage(), warnOnMissingMessages: true });
  await init({ fallbackLocale: 'en-US', initialLocale: getLanguage(), warnOnMissingMessages: true });
}
// endregion


// region app
let app: { $set?: any, $on?: any } | undefined = undefined;

async function initApp() {
  await initL10N();

  return mount(App, {
    target: document.getElementById('app')!,
  })
}

// if we don't wait for initL10N we get locale loading race condition afaik
initApp().then((mounted) => {
  app = mounted;
});

export default app;
// endregion
