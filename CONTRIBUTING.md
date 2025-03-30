# Contributing

## Translating
For translations, the target language of this site is English, so you should base your translations off of that.

under [/src/Assets/L10N](/src/Assets/L10N) there are JSON files for the existing supported languages.   
For adding your own, copy the en-us.json file and rename it with the correct locale code for the targeted language. (e.g Japanese would be `ja-jp.json`)

To have the language work on the site, go to [main.ts](/src/main.ts#L29) and add a new line.   
The line should look like this (using Japanese as an example):
```register('ja-JP', () => import('./Assets/L10N/ja-jp.json'));```   

Which boils down to:
```register('locale-code', () => import('./Assets/L10N/locale-code.json'));```   

For each missing/empty translation string, there will be a warning in the console.

After verifying that the translations show correctly on the site, you can add yourself to [the credits](/src/App.svelte#L80) and then make a pull request to submit the translation.