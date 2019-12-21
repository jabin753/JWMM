# JWMM-DB

Meeting Management for JW - Database Module

  

## Usage

```javascript
const db = require('jwmm-db')
//Must use async/await functions
async function foo() {
	const { Assign, Member } = await db(configs)
	Assign.createAssign(assign)
}
```

