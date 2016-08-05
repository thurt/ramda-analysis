
These are the representations that will be inserted into the ramda/ramda repo
```javascript
R.adjust(f, -1, [a, b]) = [a, f(b)]
R.adjust(f, 0, [a, b]) = [f(a), b]

R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]

R.apply(f, [a, b, c]) = f(a, b, c)

R.applySpec({ x: f, y: { z: g } })(a, b) = { x: f(a, b), y: { z: g(a, b) } }

R.binary(f)(a, b, c) = f(a, b)

R.bind(f, o)(a, b) = f.call(o, a, b)

R.call(f, a, b) = f(a, b)

R.compose(f, g, h)(a, b) = f(g(h(a, b)))

R.composeK(f, g, h)(a, b) = R.chain(f, R.chain(g, h(a, b)))

R.converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))

R.flip(f)(a, b, c) = f(b, a, c)

R.forEach(f, [a, b, c]) = [a, b, c]

R.identity(a) = a

R.invoker(0, 'method')(o) = o['method']()
R.invoker(1, 'method')(a, o) = o['method'](a)
R.invoker(2, 'method')(a, b, o) = o['method'](a, b)

R.juxt([f, g, h])(a, b) = [f(a, b), g(a, b), h(a, b)]

R.map(f, [a, b]) = [f(a), f(b)]
R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
R.map(f, functor_o) = functor_o.map(f)

R.mapAccum(f, a, [b, c, d]) = [
  f(f(f(a, b)[0], c)[0], d)[0],
  [ 
    f(a, b)[1],  
    f(f(a, b)[0], c)[1],
    f(f(f(a, b)[0], c)[0], d)[1]
  ]
]

R.mapAccumRight(f, a, [b, c, d]) = [
  f(f(f(a, d)[0], c)[0], b)[0],
  [
    f(a, d)[1], 
    f(f(a, d)[0], c)[1],
    f(f(f(a, d)[0], c)[0], b)[1]
  ]
]

R.merge({ x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: 5, z: 3 }

R.mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }

R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }

R.nAry(0, f)(a, b) = f()
R.nAry(1, f)(a, b) = f(a)
R.nAry(2, f)(a, b) = f(a, b)

R.nth(-1, [a, b, c]) = c
R.nth(0, [a, b, c]) = a
R.nth(1, [a, b, c]) = b

R.nthArg(-1)(a, b, c) = c
R.nthArg(0)(a, b, c) = a
R.nthArg(1)(a, b, c) = b

R.partial(f, [a, b])(c, d) = f(a, b, c, d)

R.partialRight(f, [a, b])(c, d) = f(c, d, a, b)

R.pipe(f, g, h)(a, b) = h(g(f(a, b)))

R.pipeK(f, g, h)(a, b) = R.chain(h, R.chain(g, f(a, b)))

R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]

R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)

R.repeat(a, 0) = []
R.repeat(a, 1) = [a]
R.repeat(a, 2) = [a, a]

R.scan(f, a, [b, c]) = [a, f(a, b), f(f(a, b), c)]

R.tap(f, a) = a

R.take(-1, [a, b]) = [a, b]
R.take(0, [a, b]) = []
R.take(1, [a, b]) = [a]
R.take(2, [a, b]) = [a, b]

R.times(f, 0) = []
R.times(f, 1) = [f(0)]
R.times(f, 2) = [f(0), f(1)]

R.transpose([[a], [b], [c]]) = [a, b, c]
R.transpose([[a, b], [c, d]]) = [[a, c], [b, d]]
R.transpose([[a, b], [c]]) = [[a, c], [b]]

R.unapply(f)(a, b) = f([a, b])

R.unary(f)(a, b, c) = f(a)

R.unfold(f, x) = [f(x)[0], f(f(x)[1])[0], f(f(f(x)[1])[1])[0], ...]

R.update(-1, a, [b, c]) = [b, a]
R.update(0, a, [b, c]) = [a, c]
R.update(1, a, [b, c]) = [b, a]

R.useWith(f, [g, h])(a, b) = f(g(a), h(b))

R.wrap(f, g)(a, b) = g(f, a, b)

R.xprod([a, b], [c, d]) = [[a, c], [a, d], [b, c], [b, d]]

R.zip([a, b, c], [d, e, f]) = [[a, d], [b, e], [c, f]]

R.zipWith(fn, [a, b, c], [d, e, f]) = [fn(a, d), fn(b, e), fn(c, f)]

```