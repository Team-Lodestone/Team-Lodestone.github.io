import autoprefixer from 'autoprefixer';
import postcssGapProperties from 'postcss-gap-properties';
import postcssPresetEnv from 'postcss-preset-env';

export default {
    plugins: [
        autoprefixer({
            overrideBrowserslist: [
                '> 0.1%',
            ],
            grid: true,
        }),
        postcssPresetEnv({
            stage: 0,
        }),
        postcssGapProperties()
    ],
};
