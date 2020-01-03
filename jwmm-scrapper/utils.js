const moment = require('moment')
const defaults = require('defaults')

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
const parseAssign = function (assign) {
  /**
     * Structure: <Assign's title>(<assign's length>)<assign's description>(<assign's lesson>)
     */
  let _assign = assign
  const _assignData = {}
  // gets assignTitle:
  const titleRE = /([(]+)/
  _assignData.title = _assign.split(titleRE)[0].trim()
  _assign = _assign.substring(_assignData.title.length).trim()
  // english only
  _assignData.title = _assignData.title.replace(':', '')
  if (!_assign) return _assignData
  // gets assign's length
  _assignData.length = _assign.split(')')[0].trim()
  _assign = _assign.substring(_assignData.length.length).trim()
  _assignData.length = _assignData.length.replace('(', '').trim()
  _assign = _assign.replace(')', '').trim()
  if (!_assign) return _assignData
  // get assign's description
  _assignData.description = _assign.split('(')[0].trim()
  _assign = _assign.substring(_assignData.description.length).trim()
  _assignData.description = _assignData.description.replace(':', '').trim()
  if (!_assign) return _assignData
  try {
    _assignData.lesson = parseInt(_assign.replace(/[^0-9]+/g, ''))
  } catch (err) { return _assignData }
  return _assignData
}

module.exports = {
  getUrl,
  parseAssign
}
