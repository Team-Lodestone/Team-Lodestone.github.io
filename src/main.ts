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
import {getLocaleFromNavigator, init, register} from 'svelte-i18n'

register('en-US', async () => await import('./Assets/L10N/en-us.json'));
register('fr', async () => await import('./Assets/L10N/fr.json'));
register('ru', async () => await import('./Assets/L10N/ru.json'));

const getLanguage = (): string | null => {
  const lang = localStorage.getItem("language");

  if (lang && lang !== "default") return lang;
  else return getLocaleFromNavigator();
}

export const initL10N = async () => await init({ fallbackLocale: 'en-US', initialLocale: getLanguage(), warnOnMissingMessages: true });

initL10N();
// endregion

// region app
const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
// endregion
