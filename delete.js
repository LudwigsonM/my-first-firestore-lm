import { restaurantsCol } from "./connectDb.js"

// delete XuRovQwi1YrlL9Zjwl8k
// delete D0Ewvg14W9oWWZBqVv0

restaurantsCol.doc('XuRovQwi1YrlL9Zjwl8k').delete()
    .then(res => console.log('Success Deleting XuRovQwi1YrlL9Zjwl8k !!'))
    .catch(err => console.error('Error deleting XuRovQwi1YrlL9Zjwl8k', err))

restaurantsCol.doc('D0Ewvg14W9oWWZBqVv0').delete()
    .then(res => console.log('Success deleting D0Ewvg14W9oWWZBqVv0'))
    .catch(err => console.err('Error deleting D0Ewvg14W9oWWZBqVv0', err))