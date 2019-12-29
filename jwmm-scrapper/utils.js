const moment = require('moment')
const defaults = require('defaults')
const voca = require('voca')

/**
* @param {*} configs function's parameters
* @returns WOL url based on language and time
*/
const getUrl = function (configs) {
    const config = defaults(configs, {
        lang: 'es',
        date: Date.now()
    })
    const baseUrl = 'https://wol.jw.org'
    var lang, r, lp
    switch (config.lang) {
        case 'en':
        lang = 'en'
        r = 'r1'
        lp = 'lp-e'
        break
        case 'es':
        lang = 'es'
        r = 'r4'
        lp = 'lp-s'
        break
        default:
            throw Error(`Language '${config.lang}' not supported`)
    }
    return `${baseUrl}/${lang}/wol/dt/${r}/${lp}/${moment(config.date).format('YYYY/MM/DD')}`
}
const parseAssign = function(assign){
    voca.words(assign,/d/)
}

module.exports = {
    getUrl,
    parseAssign
}
