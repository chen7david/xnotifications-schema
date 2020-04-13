# X-Notifications Schema
```js

const { 
    Schema,
    DefaultSchema, 
    JoiSchema,
    SchemaBundle
} = require('xnotifications-schema')

const notifications = requir('xnotifications')(SchemaBundle)

app.use(notifications)

// for joi schemas this might come in handy
const USD = [
    'any.required',
    'string.empty',
    'boolean.base',
    'number.base',
    'number.integer',
    'array.base',
    'string.email'
]
        
const MSD = [
    'string.min',
    'string.max',
    'any.only'
]

```