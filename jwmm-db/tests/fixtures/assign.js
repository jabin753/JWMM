'use strict'

const assign = {
  date: new Date(),
  interventionType: 'TESOROS',
  title: 'No temamos a las bestias espantosas',
  description: '',
  lengthTime: '10 mins'
}
const assigns = [assign, {
  date: '2019-12-16',
  interventionType: 'PERLAS',
  title: 'Busquemos Perlas Escondidas',
  description: '',
  lengthTime: '8 mins'
}, {
  date: '2019-12-16',
  interventionType: 'PERLAS',
  title: 'Video de la primera revisita',
  description: 'Ponga el video y analícelo con el auditorio.',
  lengthTime: '5 mins'
}]

module.exports = {
  single: assign,
  all: assigns
}
