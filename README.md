Ongoing discussion of analysis topics are found [here](https://github.com/ramda/ramda/issues/1776)

Function | Input | Output
------------|--------|----------
adjust | `R.adjust(f, x, [a, b, c])` where `x = 1` | `[a, f(b), c]`
ap | `R.ap([f, g], [a, b])` | `[f(a), f(b), g(a), g(b)]`
apply	| `R.apply(f, [a, b, c])` | `f(a, b, c)`
applySpec | `R.applySpec({foo: f, bar: {baz: g}})(a, b)` | `{foo: f(a, b), bar: {baz: g(a, b)}}` 
binary | `R.binary(f)(a, b, c)` | `f(a, b)`
bind | `R.bind(f, obj)` | `f.bind(obj)`
call | `R.call(f)(a, b)` | `f(a, b)`
compose	| `R.compose(f, g, h)(a)`	| `f(g(h(a)))`
composeK | `R.composeK(f, g, h)(a)` | `R.chain(f, R.chain(g, h(a)))`
converge | `R.converge(f, [g, h])(a, b)` | `f(g(a, b), h(a, b))`
flip | `R.flip(f)(a, b, c)` | `f(b, a, c)`
~~forEach~~ | ~~`R.forEach(f, [a, b, c])`~~ | ~~`[a, b, c]`~~
identity | `R.identity(a)` | `a`
invoker | `R.invoker(2, 'method_name')(a, b, c)` | `c.method_name(a, b)`
juxt | `R.juxt([f, g])(a, b)` | `[f(a, b), g(a, b)]`
map | `R.map(f, [a, b])`<br>`R.map(f, { a: _, b: _ })`<br>`R.map(f, functor_obj)` | `[f(a), f(b)]`<br>`{ a: f(_), b: f(_) }`<br>`functor_obj.map(f)`
merge | `R.merge({ a: _, b: _ }, { c: _ })` | `{ a: _, b: _, c: _ }`
mergeAll | `R.mergeAll([`<br>`  { a: _ },`<br>`  { b: _ },`<br>`  { c: _ }`<br>`])` | `{ a: _, b: _, c: _ }`
mergeWithKey | `mergeWithKey(f,`<br>`  { a: _, values: x },`<br>`  { b: _, values: y })` | `{ a: _, b: _, `<br>`values: f('values', x, y) }`
nAry | `R.nAry(x, f)(a, b, c)` | `f(a)` when x = 1<br>`f(a, b)` when x = 2<br>`f(a, b, c)` when x = 3
nth | `R.nth(n, [a, b])` | `a` when n = -2<br>`b` when n = -1<br> `a` when n = 0<br>`b` when n = 1
nthArg | `R.nthArg(n)(a, b)` | see `nth`
partial | `R.partial(f, [a, b])(c, d)` | `f(a, b, c, d)`
partialRight | `R.partialRight(f, [a, b])(c, d)` | `f(c, d, a, b)`
pipe | `R.pipe(f, g, h)(a, b)` | `h(g(f(a, b)))`
pipeK | `R.pipeK(f, g, h)(a, b)` | `R.chain(h, R.chain(g, f(a, b)))`
pluck | `R.pluck(0, [[a], [b], [c]])`<br>`R.pluck(1, [[a], [b], [c]])`<br>`R.pluck(1, [[a, b], [c]])` | `[a, b, c]`<br>`[undefined, undefined, undefined]`<br>`[b, undefined]`
reduce | `R.reduce(f, acc, [a, b])` | `f(f(acc, a), b)`
repeat | `R.repeat([a, b], x)` | `[]` when x = 0<br>`[[a, b]]` when x  = 1<br>`[[a, b], [a, b]]` when x = 2
scan | `R.scan(f, a, [b, c])` | `[a, f(a, b), f(f(a, b), c)]`
tap | `R.tap(f, a)` | `a`
take | `R.take(-1, [a, b])`<br>`R.take(0, [a, b])`<br>`R.take(1, [a, b])`<br>`R.take(2, [a, b])`<br>`R.take(3, [a, b])` | `[a, b]` (bug?)<br>`[]`<br>`[a]`<br>`[a, b]`<br>`[a, b]`
times | `R.times(f, -1)`<br>`R.times(f, 0)`<br>`R.times(f, 1)`<br>`R.times(f, 2)` | `Error`<br>`[]`<br>`[f(0)]`<br>`[f(0), f(1)]`
transpose | `R.transpose([[a], [b], [c]])`<br>`R.transpose([[a, b], [c, d]])`<br>`R.transpose([[a, b], [c]])` | `[a, b, c]`<br>`[[a, c], [b, d]]`<br>`[[a, c], [b]]`
unapply | `R.unapply(f)(a, b)` | `f([a, b])`
unary | `R.unary(f)(a, b, c)` | `f(a)`
unfold | `R.unfold(f, x)` | `[f(x)[0], f(f(x)[1])[0], f(f(f(x)[1])[1])[0], ...]`
update | `R.update(1, 11, [0,1,2])` | `[0, 11, 2]` (from documentation)
useWith | `R.useWith(f, [g, h])(a, b)` | `f(g(a), h(b))`
wrap | `R.wrap(f, g)(a, b)` | `g(f, a, b)`
xprod | `R.xprod([1, 2], [3, 4])` | `[[1, 3], [1, 4], [2, 3], [2, 4]]`
zip | `R.zip([1, 2], [3, 4])` | `[[1, 3], [2, 4]]`
zipWith | `R.zipWith(f, [a1, a2], [b1, b2])` | `[f(a1, b1), f(a2, b2)]`

These two don't fit nicely in a table:
```javascript
// mapAccum(f, acc, [a, b])
// * f must return an array of length 2 like [acc, outputVal]
[
  f(f(acc, a)[0], b)[0],
  [ 
    f(acc, a)[1],  
    f(f(acc, a)[0], b)[1] 
  ]
]

// mapAccumRight(f, acc, [a, b])
// * f must return an array of length 2 like [acc, outputVal]
[
  f(f(acc, b)[0], a)[0],
  [
    f(acc, b)[1], 
    f(f(acc, b)[0], a)[1] 
  ]
]
```