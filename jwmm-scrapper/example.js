import wol from './'

const data = async function () {
  const { bibleTreasures, ministrySchool } = await wol({ lang: 'en' })
  console.log(bibleTreasures, ministrySchool)
}

data()
