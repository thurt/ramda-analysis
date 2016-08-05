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

Function | Input | Output
------------|--------|----------
adjust | `R.adjust(f, -1, [a, b])`<br>`R.adjust(f, 0, [a, b])` | `[a, f(b)]`<br>`[f(a), b]`
ap | `R.ap([f, g], [a, b])` | `[f(a), f(b), g(a), g(b)]`
apply	| `R.apply(f, [a, b, c])` | `f(a, b, c)`
applySpec | `R.applySpec({ x: f, y: { z: g } })(a, b)` | `{ x: f(a, b), y: { z: g(a, b) } }` 
binary | `R.binary(f)(a, b, c)` | `f(a, b)`
bind | `R.bind(f, o)(a, b)` | `f.call(o, a, b)`
call | `R.call(f, a, b)` | `f(a, b)`
compose	| `R.compose(f, g, h)(a, b)`	| `f(g(h(a, b)))`
composeK | `R.composeK(f, g, h)(a, b)` | `R.chain(f, R.chain(g, h(a, b)))`
converge | `R.converge(f, [g, h])(a, b)` | `f(g(a, b), h(a, b))`
flip | `R.flip(f)(a, b, c)` | `f(b, a, c)`
~~forEach~~ | ~~`R.forEach(f, [a, b, c])`~~ | ~~`[a, b, c]`~~
identity | `R.identity(a)` | `a`
invoker | `R.invoker(0, 'method')(o)`<br>`R.inovker(1, 'method')(a, o)`<br>`R.invoker(2, 'method')(a, b, o)` | `o['method']()`<br>`o['method'](a)`<br>`o['method'](a, b)`
juxt | `R.juxt([f, g, h])(a, b)` | `[f(a, b), g(a, b), h(a, b)]`
map | `R.map(f, [a, b])`<br>`R.map(f, { x: a, y: b })`<br>`R.map(f, functor_o)` | `[f(a), f(b)]`<br>`{ x: f(a), y: f(b) }`<br>`functor_o.map(f)`
merge | `R.merge({ x: 1, y: 2 }, { y: 5, z: 3 })` | `{ x: 1, y: 5, z: 3 }`
mergeAll | `R.mergeAll([`<br>`  { x: 1 },`<br>`  { y: 2 },`<br>`  { z: 3 }`<br>`])` | `{ x: 1, y: 2, z: 3 }`
mergeWithKey | `R.mergeWithKey(f, `<br>`{ x: 1, y: 2 },`<br>`{ y: 5, z: 3 })` | `{ x: 1, y: f('y', 2, 5), z: 3 }`
nAry | `R.nAry(0, f)(a, b)`<br>`R.nAry(1, f)(a, b)`<br>`R.nAry(2, f)(a, b)` | `f()`<br>`f(a)`<br>`f(a, b)`
nth | `R.nth(-1, [a, b, c])`<br>`R.nth(0, [a, b, c])`<br>`R.nth(1, [a, b, c])` | `c`<br>`a`<br>`b`
nthArg | `R.nthArg(-1)(a, b, c)`<br>`R.nthArg(0)(a, b, c)`<br>`R.nthArg(1)(a, b, c)` | `c`<br>`a`<br>`b`
partial | `R.partial(f, [a, b])(c, d)` | `f(a, b, c, d)`
partialRight | `R.partialRight(f, [a, b])(c, d)` | `f(c, d, a, b)`
pipe | `R.pipe(f, g, h)(a, b)` | `h(g(f(a, b)))`
pipeK | `R.pipeK(f, g, h)(a, b)` | `R.chain(h, R.chain(g, f(a, b)))`
pluck | `R.pluck('x', [`<br>`{x: 1, y: 2}, `<br>`{x: 3, y: 4}, `<br>`{x: 5, y: 6}`<br>`])`<br>`R.pluck(0, [`<br>`[1, 2], `<br>`[3, 4], `<br>`[5, 6]`<br>`])` | `[1, 3, 5]`<br>`[1, 3, 5]`
reduce | `R.reduce(f, a, [b, c, d])` | `f(f(f(a, b), c), d)`
repeat | `R.repeat([a, b], 0)`<br>`R.repeat([a, b], 1)`<br>`R.repeat([a, b], 2)` | `[]`<br>`[[a, b]]`<br>`[[a, b], [a, b]]`
scan | `R.scan(f, a, [b, c])` | `[a, f(a, b), f(f(a, b), c)]`
tap | `R.tap(f, a)` | `a`
take | `R.take(-1, [a, b])`<br>`R.take(0, [a, b])`<br>`R.take(1, [a, b])`<br>`R.take(2, [a, b])` | `[a, b]`<br>`[]`<br>`[a]`<br>`[a, b]`
times | `R.times(f, -1)`<br>`R.times(f, 0)`<br>`R.times(f, 1)`<br>`R.times(f, 2)` | `Error`<br>`[]`<br>`[f(0)]`<br>`[f(0), f(1)]`
transpose | `R.transpose([[a], [b], [c]])`<br>`R.transpose([[a, b], [c, d]])`<br>`R.transpose([[a, b], [c]])` | `[a, b, c]`<br>`[[a, c], [b, d]]`<br>`[[a, c], [b]]`
unapply | `R.unapply(f)(a, b)` | `f([a, b])`
unary | `R.unary(f)(a, b, c)` | `f(a)`
unfold | `R.unfold(f, x)` | `[f(x)[0], f(f(x)[1])[0], f(f(f(x)[1])[1])[0], ...]`
update | `R.update(-1, a, [b, c])`<br>`R.update(0, a, [b, c])`<br>`R.update(1, a, [b, c])` | `[b, a]`<br>`[a, c]`<br>`[b, a]`
useWith | `R.useWith(f, [g, h])(a, b)` | `f(g(a), h(b))`
wrap | `R.wrap(f, g)(a, b)` | `g(f, a, b)`
xprod | `R.xprod([a, b], [c, d])` | `[[a, c], [a, d], [b, c], [b, d]]`
zip | `R.zip([a, b, c], [d, e, f])` | `[[a, d], [b, e], [c, f]]`
zipWith | `R.zipWith(fn, [a, b, c], [d, e, f])` | `[fn(a, d), fn(b, e), fn(c, f)]`

These two don't fit nicely in a table:
```javascript
// mapAccum(f, a, [b, c, d])
// * f must return an array of length 2 like [acc, output]
[
  f(f(f(a, b)[0], c)[0], d)[0],
  [ 
    f(a, b)[1],  
    f(f(a, b)[0], c)[1],
    f(f(f(a, b)[0], c)[0], d)[1]
  ]
]

// mapAccumRight(f, a, [b, c, d])
// * f must return an array of length 2 like [acc, output]
[
  f(f(f(a, d)[0], c)[0], b)[0],
  [
    f(a, d)[1], 
    f(f(a, d)[0], c)[1] ,
    f(f(f(a, d)[0], c)[0], b)[1]
  ]
]
```
