import i18n from 'i18next'
import * as isDev from 'electron-is-dev'

import * as languageEN from '../src/localization/en.json'
import * as languagePT from '../src/localization/pt.json'
import * as languageES from '../src/localization/es.json'

i18n.init({
    resources: {
        en: languageEN,
        pt: languagePT,
        es: languageES
    },
    supportedLngs: ['en', 'es', 'pt'],
    fallbackLng: 'es',
    debug: isDev,
    keySeparator: '.',
    interpolation: {
        formatSeparator: ','
    },
})

export default i18n
