## JWMM - Web Scrapper

### Usage
```js
const wol = require('jwmm-scrapper')

const { ministrySchool } = await wol(Date.now())
console.log(ministrySchool)
```
Returns: 
```javascript
[{
    title: 'Third Return Visit',
    length: '3 min. or less',
    description: 'Choose your own scripture, and give the householder a meeting invitation.',
    lesson: 3
  },
  {
    title: 'Third Return Visit',
    length: '4 min. or less',
    description: 'Choose your own scripture, and offer a study publication.',
    lesson: 9
  },
  {
    title: 'Bible Study',
    length: '5 min. or less',
    description: 'jl lesson 12',
    lesson: 6
  }
]
```