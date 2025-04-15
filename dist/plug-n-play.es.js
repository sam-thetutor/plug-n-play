import { HttpAgent as Ut, Actor as re, Cbor as fn, Expiry as gn, SubmitRequestType as pn, compare as dn, requestIdOf as wn, Certificate as Ye, LookupStatus as Oe, lookupResultToBuffer as yn, IC_ROOT_KEY as mn } from "@dfinity/agent";
import { AuthClient as En } from "@dfinity/auth-client";
import { asciiStringToByteArray as In, arrayOfNumberToUint8Array as Cn, bigEndianCrc32 as Bn, uint8ArrayToHexString as vn, hexStringToUint8Array as Ke } from "@dfinity/utils";
import { Principal as Bt } from "@dfinity/principal";
import { DelegationChain as bn, Delegation as Tn, Ed25519KeyIdentity as Nn, DelegationIdentity as Pn } from "@dfinity/identity";
import { lebDecode as Sn, PipeArrayBuffer as On } from "@dfinity/candid";
var k;
((s) => {
  ((n) => {
    n.INIT = "INIT", n.READY = "READY", n.CONNECTING = "CONNECTING", n.CONNECTED = "CONNECTED", n.DISCONNECTING = "DISCONNECTING", n.DISCONNECTED = "DISCONNECTED", n.ERROR = "ERROR";
  })(s.Status || (s.Status = {}));
})(k || (k = {}));
const Mn = "data:image/webp;base64,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";
var Rn = Object.create, _e = Object.defineProperty, Un = Object.getOwnPropertyDescriptor, Dn = Object.getOwnPropertyNames, Qn = Object.getPrototypeOf, Ln = Object.prototype.hasOwnProperty, Ze = (s, n) => () => (n || s((n = { exports: {} }).exports, n), n.exports), zn = (s, n, r, A) => {
  if (n && typeof n == "object" || typeof n == "function") for (let a of Dn(n)) !Ln.call(s, a) && a !== r && _e(s, a, { get: () => n[a], enumerable: !(A = Un(n, a)) || A.enumerable });
  return s;
}, kn = (s, n, r) => (r = s != null ? Rn(Qn(s)) : {}, zn(!s || !s.__esModule ? _e(r, "default", { value: s, enumerable: !0 }) : r, s));
function Fn(s) {
  return s instanceof Uint8Array || s != null && typeof s == "object" && s.constructor.name === "Uint8Array";
}
function $e(s, ...n) {
  if (!Fn(s)) throw new Error("Uint8Array expected");
  if (n.length > 0 && !n.includes(s.length)) throw new Error(`Uint8Array expected of length ${n}, not of length=${s.length}`);
}
function je(s, n = !0) {
  if (s.destroyed) throw new Error("Hash instance has been destroyed");
  if (n && s.finished) throw new Error("Hash#digest() has already been called");
}
function xn(s, n) {
  $e(s);
  let r = n.outputLen;
  if (s.length < r) throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
var Me = (s) => new DataView(s.buffer, s.byteOffset, s.byteLength), Pt = (s, n) => s << 32 - n | s >>> n;
new Uint8Array(new Uint32Array([287454020]).buffer)[0];
function Zn(s) {
  if (typeof s != "string") throw new Error(`utf8ToBytes expected string, got ${typeof s}`);
  return new Uint8Array(new TextEncoder().encode(s));
}
function tn(s) {
  return typeof s == "string" && (s = Zn(s)), $e(s), s;
}
var Jn = class {
  clone() {
    return this._cloneInto();
  }
};
function Yn(s) {
  let n = (A) => s().update(tn(A)).digest(), r = s();
  return n.outputLen = r.outputLen, n.blockLen = r.blockLen, n.create = () => s(), n;
}
function jn(s, n, r, A) {
  if (typeof s.setBigUint64 == "function") return s.setBigUint64(n, r, A);
  let a = BigInt(32), m = BigInt(4294967295), B = Number(r >> a & m), l = Number(r & m), U = A ? 4 : 0, S = A ? 0 : 4;
  s.setUint32(n + U, B, A), s.setUint32(n + S, l, A);
}
var Wn = (s, n, r) => s & n ^ ~s & r, Gn = (s, n, r) => s & n ^ s & r ^ n & r, Hn = class extends Jn {
  constructor(s, n, r, A) {
    super(), this.blockLen = s, this.outputLen = n, this.padOffset = r, this.isLE = A, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(s), this.view = Me(this.buffer);
  }
  update(s) {
    je(this);
    let { view: n, buffer: r, blockLen: A } = this;
    s = tn(s);
    let a = s.length;
    for (let m = 0; m < a; ) {
      let B = Math.min(A - this.pos, a - m);
      if (B === A) {
        let l = Me(s);
        for (; A <= a - m; m += A) this.process(l, m);
        continue;
      }
      r.set(s.subarray(m, m + B), this.pos), this.pos += B, m += B, this.pos === A && (this.process(n, 0), this.pos = 0);
    }
    return this.length += s.length, this.roundClean(), this;
  }
  digestInto(s) {
    je(this), xn(s, this), this.finished = !0;
    let { buffer: n, view: r, blockLen: A, isLE: a } = this, { pos: m } = this;
    n[m++] = 128, this.buffer.subarray(m).fill(0), this.padOffset > A - m && (this.process(r, 0), m = 0);
    for (let O = m; O < A; O++) n[O] = 0;
    jn(r, A - 8, BigInt(this.length * 8), a), this.process(r, 0);
    let B = Me(s), l = this.outputLen;
    if (l % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    let U = l / 4, S = this.get();
    if (U > S.length) throw new Error("_sha2: outputLen bigger than state");
    for (let O = 0; O < U; O++) B.setUint32(4 * O, S[O], a);
  }
  digest() {
    let { buffer: s, outputLen: n } = this;
    this.digestInto(s);
    let r = s.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(s) {
    s || (s = new this.constructor()), s.set(...this.get());
    let { blockLen: n, buffer: r, length: A, finished: a, destroyed: m, pos: B } = this;
    return s.length = A, s.pos = B, s.finished = a, s.destroyed = m, A % n && s.buffer.set(r), s;
  }
}, Xn = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), zt = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]), kt = new Uint32Array(64), qn = class extends Hn {
  constructor() {
    super(64, 32, 8, !1), this.A = zt[0] | 0, this.B = zt[1] | 0, this.C = zt[2] | 0, this.D = zt[3] | 0, this.E = zt[4] | 0, this.F = zt[5] | 0, this.G = zt[6] | 0, this.H = zt[7] | 0;
  }
  get() {
    let { A: s, B: n, C: r, D: A, E: a, F: m, G: B, H: l } = this;
    return [s, n, r, A, a, m, B, l];
  }
  set(s, n, r, A, a, m, B, l) {
    this.A = s | 0, this.B = n | 0, this.C = r | 0, this.D = A | 0, this.E = a | 0, this.F = m | 0, this.G = B | 0, this.H = l | 0;
  }
  process(s, n) {
    for (let O = 0; O < 16; O++, n += 4) kt[O] = s.getUint32(n, !1);
    for (let O = 16; O < 64; O++) {
      let Q = kt[O - 15], x = kt[O - 2], X = Pt(Q, 7) ^ Pt(Q, 18) ^ Q >>> 3, M = Pt(x, 17) ^ Pt(x, 19) ^ x >>> 10;
      kt[O] = M + kt[O - 7] + X + kt[O - 16] | 0;
    }
    let { A: r, B: A, C: a, D: m, E: B, F: l, G: U, H: S } = this;
    for (let O = 0; O < 64; O++) {
      let Q = Pt(B, 6) ^ Pt(B, 11) ^ Pt(B, 25), x = S + Q + Wn(B, l, U) + Xn[O] + kt[O] | 0, X = (Pt(r, 2) ^ Pt(r, 13) ^ Pt(r, 22)) + Gn(r, A, a) | 0;
      S = U, U = l, l = B, B = m + x | 0, m = a, a = A, A = r, r = x + X | 0;
    }
    r = r + this.A | 0, A = A + this.B | 0, a = a + this.C | 0, m = m + this.D | 0, B = B + this.E | 0, l = l + this.F | 0, U = U + this.G | 0, S = S + this.H | 0, this.set(r, A, a, m, B, l, U, S);
  }
  roundClean() {
    kt.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}, Vn = class extends qn {
  constructor() {
    super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28;
  }
}, Kn = Yn(() => new Vn()), Te = class ke {
  constructor(n) {
    this.bytes = n;
  }
  static fromHex(n) {
    return new ke(Uint8Array.from(Buffer.from(n, "hex")));
  }
  static fromPrincipal({ principal: n, subAccount: r = _n.fromID(0) }) {
    let A = In(`
account-id`), a = Kn.create();
    a.update(Cn([...A, ...n.toUint8Array(), ...r.toUint8Array()]));
    let m = a.digest(), B = Bn(m), l = new Uint8Array([...B, ...m]);
    return new ke(l);
  }
  toHex() {
    return vn(this.bytes);
  }
  toUint8Array() {
    return this.bytes;
  }
  toNumbers() {
    return Array.from(this.bytes);
  }
  toAccountIdentifierHash() {
    return { hash: this.toUint8Array() };
  }
}, _n = class Ee {
  constructor(n) {
    this.bytes = n;
  }
  static fromBytes(n) {
    return n.length != 32 ? Error("Subaccount length must be 32-bytes") : new Ee(n);
  }
  static fromPrincipal(n) {
    let r = new Uint8Array(32).fill(0), A = n.toUint8Array();
    r[0] = A.length;
    for (let a = 0; a < A.length; a++) r[1 + a] = A[a];
    return new Ee(r);
  }
  static fromID(n) {
    if (n < 0) throw new Error("Number cannot be negative");
    if (n > Number.MAX_SAFE_INTEGER) throw new Error("Number is too large to fit in 32 bytes.");
    let r = new DataView(new ArrayBuffer(32));
    if (typeof r.setBigUint64 == "function") r.setBigUint64(24, BigInt(n));
    else {
      let a = BigInt(1) << BigInt(32);
      r.setUint32(24, Number(BigInt(n) >> BigInt(32))), r.setUint32(28, Number(BigInt(n) % a));
    }
    let A = new Uint8Array(r.buffer);
    return new Ee(A);
  }
  toUint8Array() {
    return this.bytes;
  }
};
/*! Bundled license information:

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
Bt.fromText("ryjl3-tyaaa-aaaaa-aaaba-cai");
Bt.fromText("qhbym-qaaaa-aaaaa-aaafq-cai");
BigInt(1095062083);
BigInt(1347768404);
BigInt(1e4);
BigInt(1e8);
var $n = Ze((s) => {
  s.byteLength = U, s.toByteArray = O, s.fromByteArray = X;
  var n = [], r = [], A = typeof Uint8Array < "u" ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (m = 0, B = a.length; m < B; ++m) n[m] = a[m], r[a.charCodeAt(m)] = m;
  var m, B;
  r[45] = 62, r[95] = 63;
  function l(M) {
    var z = M.length;
    if (z % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var Z = M.indexOf("=");
    Z === -1 && (Z = z);
    var _ = Z === z ? 0 : 4 - Z % 4;
    return [Z, _];
  }
  function U(M) {
    var z = l(M), Z = z[0], _ = z[1];
    return (Z + _) * 3 / 4 - _;
  }
  function S(M, z, Z) {
    return (z + Z) * 3 / 4 - Z;
  }
  function O(M) {
    var z, Z = l(M), _ = Z[0], T = Z[1], q = new A(S(M, _, T)), at = 0, ct = T > 0 ? _ - 4 : _, j;
    for (j = 0; j < ct; j += 4) z = r[M.charCodeAt(j)] << 18 | r[M.charCodeAt(j + 1)] << 12 | r[M.charCodeAt(j + 2)] << 6 | r[M.charCodeAt(j + 3)], q[at++] = z >> 16 & 255, q[at++] = z >> 8 & 255, q[at++] = z & 255;
    return T === 2 && (z = r[M.charCodeAt(j)] << 2 | r[M.charCodeAt(j + 1)] >> 4, q[at++] = z & 255), T === 1 && (z = r[M.charCodeAt(j)] << 10 | r[M.charCodeAt(j + 1)] << 4 | r[M.charCodeAt(j + 2)] >> 2, q[at++] = z >> 8 & 255, q[at++] = z & 255), q;
  }
  function Q(M) {
    return n[M >> 18 & 63] + n[M >> 12 & 63] + n[M >> 6 & 63] + n[M & 63];
  }
  function x(M, z, Z) {
    for (var _, T = [], q = z; q < Z; q += 3) _ = (M[q] << 16 & 16711680) + (M[q + 1] << 8 & 65280) + (M[q + 2] & 255), T.push(Q(_));
    return T.join("");
  }
  function X(M) {
    for (var z, Z = M.length, _ = Z % 3, T = [], q = 16383, at = 0, ct = Z - _; at < ct; at += q) T.push(x(M, at, at + q > ct ? ct : at + q));
    return _ === 1 ? (z = M[Z - 1], T.push(n[z >> 2] + n[z << 4 & 63] + "==")) : _ === 2 && (z = (M[Z - 2] << 8) + M[Z - 1], T.push(n[z >> 10] + n[z >> 4 & 63] + n[z << 2 & 63] + "=")), T.join("");
  }
}), ti = Ze((s) => {
  s.read = function(n, r, A, a, m) {
    var B, l, U = m * 8 - a - 1, S = (1 << U) - 1, O = S >> 1, Q = -7, x = A ? m - 1 : 0, X = A ? -1 : 1, M = n[r + x];
    for (x += X, B = M & (1 << -Q) - 1, M >>= -Q, Q += U; Q > 0; B = B * 256 + n[r + x], x += X, Q -= 8) ;
    for (l = B & (1 << -Q) - 1, B >>= -Q, Q += a; Q > 0; l = l * 256 + n[r + x], x += X, Q -= 8) ;
    if (B === 0) B = 1 - O;
    else {
      if (B === S) return l ? NaN : (M ? -1 : 1) * (1 / 0);
      l = l + Math.pow(2, a), B = B - O;
    }
    return (M ? -1 : 1) * l * Math.pow(2, B - a);
  }, s.write = function(n, r, A, a, m, B) {
    var l, U, S, O = B * 8 - m - 1, Q = (1 << O) - 1, x = Q >> 1, X = m === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, M = a ? 0 : B - 1, z = a ? 1 : -1, Z = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
    for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (U = isNaN(r) ? 1 : 0, l = Q) : (l = Math.floor(Math.log(r) / Math.LN2), r * (S = Math.pow(2, -l)) < 1 && (l--, S *= 2), l + x >= 1 ? r += X / S : r += X * Math.pow(2, 1 - x), r * S >= 2 && (l++, S /= 2), l + x >= Q ? (U = 0, l = Q) : l + x >= 1 ? (U = (r * S - 1) * Math.pow(2, m), l = l + x) : (U = r * Math.pow(2, x - 1) * Math.pow(2, m), l = 0)); m >= 8; n[A + M] = U & 255, M += z, U /= 256, m -= 8) ;
    for (l = l << m | U, O += m; O > 0; n[A + M] = l & 255, M += z, l /= 256, O -= 8) ;
    n[A + M - z] |= Z * 128;
  };
}), ei = Ze((s) => {
  var n = $n(), r = ti(), A = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  s.Buffer = l, s.SlowBuffer = T, s.INSPECT_MAX_BYTES = 50;
  var a = 2147483647;
  s.kMaxLength = a, l.TYPED_ARRAY_SUPPORT = m(), !l.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  function m() {
    try {
      let t = new Uint8Array(1), e = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), t.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(l.prototype, "parent", { enumerable: !0, get: function() {
    if (l.isBuffer(this)) return this.buffer;
  } }), Object.defineProperty(l.prototype, "offset", { enumerable: !0, get: function() {
    if (l.isBuffer(this)) return this.byteOffset;
  } });
  function B(t) {
    if (t > a) throw new RangeError('The value "' + t + '" is invalid for option "size"');
    let e = new Uint8Array(t);
    return Object.setPrototypeOf(e, l.prototype), e;
  }
  function l(t, e, i) {
    if (typeof t == "number") {
      if (typeof e == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
      return Q(t);
    }
    return U(t, e, i);
  }
  l.poolSize = 8192;
  function U(t, e, i) {
    if (typeof t == "string") return x(t, e);
    if (ArrayBuffer.isView(t)) return M(t);
    if (t == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
    if (Nt(t, ArrayBuffer) || t && Nt(t.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Nt(t, SharedArrayBuffer) || t && Nt(t.buffer, SharedArrayBuffer))) return z(t, e, i);
    if (typeof t == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    let h = t.valueOf && t.valueOf();
    if (h != null && h !== t) return l.from(h, e, i);
    let d = Z(t);
    if (d) return d;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof t[Symbol.toPrimitive] == "function") return l.from(t[Symbol.toPrimitive]("string"), e, i);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
  }
  l.from = function(t, e, i) {
    return U(t, e, i);
  }, Object.setPrototypeOf(l.prototype, Uint8Array.prototype), Object.setPrototypeOf(l, Uint8Array);
  function S(t) {
    if (typeof t != "number") throw new TypeError('"size" argument must be of type number');
    if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"');
  }
  function O(t, e, i) {
    return S(t), t <= 0 ? B(t) : e !== void 0 ? typeof i == "string" ? B(t).fill(e, i) : B(t).fill(e) : B(t);
  }
  l.alloc = function(t, e, i) {
    return O(t, e, i);
  };
  function Q(t) {
    return S(t), B(t < 0 ? 0 : _(t) | 0);
  }
  l.allocUnsafe = function(t) {
    return Q(t);
  }, l.allocUnsafeSlow = function(t) {
    return Q(t);
  };
  function x(t, e) {
    if ((typeof e != "string" || e === "") && (e = "utf8"), !l.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
    let i = q(t, e) | 0, h = B(i), d = h.write(t, e);
    return d !== i && (h = h.slice(0, d)), h;
  }
  function X(t) {
    let e = t.length < 0 ? 0 : _(t.length) | 0, i = B(e);
    for (let h = 0; h < e; h += 1) i[h] = t[h] & 255;
    return i;
  }
  function M(t) {
    if (Nt(t, Uint8Array)) {
      let e = new Uint8Array(t);
      return z(e.buffer, e.byteOffset, e.byteLength);
    }
    return X(t);
  }
  function z(t, e, i) {
    if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
    if (t.byteLength < e + (i || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let h;
    return e === void 0 && i === void 0 ? h = new Uint8Array(t) : i === void 0 ? h = new Uint8Array(t, e) : h = new Uint8Array(t, e, i), Object.setPrototypeOf(h, l.prototype), h;
  }
  function Z(t) {
    if (l.isBuffer(t)) {
      let e = _(t.length) | 0, i = B(e);
      return i.length === 0 || t.copy(i, 0, 0, e), i;
    }
    if (t.length !== void 0) return typeof t.length != "number" || Se(t.length) ? B(0) : X(t);
    if (t.type === "Buffer" && Array.isArray(t.data)) return X(t.data);
  }
  function _(t) {
    if (t >= a) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
    return t | 0;
  }
  function T(t) {
    return +t != t && (t = 0), l.alloc(+t);
  }
  l.isBuffer = function(t) {
    return t != null && t._isBuffer === !0 && t !== l.prototype;
  }, l.compare = function(t, e) {
    if (Nt(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)), Nt(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)), !l.isBuffer(t) || !l.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (t === e) return 0;
    let i = t.length, h = e.length;
    for (let d = 0, v = Math.min(i, h); d < v; ++d) if (t[d] !== e[d]) {
      i = t[d], h = e[d];
      break;
    }
    return i < h ? -1 : h < i ? 1 : 0;
  }, l.isEncoding = function(t) {
    switch (String(t).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, l.concat = function(t, e) {
    if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (t.length === 0) return l.alloc(0);
    let i;
    if (e === void 0) for (e = 0, i = 0; i < t.length; ++i) e += t[i].length;
    let h = l.allocUnsafe(e), d = 0;
    for (i = 0; i < t.length; ++i) {
      let v = t[i];
      if (Nt(v, Uint8Array)) d + v.length > h.length ? (l.isBuffer(v) || (v = l.from(v)), v.copy(h, d)) : Uint8Array.prototype.set.call(h, v, d);
      else if (l.isBuffer(v)) v.copy(h, d);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      d += v.length;
    }
    return h;
  };
  function q(t, e) {
    if (l.isBuffer(t)) return t.length;
    if (ArrayBuffer.isView(t) || Nt(t, ArrayBuffer)) return t.byteLength;
    if (typeof t != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
    let i = t.length, h = arguments.length > 2 && arguments[2] === !0;
    if (!h && i === 0) return 0;
    let d = !1;
    for (; ; ) switch (e) {
      case "ascii":
      case "latin1":
      case "binary":
        return i;
      case "utf8":
      case "utf-8":
        return Pe(t).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return i * 2;
      case "hex":
        return i >>> 1;
      case "base64":
        return Je(t).length;
      default:
        if (d) return h ? -1 : Pe(t).length;
        e = ("" + e).toLowerCase(), d = !0;
    }
  }
  l.byteLength = q;
  function at(t, e, i) {
    let h = !1;
    if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((i === void 0 || i > this.length) && (i = this.length), i <= 0) || (i >>>= 0, e >>>= 0, i <= e)) return "";
    for (t || (t = "utf8"); ; ) switch (t) {
      case "hex":
        return b(this, e, i);
      case "utf8":
      case "utf-8":
        return C(this, e, i);
      case "ascii":
        return I(this, e, i);
      case "latin1":
      case "binary":
        return y(this, e, i);
      case "base64":
        return w(this, e, i);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return R(this, e, i);
      default:
        if (h) throw new TypeError("Unknown encoding: " + t);
        t = (t + "").toLowerCase(), h = !0;
    }
  }
  l.prototype._isBuffer = !0;
  function ct(t, e, i) {
    let h = t[e];
    t[e] = t[i], t[i] = h;
  }
  l.prototype.swap16 = function() {
    let t = this.length;
    if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let e = 0; e < t; e += 2) ct(this, e, e + 1);
    return this;
  }, l.prototype.swap32 = function() {
    let t = this.length;
    if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let e = 0; e < t; e += 4) ct(this, e, e + 3), ct(this, e + 1, e + 2);
    return this;
  }, l.prototype.swap64 = function() {
    let t = this.length;
    if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let e = 0; e < t; e += 8) ct(this, e, e + 7), ct(this, e + 1, e + 6), ct(this, e + 2, e + 5), ct(this, e + 3, e + 4);
    return this;
  }, l.prototype.toString = function() {
    let t = this.length;
    return t === 0 ? "" : arguments.length === 0 ? C(this, 0, t) : at.apply(this, arguments);
  }, l.prototype.toLocaleString = l.prototype.toString, l.prototype.equals = function(t) {
    if (!l.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
    return this === t ? !0 : l.compare(this, t) === 0;
  }, l.prototype.inspect = function() {
    let t = "", e = s.INSPECT_MAX_BYTES;
    return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(), this.length > e && (t += " ... "), "<Buffer " + t + ">";
  }, A && (l.prototype[A] = l.prototype.inspect), l.prototype.compare = function(t, e, i, h, d) {
    if (Nt(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)), !l.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
    if (e === void 0 && (e = 0), i === void 0 && (i = t ? t.length : 0), h === void 0 && (h = 0), d === void 0 && (d = this.length), e < 0 || i > t.length || h < 0 || d > this.length) throw new RangeError("out of range index");
    if (h >= d && e >= i) return 0;
    if (h >= d) return -1;
    if (e >= i) return 1;
    if (e >>>= 0, i >>>= 0, h >>>= 0, d >>>= 0, this === t) return 0;
    let v = d - h, N = i - e, H = Math.min(v, N), At = this.slice(h, d), K = t.slice(e, i);
    for (let W = 0; W < H; ++W) if (At[W] !== K[W]) {
      v = At[W], N = K[W];
      break;
    }
    return v < N ? -1 : N < v ? 1 : 0;
  };
  function j(t, e, i, h, d) {
    if (t.length === 0) return -1;
    if (typeof i == "string" ? (h = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, Se(i) && (i = d ? 0 : t.length - 1), i < 0 && (i = t.length + i), i >= t.length) {
      if (d) return -1;
      i = t.length - 1;
    } else if (i < 0) if (d) i = 0;
    else return -1;
    if (typeof e == "string" && (e = l.from(e, h)), l.isBuffer(e)) return e.length === 0 ? -1 : yt(t, e, i, h, d);
    if (typeof e == "number") return e = e & 255, typeof Uint8Array.prototype.indexOf == "function" ? d ? Uint8Array.prototype.indexOf.call(t, e, i) : Uint8Array.prototype.lastIndexOf.call(t, e, i) : yt(t, [e], i, h, d);
    throw new TypeError("val must be string, number or Buffer");
  }
  function yt(t, e, i, h, d) {
    let v = 1, N = t.length, H = e.length;
    if (h !== void 0 && (h = String(h).toLowerCase(), h === "ucs2" || h === "ucs-2" || h === "utf16le" || h === "utf-16le")) {
      if (t.length < 2 || e.length < 2) return -1;
      v = 2, N /= 2, H /= 2, i /= 2;
    }
    function At(W, it) {
      return v === 1 ? W[it] : W.readUInt16BE(it * v);
    }
    let K;
    if (d) {
      let W = -1;
      for (K = i; K < N; K++) if (At(t, K) === At(e, W === -1 ? 0 : K - W)) {
        if (W === -1 && (W = K), K - W + 1 === H) return W * v;
      } else W !== -1 && (K -= K - W), W = -1;
    } else for (i + H > N && (i = N - H), K = i; K >= 0; K--) {
      let W = !0;
      for (let it = 0; it < H; it++) if (At(t, K + it) !== At(e, it)) {
        W = !1;
        break;
      }
      if (W) return K;
    }
    return -1;
  }
  l.prototype.includes = function(t, e, i) {
    return this.indexOf(t, e, i) !== -1;
  }, l.prototype.indexOf = function(t, e, i) {
    return j(this, t, e, i, !0);
  }, l.prototype.lastIndexOf = function(t, e, i) {
    return j(this, t, e, i, !1);
  };
  function o(t, e, i, h) {
    i = Number(i) || 0;
    let d = t.length - i;
    h ? (h = Number(h), h > d && (h = d)) : h = d;
    let v = e.length;
    h > v / 2 && (h = v / 2);
    let N;
    for (N = 0; N < h; ++N) {
      let H = parseInt(e.substr(N * 2, 2), 16);
      if (Se(H)) return N;
      t[i + N] = H;
    }
    return N;
  }
  function c(t, e, i, h) {
    return de(Pe(e, t.length - i), t, i, h);
  }
  function u(t, e, i, h) {
    return de(An(e), t, i, h);
  }
  function E(t, e, i, h) {
    return de(Je(e), t, i, h);
  }
  function g(t, e, i, h) {
    return de(ln(e, t.length - i), t, i, h);
  }
  l.prototype.write = function(t, e, i, h) {
    if (e === void 0) h = "utf8", i = this.length, e = 0;
    else if (i === void 0 && typeof e == "string") h = e, i = this.length, e = 0;
    else if (isFinite(e)) e = e >>> 0, isFinite(i) ? (i = i >>> 0, h === void 0 && (h = "utf8")) : (h = i, i = void 0);
    else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    let d = this.length - e;
    if ((i === void 0 || i > d) && (i = d), t.length > 0 && (i < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    h || (h = "utf8");
    let v = !1;
    for (; ; ) switch (h) {
      case "hex":
        return o(this, t, e, i);
      case "utf8":
      case "utf-8":
        return c(this, t, e, i);
      case "ascii":
      case "latin1":
      case "binary":
        return u(this, t, e, i);
      case "base64":
        return E(this, t, e, i);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return g(this, t, e, i);
      default:
        if (v) throw new TypeError("Unknown encoding: " + h);
        h = ("" + h).toLowerCase(), v = !0;
    }
  }, l.prototype.toJSON = function() {
    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
  };
  function w(t, e, i) {
    return e === 0 && i === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, i));
  }
  function C(t, e, i) {
    i = Math.min(t.length, i);
    let h = [], d = e;
    for (; d < i; ) {
      let v = t[d], N = null, H = v > 239 ? 4 : v > 223 ? 3 : v > 191 ? 2 : 1;
      if (d + H <= i) {
        let At, K, W, it;
        switch (H) {
          case 1:
            v < 128 && (N = v);
            break;
          case 2:
            At = t[d + 1], (At & 192) === 128 && (it = (v & 31) << 6 | At & 63, it > 127 && (N = it));
            break;
          case 3:
            At = t[d + 1], K = t[d + 2], (At & 192) === 128 && (K & 192) === 128 && (it = (v & 15) << 12 | (At & 63) << 6 | K & 63, it > 2047 && (it < 55296 || it > 57343) && (N = it));
            break;
          case 4:
            At = t[d + 1], K = t[d + 2], W = t[d + 3], (At & 192) === 128 && (K & 192) === 128 && (W & 192) === 128 && (it = (v & 15) << 18 | (At & 63) << 12 | (K & 63) << 6 | W & 63, it > 65535 && it < 1114112 && (N = it));
        }
      }
      N === null ? (N = 65533, H = 1) : N > 65535 && (N -= 65536, h.push(N >>> 10 & 1023 | 55296), N = 56320 | N & 1023), h.push(N), d += H;
    }
    return p(h);
  }
  var f = 4096;
  function p(t) {
    let e = t.length;
    if (e <= f) return String.fromCharCode.apply(String, t);
    let i = "", h = 0;
    for (; h < e; ) i += String.fromCharCode.apply(String, t.slice(h, h += f));
    return i;
  }
  function I(t, e, i) {
    let h = "";
    i = Math.min(t.length, i);
    for (let d = e; d < i; ++d) h += String.fromCharCode(t[d] & 127);
    return h;
  }
  function y(t, e, i) {
    let h = "";
    i = Math.min(t.length, i);
    for (let d = e; d < i; ++d) h += String.fromCharCode(t[d]);
    return h;
  }
  function b(t, e, i) {
    let h = t.length;
    (!e || e < 0) && (e = 0), (!i || i < 0 || i > h) && (i = h);
    let d = "";
    for (let v = e; v < i; ++v) d += un[t[v]];
    return d;
  }
  function R(t, e, i) {
    let h = t.slice(e, i), d = "";
    for (let v = 0; v < h.length - 1; v += 2) d += String.fromCharCode(h[v] + h[v + 1] * 256);
    return d;
  }
  l.prototype.slice = function(t, e) {
    let i = this.length;
    t = ~~t, e = e === void 0 ? i : ~~e, t < 0 ? (t += i, t < 0 && (t = 0)) : t > i && (t = i), e < 0 ? (e += i, e < 0 && (e = 0)) : e > i && (e = i), e < t && (e = t);
    let h = this.subarray(t, e);
    return Object.setPrototypeOf(h, l.prototype), h;
  };
  function P(t, e, i) {
    if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
    if (t + e > i) throw new RangeError("Trying to access beyond buffer length");
  }
  l.prototype.readUintLE = l.prototype.readUIntLE = function(t, e, i) {
    t = t >>> 0, e = e >>> 0, i || P(t, e, this.length);
    let h = this[t], d = 1, v = 0;
    for (; ++v < e && (d *= 256); ) h += this[t + v] * d;
    return h;
  }, l.prototype.readUintBE = l.prototype.readUIntBE = function(t, e, i) {
    t = t >>> 0, e = e >>> 0, i || P(t, e, this.length);
    let h = this[t + --e], d = 1;
    for (; e > 0 && (d *= 256); ) h += this[t + --e] * d;
    return h;
  }, l.prototype.readUint8 = l.prototype.readUInt8 = function(t, e) {
    return t = t >>> 0, e || P(t, 1, this.length), this[t];
  }, l.prototype.readUint16LE = l.prototype.readUInt16LE = function(t, e) {
    return t = t >>> 0, e || P(t, 2, this.length), this[t] | this[t + 1] << 8;
  }, l.prototype.readUint16BE = l.prototype.readUInt16BE = function(t, e) {
    return t = t >>> 0, e || P(t, 2, this.length), this[t] << 8 | this[t + 1];
  }, l.prototype.readUint32LE = l.prototype.readUInt32LE = function(t, e) {
    return t = t >>> 0, e || P(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216;
  }, l.prototype.readUint32BE = l.prototype.readUInt32BE = function(t, e) {
    return t = t >>> 0, e || P(t, 4, this.length), this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
  }, l.prototype.readBigUInt64LE = Lt(function(t) {
    t = t >>> 0, st(t, "offset");
    let e = this[t], i = this[t + 7];
    (e === void 0 || i === void 0) && et(t, this.length - 8);
    let h = e + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24, d = this[++t] + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + i * 2 ** 24;
    return BigInt(h) + (BigInt(d) << BigInt(32));
  }), l.prototype.readBigUInt64BE = Lt(function(t) {
    t = t >>> 0, st(t, "offset");
    let e = this[t], i = this[t + 7];
    (e === void 0 || i === void 0) && et(t, this.length - 8);
    let h = e * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t], d = this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + i;
    return (BigInt(h) << BigInt(32)) + BigInt(d);
  }), l.prototype.readIntLE = function(t, e, i) {
    t = t >>> 0, e = e >>> 0, i || P(t, e, this.length);
    let h = this[t], d = 1, v = 0;
    for (; ++v < e && (d *= 256); ) h += this[t + v] * d;
    return d *= 128, h >= d && (h -= Math.pow(2, 8 * e)), h;
  }, l.prototype.readIntBE = function(t, e, i) {
    t = t >>> 0, e = e >>> 0, i || P(t, e, this.length);
    let h = e, d = 1, v = this[t + --h];
    for (; h > 0 && (d *= 256); ) v += this[t + --h] * d;
    return d *= 128, v >= d && (v -= Math.pow(2, 8 * e)), v;
  }, l.prototype.readInt8 = function(t, e) {
    return t = t >>> 0, e || P(t, 1, this.length), this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t];
  }, l.prototype.readInt16LE = function(t, e) {
    t = t >>> 0, e || P(t, 2, this.length);
    let i = this[t] | this[t + 1] << 8;
    return i & 32768 ? i | 4294901760 : i;
  }, l.prototype.readInt16BE = function(t, e) {
    t = t >>> 0, e || P(t, 2, this.length);
    let i = this[t + 1] | this[t] << 8;
    return i & 32768 ? i | 4294901760 : i;
  }, l.prototype.readInt32LE = function(t, e) {
    return t = t >>> 0, e || P(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
  }, l.prototype.readInt32BE = function(t, e) {
    return t = t >>> 0, e || P(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
  }, l.prototype.readBigInt64LE = Lt(function(t) {
    t = t >>> 0, st(t, "offset");
    let e = this[t], i = this[t + 7];
    (e === void 0 || i === void 0) && et(t, this.length - 8);
    let h = this[t + 4] + this[t + 5] * 2 ** 8 + this[t + 6] * 2 ** 16 + (i << 24);
    return (BigInt(h) << BigInt(32)) + BigInt(e + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24);
  }), l.prototype.readBigInt64BE = Lt(function(t) {
    t = t >>> 0, st(t, "offset");
    let e = this[t], i = this[t + 7];
    (e === void 0 || i === void 0) && et(t, this.length - 8);
    let h = (e << 24) + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t];
    return (BigInt(h) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + i);
  }), l.prototype.readFloatLE = function(t, e) {
    return t = t >>> 0, e || P(t, 4, this.length), r.read(this, t, !0, 23, 4);
  }, l.prototype.readFloatBE = function(t, e) {
    return t = t >>> 0, e || P(t, 4, this.length), r.read(this, t, !1, 23, 4);
  }, l.prototype.readDoubleLE = function(t, e) {
    return t = t >>> 0, e || P(t, 8, this.length), r.read(this, t, !0, 52, 8);
  }, l.prototype.readDoubleBE = function(t, e) {
    return t = t >>> 0, e || P(t, 8, this.length), r.read(this, t, !1, 52, 8);
  };
  function D(t, e, i, h, d, v) {
    if (!l.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (e > d || e < v) throw new RangeError('"value" argument is out of bounds');
    if (i + h > t.length) throw new RangeError("Index out of range");
  }
  l.prototype.writeUintLE = l.prototype.writeUIntLE = function(t, e, i, h) {
    if (t = +t, e = e >>> 0, i = i >>> 0, !h) {
      let N = Math.pow(2, 8 * i) - 1;
      D(this, t, e, i, N, 0);
    }
    let d = 1, v = 0;
    for (this[e] = t & 255; ++v < i && (d *= 256); ) this[e + v] = t / d & 255;
    return e + i;
  }, l.prototype.writeUintBE = l.prototype.writeUIntBE = function(t, e, i, h) {
    if (t = +t, e = e >>> 0, i = i >>> 0, !h) {
      let N = Math.pow(2, 8 * i) - 1;
      D(this, t, e, i, N, 0);
    }
    let d = i - 1, v = 1;
    for (this[e + d] = t & 255; --d >= 0 && (v *= 256); ) this[e + d] = t / v & 255;
    return e + i;
  }, l.prototype.writeUint8 = l.prototype.writeUInt8 = function(t, e, i) {
    return t = +t, e = e >>> 0, i || D(this, t, e, 1, 255, 0), this[e] = t & 255, e + 1;
  }, l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function(t, e, i) {
    return t = +t, e = e >>> 0, i || D(this, t, e, 2, 65535, 0), this[e] = t & 255, this[e + 1] = t >>> 8, e + 2;
  }, l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function(t, e, i) {
    return t = +t, e = e >>> 0, i || D(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = t & 255, e + 2;
  }, l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function(t, e, i) {
    return t = +t, e = e >>> 0, i || D(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = t & 255, e + 4;
  }, l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function(t, e, i) {
    return t = +t, e = e >>> 0, i || D(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = t & 255, e + 4;
  };
  function G(t, e, i, h, d) {
    Qt(e, h, d, t, i, 7);
    let v = Number(e & BigInt(4294967295));
    t[i++] = v, v = v >> 8, t[i++] = v, v = v >> 8, t[i++] = v, v = v >> 8, t[i++] = v;
    let N = Number(e >> BigInt(32) & BigInt(4294967295));
    return t[i++] = N, N = N >> 8, t[i++] = N, N = N >> 8, t[i++] = N, N = N >> 8, t[i++] = N, i;
  }
  function tt(t, e, i, h, d) {
    Qt(e, h, d, t, i, 7);
    let v = Number(e & BigInt(4294967295));
    t[i + 7] = v, v = v >> 8, t[i + 6] = v, v = v >> 8, t[i + 5] = v, v = v >> 8, t[i + 4] = v;
    let N = Number(e >> BigInt(32) & BigInt(4294967295));
    return t[i + 3] = N, N = N >> 8, t[i + 2] = N, N = N >> 8, t[i + 1] = N, N = N >> 8, t[i] = N, i + 8;
  }
  l.prototype.writeBigUInt64LE = Lt(function(t, e = 0) {
    return G(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
  }), l.prototype.writeBigUInt64BE = Lt(function(t, e = 0) {
    return tt(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
  }), l.prototype.writeIntLE = function(t, e, i, h) {
    if (t = +t, e = e >>> 0, !h) {
      let H = Math.pow(2, 8 * i - 1);
      D(this, t, e, i, H - 1, -H);
    }
    let d = 0, v = 1, N = 0;
    for (this[e] = t & 255; ++d < i && (v *= 256); ) t < 0 && N === 0 && this[e + d - 1] !== 0 && (N = 1), this[e + d] = (t / v >> 0) - N & 255;
    return e + i;
  }, l.prototype.writeIntBE = function(t, e, i, h) {
    if (t = +t, e = e >>> 0, !h) {
      let H = Math.pow(2, 8 * i - 1);
      D(this, t, e, i, H - 1, -H);
    }
    let d = i - 1, v = 1, N = 0;
    for (this[e + d] = t & 255; --d >= 0 && (v *= 256); ) t < 0 && N === 0 && this[e + d + 1] !== 0 && (N = 1), this[e + d] = (t / v >> 0) - N & 255;
    return e + i;
  }, l.prototype.writeInt8 = function(t, e, i) {
    return t = +t, e = e >>> 0, i || D(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = t & 255, e + 1;
  }, l.prototype.writeInt16LE = function(t, e, i) {
    return t = +t, e = e >>> 0, i || D(this, t, e, 2, 32767, -32768), this[e] = t & 255, this[e + 1] = t >>> 8, e + 2;
  }, l.prototype.writeInt16BE = function(t, e, i) {
    return t = +t, e = e >>> 0, i || D(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = t & 255, e + 2;
  }, l.prototype.writeInt32LE = function(t, e, i) {
    return t = +t, e = e >>> 0, i || D(this, t, e, 4, 2147483647, -2147483648), this[e] = t & 255, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4;
  }, l.prototype.writeInt32BE = function(t, e, i) {
    return t = +t, e = e >>> 0, i || D(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = t & 255, e + 4;
  }, l.prototype.writeBigInt64LE = Lt(function(t, e = 0) {
    return G(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), l.prototype.writeBigInt64BE = Lt(function(t, e = 0) {
    return tt(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function F(t, e, i, h, d, v) {
    if (i + h > t.length) throw new RangeError("Index out of range");
    if (i < 0) throw new RangeError("Index out of range");
  }
  function J(t, e, i, h, d) {
    return e = +e, i = i >>> 0, d || F(t, e, i, 4), r.write(t, e, i, h, 23, 4), i + 4;
  }
  l.prototype.writeFloatLE = function(t, e, i) {
    return J(this, t, e, !0, i);
  }, l.prototype.writeFloatBE = function(t, e, i) {
    return J(this, t, e, !1, i);
  };
  function ot(t, e, i, h, d) {
    return e = +e, i = i >>> 0, d || F(t, e, i, 8), r.write(t, e, i, h, 52, 8), i + 8;
  }
  l.prototype.writeDoubleLE = function(t, e, i) {
    return ot(this, t, e, !0, i);
  }, l.prototype.writeDoubleBE = function(t, e, i) {
    return ot(this, t, e, !1, i);
  }, l.prototype.copy = function(t, e, i, h) {
    if (!l.isBuffer(t)) throw new TypeError("argument should be a Buffer");
    if (i || (i = 0), !h && h !== 0 && (h = this.length), e >= t.length && (e = t.length), e || (e = 0), h > 0 && h < i && (h = i), h === i || t.length === 0 || this.length === 0) return 0;
    if (e < 0) throw new RangeError("targetStart out of bounds");
    if (i < 0 || i >= this.length) throw new RangeError("Index out of range");
    if (h < 0) throw new RangeError("sourceEnd out of bounds");
    h > this.length && (h = this.length), t.length - e < h - i && (h = t.length - e + i);
    let d = h - i;
    return this === t && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(e, i, h) : Uint8Array.prototype.set.call(t, this.subarray(i, h), e), d;
  }, l.prototype.fill = function(t, e, i, h) {
    if (typeof t == "string") {
      if (typeof e == "string" ? (h = e, e = 0, i = this.length) : typeof i == "string" && (h = i, i = this.length), h !== void 0 && typeof h != "string") throw new TypeError("encoding must be a string");
      if (typeof h == "string" && !l.isEncoding(h)) throw new TypeError("Unknown encoding: " + h);
      if (t.length === 1) {
        let v = t.charCodeAt(0);
        (h === "utf8" && v < 128 || h === "latin1") && (t = v);
      }
    } else typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
    if (e < 0 || this.length < e || this.length < i) throw new RangeError("Out of range index");
    if (i <= e) return this;
    e = e >>> 0, i = i === void 0 ? this.length : i >>> 0, t || (t = 0);
    let d;
    if (typeof t == "number") for (d = e; d < i; ++d) this[d] = t;
    else {
      let v = l.isBuffer(t) ? t : l.from(t, h), N = v.length;
      if (N === 0) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
      for (d = 0; d < i - e; ++d) this[d + e] = v[d % N];
    }
    return this;
  };
  var vt = {};
  function jt(t, e, i) {
    vt[t] = class extends i {
      constructor() {
        super(), Object.defineProperty(this, "message", { value: e.apply(this, arguments), writable: !0, configurable: !0 }), this.name = `${this.name} [${t}]`, this.stack, delete this.name;
      }
      get code() {
        return t;
      }
      set code(h) {
        Object.defineProperty(this, "code", { configurable: !0, enumerable: !0, value: h, writable: !0 });
      }
      toString() {
        return `${this.name} [${t}]: ${this.message}`;
      }
    };
  }
  jt("ERR_BUFFER_OUT_OF_BOUNDS", function(t) {
    return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
  }, RangeError), jt("ERR_INVALID_ARG_TYPE", function(t, e) {
    return `The "${t}" argument must be of type number. Received type ${typeof e}`;
  }, TypeError), jt("ERR_OUT_OF_RANGE", function(t, e, i) {
    let h = `The value of "${t}" is out of range.`, d = i;
    return Number.isInteger(i) && Math.abs(i) > 2 ** 32 ? d = Vt(String(i)) : typeof i == "bigint" && (d = String(i), (i > BigInt(2) ** BigInt(32) || i < -(BigInt(2) ** BigInt(32))) && (d = Vt(d)), d += "n"), h += ` It must be ${e}. Received ${d}`, h;
  }, RangeError);
  function Vt(t) {
    let e = "", i = t.length, h = t[0] === "-" ? 1 : 0;
    for (; i >= h + 4; i -= 3) e = `_${t.slice(i - 3, i)}${e}`;
    return `${t.slice(0, i)}${e}`;
  }
  function mt(t, e, i) {
    st(e, "offset"), (t[e] === void 0 || t[e + i] === void 0) && et(e, t.length - (i + 1));
  }
  function Qt(t, e, i, h, d, v) {
    if (t > i || t < e) {
      let N = typeof e == "bigint" ? "n" : "", H;
      throw e === 0 || e === BigInt(0) ? H = `>= 0${N} and < 2${N} ** ${(v + 1) * 8}${N}` : H = `>= -(2${N} ** ${(v + 1) * 8 - 1}${N}) and < 2 ** ${(v + 1) * 8 - 1}${N}`, new vt.ERR_OUT_OF_RANGE("value", H, t);
    }
    mt(h, d, v);
  }
  function st(t, e) {
    if (typeof t != "number") throw new vt.ERR_INVALID_ARG_TYPE(e, "number", t);
  }
  function et(t, e, i) {
    throw Math.floor(t) !== t ? (st(t, i), new vt.ERR_OUT_OF_RANGE("offset", "an integer", t)) : e < 0 ? new vt.ERR_BUFFER_OUT_OF_BOUNDS() : new vt.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${e}`, t);
  }
  var V = /[^+/0-9A-Za-z-_]/g;
  function cn(t) {
    if (t = t.split("=")[0], t = t.trim().replace(V, ""), t.length < 2) return "";
    for (; t.length % 4 !== 0; ) t = t + "=";
    return t;
  }
  function Pe(t, e) {
    e = e || 1 / 0;
    let i, h = t.length, d = null, v = [];
    for (let N = 0; N < h; ++N) {
      if (i = t.charCodeAt(N), i > 55295 && i < 57344) {
        if (!d) {
          if (i > 56319) {
            (e -= 3) > -1 && v.push(239, 191, 189);
            continue;
          } else if (N + 1 === h) {
            (e -= 3) > -1 && v.push(239, 191, 189);
            continue;
          }
          d = i;
          continue;
        }
        if (i < 56320) {
          (e -= 3) > -1 && v.push(239, 191, 189), d = i;
          continue;
        }
        i = (d - 55296 << 10 | i - 56320) + 65536;
      } else d && (e -= 3) > -1 && v.push(239, 191, 189);
      if (d = null, i < 128) {
        if ((e -= 1) < 0) break;
        v.push(i);
      } else if (i < 2048) {
        if ((e -= 2) < 0) break;
        v.push(i >> 6 | 192, i & 63 | 128);
      } else if (i < 65536) {
        if ((e -= 3) < 0) break;
        v.push(i >> 12 | 224, i >> 6 & 63 | 128, i & 63 | 128);
      } else if (i < 1114112) {
        if ((e -= 4) < 0) break;
        v.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, i & 63 | 128);
      } else throw new Error("Invalid code point");
    }
    return v;
  }
  function An(t) {
    let e = [];
    for (let i = 0; i < t.length; ++i) e.push(t.charCodeAt(i) & 255);
    return e;
  }
  function ln(t, e) {
    let i, h, d, v = [];
    for (let N = 0; N < t.length && !((e -= 2) < 0); ++N) i = t.charCodeAt(N), h = i >> 8, d = i % 256, v.push(d), v.push(h);
    return v;
  }
  function Je(t) {
    return n.toByteArray(cn(t));
  }
  function de(t, e, i, h) {
    let d;
    for (d = 0; d < h && !(d + i >= e.length || d >= t.length); ++d) e[d + i] = t[d];
    return d;
  }
  function Nt(t, e) {
    return t instanceof e || t != null && t.constructor != null && t.constructor.name != null && t.constructor.name === e.name;
  }
  function Se(t) {
    return t !== t;
  }
  var un = function() {
    let t = "0123456789abcdef", e = new Array(256);
    for (let i = 0; i < 16; ++i) {
      let h = i * 16;
      for (let d = 0; d < 16; ++d) e[h + d] = t[i] + t[d];
    }
    return e;
  }();
  function Lt(t) {
    return typeof BigInt > "u" ? hn : t;
  }
  function hn() {
    throw new Error("BigInt not supported");
  }
});
kn(ei());
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
class Ne {
  constructor(n) {
    this.state = k.Status.INIT, this.actorCache = /* @__PURE__ */ new Map(), this.config = n;
  }
  // Common state management
  setState(n) {
    this.state = n;
  }
  getState() {
    return this.state;
  }
  // Standard implementation for getAccountId, can be overridden by subclasses if needed
  async getAccountId() {
    const n = await this.getPrincipal();
    if (!n)
      throw new Error("Principal not available to derive account ID");
    return Te.fromPrincipal({
      principal: n,
      subAccount: void 0
      // Default subaccount
    }).toHex();
  }
  // Subclasses must implement how to get the principal
  // Base implementation of createActor with caching
  createActor(n, r, A) {
    const a = `${this.walletName}-${n}-${A?.requiresSigning || !1}`, m = this.actorCache.get(a);
    if (m)
      return m;
    const B = this.createActorInternal(n, r, A);
    return this.actorCache.set(a, B), B;
  }
  // Base disconnect logic
  async disconnect() {
    if (!(this.state === k.Status.DISCONNECTING || this.state === k.Status.CONNECTING || this.state === k.Status.DISCONNECTED)) {
      this.setState(k.Status.DISCONNECTING);
      try {
        await this.disconnectInternal(), this.config?.localStorageKey && localStorage.removeItem(this.config.localStorageKey), this.actorCache.clear();
      } catch (n) {
        console.error(`[${this.walletName}] Error during disconnect:`, n);
      } finally {
        this.cleanupInternal(), this.setState(k.Status.DISCONNECTED);
      }
    }
  }
  // Abstract methods for subclass-specific disconnect logic and resource cleanup
  // Default implementations do nothing, subclasses can override if needed.
  async disconnectInternal() {
  }
  cleanupInternal() {
  }
}
const ne = class ne extends Ne {
  // Constructor calls super and does II specific initialization
  constructor(n) {
    super(n), this.walletName = ne.walletName, this.logo = ne.logo, this.authClient = null, this.agent = null, En.create({
      idleOptions: {
        idleTimeout: Number(this.config.adapters?.ii?.config?.timeout || this.config.timeout || 1e3 * 60 * 60 * 24),
        disableDefaultIdleCallback: !0
      }
    }).then((r) => {
      this.authClient = r, this.authClient.idleManager?.registerCallback?.(() => this.refreshLogin());
    }).catch((r) => {
      console.error("[II] Failed to create AuthClient:", r), this.setState(k.Status.ERROR);
    });
  }
  // Use the resolved config for agent initialization
  async initAgent(n) {
    if (this.agent = new Ut({
      identity: n,
      host: this.config.hostUrl,
      verifyQuerySignatures: this.config.verifyQuerySignatures
    }), this.config.fetchRootKeys)
      try {
        await this.agent.fetchRootKey();
      } catch (r) {
        console.warn("[II] Unable to fetch root key. Check replica status.", r);
      }
  }
  // Implement abstract methods
  async isAvailable() {
    return !0;
  }
  async connect() {
    try {
      if (this.setState(k.Status.CONNECTING), !this.authClient && (await new Promise((A) => setTimeout(A, 500)), !this.authClient))
        throw new Error("AuthClient failed to initialize.");
      if (!await this.authClient.isAuthenticated())
        return new Promise((A, a) => {
          this.authClient.login({
            derivationOrigin: this.config.derivationOrigin,
            identityProvider: this.config.adapters?.ii?.config?.identityProvider || this.config.identityProvider,
            maxTimeToLive: this.config.delegationTimeout,
            onSuccess: () => {
              this._continueLogin(this.config.hostUrl).then((m) => {
                this.setState(k.Status.READY), A(m);
              }).catch(a);
            },
            onError: (m) => {
              console.error("[II] Login error:", m), this.disconnect().catch(() => {
              }), this.setState(k.Status.ERROR), a(new Error("II Authentication failed: " + m));
            }
          });
        });
      const r = await this._continueLogin(this.config.hostUrl);
      return this.setState(k.Status.READY), r;
    } catch (n) {
      throw console.error("[II] Connect error:", n), this.setState(k.Status.ERROR), await this.disconnect().catch(() => {
      }), n;
    }
  }
  async _continueLogin(n) {
    if (!this.authClient) throw new Error("AuthClient not available in _continueLogin");
    try {
      const r = this.authClient.getIdentity(), A = r.getPrincipal();
      if (A.isAnonymous())
        throw new Error("Login resulted in anonymous principal");
      return await this.initAgent(r), {
        owner: A,
        // Derive subaccount using the method from BaseIcAdapter via getAccountId (implicitly)
        // Or calculate directly if preferred, but using getAccountId promotes reuse
        subaccount: Ke(await this.getAccountId() || "")
      };
    } catch (r) {
      throw console.error("[II] Error during _continueLogin:", r), this.setState(k.Status.ERROR), await this.disconnect().catch(() => {
      }), r;
    }
  }
  async isConnected() {
    return this.authClient ? await this.authClient.isAuthenticated() : !1;
  }
  // Implementation for BaseIcAdapter actor caching
  createActorInternal(n, r) {
    if (!this.agent)
      throw new Error("Agent not initialized. Connect first.");
    return re.createActor(r, {
      agent: this.agent,
      canisterId: n
    });
  }
  async getPrincipal() {
    if (!this.authClient) throw new Error("Not connected");
    const n = this.authClient.getIdentity();
    if (!n) throw new Error("Identity not available");
    return n.getPrincipal();
  }
  async refreshLogin() {
    console.debug("[II] Refreshing login due to idle timeout.");
    try {
      await this.connect();
    } catch (n) {
      console.error("[II] Failed to refresh login:", n), await this.disconnect().catch(() => {
      });
    }
  }
  // Disconnect logic specific to II
  async disconnectInternal() {
    this.authClient && await this.authClient.logout();
  }
  // Cleanup logic specific to II
  cleanupInternal() {
    this.authClient = null, this.agent = null;
  }
};
ne.logo = Mn, ne.walletName = "Internet Identity";
let le = ne;
const ni = "data:image/webp;base64,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", ie = class ie extends Ne {
  // Update every 2 seconds
  // state and config are inherited
  // Constructor calls super and does Plug specific initialization
  constructor(n) {
    super(n), this.walletName = ie.walletName, this.logo = ie.logo, this.readyState = "NotDetected", this._connectionState = !1, this._connectionStateTimestamp = 0, this._connectionStateUpdateInterval = 2e3, this.initPlug(), this.updateConnectionState();
  }
  // Initialize Plug and set readyState accordingly
  initPlug() {
    typeof window < "u" && window.ic?.plug ? window.ic.plug.isConnected().then((n) => {
      this.readyState = n ? "Connected" : "Installed", n ? this.setState(k.Status.CONNECTED) : this.setState(k.Status.READY);
    }) : (this.readyState = "NotDetected", this.setState(k.Status.INIT));
  }
  // Implement abstract methods
  async isAvailable() {
    return this.readyState !== "NotDetected";
  }
  async connect() {
    if (this.setState(k.Status.CONNECTING), await this.isConnected())
      this.readyState = "Connected";
    else {
      if (!window.ic?.plug)
        throw this.setState(k.Status.ERROR), new Error("Plug Wallet extension not detected.");
      try {
        if (!await window.ic.plug.requestConnect({
          whitelist: this.config.delegationTargets?.map((a) => typeof a == "string" ? a : a.toText()) || [],
          host: this.config.hostUrl,
          timeout: this.config.adapters?.plug?.config?.timeout || this.config.timeout || 6048e5,
          onConnectionUpdate: () => this.handleConnectionUpdate()
        }))
          throw this.setState(k.Status.READY), new Error("User declined the connection request");
        this.readyState = "Connected";
      } catch (A) {
        throw this.setState(k.Status.READY), console.error("Failed to connect to Plug wallet:", A), A;
      }
    }
    this._connectionState = !0, this._connectionStateTimestamp = Date.now(), this.setState(k.Status.CONNECTED);
    const r = await this.getPrincipal();
    return {
      owner: r,
      subaccount: Te.fromPrincipal({
        principal: r,
        subAccount: void 0
      }).toUint8Array()
    };
  }
  // disconnect method is inherited, uses disconnectInternal and cleanupInternal
  async getPrincipal() {
    if (this.readyState === "Connected" && window.ic?.plug?.principalId)
      return Bt.fromText(window.ic.plug.principalId);
    throw this.readyState === "Installed" ? new Error("Plug wallet is installed but not connected.") : new Error("Plug wallet is not available or principal ID is unavailable");
  }
  // getAccountId is inherited
  // Implementation of the required abstract method from BaseIcAdapter
  createActorInternal(n, r, A) {
    if (!window.ic?.plug?.createActor)
      throw new Error("Plug wallet is not available or not connected to create actor.");
    if (!n || !r)
      throw new Error("Canister ID and IDL factory are required");
    try {
      const a = window.ic.plug.createActor({
        canisterId: n,
        interfaceFactory: r
      });
      return new Proxy({}, {
        get: (B, l) => {
          if (l !== "then")
            return (...U) => a.then((S) => {
              const O = S[l];
              return typeof O == "function" ? O.apply(S, U) : O;
            });
        }
      });
    } catch (a) {
      throw console.error("Failed to create actor through Plug:", a), a;
    }
  }
  // Plug specific connection state update
  async updateConnectionState() {
    window.ic?.plug?.isConnected ? (this._connectionState = await window.ic.plug.isConnected(), this._connectionStateTimestamp = Date.now(), this.readyState = this._connectionState ? "Connected" : "Installed", this._connectionState && this.state !== k.Status.CONNECTED ? this.setState(k.Status.CONNECTED) : !this._connectionState && this.state === k.Status.CONNECTED && this.setState(k.Status.READY)) : (this._connectionState = !1, this.readyState = "NotDetected", this.setState(k.Status.INIT));
  }
  // Use polling check for synchronous isConnected
  async isConnected() {
    return Date.now() - this._connectionStateTimestamp > this._connectionStateUpdateInterval && this.updateConnectionState().catch((n) => console.error("[Plug] Failed background connection state update:", n)), this._connectionState;
  }
  // Handle Plug's connection updates
  handleConnectionUpdate() {
    this.updateConnectionState().then(() => {
      window.dispatchEvent(new CustomEvent("pnp:connectionUpdate", { detail: { adapterId: "plug", state: this.state } }));
    }).catch((n) => console.error("[Plug] Error handling connection update:", n));
  }
  // Plug specific disconnect logic
  async disconnectInternal() {
    window.ic?.plug?.disconnect ? await window.ic.plug.disconnect() : console.warn("Plug wallet is not available for disconnect");
  }
  // Plug specific cleanup (resetting internal state)
  cleanupInternal() {
    this.readyState = this._connectionState ? "Installed" : "NotDetected", this._connectionState = !1, this._connectionStateTimestamp = 0;
  }
};
ie.logo = ni, ie.walletName = "Plug";
let ue = ie;
const ii = "data:image/webp;base64,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", ve = 4e3, Re = 1e5, Ft = (s) => {
  if (typeof globalThis.Buffer < "u")
    return globalThis.Buffer.from(s, "base64").buffer;
  if (typeof globalThis.atob < "u")
    return Uint8Array.from(globalThis.atob(s), (n) => n.charCodeAt(0)).buffer;
  throw Error("Could not decode base64 string");
}, he = (s) => {
  if (typeof globalThis.Buffer < "u")
    return globalThis.Buffer.from(s).toString("base64");
  if (typeof globalThis.btoa < "u")
    return btoa(Array.from({ length: Math.ceil(s.byteLength / Re) }).map((n, r) => String.fromCharCode(...new Uint8Array(s.slice(r * Re, (r + 1) * Re)))).join(""));
  throw Error("Could not encode base64 string");
};
var Kt = function(s, n, r, A, a) {
  if (typeof n == "function" ? s !== n || !0 : !n.has(s)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n.set(s, r), r;
}, nt = function(s, n, r, A) {
  if (typeof n == "function" ? s !== n || !0 : !n.has(s)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? A : r === "a" ? A.call(s) : A ? A.value : n.get(s);
}, ht, Rt, _t, Ie;
class Dt extends Error {
  constructor(n) {
    super(n.message), Object.setPrototypeOf(this, Dt.prototype), this.code = n.code, this.data = n.data;
  }
}
const We = (s) => new Dt({
  code: ve,
  message: s instanceof Error ? s.message : "Network error"
}), Wt = (s) => {
  if ("error" in s)
    throw new Dt(s.error);
  if ("result" in s)
    return s.result;
  throw new Dt({
    code: ve,
    message: "Invalid response"
  });
};
class en {
  constructor(n) {
    ht.set(this, void 0), Rt.set(this, void 0), _t.set(this, void 0), Ie.set(this, void 0), Kt(this, ht, Object.assign({ autoCloseTransportChannel: !0, closeTransportChannelAfter: 200, crypto: globalThis.crypto }, n));
  }
  get transport() {
    return nt(this, ht, "f").transport;
  }
  async openChannel() {
    if (clearTimeout(nt(this, Ie, "f")), nt(this, _t, "f") && await nt(this, _t, "f"), nt(this, Rt, "f") && !nt(this, Rt, "f").closed)
      return nt(this, Rt, "f");
    const n = nt(this, ht, "f").transport.establishChannel();
    return Kt(this, _t, n.then(() => {
    }).catch(() => {
    })), Kt(this, Rt, void 0), Kt(this, Rt, await n.catch((r) => {
      throw We(r);
    })), Kt(this, _t, void 0), nt(this, Rt, "f");
  }
  async closeChannel() {
    var n;
    await ((n = nt(this, Rt, "f")) === null || n === void 0 ? void 0 : n.close());
  }
  async transformRequest(n) {
    return nt(this, ht, "f").derivationOrigin ? Object.assign(Object.assign({}, n), { params: Object.assign(Object.assign({}, n.params), { icrc95DerivationOrigin: nt(this, ht, "f").derivationOrigin }) }) : n;
  }
  async sendRequest(n) {
    const r = await this.openChannel();
    return new Promise(async (A, a) => {
      const m = r.addEventListener("response", async (l) => {
        l.id === n.id && (m(), B(), A(l), nt(this, ht, "f").autoCloseTransportChannel && Kt(this, Ie, setTimeout(() => {
          r.closed || r.close();
        }, nt(this, ht, "f").closeTransportChannelAfter)));
      }), B = r.addEventListener("close", () => {
        m(), B(), a(new Dt({
          code: ve,
          message: "Channel was closed before a response was received"
        }));
      });
      try {
        await r.send(await this.transformRequest(n));
      } catch (l) {
        m(), B(), a(We(l));
      }
    });
  }
  async supportedStandards() {
    const n = await this.sendRequest({
      id: nt(this, ht, "f").crypto.randomUUID(),
      jsonrpc: "2.0",
      method: "icrc25_supported_standards"
    });
    return Wt(n).supportedStandards;
  }
  async requestPermissions(n) {
    const r = await this.sendRequest({
      id: nt(this, ht, "f").crypto.randomUUID(),
      jsonrpc: "2.0",
      method: "icrc25_request_permissions",
      params: { scopes: n }
    });
    return Wt(r).scopes;
  }
  async permissions() {
    const n = await this.sendRequest({
      id: nt(this, ht, "f").crypto.randomUUID(),
      jsonrpc: "2.0",
      method: "icrc25_permissions"
    });
    return Wt(n).scopes;
  }
  async accounts() {
    const n = await this.sendRequest({
      id: nt(this, ht, "f").crypto.randomUUID(),
      jsonrpc: "2.0",
      method: "icrc27_accounts"
    });
    return Wt(n).accounts.map(({ owner: A, subaccount: a }) => ({
      owner: Bt.fromText(A),
      subaccount: a === void 0 ? void 0 : Ft(a)
    }));
  }
  async delegation(n) {
    var r;
    const A = await this.sendRequest({
      id: nt(this, ht, "f").crypto.randomUUID(),
      jsonrpc: "2.0",
      method: "icrc34_delegation",
      params: {
        publicKey: he(n.publicKey),
        targets: (r = n.targets) === null || r === void 0 ? void 0 : r.map((m) => m.toText()),
        maxTimeToLive: n.maxTimeToLive === void 0 ? void 0 : String(n.maxTimeToLive)
      }
    }), a = Wt(A);
    return bn.fromDelegations(a.signerDelegation.map((m) => {
      var B;
      return {
        delegation: new Tn(Ft(m.delegation.pubkey), BigInt(m.delegation.expiration), (B = m.delegation.targets) === null || B === void 0 ? void 0 : B.map((l) => Bt.fromText(l))),
        signature: Ft(m.signature)
      };
    }), Ft(a.publicKey));
  }
  async callCanister(n) {
    const r = await this.sendRequest({
      id: nt(this, ht, "f").crypto.randomUUID(),
      jsonrpc: "2.0",
      method: "icrc49_call_canister",
      params: {
        canisterId: n.canisterId.toText(),
        sender: n.sender.toText(),
        method: n.method,
        arg: he(n.arg)
      }
    }), A = Wt(r), a = Ft(A.contentMap), m = Ft(A.certificate);
    return { contentMap: a, certificate: m };
  }
  async batchCallCanister(n) {
    const r = await this.sendRequest({
      id: nt(this, ht, "f").crypto.randomUUID(),
      jsonrpc: "2.0",
      method: "icrc112_batch_call_canister",
      params: {
        sender: n.sender.toText(),
        requests: n.requests.map((a) => a.map((m) => ({
          canisterId: m.canisterId.toText(),
          method: m.method,
          arg: he(m.arg)
        }))),
        validation: n.validation ? {
          canisterId: n.validation.canisterId.toText(),
          method: n.validation.method
        } : void 0
      }
    }), A = Wt(r);
    if (n.requests.length !== A.responses.length || n.requests.some((a, m) => a.length !== A.responses[m].length))
      throw new Dt({
        code: ve,
        message: "Invalid batch call canister response, responses structure does not match request structure"
      });
    return A.responses.map((a) => a.map((m) => {
      if ("result" in m) {
        const B = Ft(m.result.contentMap), l = Ft(m.result.certificate);
        return { result: { contentMap: B, certificate: l } };
      }
      return m;
    }));
  }
}
ht = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ new WeakMap(), Ie = /* @__PURE__ */ new WeakMap();
const ri = (s) => typeof s == "object" && !!s && "jsonrpc" in s && s.jsonrpc === "2.0", nn = (s) => ri(s) && "id" in s && (typeof s.id == "string" || typeof s.id == "number");
var Ge = function(s, n, r, A, a) {
  if (typeof n == "function" ? s !== n || !0 : !n.has(s)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n.set(s, r), r;
}, lt = function(s, n, r, A) {
  if (typeof n == "function" ? s !== n || !0 : !n.has(s)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? A : r === "a" ? A.call(s) : A ? A.value : n.get(s);
}, oe, ft, $t;
class oi {
  constructor(n) {
    oe.set(this, /* @__PURE__ */ new Set()), ft.set(this, void 0), $t.set(this, !1), Ge(this, ft, Object.assign({ window: globalThis.window, manageFocus: !0 }, n));
  }
  get closed() {
    return lt(this, $t, "f");
  }
  addEventListener(...[n, r]) {
    switch (n) {
      case "close":
        return lt(this, oe, "f").add(r), () => {
          lt(this, oe, "f").delete(r);
        };
      case "response":
        const A = async (a) => {
          a.source !== lt(this, ft, "f").signerWindow || a.origin !== lt(this, ft, "f").signerOrigin || !nn(a.data) || r(a.data);
        };
        return lt(this, ft, "f").window.addEventListener("message", A), () => {
          lt(this, ft, "f").window.removeEventListener("message", A);
        };
    }
  }
  async send(n) {
    if (lt(this, $t, "f"))
      throw new qt("Communication channel is closed");
    lt(this, ft, "f").signerWindow.postMessage(n, lt(this, ft, "f").signerOrigin), lt(this, ft, "f").manageFocus && lt(this, ft, "f").signerWindow.focus();
  }
  async close() {
    lt(this, $t, "f") || (Ge(this, $t, !0), lt(this, ft, "f").signerWindow.close(), lt(this, ft, "f").manageFocus && lt(this, ft, "f").window.focus(), lt(this, oe, "f").forEach((n) => n()));
  }
}
oe = /* @__PURE__ */ new WeakMap(), ft = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap();
const si = (s) => {
  try {
    const n = new URL(s);
    return n.protocol === "https:" || n.hostname === "127.0.0.1" || n.hostname.split(".").slice(-1)[0] === "localhost";
  } catch {
    return !1;
  }
};
var ai = function(s, n, r, A, a) {
  if (typeof n == "function" ? s !== n || !0 : !n.has(s)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n.set(s, r), r;
}, rt = function(s, n, r, A) {
  if (r === "a" && !A) throw new TypeError("Private accessor was defined without a getter");
  if (typeof n == "function" ? s !== n || !A : !n.has(s)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? A : r === "a" ? A.call(s) : A ? A.value : n.get(s);
}, Zt, ut, rn, He, Ue, De;
class ci {
  constructor(n) {
    Zt.add(this), ut.set(this, void 0), ai(this, ut, Object.assign({ establishTimeout: 1e4, disconnectTimeout: 2e3, statusPollingRate: 300, window: globalThis.window, crypto: globalThis.crypto }, n)), rt(this, Zt, "m", rn).call(this);
  }
}
ut = /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ new WeakSet(), rn = function() {
  const n = [], r = () => {
    const B = rt(this, ut, "f").crypto.randomUUID();
    return n.push(B), B;
  }, A = rt(this, Zt, "m", Ue).call(this, (B) => {
    n.includes(B.data.id) && (A(), clearInterval(m), clearTimeout(a), rt(this, ut, "f").onEstablish(B.origin), rt(this, Zt, "m", He).call(this, B.origin));
  }), a = setTimeout(() => {
    A(), clearInterval(m), rt(this, ut, "f").onEstablishTimeout();
  }, rt(this, ut, "f").establishTimeout), m = setInterval(() => rt(this, Zt, "m", De).call(this, r()), rt(this, ut, "f").statusPollingRate);
}, He = function(n) {
  let r, A, a = [];
  const m = (S) => {
    const O = a.findIndex((Q) => Q.id === S);
    return O > -1 && a.splice(O, 1), O > -1;
  }, B = () => {
    const S = rt(this, ut, "f").crypto.randomUUID(), O = (/* @__PURE__ */ new Date()).getTime();
    return a = a.filter((Q) => O - rt(this, ut, "f").disconnectTimeout > Q.time), a.push({ id: S, time: O }), S;
  }, l = () => {
    clearTimeout(A), A = setTimeout(() => {
      U(), clearInterval(r), rt(this, ut, "f").onDisconnect();
    }, rt(this, ut, "f").disconnectTimeout);
  }, U = rt(this, Zt, "m", Ue).call(this, (S) => {
    S.origin === n && m(S.data.id) && l();
  });
  l(), r = setInterval(() => rt(this, Zt, "m", De).call(this, B()), rt(this, ut, "f").statusPollingRate);
}, Ue = function(n) {
  const r = (A) => {
    A.source === rt(this, ut, "f").signerWindow && nn(A.data) && "result" in A.data && A.data.result === "ready" && n(A);
  };
  return rt(this, ut, "f").window.addEventListener("message", r), () => rt(this, ut, "f").window.removeEventListener("message", r);
}, De = function(n) {
  rt(this, ut, "f").signerWindow.postMessage({ jsonrpc: "2.0", id: n, method: "icrc29_status" }, "*");
};
var Ai = function(s, n, r, A, a) {
  if (typeof n == "function" ? s !== n || !0 : !n.has(s)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n.set(s, r), r;
}, Gt = function(s, n, r, A) {
  if (typeof n == "function" ? s !== n || !0 : !n.has(s)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? A : r === "a" ? A.call(s) : A ? A.value : n.get(s);
}, Ot;
const li = "https://github.com/slide-computer/signer-js/blob/main/packages/signer-web/README.md#channels-must-be-established-in-a-click-handler";
class qt extends Error {
  constructor(n) {
    super(n), Object.setPrototypeOf(this, qt.prototype);
  }
}
let Fe = !1;
globalThis.window && (globalThis.window.addEventListener("click", () => Fe = !0, !0), globalThis.window.addEventListener("click", () => Fe = !1));
class on {
  constructor(n) {
    if (Ot.set(this, void 0), !si(n.url))
      throw new qt("Invalid signer RPC url");
    Ai(this, Ot, Object.assign({ windowOpenerFeatures: "", window: globalThis.window, establishTimeout: 12e4, disconnectTimeout: 2e3, statusPollingRate: 300, crypto: globalThis.crypto, manageFocus: !0, closeOnEstablishTimeout: !0, detectNonClickEstablishment: !0 }, n));
  }
  async establishChannel() {
    if (Gt(this, Ot, "f").detectNonClickEstablishment && !Fe)
      throw new qt(`Signer window should not be opened outside of click handler, see: ${li}`);
    const n = Gt(this, Ot, "f").window.open(Gt(this, Ot, "f").url, "signerWindow", Gt(this, Ot, "f").windowOpenerFeatures);
    if (!n)
      throw new qt("Signer window could not be opened");
    return new Promise((r, A) => {
      let a;
      new ci(Object.assign(Object.assign({}, Gt(this, Ot, "f")), { signerWindow: n, onEstablish: (m) => {
        a = new oi(Object.assign(Object.assign({}, Gt(this, Ot, "f")), { signerOrigin: m, signerWindow: n })), r(a);
      }, onEstablishTimeout: () => {
        Gt(this, Ot, "f").closeOnEstablishTimeout && n.close(), A(new qt("Communication channel could not be established within a reasonable time"));
      }, onDisconnect: () => a.close() }));
    });
  }
}
Ot = /* @__PURE__ */ new WeakMap();
var ui = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, Qe = Math.ceil, It = Math.floor, gt = "[BigNumber Error] ", Xe = gt + "Number primitive has more than 15 significant digits: ", bt = 1e14, L = 14, qe = 9007199254740991, Le = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], xt = 1e7, dt = 1e9;
function sn(s) {
  var n, r, A, a = T.prototype = { constructor: T, toString: null, valueOf: null }, m = new T(1), B = 20, l = 4, U = -7, S = 21, O = -1e7, Q = 1e7, x = !1, X = 1, M = 0, z = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, Z = "0123456789abcdefghijklmnopqrstuvwxyz", _ = !0;
  function T(o, c) {
    var u, E, g, w, C, f, p, I, y = this;
    if (!(y instanceof T)) return new T(o, c);
    if (c == null) {
      if (o && o._isBigNumber === !0) {
        y.s = o.s, !o.c || o.e > Q ? y.c = y.e = null : o.e < O ? y.c = [y.e = 0] : (y.e = o.e, y.c = o.c.slice());
        return;
      }
      if ((f = typeof o == "number") && o * 0 == 0) {
        if (y.s = 1 / o < 0 ? (o = -o, -1) : 1, o === ~~o) {
          for (w = 0, C = o; C >= 10; C /= 10, w++) ;
          w > Q ? y.c = y.e = null : (y.e = w, y.c = [o]);
          return;
        }
        I = String(o);
      } else {
        if (!ui.test(I = String(o))) return A(y, I, f);
        y.s = I.charCodeAt(0) == 45 ? (I = I.slice(1), -1) : 1;
      }
      (w = I.indexOf(".")) > -1 && (I = I.replace(".", "")), (C = I.search(/e/i)) > 0 ? (w < 0 && (w = C), w += +I.slice(C + 1), I = I.substring(0, C)) : w < 0 && (w = I.length);
    } else {
      if ($(c, 2, Z.length, "Base"), c == 10 && _)
        return y = new T(o), j(y, B + y.e + 1, l);
      if (I = String(o), f = typeof o == "number") {
        if (o * 0 != 0) return A(y, I, f, c);
        if (y.s = 1 / o < 0 ? (I = I.slice(1), -1) : 1, T.DEBUG && I.replace(/^0\.0*|\./, "").length > 15)
          throw Error(Xe + o);
      } else
        y.s = I.charCodeAt(0) === 45 ? (I = I.slice(1), -1) : 1;
      for (u = Z.slice(0, c), w = C = 0, p = I.length; C < p; C++)
        if (u.indexOf(E = I.charAt(C)) < 0) {
          if (E == ".") {
            if (C > w) {
              w = p;
              continue;
            }
          } else if (!g && (I == I.toUpperCase() && (I = I.toLowerCase()) || I == I.toLowerCase() && (I = I.toUpperCase()))) {
            g = !0, C = -1, w = 0;
            continue;
          }
          return A(y, String(o), f, c);
        }
      f = !1, I = r(I, c, 10, y.s), (w = I.indexOf(".")) > -1 ? I = I.replace(".", "") : w = I.length;
    }
    for (C = 0; I.charCodeAt(C) === 48; C++) ;
    for (p = I.length; I.charCodeAt(--p) === 48; ) ;
    if (I = I.slice(C, ++p)) {
      if (p -= C, f && T.DEBUG && p > 15 && (o > qe || o !== It(o)))
        throw Error(Xe + y.s * o);
      if ((w = w - C - 1) > Q)
        y.c = y.e = null;
      else if (w < O)
        y.c = [y.e = 0];
      else {
        if (y.e = w, y.c = [], C = (w + 1) % L, w < 0 && (C += L), C < p) {
          for (C && y.c.push(+I.slice(0, C)), p -= L; C < p; )
            y.c.push(+I.slice(C, C += L));
          C = L - (I = I.slice(C)).length;
        } else
          C -= p;
        for (; C--; I += "0") ;
        y.c.push(+I);
      }
    } else
      y.c = [y.e = 0];
  }
  T.clone = sn, T.ROUND_UP = 0, T.ROUND_DOWN = 1, T.ROUND_CEIL = 2, T.ROUND_FLOOR = 3, T.ROUND_HALF_UP = 4, T.ROUND_HALF_DOWN = 5, T.ROUND_HALF_EVEN = 6, T.ROUND_HALF_CEIL = 7, T.ROUND_HALF_FLOOR = 8, T.EUCLID = 9, T.config = T.set = function(o) {
    var c, u;
    if (o != null)
      if (typeof o == "object") {
        if (o.hasOwnProperty(c = "DECIMAL_PLACES") && (u = o[c], $(u, 0, dt, c), B = u), o.hasOwnProperty(c = "ROUNDING_MODE") && (u = o[c], $(u, 0, 8, c), l = u), o.hasOwnProperty(c = "EXPONENTIAL_AT") && (u = o[c], u && u.pop ? ($(u[0], -1e9, 0, c), $(u[1], 0, dt, c), U = u[0], S = u[1]) : ($(u, -1e9, dt, c), U = -(S = u < 0 ? -u : u))), o.hasOwnProperty(c = "RANGE"))
          if (u = o[c], u && u.pop)
            $(u[0], -1e9, -1, c), $(u[1], 1, dt, c), O = u[0], Q = u[1];
          else if ($(u, -1e9, dt, c), u)
            O = -(Q = u < 0 ? -u : u);
          else
            throw Error(gt + c + " cannot be zero: " + u);
        if (o.hasOwnProperty(c = "CRYPTO"))
          if (u = o[c], u === !!u)
            if (u)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                x = u;
              else
                throw x = !u, Error(gt + "crypto unavailable");
            else
              x = u;
          else
            throw Error(gt + c + " not true or false: " + u);
        if (o.hasOwnProperty(c = "MODULO_MODE") && (u = o[c], $(u, 0, 9, c), X = u), o.hasOwnProperty(c = "POW_PRECISION") && (u = o[c], $(u, 0, dt, c), M = u), o.hasOwnProperty(c = "FORMAT"))
          if (u = o[c], typeof u == "object") z = u;
          else throw Error(gt + c + " not an object: " + u);
        if (o.hasOwnProperty(c = "ALPHABET"))
          if (u = o[c], typeof u == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(u))
            _ = u.slice(0, 10) == "0123456789", Z = u;
          else
            throw Error(gt + c + " invalid: " + u);
      } else
        throw Error(gt + "Object expected: " + o);
    return {
      DECIMAL_PLACES: B,
      ROUNDING_MODE: l,
      EXPONENTIAL_AT: [U, S],
      RANGE: [O, Q],
      CRYPTO: x,
      MODULO_MODE: X,
      POW_PRECISION: M,
      FORMAT: z,
      ALPHABET: Z
    };
  }, T.isBigNumber = function(o) {
    if (!o || o._isBigNumber !== !0) return !1;
    if (!T.DEBUG) return !0;
    var c, u, E = o.c, g = o.e, w = o.s;
    t: if ({}.toString.call(E) == "[object Array]") {
      if ((w === 1 || w === -1) && g >= -1e9 && g <= dt && g === It(g)) {
        if (E[0] === 0) {
          if (g === 0 && E.length === 1) return !0;
          break t;
        }
        if (c = (g + 1) % L, c < 1 && (c += L), String(E[0]).length == c) {
          for (c = 0; c < E.length; c++)
            if (u = E[c], u < 0 || u >= bt || u !== It(u)) break t;
          if (u !== 0) return !0;
        }
      }
    } else if (E === null && g === null && (w === null || w === 1 || w === -1))
      return !0;
    throw Error(gt + "Invalid BigNumber: " + o);
  }, T.maximum = T.max = function() {
    return at(arguments, -1);
  }, T.minimum = T.min = function() {
    return at(arguments, 1);
  }, T.random = function() {
    var o = 9007199254740992, c = Math.random() * o & 2097151 ? function() {
      return It(Math.random() * o);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(u) {
      var E, g, w, C, f, p = 0, I = [], y = new T(m);
      if (u == null ? u = B : $(u, 0, dt), C = Qe(u / L), x)
        if (crypto.getRandomValues) {
          for (E = crypto.getRandomValues(new Uint32Array(C *= 2)); p < C; )
            f = E[p] * 131072 + (E[p + 1] >>> 11), f >= 9e15 ? (g = crypto.getRandomValues(new Uint32Array(2)), E[p] = g[0], E[p + 1] = g[1]) : (I.push(f % 1e14), p += 2);
          p = C / 2;
        } else if (crypto.randomBytes) {
          for (E = crypto.randomBytes(C *= 7); p < C; )
            f = (E[p] & 31) * 281474976710656 + E[p + 1] * 1099511627776 + E[p + 2] * 4294967296 + E[p + 3] * 16777216 + (E[p + 4] << 16) + (E[p + 5] << 8) + E[p + 6], f >= 9e15 ? crypto.randomBytes(7).copy(E, p) : (I.push(f % 1e14), p += 7);
          p = C / 7;
        } else
          throw x = !1, Error(gt + "crypto unavailable");
      if (!x)
        for (; p < C; )
          f = c(), f < 9e15 && (I[p++] = f % 1e14);
      for (C = I[--p], u %= L, C && u && (f = Le[L - u], I[p] = It(C / f) * f); I[p] === 0; I.pop(), p--) ;
      if (p < 0)
        I = [w = 0];
      else {
        for (w = -1; I[0] === 0; I.splice(0, 1), w -= L) ;
        for (p = 1, f = I[0]; f >= 10; f /= 10, p++) ;
        p < L && (w -= L - p);
      }
      return y.e = w, y.c = I, y;
    };
  }(), T.sum = function() {
    for (var o = 1, c = arguments, u = new T(c[0]); o < c.length; ) u = u.plus(c[o++]);
    return u;
  }, r = /* @__PURE__ */ function() {
    var o = "0123456789";
    function c(u, E, g, w) {
      for (var C, f = [0], p, I = 0, y = u.length; I < y; ) {
        for (p = f.length; p--; f[p] *= E) ;
        for (f[0] += w.indexOf(u.charAt(I++)), C = 0; C < f.length; C++)
          f[C] > g - 1 && (f[C + 1] == null && (f[C + 1] = 0), f[C + 1] += f[C] / g | 0, f[C] %= g);
      }
      return f.reverse();
    }
    return function(u, E, g, w, C) {
      var f, p, I, y, b, R, P, D, G = u.indexOf("."), tt = B, F = l;
      for (G >= 0 && (y = M, M = 0, u = u.replace(".", ""), D = new T(E), R = D.pow(u.length - G), M = y, D.c = c(
        Mt(Et(R.c), R.e, "0"),
        10,
        g,
        o
      ), D.e = D.c.length), P = c(u, E, g, C ? (f = Z, o) : (f = o, Z)), I = y = P.length; P[--y] == 0; P.pop()) ;
      if (!P[0]) return f.charAt(0);
      if (G < 0 ? --I : (R.c = P, R.e = I, R.s = w, R = n(R, D, tt, F, g), P = R.c, b = R.r, I = R.e), p = I + tt + 1, G = P[p], y = g / 2, b = b || p < 0 || P[p + 1] != null, b = F < 4 ? (G != null || b) && (F == 0 || F == (R.s < 0 ? 3 : 2)) : G > y || G == y && (F == 4 || b || F == 6 && P[p - 1] & 1 || F == (R.s < 0 ? 8 : 7)), p < 1 || !P[0])
        u = b ? Mt(f.charAt(1), -tt, f.charAt(0)) : f.charAt(0);
      else {
        if (P.length = p, b)
          for (--g; ++P[--p] > g; )
            P[p] = 0, p || (++I, P = [1].concat(P));
        for (y = P.length; !P[--y]; ) ;
        for (G = 0, u = ""; G <= y; u += f.charAt(P[G++])) ;
        u = Mt(u, I, f.charAt(0));
      }
      return u;
    };
  }(), n = /* @__PURE__ */ function() {
    function o(E, g, w) {
      var C, f, p, I, y = 0, b = E.length, R = g % xt, P = g / xt | 0;
      for (E = E.slice(); b--; )
        p = E[b] % xt, I = E[b] / xt | 0, C = P * p + I * R, f = R * p + C % xt * xt + y, y = (f / w | 0) + (C / xt | 0) + P * I, E[b] = f % w;
      return y && (E = [y].concat(E)), E;
    }
    function c(E, g, w, C) {
      var f, p;
      if (w != C)
        p = w > C ? 1 : -1;
      else
        for (f = p = 0; f < w; f++)
          if (E[f] != g[f]) {
            p = E[f] > g[f] ? 1 : -1;
            break;
          }
      return p;
    }
    function u(E, g, w, C) {
      for (var f = 0; w--; )
        E[w] -= f, f = E[w] < g[w] ? 1 : 0, E[w] = f * C + E[w] - g[w];
      for (; !E[0] && E.length > 1; E.splice(0, 1)) ;
    }
    return function(E, g, w, C, f) {
      var p, I, y, b, R, P, D, G, tt, F, J, ot, vt, jt, Vt, mt, Qt, st = E.s == g.s ? 1 : -1, et = E.c, V = g.c;
      if (!et || !et[0] || !V || !V[0])
        return new T(
          // Return NaN if either NaN, or both Infinity or 0.
          !E.s || !g.s || (et ? V && et[0] == V[0] : !V) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            et && et[0] == 0 || !V ? st * 0 : st / 0
          )
        );
      for (G = new T(st), tt = G.c = [], I = E.e - g.e, st = w + I + 1, f || (f = bt, I = Ct(E.e / L) - Ct(g.e / L), st = st / L | 0), y = 0; V[y] == (et[y] || 0); y++) ;
      if (V[y] > (et[y] || 0) && I--, st < 0)
        tt.push(1), b = !0;
      else {
        for (jt = et.length, mt = V.length, y = 0, st += 2, R = It(f / (V[0] + 1)), R > 1 && (V = o(V, R, f), et = o(et, R, f), mt = V.length, jt = et.length), vt = mt, F = et.slice(0, mt), J = F.length; J < mt; F[J++] = 0) ;
        Qt = V.slice(), Qt = [0].concat(Qt), Vt = V[0], V[1] >= f / 2 && Vt++;
        do {
          if (R = 0, p = c(V, F, mt, J), p < 0) {
            if (ot = F[0], mt != J && (ot = ot * f + (F[1] || 0)), R = It(ot / Vt), R > 1)
              for (R >= f && (R = f - 1), P = o(V, R, f), D = P.length, J = F.length; c(P, F, D, J) == 1; )
                R--, u(P, mt < D ? Qt : V, D, f), D = P.length, p = 1;
            else
              R == 0 && (p = R = 1), P = V.slice(), D = P.length;
            if (D < J && (P = [0].concat(P)), u(F, P, J, f), J = F.length, p == -1)
              for (; c(V, F, mt, J) < 1; )
                R++, u(F, mt < J ? Qt : V, J, f), J = F.length;
          } else p === 0 && (R++, F = [0]);
          tt[y++] = R, F[0] ? F[J++] = et[vt] || 0 : (F = [et[vt]], J = 1);
        } while ((vt++ < jt || F[0] != null) && st--);
        b = F[0] != null, tt[0] || tt.splice(0, 1);
      }
      if (f == bt) {
        for (y = 1, st = tt[0]; st >= 10; st /= 10, y++) ;
        j(G, w + (G.e = y + I * L - 1) + 1, C, b);
      } else
        G.e = I, G.r = +b;
      return G;
    };
  }();
  function q(o, c, u, E) {
    var g, w, C, f, p;
    if (u == null ? u = l : $(u, 0, 8), !o.c) return o.toString();
    if (g = o.c[0], C = o.e, c == null)
      p = Et(o.c), p = E == 1 || E == 2 && (C <= U || C >= S) ? ye(p, C) : Mt(p, C, "0");
    else if (o = j(new T(o), c, u), w = o.e, p = Et(o.c), f = p.length, E == 1 || E == 2 && (c <= w || w <= U)) {
      for (; f < c; p += "0", f++) ;
      p = ye(p, w);
    } else if (c -= C, p = Mt(p, w, "0"), w + 1 > f) {
      if (--c > 0) for (p += "."; c--; p += "0") ;
    } else if (c += w - f, c > 0)
      for (w + 1 == f && (p += "."); c--; p += "0") ;
    return o.s < 0 && g ? "-" + p : p;
  }
  function at(o, c) {
    for (var u, E, g = 1, w = new T(o[0]); g < o.length; g++)
      E = new T(o[g]), (!E.s || (u = Ht(w, E)) === c || u === 0 && w.s === c) && (w = E);
    return w;
  }
  function ct(o, c, u) {
    for (var E = 1, g = c.length; !c[--g]; c.pop()) ;
    for (g = c[0]; g >= 10; g /= 10, E++) ;
    return (u = E + u * L - 1) > Q ? o.c = o.e = null : u < O ? o.c = [o.e = 0] : (o.e = u, o.c = c), o;
  }
  A = /* @__PURE__ */ function() {
    var o = /^(-?)0([xbo])(?=\w[\w.]*$)/i, c = /^([^.]+)\.$/, u = /^\.([^.]+)$/, E = /^-?(Infinity|NaN)$/, g = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(w, C, f, p) {
      var I, y = f ? C : C.replace(g, "");
      if (E.test(y))
        w.s = isNaN(y) ? null : y < 0 ? -1 : 1;
      else {
        if (!f && (y = y.replace(o, function(b, R, P) {
          return I = (P = P.toLowerCase()) == "x" ? 16 : P == "b" ? 2 : 8, !p || p == I ? R : b;
        }), p && (I = p, y = y.replace(c, "$1").replace(u, "0.$1")), C != y))
          return new T(y, I);
        if (T.DEBUG)
          throw Error(gt + "Not a" + (p ? " base " + p : "") + " number: " + C);
        w.s = null;
      }
      w.c = w.e = null;
    };
  }();
  function j(o, c, u, E) {
    var g, w, C, f, p, I, y, b = o.c, R = Le;
    if (b) {
      t: {
        for (g = 1, f = b[0]; f >= 10; f /= 10, g++) ;
        if (w = c - g, w < 0)
          w += L, C = c, p = b[I = 0], y = It(p / R[g - C - 1] % 10);
        else if (I = Qe((w + 1) / L), I >= b.length)
          if (E) {
            for (; b.length <= I; b.push(0)) ;
            p = y = 0, g = 1, w %= L, C = w - L + 1;
          } else
            break t;
        else {
          for (p = f = b[I], g = 1; f >= 10; f /= 10, g++) ;
          w %= L, C = w - L + g, y = C < 0 ? 0 : It(p / R[g - C - 1] % 10);
        }
        if (E = E || c < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        b[I + 1] != null || (C < 0 ? p : p % R[g - C - 1]), E = u < 4 ? (y || E) && (u == 0 || u == (o.s < 0 ? 3 : 2)) : y > 5 || y == 5 && (u == 4 || E || u == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (w > 0 ? C > 0 ? p / R[g - C] : 0 : b[I - 1]) % 10 & 1 || u == (o.s < 0 ? 8 : 7)), c < 1 || !b[0])
          return b.length = 0, E ? (c -= o.e + 1, b[0] = R[(L - c % L) % L], o.e = -c || 0) : b[0] = o.e = 0, o;
        if (w == 0 ? (b.length = I, f = 1, I--) : (b.length = I + 1, f = R[L - w], b[I] = C > 0 ? It(p / R[g - C] % R[C]) * f : 0), E)
          for (; ; )
            if (I == 0) {
              for (w = 1, C = b[0]; C >= 10; C /= 10, w++) ;
              for (C = b[0] += f, f = 1; C >= 10; C /= 10, f++) ;
              w != f && (o.e++, b[0] == bt && (b[0] = 1));
              break;
            } else {
              if (b[I] += f, b[I] != bt) break;
              b[I--] = 0, f = 1;
            }
        for (w = b.length; b[--w] === 0; b.pop()) ;
      }
      o.e > Q ? o.c = o.e = null : o.e < O && (o.c = [o.e = 0]);
    }
    return o;
  }
  function yt(o) {
    var c, u = o.e;
    return u === null ? o.toString() : (c = Et(o.c), c = u <= U || u >= S ? ye(c, u) : Mt(c, u, "0"), o.s < 0 ? "-" + c : c);
  }
  return a.absoluteValue = a.abs = function() {
    var o = new T(this);
    return o.s < 0 && (o.s = 1), o;
  }, a.comparedTo = function(o, c) {
    return Ht(this, new T(o, c));
  }, a.decimalPlaces = a.dp = function(o, c) {
    var u, E, g, w = this;
    if (o != null)
      return $(o, 0, dt), c == null ? c = l : $(c, 0, 8), j(new T(w), o + w.e + 1, c);
    if (!(u = w.c)) return null;
    if (E = ((g = u.length - 1) - Ct(this.e / L)) * L, g = u[g]) for (; g % 10 == 0; g /= 10, E--) ;
    return E < 0 && (E = 0), E;
  }, a.dividedBy = a.div = function(o, c) {
    return n(this, new T(o, c), B, l);
  }, a.dividedToIntegerBy = a.idiv = function(o, c) {
    return n(this, new T(o, c), 0, 1);
  }, a.exponentiatedBy = a.pow = function(o, c) {
    var u, E, g, w, C, f, p, I, y, b = this;
    if (o = new T(o), o.c && !o.isInteger())
      throw Error(gt + "Exponent not an integer: " + yt(o));
    if (c != null && (c = new T(c)), f = o.e > 14, !b.c || !b.c[0] || b.c[0] == 1 && !b.e && b.c.length == 1 || !o.c || !o.c[0])
      return y = new T(Math.pow(+yt(b), f ? o.s * (2 - we(o)) : +yt(o))), c ? y.mod(c) : y;
    if (p = o.s < 0, c) {
      if (c.c ? !c.c[0] : !c.s) return new T(NaN);
      E = !p && b.isInteger() && c.isInteger(), E && (b = b.mod(c));
    } else {
      if (o.e > 9 && (b.e > 0 || b.e < -1 || (b.e == 0 ? b.c[0] > 1 || f && b.c[1] >= 24e7 : b.c[0] < 8e13 || f && b.c[0] <= 9999975e7)))
        return w = b.s < 0 && we(o) ? -0 : 0, b.e > -1 && (w = 1 / w), new T(p ? 1 / w : w);
      M && (w = Qe(M / L + 2));
    }
    for (f ? (u = new T(0.5), p && (o.s = 1), I = we(o)) : (g = Math.abs(+yt(o)), I = g % 2), y = new T(m); ; ) {
      if (I) {
        if (y = y.times(b), !y.c) break;
        w ? y.c.length > w && (y.c.length = w) : E && (y = y.mod(c));
      }
      if (g) {
        if (g = It(g / 2), g === 0) break;
        I = g % 2;
      } else if (o = o.times(u), j(o, o.e + 1, 1), o.e > 14)
        I = we(o);
      else {
        if (g = +yt(o), g === 0) break;
        I = g % 2;
      }
      b = b.times(b), w ? b.c && b.c.length > w && (b.c.length = w) : E && (b = b.mod(c));
    }
    return E ? y : (p && (y = m.div(y)), c ? y.mod(c) : w ? j(y, M, l, C) : y);
  }, a.integerValue = function(o) {
    var c = new T(this);
    return o == null ? o = l : $(o, 0, 8), j(c, c.e + 1, o);
  }, a.isEqualTo = a.eq = function(o, c) {
    return Ht(this, new T(o, c)) === 0;
  }, a.isFinite = function() {
    return !!this.c;
  }, a.isGreaterThan = a.gt = function(o, c) {
    return Ht(this, new T(o, c)) > 0;
  }, a.isGreaterThanOrEqualTo = a.gte = function(o, c) {
    return (c = Ht(this, new T(o, c))) === 1 || c === 0;
  }, a.isInteger = function() {
    return !!this.c && Ct(this.e / L) > this.c.length - 2;
  }, a.isLessThan = a.lt = function(o, c) {
    return Ht(this, new T(o, c)) < 0;
  }, a.isLessThanOrEqualTo = a.lte = function(o, c) {
    return (c = Ht(this, new T(o, c))) === -1 || c === 0;
  }, a.isNaN = function() {
    return !this.s;
  }, a.isNegative = function() {
    return this.s < 0;
  }, a.isPositive = function() {
    return this.s > 0;
  }, a.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, a.minus = function(o, c) {
    var u, E, g, w, C = this, f = C.s;
    if (o = new T(o, c), c = o.s, !f || !c) return new T(NaN);
    if (f != c)
      return o.s = -c, C.plus(o);
    var p = C.e / L, I = o.e / L, y = C.c, b = o.c;
    if (!p || !I) {
      if (!y || !b) return y ? (o.s = -c, o) : new T(b ? C : NaN);
      if (!y[0] || !b[0])
        return b[0] ? (o.s = -c, o) : new T(y[0] ? C : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          l == 3 ? -0 : 0
        ));
    }
    if (p = Ct(p), I = Ct(I), y = y.slice(), f = p - I) {
      for ((w = f < 0) ? (f = -f, g = y) : (I = p, g = b), g.reverse(), c = f; c--; g.push(0)) ;
      g.reverse();
    } else
      for (E = (w = (f = y.length) < (c = b.length)) ? f : c, f = c = 0; c < E; c++)
        if (y[c] != b[c]) {
          w = y[c] < b[c];
          break;
        }
    if (w && (g = y, y = b, b = g, o.s = -o.s), c = (E = b.length) - (u = y.length), c > 0) for (; c--; y[u++] = 0) ;
    for (c = bt - 1; E > f; ) {
      if (y[--E] < b[E]) {
        for (u = E; u && !y[--u]; y[u] = c) ;
        --y[u], y[E] += bt;
      }
      y[E] -= b[E];
    }
    for (; y[0] == 0; y.splice(0, 1), --I) ;
    return y[0] ? ct(o, y, I) : (o.s = l == 3 ? -1 : 1, o.c = [o.e = 0], o);
  }, a.modulo = a.mod = function(o, c) {
    var u, E, g = this;
    return o = new T(o, c), !g.c || !o.s || o.c && !o.c[0] ? new T(NaN) : !o.c || g.c && !g.c[0] ? new T(g) : (X == 9 ? (E = o.s, o.s = 1, u = n(g, o, 0, 3), o.s = E, u.s *= E) : u = n(g, o, 0, X), o = g.minus(u.times(o)), !o.c[0] && X == 1 && (o.s = g.s), o);
  }, a.multipliedBy = a.times = function(o, c) {
    var u, E, g, w, C, f, p, I, y, b, R, P, D, G, tt, F = this, J = F.c, ot = (o = new T(o, c)).c;
    if (!J || !ot || !J[0] || !ot[0])
      return !F.s || !o.s || J && !J[0] && !ot || ot && !ot[0] && !J ? o.c = o.e = o.s = null : (o.s *= F.s, !J || !ot ? o.c = o.e = null : (o.c = [0], o.e = 0)), o;
    for (E = Ct(F.e / L) + Ct(o.e / L), o.s *= F.s, p = J.length, b = ot.length, p < b && (D = J, J = ot, ot = D, g = p, p = b, b = g), g = p + b, D = []; g--; D.push(0)) ;
    for (G = bt, tt = xt, g = b; --g >= 0; ) {
      for (u = 0, R = ot[g] % tt, P = ot[g] / tt | 0, C = p, w = g + C; w > g; )
        I = J[--C] % tt, y = J[C] / tt | 0, f = P * I + y * R, I = R * I + f % tt * tt + D[w] + u, u = (I / G | 0) + (f / tt | 0) + P * y, D[w--] = I % G;
      D[w] = u;
    }
    return u ? ++E : D.splice(0, 1), ct(o, D, E);
  }, a.negated = function() {
    var o = new T(this);
    return o.s = -o.s || null, o;
  }, a.plus = function(o, c) {
    var u, E = this, g = E.s;
    if (o = new T(o, c), c = o.s, !g || !c) return new T(NaN);
    if (g != c)
      return o.s = -c, E.minus(o);
    var w = E.e / L, C = o.e / L, f = E.c, p = o.c;
    if (!w || !C) {
      if (!f || !p) return new T(g / 0);
      if (!f[0] || !p[0]) return p[0] ? o : new T(f[0] ? E : g * 0);
    }
    if (w = Ct(w), C = Ct(C), f = f.slice(), g = w - C) {
      for (g > 0 ? (C = w, u = p) : (g = -g, u = f), u.reverse(); g--; u.push(0)) ;
      u.reverse();
    }
    for (g = f.length, c = p.length, g - c < 0 && (u = p, p = f, f = u, c = g), g = 0; c; )
      g = (f[--c] = f[c] + p[c] + g) / bt | 0, f[c] = bt === f[c] ? 0 : f[c] % bt;
    return g && (f = [g].concat(f), ++C), ct(o, f, C);
  }, a.precision = a.sd = function(o, c) {
    var u, E, g, w = this;
    if (o != null && o !== !!o)
      return $(o, 1, dt), c == null ? c = l : $(c, 0, 8), j(new T(w), o, c);
    if (!(u = w.c)) return null;
    if (g = u.length - 1, E = g * L + 1, g = u[g]) {
      for (; g % 10 == 0; g /= 10, E--) ;
      for (g = u[0]; g >= 10; g /= 10, E++) ;
    }
    return o && w.e + 1 > E && (E = w.e + 1), E;
  }, a.shiftedBy = function(o) {
    return $(o, -9007199254740991, qe), this.times("1e" + o);
  }, a.squareRoot = a.sqrt = function() {
    var o, c, u, E, g, w = this, C = w.c, f = w.s, p = w.e, I = B + 4, y = new T("0.5");
    if (f !== 1 || !C || !C[0])
      return new T(!f || f < 0 && (!C || C[0]) ? NaN : C ? w : 1 / 0);
    if (f = Math.sqrt(+yt(w)), f == 0 || f == 1 / 0 ? (c = Et(C), (c.length + p) % 2 == 0 && (c += "0"), f = Math.sqrt(+c), p = Ct((p + 1) / 2) - (p < 0 || p % 2), f == 1 / 0 ? c = "5e" + p : (c = f.toExponential(), c = c.slice(0, c.indexOf("e") + 1) + p), u = new T(c)) : u = new T(f + ""), u.c[0]) {
      for (p = u.e, f = p + I, f < 3 && (f = 0); ; )
        if (g = u, u = y.times(g.plus(n(w, g, I, 1))), Et(g.c).slice(0, f) === (c = Et(u.c)).slice(0, f))
          if (u.e < p && --f, c = c.slice(f - 3, f + 1), c == "9999" || !E && c == "4999") {
            if (!E && (j(g, g.e + B + 2, 0), g.times(g).eq(w))) {
              u = g;
              break;
            }
            I += 4, f += 4, E = 1;
          } else {
            (!+c || !+c.slice(1) && c.charAt(0) == "5") && (j(u, u.e + B + 2, 1), o = !u.times(u).eq(w));
            break;
          }
    }
    return j(u, u.e + B + 1, l, o);
  }, a.toExponential = function(o, c) {
    return o != null && ($(o, 0, dt), o++), q(this, o, c, 1);
  }, a.toFixed = function(o, c) {
    return o != null && ($(o, 0, dt), o = o + this.e + 1), q(this, o, c);
  }, a.toFormat = function(o, c, u) {
    var E, g = this;
    if (u == null)
      o != null && c && typeof c == "object" ? (u = c, c = null) : o && typeof o == "object" ? (u = o, o = c = null) : u = z;
    else if (typeof u != "object")
      throw Error(gt + "Argument not an object: " + u);
    if (E = g.toFixed(o, c), g.c) {
      var w, C = E.split("."), f = +u.groupSize, p = +u.secondaryGroupSize, I = u.groupSeparator || "", y = C[0], b = C[1], R = g.s < 0, P = R ? y.slice(1) : y, D = P.length;
      if (p && (w = f, f = p, p = w, D -= w), f > 0 && D > 0) {
        for (w = D % f || f, y = P.substr(0, w); w < D; w += f) y += I + P.substr(w, f);
        p > 0 && (y += I + P.slice(w)), R && (y = "-" + y);
      }
      E = b ? y + (u.decimalSeparator || "") + ((p = +u.fractionGroupSize) ? b.replace(
        new RegExp("\\d{" + p + "}\\B", "g"),
        "$&" + (u.fractionGroupSeparator || "")
      ) : b) : y;
    }
    return (u.prefix || "") + E + (u.suffix || "");
  }, a.toFraction = function(o) {
    var c, u, E, g, w, C, f, p, I, y, b, R, P = this, D = P.c;
    if (o != null && (f = new T(o), !f.isInteger() && (f.c || f.s !== 1) || f.lt(m)))
      throw Error(gt + "Argument " + (f.isInteger() ? "out of range: " : "not an integer: ") + yt(f));
    if (!D) return new T(P);
    for (c = new T(m), I = u = new T(m), E = p = new T(m), R = Et(D), w = c.e = R.length - P.e - 1, c.c[0] = Le[(C = w % L) < 0 ? L + C : C], o = !o || f.comparedTo(c) > 0 ? w > 0 ? c : I : f, C = Q, Q = 1 / 0, f = new T(R), p.c[0] = 0; y = n(f, c, 0, 1), g = u.plus(y.times(E)), g.comparedTo(o) != 1; )
      u = E, E = g, I = p.plus(y.times(g = I)), p = g, c = f.minus(y.times(g = c)), f = g;
    return g = n(o.minus(u), E, 0, 1), p = p.plus(g.times(I)), u = u.plus(g.times(E)), p.s = I.s = P.s, w = w * 2, b = n(I, E, w, l).minus(P).abs().comparedTo(
      n(p, u, w, l).minus(P).abs()
    ) < 1 ? [I, E] : [p, u], Q = C, b;
  }, a.toNumber = function() {
    return +yt(this);
  }, a.toPrecision = function(o, c) {
    return o != null && $(o, 1, dt), q(this, o, c, 2);
  }, a.toString = function(o) {
    var c, u = this, E = u.s, g = u.e;
    return g === null ? E ? (c = "Infinity", E < 0 && (c = "-" + c)) : c = "NaN" : (o == null ? c = g <= U || g >= S ? ye(Et(u.c), g) : Mt(Et(u.c), g, "0") : o === 10 && _ ? (u = j(new T(u), B + g + 1, l), c = Mt(Et(u.c), u.e, "0")) : ($(o, 2, Z.length, "Base"), c = r(Mt(Et(u.c), g, "0"), 10, o, E, !0)), E < 0 && u.c[0] && (c = "-" + c)), c;
  }, a.valueOf = a.toJSON = function() {
    return yt(this);
  }, a._isBigNumber = !0, a[Symbol.toStringTag] = "BigNumber", a[Symbol.for("nodejs.util.inspect.custom")] = a.valueOf, s != null && T.set(s), T;
}
function Ct(s) {
  var n = s | 0;
  return s > 0 || s === n ? n : n - 1;
}
function Et(s) {
  for (var n, r, A = 1, a = s.length, m = s[0] + ""; A < a; ) {
    for (n = s[A++] + "", r = L - n.length; r--; n = "0" + n) ;
    m += n;
  }
  for (a = m.length; m.charCodeAt(--a) === 48; ) ;
  return m.slice(0, a + 1 || 1);
}
function Ht(s, n) {
  var r, A, a = s.c, m = n.c, B = s.s, l = n.s, U = s.e, S = n.e;
  if (!B || !l) return null;
  if (r = a && !a[0], A = m && !m[0], r || A) return r ? A ? 0 : -l : B;
  if (B != l) return B;
  if (r = B < 0, A = U == S, !a || !m) return A ? 0 : !a ^ r ? 1 : -1;
  if (!A) return U > S ^ r ? 1 : -1;
  for (l = (U = a.length) < (S = m.length) ? U : S, B = 0; B < l; B++) if (a[B] != m[B]) return a[B] > m[B] ^ r ? 1 : -1;
  return U == S ? 0 : U > S ^ r ? 1 : -1;
}
function $(s, n, r, A) {
  if (s < n || s > r || s !== It(s))
    throw Error(gt + (A || "Argument") + (typeof s == "number" ? s < n || s > r ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(s));
}
function we(s) {
  var n = s.c.length - 1;
  return Ct(s.e / L) == n && s.c[n] % 2 != 0;
}
function ye(s, n) {
  return (s.length > 1 ? s.charAt(0) + "." + s.slice(1) : s) + (n < 0 ? "e" : "e+") + n;
}
function Mt(s, n, r) {
  var A, a;
  if (n < 0) {
    for (a = r + "."; ++n; a += r) ;
    s = a + s;
  } else if (A = s.length, ++n > A) {
    for (a = r, n -= A; --n; a += r) ;
    s += a;
  } else n < A && (s = s.slice(0, n) + "." + s.slice(n));
  return s;
}
sn();
const hi = (s) => {
  const n = fn.decode(s), r = new gn(0);
  return r._value = BigInt(n.ingress_expiry.toString(10)), Object.assign(Object.assign({}, n), { canister_id: Bt.from(n.canister_id), ingress_expiry: r });
};
var fi = function(s, n, r, A) {
  if (r === "a" && !A) throw new TypeError("Private accessor was defined without a getter");
  if (typeof n == "function" ? s !== n || !A : !n.has(s)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? A : r === "a" ? A.call(s) : A ? A.value : n.get(s);
}, gi = function(s, n, r, A, a) {
  if (A === "m") throw new TypeError("Private method is not writable");
  if (A === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof n == "function" ? s !== n || !a : !n.has(s)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return A === "a" ? a.call(s, r) : a ? a.value = r : n.set(s, r), r;
}, Ce;
class pi {
  constructor() {
    Ce.set(this, Promise.resolve());
  }
  async schedule(n) {
    return new Promise((r, A) => {
      gi(this, Ce, fi(this, Ce, "f").finally(async () => {
        try {
          r(await n());
        } catch (a) {
          A(a);
        }
      }), "f");
    });
  }
}
Ce = /* @__PURE__ */ new WeakMap();
var Y = function(s, n, r, A) {
  if (r === "a" && !A) throw new TypeError("Private accessor was defined without a getter");
  if (typeof n == "function" ? s !== n || !A : !n.has(s)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? A : r === "a" ? A.call(s) : A ? A.value : n.get(s);
}, St = function(s, n, r, A, a) {
  if (A === "m") throw new TypeError("Private method is not writable");
  if (A === "a" && !a) throw new TypeError("Private accessor was defined without a setter");
  if (typeof n == "function" ? s !== n || !a : !n.has(s)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return A === "a" ? a.call(s, r) : a ? a.value = r : n.set(s, r), r;
}, se, Tt, ae, pt, te, fe, Be, Xt, ce, Ae, xe, an;
const di = new Uint8Array(mn.match(/[\da-f]{2}/gi).map((s) => parseInt(s, 16))).buffer, Ve = 5, ee = "Received invalid response from signer";
class wt extends Error {
  constructor(n) {
    super(n), Object.setPrototypeOf(this, wt.prototype);
  }
}
class be {
  constructor(n) {
    se.add(this), pt.set(this, void 0), te.set(this, /* @__PURE__ */ new Map()), fe.set(this, new pi()), Be.set(this, void 0), Xt.set(this, [[]]), ce.set(this, !0), Ae.set(this, void 0);
    const r = !Y(Tt, Tt, "f", ae);
    if (St(Tt, Tt, !1, "f", ae), r)
      throw new wt("SignerAgent is not constructable");
    St(this, pt, n, "f");
  }
  get rootKey() {
    var n;
    return (n = Y(this, pt, "f").agent.rootKey) !== null && n !== void 0 ? n : di;
  }
  get signer() {
    return Y(this, pt, "f").signer;
  }
  static async create(n) {
    var r, A, a;
    return St(Tt, Tt, !0, "f", ae), new Tt(Object.assign(Object.assign({}, n), { agent: (r = n.agent) !== null && r !== void 0 ? r : await Ut.create(), scheduleDelay: (A = n.scheduleDelay) !== null && A !== void 0 ? A : 20, validation: (a = n.validation) !== null && a !== void 0 ? a : null }));
  }
  static createSync(n) {
    var r, A, a;
    return St(Tt, Tt, !0, "f", ae), new Tt(Object.assign(Object.assign({}, n), { agent: (r = n.agent) !== null && r !== void 0 ? r : Ut.createSync(), scheduleDelay: (A = n.scheduleDelay) !== null && A !== void 0 ? A : 20, validation: (a = n.validation) !== null && a !== void 0 ? a : null }));
  }
  async execute() {
    const n = [...Y(this, Xt, "f")], r = Y(this, Ae, "f");
    this.clear();
    const A = n.flat().length;
    if (A === 0) {
      St(this, Ae, void 0, "f");
      return;
    }
    if (!(A > 1)) {
      await Y(this, se, "m", xe).call(this, n);
      return;
    }
    (await Y(this, fe, "f").schedule(() => this.signer.supportedStandards())).some((l) => l.name === "ICRC-112") ? await Y(this, se, "m", an).call(this, n, r) : await Y(this, se, "m", xe).call(this, n);
  }
  async call(n, r) {
    n = Bt.from(n), await Y(this, pt, "f").signer.openChannel();
    const A = await new Promise((M, z) => {
      clearTimeout(Y(this, Be, "f")), Y(this, Xt, "f").slice(-1)[0].push({
        options: {
          canisterId: n,
          method: r.methodName,
          arg: r.arg
        },
        resolve: M,
        reject: z
      }), Y(this, ce, "f") && St(this, Be, setTimeout(() => this.execute(), Y(this, pt, "f").scheduleDelay), "f");
    }), a = hi(A.contentMap);
    if (!(pn.Call === a.request_type && n.compareTo(a.canister_id) === "eq" && r.methodName === a.method_name && dn(r.arg, a.arg) === 0 && Y(this, pt, "f").account.compareTo(Bt.from(a.sender)) === "eq"))
      throw new wt(ee);
    const B = wn(a), l = await Ye.create({
      certificate: A.certificate,
      rootKey: this.rootKey,
      canisterId: n,
      maxAgeInMinutes: Ve
    }).catch(() => {
      throw new wt(ee);
    });
    if (!(l.lookup(["request_status", B, "status"]).status === Oe.Found))
      throw new wt(ee);
    const S = he(B);
    if (Y(this, te, "f").has(S))
      throw new wt(ee);
    Y(this, te, "f").set(S, A.certificate);
    const O = Date.now(), Q = yn(l.lookup(["time"]));
    if (!Q)
      throw new wt(ee);
    const X = Number(Sn(new On(Q))) / 1e6 - O + Ve * 60 * 1e3;
    return setTimeout(() => Y(this, te, "f").delete(S), X), {
      requestId: B,
      response: {
        ok: !0,
        status: 202,
        statusText: "Call has been sent over ICRC-25 JSON-RPC",
        body: null,
        headers: []
      }
    };
  }
  async fetchRootKey() {
    return Y(this, pt, "f").agent.fetchRootKey();
  }
  async getPrincipal() {
    return Y(this, pt, "f").account;
  }
  async query(n, r) {
    n = Bt.from(n);
    const A = await this.call(n, r), a = await this.readState(n, {
      paths: [
        [new TextEncoder().encode("request_status"), A.requestId]
      ]
    }), m = await Ye.create({
      certificate: a.certificate,
      rootKey: this.rootKey,
      canisterId: n
    }), B = m.lookup([
      "request_status",
      A.requestId,
      "status"
    ]), l = m.lookup([
      "request_status",
      A.requestId,
      "reply"
    ]);
    if (B.status !== Oe.Found || new TextDecoder().decode(B.value) !== "replied" || l.status !== Oe.Found)
      throw new wt("Certificate is missing reply");
    return {
      requestId: A.requestId,
      status: "replied",
      reply: {
        arg: l.value
      },
      httpDetails: {
        ok: !0,
        status: 202,
        statusText: "Certificate with reply has been received over ICRC-25 JSON-RPC",
        headers: []
      }
    };
  }
  async createReadStateRequest(n) {
    return {
      body: {
        content: {}
      }
    };
  }
  async readState(n, r, A, a) {
    if (r.paths.length !== 1 || r.paths[0].length !== 2 || new TextDecoder().decode(r.paths[0][0]) !== "request_status")
      throw new wt("Given paths are not supported");
    const m = r.paths[0][1], B = he(m), l = Y(this, te, "f").get(B);
    if (!l)
      throw new wt("Certificate could not be found");
    return { certificate: l };
  }
  async status() {
    return Y(this, pt, "f").agent.status();
  }
  replaceAccount(n) {
    Y(this, pt, "f").account = n;
  }
  replaceValidation(n) {
    St(this, Ae, n, "f");
  }
  /**
   * Enable manual triggering of canister calls execution
   */
  batch() {
    St(this, ce, !1, "f"), Y(this, Xt, "f").slice(-1)[0].length > 0 && Y(this, Xt, "f").push([]);
  }
  /**
   * Clear scheduled canister calls and switch back to automatic canister calls execution
   */
  clear() {
    St(this, Xt, [[]], "f"), St(this, ce, !0, "f");
  }
}
Tt = be, pt = /* @__PURE__ */ new WeakMap(), te = /* @__PURE__ */ new WeakMap(), fe = /* @__PURE__ */ new WeakMap(), Be = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ new WeakMap(), ce = /* @__PURE__ */ new WeakMap(), Ae = /* @__PURE__ */ new WeakMap(), se = /* @__PURE__ */ new WeakSet(), xe = async function(n) {
  await Promise.all(n.flat().map(({ options: r, resolve: A, reject: a }) => Y(this, fe, "f").schedule(async () => {
    try {
      const m = await this.signer.callCanister(Object.assign({ sender: Y(this, pt, "f").account }, r));
      A(m);
    } catch (m) {
      a(m);
    }
  })));
}, an = async function(n, r) {
  await Y(this, fe, "f").schedule(async () => {
    try {
      const A = await this.signer.batchCallCanister({
        sender: Y(this, pt, "f").account,
        requests: n.map((a) => a.map(({ options: m }) => m)),
        validation: r ?? void 0
      });
      n.forEach((a, m) => a.forEach(({ resolve: B, reject: l }, U) => {
        const S = A[m][U];
        if ("result" in S) {
          B(S.result);
          return;
        }
        if ("error" in S) {
          l(new wt(`${S.error.code}: ${S.error.message}
${JSON.stringify(S.error.data)}`));
          return;
        }
        l(new wt(ee));
      }));
    } catch (A) {
      n.flat().forEach(({ reject: a }) => a(A));
    }
  });
};
ae = { value: !1 };
const Jt = class Jt extends Ne {
  constructor(n) {
    super(n), this.identity = null, this.sessionKey = null, this.walletName = Jt.walletName, this.logo = Jt.logo, this.unwrapResponse = (a) => {
      if ("error" in a)
        throw new Dt(a.error);
      if ("result" in a)
        return a.result;
      throw new Dt({
        code: 500,
        message: "Invalid response"
      });
    };
    const r = this.config.adapters?.nfid;
    this.url = r?.rpcUrl ?? "https://nfid.one/rpc", this.transport = new on({
      url: this.url,
      ...Jt.TRANSPORT_CONFIG
    }), this.signer = new en({
      transport: this.transport
    });
    const A = Ut.createSync({ host: this.url });
    this.signerAgent = be.createSync({
      signer: this.signer,
      account: Bt.anonymous(),
      // Start anonymous
      agent: A
    }), this.agent = Ut.createSync({ host: this.url }), this.setState(k.Status.READY);
  }
  async isAvailable() {
    return !0;
  }
  async isConnected() {
    return this.identity !== null && this.state === k.Status.CONNECTED;
  }
  async getPrincipal() {
    if (!this.identity)
      throw new Error("NFID Adapter: Not connected. Call connect() first.");
    return this.identity.getPrincipal();
  }
  async connect() {
    if (this.setState(k.Status.CONNECTING), !this.signer || !this.transport || !this.agent)
      throw console.error("[NFID] Adapter not initialized correctly before connect."), this.setState(k.Status.ERROR), new Error("NFID Adapter not initialized correctly.");
    try {
      await this.signer.openChannel(), this.sessionKey = Nn.generate();
      const n = this.config.delegationTimeout !== void 0 ? BigInt(Date.now() * 1e6) + BigInt(this.config.delegationTimeout) : BigInt(Date.now() * 1e6) + BigInt(48 * 60 * 60 * 1e9), r = await this.signer.delegation({
        publicKey: this.sessionKey.getPublicKey().toDer(),
        targets: this.config.delegationTargets.map(
          (m) => Bt.fromText(m)
        ),
        maxTimeToLive: n
      }), A = Pn.fromDelegation(
        this.sessionKey,
        r
      );
      this.signerAgent = be.createSync({
        signer: this.signer,
        account: A.getPrincipal(),
        agent: Ut.createSync({ host: this.url })
        // Use RPC URL for the signer agent
      }), this.identity = A, this.config.fetchRootKeys && await this.agent.fetchRootKey();
      const a = A.getPrincipal();
      if (a.isAnonymous())
        throw console.warn("[NFID] Connect failed: got anonymous principal."), this.setState(k.Status.READY), this.identity = null, this.signerAgent = null, this.sessionKey = null, new Error(
          "Failed to authenticate with NFID - got anonymous principal"
        );
      return this.setState(k.Status.CONNECTED), {
        owner: a,
        subaccount: Te.fromPrincipal({
          principal: a,
          subAccount: void 0
          // This will use the default subaccount
        }).toUint8Array(),
        hasDelegation: !0
      };
    } catch (n) {
      if (console.error("[NFID] Error during connection:", n), this.identity = null, this.signerAgent = null, this.sessionKey = null, this.signer)
        try {
          this.signer.closeChannel();
        } catch (r) {
          console.debug("Error closing channel on connect failure:", r);
        }
      throw this.setState(k.Status.READY), n;
    }
  }
  undelegatedActor(n, r) {
    const A = Ut.createSync({
      identity: this.identity,
      host: this.config.hostUrl,
      verifyQuerySignatures: this.config.verifyQuerySignatures
    });
    return re.createActor(r, {
      agent: A,
      canisterId: n
    });
  }
  // Implementation for BaseIcAdapter actor caching
  createActorInternal(n, r, A) {
    const a = A?.requiresSigning !== !1;
    if (!this.identity)
      throw new Error("Not connected. Identity not available.");
    if (!this.signerAgent && a)
      throw new Error("Signer agent not available. Please connect first.");
    if (!this.config.hostUrl)
      throw new Error("Host URL configuration is missing.");
    try {
      const m = this.identity.getDelegation().delegations.some(
        (B) => B.delegation.targets?.some((l) => l.toText() === n)
      );
      return m && !a || !m && !a ? this.undelegatedActor(n, r) : a ? re.createActor(r, {
        agent: this.signerAgent,
        canisterId: n
      }) : re.createActor(r, {
        agent: this.signerAgent,
        canisterId: n
      });
    } catch (m) {
      throw console.error("Error creating actor:", m), new Error(
        `Failed to create actor: ${m instanceof Error ? m.message : String(m)}`
      );
    }
  }
  // disconnect is handled by BaseIcAdapter, implement internal methods instead
  async disconnectInternal() {
    this.identity = null, this.signerAgent = null, this.sessionKey = null;
    try {
      this.signer && this.signer.closeChannel();
    } catch (n) {
      console.error("[NFID] Error during disconnect internal cleanup:", n);
    }
  }
  cleanupInternal() {
    this.transport = null, this.signer = null;
  }
};
Jt.TRANSPORT_CONFIG = {
  windowOpenerFeatures: "width=525,height=705",
  establishTimeout: 45e3,
  disconnectTimeout: 45e3,
  statusPollingRate: 500,
  detectNonClickEstablishment: !1
  // Allow connection outside of click handler for auto-connect
}, Jt.logo = ii, Jt.walletName = "NFID";
let ge = Jt;
const wi = "data:image/webp;base64,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", Yt = class Yt extends Ne {
  constructor(n) {
    super(n), this.signer = null, this.agent = null, this.signerAgent = null, this.transport = null, this.walletName = Yt.walletName, this.logo = Yt.logo;
    const r = this.config.adapters?.oisy?.config?.signerUrl || "https://oisy.com/sign";
    this.agent = Ut.createSync({ host: this.config.hostUrl }), this.transport = new on({
      url: r,
      ...Yt.TRANSPORT_CONFIG
    }), this.signer = new en({
      transport: this.transport
    }), this.signerAgent = be.createSync({
      signer: this.signer,
      account: Bt.anonymous(),
      agent: this.agent
    });
  }
  async isAvailable() {
    return !0;
  }
  async isConnected() {
    return this.agent !== null && this.signer !== null && this.signerAgent !== null;
  }
  async getPrincipal() {
    if (!this.signerAgent)
      throw new Error("Oisy signer agent not initialized or connected");
    return this.signerAgent.getPrincipal();
  }
  async getAccountId() {
    return Te.fromPrincipal({
      principal: await this.getPrincipal(),
      subAccount: void 0
      // This will use the default subaccount
    }).toHex();
  }
  async connect() {
    this.setState(k.Status.CONNECTING);
    try {
      if (!this.signerAgent || !this.signerAgent.signer)
        throw new Error("Oisy signer agent not initialized. Was the constructor called with config?");
      const n = await this.signerAgent.signer.accounts();
      if (!n || n.length === 0)
        throw this.disconnect(), new Error("No accounts returned from Oisy");
      const r = n[0].owner;
      if (r.isAnonymous())
        throw this.setState(k.Status.READY), new Error("Failed to authenticate with Oisy - got anonymous principal");
      if (this.signerAgent.replaceAccount(r), this.config.fetchRootKeys) {
        if (!this.signerAgent) throw new Error("Signer agent not ready for fetchRootKeys");
        await this.signerAgent.fetchRootKey();
      }
      return this.setState(k.Status.CONNECTED), {
        owner: r,
        subaccount: Ke(await this.getAccountId() || ""),
        hasDelegation: !1
      };
    } catch (n) {
      throw console.error("[Oisy] Connection error:", n), await this.disconnect(), n;
    }
  }
  // Use BaseIcAdapter's actor caching by implementing createActorInternal
  createActorInternal(n, r) {
    if (!this.signerAgent)
      throw new Error("No signer agent available. Please connect first.");
    try {
      const A = this.signerAgent;
      return re.createActor(r, {
        agent: A,
        canisterId: n
      });
    } catch (A) {
      throw console.error("[Oisy] Actor creation error:", A), A;
    }
  }
  async disconnectInternal() {
    if (this.signer)
      try {
        console.debug("[Oisy] Closing signer channel"), this.signer.closeChannel();
      } catch (n) {
        console.debug("[Oisy] Error closing signer channel:", n);
      }
  }
  cleanupInternal() {
    this.signer = null, this.agent = null, this.signerAgent = null, this.transport = null;
  }
};
Yt.TRANSPORT_CONFIG = {
  windowOpenerFeatures: "width=525,height=705",
  establishTimeout: 45e3,
  disconnectTimeout: 45e3,
  statusPollingRate: 500,
  detectNonClickEstablishment: !1
}, Yt.logo = wi, Yt.walletName = "OISY Wallet";
let pe = Yt;
const me = {
  timeout: 1e3 * 60 * 60 * 24,
  // 1 day
  enabled: !0
}, yi = {
  ii: {
    id: "ii",
    walletName: le.walletName,
    logo: le.logo,
    adapter: le,
    config: {
      ...me,
      identityProvider: "https://identity.ic0.app"
    }
  },
  plug: {
    id: "plug",
    walletName: ue.walletName,
    logo: ue.logo,
    adapter: ue,
    config: {
      ...me,
      identityProvider: "https://identity.ic0.app"
    }
  },
  nfid: {
    id: "nfid",
    walletName: ge.walletName,
    logo: ge.logo,
    adapter: ge,
    config: {
      ...me,
      rpcUrl: "https://nfid.one/rpc"
      // Default NFID RPC endpoint
    }
  },
  oisy: {
    id: "oisy",
    walletName: pe.walletName,
    logo: pe.logo,
    adapter: pe,
    config: {
      ...me,
      signerUrl: "https://oisy.com/sign"
      // Default Oisy sign URL
    }
  }
}, ze = {
  // Global defaults
  hostUrl: "https://icp0.io",
  delegationTimeout: BigInt(24 * 60 * 60 * 1e3 * 1e3 * 1e3),
  // 1 day
  delegationTargets: [],
  derivationOrigin: typeof window < "u" ? window.location.origin : "",
  // Default to browser origin
  dfxNetwork: "ic",
  fetchRootKeys: !1,
  verifyQuerySignatures: !0,
  localStorageKey: "pnpConnectedWallet",
  adapters: {
    ...yi
  }
};
function mi(s = {}) {
  const n = { ...ze.adapters };
  if (s.adapters)
    for (const m in s.adapters) {
      const B = ze.adapters[m] || {};
      n[m] = {
        ...B,
        ...s.adapters[m]
        // User overrides for this adapter (can include config)
      };
    }
  const r = s.hostUrl ?? "https://icp0.io", A = s.derivationOrigin ?? "http://localhost:5173", a = {
    ...ze,
    ...s,
    // User's global settings override defaults
    hostUrl: r,
    derivationOrigin: A,
    adapters: n
    // Use the merged adapters map (now includes config)
  };
  return n.ii && (n.ii.config.identityProvider = n.ii.config.identityProvider ?? "https://identity.ic0.app"), a;
}
class Ei {
  constructor(n = {}) {
    this.account = null, this.activeWallet = null, this.provider = null, this.actorCache = /* @__PURE__ */ new Map(), this.isConnecting = !1, this.config = mi(n), this.adapters = this.config.adapters || {};
  }
  getAdapterConfig(n) {
    return this.config.adapters?.[n];
  }
  mergeAdapterConfig(n) {
    const r = this.getAdapterConfig(n);
    return {
      ...this.config,
      ...r
    };
  }
  async connect(n) {
    if (this.isConnecting) return null;
    this.isConnecting = !0;
    let r = null;
    try {
      const A = n || localStorage.getItem(this.config.localStorageKey);
      if (!A) return null;
      localStorage.setItem(this.config.localStorageKey, A);
      const a = this.adapters[A];
      if (!a)
        throw new Error(
          `Wallet ${A} not found in provided adapters`
        );
      const m = this.mergeAdapterConfig(A);
      r = new a.adapter(m);
      const B = await r.connect(m);
      return this.account = B, this.activeWallet = a, this.provider = r, B;
    } catch (A) {
      if (console.warn(
        `[PNP] Connection failed for ${n || "stored wallet"}:`,
        A
      ), r)
        try {
          await r.disconnect();
        } catch (a) {
          console.warn("[PNP] Disconnect error:", a);
        }
      return this.account = null, this.provider = null, this.activeWallet = null, localStorage.removeItem(this.config.localStorageKey), null;
    } finally {
      this.isConnecting = !1;
    }
  }
  getAdapter(n) {
    const r = this.adapters[n];
    if (!r)
      throw new Error(`Wallet ${n} not found in provided adapters`);
    const A = this.mergeAdapterConfig(n);
    return new r.adapter(A);
  }
  async disconnect() {
    this.isConnecting = !1;
    try {
      this.provider && await this.provider.disconnect(), this.account = null, this.provider = null, this.activeWallet = null, this.actorCache.clear(), localStorage.removeItem(this.config.localStorageKey);
    } catch (n) {
      console.warn("[PNP] Disconnect error:", n), this.account = null, this.provider = null, this.activeWallet = null, this.actorCache.clear(), localStorage.removeItem(this.config.localStorageKey);
    } finally {
      this.isConnecting = !1;
    }
  }
  getActor(n, r, A) {
    const { anon: a = !1, requiresSigning: m = !0 } = A || {};
    if (a)
      return this.createAnonymousActor(n, r);
    if (!this.provider)
      throw new Error(
        "Cannot create signed actor. No wallet provider connected."
      );
    return this.provider.createActor(n, r, { requiresSigning: m });
  }
  createAnonymousActor(n, r) {
    const A = `anon-${n}`, a = this.actorCache.get(A);
    if (a) return a;
    const m = re.createActor(r, {
      agent: Ut.createSync({
        host: this.config.hostUrl,
        verifyQuerySignatures: this.config.verifyQuerySignatures
      }),
      canisterId: n
    });
    return this.actorCache.set(A, m), m;
  }
  isWalletConnected() {
    return this.activeWallet !== null && this.provider !== null && this.account !== null;
  }
  getEnabledWallets() {
    return Object.values(this.adapters).filter((n) => this.config.adapters[n.id]?.enabled !== !1);
  }
}
const Ni = (s = {}) => new Ei(s);
export {
  Ei as PNP,
  Ni as createPNP,
  mi as createPNPConfig
};
