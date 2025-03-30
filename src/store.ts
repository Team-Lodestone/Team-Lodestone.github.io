import {writable} from "svelte/store";

// region Mobile UI
/** Store to get if the site should use mobile UI
 *
 * If the viewport's width is smaller than 710px, it is true.
 */
export const isMobile = writable(window.innerWidth < 710);

/** Sets if the site should use mobile UI
 *
 * Automatically called upon resize.
 */
export const setMobile = () => {
    isMobile.set(window.innerWidth < 710);
};
// endregion