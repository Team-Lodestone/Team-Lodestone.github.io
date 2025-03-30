# Contributing

## Translating
> [!NOTE]
> For each missing/empty translation string, there will be a warning in the console.

For translations, the target language of this site is English, so you should base your translations off of that.

under [/src/Assets/L10N](/src/Assets/L10N) there are JSON files for the existing supported languages.   
For adding your own, copy the [en-us.json](/src/Assets/L10N/en-us.json) file and rename it with the correct locale code for the targeted language. (e.g Japanese would be `ja.json`)

To have the language work on the site, add the language translation to the JSON file, then go to [main.ts](/src/main.ts#L29) and add a new line.   
The line should look like this (using Japanese as an example):
```register('ja', () => import('./Assets/L10N/ja.json'));```   

Which boils down to:
```register('language-code', () => import('./Assets/L10N/language-code.json'));```   

To find a list of Language Codes using Firefox, go to `about:preferences`, search `language`, and choose `Choose your preferred language for displaying pages`, then find your language and look at the code (in the square brackets)   

You can also find the language code of the currently used Navigator language by opening devtools and typing `console.log(navigator.language);`.

After verifying that the translations show correctly, and following the [guidelines](#guidelines), you can add yourself to [the credits](/src/App.svelte#L80) and then make a pull request to submit the translation.

### Guidelines
1. Do not translate "`Project Lodestone`"
2. Do not translate the Edition names unless an edition had official translations that clearly show how it's meant to be translated.

