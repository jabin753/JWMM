const wol = require('./')

const data = async function () {
  const meeting = await wol({lang: 'es',date: '2020-2-20'})
  console.log(meeting)
}

data()
