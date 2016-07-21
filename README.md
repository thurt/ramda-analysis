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

Function | Input | Output
------------|--------|----------
adjust | `R.adjust(f, -1, [a, b])`<br>`R.adjust(f, 0, [a, b])` | `[a, f(b)]`<br>`[f(a), b]`
ap | `R.ap([f, g], [a, b])` | `[f(a), f(b), g(a), g(b)]`
apply	| `R.apply(f, [a, b, c])` | `f(a, b, c)`
applySpec | `R.applySpec({ foo: f, bar: { baz: g } })(a, b)` | `{ foo: f(a, b), bar: { baz: g(a, b) } }` 
binary | `R.binary(f)(a, b, c)` | `f(a, b)`
bind | `R.bind(f, o)` | `f.bind(o)`
call | `R.call(f)(a, b)` | `f(a, b)`
compose	| `R.compose(f, g, h)(a)`	| `f(g(h(a)))`
composeK | `R.composeK(f, g, h)(a)` | `R.chain(f, R.chain(g, h(a)))`
converge | `R.converge(f, [g, h])(a, b)` | `f(g(a, b), h(a, b))`
flip | `R.flip(f)(a, b, c)` | `f(b, a, c)`
~~forEach~~ | ~~`R.forEach(f, [a, b, c])`~~ | ~~`[a, b, c]`~~
identity | `R.identity(a)` | `a`
invoker | `R.invoker(0, 'method')(o)`<br>`R.inovker(1, 'method')(a, o)`<br>`R.invoker(2, 'method')(a, b, o)` | `o['method']()`<br>`o['method'](a)`<br>`o['method'](a, b)`
juxt | `R.juxt([f, g])(a, b)` | `[f(a, b), g(a, b)]`
map | `R.map(f, [a, b])`<br>`R.map(f, { a: 1, b: 2 })`<br>`R.map(f, functor_o)` | `[f(a), f(b)]`<br>`{ a: f(1), b: f(2) }`<br>`functor_o.map(f)`
merge | `R.merge({ a: 1, b: 2 }, { c: 3 })` | `{ a: 1, b: 2, c: 3 }`
mergeAll | `R.mergeAll([`<br>`  { a: 1 },`<br>`  { b: 2 },`<br>`  { c: 3 }`<br>`])` | `{ a: 1, b: 2, c: 3 }`
mergeWithKey | `mergeWithKey(f,`<br>`  { a: 1, values: x },`<br>`  { b: 2, values: y })` | `{ a: 1, b: 2, `<br>`values: f('values', x, y) }`
nAry | `R.nAry(0, f)(a, b)`<br>`R.nAry(1, f)(a, b)`<br>`R.nAry(2, f)(a, b)` | `f()`<br>`f(a)`<br>`f(a, b)`
nth | `R.nth(-1, [a, b, c])`<br>`R.nth(0, [a, b, c])`<br>`R.nth(1, [a, b, c])` | `c`<br>`a`<br>`b`
nthArg | `R.nthArg(-1)(a, b, c)`<br>`R.nthArg(0)(a, b, c)`<br>`R.nthArg(1)(a, b, c)` | `c`<br>`a`<br>`b`
partial | `R.partial(f, [a, b])(c, d)` | `f(a, b, c, d)`
partialRight | `R.partialRight(f, [a, b])(c, d)` | `f(c, d, a, b)`
pipe | `R.pipe(f, g, h)(a, b)` | `h(g(f(a, b)))`
pipeK | `R.pipeK(f, g, h)(a, b)` | `R.chain(h, R.chain(g, f(a, b)))`
pluck | `R.pluck(0, [[1, 2], [3, 4], [5, 6]])`<br>`R.pluck('a', [{a: 1, b: 2}, {a: 3, b: 4}, {a: 5, b: 6}])` | `[1, 3, 5]`<br>`[1, 3, 5]`
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
zip | `R.zip([a, b], [c, d])` | `[[a, c], [b, d]]`
zipWith | `R.zipWith(f, [a, b], [c, d])` | `[f(a, c), f(b, d)]`

These two don't fit nicely in a table:
```javascript
// mapAccum(f, acc, [a, b, c])
// * f must return an array of length 2 like [acc, outputVal]
[
  f(f(f(acc, a)[0], b)[0], c),
  [ 
    f(acc, a)[1],  
    f(f(acc, a)[0], b)[1],
    f(f(f(acc, a)[0], b)[0], c)[1]
  ]
]

// mapAccumRight(f, acc, [a, b, c])
// * f must return an array of length 2 like [acc, outputVal]
[
  f(f(f(acc, c)[0], b)[0], a),
  [
    f(acc, c)[1], 
    f(f(acc, c)[0], b)[1] ,
    f(f(f(acc, c)[0], b)[0], a)[1]
  ]
]
```