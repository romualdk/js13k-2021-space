export const obj = {
  v:
`1 2 0
7 1 0
2 1 7
0 5 0
0 2 0
0 0 1
0 3 2
0 1 13
0 3 6`,
  f:
`1 5 4
7 3 2
3 7 9
3 6 2
1 7 2
8 3 9
6 3 8
6 1 2
7 1 4
6 5 1`
}

function changeFaceVertexOrder (f) {
  let l = f.length / 3
  let out = []

  for (let i = 0; i < l; i++) {
    let ii = i * 3
    out[ii] = f[ii + 2]
    out[ii + 1] = f[ii + 1]
    out[ii + 2] = f[ii]
  }

  return out
}

export function xMirror (obj) {
  let out = {
    v: [...obj.v],
    f: [...obj.f]
  }

  let nv = out.v.length / 3
  for (let i = 0; i < nv; i++) {
    out.v[i * 3] *= -1
  }

  for (let i in out.f) {
    out.f[i] += nv
  }
  out.f = changeFaceVertexOrder(out.f)

  return out
}

export function objStrToArr (obj) {
  let res = {
    v: obj.v.split(/\s+/),
    f: obj.f.split(/\s+/)
  }

  for (let i in res.v) {
    res.v[i] *= 1
  }

  for (let i in res.f) {
    res.f[i] *= 1
    res.f[i] -= 1
  }

  return res
}
