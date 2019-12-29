const wol = require('./')

const data = async function() {
const d1 = await wol({lang: 'en'})
console.log(d1)
}()