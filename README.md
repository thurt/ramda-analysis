The purpose of this analysis is to formulate a generics notation that represents how data is transformed and functions are applied by [Ramda](https://github.com/ramda/ramda) functions. 

This approach is similar in spirit to [Wolfram Mathematica](https://reference.wolfram.com/language/guide/FunctionalProgramming.html), where 

> Treating expressions like f[x] as both symbolic data and the application of a function f provides a uniquely powerful way to integrate structure and function—and an efficient, elegant representation of many common computations."

Ongoing discussion of analysis topics are also found [here](https://github.com/ramda/ramda/issues/1776)

<hr>

key | type
----|-----
`a, b, c...` | any type
`f, g, h...` | Function
`o` | Object
`x, y, z` | Object property

file | desc
-----|----
[symbols.js](symbols.js) | Any new updates should go here. I changed the format to make it easier to translate into the ramda/ramda source files. 
[old_table.md](old_table.md) | The old table format. It will not receive new updates.
[main.js](main.js) | use with the ramda repo to automatically modify `/src` files to remove/add @symb tags to the respective functions.

```javascript
// Example execution for main.js
// node main.js <symbols file> <ramda/src path>
node main.js ./symbols.js ../ramda/src
```
After running this command, you should be able to see the differences represented in your local ramda repo's `git status`.