# removeAllAfterFirst(value, array): void

Removes everything after first instance of `value` in `array`.

# removeAllAfterLast(value, array): void

Removes everything after last instance of `value` in `array`.

For both, `value` cannot be an object.  It can be an array.


Examples:
```
let arr = [5,10,15,20,10,50,60,70];  
removeAllAfterFirst(10, arr);  
// arr is now [5,10]  

let arr = [5,10,15,20,10,50,60,70];  
removeAllAfterLast(10, arr);  
// arr is now [5,10,15,20,10]  
```

## Loading
```
import {removeAllAfterFirst, removeAllAfterLast}  from '@writetome51/array-remove-all-after';

```