# Lorem Test
The lorem test library consists of a single lorem() function, which returns a placeholder string of the specified length based on lorem ipsum.

**Example Usage**
```js
import {lorem} from "lorem-test";
console.log(lorem(3));//Lorem ipsum dolor
```
Note that passing a number greater than the number of words in the original lorem text causes a wrap around which repeats the text as much as is necessary to obtain the required number of words.
