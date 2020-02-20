'use strict'

const joseph = {
  firstName: 'John',
  lastName: 'Doe',
  notes: 'Young man',
  details: {
    birthDate: '1997-11-24',
    tel: '7777777777',
    mail: 'John@mail.com'
  },
  privileges: {
    initialPray: true,
    isAssistant: true
  }
}
const carlos = {
  firstName: 'Carlos David',
  lastName: 'Godoy',
  privileges: {
    isElder: true,
    isServant: false
  }
}

module.exports = {
  single: carlos,
  all: [joseph, carlos]
}
