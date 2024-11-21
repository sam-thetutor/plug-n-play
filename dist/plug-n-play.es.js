import { Cbor as Wr, Expiry as Gr, HttpAgent as ee, SubmitRequestType as Kr, compare as jr, requestIdOf as Qr, Certificate as Pt, LookupStatus as ke, lookupResultToBuffer as Xr, Actor as pe, AnonymousIdentity as Vr } from "@dfinity/agent";
import { AnonymousIdentity as mi } from "@dfinity/agent";
import { Principal as L0 } from "@dfinity/principal";
import { Principal as _i } from "@dfinity/principal";
import { AuthClient as Yr } from "@dfinity/auth-client";
import { DelegationChain as Ce, Delegation as Fr, Ed25519KeyIdentity as Ot, DelegationIdentity as Ut } from "@dfinity/identity";
import { lebDecode as Zr, PipeArrayBuffer as Jr } from "@dfinity/candid";
var $r = ((u) => (u[u.FractionalMoreThan8Decimals = 0] = "FractionalMoreThan8Decimals", u[u.InvalidFormat = 1] = "InvalidFormat", u[u.FractionalTooManyDecimals = 2] = "FractionalTooManyDecimals", u))($r || {});
BigInt(1e8);
var Nt = "abcdefghijklmnopqrstuvwxyz234567", ve = /* @__PURE__ */ Object.create(null);
for (let u = 0; u < Nt.length; u++) ve[Nt[u]] = u;
ve[0] = ve.o;
ve[1] = ve.i;
var Fe = (u) => {
  let r = u.toUint8Array(), o = new Uint8Array(32);
  return o[0] = r.length, o.set(r, 1), o;
};
const en = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.1.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20880%20640'%20style='enable-background:new%200%200%20880%20640;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:none;}%20.st1{fill:url(%23SVGID_1_);}%20.st2{fill:url(%23SVGID_2_);}%20.st3{fill:%2329ABE2;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M671.99,320c0-45.09-37.63-81.78-83.89-81.78c-12.26,0-33.8,6.07-66.78,34.97%20c-17.73,15.54-33.17,32.87-43.85,45.55c17.99,19.05,37.47,39.23,46.31,46.89c3.63,3.14,27.63,22.81,56.09,35.14%20c3.34,0.74,6.06,1,8.16,1C634.34,401.5,671.99,364.84,671.99,320z'/%3e%3cpath%20class='st0'%20d='M522.89,366.54c27.22,23.59,45.72,31.74,56.98,34.24c3.34,0.74,6.06,1,8.16,1%20c46.3-0.28,83.95-36.94,83.95-81.78c0-45.09-37.63-81.78-83.89-81.78c-12.26,0-33.8,6.07-66.78,34.97%20c-17.73,15.54-33.17,32.87-43.85,45.55C477.21,319.05,504.3,350.43,522.89,366.54z'/%3e%3clinearGradient%20id='SVGID_1_'%20gradientUnits='userSpaceOnUse'%20x1='515.2743'%20y1='201.9346'%20x2='705.4849'%20y2='398.9034'%3e%3cstop%20offset='0.21'%20style='stop-color:%23F15A24'/%3e%3cstop%20offset='0.6841'%20style='stop-color:%23FBB03B'/%3e%3c/linearGradient%3e%3cpath%20class='st1'%20d='M588.1,184c-32.16,0-67.28,16.49-104.38,49c-17.57,15.4-32.8,31.88-44.23,45.1c0.02,0.02,0.04,0.04,0.06,0.07%20c0.03-0.04,0.05-0.06,0.05-0.06s18.03,19.63,37.87,40.64c10.68-12.69,26.11-30.01,43.85-45.55c32.98-28.91,54.52-34.97,66.78-34.97%20c46.26,0,83.89,36.69,83.89,81.78c0,44.84-37.65,81.5-83.95,81.78c-2.11,0-4.82-0.26-8.16-1c13.49,5.84,27.99,10.04,41.8,10.04%20c84.79,0,101.36-55.33,102.49-59.25c2.51-10.14,3.84-20.7,3.84-31.56C728,245.01,665.24,184,588.1,184z'/%3e%3cpath%20class='st0'%20d='M208.01,320c0,45.09,37.63,81.78,83.89,81.78c12.26,0,33.8-6.07,66.78-34.97%20c17.73-15.54,33.17-32.87,43.85-45.55c-17.99-19.05-37.47-39.23-46.31-46.89c-3.63-3.14-27.63-22.81-56.09-35.14%20c-3.34-0.74-6.06-1-8.16-1C245.66,238.5,208.01,275.16,208.01,320z'/%3e%3cpath%20class='st0'%20d='M357.11,273.46c-27.22-23.59-45.72-31.74-56.98-34.24c-3.34-0.74-6.06-1-8.16-1%20c-46.3,0.28-83.95,36.94-83.95,81.78c0,45.09,37.63,81.78,83.89,81.78c12.26,0,33.8-6.07,66.78-34.97%20c17.73-15.54,33.17-32.87,43.85-45.55c0.26-0.3,0.52-0.62,0.78-0.92C392.12,307.51,375.7,289.57,357.11,273.46z'/%3e%3clinearGradient%20id='SVGID_2_'%20gradientUnits='userSpaceOnUse'%20x1='-877.3035'%20y1='-1122.6819'%20x2='-687.0928'%20y2='-925.7131'%20gradientTransform='matrix(-1%200%200%20-1%20-512.5778%20-684.6164)'%3e%3cstop%20offset='0.21'%20style='stop-color:%23ED1E79'/%3e%3cstop%20offset='0.8929'%20style='stop-color:%23522785'/%3e%3c/linearGradient%3e%3cpath%20class='st2'%20d='M291.9,456c32.16,0,67.28-16.49,104.38-49c17.57-15.4,32.8-31.88,44.23-45.1c-0.02-0.02-0.04-0.04-0.06-0.07%20c-0.03,0.04-0.05,0.06-0.05,0.06s-18.03-19.63-37.87-40.64c-10.68,12.69-26.11,30.01-43.85,45.55%20c-32.98,28.91-54.52,34.97-66.78,34.97c-46.26,0-83.89-36.69-83.89-81.78c0-44.84,37.65-81.5,83.95-81.78c2.11,0,4.82,0.26,8.16,1%20c-13.49-5.84-27.99-10.04-41.8-10.04c-84.79,0-101.36,55.33-102.49,59.25c-2.51,10.14-3.84,20.7-3.84,31.56%20C152,394.99,214.76,456,291.9,456z'/%3e%3cpath%20class='st3'%20d='M621.52,409.45c-43.41-1.07-88.53-35.3-97.74-43.81c-23.78-21.99-78.66-81.53-82.97-86.2%20C400.58,234.4,346.07,184,291.9,184h-0.07h-0.07c-65.85,0.33-121.19,44.92-135.91,104.44c1.13-3.92,22.76-60.3,102.42-58.34%20c43.41,1.07,88.75,35.76,97.95,44.27c23.78,21.99,78.68,81.54,82.97,86.21C479.42,405.61,533.93,456,588.1,456h0.07h0.07%20c65.85-0.33,121.19-44.92,135.91-104.44C723.03,355.48,701.18,411.41,621.52,409.45z'/%3e%3c/g%3e%3c/svg%3e";
function tn(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
const rn = new Int32Array([
  0,
  1996959894,
  3993919788,
  2567524794,
  124634137,
  1886057615,
  3915621685,
  2657392035,
  249268274,
  2044508324,
  3772115230,
  2547177864,
  162941995,
  2125561021,
  3887607047,
  2428444049,
  498536548,
  1789927666,
  4089016648,
  2227061214,
  450548861,
  1843258603,
  4107580753,
  2211677639,
  325883990,
  1684777152,
  4251122042,
  2321926636,
  335633487,
  1661365465,
  4195302755,
  2366115317,
  997073096,
  1281953886,
  3579855332,
  2724688242,
  1006888145,
  1258607687,
  3524101629,
  2768942443,
  901097722,
  1119000684,
  3686517206,
  2898065728,
  853044451,
  1172266101,
  3705015759,
  2882616665,
  651767980,
  1373503546,
  3369554304,
  3218104598,
  565507253,
  1454621731,
  3485111705,
  3099436303,
  671266974,
  1594198024,
  3322730930,
  2970347812,
  795835527,
  1483230225,
  3244367275,
  3060149565,
  1994146192,
  31158534,
  2563907772,
  4023717930,
  1907459465,
  112637215,
  2680153253,
  3904427059,
  2013776290,
  251722036,
  2517215374,
  3775830040,
  2137656763,
  141376813,
  2439277719,
  3865271297,
  1802195444,
  476864866,
  2238001368,
  4066508878,
  1812370925,
  453092731,
  2181625025,
  4111451223,
  1706088902,
  314042704,
  2344532202,
  4240017532,
  1658658271,
  366619977,
  2362670323,
  4224994405,
  1303535960,
  984961486,
  2747007092,
  3569037538,
  1256170817,
  1037604311,
  2765210733,
  3554079995,
  1131014506,
  879679996,
  2909243462,
  3663771856,
  1141124467,
  855842277,
  2852801631,
  3708648649,
  1342533948,
  654459306,
  3188396048,
  3373015174,
  1466479909,
  544179635,
  3110523913,
  3462522015,
  1591671054,
  702138776,
  2966460450,
  3352799412,
  1504918807,
  783551873,
  3082640443,
  3233442989,
  3988292384,
  2596254646,
  62317068,
  1957810842,
  3939845945,
  2647816111,
  81470997,
  1943803523,
  3814918930,
  2489596804,
  225274430,
  2053790376,
  3826175755,
  2466906013,
  167816743,
  2097651377,
  4027552580,
  2265490386,
  503444072,
  1762050814,
  4150417245,
  2154129355,
  426522225,
  1852507879,
  4275313526,
  2312317920,
  282753626,
  1742555852,
  4189708143,
  2394877945,
  397917763,
  1622183637,
  3604390888,
  2714866558,
  953729732,
  1340076626,
  3518719985,
  2797360999,
  1068828381,
  1219638859,
  3624741850,
  2936675148,
  906185462,
  1090812512,
  3747672003,
  2825379669,
  829329135,
  1181335161,
  3412177804,
  3160834842,
  628085408,
  1382605366,
  3423369109,
  3138078467,
  570562233,
  1426400815,
  3317316542,
  2998733608,
  733239954,
  1555261956,
  3268935591,
  3050360625,
  752459403,
  1541320221,
  2607071920,
  3965973030,
  1969922972,
  40735498,
  2617837225,
  3943577151,
  1913087877,
  83908371,
  2512341634,
  3803740692,
  2075208622,
  213261112,
  2463272603,
  3855990285,
  2094854071,
  198958881,
  2262029012,
  4057260610,
  1759359992,
  534414190,
  2176718541,
  4139329115,
  1873836001,
  414664567,
  2282248934,
  4279200368,
  1711684554,
  285281116,
  2405801727,
  4167216745,
  1634467795,
  376229701,
  2685067896,
  3608007406,
  1308918612,
  956543938,
  2808555105,
  3495958263,
  1231636301,
  1047427035,
  2932959818,
  3654703836,
  1088359270,
  936918e3,
  2847714899,
  3736837829,
  1202900863,
  817233897,
  3183342108,
  3401237130,
  1404277552,
  615818150,
  3134207493,
  3453421203,
  1423857449,
  601450431,
  3009837614,
  3294710456,
  1567103746,
  711928724,
  3020668471,
  3272380065,
  1510334235,
  755167117
]);
function Dr(u) {
  if (Buffer.isBuffer(u))
    return u;
  if (typeof u == "number")
    return Buffer.alloc(u);
  if (typeof u == "string")
    return Buffer.from(u);
  throw new Error("input must be buffer, number, or string, received " + typeof u);
}
function nn(u) {
  const r = Dr(4);
  return r.writeInt32BE(u, 0), r;
}
function Ct(u, r) {
  u = Dr(u), Buffer.isBuffer(r) && (r = r.readUInt32BE(0));
  let o = ~~r ^ -1;
  for (var i = 0; i < u.length; i++)
    o = rn[(o ^ u[i]) & 255] ^ o >>> 8;
  return o ^ -1;
}
function wt() {
  return nn(Ct.apply(null, arguments));
}
wt.signed = function() {
  return Ct.apply(null, arguments);
};
wt.unsigned = function() {
  return Ct.apply(null, arguments) >>> 0;
};
var on = wt;
const an = /* @__PURE__ */ tn(on);
var $ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
function sn(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
function cn(u) {
  if (u.__esModule) return u;
  var r = u.default;
  if (typeof r == "function") {
    var o = function i() {
      return this instanceof i ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    o.prototype = r.prototype;
  } else o = {};
  return Object.defineProperty(o, "__esModule", { value: !0 }), Object.keys(u).forEach(function(i) {
    var f = Object.getOwnPropertyDescriptor(u, i);
    Object.defineProperty(o, i, f.get ? f : {
      enumerable: !0,
      get: function() {
        return u[i];
      }
    });
  }), o;
}
var Ee = {}, Ie = {};
Ie.byteLength = un;
Ie.toByteArray = hn;
Ie.fromByteArray = vn;
var H0 = [], k0 = [], xn = typeof Uint8Array < "u" ? Uint8Array : Array, Te = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var ie = 0, fn = Te.length; ie < fn; ++ie)
  H0[ie] = Te[ie], k0[Te.charCodeAt(ie)] = ie;
k0[45] = 62;
k0[95] = 63;
function mr(u) {
  var r = u.length;
  if (r % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var o = u.indexOf("=");
  o === -1 && (o = r);
  var i = o === r ? 0 : 4 - o % 4;
  return [o, i];
}
function un(u) {
  var r = mr(u), o = r[0], i = r[1];
  return (o + i) * 3 / 4 - i;
}
function ln(u, r, o) {
  return (r + o) * 3 / 4 - o;
}
function hn(u) {
  var r, o = mr(u), i = o[0], f = o[1], A = new xn(ln(u, i, f)), b = 0, s = f > 0 ? i - 4 : i, m;
  for (m = 0; m < s; m += 4)
    r = k0[u.charCodeAt(m)] << 18 | k0[u.charCodeAt(m + 1)] << 12 | k0[u.charCodeAt(m + 2)] << 6 | k0[u.charCodeAt(m + 3)], A[b++] = r >> 16 & 255, A[b++] = r >> 8 & 255, A[b++] = r & 255;
  return f === 2 && (r = k0[u.charCodeAt(m)] << 2 | k0[u.charCodeAt(m + 1)] >> 4, A[b++] = r & 255), f === 1 && (r = k0[u.charCodeAt(m)] << 10 | k0[u.charCodeAt(m + 1)] << 4 | k0[u.charCodeAt(m + 2)] >> 2, A[b++] = r >> 8 & 255, A[b++] = r & 255), A;
}
function dn(u) {
  return H0[u >> 18 & 63] + H0[u >> 12 & 63] + H0[u >> 6 & 63] + H0[u & 63];
}
function pn(u, r, o) {
  for (var i, f = [], A = r; A < o; A += 3)
    i = (u[A] << 16 & 16711680) + (u[A + 1] << 8 & 65280) + (u[A + 2] & 255), f.push(dn(i));
  return f.join("");
}
function vn(u) {
  for (var r, o = u.length, i = o % 3, f = [], A = 16383, b = 0, s = o - i; b < s; b += A)
    f.push(pn(u, b, b + A > s ? s : b + A));
  return i === 1 ? (r = u[o - 1], f.push(
    H0[r >> 2] + H0[r << 4 & 63] + "=="
  )) : i === 2 && (r = (u[o - 2] << 8) + u[o - 1], f.push(
    H0[r >> 10] + H0[r >> 4 & 63] + H0[r << 2 & 63] + "="
  )), f.join("");
}
var Ft = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Ft.read = function(u, r, o, i, f) {
  var A, b, s = f * 8 - i - 1, m = (1 << s) - 1, h = m >> 1, p = -7, D = o ? f - 1 : 0, g = o ? -1 : 1, w = u[r + D];
  for (D += g, A = w & (1 << -p) - 1, w >>= -p, p += s; p > 0; A = A * 256 + u[r + D], D += g, p -= 8)
    ;
  for (b = A & (1 << -p) - 1, A >>= -p, p += i; p > 0; b = b * 256 + u[r + D], D += g, p -= 8)
    ;
  if (A === 0)
    A = 1 - h;
  else {
    if (A === m)
      return b ? NaN : (w ? -1 : 1) * (1 / 0);
    b = b + Math.pow(2, i), A = A - h;
  }
  return (w ? -1 : 1) * b * Math.pow(2, A - i);
};
Ft.write = function(u, r, o, i, f, A) {
  var b, s, m, h = A * 8 - f - 1, p = (1 << h) - 1, D = p >> 1, g = f === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, w = i ? 0 : A - 1, F = i ? 1 : -1, R = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
  for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (s = isNaN(r) ? 1 : 0, b = p) : (b = Math.floor(Math.log(r) / Math.LN2), r * (m = Math.pow(2, -b)) < 1 && (b--, m *= 2), b + D >= 1 ? r += g / m : r += g * Math.pow(2, 1 - D), r * m >= 2 && (b++, m /= 2), b + D >= p ? (s = 0, b = p) : b + D >= 1 ? (s = (r * m - 1) * Math.pow(2, f), b = b + D) : (s = r * Math.pow(2, D - 1) * Math.pow(2, f), b = 0)); f >= 8; u[o + w] = s & 255, w += F, s /= 256, f -= 8)
    ;
  for (b = b << f | s, h += f; h > 0; u[o + w] = b & 255, w += F, b /= 256, h -= 8)
    ;
  u[o + w - F] |= R * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(u) {
  const r = Ie, o = Ft, i = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  u.Buffer = s, u.SlowBuffer = l, u.INSPECT_MAX_BYTES = 50;
  const f = 2147483647;
  u.kMaxLength = f, s.TYPED_ARRAY_SUPPORT = A(), !s.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function A() {
    try {
      const c = new Uint8Array(1), e = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(c, e), c.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(s.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (s.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(s.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (s.isBuffer(this))
        return this.byteOffset;
    }
  });
  function b(c) {
    if (c > f)
      throw new RangeError('The value "' + c + '" is invalid for option "size"');
    const e = new Uint8Array(c);
    return Object.setPrototypeOf(e, s.prototype), e;
  }
  function s(c, e, t) {
    if (typeof c == "number") {
      if (typeof e == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return D(c);
    }
    return m(c, e, t);
  }
  s.poolSize = 8192;
  function m(c, e, t) {
    if (typeof c == "string")
      return g(c, e);
    if (ArrayBuffer.isView(c))
      return F(c);
    if (c == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof c
      );
    if (x0(c, ArrayBuffer) || c && x0(c.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (x0(c, SharedArrayBuffer) || c && x0(c.buffer, SharedArrayBuffer)))
      return R(c, e, t);
    if (typeof c == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const B = c.valueOf && c.valueOf();
    if (B != null && B !== c)
      return s.from(B, e, t);
    const T = _(c);
    if (T) return T;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof c[Symbol.toPrimitive] == "function")
      return s.from(c[Symbol.toPrimitive]("string"), e, t);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof c
    );
  }
  s.from = function(c, e, t) {
    return m(c, e, t);
  }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array);
  function h(c) {
    if (typeof c != "number")
      throw new TypeError('"size" argument must be of type number');
    if (c < 0)
      throw new RangeError('The value "' + c + '" is invalid for option "size"');
  }
  function p(c, e, t) {
    return h(c), c <= 0 ? b(c) : e !== void 0 ? typeof t == "string" ? b(c).fill(e, t) : b(c).fill(e) : b(c);
  }
  s.alloc = function(c, e, t) {
    return p(c, e, t);
  };
  function D(c) {
    return h(c), b(c < 0 ? 0 : H(c) | 0);
  }
  s.allocUnsafe = function(c) {
    return D(c);
  }, s.allocUnsafeSlow = function(c) {
    return D(c);
  };
  function g(c, e) {
    if ((typeof e != "string" || e === "") && (e = "utf8"), !s.isEncoding(e))
      throw new TypeError("Unknown encoding: " + e);
    const t = C(c, e) | 0;
    let B = b(t);
    const T = B.write(c, e);
    return T !== t && (B = B.slice(0, T)), B;
  }
  function w(c) {
    const e = c.length < 0 ? 0 : H(c.length) | 0, t = b(e);
    for (let B = 0; B < e; B += 1)
      t[B] = c[B] & 255;
    return t;
  }
  function F(c) {
    if (x0(c, Uint8Array)) {
      const e = new Uint8Array(c);
      return R(e.buffer, e.byteOffset, e.byteLength);
    }
    return w(c);
  }
  function R(c, e, t) {
    if (e < 0 || c.byteLength < e)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (c.byteLength < e + (t || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let B;
    return e === void 0 && t === void 0 ? B = new Uint8Array(c) : t === void 0 ? B = new Uint8Array(c, e) : B = new Uint8Array(c, e, t), Object.setPrototypeOf(B, s.prototype), B;
  }
  function _(c) {
    if (s.isBuffer(c)) {
      const e = H(c.length) | 0, t = b(e);
      return t.length === 0 || c.copy(t, 0, 0, e), t;
    }
    if (c.length !== void 0)
      return typeof c.length != "number" || m0(c.length) ? b(0) : w(c);
    if (c.type === "Buffer" && Array.isArray(c.data))
      return w(c.data);
  }
  function H(c) {
    if (c >= f)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + f.toString(16) + " bytes");
    return c | 0;
  }
  function l(c) {
    return +c != c && (c = 0), s.alloc(+c);
  }
  s.isBuffer = function(e) {
    return e != null && e._isBuffer === !0 && e !== s.prototype;
  }, s.compare = function(e, t) {
    if (x0(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), x0(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (e === t) return 0;
    let B = e.length, T = t.length;
    for (let z = 0, j = Math.min(B, T); z < j; ++z)
      if (e[z] !== t[z]) {
        B = e[z], T = t[z];
        break;
      }
    return B < T ? -1 : T < B ? 1 : 0;
  }, s.isEncoding = function(e) {
    switch (String(e).toLowerCase()) {
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
  }, s.concat = function(e, t) {
    if (!Array.isArray(e))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (e.length === 0)
      return s.alloc(0);
    let B;
    if (t === void 0)
      for (t = 0, B = 0; B < e.length; ++B)
        t += e[B].length;
    const T = s.allocUnsafe(t);
    let z = 0;
    for (B = 0; B < e.length; ++B) {
      let j = e[B];
      if (x0(j, Uint8Array))
        z + j.length > T.length ? (s.isBuffer(j) || (j = s.from(j)), j.copy(T, z)) : Uint8Array.prototype.set.call(
          T,
          j,
          z
        );
      else if (s.isBuffer(j))
        j.copy(T, z);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      z += j.length;
    }
    return T;
  };
  function C(c, e) {
    if (s.isBuffer(c))
      return c.length;
    if (ArrayBuffer.isView(c) || x0(c, ArrayBuffer))
      return c.byteLength;
    if (typeof c != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof c
      );
    const t = c.length, B = arguments.length > 2 && arguments[2] === !0;
    if (!B && t === 0) return 0;
    let T = !1;
    for (; ; )
      switch (e) {
        case "ascii":
        case "latin1":
        case "binary":
          return t;
        case "utf8":
        case "utf-8":
          return G0(c).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return t * 2;
        case "hex":
          return t >>> 1;
        case "base64":
          return K0(c).length;
        default:
          if (T)
            return B ? -1 : G0(c).length;
          e = ("" + e).toLowerCase(), T = !0;
      }
  }
  s.byteLength = C;
  function S(c, e, t) {
    let B = !1;
    if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, e >>>= 0, t <= e))
      return "";
    for (c || (c = "utf8"); ; )
      switch (c) {
        case "hex":
          return W(this, e, t);
        case "utf8":
        case "utf-8":
          return k(this, e, t);
        case "ascii":
          return U(this, e, t);
        case "latin1":
        case "binary":
          return P(this, e, t);
        case "base64":
          return E(this, e, t);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Q(this, e, t);
        default:
          if (B) throw new TypeError("Unknown encoding: " + c);
          c = (c + "").toLowerCase(), B = !0;
      }
  }
  s.prototype._isBuffer = !0;
  function L(c, e, t) {
    const B = c[e];
    c[e] = c[t], c[t] = B;
  }
  s.prototype.swap16 = function() {
    const e = this.length;
    if (e % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let t = 0; t < e; t += 2)
      L(this, t, t + 1);
    return this;
  }, s.prototype.swap32 = function() {
    const e = this.length;
    if (e % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let t = 0; t < e; t += 4)
      L(this, t, t + 3), L(this, t + 1, t + 2);
    return this;
  }, s.prototype.swap64 = function() {
    const e = this.length;
    if (e % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let t = 0; t < e; t += 8)
      L(this, t, t + 7), L(this, t + 1, t + 6), L(this, t + 2, t + 5), L(this, t + 3, t + 4);
    return this;
  }, s.prototype.toString = function() {
    const e = this.length;
    return e === 0 ? "" : arguments.length === 0 ? k(this, 0, e) : S.apply(this, arguments);
  }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
    if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
    return this === e ? !0 : s.compare(this, e) === 0;
  }, s.prototype.inspect = function() {
    let e = "";
    const t = u.INSPECT_MAX_BYTES;
    return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">";
  }, i && (s.prototype[i] = s.prototype.inspect), s.prototype.compare = function(e, t, B, T, z) {
    if (x0(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e
      );
    if (t === void 0 && (t = 0), B === void 0 && (B = e ? e.length : 0), T === void 0 && (T = 0), z === void 0 && (z = this.length), t < 0 || B > e.length || T < 0 || z > this.length)
      throw new RangeError("out of range index");
    if (T >= z && t >= B)
      return 0;
    if (T >= z)
      return -1;
    if (t >= B)
      return 1;
    if (t >>>= 0, B >>>= 0, T >>>= 0, z >>>= 0, this === e) return 0;
    let j = z - T, J = B - t;
    const s0 = Math.min(j, J), a0 = this.slice(T, z), c0 = e.slice(t, B);
    for (let i0 = 0; i0 < s0; ++i0)
      if (a0[i0] !== c0[i0]) {
        j = a0[i0], J = c0[i0];
        break;
      }
    return j < J ? -1 : J < j ? 1 : 0;
  };
  function N(c, e, t, B, T) {
    if (c.length === 0) return -1;
    if (typeof t == "string" ? (B = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, m0(t) && (t = T ? 0 : c.length - 1), t < 0 && (t = c.length + t), t >= c.length) {
      if (T) return -1;
      t = c.length - 1;
    } else if (t < 0)
      if (T) t = 0;
      else return -1;
    if (typeof e == "string" && (e = s.from(e, B)), s.isBuffer(e))
      return e.length === 0 ? -1 : q(c, e, t, B, T);
    if (typeof e == "number")
      return e = e & 255, typeof Uint8Array.prototype.indexOf == "function" ? T ? Uint8Array.prototype.indexOf.call(c, e, t) : Uint8Array.prototype.lastIndexOf.call(c, e, t) : q(c, [e], t, B, T);
    throw new TypeError("val must be string, number or Buffer");
  }
  function q(c, e, t, B, T) {
    let z = 1, j = c.length, J = e.length;
    if (B !== void 0 && (B = String(B).toLowerCase(), B === "ucs2" || B === "ucs-2" || B === "utf16le" || B === "utf-16le")) {
      if (c.length < 2 || e.length < 2)
        return -1;
      z = 2, j /= 2, J /= 2, t /= 2;
    }
    function s0(c0, i0) {
      return z === 1 ? c0[i0] : c0.readUInt16BE(i0 * z);
    }
    let a0;
    if (T) {
      let c0 = -1;
      for (a0 = t; a0 < j; a0++)
        if (s0(c, a0) === s0(e, c0 === -1 ? 0 : a0 - c0)) {
          if (c0 === -1 && (c0 = a0), a0 - c0 + 1 === J) return c0 * z;
        } else
          c0 !== -1 && (a0 -= a0 - c0), c0 = -1;
    } else
      for (t + J > j && (t = j - J), a0 = t; a0 >= 0; a0--) {
        let c0 = !0;
        for (let i0 = 0; i0 < J; i0++)
          if (s0(c, a0 + i0) !== s0(e, i0)) {
            c0 = !1;
            break;
          }
        if (c0) return a0;
      }
    return -1;
  }
  s.prototype.includes = function(e, t, B) {
    return this.indexOf(e, t, B) !== -1;
  }, s.prototype.indexOf = function(e, t, B) {
    return N(this, e, t, B, !0);
  }, s.prototype.lastIndexOf = function(e, t, B) {
    return N(this, e, t, B, !1);
  };
  function n(c, e, t, B) {
    t = Number(t) || 0;
    const T = c.length - t;
    B ? (B = Number(B), B > T && (B = T)) : B = T;
    const z = e.length;
    B > z / 2 && (B = z / 2);
    let j;
    for (j = 0; j < B; ++j) {
      const J = parseInt(e.substr(j * 2, 2), 16);
      if (m0(J)) return j;
      c[t + j] = J;
    }
    return j;
  }
  function x(c, e, t, B) {
    return v0(G0(e, c.length - t), c, t, B);
  }
  function a(c, e, t, B) {
    return v0(J0(e), c, t, B);
  }
  function d(c, e, t, B) {
    return v0(K0(e), c, t, B);
  }
  function v(c, e, t, B) {
    return v0(ue(e, c.length - t), c, t, B);
  }
  s.prototype.write = function(e, t, B, T) {
    if (t === void 0)
      T = "utf8", B = this.length, t = 0;
    else if (B === void 0 && typeof t == "string")
      T = t, B = this.length, t = 0;
    else if (isFinite(t))
      t = t >>> 0, isFinite(B) ? (B = B >>> 0, T === void 0 && (T = "utf8")) : (T = B, B = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const z = this.length - t;
    if ((B === void 0 || B > z) && (B = z), e.length > 0 && (B < 0 || t < 0) || t > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    T || (T = "utf8");
    let j = !1;
    for (; ; )
      switch (T) {
        case "hex":
          return n(this, e, t, B);
        case "utf8":
        case "utf-8":
          return x(this, e, t, B);
        case "ascii":
        case "latin1":
        case "binary":
          return a(this, e, t, B);
        case "base64":
          return d(this, e, t, B);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return v(this, e, t, B);
        default:
          if (j) throw new TypeError("Unknown encoding: " + T);
          T = ("" + T).toLowerCase(), j = !0;
      }
  }, s.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function E(c, e, t) {
    return e === 0 && t === c.length ? r.fromByteArray(c) : r.fromByteArray(c.slice(e, t));
  }
  function k(c, e, t) {
    t = Math.min(c.length, t);
    const B = [];
    let T = e;
    for (; T < t; ) {
      const z = c[T];
      let j = null, J = z > 239 ? 4 : z > 223 ? 3 : z > 191 ? 2 : 1;
      if (T + J <= t) {
        let s0, a0, c0, i0;
        switch (J) {
          case 1:
            z < 128 && (j = z);
            break;
          case 2:
            s0 = c[T + 1], (s0 & 192) === 128 && (i0 = (z & 31) << 6 | s0 & 63, i0 > 127 && (j = i0));
            break;
          case 3:
            s0 = c[T + 1], a0 = c[T + 2], (s0 & 192) === 128 && (a0 & 192) === 128 && (i0 = (z & 15) << 12 | (s0 & 63) << 6 | a0 & 63, i0 > 2047 && (i0 < 55296 || i0 > 57343) && (j = i0));
            break;
          case 4:
            s0 = c[T + 1], a0 = c[T + 2], c0 = c[T + 3], (s0 & 192) === 128 && (a0 & 192) === 128 && (c0 & 192) === 128 && (i0 = (z & 15) << 18 | (s0 & 63) << 12 | (a0 & 63) << 6 | c0 & 63, i0 > 65535 && i0 < 1114112 && (j = i0));
        }
      }
      j === null ? (j = 65533, J = 1) : j > 65535 && (j -= 65536, B.push(j >>> 10 & 1023 | 55296), j = 56320 | j & 1023), B.push(j), T += J;
    }
    return I(B);
  }
  const y = 4096;
  function I(c) {
    const e = c.length;
    if (e <= y)
      return String.fromCharCode.apply(String, c);
    let t = "", B = 0;
    for (; B < e; )
      t += String.fromCharCode.apply(
        String,
        c.slice(B, B += y)
      );
    return t;
  }
  function U(c, e, t) {
    let B = "";
    t = Math.min(c.length, t);
    for (let T = e; T < t; ++T)
      B += String.fromCharCode(c[T] & 127);
    return B;
  }
  function P(c, e, t) {
    let B = "";
    t = Math.min(c.length, t);
    for (let T = e; T < t; ++T)
      B += String.fromCharCode(c[T]);
    return B;
  }
  function W(c, e, t) {
    const B = c.length;
    (!e || e < 0) && (e = 0), (!t || t < 0 || t > B) && (t = B);
    let T = "";
    for (let z = e; z < t; ++z)
      T += ne[c[z]];
    return T;
  }
  function Q(c, e, t) {
    const B = c.slice(e, t);
    let T = "";
    for (let z = 0; z < B.length - 1; z += 2)
      T += String.fromCharCode(B[z] + B[z + 1] * 256);
    return T;
  }
  s.prototype.slice = function(e, t) {
    const B = this.length;
    e = ~~e, t = t === void 0 ? B : ~~t, e < 0 ? (e += B, e < 0 && (e = 0)) : e > B && (e = B), t < 0 ? (t += B, t < 0 && (t = 0)) : t > B && (t = B), t < e && (t = e);
    const T = this.subarray(e, t);
    return Object.setPrototypeOf(T, s.prototype), T;
  };
  function O(c, e, t) {
    if (c % 1 !== 0 || c < 0) throw new RangeError("offset is not uint");
    if (c + e > t) throw new RangeError("Trying to access beyond buffer length");
  }
  s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, B) {
    e = e >>> 0, t = t >>> 0, B || O(e, t, this.length);
    let T = this[e], z = 1, j = 0;
    for (; ++j < t && (z *= 256); )
      T += this[e + j] * z;
    return T;
  }, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, B) {
    e = e >>> 0, t = t >>> 0, B || O(e, t, this.length);
    let T = this[e + --t], z = 1;
    for (; t > 0 && (z *= 256); )
      T += this[e + --t] * z;
    return T;
  }, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
    return e = e >>> 0, t || O(e, 1, this.length), this[e];
  }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
    return e = e >>> 0, t || O(e, 2, this.length), this[e] | this[e + 1] << 8;
  }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
    return e = e >>> 0, t || O(e, 2, this.length), this[e] << 8 | this[e + 1];
  }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
    return e = e >>> 0, t || O(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
  }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
    return e = e >>> 0, t || O(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
  }, s.prototype.readBigUInt64LE = T0(function(e) {
    e = e >>> 0, n0(e, "offset");
    const t = this[e], B = this[e + 7];
    (t === void 0 || B === void 0) && e0(e, this.length - 8);
    const T = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, z = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + B * 2 ** 24;
    return BigInt(T) + (BigInt(z) << BigInt(32));
  }), s.prototype.readBigUInt64BE = T0(function(e) {
    e = e >>> 0, n0(e, "offset");
    const t = this[e], B = this[e + 7];
    (t === void 0 || B === void 0) && e0(e, this.length - 8);
    const T = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], z = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + B;
    return (BigInt(T) << BigInt(32)) + BigInt(z);
  }), s.prototype.readIntLE = function(e, t, B) {
    e = e >>> 0, t = t >>> 0, B || O(e, t, this.length);
    let T = this[e], z = 1, j = 0;
    for (; ++j < t && (z *= 256); )
      T += this[e + j] * z;
    return z *= 128, T >= z && (T -= Math.pow(2, 8 * t)), T;
  }, s.prototype.readIntBE = function(e, t, B) {
    e = e >>> 0, t = t >>> 0, B || O(e, t, this.length);
    let T = t, z = 1, j = this[e + --T];
    for (; T > 0 && (z *= 256); )
      j += this[e + --T] * z;
    return z *= 128, j >= z && (j -= Math.pow(2, 8 * t)), j;
  }, s.prototype.readInt8 = function(e, t) {
    return e = e >>> 0, t || O(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
  }, s.prototype.readInt16LE = function(e, t) {
    e = e >>> 0, t || O(e, 2, this.length);
    const B = this[e] | this[e + 1] << 8;
    return B & 32768 ? B | 4294901760 : B;
  }, s.prototype.readInt16BE = function(e, t) {
    e = e >>> 0, t || O(e, 2, this.length);
    const B = this[e + 1] | this[e] << 8;
    return B & 32768 ? B | 4294901760 : B;
  }, s.prototype.readInt32LE = function(e, t) {
    return e = e >>> 0, t || O(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
  }, s.prototype.readInt32BE = function(e, t) {
    return e = e >>> 0, t || O(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
  }, s.prototype.readBigInt64LE = T0(function(e) {
    e = e >>> 0, n0(e, "offset");
    const t = this[e], B = this[e + 7];
    (t === void 0 || B === void 0) && e0(e, this.length - 8);
    const T = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (B << 24);
    return (BigInt(T) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
  }), s.prototype.readBigInt64BE = T0(function(e) {
    e = e >>> 0, n0(e, "offset");
    const t = this[e], B = this[e + 7];
    (t === void 0 || B === void 0) && e0(e, this.length - 8);
    const T = (t << 24) + // Overflow
    this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
    return (BigInt(T) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + B);
  }), s.prototype.readFloatLE = function(e, t) {
    return e = e >>> 0, t || O(e, 4, this.length), o.read(this, e, !0, 23, 4);
  }, s.prototype.readFloatBE = function(e, t) {
    return e = e >>> 0, t || O(e, 4, this.length), o.read(this, e, !1, 23, 4);
  }, s.prototype.readDoubleLE = function(e, t) {
    return e = e >>> 0, t || O(e, 8, this.length), o.read(this, e, !0, 52, 8);
  }, s.prototype.readDoubleBE = function(e, t) {
    return e = e >>> 0, t || O(e, 8, this.length), o.read(this, e, !1, 52, 8);
  };
  function M(c, e, t, B, T, z) {
    if (!s.isBuffer(c)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (e > T || e < z) throw new RangeError('"value" argument is out of bounds');
    if (t + B > c.length) throw new RangeError("Index out of range");
  }
  s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, B, T) {
    if (e = +e, t = t >>> 0, B = B >>> 0, !T) {
      const J = Math.pow(2, 8 * B) - 1;
      M(this, e, t, B, J, 0);
    }
    let z = 1, j = 0;
    for (this[t] = e & 255; ++j < B && (z *= 256); )
      this[t + j] = e / z & 255;
    return t + B;
  }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, B, T) {
    if (e = +e, t = t >>> 0, B = B >>> 0, !T) {
      const J = Math.pow(2, 8 * B) - 1;
      M(this, e, t, B, J, 0);
    }
    let z = B - 1, j = 1;
    for (this[t + z] = e & 255; --z >= 0 && (j *= 256); )
      this[t + z] = e / j & 255;
    return t + B;
  }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, B) {
    return e = +e, t = t >>> 0, B || M(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
  }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, B) {
    return e = +e, t = t >>> 0, B || M(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
  }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, B) {
    return e = +e, t = t >>> 0, B || M(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
  }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, B) {
    return e = +e, t = t >>> 0, B || M(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
  }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, B) {
    return e = +e, t = t >>> 0, B || M(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
  };
  function K(c, e, t, B, T) {
    g0(e, B, T, c, t, 7);
    let z = Number(e & BigInt(4294967295));
    c[t++] = z, z = z >> 8, c[t++] = z, z = z >> 8, c[t++] = z, z = z >> 8, c[t++] = z;
    let j = Number(e >> BigInt(32) & BigInt(4294967295));
    return c[t++] = j, j = j >> 8, c[t++] = j, j = j >> 8, c[t++] = j, j = j >> 8, c[t++] = j, t;
  }
  function G(c, e, t, B, T) {
    g0(e, B, T, c, t, 7);
    let z = Number(e & BigInt(4294967295));
    c[t + 7] = z, z = z >> 8, c[t + 6] = z, z = z >> 8, c[t + 5] = z, z = z >> 8, c[t + 4] = z;
    let j = Number(e >> BigInt(32) & BigInt(4294967295));
    return c[t + 3] = j, j = j >> 8, c[t + 2] = j, j = j >> 8, c[t + 1] = j, j = j >> 8, c[t] = j, t + 8;
  }
  s.prototype.writeBigUInt64LE = T0(function(e, t = 0) {
    return K(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeBigUInt64BE = T0(function(e, t = 0) {
    return G(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeIntLE = function(e, t, B, T) {
    if (e = +e, t = t >>> 0, !T) {
      const s0 = Math.pow(2, 8 * B - 1);
      M(this, e, t, B, s0 - 1, -s0);
    }
    let z = 0, j = 1, J = 0;
    for (this[t] = e & 255; ++z < B && (j *= 256); )
      e < 0 && J === 0 && this[t + z - 1] !== 0 && (J = 1), this[t + z] = (e / j >> 0) - J & 255;
    return t + B;
  }, s.prototype.writeIntBE = function(e, t, B, T) {
    if (e = +e, t = t >>> 0, !T) {
      const s0 = Math.pow(2, 8 * B - 1);
      M(this, e, t, B, s0 - 1, -s0);
    }
    let z = B - 1, j = 1, J = 0;
    for (this[t + z] = e & 255; --z >= 0 && (j *= 256); )
      e < 0 && J === 0 && this[t + z + 1] !== 0 && (J = 1), this[t + z] = (e / j >> 0) - J & 255;
    return t + B;
  }, s.prototype.writeInt8 = function(e, t, B) {
    return e = +e, t = t >>> 0, B || M(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
  }, s.prototype.writeInt16LE = function(e, t, B) {
    return e = +e, t = t >>> 0, B || M(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
  }, s.prototype.writeInt16BE = function(e, t, B) {
    return e = +e, t = t >>> 0, B || M(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
  }, s.prototype.writeInt32LE = function(e, t, B) {
    return e = +e, t = t >>> 0, B || M(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
  }, s.prototype.writeInt32BE = function(e, t, B) {
    return e = +e, t = t >>> 0, B || M(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
  }, s.prototype.writeBigInt64LE = T0(function(e, t = 0) {
    return K(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), s.prototype.writeBigInt64BE = T0(function(e, t = 0) {
    return G(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function X(c, e, t, B, T, z) {
    if (t + B > c.length) throw new RangeError("Index out of range");
    if (t < 0) throw new RangeError("Index out of range");
  }
  function V(c, e, t, B, T) {
    return e = +e, t = t >>> 0, T || X(c, e, t, 4), o.write(c, e, t, B, 23, 4), t + 4;
  }
  s.prototype.writeFloatLE = function(e, t, B) {
    return V(this, e, t, !0, B);
  }, s.prototype.writeFloatBE = function(e, t, B) {
    return V(this, e, t, !1, B);
  };
  function r0(c, e, t, B, T) {
    return e = +e, t = t >>> 0, T || X(c, e, t, 8), o.write(c, e, t, B, 52, 8), t + 8;
  }
  s.prototype.writeDoubleLE = function(e, t, B) {
    return r0(this, e, t, !0, B);
  }, s.prototype.writeDoubleBE = function(e, t, B) {
    return r0(this, e, t, !1, B);
  }, s.prototype.copy = function(e, t, B, T) {
    if (!s.isBuffer(e)) throw new TypeError("argument should be a Buffer");
    if (B || (B = 0), !T && T !== 0 && (T = this.length), t >= e.length && (t = e.length), t || (t = 0), T > 0 && T < B && (T = B), T === B || e.length === 0 || this.length === 0) return 0;
    if (t < 0)
      throw new RangeError("targetStart out of bounds");
    if (B < 0 || B >= this.length) throw new RangeError("Index out of range");
    if (T < 0) throw new RangeError("sourceEnd out of bounds");
    T > this.length && (T = this.length), e.length - t < T - B && (T = e.length - t + B);
    const z = T - B;
    return this === e && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, B, T) : Uint8Array.prototype.set.call(
      e,
      this.subarray(B, T),
      t
    ), z;
  }, s.prototype.fill = function(e, t, B, T) {
    if (typeof e == "string") {
      if (typeof t == "string" ? (T = t, t = 0, B = this.length) : typeof B == "string" && (T = B, B = this.length), T !== void 0 && typeof T != "string")
        throw new TypeError("encoding must be a string");
      if (typeof T == "string" && !s.isEncoding(T))
        throw new TypeError("Unknown encoding: " + T);
      if (e.length === 1) {
        const j = e.charCodeAt(0);
        (T === "utf8" && j < 128 || T === "latin1") && (e = j);
      }
    } else typeof e == "number" ? e = e & 255 : typeof e == "boolean" && (e = Number(e));
    if (t < 0 || this.length < t || this.length < B)
      throw new RangeError("Out of range index");
    if (B <= t)
      return this;
    t = t >>> 0, B = B === void 0 ? this.length : B >>> 0, e || (e = 0);
    let z;
    if (typeof e == "number")
      for (z = t; z < B; ++z)
        this[z] = e;
    else {
      const j = s.isBuffer(e) ? e : s.from(e, T), J = j.length;
      if (J === 0)
        throw new TypeError('The value "' + e + '" is invalid for argument "value"');
      for (z = 0; z < B - t; ++z)
        this[z + t] = j[z % J];
    }
    return this;
  };
  const Y = {};
  function w0(c, e, t) {
    Y[c] = class extends t {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: e.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${c}]`, this.stack, delete this.name;
      }
      get code() {
        return c;
      }
      set code(T) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: T,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${c}]: ${this.message}`;
      }
    };
  }
  w0(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(c) {
      return c ? `${c} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), w0(
    "ERR_INVALID_ARG_TYPE",
    function(c, e) {
      return `The "${c}" argument must be of type number. Received type ${typeof e}`;
    },
    TypeError
  ), w0(
    "ERR_OUT_OF_RANGE",
    function(c, e, t) {
      let B = `The value of "${c}" is out of range.`, T = t;
      return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? T = F0(String(t)) : typeof t == "bigint" && (T = String(t), (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (T = F0(T)), T += "n"), B += ` It must be ${e}. Received ${T}`, B;
    },
    RangeError
  );
  function F0(c) {
    let e = "", t = c.length;
    const B = c[0] === "-" ? 1 : 0;
    for (; t >= B + 4; t -= 3)
      e = `_${c.slice(t - 3, t)}${e}`;
    return `${c.slice(0, t)}${e}`;
  }
  function p0(c, e, t) {
    n0(e, "offset"), (c[e] === void 0 || c[e + t] === void 0) && e0(e, c.length - (t + 1));
  }
  function g0(c, e, t, B, T, z) {
    if (c > t || c < e) {
      const j = typeof e == "bigint" ? "n" : "";
      let J;
      throw e === 0 || e === BigInt(0) ? J = `>= 0${j} and < 2${j} ** ${(z + 1) * 8}${j}` : J = `>= -(2${j} ** ${(z + 1) * 8 - 1}${j}) and < 2 ** ${(z + 1) * 8 - 1}${j}`, new Y.ERR_OUT_OF_RANGE("value", J, c);
    }
    p0(B, T, z);
  }
  function n0(c, e) {
    if (typeof c != "number")
      throw new Y.ERR_INVALID_ARG_TYPE(e, "number", c);
  }
  function e0(c, e, t) {
    throw Math.floor(c) !== c ? (n0(c, t), new Y.ERR_OUT_OF_RANGE("offset", "an integer", c)) : e < 0 ? new Y.ERR_BUFFER_OUT_OF_BOUNDS() : new Y.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${e}`,
      c
    );
  }
  const o0 = /[^+/0-9A-Za-z-_]/g;
  function Z0(c) {
    if (c = c.split("=")[0], c = c.trim().replace(o0, ""), c.length < 2) return "";
    for (; c.length % 4 !== 0; )
      c = c + "=";
    return c;
  }
  function G0(c, e) {
    e = e || 1 / 0;
    let t;
    const B = c.length;
    let T = null;
    const z = [];
    for (let j = 0; j < B; ++j) {
      if (t = c.charCodeAt(j), t > 55295 && t < 57344) {
        if (!T) {
          if (t > 56319) {
            (e -= 3) > -1 && z.push(239, 191, 189);
            continue;
          } else if (j + 1 === B) {
            (e -= 3) > -1 && z.push(239, 191, 189);
            continue;
          }
          T = t;
          continue;
        }
        if (t < 56320) {
          (e -= 3) > -1 && z.push(239, 191, 189), T = t;
          continue;
        }
        t = (T - 55296 << 10 | t - 56320) + 65536;
      } else T && (e -= 3) > -1 && z.push(239, 191, 189);
      if (T = null, t < 128) {
        if ((e -= 1) < 0) break;
        z.push(t);
      } else if (t < 2048) {
        if ((e -= 2) < 0) break;
        z.push(
          t >> 6 | 192,
          t & 63 | 128
        );
      } else if (t < 65536) {
        if ((e -= 3) < 0) break;
        z.push(
          t >> 12 | 224,
          t >> 6 & 63 | 128,
          t & 63 | 128
        );
      } else if (t < 1114112) {
        if ((e -= 4) < 0) break;
        z.push(
          t >> 18 | 240,
          t >> 12 & 63 | 128,
          t >> 6 & 63 | 128,
          t & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return z;
  }
  function J0(c) {
    const e = [];
    for (let t = 0; t < c.length; ++t)
      e.push(c.charCodeAt(t) & 255);
    return e;
  }
  function ue(c, e) {
    let t, B, T;
    const z = [];
    for (let j = 0; j < c.length && !((e -= 2) < 0); ++j)
      t = c.charCodeAt(j), B = t >> 8, T = t % 256, z.push(T), z.push(B);
    return z;
  }
  function K0(c) {
    return r.toByteArray(Z0(c));
  }
  function v0(c, e, t, B) {
    let T;
    for (T = 0; T < B && !(T + t >= e.length || T >= c.length); ++T)
      e[T + t] = c[T];
    return T;
  }
  function x0(c, e) {
    return c instanceof e || c != null && c.constructor != null && c.constructor.name != null && c.constructor.name === e.name;
  }
  function m0(c) {
    return c !== c;
  }
  const ne = function() {
    const c = "0123456789abcdef", e = new Array(256);
    for (let t = 0; t < 16; ++t) {
      const B = t * 16;
      for (let T = 0; T < 16; ++T)
        e[B + T] = c[t] + c[T];
    }
    return e;
  }();
  function T0(c) {
    return typeof BigInt > "u" ? j0 : c;
  }
  function j0() {
    throw new Error("BigInt not supported");
  }
})(Ee);
var br = { exports: {} };
function Bn(u) {
  throw new Error('Could not dynamically require "' + u + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Pe = { exports: {} };
const En = {}, gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: En
}, Symbol.toStringTag, { value: "Module" })), An = /* @__PURE__ */ cn(gn);
var Ht;
function t0() {
  return Ht || (Ht = 1, function(u, r) {
    (function(o, i) {
      u.exports = i();
    })($, function() {
      var o = o || function(i, f) {
        var A;
        if (typeof window < "u" && window.crypto && (A = window.crypto), typeof self < "u" && self.crypto && (A = self.crypto), typeof globalThis < "u" && globalThis.crypto && (A = globalThis.crypto), !A && typeof window < "u" && window.msCrypto && (A = window.msCrypto), !A && typeof globalThis < "u" && globalThis.crypto && (A = globalThis.crypto), !A && typeof Bn == "function")
          try {
            A = An;
          } catch {
          }
        var b = function() {
          if (A) {
            if (typeof A.getRandomValues == "function")
              try {
                return A.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof A.randomBytes == "function")
              try {
                return A.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, s = Object.create || /* @__PURE__ */ function() {
          function l() {
          }
          return function(C) {
            var S;
            return l.prototype = C, S = new l(), l.prototype = null, S;
          };
        }(), m = {}, h = m.lib = {}, p = h.Base = /* @__PURE__ */ function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(l) {
              var C = s(this);
              return l && C.mixIn(l), (!C.hasOwnProperty("init") || this.init === C.init) && (C.init = function() {
                C.$super.init.apply(this, arguments);
              }), C.init.prototype = C, C.$super = this, C;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var l = this.extend();
              return l.init.apply(l, arguments), l;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(l) {
              for (var C in l)
                l.hasOwnProperty(C) && (this[C] = l[C]);
              l.hasOwnProperty("toString") && (this.toString = l.toString);
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }(), D = h.WordArray = p.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(l, C) {
            l = this.words = l || [], C != f ? this.sigBytes = C : this.sigBytes = l.length * 4;
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(l) {
            return (l || w).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(l) {
            var C = this.words, S = l.words, L = this.sigBytes, N = l.sigBytes;
            if (this.clamp(), L % 4)
              for (var q = 0; q < N; q++) {
                var n = S[q >>> 2] >>> 24 - q % 4 * 8 & 255;
                C[L + q >>> 2] |= n << 24 - (L + q) % 4 * 8;
              }
            else
              for (var x = 0; x < N; x += 4)
                C[L + x >>> 2] = S[x >>> 2];
            return this.sigBytes += N, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var l = this.words, C = this.sigBytes;
            l[C >>> 2] &= 4294967295 << 32 - C % 4 * 8, l.length = i.ceil(C / 4);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function() {
            var l = p.clone.call(this);
            return l.words = this.words.slice(0), l;
          },
          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function(l) {
            for (var C = [], S = 0; S < l; S += 4)
              C.push(b());
            return new D.init(C, l);
          }
        }), g = m.enc = {}, w = g.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function(l) {
            for (var C = l.words, S = l.sigBytes, L = [], N = 0; N < S; N++) {
              var q = C[N >>> 2] >>> 24 - N % 4 * 8 & 255;
              L.push((q >>> 4).toString(16)), L.push((q & 15).toString(16));
            }
            return L.join("");
          },
          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function(l) {
            for (var C = l.length, S = [], L = 0; L < C; L += 2)
              S[L >>> 3] |= parseInt(l.substr(L, 2), 16) << 24 - L % 8 * 4;
            return new D.init(S, C / 2);
          }
        }, F = g.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function(l) {
            for (var C = l.words, S = l.sigBytes, L = [], N = 0; N < S; N++) {
              var q = C[N >>> 2] >>> 24 - N % 4 * 8 & 255;
              L.push(String.fromCharCode(q));
            }
            return L.join("");
          },
          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function(l) {
            for (var C = l.length, S = [], L = 0; L < C; L++)
              S[L >>> 2] |= (l.charCodeAt(L) & 255) << 24 - L % 4 * 8;
            return new D.init(S, C);
          }
        }, R = g.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function(l) {
            try {
              return decodeURIComponent(escape(F.stringify(l)));
            } catch {
              throw new Error("Malformed UTF-8 data");
            }
          },
          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function(l) {
            return F.parse(unescape(encodeURIComponent(l)));
          }
        }, _ = h.BufferedBlockAlgorithm = p.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new D.init(), this._nDataBytes = 0;
          },
          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function(l) {
            typeof l == "string" && (l = R.parse(l)), this._data.concat(l), this._nDataBytes += l.sigBytes;
          },
          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function(l) {
            var C, S = this._data, L = S.words, N = S.sigBytes, q = this.blockSize, n = q * 4, x = N / n;
            l ? x = i.ceil(x) : x = i.max((x | 0) - this._minBufferSize, 0);
            var a = x * q, d = i.min(a * 4, N);
            if (a) {
              for (var v = 0; v < a; v += q)
                this._doProcessBlock(L, v);
              C = L.splice(0, a), S.sigBytes -= d;
            }
            return new D.init(C, d);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function() {
            var l = p.clone.call(this);
            return l._data = this._data.clone(), l;
          },
          _minBufferSize: 0
        });
        h.Hasher = _.extend({
          /**
           * Configuration options.
           */
          cfg: p.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(l) {
            this.cfg = this.cfg.extend(l), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            _.reset.call(this), this._doReset();
          },
          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function(l) {
            return this._append(l), this._process(), this;
          },
          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function(l) {
            l && this._append(l);
            var C = this._doFinalize();
            return C;
          },
          blockSize: 16,
          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function(l) {
            return function(C, S) {
              return new l.init(S).finalize(C);
            };
          },
          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function(l) {
            return function(C, S) {
              return new H.HMAC.init(l, S).finalize(C);
            };
          }
        });
        var H = m.algo = {};
        return m;
      }(Math);
      return o;
    });
  }(Pe)), Pe.exports;
}
var Oe = { exports: {} }, Lt;
function Re() {
  return Lt || (Lt = 1, function(u, r) {
    (function(o, i) {
      u.exports = i(t0());
    })($, function(o) {
      return function(i) {
        var f = o, A = f.lib, b = A.Base, s = A.WordArray, m = f.x64 = {};
        m.Word = b.extend({
          /**
           * Initializes a newly created 64-bit word.
           *
           * @param {number} high The high 32 bits.
           * @param {number} low The low 32 bits.
           *
           * @example
           *
           *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
           */
          init: function(h, p) {
            this.high = h, this.low = p;
          }
          /**
           * Bitwise NOTs this word.
           *
           * @return {X64Word} A new x64-Word object after negating.
           *
           * @example
           *
           *     var negated = x64Word.not();
           */
          // not: function () {
          // var high = ~this.high;
          // var low = ~this.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ANDs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to AND with this word.
           *
           * @return {X64Word} A new x64-Word object after ANDing.
           *
           * @example
           *
           *     var anded = x64Word.and(anotherX64Word);
           */
          // and: function (word) {
          // var high = this.high & word.high;
          // var low = this.low & word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to OR with this word.
           *
           * @return {X64Word} A new x64-Word object after ORing.
           *
           * @example
           *
           *     var ored = x64Word.or(anotherX64Word);
           */
          // or: function (word) {
          // var high = this.high | word.high;
          // var low = this.low | word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise XORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to XOR with this word.
           *
           * @return {X64Word} A new x64-Word object after XORing.
           *
           * @example
           *
           *     var xored = x64Word.xor(anotherX64Word);
           */
          // xor: function (word) {
          // var high = this.high ^ word.high;
          // var low = this.low ^ word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the left.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftL(25);
           */
          // shiftL: function (n) {
          // if (n < 32) {
          // var high = (this.high << n) | (this.low >>> (32 - n));
          // var low = this.low << n;
          // } else {
          // var high = this.low << (n - 32);
          // var low = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the right.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftR(7);
           */
          // shiftR: function (n) {
          // if (n < 32) {
          // var low = (this.low >>> n) | (this.high << (32 - n));
          // var high = this.high >>> n;
          // } else {
          // var low = this.high >>> (n - 32);
          // var high = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Rotates this word n bits to the left.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotL(25);
           */
          // rotL: function (n) {
          // return this.shiftL(n).or(this.shiftR(64 - n));
          // },
          /**
           * Rotates this word n bits to the right.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotR(7);
           */
          // rotR: function (n) {
          // return this.shiftR(n).or(this.shiftL(64 - n));
          // },
          /**
           * Adds this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to add with this word.
           *
           * @return {X64Word} A new x64-Word object after adding.
           *
           * @example
           *
           *     var added = x64Word.add(anotherX64Word);
           */
          // add: function (word) {
          // var low = (this.low + word.low) | 0;
          // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
          // var high = (this.high + word.high + carry) | 0;
          // return X64Word.create(high, low);
          // }
        }), m.WordArray = b.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.x64.WordArray.create();
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ]);
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ], 10);
           */
          init: function(h, p) {
            h = this.words = h || [], p != i ? this.sigBytes = p : this.sigBytes = h.length * 8;
          },
          /**
           * Converts this 64-bit word array to a 32-bit word array.
           *
           * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
           *
           * @example
           *
           *     var x32WordArray = x64WordArray.toX32();
           */
          toX32: function() {
            for (var h = this.words, p = h.length, D = [], g = 0; g < p; g++) {
              var w = h[g];
              D.push(w.high), D.push(w.low);
            }
            return s.create(D, this.sigBytes);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {X64WordArray} The clone.
           *
           * @example
           *
           *     var clone = x64WordArray.clone();
           */
          clone: function() {
            for (var h = b.clone.call(this), p = h.words = this.words.slice(0), D = p.length, g = 0; g < D; g++)
              p[g] = p[g].clone();
            return h;
          }
        });
      }(), o;
    });
  }(Oe)), Oe.exports;
}
var Ue = { exports: {} }, qt;
function yn() {
  return qt || (qt = 1, function(u, r) {
    (function(o, i) {
      u.exports = i(t0());
    })($, function(o) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var i = o, f = i.lib, A = f.WordArray, b = A.init, s = A.init = function(m) {
            if (m instanceof ArrayBuffer && (m = new Uint8Array(m)), (m instanceof Int8Array || typeof Uint8ClampedArray < "u" && m instanceof Uint8ClampedArray || m instanceof Int16Array || m instanceof Uint16Array || m instanceof Int32Array || m instanceof Uint32Array || m instanceof Float32Array || m instanceof Float64Array) && (m = new Uint8Array(m.buffer, m.byteOffset, m.byteLength)), m instanceof Uint8Array) {
              for (var h = m.byteLength, p = [], D = 0; D < h; D++)
                p[D >>> 2] |= m[D] << 24 - D % 4 * 8;
              b.call(this, p, h);
            } else
              b.apply(this, arguments);
          };
          s.prototype = A;
        }
      }(), o.lib.WordArray;
    });
  }(Ue)), Ue.exports;
}
var Ne = { exports: {} }, zt;
function Cn() {
  return zt || (zt = 1, function(u, r) {
    (function(o, i) {
      u.exports = i(t0());
    })($, function(o) {
      return function() {
        var i = o, f = i.lib, A = f.WordArray, b = i.enc;
        b.Utf16 = b.Utf16BE = {
          /**
           * Converts a word array to a UTF-16 BE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 BE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
           */
          stringify: function(m) {
            for (var h = m.words, p = m.sigBytes, D = [], g = 0; g < p; g += 2) {
              var w = h[g >>> 2] >>> 16 - g % 4 * 8 & 65535;
              D.push(String.fromCharCode(w));
            }
            return D.join("");
          },
          /**
           * Converts a UTF-16 BE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 BE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
           */
          parse: function(m) {
            for (var h = m.length, p = [], D = 0; D < h; D++)
              p[D >>> 1] |= m.charCodeAt(D) << 16 - D % 2 * 16;
            return A.create(p, h * 2);
          }
        }, b.Utf16LE = {
          /**
           * Converts a word array to a UTF-16 LE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 LE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
           */
          stringify: function(m) {
            for (var h = m.words, p = m.sigBytes, D = [], g = 0; g < p; g += 2) {
              var w = s(h[g >>> 2] >>> 16 - g % 4 * 8 & 65535);
              D.push(String.fromCharCode(w));
            }
            return D.join("");
          },
          /**
           * Converts a UTF-16 LE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 LE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
           */
          parse: function(m) {
            for (var h = m.length, p = [], D = 0; D < h; D++)
              p[D >>> 1] |= s(m.charCodeAt(D) << 16 - D % 2 * 16);
            return A.create(p, h * 2);
          }
        };
        function s(m) {
          return m << 8 & 4278255360 | m >>> 8 & 16711935;
        }
      }(), o.enc.Utf16;
    });
  }(Ne)), Ne.exports;
}
var He = { exports: {} }, Mt;
function te() {
  return Mt || (Mt = 1, function(u, r) {
    (function(o, i) {
      u.exports = i(t0());
    })($, function(o) {
      return function() {
        var i = o, f = i.lib, A = f.WordArray, b = i.enc;
        b.Base64 = {
          /**
           * Converts a word array to a Base64 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Base64 string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
           */
          stringify: function(m) {
            var h = m.words, p = m.sigBytes, D = this._map;
            m.clamp();
            for (var g = [], w = 0; w < p; w += 3)
              for (var F = h[w >>> 2] >>> 24 - w % 4 * 8 & 255, R = h[w + 1 >>> 2] >>> 24 - (w + 1) % 4 * 8 & 255, _ = h[w + 2 >>> 2] >>> 24 - (w + 2) % 4 * 8 & 255, H = F << 16 | R << 8 | _, l = 0; l < 4 && w + l * 0.75 < p; l++)
                g.push(D.charAt(H >>> 6 * (3 - l) & 63));
            var C = D.charAt(64);
            if (C)
              for (; g.length % 4; )
                g.push(C);
            return g.join("");
          },
          /**
           * Converts a Base64 string to a word array.
           *
           * @param {string} base64Str The Base64 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
           */
          parse: function(m) {
            var h = m.length, p = this._map, D = this._reverseMap;
            if (!D) {
              D = this._reverseMap = [];
              for (var g = 0; g < p.length; g++)
                D[p.charCodeAt(g)] = g;
            }
            var w = p.charAt(64);
            if (w) {
              var F = m.indexOf(w);
              F !== -1 && (h = F);
            }
            return s(m, h, D);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function s(m, h, p) {
          for (var D = [], g = 0, w = 0; w < h; w++)
            if (w % 4) {
              var F = p[m.charCodeAt(w - 1)] << w % 4 * 2, R = p[m.charCodeAt(w)] >>> 6 - w % 4 * 2, _ = F | R;
              D[g >>> 2] |= _ << 24 - g % 4 * 8, g++;
            }
          return A.create(D, g);
        }
      }(), o.enc.Base64;
    });
  }(He)), He.exports;
}
var Le = { exports: {} }, Wt;
function wn() {
  return Wt || (Wt = 1, function(u, r) {
    (function(o, i) {
      u.exports = i(t0());
    })($, function(o) {
      return function() {
        var i = o, f = i.lib, A = f.WordArray, b = i.enc;
        b.Base64url = {
          /**
           * Converts a word array to a Base64url string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {string} The Base64url string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
           */
          stringify: function(m, h) {
            h === void 0 && (h = !0);
            var p = m.words, D = m.sigBytes, g = h ? this._safe_map : this._map;
            m.clamp();
            for (var w = [], F = 0; F < D; F += 3)
              for (var R = p[F >>> 2] >>> 24 - F % 4 * 8 & 255, _ = p[F + 1 >>> 2] >>> 24 - (F + 1) % 4 * 8 & 255, H = p[F + 2 >>> 2] >>> 24 - (F + 2) % 4 * 8 & 255, l = R << 16 | _ << 8 | H, C = 0; C < 4 && F + C * 0.75 < D; C++)
                w.push(g.charAt(l >>> 6 * (3 - C) & 63));
            var S = g.charAt(64);
            if (S)
              for (; w.length % 4; )
                w.push(S);
            return w.join("");
          },
          /**
           * Converts a Base64url string to a word array.
           *
           * @param {string} base64Str The Base64url string.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
           */
          parse: function(m, h) {
            h === void 0 && (h = !0);
            var p = m.length, D = h ? this._safe_map : this._map, g = this._reverseMap;
            if (!g) {
              g = this._reverseMap = [];
              for (var w = 0; w < D.length; w++)
                g[D.charCodeAt(w)] = w;
            }
            var F = D.charAt(64);
            if (F) {
              var R = m.indexOf(F);
              R !== -1 && (p = R);
            }
            return s(m, p, g);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function s(m, h, p) {
          for (var D = [], g = 0, w = 0; w < h; w++)
            if (w % 4) {
              var F = p[m.charCodeAt(w - 1)] << w % 4 * 2, R = p[m.charCodeAt(w)] >>> 6 - w % 4 * 2, _ = F | R;
              D[g >>> 2] |= _ << 24 - g % 4 * 8, g++;
            }
          return A.create(D, g);
        }
      }(), o.enc.Base64url;
    });
  }(Le)), Le.exports;
}
var qe = { exports: {} }, Gt;
function re() {
  return Gt || (Gt = 1, function(u, r) {
    (function(o, i) {
      u.exports = i(t0());
    })($, function(o) {
      return function(i) {
        var f = o, A = f.lib, b = A.WordArray, s = A.Hasher, m = f.algo, h = [];
        (function() {
          for (var R = 0; R < 64; R++)
            h[R] = i.abs(i.sin(R + 1)) * 4294967296 | 0;
        })();
        var p = m.MD5 = s.extend({
          _doReset: function() {
            this._hash = new b.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(R, _) {
            for (var H = 0; H < 16; H++) {
              var l = _ + H, C = R[l];
              R[l] = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360;
            }
            var S = this._hash.words, L = R[_ + 0], N = R[_ + 1], q = R[_ + 2], n = R[_ + 3], x = R[_ + 4], a = R[_ + 5], d = R[_ + 6], v = R[_ + 7], E = R[_ + 8], k = R[_ + 9], y = R[_ + 10], I = R[_ + 11], U = R[_ + 12], P = R[_ + 13], W = R[_ + 14], Q = R[_ + 15], O = S[0], M = S[1], K = S[2], G = S[3];
            O = D(O, M, K, G, L, 7, h[0]), G = D(G, O, M, K, N, 12, h[1]), K = D(K, G, O, M, q, 17, h[2]), M = D(M, K, G, O, n, 22, h[3]), O = D(O, M, K, G, x, 7, h[4]), G = D(G, O, M, K, a, 12, h[5]), K = D(K, G, O, M, d, 17, h[6]), M = D(M, K, G, O, v, 22, h[7]), O = D(O, M, K, G, E, 7, h[8]), G = D(G, O, M, K, k, 12, h[9]), K = D(K, G, O, M, y, 17, h[10]), M = D(M, K, G, O, I, 22, h[11]), O = D(O, M, K, G, U, 7, h[12]), G = D(G, O, M, K, P, 12, h[13]), K = D(K, G, O, M, W, 17, h[14]), M = D(M, K, G, O, Q, 22, h[15]), O = g(O, M, K, G, N, 5, h[16]), G = g(G, O, M, K, d, 9, h[17]), K = g(K, G, O, M, I, 14, h[18]), M = g(M, K, G, O, L, 20, h[19]), O = g(O, M, K, G, a, 5, h[20]), G = g(G, O, M, K, y, 9, h[21]), K = g(K, G, O, M, Q, 14, h[22]), M = g(M, K, G, O, x, 20, h[23]), O = g(O, M, K, G, k, 5, h[24]), G = g(G, O, M, K, W, 9, h[25]), K = g(K, G, O, M, n, 14, h[26]), M = g(M, K, G, O, E, 20, h[27]), O = g(O, M, K, G, P, 5, h[28]), G = g(G, O, M, K, q, 9, h[29]), K = g(K, G, O, M, v, 14, h[30]), M = g(M, K, G, O, U, 20, h[31]), O = w(O, M, K, G, a, 4, h[32]), G = w(G, O, M, K, E, 11, h[33]), K = w(K, G, O, M, I, 16, h[34]), M = w(M, K, G, O, W, 23, h[35]), O = w(O, M, K, G, N, 4, h[36]), G = w(G, O, M, K, x, 11, h[37]), K = w(K, G, O, M, v, 16, h[38]), M = w(M, K, G, O, y, 23, h[39]), O = w(O, M, K, G, P, 4, h[40]), G = w(G, O, M, K, L, 11, h[41]), K = w(K, G, O, M, n, 16, h[42]), M = w(M, K, G, O, d, 23, h[43]), O = w(O, M, K, G, k, 4, h[44]), G = w(G, O, M, K, U, 11, h[45]), K = w(K, G, O, M, Q, 16, h[46]), M = w(M, K, G, O, q, 23, h[47]), O = F(O, M, K, G, L, 6, h[48]), G = F(G, O, M, K, v, 10, h[49]), K = F(K, G, O, M, W, 15, h[50]), M = F(M, K, G, O, a, 21, h[51]), O = F(O, M, K, G, U, 6, h[52]), G = F(G, O, M, K, n, 10, h[53]), K = F(K, G, O, M, y, 15, h[54]), M = F(M, K, G, O, N, 21, h[55]), O = F(O, M, K, G, E, 6, h[56]), G = F(G, O, M, K, Q, 10, h[57]), K = F(K, G, O, M, d, 15, h[58]), M = F(M, K, G, O, P, 21, h[59]), O = F(O, M, K, G, x, 6, h[60]), G = F(G, O, M, K, I, 10, h[61]), K = F(K, G, O, M, q, 15, h[62]), M = F(M, K, G, O, k, 21, h[63]), S[0] = S[0] + O | 0, S[1] = S[1] + M | 0, S[2] = S[2] + K | 0, S[3] = S[3] + G | 0;
          },
          _doFinalize: function() {
            var R = this._data, _ = R.words, H = this._nDataBytes * 8, l = R.sigBytes * 8;
            _[l >>> 5] |= 128 << 24 - l % 32;
            var C = i.floor(H / 4294967296), S = H;
            _[(l + 64 >>> 9 << 4) + 15] = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360, _[(l + 64 >>> 9 << 4) + 14] = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360, R.sigBytes = (_.length + 1) * 4, this._process();
            for (var L = this._hash, N = L.words, q = 0; q < 4; q++) {
              var n = N[q];
              N[q] = (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & 4278255360;
            }
            return L;
          },
          clone: function() {
            var R = s.clone.call(this);
            return R._hash = this._hash.clone(), R;
          }
        });
        function D(R, _, H, l, C, S, L) {
          var N = R + (_ & H | ~_ & l) + C + L;
          return (N << S | N >>> 32 - S) + _;
        }
        function g(R, _, H, l, C, S, L) {
          var N = R + (_ & l | H & ~l) + C + L;
          return (N << S | N >>> 32 - S) + _;
        }
        function w(R, _, H, l, C, S, L) {
          var N = R + (_ ^ H ^ l) + C + L;
          return (N << S | N >>> 32 - S) + _;
        }
        function F(R, _, H, l, C, S, L) {
          var N = R + (H ^ (_ | ~l)) + C + L;
          return (N << S | N >>> 32 - S) + _;
        }
        f.MD5 = s._createHelper(p), f.HmacMD5 = s._createHmacHelper(p);
      }(Math), o.MD5;
    });
  }(qe)), qe.exports;
}
var ze = { exports: {} }, Kt;
function _r() {
  return Kt || (Kt = 1, function(u, r) {
    (function(o, i) {
      u.exports = i(t0());
    })($, function(o) {
      return function() {
        var i = o, f = i.lib, A = f.WordArray, b = f.Hasher, s = i.algo, m = [], h = s.SHA1 = b.extend({
          _doReset: function() {
            this._hash = new A.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(p, D) {
            for (var g = this._hash.words, w = g[0], F = g[1], R = g[2], _ = g[3], H = g[4], l = 0; l < 80; l++) {
              if (l < 16)
                m[l] = p[D + l] | 0;
              else {
                var C = m[l - 3] ^ m[l - 8] ^ m[l - 14] ^ m[l - 16];
                m[l] = C << 1 | C >>> 31;
              }
              var S = (w << 5 | w >>> 27) + H + m[l];
              l < 20 ? S += (F & R | ~F & _) + 1518500249 : l < 40 ? S += (F ^ R ^ _) + 1859775393 : l < 60 ? S += (F & R | F & _ | R & _) - 1894007588 : S += (F ^ R ^ _) - 899497514, H = _, _ = R, R = F << 30 | F >>> 2, F = w, w = S;
            }
            g[0] = g[0] + w | 0, g[1] = g[1] + F | 0, g[2] = g[2] + R | 0, g[3] = g[3] + _ | 0, g[4] = g[4] + H | 0;
          },
          _doFinalize: function() {
            var p = this._data, D = p.words, g = this._nDataBytes * 8, w = p.sigBytes * 8;
            return D[w >>> 5] |= 128 << 24 - w % 32, D[(w + 64 >>> 9 << 4) + 14] = Math.floor(g / 4294967296), D[(w + 64 >>> 9 << 4) + 15] = g, p.sigBytes = D.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var p = b.clone.call(this);
            return p._hash = this._hash.clone(), p;
          }
        });
        i.SHA1 = b._createHelper(h), i.HmacSHA1 = b._createHmacHelper(h);
      }(), o.SHA1;
    });
  }(ze)), ze.exports;
}
var Me = { exports: {} }, jt;
function Dt() {
  return jt || (jt = 1, function(u, r) {
    (function(o, i) {
      u.exports = i(t0());
    })($, function(o) {
      return function(i) {
        var f = o, A = f.lib, b = A.WordArray, s = A.Hasher, m = f.algo, h = [], p = [];
        (function() {
          function w(H) {
            for (var l = i.sqrt(H), C = 2; C <= l; C++)
              if (!(H % C))
                return !1;
            return !0;
          }
          function F(H) {
            return (H - (H | 0)) * 4294967296 | 0;
          }
          for (var R = 2, _ = 0; _ < 64; )
            w(R) && (_ < 8 && (h[_] = F(i.pow(R, 1 / 2))), p[_] = F(i.pow(R, 1 / 3)), _++), R++;
        })();
        var D = [], g = m.SHA256 = s.extend({
          _doReset: function() {
            this._hash = new b.init(h.slice(0));
          },
          _doProcessBlock: function(w, F) {
            for (var R = this._hash.words, _ = R[0], H = R[1], l = R[2], C = R[3], S = R[4], L = R[5], N = R[6], q = R[7], n = 0; n < 64; n++) {
              if (n < 16)
                D[n] = w[F + n] | 0;
              else {
                var x = D[n - 15], a = (x << 25 | x >>> 7) ^ (x << 14 | x >>> 18) ^ x >>> 3, d = D[n - 2], v = (d << 15 | d >>> 17) ^ (d << 13 | d >>> 19) ^ d >>> 10;
                D[n] = a + D[n - 7] + v + D[n - 16];
              }
              var E = S & L ^ ~S & N, k = _ & H ^ _ & l ^ H & l, y = (_ << 30 | _ >>> 2) ^ (_ << 19 | _ >>> 13) ^ (_ << 10 | _ >>> 22), I = (S << 26 | S >>> 6) ^ (S << 21 | S >>> 11) ^ (S << 7 | S >>> 25), U = q + I + E + p[n] + D[n], P = y + k;
              q = N, N = L, L = S, S = C + U | 0, C = l, l = H, H = _, _ = U + P | 0;
            }
            R[0] = R[0] + _ | 0, R[1] = R[1] + H | 0, R[2] = R[2] + l | 0, R[3] = R[3] + C | 0, R[4] = R[4] + S | 0, R[5] = R[5] + L | 0, R[6] = R[6] + N | 0, R[7] = R[7] + q | 0;
          },
          _doFinalize: function() {
            var w = this._data, F = w.words, R = this._nDataBytes * 8, _ = w.sigBytes * 8;
            return F[_ >>> 5] |= 128 << 24 - _ % 32, F[(_ + 64 >>> 9 << 4) + 14] = i.floor(R / 4294967296), F[(_ + 64 >>> 9 << 4) + 15] = R, w.sigBytes = F.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var w = s.clone.call(this);
            return w._hash = this._hash.clone(), w;
          }
        });
        f.SHA256 = s._createHelper(g), f.HmacSHA256 = s._createHmacHelper(g);
      }(Math), o.SHA256;
    });
  }(Me)), Me.exports;
}
var We = { exports: {} }, Qt;
function Fn() {
  return Qt || (Qt = 1, function(u, r) {
    (function(o, i, f) {
      u.exports = i(t0(), Dt());
    })($, function(o) {
      return function() {
        var i = o, f = i.lib, A = f.WordArray, b = i.algo, s = b.SHA256, m = b.SHA224 = s.extend({
          _doReset: function() {
            this._hash = new A.init([
              3238371032,
              914150663,
              812702999,
              4144912697,
              4290775857,
              1750603025,
              1694076839,
              3204075428
            ]);
          },
          _doFinalize: function() {
            var h = s._doFinalize.call(this);
            return h.sigBytes -= 4, h;
          }
        });
        i.SHA224 = s._createHelper(m), i.HmacSHA224 = s._createHmacHelper(m);
      }(), o.SHA224;
    });
  }(We)), We.exports;
}
var Ge = { exports: {} }, Xt;
function Sr() {
  return Xt || (Xt = 1, function(u, r) {
    (function(o, i, f) {
      u.exports = i(t0(), Re());
    })($, function(o) {
      return function() {
        var i = o, f = i.lib, A = f.Hasher, b = i.x64, s = b.Word, m = b.WordArray, h = i.algo;
        function p() {
          return s.create.apply(s, arguments);
        }
        var D = [
          p(1116352408, 3609767458),
          p(1899447441, 602891725),
          p(3049323471, 3964484399),
          p(3921009573, 2173295548),
          p(961987163, 4081628472),
          p(1508970993, 3053834265),
          p(2453635748, 2937671579),
          p(2870763221, 3664609560),
          p(3624381080, 2734883394),
          p(310598401, 1164996542),
          p(607225278, 1323610764),
          p(1426881987, 3590304994),
          p(1925078388, 4068182383),
          p(2162078206, 991336113),
          p(2614888103, 633803317),
          p(3248222580, 3479774868),
          p(3835390401, 2666613458),
          p(4022224774, 944711139),
          p(264347078, 2341262773),
          p(604807628, 2007800933),
          p(770255983, 1495990901),
          p(1249150122, 1856431235),
          p(1555081692, 3175218132),
          p(1996064986, 2198950837),
          p(2554220882, 3999719339),
          p(2821834349, 766784016),
          p(2952996808, 2566594879),
          p(3210313671, 3203337956),
          p(3336571891, 1034457026),
          p(3584528711, 2466948901),
          p(113926993, 3758326383),
          p(338241895, 168717936),
          p(666307205, 1188179964),
          p(773529912, 1546045734),
          p(1294757372, 1522805485),
          p(1396182291, 2643833823),
          p(1695183700, 2343527390),
          p(1986661051, 1014477480),
          p(2177026350, 1206759142),
          p(2456956037, 344077627),
          p(2730485921, 1290863460),
          p(2820302411, 3158454273),
          p(3259730800, 3505952657),
          p(3345764771, 106217008),
          p(3516065817, 3606008344),
          p(3600352804, 1432725776),
          p(4094571909, 1467031594),
          p(275423344, 851169720),
          p(430227734, 3100823752),
          p(506948616, 1363258195),
          p(659060556, 3750685593),
          p(883997877, 3785050280),
          p(958139571, 3318307427),
          p(1322822218, 3812723403),
          p(1537002063, 2003034995),
          p(1747873779, 3602036899),
          p(1955562222, 1575990012),
          p(2024104815, 1125592928),
          p(2227730452, 2716904306),
          p(2361852424, 442776044),
          p(2428436474, 593698344),
          p(2756734187, 3733110249),
          p(3204031479, 2999351573),
          p(3329325298, 3815920427),
          p(3391569614, 3928383900),
          p(3515267271, 566280711),
          p(3940187606, 3454069534),
          p(4118630271, 4000239992),
          p(116418474, 1914138554),
          p(174292421, 2731055270),
          p(289380356, 3203993006),
          p(460393269, 320620315),
          p(685471733, 587496836),
          p(852142971, 1086792851),
          p(1017036298, 365543100),
          p(1126000580, 2618297676),
          p(1288033470, 3409855158),
          p(1501505948, 4234509866),
          p(1607167915, 987167468),
          p(1816402316, 1246189591)
        ], g = [];
        (function() {
          for (var F = 0; F < 80; F++)
            g[F] = p();
        })();
        var w = h.SHA512 = A.extend({
          _doReset: function() {
            this._hash = new m.init([
              new s.init(1779033703, 4089235720),
              new s.init(3144134277, 2227873595),
              new s.init(1013904242, 4271175723),
              new s.init(2773480762, 1595750129),
              new s.init(1359893119, 2917565137),
              new s.init(2600822924, 725511199),
              new s.init(528734635, 4215389547),
              new s.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(F, R) {
            for (var _ = this._hash.words, H = _[0], l = _[1], C = _[2], S = _[3], L = _[4], N = _[5], q = _[6], n = _[7], x = H.high, a = H.low, d = l.high, v = l.low, E = C.high, k = C.low, y = S.high, I = S.low, U = L.high, P = L.low, W = N.high, Q = N.low, O = q.high, M = q.low, K = n.high, G = n.low, X = x, V = a, r0 = d, Y = v, w0 = E, F0 = k, p0 = y, g0 = I, n0 = U, e0 = P, o0 = W, Z0 = Q, G0 = O, J0 = M, ue = K, K0 = G, v0 = 0; v0 < 80; v0++) {
              var x0, m0, ne = g[v0];
              if (v0 < 16)
                m0 = ne.high = F[R + v0 * 2] | 0, x0 = ne.low = F[R + v0 * 2 + 1] | 0;
              else {
                var T0 = g[v0 - 15], j0 = T0.high, c = T0.low, e = (j0 >>> 1 | c << 31) ^ (j0 >>> 8 | c << 24) ^ j0 >>> 7, t = (c >>> 1 | j0 << 31) ^ (c >>> 8 | j0 << 24) ^ (c >>> 7 | j0 << 25), B = g[v0 - 2], T = B.high, z = B.low, j = (T >>> 19 | z << 13) ^ (T << 3 | z >>> 29) ^ T >>> 6, J = (z >>> 19 | T << 13) ^ (z << 3 | T >>> 29) ^ (z >>> 6 | T << 26), s0 = g[v0 - 7], a0 = s0.high, c0 = s0.low, i0 = g[v0 - 16], Pr = i0.high, _t = i0.low;
                x0 = t + c0, m0 = e + a0 + (x0 >>> 0 < t >>> 0 ? 1 : 0), x0 = x0 + J, m0 = m0 + j + (x0 >>> 0 < J >>> 0 ? 1 : 0), x0 = x0 + _t, m0 = m0 + Pr + (x0 >>> 0 < _t >>> 0 ? 1 : 0), ne.high = m0, ne.low = x0;
              }
              var Or = n0 & o0 ^ ~n0 & G0, St = e0 & Z0 ^ ~e0 & J0, Ur = X & r0 ^ X & w0 ^ r0 & w0, Nr = V & Y ^ V & F0 ^ Y & F0, Hr = (X >>> 28 | V << 4) ^ (X << 30 | V >>> 2) ^ (X << 25 | V >>> 7), It = (V >>> 28 | X << 4) ^ (V << 30 | X >>> 2) ^ (V << 25 | X >>> 7), Lr = (n0 >>> 14 | e0 << 18) ^ (n0 >>> 18 | e0 << 14) ^ (n0 << 23 | e0 >>> 9), qr = (e0 >>> 14 | n0 << 18) ^ (e0 >>> 18 | n0 << 14) ^ (e0 << 23 | n0 >>> 9), Rt = D[v0], zr = Rt.high, kt = Rt.low, D0 = K0 + qr, Q0 = ue + Lr + (D0 >>> 0 < K0 >>> 0 ? 1 : 0), D0 = D0 + St, Q0 = Q0 + Or + (D0 >>> 0 < St >>> 0 ? 1 : 0), D0 = D0 + kt, Q0 = Q0 + zr + (D0 >>> 0 < kt >>> 0 ? 1 : 0), D0 = D0 + x0, Q0 = Q0 + m0 + (D0 >>> 0 < x0 >>> 0 ? 1 : 0), Tt = It + Nr, Mr = Hr + Ur + (Tt >>> 0 < It >>> 0 ? 1 : 0);
              ue = G0, K0 = J0, G0 = o0, J0 = Z0, o0 = n0, Z0 = e0, e0 = g0 + D0 | 0, n0 = p0 + Q0 + (e0 >>> 0 < g0 >>> 0 ? 1 : 0) | 0, p0 = w0, g0 = F0, w0 = r0, F0 = Y, r0 = X, Y = V, V = D0 + Tt | 0, X = Q0 + Mr + (V >>> 0 < D0 >>> 0 ? 1 : 0) | 0;
            }
            a = H.low = a + V, H.high = x + X + (a >>> 0 < V >>> 0 ? 1 : 0), v = l.low = v + Y, l.high = d + r0 + (v >>> 0 < Y >>> 0 ? 1 : 0), k = C.low = k + F0, C.high = E + w0 + (k >>> 0 < F0 >>> 0 ? 1 : 0), I = S.low = I + g0, S.high = y + p0 + (I >>> 0 < g0 >>> 0 ? 1 : 0), P = L.low = P + e0, L.high = U + n0 + (P >>> 0 < e0 >>> 0 ? 1 : 0), Q = N.low = Q + Z0, N.high = W + o0 + (Q >>> 0 < Z0 >>> 0 ? 1 : 0), M = q.low = M + J0, q.high = O + G0 + (M >>> 0 < J0 >>> 0 ? 1 : 0), G = n.low = G + K0, n.high = K + ue + (G >>> 0 < K0 >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var F = this._data, R = F.words, _ = this._nDataBytes * 8, H = F.sigBytes * 8;
            R[H >>> 5] |= 128 << 24 - H % 32, R[(H + 128 >>> 10 << 5) + 30] = Math.floor(_ / 4294967296), R[(H + 128 >>> 10 << 5) + 31] = _, F.sigBytes = R.length * 4, this._process();
            var l = this._hash.toX32();
            return l;
          },
          clone: function() {
            var F = A.clone.call(this);
            return F._hash = this._hash.clone(), F;
          },
          blockSize: 1024 / 32
        });
        i.SHA512 = A._createHelper(w), i.HmacSHA512 = A._createHmacHelper(w);
      }(), o.SHA512;
    });
  }(Ge)), Ge.exports;
}
var Ke = { exports: {} }, Vt;
function Dn() {
  return Vt || (Vt = 1, function(u, r) {
    (function(o, i, f) {
      u.exports = i(t0(), Re(), Sr());
    })($, function(o) {
      return function() {
        var i = o, f = i.x64, A = f.Word, b = f.WordArray, s = i.algo, m = s.SHA512, h = s.SHA384 = m.extend({
          _doReset: function() {
            this._hash = new b.init([
              new A.init(3418070365, 3238371032),
              new A.init(1654270250, 914150663),
              new A.init(2438529370, 812702999),
              new A.init(355462360, 4144912697),
              new A.init(1731405415, 4290775857),
              new A.init(2394180231, 1750603025),
              new A.init(3675008525, 1694076839),
              new A.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var p = m._doFinalize.call(this);
            return p.sigBytes -= 16, p;
          }
        });
        i.SHA384 = m._createHelper(h), i.HmacSHA384 = m._createHmacHelper(h);
      }(), o.SHA384;
    });
  }(Ke)), Ke.exports;
}
var je = { exports: {} }, Yt;
function mn() {
  return Yt || (Yt = 1, function(u, r) {
    (function(o, i, f) {
      u.exports = i(t0(), Re());
    })($, function(o) {
      return function(i) {
        var f = o, A = f.lib, b = A.WordArray, s = A.Hasher, m = f.x64, h = m.Word, p = f.algo, D = [], g = [], w = [];
        (function() {
          for (var _ = 1, H = 0, l = 0; l < 24; l++) {
            D[_ + 5 * H] = (l + 1) * (l + 2) / 2 % 64;
            var C = H % 5, S = (2 * _ + 3 * H) % 5;
            _ = C, H = S;
          }
          for (var _ = 0; _ < 5; _++)
            for (var H = 0; H < 5; H++)
              g[_ + 5 * H] = H + (2 * _ + 3 * H) % 5 * 5;
          for (var L = 1, N = 0; N < 24; N++) {
            for (var q = 0, n = 0, x = 0; x < 7; x++) {
              if (L & 1) {
                var a = (1 << x) - 1;
                a < 32 ? n ^= 1 << a : q ^= 1 << a - 32;
              }
              L & 128 ? L = L << 1 ^ 113 : L <<= 1;
            }
            w[N] = h.create(q, n);
          }
        })();
        var F = [];
        (function() {
          for (var _ = 0; _ < 25; _++)
            F[_] = h.create();
        })();
        var R = p.SHA3 = s.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: s.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var _ = this._state = [], H = 0; H < 25; H++)
              _[H] = new h.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(_, H) {
            for (var l = this._state, C = this.blockSize / 2, S = 0; S < C; S++) {
              var L = _[H + 2 * S], N = _[H + 2 * S + 1];
              L = (L << 8 | L >>> 24) & 16711935 | (L << 24 | L >>> 8) & 4278255360, N = (N << 8 | N >>> 24) & 16711935 | (N << 24 | N >>> 8) & 4278255360;
              var q = l[S];
              q.high ^= N, q.low ^= L;
            }
            for (var n = 0; n < 24; n++) {
              for (var x = 0; x < 5; x++) {
                for (var a = 0, d = 0, v = 0; v < 5; v++) {
                  var q = l[x + 5 * v];
                  a ^= q.high, d ^= q.low;
                }
                var E = F[x];
                E.high = a, E.low = d;
              }
              for (var x = 0; x < 5; x++)
                for (var k = F[(x + 4) % 5], y = F[(x + 1) % 5], I = y.high, U = y.low, a = k.high ^ (I << 1 | U >>> 31), d = k.low ^ (U << 1 | I >>> 31), v = 0; v < 5; v++) {
                  var q = l[x + 5 * v];
                  q.high ^= a, q.low ^= d;
                }
              for (var P = 1; P < 25; P++) {
                var a, d, q = l[P], W = q.high, Q = q.low, O = D[P];
                O < 32 ? (a = W << O | Q >>> 32 - O, d = Q << O | W >>> 32 - O) : (a = Q << O - 32 | W >>> 64 - O, d = W << O - 32 | Q >>> 64 - O);
                var M = F[g[P]];
                M.high = a, M.low = d;
              }
              var K = F[0], G = l[0];
              K.high = G.high, K.low = G.low;
              for (var x = 0; x < 5; x++)
                for (var v = 0; v < 5; v++) {
                  var P = x + 5 * v, q = l[P], X = F[P], V = F[(x + 1) % 5 + 5 * v], r0 = F[(x + 2) % 5 + 5 * v];
                  q.high = X.high ^ ~V.high & r0.high, q.low = X.low ^ ~V.low & r0.low;
                }
              var q = l[0], Y = w[n];
              q.high ^= Y.high, q.low ^= Y.low;
            }
          },
          _doFinalize: function() {
            var _ = this._data, H = _.words;
            this._nDataBytes * 8;
            var l = _.sigBytes * 8, C = this.blockSize * 32;
            H[l >>> 5] |= 1 << 24 - l % 32, H[(i.ceil((l + 1) / C) * C >>> 5) - 1] |= 128, _.sigBytes = H.length * 4, this._process();
            for (var S = this._state, L = this.cfg.outputLength / 8, N = L / 8, q = [], n = 0; n < N; n++) {
              var x = S[n], a = x.high, d = x.low;
              a = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360, d = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360, q.push(d), q.push(a);
            }
            return new b.init(q, L);
          },
          clone: function() {
            for (var _ = s.clone.call(this), H = _._state = this._state.slice(0), l = 0; l < 25; l++)
              H[l] = H[l].clone();
            return _;
          }
        });
        f.SHA3 = s._createHelper(R), f.HmacSHA3 = s._createHmacHelper(R);
      }(Math), o.SHA3;
    });
  }(je)), je.exports;
}
var Qe = { exports: {} }, Zt;
function bn() {
  return Zt || (Zt = 1, function(u, r) {
    (function(o, i) {
      u.exports = i(t0());
    })($, function(o) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(i) {
        var f = o, A = f.lib, b = A.WordArray, s = A.Hasher, m = f.algo, h = b.create([
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ]), p = b.create([
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ]), D = b.create([
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ]), g = b.create([
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ]), w = b.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), F = b.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), R = m.RIPEMD160 = s.extend({
          _doReset: function() {
            this._hash = b.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(N, q) {
            for (var n = 0; n < 16; n++) {
              var x = q + n, a = N[x];
              N[x] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            }
            var d = this._hash.words, v = w.words, E = F.words, k = h.words, y = p.words, I = D.words, U = g.words, P, W, Q, O, M, K, G, X, V, r0;
            K = P = d[0], G = W = d[1], X = Q = d[2], V = O = d[3], r0 = M = d[4];
            for (var Y, n = 0; n < 80; n += 1)
              Y = P + N[q + k[n]] | 0, n < 16 ? Y += _(W, Q, O) + v[0] : n < 32 ? Y += H(W, Q, O) + v[1] : n < 48 ? Y += l(W, Q, O) + v[2] : n < 64 ? Y += C(W, Q, O) + v[3] : Y += S(W, Q, O) + v[4], Y = Y | 0, Y = L(Y, I[n]), Y = Y + M | 0, P = M, M = O, O = L(Q, 10), Q = W, W = Y, Y = K + N[q + y[n]] | 0, n < 16 ? Y += S(G, X, V) + E[0] : n < 32 ? Y += C(G, X, V) + E[1] : n < 48 ? Y += l(G, X, V) + E[2] : n < 64 ? Y += H(G, X, V) + E[3] : Y += _(G, X, V) + E[4], Y = Y | 0, Y = L(Y, U[n]), Y = Y + r0 | 0, K = r0, r0 = V, V = L(X, 10), X = G, G = Y;
            Y = d[1] + Q + V | 0, d[1] = d[2] + O + r0 | 0, d[2] = d[3] + M + K | 0, d[3] = d[4] + P + G | 0, d[4] = d[0] + W + X | 0, d[0] = Y;
          },
          _doFinalize: function() {
            var N = this._data, q = N.words, n = this._nDataBytes * 8, x = N.sigBytes * 8;
            q[x >>> 5] |= 128 << 24 - x % 32, q[(x + 64 >>> 9 << 4) + 14] = (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & 4278255360, N.sigBytes = (q.length + 1) * 4, this._process();
            for (var a = this._hash, d = a.words, v = 0; v < 5; v++) {
              var E = d[v];
              d[v] = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360;
            }
            return a;
          },
          clone: function() {
            var N = s.clone.call(this);
            return N._hash = this._hash.clone(), N;
          }
        });
        function _(N, q, n) {
          return N ^ q ^ n;
        }
        function H(N, q, n) {
          return N & q | ~N & n;
        }
        function l(N, q, n) {
          return (N | ~q) ^ n;
        }
        function C(N, q, n) {
          return N & n | q & ~n;
        }
        function S(N, q, n) {
          return N ^ (q | ~n);
        }
        function L(N, q) {
          return N << q | N >>> 32 - q;
        }
        f.RIPEMD160 = s._createHelper(R), f.HmacRIPEMD160 = s._createHmacHelper(R);
      }(), o.RIPEMD160;
    });
  }(Qe)), Qe.exports;
}
var Xe = { exports: {} }, Jt;
function mt() {
  return Jt || (Jt = 1, function(u, r) {
    (function(o, i) {
      u.exports = i(t0());
    })($, function(o) {
      (function() {
        var i = o, f = i.lib, A = f.Base, b = i.enc, s = b.Utf8, m = i.algo;
        m.HMAC = A.extend({
          /**
           * Initializes a newly created HMAC.
           *
           * @param {Hasher} hasher The hash algorithm to use.
           * @param {WordArray|string} key The secret key.
           *
           * @example
           *
           *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
           */
          init: function(h, p) {
            h = this._hasher = new h.init(), typeof p == "string" && (p = s.parse(p));
            var D = h.blockSize, g = D * 4;
            p.sigBytes > g && (p = h.finalize(p)), p.clamp();
            for (var w = this._oKey = p.clone(), F = this._iKey = p.clone(), R = w.words, _ = F.words, H = 0; H < D; H++)
              R[H] ^= 1549556828, _[H] ^= 909522486;
            w.sigBytes = F.sigBytes = g, this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var h = this._hasher;
            h.reset(), h.update(this._iKey);
          },
          /**
           * Updates this HMAC with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {HMAC} This HMAC instance.
           *
           * @example
           *
           *     hmacHasher.update('message');
           *     hmacHasher.update(wordArray);
           */
          update: function(h) {
            return this._hasher.update(h), this;
          },
          /**
           * Finalizes the HMAC computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The HMAC.
           *
           * @example
           *
           *     var hmac = hmacHasher.finalize();
           *     var hmac = hmacHasher.finalize('message');
           *     var hmac = hmacHasher.finalize(wordArray);
           */
          finalize: function(h) {
            var p = this._hasher, D = p.finalize(h);
            p.reset();
            var g = p.finalize(this._oKey.clone().concat(D));
            return g;
          }
        });
      })();
    });
  }(Xe)), Xe.exports;
}
var Ve = { exports: {} }, $t;
function _n() {
  return $t || ($t = 1, function(u, r) {
    (function(o, i, f) {
      u.exports = i(t0(), Dt(), mt());
    })($, function(o) {
      return function() {
        var i = o, f = i.lib, A = f.Base, b = f.WordArray, s = i.algo, m = s.SHA256, h = s.HMAC, p = s.PBKDF2 = A.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: A.extend({
            keySize: 128 / 32,
            hasher: m,
            iterations: 25e4
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.PBKDF2.create();
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
           */
          init: function(D) {
            this.cfg = this.cfg.extend(D);
          },
          /**
           * Computes the Password-Based Key Derivation Function 2.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(D, g) {
            for (var w = this.cfg, F = h.create(w.hasher, D), R = b.create(), _ = b.create([1]), H = R.words, l = _.words, C = w.keySize, S = w.iterations; H.length < C; ) {
              var L = F.update(g).finalize(_);
              F.reset();
              for (var N = L.words, q = N.length, n = L, x = 1; x < S; x++) {
                n = F.finalize(n), F.reset();
                for (var a = n.words, d = 0; d < q; d++)
                  N[d] ^= a[d];
              }
              R.concat(L), l[0]++;
            }
            return R.sigBytes = C * 4, R;
          }
        });
        i.PBKDF2 = function(D, g, w) {
          return p.create(w).compute(D, g);
        };
      }(), o.PBKDF2;
    });
  }(Ve)), Ve.exports;
}
var Ye = { exports: {} }, er;
function Y0() {
  return er || (er = 1, function(u, r) {
    (function(o, i, f) {
      u.exports = i(t0(), _r(), mt());
    })($, function(o) {
      return function() {
        var i = o, f = i.lib, A = f.Base, b = f.WordArray, s = i.algo, m = s.MD5, h = s.EvpKDF = A.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: A.extend({
            keySize: 128 / 32,
            hasher: m,
            iterations: 1
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.EvpKDF.create();
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
           */
          init: function(p) {
            this.cfg = this.cfg.extend(p);
          },
          /**
           * Derives a key from a password.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(p, D) {
            for (var g, w = this.cfg, F = w.hasher.create(), R = b.create(), _ = R.words, H = w.keySize, l = w.iterations; _.length < H; ) {
              g && F.update(g), g = F.update(p).finalize(D), F.reset();
              for (var C = 1; C < l; C++)
                g = F.finalize(g), F.reset();
              R.concat(g);
            }
            return R.sigBytes = H * 4, R;
          }
        });
        i.EvpKDF = function(p, D, g) {
          return h.create(g).compute(p, D);
        };
      }(), o.EvpKDF;
    });
  }(Ye)), Ye.exports;
}
var Ze = { exports: {} }, tr;
function h0() {
  return tr || (tr = 1, function(u, r) {
    (function(o, i, f) {
      u.exports = i(t0(), Y0());
    })($, function(o) {
      o.lib.Cipher || function(i) {
        var f = o, A = f.lib, b = A.Base, s = A.WordArray, m = A.BufferedBlockAlgorithm, h = f.enc;
        h.Utf8;
        var p = h.Base64, D = f.algo, g = D.EvpKDF, w = A.Cipher = m.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: b.extend(),
          /**
           * Creates this cipher in encryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
           */
          createEncryptor: function(a, d) {
            return this.create(this._ENC_XFORM_MODE, a, d);
          },
          /**
           * Creates this cipher in decryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
           */
          createDecryptor: function(a, d) {
            return this.create(this._DEC_XFORM_MODE, a, d);
          },
          /**
           * Initializes a newly created cipher.
           *
           * @param {number} xformMode Either the encryption or decryption transormation mode constant.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
           */
          init: function(a, d, v) {
            this.cfg = this.cfg.extend(v), this._xformMode = a, this._key = d, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            m.reset.call(this), this._doReset();
          },
          /**
           * Adds data to be encrypted or decrypted.
           *
           * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
           *
           * @return {WordArray} The data after processing.
           *
           * @example
           *
           *     var encrypted = cipher.process('data');
           *     var encrypted = cipher.process(wordArray);
           */
          process: function(a) {
            return this._append(a), this._process();
          },
          /**
           * Finalizes the encryption or decryption process.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
           *
           * @return {WordArray} The data after final processing.
           *
           * @example
           *
           *     var encrypted = cipher.finalize();
           *     var encrypted = cipher.finalize('data');
           *     var encrypted = cipher.finalize(wordArray);
           */
          finalize: function(a) {
            a && this._append(a);
            var d = this._doFinalize();
            return d;
          },
          keySize: 128 / 32,
          ivSize: 128 / 32,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          /**
           * Creates shortcut functions to a cipher's object interface.
           *
           * @param {Cipher} cipher The cipher to create a helper for.
           *
           * @return {Object} An object with encrypt and decrypt shortcut functions.
           *
           * @static
           *
           * @example
           *
           *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
           */
          _createHelper: /* @__PURE__ */ function() {
            function a(d) {
              return typeof d == "string" ? x : N;
            }
            return function(d) {
              return {
                encrypt: function(v, E, k) {
                  return a(E).encrypt(d, v, E, k);
                },
                decrypt: function(v, E, k) {
                  return a(E).decrypt(d, v, E, k);
                }
              };
            };
          }()
        });
        A.StreamCipher = w.extend({
          _doFinalize: function() {
            var a = this._process(!0);
            return a;
          },
          blockSize: 1
        });
        var F = f.mode = {}, R = A.BlockCipherMode = b.extend({
          /**
           * Creates this mode for encryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
           */
          createEncryptor: function(a, d) {
            return this.Encryptor.create(a, d);
          },
          /**
           * Creates this mode for decryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
           */
          createDecryptor: function(a, d) {
            return this.Decryptor.create(a, d);
          },
          /**
           * Initializes a newly created mode.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
           */
          init: function(a, d) {
            this._cipher = a, this._iv = d;
          }
        }), _ = F.CBC = function() {
          var a = R.extend();
          a.Encryptor = a.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(v, E) {
              var k = this._cipher, y = k.blockSize;
              d.call(this, v, E, y), k.encryptBlock(v, E), this._prevBlock = v.slice(E, E + y);
            }
          }), a.Decryptor = a.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(v, E) {
              var k = this._cipher, y = k.blockSize, I = v.slice(E, E + y);
              k.decryptBlock(v, E), d.call(this, v, E, y), this._prevBlock = I;
            }
          });
          function d(v, E, k) {
            var y, I = this._iv;
            I ? (y = I, this._iv = i) : y = this._prevBlock;
            for (var U = 0; U < k; U++)
              v[E + U] ^= y[U];
          }
          return a;
        }(), H = f.pad = {}, l = H.Pkcs7 = {
          /**
           * Pads data using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to pad.
           * @param {number} blockSize The multiple that the data should be padded to.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
           */
          pad: function(a, d) {
            for (var v = d * 4, E = v - a.sigBytes % v, k = E << 24 | E << 16 | E << 8 | E, y = [], I = 0; I < E; I += 4)
              y.push(k);
            var U = s.create(y, E);
            a.concat(U);
          },
          /**
           * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to unpad.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.unpad(wordArray);
           */
          unpad: function(a) {
            var d = a.words[a.sigBytes - 1 >>> 2] & 255;
            a.sigBytes -= d;
          }
        };
        A.BlockCipher = w.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: w.cfg.extend({
            mode: _,
            padding: l
          }),
          reset: function() {
            var a;
            w.reset.call(this);
            var d = this.cfg, v = d.iv, E = d.mode;
            this._xformMode == this._ENC_XFORM_MODE ? a = E.createEncryptor : (a = E.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == a ? this._mode.init(this, v && v.words) : (this._mode = a.call(E, this, v && v.words), this._mode.__creator = a);
          },
          _doProcessBlock: function(a, d) {
            this._mode.processBlock(a, d);
          },
          _doFinalize: function() {
            var a, d = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (d.pad(this._data, this.blockSize), a = this._process(!0)) : (a = this._process(!0), d.unpad(a)), a;
          },
          blockSize: 128 / 32
        });
        var C = A.CipherParams = b.extend({
          /**
           * Initializes a newly created cipher params object.
           *
           * @param {Object} cipherParams An object with any of the possible cipher parameters.
           *
           * @example
           *
           *     var cipherParams = CryptoJS.lib.CipherParams.create({
           *         ciphertext: ciphertextWordArray,
           *         key: keyWordArray,
           *         iv: ivWordArray,
           *         salt: saltWordArray,
           *         algorithm: CryptoJS.algo.AES,
           *         mode: CryptoJS.mode.CBC,
           *         padding: CryptoJS.pad.PKCS7,
           *         blockSize: 4,
           *         formatter: CryptoJS.format.OpenSSL
           *     });
           */
          init: function(a) {
            this.mixIn(a);
          },
          /**
           * Converts this cipher params object to a string.
           *
           * @param {Format} formatter (Optional) The formatting strategy to use.
           *
           * @return {string} The stringified cipher params.
           *
           * @throws Error If neither the formatter nor the default formatter is set.
           *
           * @example
           *
           *     var string = cipherParams + '';
           *     var string = cipherParams.toString();
           *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
           */
          toString: function(a) {
            return (a || this.formatter).stringify(this);
          }
        }), S = f.format = {}, L = S.OpenSSL = {
          /**
           * Converts a cipher params object to an OpenSSL-compatible string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The OpenSSL-compatible string.
           *
           * @static
           *
           * @example
           *
           *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
           */
          stringify: function(a) {
            var d, v = a.ciphertext, E = a.salt;
            return E ? d = s.create([1398893684, 1701076831]).concat(E).concat(v) : d = v, d.toString(p);
          },
          /**
           * Converts an OpenSSL-compatible string to a cipher params object.
           *
           * @param {string} openSSLStr The OpenSSL-compatible string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
           */
          parse: function(a) {
            var d, v = p.parse(a), E = v.words;
            return E[0] == 1398893684 && E[1] == 1701076831 && (d = s.create(E.slice(2, 4)), E.splice(0, 4), v.sigBytes -= 16), C.create({ ciphertext: v, salt: d });
          }
        }, N = A.SerializableCipher = b.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: b.extend({
            format: L
          }),
          /**
           * Encrypts a message.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(a, d, v, E) {
            E = this.cfg.extend(E);
            var k = a.createEncryptor(v, E), y = k.finalize(d), I = k.cfg;
            return C.create({
              ciphertext: y,
              key: v,
              iv: I.iv,
              algorithm: a,
              mode: I.mode,
              padding: I.padding,
              blockSize: a.blockSize,
              formatter: E.format
            });
          },
          /**
           * Decrypts serialized ciphertext.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(a, d, v, E) {
            E = this.cfg.extend(E), d = this._parse(d, E.format);
            var k = a.createDecryptor(v, E).finalize(d.ciphertext);
            return k;
          },
          /**
           * Converts serialized ciphertext to CipherParams,
           * else assumed CipherParams already and returns ciphertext unchanged.
           *
           * @param {CipherParams|string} ciphertext The ciphertext.
           * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
           *
           * @return {CipherParams} The unserialized ciphertext.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
           */
          _parse: function(a, d) {
            return typeof a == "string" ? d.parse(a, this) : a;
          }
        }), q = f.kdf = {}, n = q.OpenSSL = {
          /**
           * Derives a key and IV from a password.
           *
           * @param {string} password The password to derive from.
           * @param {number} keySize The size in words of the key to generate.
           * @param {number} ivSize The size in words of the IV to generate.
           * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
           *
           * @return {CipherParams} A cipher params object with the key, IV, and salt.
           *
           * @static
           *
           * @example
           *
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
           */
          execute: function(a, d, v, E, k) {
            if (E || (E = s.random(64 / 8)), k)
              var y = g.create({ keySize: d + v, hasher: k }).compute(a, E);
            else
              var y = g.create({ keySize: d + v }).compute(a, E);
            var I = s.create(y.words.slice(d), v * 4);
            return y.sigBytes = d * 4, C.create({ key: y, iv: I, salt: E });
          }
        }, x = A.PasswordBasedCipher = N.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: N.cfg.extend({
            kdf: n
          }),
          /**
           * Encrypts a message using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(a, d, v, E) {
            E = this.cfg.extend(E);
            var k = E.kdf.execute(v, a.keySize, a.ivSize, E.salt, E.hasher);
            E.iv = k.iv;
            var y = N.encrypt.call(this, a, d, k.key, E);
            return y.mixIn(k), y;
          },
          /**
           * Decrypts serialized ciphertext using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(a, d, v, E) {
            E = this.cfg.extend(E), d = this._parse(d, E.format);
            var k = E.kdf.execute(v, a.keySize, a.ivSize, d.salt, E.hasher);
            E.iv = k.iv;
            var y = N.decrypt.call(this, a, d, k.key, E);
            return y;
          }
        });
      }();
    });
  }(Ze)), Ze.exports;
}
var Je = { exports: {} }, rr;
function Sn() {
  return rr || (rr = 1, function(u, r) {
    (function(o, i, f) {
      u.exports = i(t0(), h0());
    })($, function(o) {
      return o.mode.CFB = function() {
        var i = o.lib.BlockCipherMode.extend();
        i.Encryptor = i.extend({
          processBlock: function(A, b) {
            var s = this._cipher, m = s.blockSize;
            f.call(this, A, b, m, s), this._prevBlock = A.slice(b, b + m);
          }
        }), i.Decryptor = i.extend({
          processBlock: function(A, b) {
            var s = this._cipher, m = s.blockSize, h = A.slice(b, b + m);
            f.call(this, A, b, m, s), this._prevBlock = h;
          }
        });
        function f(A, b, s, m) {
          var h, p = this._iv;
          p ? (h = p.slice(0), this._iv = void 0) : h = this._prevBlock, m.encryptBlock(h, 0);
          for (var D = 0; D < s; D++)
            A[b + D] ^= h[D];
        }
        return i;
      }(), o.mode.CFB;
    });
  }(Je)), Je.exports;
}
var $e = { exports: {} }, nr;
function In() {
  return nr || (nr = 1, function(u, r) {
    (function(o, i, f) {
      u.exports = i(t0(), h0());
    })($, function(o) {
      return o.mode.CTR = function() {
        var i = o.lib.BlockCipherMode.extend(), f = i.Encryptor = i.extend({
          processBlock: function(A, b) {
            var s = this._cipher, m = s.blockSize, h = this._iv, p = this._counter;
            h && (p = this._counter = h.slice(0), this._iv = void 0);
            var D = p.slice(0);
            s.encryptBlock(D, 0), p[m - 1] = p[m - 1] + 1 | 0;
            for (var g = 0; g < m; g++)
              A[b + g] ^= D[g];
          }
        });
        return i.Decryptor = f, i;
      }(), o.mode.CTR;
    });
  }($e)), $e.exports;
}
var et = { exports: {} }, ir;
function Rn() {
  return ir || (ir = 1, function(u, r) {
    (function(o, i, f) {
      u.exports = i(t0(), h0());
    })($, function(o) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return o.mode.CTRGladman = function() {
        var i = o.lib.BlockCipherMode.extend();
        function f(s) {
          if ((s >> 24 & 255) === 255) {
            var m = s >> 16 & 255, h = s >> 8 & 255, p = s & 255;
            m === 255 ? (m = 0, h === 255 ? (h = 0, p === 255 ? p = 0 : ++p) : ++h) : ++m, s = 0, s += m << 16, s += h << 8, s += p;
          } else
            s += 1 << 24;
          return s;
        }
        function A(s) {
          return (s[0] = f(s[0])) === 0 && (s[1] = f(s[1])), s;
        }
        var b = i.Encryptor = i.extend({
          processBlock: function(s, m) {
            var h = this._cipher, p = h.blockSize, D = this._iv, g = this._counter;
            D && (g = this._counter = D.slice(0), this._iv = void 0), A(g);
            var w = g.slice(0);
            h.encryptBlock(w, 0);
            for (var F = 0; F < p; F++)
              s[m + F] ^= w[F];
          }
        });
        return i.Decryptor = b, i;
      }(), o.mode.CTRGladman;
    });
  }(et)), et.exports;
}
var tt = { exports: {} }, or;
function kn() {
  return or || (or = 1, function(u, r) {
    (function(o, i, f) {
      u.exports = i(t0(), h0());
    })($, function(o) {
      return o.mode.OFB = function() {
        var i = o.lib.BlockCipherMode.extend(), f = i.Encryptor = i.extend({
          processBlock: function(A, b) {
            var s = this._cipher, m = s.blockSize, h = this._iv, p = this._keystream;
            h && (p = this._keystream = h.slice(0), this._iv = void 0), s.encryptBlock(p, 0);
            for (var D = 0; D < m; D++)
              A[b + D] ^= p[D];
          }
        });
        return i.Decryptor = f, i;
      }(), o.mode.OFB;
    });
  }(tt)), tt.exports;
}
var rt = { exports: {} }, ar;
function Tn() {
  return ar || (ar = 1, function(u, r) {
    (function(o, i, f) {
      u.exports = i(t0(), h0());
    })($, function(o) {
      return o.mode.ECB = function() {
        var i = o.lib.BlockCipherMode.extend();
        return i.Encryptor = i.extend({
          processBlock: function(f, A) {
            this._cipher.encryptBlock(f, A);
          }
        }), i.Decryptor = i.extend({
          processBlock: function(f, A) {
            this._cipher.decryptBlock(f, A);
          }
        }), i;
      }(), o.mode.ECB;
    });
  }(rt)), rt.exports;
}
var nt = { exports: {} }, sr;
function Pn() {
  return sr || (sr = 1, function(u, r) {
    (function(o, i, f) {
      u.exports = i(t0(), h0());
    })($, function(o) {
      return o.pad.AnsiX923 = {
        pad: function(i, f) {
          var A = i.sigBytes, b = f * 4, s = b - A % b, m = A + s - 1;
          i.clamp(), i.words[m >>> 2] |= s << 24 - m % 4 * 8, i.sigBytes += s;
        },
        unpad: function(i) {
          var f = i.words[i.sigBytes - 1 >>> 2] & 255;
          i.sigBytes -= f;
        }
      }, o.pad.Ansix923;
    });
  }(nt)), nt.exports;
}
var it = { exports: {} }, cr;
function On() {
  return cr || (cr = 1, function(u, r) {
    (function(o, i, f) {
      u.exports = i(t0(), h0());
    })($, function(o) {
      return o.pad.Iso10126 = {
        pad: function(i, f) {
          var A = f * 4, b = A - i.sigBytes % A;
          i.concat(o.lib.WordArray.random(b - 1)).concat(o.lib.WordArray.create([b << 24], 1));
        },
        unpad: function(i) {
          var f = i.words[i.sigBytes - 1 >>> 2] & 255;
          i.sigBytes -= f;
        }
      }, o.pad.Iso10126;
    });
  }(it)), it.exports;
}
var ot = { exports: {} }, xr;
function Un() {
  return xr || (xr = 1, function(u, r) {
    (function(o, i, f) {
      u.exports = i(t0(), h0());
    })($, function(o) {
      return o.pad.Iso97971 = {
        pad: function(i, f) {
          i.concat(o.lib.WordArray.create([2147483648], 1)), o.pad.ZeroPadding.pad(i, f);
        },
        unpad: function(i) {
          o.pad.ZeroPadding.unpad(i), i.sigBytes--;
        }
      }, o.pad.Iso97971;
    });
  }(ot)), ot.exports;
}
var at = { exports: {} }, fr;
function Nn() {
  return fr || (fr = 1, function(u, r) {
    (function(o, i, f) {
      u.exports = i(t0(), h0());
    })($, function(o) {
      return o.pad.ZeroPadding = {
        pad: function(i, f) {
          var A = f * 4;
          i.clamp(), i.sigBytes += A - (i.sigBytes % A || A);
        },
        unpad: function(i) {
          for (var f = i.words, A = i.sigBytes - 1, A = i.sigBytes - 1; A >= 0; A--)
            if (f[A >>> 2] >>> 24 - A % 4 * 8 & 255) {
              i.sigBytes = A + 1;
              break;
            }
        }
      }, o.pad.ZeroPadding;
    });
  }(at)), at.exports;
}
var st = { exports: {} }, ur;
function Hn() {
  return ur || (ur = 1, function(u, r) {
    (function(o, i, f) {
      u.exports = i(t0(), h0());
    })($, function(o) {
      return o.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, o.pad.NoPadding;
    });
  }(st)), st.exports;
}
var ct = { exports: {} }, lr;
function Ln() {
  return lr || (lr = 1, function(u, r) {
    (function(o, i, f) {
      u.exports = i(t0(), h0());
    })($, function(o) {
      return function(i) {
        var f = o, A = f.lib, b = A.CipherParams, s = f.enc, m = s.Hex, h = f.format;
        h.Hex = {
          /**
           * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The hexadecimally encoded string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
           */
          stringify: function(p) {
            return p.ciphertext.toString(m);
          },
          /**
           * Converts a hexadecimally encoded ciphertext string to a cipher params object.
           *
           * @param {string} input The hexadecimally encoded string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
           */
          parse: function(p) {
            var D = m.parse(p);
            return b.create({ ciphertext: D });
          }
        };
      }(), o.format.Hex;
    });
  }(ct)), ct.exports;
}
var xt = { exports: {} }, hr;
function qn() {
  return hr || (hr = 1, function(u, r) {
    (function(o, i, f) {
      u.exports = i(t0(), te(), re(), Y0(), h0());
    })($, function(o) {
      return function() {
        var i = o, f = i.lib, A = f.BlockCipher, b = i.algo, s = [], m = [], h = [], p = [], D = [], g = [], w = [], F = [], R = [], _ = [];
        (function() {
          for (var C = [], S = 0; S < 256; S++)
            S < 128 ? C[S] = S << 1 : C[S] = S << 1 ^ 283;
          for (var L = 0, N = 0, S = 0; S < 256; S++) {
            var q = N ^ N << 1 ^ N << 2 ^ N << 3 ^ N << 4;
            q = q >>> 8 ^ q & 255 ^ 99, s[L] = q, m[q] = L;
            var n = C[L], x = C[n], a = C[x], d = C[q] * 257 ^ q * 16843008;
            h[L] = d << 24 | d >>> 8, p[L] = d << 16 | d >>> 16, D[L] = d << 8 | d >>> 24, g[L] = d;
            var d = a * 16843009 ^ x * 65537 ^ n * 257 ^ L * 16843008;
            w[q] = d << 24 | d >>> 8, F[q] = d << 16 | d >>> 16, R[q] = d << 8 | d >>> 24, _[q] = d, L ? (L = n ^ C[C[C[a ^ n]]], N ^= C[C[N]]) : L = N = 1;
          }
        })();
        var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], l = b.AES = A.extend({
          _doReset: function() {
            var C;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var S = this._keyPriorReset = this._key, L = S.words, N = S.sigBytes / 4, q = this._nRounds = N + 6, n = (q + 1) * 4, x = this._keySchedule = [], a = 0; a < n; a++)
                a < N ? x[a] = L[a] : (C = x[a - 1], a % N ? N > 6 && a % N == 4 && (C = s[C >>> 24] << 24 | s[C >>> 16 & 255] << 16 | s[C >>> 8 & 255] << 8 | s[C & 255]) : (C = C << 8 | C >>> 24, C = s[C >>> 24] << 24 | s[C >>> 16 & 255] << 16 | s[C >>> 8 & 255] << 8 | s[C & 255], C ^= H[a / N | 0] << 24), x[a] = x[a - N] ^ C);
              for (var d = this._invKeySchedule = [], v = 0; v < n; v++) {
                var a = n - v;
                if (v % 4)
                  var C = x[a];
                else
                  var C = x[a - 4];
                v < 4 || a <= 4 ? d[v] = C : d[v] = w[s[C >>> 24]] ^ F[s[C >>> 16 & 255]] ^ R[s[C >>> 8 & 255]] ^ _[s[C & 255]];
              }
            }
          },
          encryptBlock: function(C, S) {
            this._doCryptBlock(C, S, this._keySchedule, h, p, D, g, s);
          },
          decryptBlock: function(C, S) {
            var L = C[S + 1];
            C[S + 1] = C[S + 3], C[S + 3] = L, this._doCryptBlock(C, S, this._invKeySchedule, w, F, R, _, m);
            var L = C[S + 1];
            C[S + 1] = C[S + 3], C[S + 3] = L;
          },
          _doCryptBlock: function(C, S, L, N, q, n, x, a) {
            for (var d = this._nRounds, v = C[S] ^ L[0], E = C[S + 1] ^ L[1], k = C[S + 2] ^ L[2], y = C[S + 3] ^ L[3], I = 4, U = 1; U < d; U++) {
              var P = N[v >>> 24] ^ q[E >>> 16 & 255] ^ n[k >>> 8 & 255] ^ x[y & 255] ^ L[I++], W = N[E >>> 24] ^ q[k >>> 16 & 255] ^ n[y >>> 8 & 255] ^ x[v & 255] ^ L[I++], Q = N[k >>> 24] ^ q[y >>> 16 & 255] ^ n[v >>> 8 & 255] ^ x[E & 255] ^ L[I++], O = N[y >>> 24] ^ q[v >>> 16 & 255] ^ n[E >>> 8 & 255] ^ x[k & 255] ^ L[I++];
              v = P, E = W, k = Q, y = O;
            }
            var P = (a[v >>> 24] << 24 | a[E >>> 16 & 255] << 16 | a[k >>> 8 & 255] << 8 | a[y & 255]) ^ L[I++], W = (a[E >>> 24] << 24 | a[k >>> 16 & 255] << 16 | a[y >>> 8 & 255] << 8 | a[v & 255]) ^ L[I++], Q = (a[k >>> 24] << 24 | a[y >>> 16 & 255] << 16 | a[v >>> 8 & 255] << 8 | a[E & 255]) ^ L[I++], O = (a[y >>> 24] << 24 | a[v >>> 16 & 255] << 16 | a[E >>> 8 & 255] << 8 | a[k & 255]) ^ L[I++];
            C[S] = P, C[S + 1] = W, C[S + 2] = Q, C[S + 3] = O;
          },
          keySize: 256 / 32
        });
        i.AES = A._createHelper(l);
      }(), o.AES;
    });
  }(xt)), xt.exports;
}
var ft = { exports: {} }, dr;
function zn() {
  return dr || (dr = 1, function(u, r) {
    (function(o, i, f) {
      u.exports = i(t0(), te(), re(), Y0(), h0());
    })($, function(o) {
      return function() {
        var i = o, f = i.lib, A = f.WordArray, b = f.BlockCipher, s = i.algo, m = [
          57,
          49,
          41,
          33,
          25,
          17,
          9,
          1,
          58,
          50,
          42,
          34,
          26,
          18,
          10,
          2,
          59,
          51,
          43,
          35,
          27,
          19,
          11,
          3,
          60,
          52,
          44,
          36,
          63,
          55,
          47,
          39,
          31,
          23,
          15,
          7,
          62,
          54,
          46,
          38,
          30,
          22,
          14,
          6,
          61,
          53,
          45,
          37,
          29,
          21,
          13,
          5,
          28,
          20,
          12,
          4
        ], h = [
          14,
          17,
          11,
          24,
          1,
          5,
          3,
          28,
          15,
          6,
          21,
          10,
          23,
          19,
          12,
          4,
          26,
          8,
          16,
          7,
          27,
          20,
          13,
          2,
          41,
          52,
          31,
          37,
          47,
          55,
          30,
          40,
          51,
          45,
          33,
          48,
          44,
          49,
          39,
          56,
          34,
          53,
          46,
          42,
          50,
          36,
          29,
          32
        ], p = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], D = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
          }
        ], g = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], w = s.DES = b.extend({
          _doReset: function() {
            for (var H = this._key, l = H.words, C = [], S = 0; S < 56; S++) {
              var L = m[S] - 1;
              C[S] = l[L >>> 5] >>> 31 - L % 32 & 1;
            }
            for (var N = this._subKeys = [], q = 0; q < 16; q++) {
              for (var n = N[q] = [], x = p[q], S = 0; S < 24; S++)
                n[S / 6 | 0] |= C[(h[S] - 1 + x) % 28] << 31 - S % 6, n[4 + (S / 6 | 0)] |= C[28 + (h[S + 24] - 1 + x) % 28] << 31 - S % 6;
              n[0] = n[0] << 1 | n[0] >>> 31;
              for (var S = 1; S < 7; S++)
                n[S] = n[S] >>> (S - 1) * 4 + 3;
              n[7] = n[7] << 5 | n[7] >>> 27;
            }
            for (var a = this._invSubKeys = [], S = 0; S < 16; S++)
              a[S] = N[15 - S];
          },
          encryptBlock: function(H, l) {
            this._doCryptBlock(H, l, this._subKeys);
          },
          decryptBlock: function(H, l) {
            this._doCryptBlock(H, l, this._invSubKeys);
          },
          _doCryptBlock: function(H, l, C) {
            this._lBlock = H[l], this._rBlock = H[l + 1], F.call(this, 4, 252645135), F.call(this, 16, 65535), R.call(this, 2, 858993459), R.call(this, 8, 16711935), F.call(this, 1, 1431655765);
            for (var S = 0; S < 16; S++) {
              for (var L = C[S], N = this._lBlock, q = this._rBlock, n = 0, x = 0; x < 8; x++)
                n |= D[x][((q ^ L[x]) & g[x]) >>> 0];
              this._lBlock = q, this._rBlock = N ^ n;
            }
            var a = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = a, F.call(this, 1, 1431655765), R.call(this, 8, 16711935), R.call(this, 2, 858993459), F.call(this, 16, 65535), F.call(this, 4, 252645135), H[l] = this._lBlock, H[l + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function F(H, l) {
          var C = (this._lBlock >>> H ^ this._rBlock) & l;
          this._rBlock ^= C, this._lBlock ^= C << H;
        }
        function R(H, l) {
          var C = (this._rBlock >>> H ^ this._lBlock) & l;
          this._lBlock ^= C, this._rBlock ^= C << H;
        }
        i.DES = b._createHelper(w);
        var _ = s.TripleDES = b.extend({
          _doReset: function() {
            var H = this._key, l = H.words;
            if (l.length !== 2 && l.length !== 4 && l.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var C = l.slice(0, 2), S = l.length < 4 ? l.slice(0, 2) : l.slice(2, 4), L = l.length < 6 ? l.slice(0, 2) : l.slice(4, 6);
            this._des1 = w.createEncryptor(A.create(C)), this._des2 = w.createEncryptor(A.create(S)), this._des3 = w.createEncryptor(A.create(L));
          },
          encryptBlock: function(H, l) {
            this._des1.encryptBlock(H, l), this._des2.decryptBlock(H, l), this._des3.encryptBlock(H, l);
          },
          decryptBlock: function(H, l) {
            this._des3.decryptBlock(H, l), this._des2.encryptBlock(H, l), this._des1.decryptBlock(H, l);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        i.TripleDES = b._createHelper(_);
      }(), o.TripleDES;
    });
  }(ft)), ft.exports;
}
var ut = { exports: {} }, pr;
function Mn() {
  return pr || (pr = 1, function(u, r) {
    (function(o, i, f) {
      u.exports = i(t0(), te(), re(), Y0(), h0());
    })($, function(o) {
      return function() {
        var i = o, f = i.lib, A = f.StreamCipher, b = i.algo, s = b.RC4 = A.extend({
          _doReset: function() {
            for (var p = this._key, D = p.words, g = p.sigBytes, w = this._S = [], F = 0; F < 256; F++)
              w[F] = F;
            for (var F = 0, R = 0; F < 256; F++) {
              var _ = F % g, H = D[_ >>> 2] >>> 24 - _ % 4 * 8 & 255;
              R = (R + w[F] + H) % 256;
              var l = w[F];
              w[F] = w[R], w[R] = l;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(p, D) {
            p[D] ^= m.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function m() {
          for (var p = this._S, D = this._i, g = this._j, w = 0, F = 0; F < 4; F++) {
            D = (D + 1) % 256, g = (g + p[D]) % 256;
            var R = p[D];
            p[D] = p[g], p[g] = R, w |= p[(p[D] + p[g]) % 256] << 24 - F * 8;
          }
          return this._i = D, this._j = g, w;
        }
        i.RC4 = A._createHelper(s);
        var h = b.RC4Drop = s.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: s.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            s._doReset.call(this);
            for (var p = this.cfg.drop; p > 0; p--)
              m.call(this);
          }
        });
        i.RC4Drop = A._createHelper(h);
      }(), o.RC4;
    });
  }(ut)), ut.exports;
}
var lt = { exports: {} }, vr;
function Wn() {
  return vr || (vr = 1, function(u, r) {
    (function(o, i, f) {
      u.exports = i(t0(), te(), re(), Y0(), h0());
    })($, function(o) {
      return function() {
        var i = o, f = i.lib, A = f.StreamCipher, b = i.algo, s = [], m = [], h = [], p = b.Rabbit = A.extend({
          _doReset: function() {
            for (var g = this._key.words, w = this.cfg.iv, F = 0; F < 4; F++)
              g[F] = (g[F] << 8 | g[F] >>> 24) & 16711935 | (g[F] << 24 | g[F] >>> 8) & 4278255360;
            var R = this._X = [
              g[0],
              g[3] << 16 | g[2] >>> 16,
              g[1],
              g[0] << 16 | g[3] >>> 16,
              g[2],
              g[1] << 16 | g[0] >>> 16,
              g[3],
              g[2] << 16 | g[1] >>> 16
            ], _ = this._C = [
              g[2] << 16 | g[2] >>> 16,
              g[0] & 4294901760 | g[1] & 65535,
              g[3] << 16 | g[3] >>> 16,
              g[1] & 4294901760 | g[2] & 65535,
              g[0] << 16 | g[0] >>> 16,
              g[2] & 4294901760 | g[3] & 65535,
              g[1] << 16 | g[1] >>> 16,
              g[3] & 4294901760 | g[0] & 65535
            ];
            this._b = 0;
            for (var F = 0; F < 4; F++)
              D.call(this);
            for (var F = 0; F < 8; F++)
              _[F] ^= R[F + 4 & 7];
            if (w) {
              var H = w.words, l = H[0], C = H[1], S = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360, L = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360, N = S >>> 16 | L & 4294901760, q = L << 16 | S & 65535;
              _[0] ^= S, _[1] ^= N, _[2] ^= L, _[3] ^= q, _[4] ^= S, _[5] ^= N, _[6] ^= L, _[7] ^= q;
              for (var F = 0; F < 4; F++)
                D.call(this);
            }
          },
          _doProcessBlock: function(g, w) {
            var F = this._X;
            D.call(this), s[0] = F[0] ^ F[5] >>> 16 ^ F[3] << 16, s[1] = F[2] ^ F[7] >>> 16 ^ F[5] << 16, s[2] = F[4] ^ F[1] >>> 16 ^ F[7] << 16, s[3] = F[6] ^ F[3] >>> 16 ^ F[1] << 16;
            for (var R = 0; R < 4; R++)
              s[R] = (s[R] << 8 | s[R] >>> 24) & 16711935 | (s[R] << 24 | s[R] >>> 8) & 4278255360, g[w + R] ^= s[R];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function D() {
          for (var g = this._X, w = this._C, F = 0; F < 8; F++)
            m[F] = w[F];
          w[0] = w[0] + 1295307597 + this._b | 0, w[1] = w[1] + 3545052371 + (w[0] >>> 0 < m[0] >>> 0 ? 1 : 0) | 0, w[2] = w[2] + 886263092 + (w[1] >>> 0 < m[1] >>> 0 ? 1 : 0) | 0, w[3] = w[3] + 1295307597 + (w[2] >>> 0 < m[2] >>> 0 ? 1 : 0) | 0, w[4] = w[4] + 3545052371 + (w[3] >>> 0 < m[3] >>> 0 ? 1 : 0) | 0, w[5] = w[5] + 886263092 + (w[4] >>> 0 < m[4] >>> 0 ? 1 : 0) | 0, w[6] = w[6] + 1295307597 + (w[5] >>> 0 < m[5] >>> 0 ? 1 : 0) | 0, w[7] = w[7] + 3545052371 + (w[6] >>> 0 < m[6] >>> 0 ? 1 : 0) | 0, this._b = w[7] >>> 0 < m[7] >>> 0 ? 1 : 0;
          for (var F = 0; F < 8; F++) {
            var R = g[F] + w[F], _ = R & 65535, H = R >>> 16, l = ((_ * _ >>> 17) + _ * H >>> 15) + H * H, C = ((R & 4294901760) * R | 0) + ((R & 65535) * R | 0);
            h[F] = l ^ C;
          }
          g[0] = h[0] + (h[7] << 16 | h[7] >>> 16) + (h[6] << 16 | h[6] >>> 16) | 0, g[1] = h[1] + (h[0] << 8 | h[0] >>> 24) + h[7] | 0, g[2] = h[2] + (h[1] << 16 | h[1] >>> 16) + (h[0] << 16 | h[0] >>> 16) | 0, g[3] = h[3] + (h[2] << 8 | h[2] >>> 24) + h[1] | 0, g[4] = h[4] + (h[3] << 16 | h[3] >>> 16) + (h[2] << 16 | h[2] >>> 16) | 0, g[5] = h[5] + (h[4] << 8 | h[4] >>> 24) + h[3] | 0, g[6] = h[6] + (h[5] << 16 | h[5] >>> 16) + (h[4] << 16 | h[4] >>> 16) | 0, g[7] = h[7] + (h[6] << 8 | h[6] >>> 24) + h[5] | 0;
        }
        i.Rabbit = A._createHelper(p);
      }(), o.Rabbit;
    });
  }(lt)), lt.exports;
}
var ht = { exports: {} }, Br;
function Gn() {
  return Br || (Br = 1, function(u, r) {
    (function(o, i, f) {
      u.exports = i(t0(), te(), re(), Y0(), h0());
    })($, function(o) {
      return function() {
        var i = o, f = i.lib, A = f.StreamCipher, b = i.algo, s = [], m = [], h = [], p = b.RabbitLegacy = A.extend({
          _doReset: function() {
            var g = this._key.words, w = this.cfg.iv, F = this._X = [
              g[0],
              g[3] << 16 | g[2] >>> 16,
              g[1],
              g[0] << 16 | g[3] >>> 16,
              g[2],
              g[1] << 16 | g[0] >>> 16,
              g[3],
              g[2] << 16 | g[1] >>> 16
            ], R = this._C = [
              g[2] << 16 | g[2] >>> 16,
              g[0] & 4294901760 | g[1] & 65535,
              g[3] << 16 | g[3] >>> 16,
              g[1] & 4294901760 | g[2] & 65535,
              g[0] << 16 | g[0] >>> 16,
              g[2] & 4294901760 | g[3] & 65535,
              g[1] << 16 | g[1] >>> 16,
              g[3] & 4294901760 | g[0] & 65535
            ];
            this._b = 0;
            for (var _ = 0; _ < 4; _++)
              D.call(this);
            for (var _ = 0; _ < 8; _++)
              R[_] ^= F[_ + 4 & 7];
            if (w) {
              var H = w.words, l = H[0], C = H[1], S = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360, L = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360, N = S >>> 16 | L & 4294901760, q = L << 16 | S & 65535;
              R[0] ^= S, R[1] ^= N, R[2] ^= L, R[3] ^= q, R[4] ^= S, R[5] ^= N, R[6] ^= L, R[7] ^= q;
              for (var _ = 0; _ < 4; _++)
                D.call(this);
            }
          },
          _doProcessBlock: function(g, w) {
            var F = this._X;
            D.call(this), s[0] = F[0] ^ F[5] >>> 16 ^ F[3] << 16, s[1] = F[2] ^ F[7] >>> 16 ^ F[5] << 16, s[2] = F[4] ^ F[1] >>> 16 ^ F[7] << 16, s[3] = F[6] ^ F[3] >>> 16 ^ F[1] << 16;
            for (var R = 0; R < 4; R++)
              s[R] = (s[R] << 8 | s[R] >>> 24) & 16711935 | (s[R] << 24 | s[R] >>> 8) & 4278255360, g[w + R] ^= s[R];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function D() {
          for (var g = this._X, w = this._C, F = 0; F < 8; F++)
            m[F] = w[F];
          w[0] = w[0] + 1295307597 + this._b | 0, w[1] = w[1] + 3545052371 + (w[0] >>> 0 < m[0] >>> 0 ? 1 : 0) | 0, w[2] = w[2] + 886263092 + (w[1] >>> 0 < m[1] >>> 0 ? 1 : 0) | 0, w[3] = w[3] + 1295307597 + (w[2] >>> 0 < m[2] >>> 0 ? 1 : 0) | 0, w[4] = w[4] + 3545052371 + (w[3] >>> 0 < m[3] >>> 0 ? 1 : 0) | 0, w[5] = w[5] + 886263092 + (w[4] >>> 0 < m[4] >>> 0 ? 1 : 0) | 0, w[6] = w[6] + 1295307597 + (w[5] >>> 0 < m[5] >>> 0 ? 1 : 0) | 0, w[7] = w[7] + 3545052371 + (w[6] >>> 0 < m[6] >>> 0 ? 1 : 0) | 0, this._b = w[7] >>> 0 < m[7] >>> 0 ? 1 : 0;
          for (var F = 0; F < 8; F++) {
            var R = g[F] + w[F], _ = R & 65535, H = R >>> 16, l = ((_ * _ >>> 17) + _ * H >>> 15) + H * H, C = ((R & 4294901760) * R | 0) + ((R & 65535) * R | 0);
            h[F] = l ^ C;
          }
          g[0] = h[0] + (h[7] << 16 | h[7] >>> 16) + (h[6] << 16 | h[6] >>> 16) | 0, g[1] = h[1] + (h[0] << 8 | h[0] >>> 24) + h[7] | 0, g[2] = h[2] + (h[1] << 16 | h[1] >>> 16) + (h[0] << 16 | h[0] >>> 16) | 0, g[3] = h[3] + (h[2] << 8 | h[2] >>> 24) + h[1] | 0, g[4] = h[4] + (h[3] << 16 | h[3] >>> 16) + (h[2] << 16 | h[2] >>> 16) | 0, g[5] = h[5] + (h[4] << 8 | h[4] >>> 24) + h[3] | 0, g[6] = h[6] + (h[5] << 16 | h[5] >>> 16) + (h[4] << 16 | h[4] >>> 16) | 0, g[7] = h[7] + (h[6] << 8 | h[6] >>> 24) + h[5] | 0;
        }
        i.RabbitLegacy = A._createHelper(p);
      }(), o.RabbitLegacy;
    });
  }(ht)), ht.exports;
}
var dt = { exports: {} }, Er;
function Kn() {
  return Er || (Er = 1, function(u, r) {
    (function(o, i, f) {
      u.exports = i(t0(), te(), re(), Y0(), h0());
    })($, function(o) {
      return function() {
        var i = o, f = i.lib, A = f.BlockCipher, b = i.algo;
        const s = 16, m = [
          608135816,
          2242054355,
          320440878,
          57701188,
          2752067618,
          698298832,
          137296536,
          3964562569,
          1160258022,
          953160567,
          3193202383,
          887688300,
          3232508343,
          3380367581,
          1065670069,
          3041331479,
          2450970073,
          2306472731
        ], h = [
          [
            3509652390,
            2564797868,
            805139163,
            3491422135,
            3101798381,
            1780907670,
            3128725573,
            4046225305,
            614570311,
            3012652279,
            134345442,
            2240740374,
            1667834072,
            1901547113,
            2757295779,
            4103290238,
            227898511,
            1921955416,
            1904987480,
            2182433518,
            2069144605,
            3260701109,
            2620446009,
            720527379,
            3318853667,
            677414384,
            3393288472,
            3101374703,
            2390351024,
            1614419982,
            1822297739,
            2954791486,
            3608508353,
            3174124327,
            2024746970,
            1432378464,
            3864339955,
            2857741204,
            1464375394,
            1676153920,
            1439316330,
            715854006,
            3033291828,
            289532110,
            2706671279,
            2087905683,
            3018724369,
            1668267050,
            732546397,
            1947742710,
            3462151702,
            2609353502,
            2950085171,
            1814351708,
            2050118529,
            680887927,
            999245976,
            1800124847,
            3300911131,
            1713906067,
            1641548236,
            4213287313,
            1216130144,
            1575780402,
            4018429277,
            3917837745,
            3693486850,
            3949271944,
            596196993,
            3549867205,
            258830323,
            2213823033,
            772490370,
            2760122372,
            1774776394,
            2652871518,
            566650946,
            4142492826,
            1728879713,
            2882767088,
            1783734482,
            3629395816,
            2517608232,
            2874225571,
            1861159788,
            326777828,
            3124490320,
            2130389656,
            2716951837,
            967770486,
            1724537150,
            2185432712,
            2364442137,
            1164943284,
            2105845187,
            998989502,
            3765401048,
            2244026483,
            1075463327,
            1455516326,
            1322494562,
            910128902,
            469688178,
            1117454909,
            936433444,
            3490320968,
            3675253459,
            1240580251,
            122909385,
            2157517691,
            634681816,
            4142456567,
            3825094682,
            3061402683,
            2540495037,
            79693498,
            3249098678,
            1084186820,
            1583128258,
            426386531,
            1761308591,
            1047286709,
            322548459,
            995290223,
            1845252383,
            2603652396,
            3431023940,
            2942221577,
            3202600964,
            3727903485,
            1712269319,
            422464435,
            3234572375,
            1170764815,
            3523960633,
            3117677531,
            1434042557,
            442511882,
            3600875718,
            1076654713,
            1738483198,
            4213154764,
            2393238008,
            3677496056,
            1014306527,
            4251020053,
            793779912,
            2902807211,
            842905082,
            4246964064,
            1395751752,
            1040244610,
            2656851899,
            3396308128,
            445077038,
            3742853595,
            3577915638,
            679411651,
            2892444358,
            2354009459,
            1767581616,
            3150600392,
            3791627101,
            3102740896,
            284835224,
            4246832056,
            1258075500,
            768725851,
            2589189241,
            3069724005,
            3532540348,
            1274779536,
            3789419226,
            2764799539,
            1660621633,
            3471099624,
            4011903706,
            913787905,
            3497959166,
            737222580,
            2514213453,
            2928710040,
            3937242737,
            1804850592,
            3499020752,
            2949064160,
            2386320175,
            2390070455,
            2415321851,
            4061277028,
            2290661394,
            2416832540,
            1336762016,
            1754252060,
            3520065937,
            3014181293,
            791618072,
            3188594551,
            3933548030,
            2332172193,
            3852520463,
            3043980520,
            413987798,
            3465142937,
            3030929376,
            4245938359,
            2093235073,
            3534596313,
            375366246,
            2157278981,
            2479649556,
            555357303,
            3870105701,
            2008414854,
            3344188149,
            4221384143,
            3956125452,
            2067696032,
            3594591187,
            2921233993,
            2428461,
            544322398,
            577241275,
            1471733935,
            610547355,
            4027169054,
            1432588573,
            1507829418,
            2025931657,
            3646575487,
            545086370,
            48609733,
            2200306550,
            1653985193,
            298326376,
            1316178497,
            3007786442,
            2064951626,
            458293330,
            2589141269,
            3591329599,
            3164325604,
            727753846,
            2179363840,
            146436021,
            1461446943,
            4069977195,
            705550613,
            3059967265,
            3887724982,
            4281599278,
            3313849956,
            1404054877,
            2845806497,
            146425753,
            1854211946
          ],
          [
            1266315497,
            3048417604,
            3681880366,
            3289982499,
            290971e4,
            1235738493,
            2632868024,
            2414719590,
            3970600049,
            1771706367,
            1449415276,
            3266420449,
            422970021,
            1963543593,
            2690192192,
            3826793022,
            1062508698,
            1531092325,
            1804592342,
            2583117782,
            2714934279,
            4024971509,
            1294809318,
            4028980673,
            1289560198,
            2221992742,
            1669523910,
            35572830,
            157838143,
            1052438473,
            1016535060,
            1802137761,
            1753167236,
            1386275462,
            3080475397,
            2857371447,
            1040679964,
            2145300060,
            2390574316,
            1461121720,
            2956646967,
            4031777805,
            4028374788,
            33600511,
            2920084762,
            1018524850,
            629373528,
            3691585981,
            3515945977,
            2091462646,
            2486323059,
            586499841,
            988145025,
            935516892,
            3367335476,
            2599673255,
            2839830854,
            265290510,
            3972581182,
            2759138881,
            3795373465,
            1005194799,
            847297441,
            406762289,
            1314163512,
            1332590856,
            1866599683,
            4127851711,
            750260880,
            613907577,
            1450815602,
            3165620655,
            3734664991,
            3650291728,
            3012275730,
            3704569646,
            1427272223,
            778793252,
            1343938022,
            2676280711,
            2052605720,
            1946737175,
            3164576444,
            3914038668,
            3967478842,
            3682934266,
            1661551462,
            3294938066,
            4011595847,
            840292616,
            3712170807,
            616741398,
            312560963,
            711312465,
            1351876610,
            322626781,
            1910503582,
            271666773,
            2175563734,
            1594956187,
            70604529,
            3617834859,
            1007753275,
            1495573769,
            4069517037,
            2549218298,
            2663038764,
            504708206,
            2263041392,
            3941167025,
            2249088522,
            1514023603,
            1998579484,
            1312622330,
            694541497,
            2582060303,
            2151582166,
            1382467621,
            776784248,
            2618340202,
            3323268794,
            2497899128,
            2784771155,
            503983604,
            4076293799,
            907881277,
            423175695,
            432175456,
            1378068232,
            4145222326,
            3954048622,
            3938656102,
            3820766613,
            2793130115,
            2977904593,
            26017576,
            3274890735,
            3194772133,
            1700274565,
            1756076034,
            4006520079,
            3677328699,
            720338349,
            1533947780,
            354530856,
            688349552,
            3973924725,
            1637815568,
            332179504,
            3949051286,
            53804574,
            2852348879,
            3044236432,
            1282449977,
            3583942155,
            3416972820,
            4006381244,
            1617046695,
            2628476075,
            3002303598,
            1686838959,
            431878346,
            2686675385,
            1700445008,
            1080580658,
            1009431731,
            832498133,
            3223435511,
            2605976345,
            2271191193,
            2516031870,
            1648197032,
            4164389018,
            2548247927,
            300782431,
            375919233,
            238389289,
            3353747414,
            2531188641,
            2019080857,
            1475708069,
            455242339,
            2609103871,
            448939670,
            3451063019,
            1395535956,
            2413381860,
            1841049896,
            1491858159,
            885456874,
            4264095073,
            4001119347,
            1565136089,
            3898914787,
            1108368660,
            540939232,
            1173283510,
            2745871338,
            3681308437,
            4207628240,
            3343053890,
            4016749493,
            1699691293,
            1103962373,
            3625875870,
            2256883143,
            3830138730,
            1031889488,
            3479347698,
            1535977030,
            4236805024,
            3251091107,
            2132092099,
            1774941330,
            1199868427,
            1452454533,
            157007616,
            2904115357,
            342012276,
            595725824,
            1480756522,
            206960106,
            497939518,
            591360097,
            863170706,
            2375253569,
            3596610801,
            1814182875,
            2094937945,
            3421402208,
            1082520231,
            3463918190,
            2785509508,
            435703966,
            3908032597,
            1641649973,
            2842273706,
            3305899714,
            1510255612,
            2148256476,
            2655287854,
            3276092548,
            4258621189,
            236887753,
            3681803219,
            274041037,
            1734335097,
            3815195456,
            3317970021,
            1899903192,
            1026095262,
            4050517792,
            356393447,
            2410691914,
            3873677099,
            3682840055
          ],
          [
            3913112168,
            2491498743,
            4132185628,
            2489919796,
            1091903735,
            1979897079,
            3170134830,
            3567386728,
            3557303409,
            857797738,
            1136121015,
            1342202287,
            507115054,
            2535736646,
            337727348,
            3213592640,
            1301675037,
            2528481711,
            1895095763,
            1721773893,
            3216771564,
            62756741,
            2142006736,
            835421444,
            2531993523,
            1442658625,
            3659876326,
            2882144922,
            676362277,
            1392781812,
            170690266,
            3921047035,
            1759253602,
            3611846912,
            1745797284,
            664899054,
            1329594018,
            3901205900,
            3045908486,
            2062866102,
            2865634940,
            3543621612,
            3464012697,
            1080764994,
            553557557,
            3656615353,
            3996768171,
            991055499,
            499776247,
            1265440854,
            648242737,
            3940784050,
            980351604,
            3713745714,
            1749149687,
            3396870395,
            4211799374,
            3640570775,
            1161844396,
            3125318951,
            1431517754,
            545492359,
            4268468663,
            3499529547,
            1437099964,
            2702547544,
            3433638243,
            2581715763,
            2787789398,
            1060185593,
            1593081372,
            2418618748,
            4260947970,
            69676912,
            2159744348,
            86519011,
            2512459080,
            3838209314,
            1220612927,
            3339683548,
            133810670,
            1090789135,
            1078426020,
            1569222167,
            845107691,
            3583754449,
            4072456591,
            1091646820,
            628848692,
            1613405280,
            3757631651,
            526609435,
            236106946,
            48312990,
            2942717905,
            3402727701,
            1797494240,
            859738849,
            992217954,
            4005476642,
            2243076622,
            3870952857,
            3732016268,
            765654824,
            3490871365,
            2511836413,
            1685915746,
            3888969200,
            1414112111,
            2273134842,
            3281911079,
            4080962846,
            172450625,
            2569994100,
            980381355,
            4109958455,
            2819808352,
            2716589560,
            2568741196,
            3681446669,
            3329971472,
            1835478071,
            660984891,
            3704678404,
            4045999559,
            3422617507,
            3040415634,
            1762651403,
            1719377915,
            3470491036,
            2693910283,
            3642056355,
            3138596744,
            1364962596,
            2073328063,
            1983633131,
            926494387,
            3423689081,
            2150032023,
            4096667949,
            1749200295,
            3328846651,
            309677260,
            2016342300,
            1779581495,
            3079819751,
            111262694,
            1274766160,
            443224088,
            298511866,
            1025883608,
            3806446537,
            1145181785,
            168956806,
            3641502830,
            3584813610,
            1689216846,
            3666258015,
            3200248200,
            1692713982,
            2646376535,
            4042768518,
            1618508792,
            1610833997,
            3523052358,
            4130873264,
            2001055236,
            3610705100,
            2202168115,
            4028541809,
            2961195399,
            1006657119,
            2006996926,
            3186142756,
            1430667929,
            3210227297,
            1314452623,
            4074634658,
            4101304120,
            2273951170,
            1399257539,
            3367210612,
            3027628629,
            1190975929,
            2062231137,
            2333990788,
            2221543033,
            2438960610,
            1181637006,
            548689776,
            2362791313,
            3372408396,
            3104550113,
            3145860560,
            296247880,
            1970579870,
            3078560182,
            3769228297,
            1714227617,
            3291629107,
            3898220290,
            166772364,
            1251581989,
            493813264,
            448347421,
            195405023,
            2709975567,
            677966185,
            3703036547,
            1463355134,
            2715995803,
            1338867538,
            1343315457,
            2802222074,
            2684532164,
            233230375,
            2599980071,
            2000651841,
            3277868038,
            1638401717,
            4028070440,
            3237316320,
            6314154,
            819756386,
            300326615,
            590932579,
            1405279636,
            3267499572,
            3150704214,
            2428286686,
            3959192993,
            3461946742,
            1862657033,
            1266418056,
            963775037,
            2089974820,
            2263052895,
            1917689273,
            448879540,
            3550394620,
            3981727096,
            150775221,
            3627908307,
            1303187396,
            508620638,
            2975983352,
            2726630617,
            1817252668,
            1876281319,
            1457606340,
            908771278,
            3720792119,
            3617206836,
            2455994898,
            1729034894,
            1080033504
          ],
          [
            976866871,
            3556439503,
            2881648439,
            1522871579,
            1555064734,
            1336096578,
            3548522304,
            2579274686,
            3574697629,
            3205460757,
            3593280638,
            3338716283,
            3079412587,
            564236357,
            2993598910,
            1781952180,
            1464380207,
            3163844217,
            3332601554,
            1699332808,
            1393555694,
            1183702653,
            3581086237,
            1288719814,
            691649499,
            2847557200,
            2895455976,
            3193889540,
            2717570544,
            1781354906,
            1676643554,
            2592534050,
            3230253752,
            1126444790,
            2770207658,
            2633158820,
            2210423226,
            2615765581,
            2414155088,
            3127139286,
            673620729,
            2805611233,
            1269405062,
            4015350505,
            3341807571,
            4149409754,
            1057255273,
            2012875353,
            2162469141,
            2276492801,
            2601117357,
            993977747,
            3918593370,
            2654263191,
            753973209,
            36408145,
            2530585658,
            25011837,
            3520020182,
            2088578344,
            530523599,
            2918365339,
            1524020338,
            1518925132,
            3760827505,
            3759777254,
            1202760957,
            3985898139,
            3906192525,
            674977740,
            4174734889,
            2031300136,
            2019492241,
            3983892565,
            4153806404,
            3822280332,
            352677332,
            2297720250,
            60907813,
            90501309,
            3286998549,
            1016092578,
            2535922412,
            2839152426,
            457141659,
            509813237,
            4120667899,
            652014361,
            1966332200,
            2975202805,
            55981186,
            2327461051,
            676427537,
            3255491064,
            2882294119,
            3433927263,
            1307055953,
            942726286,
            933058658,
            2468411793,
            3933900994,
            4215176142,
            1361170020,
            2001714738,
            2830558078,
            3274259782,
            1222529897,
            1679025792,
            2729314320,
            3714953764,
            1770335741,
            151462246,
            3013232138,
            1682292957,
            1483529935,
            471910574,
            1539241949,
            458788160,
            3436315007,
            1807016891,
            3718408830,
            978976581,
            1043663428,
            3165965781,
            1927990952,
            4200891579,
            2372276910,
            3208408903,
            3533431907,
            1412390302,
            2931980059,
            4132332400,
            1947078029,
            3881505623,
            4168226417,
            2941484381,
            1077988104,
            1320477388,
            886195818,
            18198404,
            3786409e3,
            2509781533,
            112762804,
            3463356488,
            1866414978,
            891333506,
            18488651,
            661792760,
            1628790961,
            3885187036,
            3141171499,
            876946877,
            2693282273,
            1372485963,
            791857591,
            2686433993,
            3759982718,
            3167212022,
            3472953795,
            2716379847,
            445679433,
            3561995674,
            3504004811,
            3574258232,
            54117162,
            3331405415,
            2381918588,
            3769707343,
            4154350007,
            1140177722,
            4074052095,
            668550556,
            3214352940,
            367459370,
            261225585,
            2610173221,
            4209349473,
            3468074219,
            3265815641,
            314222801,
            3066103646,
            3808782860,
            282218597,
            3406013506,
            3773591054,
            379116347,
            1285071038,
            846784868,
            2669647154,
            3771962079,
            3550491691,
            2305946142,
            453669953,
            1268987020,
            3317592352,
            3279303384,
            3744833421,
            2610507566,
            3859509063,
            266596637,
            3847019092,
            517658769,
            3462560207,
            3443424879,
            370717030,
            4247526661,
            2224018117,
            4143653529,
            4112773975,
            2788324899,
            2477274417,
            1456262402,
            2901442914,
            1517677493,
            1846949527,
            2295493580,
            3734397586,
            2176403920,
            1280348187,
            1908823572,
            3871786941,
            846861322,
            1172426758,
            3287448474,
            3383383037,
            1655181056,
            3139813346,
            901632758,
            1897031941,
            2986607138,
            3066810236,
            3447102507,
            1393639104,
            373351379,
            950779232,
            625454576,
            3124240540,
            4148612726,
            2007998917,
            544563296,
            2244738638,
            2330496472,
            2058025392,
            1291430526,
            424198748,
            50039436,
            29584100,
            3605783033,
            2429876329,
            2791104160,
            1057563949,
            3255363231,
            3075367218,
            3463963227,
            1469046755,
            985887462
          ]
        ];
        var p = {
          pbox: [],
          sbox: []
        };
        function D(_, H) {
          let l = H >> 24 & 255, C = H >> 16 & 255, S = H >> 8 & 255, L = H & 255, N = _.sbox[0][l] + _.sbox[1][C];
          return N = N ^ _.sbox[2][S], N = N + _.sbox[3][L], N;
        }
        function g(_, H, l) {
          let C = H, S = l, L;
          for (let N = 0; N < s; ++N)
            C = C ^ _.pbox[N], S = D(_, C) ^ S, L = C, C = S, S = L;
          return L = C, C = S, S = L, S = S ^ _.pbox[s], C = C ^ _.pbox[s + 1], { left: C, right: S };
        }
        function w(_, H, l) {
          let C = H, S = l, L;
          for (let N = s + 1; N > 1; --N)
            C = C ^ _.pbox[N], S = D(_, C) ^ S, L = C, C = S, S = L;
          return L = C, C = S, S = L, S = S ^ _.pbox[1], C = C ^ _.pbox[0], { left: C, right: S };
        }
        function F(_, H, l) {
          for (let q = 0; q < 4; q++) {
            _.sbox[q] = [];
            for (let n = 0; n < 256; n++)
              _.sbox[q][n] = h[q][n];
          }
          let C = 0;
          for (let q = 0; q < s + 2; q++)
            _.pbox[q] = m[q] ^ H[C], C++, C >= l && (C = 0);
          let S = 0, L = 0, N = 0;
          for (let q = 0; q < s + 2; q += 2)
            N = g(_, S, L), S = N.left, L = N.right, _.pbox[q] = S, _.pbox[q + 1] = L;
          for (let q = 0; q < 4; q++)
            for (let n = 0; n < 256; n += 2)
              N = g(_, S, L), S = N.left, L = N.right, _.sbox[q][n] = S, _.sbox[q][n + 1] = L;
          return !0;
        }
        var R = b.Blowfish = A.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var _ = this._keyPriorReset = this._key, H = _.words, l = _.sigBytes / 4;
              F(p, H, l);
            }
          },
          encryptBlock: function(_, H) {
            var l = g(p, _[H], _[H + 1]);
            _[H] = l.left, _[H + 1] = l.right;
          },
          decryptBlock: function(_, H) {
            var l = w(p, _[H], _[H + 1]);
            _[H] = l.left, _[H + 1] = l.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        i.Blowfish = A._createHelper(R);
      }(), o.Blowfish;
    });
  }(dt)), dt.exports;
}
(function(u, r) {
  (function(o, i, f) {
    u.exports = i(t0(), Re(), yn(), Cn(), te(), wn(), re(), _r(), Dt(), Fn(), Sr(), Dn(), mn(), bn(), mt(), _n(), Y0(), h0(), Sn(), In(), Rn(), kn(), Tn(), Pn(), On(), Un(), Nn(), Hn(), Ln(), qn(), zn(), Mn(), Wn(), Gn(), Kn());
  })($, function(o) {
    return o;
  });
})(br);
var jn = br.exports;
const Ir = /* @__PURE__ */ sn(jn);
typeof window < "u" && (window.Buffer = Ee.Buffer);
const Qn = Ee.Buffer.alloc(32), Xn = `
account-id`, Vn = (u) => u < 0 ? (Number(u) >>> 0).toString(16) : Number(u).toString(16), gr = (u) => {
  const r = [];
  for (let o = 0; o < u.length; o += 1)
    r[o / 4 | 0] |= u[o] << 24 - 8 * (o % 4);
  return Ir.lib.WordArray.create(r, u.length);
}, Yn = (u, r) => {
  const o = [];
  return r > 0 && o.push(u >>> 24), r > 1 && o.push(u >>> 16 & 255), r > 2 && o.push(u >>> 8 & 255), r > 3 && o.push(u & 255), o;
}, Zn = (u, r) => {
  "sigBytes" in u && "words" in u && (r = u.sigBytes, u = u.words);
  let o = [], i, f = 0;
  for (; r > 0; )
    i = Yn(u[f], Math.min(4, r)), r -= i.length, o = [...o, ...i], f++;
  return o;
}, Jn = (u) => {
  const r = new Uint8Array(u), o = an.unsigned(Ee.Buffer.from(r));
  return Vn(o).padStart(8, "0");
}, gt = (u, r = "") => {
  try {
    const o = L0.from(u), i = Ir.algo.SHA224.create();
    i.update(Xn), i.update(gr(o.toUint8Array()));
    const f = Ee.Buffer.from(Qn);
    r && f.writeUInt32BE(Number(r), 0), i.update(gr(f));
    const A = i.finalize(), b = Zn(A, 28);
    return Jn(b) + A.toString();
  } catch (o) {
    throw new Error(o);
  }
}, $n = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20fill='none'%3e%3cpath%20d='M11.794%202.433A1.162%201.162%200%200%200%2011.548.12L9.174.374c-1.216.13-2.191.234-2.983.378-.816.148-1.516.35-2.165.714a6.675%206.675%200%200%200-2.53%202.506c-.37.646-.578%201.343-.732%202.157C.614%206.919.5%207.893.36%209.106l-.006.052-.233%202.318a1.162%201.162%200%201%200%202.313.232l.231-2.3c.146-1.264.249-2.15.381-2.845.13-.682.275-1.1.467-1.436a4.35%204.35%200%200%201%201.648-1.633c.338-.19.76-.331%201.443-.455.699-.127%201.59-.223%202.86-.358l2.33-.248Zm22.613-1.28a1.162%201.162%200%200%200%201.033%201.28l2.33.248c1.27.135%202.16.231%202.859.358.684.124%201.105.265%201.443.455a4.35%204.35%200%200%201%201.648%201.633c.193.335.337.754.467%201.436.132.695.235%201.581.38%202.844l.232%202.302a1.162%201.162%200%201%200%202.313-.233l-.233-2.318-.006-.052c-.14-1.214-.252-2.187-.402-2.977-.155-.814-.364-1.511-.734-2.157a6.675%206.675%200%200%200-2.529-2.506c-.65-.364-1.349-.566-2.165-.714-.792-.144-1.767-.248-2.983-.378L35.686.121a1.162%201.162%200%200%200-1.279%201.033Zm0%2044.923a1.162%201.162%200%200%201%201.033-1.28l2.33-.248c1.27-.135%202.16-.23%202.859-.357.684-.124%201.105-.266%201.443-.455a4.35%204.35%200%200%200%201.648-1.633c.193-.336.337-.755.467-1.437.132-.695.235-1.581.38-2.844l.232-2.301a1.162%201.162%200%201%201%202.313.233l-.233%202.317-.006.053c-.14%201.213-.252%202.186-.402%202.976-.155.814-.364%201.512-.734%202.158a6.675%206.675%200%200%201-2.529%202.506c-.65.364-1.349.566-2.165.714-.792.143-1.767.247-2.983.377l-2.374.253a1.162%201.162%200%200%201-1.279-1.032Zm-21.58%200a1.162%201.162%200%200%200-1.033-1.28l-2.33-.248c-1.27-.135-2.16-.23-2.859-.357-.684-.124-1.105-.266-1.443-.455a4.35%204.35%200%200%201-1.648-1.633c-.192-.336-.337-.755-.467-1.437-.132-.695-.235-1.581-.38-2.844l-.232-2.301a1.162%201.162%200%200%200-2.313.233l.233%202.317.006.053c.14%201.213.252%202.186.403%202.976.154.814.363%201.512.733%202.158a6.674%206.674%200%200%200%202.529%202.506c.65.364%201.349.566%202.165.714.792.143%201.767.247%202.983.377l2.374.253a1.162%201.162%200%200%200%201.279-1.032Zm-.636-31.422a1%201%200%200%200-1%201v16.264a1%201%200%200%200%201%201h3.166a1%201%200%200%200%201-1V15.654a1%201%200%200%200-1-1h-3.166Zm8.56%200a1%201%200%200%200-1%201v16.264a1%201%200%200%200%201%201h7.637c2%200%203.774-.374%205.322-1.122%201.548-.748%202.749-1.809%203.601-3.183.852-1.374%201.279-2.983%201.279-4.827%200-1.844-.427-3.453-1.279-4.827-.852-1.374-2.053-2.435-3.6-3.183-1.549-.748-3.323-1.122-5.323-1.122H20.75Zm11.185%2012.811c-.94.887-2.192%201.33-3.757%201.33h-2.962a.3.3%200%200%201-.3-.3v-9.419a.3.3%200%200%201%20.3-.3h2.962c1.565%200%202.818.444%203.757%201.331.957.887%201.435%202.114%201.435%203.68%200%201.565-.478%202.79-1.435%203.678Z'%20fill='url(%23a)'/%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='11.415'%20y1='15.756'%20x2='27.548'%20y2='39.206'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23CC5CDC'/%3e%3cstop%20offset='.245'%20stop-color='%237B66FF'/%3e%3cstop%20offset='.521'%20stop-color='%231F8AF0'/%3e%3cstop%20offset='.76'%20stop-color='%2300D1FF'/%3e%3cstop%20offset='1'%20stop-color='%233DEDD7'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", bt = 4e3, W0 = (u) => {
  if (typeof globalThis.Buffer < "u")
    return globalThis.Buffer.from(u, "base64").buffer;
  if (typeof globalThis.atob < "u")
    return Uint8Array.from(globalThis.atob(u), (r) => r.charCodeAt(0)).buffer;
  throw Error("Could not decode base64 string");
}, Be = (u) => {
  if (typeof globalThis.Buffer < "u")
    return globalThis.Buffer.from(u).toString("base64");
  if (typeof globalThis.btoa < "u")
    return btoa(String.fromCharCode(...new Uint8Array(u)));
  throw Error("Could not encode base64 string");
};
var oe = function(u, r, o, i, f) {
  if (typeof r == "function" ? u !== r || !f : !r.has(u)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r.set(u, o), o;
}, u0 = function(u, r, o, i) {
  if (o === "a" && !i) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? u !== r || !i : !r.has(u)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return o === "m" ? i : o === "a" ? i.call(u) : i ? i.value : r.get(u);
}, B0, M0, se, we;
class V0 extends Error {
  constructor(r) {
    super(r.message), Object.setPrototypeOf(this, V0.prototype), this.code = r.code, this.data = r.data;
  }
}
const Ar = (u) => new V0({
  code: bt,
  message: u instanceof Error ? u.message : "Network error"
}), ae = (u) => {
  if ("error" in u)
    throw new V0(u.error);
  if ("result" in u)
    return u.result;
  throw new V0({
    code: bt,
    message: "Invalid response"
  });
};
class ei {
  constructor(r) {
    B0.set(this, void 0), M0.set(this, void 0), se.set(this, void 0), we.set(this, void 0), oe(this, B0, Object.assign({ autoCloseTransportChannel: !0, closeTransportChannelAfter: 200, crypto: globalThis.crypto }, r));
  }
  get transport() {
    return u0(this, B0, "f").transport;
  }
  async openChannel() {
    if (clearTimeout(u0(this, we, "f")), u0(this, se, "f") && await u0(this, se, "f"), u0(this, M0, "f") && !u0(this, M0, "f").closed)
      return u0(this, M0, "f");
    const r = u0(this, B0, "f").transport.establishChannel();
    return oe(this, se, r.then(() => {
    }).catch(() => {
    })), oe(this, M0, void 0), oe(this, M0, await r.catch((o) => {
      throw Ar(o);
    })), oe(this, se, void 0), u0(this, M0, "f");
  }
  async closeChannel() {
    var r;
    await ((r = u0(this, M0, "f")) === null || r === void 0 ? void 0 : r.close());
  }
  async transformRequest(r) {
    return u0(this, B0, "f").derivationOrigin ? Object.assign(Object.assign({}, r), { params: Object.assign(Object.assign({}, r.params), { icrc95DerivationOrigin: u0(this, B0, "f").derivationOrigin }) }) : r;
  }
  async sendRequest(r) {
    const o = await this.openChannel();
    return new Promise(async (i, f) => {
      const A = o.addEventListener("response", async (s) => {
        s.id === r.id && (A(), b(), i(s), u0(this, B0, "f").autoCloseTransportChannel && oe(this, we, setTimeout(() => {
          o.closed || o.close();
        }, u0(this, B0, "f").closeTransportChannelAfter)));
      }), b = o.addEventListener("close", () => {
        A(), b(), f(new V0({
          code: bt,
          message: "Channel was closed before a response was received"
        }));
      });
      try {
        await o.send(await this.transformRequest(r));
      } catch (s) {
        A(), b(), f(Ar(s));
      }
    });
  }
  async supportedStandards() {
    const r = await this.sendRequest({
      id: u0(this, B0, "f").crypto.randomUUID(),
      jsonrpc: "2.0",
      method: "icrc25_supported_standards"
    });
    return ae(r).supportedStandards;
  }
  async requestPermissions(r) {
    const o = await this.sendRequest({
      id: u0(this, B0, "f").crypto.randomUUID(),
      jsonrpc: "2.0",
      method: "icrc25_request_permissions",
      params: { scopes: r }
    });
    return ae(o).scopes;
  }
  async permissions() {
    const r = await this.sendRequest({
      id: u0(this, B0, "f").crypto.randomUUID(),
      jsonrpc: "2.0",
      method: "icrc25_permissions"
    });
    return ae(r).scopes;
  }
  async accounts() {
    const r = await this.sendRequest({
      id: u0(this, B0, "f").crypto.randomUUID(),
      jsonrpc: "2.0",
      method: "icrc27_accounts"
    });
    return ae(r).accounts.map(({ owner: i, subaccount: f }) => ({
      owner: L0.fromText(i),
      subaccount: f === void 0 ? void 0 : W0(f)
    }));
  }
  async delegation(r) {
    var o;
    const i = await this.sendRequest({
      id: u0(this, B0, "f").crypto.randomUUID(),
      jsonrpc: "2.0",
      method: "icrc34_delegation",
      params: {
        publicKey: Be(r.publicKey),
        targets: (o = r.targets) === null || o === void 0 ? void 0 : o.map((A) => A.toText()),
        maxTimeToLive: r.maxTimeToLive === void 0 ? void 0 : String(r.maxTimeToLive)
      }
    }), f = ae(i);
    return Ce.fromDelegations(f.signerDelegation.map((A) => {
      var b;
      return {
        delegation: new Fr(W0(A.delegation.pubkey), BigInt(A.delegation.expiration), (b = A.delegation.targets) === null || b === void 0 ? void 0 : b.map((s) => L0.fromText(s))),
        signature: W0(A.signature)
      };
    }), W0(f.publicKey));
  }
  async callCanister(r) {
    const o = await this.sendRequest({
      id: u0(this, B0, "f").crypto.randomUUID(),
      jsonrpc: "2.0",
      method: "icrc49_call_canister",
      params: {
        canisterId: r.canisterId.toText(),
        sender: r.sender.toText(),
        method: r.method,
        arg: Be(r.arg)
      }
    }), i = ae(o), f = W0(i.contentMap), A = W0(i.certificate);
    return { contentMap: f, certificate: A };
  }
}
B0 = /* @__PURE__ */ new WeakMap(), M0 = /* @__PURE__ */ new WeakMap(), se = /* @__PURE__ */ new WeakMap(), we = /* @__PURE__ */ new WeakMap();
const ti = (u) => typeof u == "object" && !!u && "jsonrpc" in u && u.jsonrpc === "2.0", Rr = (u) => ti(u) && "id" in u && (typeof u.id == "string" || typeof u.id == "number");
var yr = function(u, r, o, i, f) {
  if (typeof r == "function" ? u !== r || !f : !r.has(u)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r.set(u, o), o;
}, d0 = function(u, r, o, i) {
  if (o === "a" && !i) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? u !== r || !i : !r.has(u)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return o === "m" ? i : o === "a" ? i.call(u) : i ? i.value : r.get(u);
}, he, y0, ce;
class ri {
  constructor(r) {
    he.set(this, /* @__PURE__ */ new Set()), y0.set(this, void 0), ce.set(this, !1), yr(this, y0, Object.assign({ window: globalThis.window, manageFocus: !0 }, r));
  }
  get closed() {
    return d0(this, ce, "f");
  }
  addEventListener(...[r, o]) {
    switch (r) {
      case "close":
        return d0(this, he, "f").add(o), () => {
          d0(this, he, "f").delete(o);
        };
      case "response":
        const i = async (f) => {
          f.source !== d0(this, y0, "f").signerWindow || f.origin !== d0(this, y0, "f").signerOrigin || !Rr(f.data) || o(f.data);
        };
        return d0(this, y0, "f").window.addEventListener("message", i), () => {
          d0(this, y0, "f").window.removeEventListener("message", i);
        };
    }
  }
  async send(r) {
    if (d0(this, ce, "f"))
      throw new fe("Communication channel is closed");
    d0(this, y0, "f").signerWindow.postMessage(r, d0(this, y0, "f").signerOrigin), d0(this, y0, "f").manageFocus && d0(this, y0, "f").signerWindow.focus();
  }
  async close() {
    d0(this, ce, "f") || (yr(this, ce, !0), d0(this, y0, "f").signerWindow.close(), d0(this, y0, "f").manageFocus && d0(this, y0, "f").window.focus(), d0(this, he, "f").forEach((r) => r()));
  }
}
he = /* @__PURE__ */ new WeakMap(), y0 = /* @__PURE__ */ new WeakMap(), ce = /* @__PURE__ */ new WeakMap();
const ni = (u) => {
  try {
    const r = new URL(u);
    return r.protocol === "https:" || r.hostname === "127.0.0.1" || r.hostname.split(".").slice(-1)[0] === "localhost";
  } catch {
    return !1;
  }
};
var ii = function(u, r, o, i, f) {
  if (typeof r == "function" ? u !== r || !f : !r.has(u)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r.set(u, o), o;
}, q0 = function(u, r, o, i) {
  if (o === "a" && !i) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? u !== r || !i : !r.has(u)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return o === "m" ? i : o === "a" ? i.call(u) : i ? i.value : r.get(u);
}, _0;
class fe extends Error {
  constructor(r) {
    super(r), Object.setPrototypeOf(this, fe.prototype);
  }
}
class oi {
  constructor(r) {
    if (_0.set(this, void 0), !ni(r.url))
      throw new fe("Invalid signer RPC url");
    ii(this, _0, Object.assign({ windowOpenerFeatures: "", window: globalThis.window, establishTimeout: 1e4, disconnectTimeout: 2e3, statusPollingRate: 300, crypto: globalThis.crypto, manageFocus: !0 }, r));
  }
  async establishChannel() {
    return new Promise((r, o) => {
      let i, f, A;
      const b = q0(this, _0, "f").window.open(q0(this, _0, "f").url, "signerWindow", q0(this, _0, "f").windowOpenerFeatures);
      if (!b) {
        o(new fe("Signer window could not be opened"));
        return;
      }
      const s = setTimeout(() => {
        i || (clearInterval(f), o(new fe("Communication channel could not be established within a reasonable time")));
      }, q0(this, _0, "f").establishTimeout);
      f = setInterval(() => {
        const m = crypto.randomUUID(), h = async (p) => {
          if (!(p.source !== b || !Rr(p.data) || p.data.id !== m || !("result" in p.data) || p.data.result !== "ready")) {
            if (q0(this, _0, "f").window.removeEventListener("message", h), !i) {
              i = new ri(Object.assign(Object.assign({}, q0(this, _0, "f")), { signerOrigin: p.origin, signerWindow: b })), clearTimeout(s), r(i);
              return;
            }
            clearTimeout(A), A = setTimeout(() => {
              clearInterval(f), i.close();
            }, q0(this, _0, "f").disconnectTimeout);
          }
        };
        q0(this, _0, "f").window.addEventListener("message", h), b.postMessage({ jsonrpc: "2.0", id: m, method: "icrc29_status" }, "*");
      }, q0(this, _0, "f").statusPollingRate);
    });
  }
}
_0 = /* @__PURE__ */ new WeakMap();
var ai = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, pt = Math.ceil, S0 = Math.floor, C0 = "[BigNumber Error] ", Cr = C0 + "Number primitive has more than 15 significant digits: ", P0 = 1e14, Z = 14, vt = 9007199254740991, Bt = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], X0 = 1e7, l0 = 1e9;
function kr(u) {
  var r, o, i, f = l.prototype = { constructor: l, toString: null, valueOf: null }, A = new l(1), b = 20, s = 4, m = -7, h = 21, p = -1e7, D = 1e7, g = !1, w = 1, F = 0, R = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, _ = "0123456789abcdefghijklmnopqrstuvwxyz", H = !0;
  function l(n, x) {
    var a, d, v, E, k, y, I, U, P = this;
    if (!(P instanceof l)) return new l(n, x);
    if (x == null) {
      if (n && n._isBigNumber === !0) {
        P.s = n.s, !n.c || n.e > D ? P.c = P.e = null : n.e < p ? P.c = [P.e = 0] : (P.e = n.e, P.c = n.c.slice());
        return;
      }
      if ((y = typeof n == "number") && n * 0 == 0) {
        if (P.s = 1 / n < 0 ? (n = -n, -1) : 1, n === ~~n) {
          for (E = 0, k = n; k >= 10; k /= 10, E++) ;
          E > D ? P.c = P.e = null : (P.e = E, P.c = [n]);
          return;
        }
        U = String(n);
      } else {
        if (!ai.test(U = String(n))) return i(P, U, y);
        P.s = U.charCodeAt(0) == 45 ? (U = U.slice(1), -1) : 1;
      }
      (E = U.indexOf(".")) > -1 && (U = U.replace(".", "")), (k = U.search(/e/i)) > 0 ? (E < 0 && (E = k), E += +U.slice(k + 1), U = U.substring(0, k)) : E < 0 && (E = U.length);
    } else {
      if (f0(x, 2, _.length, "Base"), x == 10 && H)
        return P = new l(n), N(P, b + P.e + 1, s);
      if (U = String(n), y = typeof n == "number") {
        if (n * 0 != 0) return i(P, U, y, x);
        if (P.s = 1 / n < 0 ? (U = U.slice(1), -1) : 1, l.DEBUG && U.replace(/^0\.0*|\./, "").length > 15)
          throw Error(Cr + n);
      } else
        P.s = U.charCodeAt(0) === 45 ? (U = U.slice(1), -1) : 1;
      for (a = _.slice(0, x), E = k = 0, I = U.length; k < I; k++)
        if (a.indexOf(d = U.charAt(k)) < 0) {
          if (d == ".") {
            if (k > E) {
              E = I;
              continue;
            }
          } else if (!v && (U == U.toUpperCase() && (U = U.toLowerCase()) || U == U.toLowerCase() && (U = U.toUpperCase()))) {
            v = !0, k = -1, E = 0;
            continue;
          }
          return i(P, String(n), y, x);
        }
      y = !1, U = o(U, x, 10, P.s), (E = U.indexOf(".")) > -1 ? U = U.replace(".", "") : E = U.length;
    }
    for (k = 0; U.charCodeAt(k) === 48; k++) ;
    for (I = U.length; U.charCodeAt(--I) === 48; ) ;
    if (U = U.slice(k, ++I)) {
      if (I -= k, y && l.DEBUG && I > 15 && (n > vt || n !== S0(n)))
        throw Error(Cr + P.s * n);
      if ((E = E - k - 1) > D)
        P.c = P.e = null;
      else if (E < p)
        P.c = [P.e = 0];
      else {
        if (P.e = E, P.c = [], k = (E + 1) % Z, E < 0 && (k += Z), k < I) {
          for (k && P.c.push(+U.slice(0, k)), I -= Z; k < I; )
            P.c.push(+U.slice(k, k += Z));
          k = Z - (U = U.slice(k)).length;
        } else
          k -= I;
        for (; k--; U += "0") ;
        P.c.push(+U);
      }
    } else
      P.c = [P.e = 0];
  }
  l.clone = kr, l.ROUND_UP = 0, l.ROUND_DOWN = 1, l.ROUND_CEIL = 2, l.ROUND_FLOOR = 3, l.ROUND_HALF_UP = 4, l.ROUND_HALF_DOWN = 5, l.ROUND_HALF_EVEN = 6, l.ROUND_HALF_CEIL = 7, l.ROUND_HALF_FLOOR = 8, l.EUCLID = 9, l.config = l.set = function(n) {
    var x, a;
    if (n != null)
      if (typeof n == "object") {
        if (n.hasOwnProperty(x = "DECIMAL_PLACES") && (a = n[x], f0(a, 0, l0, x), b = a), n.hasOwnProperty(x = "ROUNDING_MODE") && (a = n[x], f0(a, 0, 8, x), s = a), n.hasOwnProperty(x = "EXPONENTIAL_AT") && (a = n[x], a && a.pop ? (f0(a[0], -l0, 0, x), f0(a[1], 0, l0, x), m = a[0], h = a[1]) : (f0(a, -l0, l0, x), m = -(h = a < 0 ? -a : a))), n.hasOwnProperty(x = "RANGE"))
          if (a = n[x], a && a.pop)
            f0(a[0], -l0, -1, x), f0(a[1], 1, l0, x), p = a[0], D = a[1];
          else if (f0(a, -l0, l0, x), a)
            p = -(D = a < 0 ? -a : a);
          else
            throw Error(C0 + x + " cannot be zero: " + a);
        if (n.hasOwnProperty(x = "CRYPTO"))
          if (a = n[x], a === !!a)
            if (a)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                g = a;
              else
                throw g = !a, Error(C0 + "crypto unavailable");
            else
              g = a;
          else
            throw Error(C0 + x + " not true or false: " + a);
        if (n.hasOwnProperty(x = "MODULO_MODE") && (a = n[x], f0(a, 0, 9, x), w = a), n.hasOwnProperty(x = "POW_PRECISION") && (a = n[x], f0(a, 0, l0, x), F = a), n.hasOwnProperty(x = "FORMAT"))
          if (a = n[x], typeof a == "object") R = a;
          else throw Error(C0 + x + " not an object: " + a);
        if (n.hasOwnProperty(x = "ALPHABET"))
          if (a = n[x], typeof a == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(a))
            H = a.slice(0, 10) == "0123456789", _ = a;
          else
            throw Error(C0 + x + " invalid: " + a);
      } else
        throw Error(C0 + "Object expected: " + n);
    return {
      DECIMAL_PLACES: b,
      ROUNDING_MODE: s,
      EXPONENTIAL_AT: [m, h],
      RANGE: [p, D],
      CRYPTO: g,
      MODULO_MODE: w,
      POW_PRECISION: F,
      FORMAT: R,
      ALPHABET: _
    };
  }, l.isBigNumber = function(n) {
    if (!n || n._isBigNumber !== !0) return !1;
    if (!l.DEBUG) return !0;
    var x, a, d = n.c, v = n.e, E = n.s;
    e: if ({}.toString.call(d) == "[object Array]") {
      if ((E === 1 || E === -1) && v >= -l0 && v <= l0 && v === S0(v)) {
        if (d[0] === 0) {
          if (v === 0 && d.length === 1) return !0;
          break e;
        }
        if (x = (v + 1) % Z, x < 1 && (x += Z), String(d[0]).length == x) {
          for (x = 0; x < d.length; x++)
            if (a = d[x], a < 0 || a >= P0 || a !== S0(a)) break e;
          if (a !== 0) return !0;
        }
      }
    } else if (d === null && v === null && (E === null || E === 1 || E === -1))
      return !0;
    throw Error(C0 + "Invalid BigNumber: " + n);
  }, l.maximum = l.max = function() {
    return S(arguments, -1);
  }, l.minimum = l.min = function() {
    return S(arguments, 1);
  }, l.random = function() {
    var n = 9007199254740992, x = Math.random() * n & 2097151 ? function() {
      return S0(Math.random() * n);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(a) {
      var d, v, E, k, y, I = 0, U = [], P = new l(A);
      if (a == null ? a = b : f0(a, 0, l0), k = pt(a / Z), g)
        if (crypto.getRandomValues) {
          for (d = crypto.getRandomValues(new Uint32Array(k *= 2)); I < k; )
            y = d[I] * 131072 + (d[I + 1] >>> 11), y >= 9e15 ? (v = crypto.getRandomValues(new Uint32Array(2)), d[I] = v[0], d[I + 1] = v[1]) : (U.push(y % 1e14), I += 2);
          I = k / 2;
        } else if (crypto.randomBytes) {
          for (d = crypto.randomBytes(k *= 7); I < k; )
            y = (d[I] & 31) * 281474976710656 + d[I + 1] * 1099511627776 + d[I + 2] * 4294967296 + d[I + 3] * 16777216 + (d[I + 4] << 16) + (d[I + 5] << 8) + d[I + 6], y >= 9e15 ? crypto.randomBytes(7).copy(d, I) : (U.push(y % 1e14), I += 7);
          I = k / 7;
        } else
          throw g = !1, Error(C0 + "crypto unavailable");
      if (!g)
        for (; I < k; )
          y = x(), y < 9e15 && (U[I++] = y % 1e14);
      for (k = U[--I], a %= Z, k && a && (y = Bt[Z - a], U[I] = S0(k / y) * y); U[I] === 0; U.pop(), I--) ;
      if (I < 0)
        U = [E = 0];
      else {
        for (E = -1; U[0] === 0; U.splice(0, 1), E -= Z) ;
        for (I = 1, y = U[0]; y >= 10; y /= 10, I++) ;
        I < Z && (E -= Z - I);
      }
      return P.e = E, P.c = U, P;
    };
  }(), l.sum = function() {
    for (var n = 1, x = arguments, a = new l(x[0]); n < x.length; ) a = a.plus(x[n++]);
    return a;
  }, o = /* @__PURE__ */ function() {
    var n = "0123456789";
    function x(a, d, v, E) {
      for (var k, y = [0], I, U = 0, P = a.length; U < P; ) {
        for (I = y.length; I--; y[I] *= d) ;
        for (y[0] += E.indexOf(a.charAt(U++)), k = 0; k < y.length; k++)
          y[k] > v - 1 && (y[k + 1] == null && (y[k + 1] = 0), y[k + 1] += y[k] / v | 0, y[k] %= v);
      }
      return y.reverse();
    }
    return function(a, d, v, E, k) {
      var y, I, U, P, W, Q, O, M, K = a.indexOf("."), G = b, X = s;
      for (K >= 0 && (P = F, F = 0, a = a.replace(".", ""), M = new l(d), Q = M.pow(a.length - K), F = P, M.c = x(
        z0(b0(Q.c), Q.e, "0"),
        10,
        v,
        n
      ), M.e = M.c.length), O = x(a, d, v, k ? (y = _, n) : (y = n, _)), U = P = O.length; O[--P] == 0; O.pop()) ;
      if (!O[0]) return y.charAt(0);
      if (K < 0 ? --U : (Q.c = O, Q.e = U, Q.s = E, Q = r(Q, M, G, X, v), O = Q.c, W = Q.r, U = Q.e), I = U + G + 1, K = O[I], P = v / 2, W = W || I < 0 || O[I + 1] != null, W = X < 4 ? (K != null || W) && (X == 0 || X == (Q.s < 0 ? 3 : 2)) : K > P || K == P && (X == 4 || W || X == 6 && O[I - 1] & 1 || X == (Q.s < 0 ? 8 : 7)), I < 1 || !O[0])
        a = W ? z0(y.charAt(1), -G, y.charAt(0)) : y.charAt(0);
      else {
        if (O.length = I, W)
          for (--v; ++O[--I] > v; )
            O[I] = 0, I || (++U, O = [1].concat(O));
        for (P = O.length; !O[--P]; ) ;
        for (K = 0, a = ""; K <= P; a += y.charAt(O[K++])) ;
        a = z0(a, U, y.charAt(0));
      }
      return a;
    };
  }(), r = /* @__PURE__ */ function() {
    function n(d, v, E) {
      var k, y, I, U, P = 0, W = d.length, Q = v % X0, O = v / X0 | 0;
      for (d = d.slice(); W--; )
        I = d[W] % X0, U = d[W] / X0 | 0, k = O * I + U * Q, y = Q * I + k % X0 * X0 + P, P = (y / E | 0) + (k / X0 | 0) + O * U, d[W] = y % E;
      return P && (d = [P].concat(d)), d;
    }
    function x(d, v, E, k) {
      var y, I;
      if (E != k)
        I = E > k ? 1 : -1;
      else
        for (y = I = 0; y < E; y++)
          if (d[y] != v[y]) {
            I = d[y] > v[y] ? 1 : -1;
            break;
          }
      return I;
    }
    function a(d, v, E, k) {
      for (var y = 0; E--; )
        d[E] -= y, y = d[E] < v[E] ? 1 : 0, d[E] = y * k + d[E] - v[E];
      for (; !d[0] && d.length > 1; d.splice(0, 1)) ;
    }
    return function(d, v, E, k, y) {
      var I, U, P, W, Q, O, M, K, G, X, V, r0, Y, w0, F0, p0, g0, n0 = d.s == v.s ? 1 : -1, e0 = d.c, o0 = v.c;
      if (!e0 || !e0[0] || !o0 || !o0[0])
        return new l(
          // Return NaN if either NaN, or both Infinity or 0.
          !d.s || !v.s || (e0 ? o0 && e0[0] == o0[0] : !o0) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            e0 && e0[0] == 0 || !o0 ? n0 * 0 : n0 / 0
          )
        );
      for (K = new l(n0), G = K.c = [], U = d.e - v.e, n0 = E + U + 1, y || (y = P0, U = I0(d.e / Z) - I0(v.e / Z), n0 = n0 / Z | 0), P = 0; o0[P] == (e0[P] || 0); P++) ;
      if (o0[P] > (e0[P] || 0) && U--, n0 < 0)
        G.push(1), W = !0;
      else {
        for (w0 = e0.length, p0 = o0.length, P = 0, n0 += 2, Q = S0(y / (o0[0] + 1)), Q > 1 && (o0 = n(o0, Q, y), e0 = n(e0, Q, y), p0 = o0.length, w0 = e0.length), Y = p0, X = e0.slice(0, p0), V = X.length; V < p0; X[V++] = 0) ;
        g0 = o0.slice(), g0 = [0].concat(g0), F0 = o0[0], o0[1] >= y / 2 && F0++;
        do {
          if (Q = 0, I = x(o0, X, p0, V), I < 0) {
            if (r0 = X[0], p0 != V && (r0 = r0 * y + (X[1] || 0)), Q = S0(r0 / F0), Q > 1)
              for (Q >= y && (Q = y - 1), O = n(o0, Q, y), M = O.length, V = X.length; x(O, X, M, V) == 1; )
                Q--, a(O, p0 < M ? g0 : o0, M, y), M = O.length, I = 1;
            else
              Q == 0 && (I = Q = 1), O = o0.slice(), M = O.length;
            if (M < V && (O = [0].concat(O)), a(X, O, V, y), V = X.length, I == -1)
              for (; x(o0, X, p0, V) < 1; )
                Q++, a(X, p0 < V ? g0 : o0, V, y), V = X.length;
          } else I === 0 && (Q++, X = [0]);
          G[P++] = Q, X[0] ? X[V++] = e0[Y] || 0 : (X = [e0[Y]], V = 1);
        } while ((Y++ < w0 || X[0] != null) && n0--);
        W = X[0] != null, G[0] || G.splice(0, 1);
      }
      if (y == P0) {
        for (P = 1, n0 = G[0]; n0 >= 10; n0 /= 10, P++) ;
        N(K, E + (K.e = P + U * Z - 1) + 1, k, W);
      } else
        K.e = U, K.r = +W;
      return K;
    };
  }();
  function C(n, x, a, d) {
    var v, E, k, y, I;
    if (a == null ? a = s : f0(a, 0, 8), !n.c) return n.toString();
    if (v = n.c[0], k = n.e, x == null)
      I = b0(n.c), I = d == 1 || d == 2 && (k <= m || k >= h) ? Ae(I, k) : z0(I, k, "0");
    else if (n = N(new l(n), x, a), E = n.e, I = b0(n.c), y = I.length, d == 1 || d == 2 && (x <= E || E <= m)) {
      for (; y < x; I += "0", y++) ;
      I = Ae(I, E);
    } else if (x -= k, I = z0(I, E, "0"), E + 1 > y) {
      if (--x > 0) for (I += "."; x--; I += "0") ;
    } else if (x += E - y, x > 0)
      for (E + 1 == y && (I += "."); x--; I += "0") ;
    return n.s < 0 && v ? "-" + I : I;
  }
  function S(n, x) {
    for (var a, d, v = 1, E = new l(n[0]); v < n.length; v++)
      d = new l(n[v]), (!d.s || (a = $0(E, d)) === x || a === 0 && E.s === x) && (E = d);
    return E;
  }
  function L(n, x, a) {
    for (var d = 1, v = x.length; !x[--v]; x.pop()) ;
    for (v = x[0]; v >= 10; v /= 10, d++) ;
    return (a = d + a * Z - 1) > D ? n.c = n.e = null : a < p ? n.c = [n.e = 0] : (n.e = a, n.c = x), n;
  }
  i = /* @__PURE__ */ function() {
    var n = /^(-?)0([xbo])(?=\w[\w.]*$)/i, x = /^([^.]+)\.$/, a = /^\.([^.]+)$/, d = /^-?(Infinity|NaN)$/, v = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(E, k, y, I) {
      var U, P = y ? k : k.replace(v, "");
      if (d.test(P))
        E.s = isNaN(P) ? null : P < 0 ? -1 : 1;
      else {
        if (!y && (P = P.replace(n, function(W, Q, O) {
          return U = (O = O.toLowerCase()) == "x" ? 16 : O == "b" ? 2 : 8, !I || I == U ? Q : W;
        }), I && (U = I, P = P.replace(x, "$1").replace(a, "0.$1")), k != P))
          return new l(P, U);
        if (l.DEBUG)
          throw Error(C0 + "Not a" + (I ? " base " + I : "") + " number: " + k);
        E.s = null;
      }
      E.c = E.e = null;
    };
  }();
  function N(n, x, a, d) {
    var v, E, k, y, I, U, P, W = n.c, Q = Bt;
    if (W) {
      e: {
        for (v = 1, y = W[0]; y >= 10; y /= 10, v++) ;
        if (E = x - v, E < 0)
          E += Z, k = x, I = W[U = 0], P = S0(I / Q[v - k - 1] % 10);
        else if (U = pt((E + 1) / Z), U >= W.length)
          if (d) {
            for (; W.length <= U; W.push(0)) ;
            I = P = 0, v = 1, E %= Z, k = E - Z + 1;
          } else
            break e;
        else {
          for (I = y = W[U], v = 1; y >= 10; y /= 10, v++) ;
          E %= Z, k = E - Z + v, P = k < 0 ? 0 : S0(I / Q[v - k - 1] % 10);
        }
        if (d = d || x < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        W[U + 1] != null || (k < 0 ? I : I % Q[v - k - 1]), d = a < 4 ? (P || d) && (a == 0 || a == (n.s < 0 ? 3 : 2)) : P > 5 || P == 5 && (a == 4 || d || a == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (E > 0 ? k > 0 ? I / Q[v - k] : 0 : W[U - 1]) % 10 & 1 || a == (n.s < 0 ? 8 : 7)), x < 1 || !W[0])
          return W.length = 0, d ? (x -= n.e + 1, W[0] = Q[(Z - x % Z) % Z], n.e = -x || 0) : W[0] = n.e = 0, n;
        if (E == 0 ? (W.length = U, y = 1, U--) : (W.length = U + 1, y = Q[Z - E], W[U] = k > 0 ? S0(I / Q[v - k] % Q[k]) * y : 0), d)
          for (; ; )
            if (U == 0) {
              for (E = 1, k = W[0]; k >= 10; k /= 10, E++) ;
              for (k = W[0] += y, y = 1; k >= 10; k /= 10, y++) ;
              E != y && (n.e++, W[0] == P0 && (W[0] = 1));
              break;
            } else {
              if (W[U] += y, W[U] != P0) break;
              W[U--] = 0, y = 1;
            }
        for (E = W.length; W[--E] === 0; W.pop()) ;
      }
      n.e > D ? n.c = n.e = null : n.e < p && (n.c = [n.e = 0]);
    }
    return n;
  }
  function q(n) {
    var x, a = n.e;
    return a === null ? n.toString() : (x = b0(n.c), x = a <= m || a >= h ? Ae(x, a) : z0(x, a, "0"), n.s < 0 ? "-" + x : x);
  }
  return f.absoluteValue = f.abs = function() {
    var n = new l(this);
    return n.s < 0 && (n.s = 1), n;
  }, f.comparedTo = function(n, x) {
    return $0(this, new l(n, x));
  }, f.decimalPlaces = f.dp = function(n, x) {
    var a, d, v, E = this;
    if (n != null)
      return f0(n, 0, l0), x == null ? x = s : f0(x, 0, 8), N(new l(E), n + E.e + 1, x);
    if (!(a = E.c)) return null;
    if (d = ((v = a.length - 1) - I0(this.e / Z)) * Z, v = a[v]) for (; v % 10 == 0; v /= 10, d--) ;
    return d < 0 && (d = 0), d;
  }, f.dividedBy = f.div = function(n, x) {
    return r(this, new l(n, x), b, s);
  }, f.dividedToIntegerBy = f.idiv = function(n, x) {
    return r(this, new l(n, x), 0, 1);
  }, f.exponentiatedBy = f.pow = function(n, x) {
    var a, d, v, E, k, y, I, U, P, W = this;
    if (n = new l(n), n.c && !n.isInteger())
      throw Error(C0 + "Exponent not an integer: " + q(n));
    if (x != null && (x = new l(x)), y = n.e > 14, !W.c || !W.c[0] || W.c[0] == 1 && !W.e && W.c.length == 1 || !n.c || !n.c[0])
      return P = new l(Math.pow(+q(W), y ? n.s * (2 - ge(n)) : +q(n))), x ? P.mod(x) : P;
    if (I = n.s < 0, x) {
      if (x.c ? !x.c[0] : !x.s) return new l(NaN);
      d = !I && W.isInteger() && x.isInteger(), d && (W = W.mod(x));
    } else {
      if (n.e > 9 && (W.e > 0 || W.e < -1 || (W.e == 0 ? W.c[0] > 1 || y && W.c[1] >= 24e7 : W.c[0] < 8e13 || y && W.c[0] <= 9999975e7)))
        return E = W.s < 0 && ge(n) ? -0 : 0, W.e > -1 && (E = 1 / E), new l(I ? 1 / E : E);
      F && (E = pt(F / Z + 2));
    }
    for (y ? (a = new l(0.5), I && (n.s = 1), U = ge(n)) : (v = Math.abs(+q(n)), U = v % 2), P = new l(A); ; ) {
      if (U) {
        if (P = P.times(W), !P.c) break;
        E ? P.c.length > E && (P.c.length = E) : d && (P = P.mod(x));
      }
      if (v) {
        if (v = S0(v / 2), v === 0) break;
        U = v % 2;
      } else if (n = n.times(a), N(n, n.e + 1, 1), n.e > 14)
        U = ge(n);
      else {
        if (v = +q(n), v === 0) break;
        U = v % 2;
      }
      W = W.times(W), E ? W.c && W.c.length > E && (W.c.length = E) : d && (W = W.mod(x));
    }
    return d ? P : (I && (P = A.div(P)), x ? P.mod(x) : E ? N(P, F, s, k) : P);
  }, f.integerValue = function(n) {
    var x = new l(this);
    return n == null ? n = s : f0(n, 0, 8), N(x, x.e + 1, n);
  }, f.isEqualTo = f.eq = function(n, x) {
    return $0(this, new l(n, x)) === 0;
  }, f.isFinite = function() {
    return !!this.c;
  }, f.isGreaterThan = f.gt = function(n, x) {
    return $0(this, new l(n, x)) > 0;
  }, f.isGreaterThanOrEqualTo = f.gte = function(n, x) {
    return (x = $0(this, new l(n, x))) === 1 || x === 0;
  }, f.isInteger = function() {
    return !!this.c && I0(this.e / Z) > this.c.length - 2;
  }, f.isLessThan = f.lt = function(n, x) {
    return $0(this, new l(n, x)) < 0;
  }, f.isLessThanOrEqualTo = f.lte = function(n, x) {
    return (x = $0(this, new l(n, x))) === -1 || x === 0;
  }, f.isNaN = function() {
    return !this.s;
  }, f.isNegative = function() {
    return this.s < 0;
  }, f.isPositive = function() {
    return this.s > 0;
  }, f.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, f.minus = function(n, x) {
    var a, d, v, E, k = this, y = k.s;
    if (n = new l(n, x), x = n.s, !y || !x) return new l(NaN);
    if (y != x)
      return n.s = -x, k.plus(n);
    var I = k.e / Z, U = n.e / Z, P = k.c, W = n.c;
    if (!I || !U) {
      if (!P || !W) return P ? (n.s = -x, n) : new l(W ? k : NaN);
      if (!P[0] || !W[0])
        return W[0] ? (n.s = -x, n) : new l(P[0] ? k : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          s == 3 ? -0 : 0
        ));
    }
    if (I = I0(I), U = I0(U), P = P.slice(), y = I - U) {
      for ((E = y < 0) ? (y = -y, v = P) : (U = I, v = W), v.reverse(), x = y; x--; v.push(0)) ;
      v.reverse();
    } else
      for (d = (E = (y = P.length) < (x = W.length)) ? y : x, y = x = 0; x < d; x++)
        if (P[x] != W[x]) {
          E = P[x] < W[x];
          break;
        }
    if (E && (v = P, P = W, W = v, n.s = -n.s), x = (d = W.length) - (a = P.length), x > 0) for (; x--; P[a++] = 0) ;
    for (x = P0 - 1; d > y; ) {
      if (P[--d] < W[d]) {
        for (a = d; a && !P[--a]; P[a] = x) ;
        --P[a], P[d] += P0;
      }
      P[d] -= W[d];
    }
    for (; P[0] == 0; P.splice(0, 1), --U) ;
    return P[0] ? L(n, P, U) : (n.s = s == 3 ? -1 : 1, n.c = [n.e = 0], n);
  }, f.modulo = f.mod = function(n, x) {
    var a, d, v = this;
    return n = new l(n, x), !v.c || !n.s || n.c && !n.c[0] ? new l(NaN) : !n.c || v.c && !v.c[0] ? new l(v) : (w == 9 ? (d = n.s, n.s = 1, a = r(v, n, 0, 3), n.s = d, a.s *= d) : a = r(v, n, 0, w), n = v.minus(a.times(n)), !n.c[0] && w == 1 && (n.s = v.s), n);
  }, f.multipliedBy = f.times = function(n, x) {
    var a, d, v, E, k, y, I, U, P, W, Q, O, M, K, G, X = this, V = X.c, r0 = (n = new l(n, x)).c;
    if (!V || !r0 || !V[0] || !r0[0])
      return !X.s || !n.s || V && !V[0] && !r0 || r0 && !r0[0] && !V ? n.c = n.e = n.s = null : (n.s *= X.s, !V || !r0 ? n.c = n.e = null : (n.c = [0], n.e = 0)), n;
    for (d = I0(X.e / Z) + I0(n.e / Z), n.s *= X.s, I = V.length, W = r0.length, I < W && (M = V, V = r0, r0 = M, v = I, I = W, W = v), v = I + W, M = []; v--; M.push(0)) ;
    for (K = P0, G = X0, v = W; --v >= 0; ) {
      for (a = 0, Q = r0[v] % G, O = r0[v] / G | 0, k = I, E = v + k; E > v; )
        U = V[--k] % G, P = V[k] / G | 0, y = O * U + P * Q, U = Q * U + y % G * G + M[E] + a, a = (U / K | 0) + (y / G | 0) + O * P, M[E--] = U % K;
      M[E] = a;
    }
    return a ? ++d : M.splice(0, 1), L(n, M, d);
  }, f.negated = function() {
    var n = new l(this);
    return n.s = -n.s || null, n;
  }, f.plus = function(n, x) {
    var a, d = this, v = d.s;
    if (n = new l(n, x), x = n.s, !v || !x) return new l(NaN);
    if (v != x)
      return n.s = -x, d.minus(n);
    var E = d.e / Z, k = n.e / Z, y = d.c, I = n.c;
    if (!E || !k) {
      if (!y || !I) return new l(v / 0);
      if (!y[0] || !I[0]) return I[0] ? n : new l(y[0] ? d : v * 0);
    }
    if (E = I0(E), k = I0(k), y = y.slice(), v = E - k) {
      for (v > 0 ? (k = E, a = I) : (v = -v, a = y), a.reverse(); v--; a.push(0)) ;
      a.reverse();
    }
    for (v = y.length, x = I.length, v - x < 0 && (a = I, I = y, y = a, x = v), v = 0; x; )
      v = (y[--x] = y[x] + I[x] + v) / P0 | 0, y[x] = P0 === y[x] ? 0 : y[x] % P0;
    return v && (y = [v].concat(y), ++k), L(n, y, k);
  }, f.precision = f.sd = function(n, x) {
    var a, d, v, E = this;
    if (n != null && n !== !!n)
      return f0(n, 1, l0), x == null ? x = s : f0(x, 0, 8), N(new l(E), n, x);
    if (!(a = E.c)) return null;
    if (v = a.length - 1, d = v * Z + 1, v = a[v]) {
      for (; v % 10 == 0; v /= 10, d--) ;
      for (v = a[0]; v >= 10; v /= 10, d++) ;
    }
    return n && E.e + 1 > d && (d = E.e + 1), d;
  }, f.shiftedBy = function(n) {
    return f0(n, -vt, vt), this.times("1e" + n);
  }, f.squareRoot = f.sqrt = function() {
    var n, x, a, d, v, E = this, k = E.c, y = E.s, I = E.e, U = b + 4, P = new l("0.5");
    if (y !== 1 || !k || !k[0])
      return new l(!y || y < 0 && (!k || k[0]) ? NaN : k ? E : 1 / 0);
    if (y = Math.sqrt(+q(E)), y == 0 || y == 1 / 0 ? (x = b0(k), (x.length + I) % 2 == 0 && (x += "0"), y = Math.sqrt(+x), I = I0((I + 1) / 2) - (I < 0 || I % 2), y == 1 / 0 ? x = "5e" + I : (x = y.toExponential(), x = x.slice(0, x.indexOf("e") + 1) + I), a = new l(x)) : a = new l(y + ""), a.c[0]) {
      for (I = a.e, y = I + U, y < 3 && (y = 0); ; )
        if (v = a, a = P.times(v.plus(r(E, v, U, 1))), b0(v.c).slice(0, y) === (x = b0(a.c)).slice(0, y))
          if (a.e < I && --y, x = x.slice(y - 3, y + 1), x == "9999" || !d && x == "4999") {
            if (!d && (N(v, v.e + b + 2, 0), v.times(v).eq(E))) {
              a = v;
              break;
            }
            U += 4, y += 4, d = 1;
          } else {
            (!+x || !+x.slice(1) && x.charAt(0) == "5") && (N(a, a.e + b + 2, 1), n = !a.times(a).eq(E));
            break;
          }
    }
    return N(a, a.e + b + 1, s, n);
  }, f.toExponential = function(n, x) {
    return n != null && (f0(n, 0, l0), n++), C(this, n, x, 1);
  }, f.toFixed = function(n, x) {
    return n != null && (f0(n, 0, l0), n = n + this.e + 1), C(this, n, x);
  }, f.toFormat = function(n, x, a) {
    var d, v = this;
    if (a == null)
      n != null && x && typeof x == "object" ? (a = x, x = null) : n && typeof n == "object" ? (a = n, n = x = null) : a = R;
    else if (typeof a != "object")
      throw Error(C0 + "Argument not an object: " + a);
    if (d = v.toFixed(n, x), v.c) {
      var E, k = d.split("."), y = +a.groupSize, I = +a.secondaryGroupSize, U = a.groupSeparator || "", P = k[0], W = k[1], Q = v.s < 0, O = Q ? P.slice(1) : P, M = O.length;
      if (I && (E = y, y = I, I = E, M -= E), y > 0 && M > 0) {
        for (E = M % y || y, P = O.substr(0, E); E < M; E += y) P += U + O.substr(E, y);
        I > 0 && (P += U + O.slice(E)), Q && (P = "-" + P);
      }
      d = W ? P + (a.decimalSeparator || "") + ((I = +a.fractionGroupSize) ? W.replace(
        new RegExp("\\d{" + I + "}\\B", "g"),
        "$&" + (a.fractionGroupSeparator || "")
      ) : W) : P;
    }
    return (a.prefix || "") + d + (a.suffix || "");
  }, f.toFraction = function(n) {
    var x, a, d, v, E, k, y, I, U, P, W, Q, O = this, M = O.c;
    if (n != null && (y = new l(n), !y.isInteger() && (y.c || y.s !== 1) || y.lt(A)))
      throw Error(C0 + "Argument " + (y.isInteger() ? "out of range: " : "not an integer: ") + q(y));
    if (!M) return new l(O);
    for (x = new l(A), U = a = new l(A), d = I = new l(A), Q = b0(M), E = x.e = Q.length - O.e - 1, x.c[0] = Bt[(k = E % Z) < 0 ? Z + k : k], n = !n || y.comparedTo(x) > 0 ? E > 0 ? x : U : y, k = D, D = 1 / 0, y = new l(Q), I.c[0] = 0; P = r(y, x, 0, 1), v = a.plus(P.times(d)), v.comparedTo(n) != 1; )
      a = d, d = v, U = I.plus(P.times(v = U)), I = v, x = y.minus(P.times(v = x)), y = v;
    return v = r(n.minus(a), d, 0, 1), I = I.plus(v.times(U)), a = a.plus(v.times(d)), I.s = U.s = O.s, E = E * 2, W = r(U, d, E, s).minus(O).abs().comparedTo(
      r(I, a, E, s).minus(O).abs()
    ) < 1 ? [U, d] : [I, a], D = k, W;
  }, f.toNumber = function() {
    return +q(this);
  }, f.toPrecision = function(n, x) {
    return n != null && f0(n, 1, l0), C(this, n, x, 2);
  }, f.toString = function(n) {
    var x, a = this, d = a.s, v = a.e;
    return v === null ? d ? (x = "Infinity", d < 0 && (x = "-" + x)) : x = "NaN" : (n == null ? x = v <= m || v >= h ? Ae(b0(a.c), v) : z0(b0(a.c), v, "0") : n === 10 && H ? (a = N(new l(a), b + v + 1, s), x = z0(b0(a.c), a.e, "0")) : (f0(n, 2, _.length, "Base"), x = o(z0(b0(a.c), v, "0"), 10, n, d, !0)), d < 0 && a.c[0] && (x = "-" + x)), x;
  }, f.valueOf = f.toJSON = function() {
    return q(this);
  }, f._isBigNumber = !0, f[Symbol.toStringTag] = "BigNumber", f[Symbol.for("nodejs.util.inspect.custom")] = f.valueOf, u != null && l.set(u), l;
}
function I0(u) {
  var r = u | 0;
  return u > 0 || u === r ? r : r - 1;
}
function b0(u) {
  for (var r, o, i = 1, f = u.length, A = u[0] + ""; i < f; ) {
    for (r = u[i++] + "", o = Z - r.length; o--; r = "0" + r) ;
    A += r;
  }
  for (f = A.length; A.charCodeAt(--f) === 48; ) ;
  return A.slice(0, f + 1 || 1);
}
function $0(u, r) {
  var o, i, f = u.c, A = r.c, b = u.s, s = r.s, m = u.e, h = r.e;
  if (!b || !s) return null;
  if (o = f && !f[0], i = A && !A[0], o || i) return o ? i ? 0 : -s : b;
  if (b != s) return b;
  if (o = b < 0, i = m == h, !f || !A) return i ? 0 : !f ^ o ? 1 : -1;
  if (!i) return m > h ^ o ? 1 : -1;
  for (s = (m = f.length) < (h = A.length) ? m : h, b = 0; b < s; b++) if (f[b] != A[b]) return f[b] > A[b] ^ o ? 1 : -1;
  return m == h ? 0 : m > h ^ o ? 1 : -1;
}
function f0(u, r, o, i) {
  if (u < r || u > o || u !== S0(u))
    throw Error(C0 + (i || "Argument") + (typeof u == "number" ? u < r || u > o ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(u));
}
function ge(u) {
  var r = u.c.length - 1;
  return I0(u.e / Z) == r && u.c[r] % 2 != 0;
}
function Ae(u, r) {
  return (u.length > 1 ? u.charAt(0) + "." + u.slice(1) : u) + (r < 0 ? "e" : "e+") + r;
}
function z0(u, r, o) {
  var i, f;
  if (r < 0) {
    for (f = o + "."; ++r; f += o) ;
    u = f + u;
  } else if (i = u.length, ++r > i) {
    for (f = o, r -= i; --r; f += o) ;
    u += f;
  } else r < i && (u = u.slice(0, r) + "." + u.slice(r));
  return u;
}
kr();
const si = (u) => {
  const r = Wr.decode(u), o = new Gr(0);
  return o._value = BigInt(r.ingress_expiry.toString(10)), Object.assign(Object.assign({}, r), { canister_id: L0.from(r.canister_id), ingress_expiry: o });
};
var A0 = function(u, r, o, i) {
  if (o === "a" && !i) throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? u !== r || !i : !r.has(u)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return o === "m" ? i : o === "a" ? i.call(u) : i ? i.value : r.get(u);
}, ye = function(u, r, o, i, f) {
  if (i === "m") throw new TypeError("Private method is not writable");
  if (i === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? u !== r || !f : !r.has(u)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? f.call(u, o) : f ? f.value = o : r.set(u, o), o;
}, O0, de, R0, xe;
const wr = 5, le = "Received invalid response from signer";
class N0 extends Error {
  constructor(r) {
    super(r), Object.setPrototypeOf(this, N0.prototype);
  }
}
class At {
  constructor(r) {
    R0.set(this, void 0), xe.set(this, /* @__PURE__ */ new Map());
    const o = !A0(O0, O0, "f", de);
    if (ye(O0, O0, !1, "f", de), o)
      throw new N0("SignerAgent is not constructable");
    ye(this, R0, r, "f");
  }
  get rootKey() {
    return A0(this, R0, "f").agent.rootKey;
  }
  get signer() {
    return A0(this, R0, "f").signer;
  }
  static async create(r) {
    var o;
    return ye(O0, O0, !0, "f", de), new O0(Object.assign(Object.assign({}, r), { agent: (o = r.agent) !== null && o !== void 0 ? o : await ee.create() }));
  }
  static createSync(r) {
    var o;
    return ye(O0, O0, !0, "f", de), new O0(Object.assign(Object.assign({}, r), { agent: (o = r.agent) !== null && o !== void 0 ? o : ee.createSync() }));
  }
  async call(r, o) {
    r = L0.from(r);
    const i = await A0(this, R0, "f").signer.callCanister({
      canisterId: r,
      sender: A0(this, R0, "f").account,
      method: o.methodName,
      arg: o.arg
    }), f = si(i.contentMap);
    if (!(Kr.Call === f.request_type && r.compareTo(f.canister_id) === "eq" && o.methodName === f.method_name && jr(o.arg, f.arg) === 0 && A0(this, R0, "f").account.compareTo(L0.from(f.sender)) === "eq"))
      throw new N0(le);
    const b = Qr(f), s = await Pt.create({
      certificate: i.certificate,
      rootKey: this.rootKey,
      canisterId: r,
      maxAgeInMinutes: wr
    }).catch(() => {
      throw new N0(le);
    });
    if (!(s.lookup(["request_status", b, "status"]).status === ke.Found))
      throw new N0(le);
    const h = Be(b);
    if (A0(this, xe, "f").has(h))
      throw new N0(le);
    A0(this, xe, "f").set(h, i.certificate);
    const p = Date.now(), D = Xr(s.lookup(["time"]));
    if (!D)
      throw new N0(le);
    const w = Number(Zr(new Jr(D))) / 1e6 - p + wr * 60 * 1e3;
    return setTimeout(() => A0(this, xe, "f").delete(h), w), {
      requestId: b,
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
    return A0(this, R0, "f").agent.fetchRootKey();
  }
  async getPrincipal() {
    return A0(this, R0, "f").account;
  }
  async query(r, o) {
    r = L0.from(r);
    const i = await this.call(r, o), f = await this.readState(r, {
      paths: [
        [new TextEncoder().encode("request_status"), i.requestId]
      ]
    }), A = await Pt.create({
      certificate: f.certificate,
      rootKey: this.rootKey,
      canisterId: r
    }), b = A.lookup([
      "request_status",
      i.requestId,
      "status"
    ]), s = A.lookup([
      "request_status",
      i.requestId,
      "reply"
    ]);
    if (b.status !== ke.Found || new TextDecoder().decode(b.value) !== "replied" || s.status !== ke.Found)
      throw new N0("Certificate is missing reply");
    return {
      requestId: i.requestId,
      status: "replied",
      reply: {
        arg: s.value
      },
      httpDetails: {
        ok: !0,
        status: 202,
        statusText: "Certificate with reply has been received over ICRC-25 JSON-RPC",
        headers: []
      }
    };
  }
  async createReadStateRequest(r) {
    return {
      body: {
        content: {}
      }
    };
  }
  async readState(r, o, i, f) {
    if (o.paths.length !== 1 || o.paths[0].length !== 2 || new TextDecoder().decode(o.paths[0][0]) !== "request_status")
      throw new N0("Given paths are not supported");
    const A = o.paths[0][1], b = Be(A), s = A0(this, xe, "f").get(b);
    if (!s)
      throw new N0("Certificate could not be found");
    return { certificate: s };
  }
  async status() {
    return A0(this, R0, "f").agent.status();
  }
  replaceAccount(r) {
    A0(this, R0, "f").account = r;
  }
}
O0 = At, R0 = /* @__PURE__ */ new WeakMap(), xe = /* @__PURE__ */ new WeakMap();
de = { value: !1 };
class ci {
  async get(r) {
    return localStorage.getItem(r);
  }
  async set(r, o) {
    localStorage.setItem(r, o);
  }
  async remove(r) {
    localStorage.removeItem(r);
  }
}
class xi {
  constructor() {
    this.queue = [], this.isProcessing = !1;
  }
  async add(r) {
    return new Promise((o, i) => {
      this.queue.push(async () => {
        try {
          const f = await r();
          o(f);
        } catch (f) {
          i(f);
        }
      }), this.processQueue();
    });
  }
  async processQueue() {
    if (!(this.isProcessing || this.queue.length === 0)) {
      for (this.isProcessing = !0; this.queue.length > 0; ) {
        const r = this.queue.shift();
        if (r)
          try {
            await r();
          } catch (o) {
            console.error("Error processing signature request:", o);
          }
      }
      this.isProcessing = !1;
    }
  }
  clear() {
    this.queue = [], this.isProcessing = !1;
  }
}
var U0 = /* @__PURE__ */ ((u) => (u.READY = "READY", u.LOADING = "LOADING", u.PROCESSING = "PROCESSING", u.ERROR = "ERROR", u))(U0 || {});
const E0 = class E0 {
  constructor() {
    this.signer = null, this.agent = null, this.signerAgent = null, this.identity = null, this.lastConnectionAttempt = 0, this.CONNECTION_COOLDOWN = 3e3, this.state = "READY", this.accounts = [], this.actorCache = /* @__PURE__ */ new Map(), this.sessionKey = null, this.name = "NFID", this.logo = E0.logo, this.identityProviderUrl = "https://nfid.one/authenticate/?applicationName=kong", this.url = "https://nfid.one/rpc", this.unwrapResponse = (r) => {
      if ("error" in r)
        throw new V0(r.error);
      if ("result" in r)
        return r.result;
      throw new V0({
        code: 500,
        message: "Invalid response"
      });
    }, this.url = "https://nfid.one/rpc", this.name = "NFID", this.logo = E0.logo, this.delegationStorage = new ci(), this.signatureQueue = new xi(), this.sessionKey = Ot.generate(), this.tryRestoreSession();
  }
  setIdentityProviderUrl(r) {
    this.identityProviderUrl = `https://nfid.one/authenticate/?applicationName=${window.location.hostname}`;
  }
  async tryRestoreSession() {
    var r, o, i;
    try {
      const f = await this.delegationStorage.get(E0.STORAGE_KEY);
      if (!f) return;
      let A;
      try {
        A = JSON.parse(f);
      } catch (D) {
        console.warn("Failed to parse stored session data:", D), await this.delegationStorage.remove(E0.STORAGE_KEY);
        return;
      }
      const { sessionKey: b, delegationChain: s } = A;
      if (!b || !s) {
        console.warn("Invalid session data format"), await this.delegationStorage.remove(E0.STORAGE_KEY);
        return;
      }
      let m;
      try {
        const D = JSON.stringify(b);
        m = Ot.fromJSON(D);
      } catch (D) {
        console.warn("Failed to restore session key:", D), await this.delegationStorage.remove(E0.STORAGE_KEY);
        return;
      }
      let h;
      try {
        h = Ce.fromJSON(s);
      } catch (D) {
        console.warn("Failed to restore delegation chain:", D), await this.delegationStorage.remove(E0.STORAGE_KEY);
        return;
      }
      if (h.delegations.some((D) => BigInt(D.delegation.expiration) < BigInt(Date.now()) * BigInt(1e6))) {
        console.log("Delegation chain expired"), await this.delegationStorage.remove(E0.STORAGE_KEY);
        return;
      }
      const p = Ut.fromDelegation(m, h);
      if (!p.getPrincipal().isAnonymous()) {
        this.identity = p;
        const D = p.getPrincipal();
        this.agent = ee.createSync({
          host: ((r = this.config) == null ? void 0 : r.hostUrl) || "https://icp0.io",
          identity: p,
          verifyQuerySignatures: (o = this.config) == null ? void 0 : o.verifyQuerySignatures
        }), (i = this.config) != null && i.isDev && await this.agent.fetchRootKey();
        const g = Fe(D), w = {
          id: D.toText(),
          displayName: "NFID Account",
          principal: D.toText(),
          subaccount: new Uint8Array(g),
          type: "SESSION"
          /* SESSION */
        };
        this.accounts = [w], this.setState(
          "READY"
          /* READY */
        );
      }
    } catch (f) {
      console.warn("Error restoring session:", f), await this.delegationStorage.remove(E0.STORAGE_KEY), this.setState(
        "ERROR"
        /* ERROR */
      );
    }
  }
  setState(r) {
    this.state = r;
  }
  async getDelegationChain(r) {
    const o = await this.delegationStorage.get(r);
    if (!o) return null;
    try {
      return Ce.fromJSON(JSON.parse(o));
    } catch (i) {
      return console.error("Error parsing delegation chain:", i), null;
    }
  }
  async setDelegationChain(r, o) {
    await this.delegationStorage.set(r, JSON.stringify(o.toJSON()));
  }
  async removeDelegationChain(r) {
    await this.delegationStorage.remove(r);
  }
  async initSigner() {
    if (!this.signer)
      try {
        const r = Date.now();
        if (r - this.lastConnectionAttempt < this.CONNECTION_COOLDOWN)
          throw new Error("Please wait before attempting to connect again");
        this.lastConnectionAttempt = r;
        const o = new oi({
          url: this.url
        });
        this.signer = new ei({ transport: o, derivationOrigin: "http://localhost:5173" });
      } catch (r) {
        throw console.error("Error initializing signer:", r), r;
      }
  }
  async isAvailable() {
    return !0;
  }
  async isConnected() {
    return this.identity !== null && this.agent !== null;
  }
  async getPrincipal() {
    if (!this.identity)
      throw new Error("Not connected");
    return this.identity.getPrincipal();
  }
  async getAccountId() {
    if (!this.identity)
      throw new Error("Not connected");
    const r = this.identity.getPrincipal();
    return gt(r.toText()) || "";
  }
  async connect(r) {
    var o;
    try {
      if (this.setState(
        "LOADING"
        /* LOADING */
      ), this.config = r, this.setIdentityProviderUrl(r.isDev || !1), this.identity) {
        const D = this.identity.getPrincipal();
        if (!D.isAnonymous() && (await this.initSigner(), this.signer))
          return this.signerAgent = At.createSync({
            signer: this.signer,
            account: D
          }), {
            owner: D,
            subaccount: null,
            hasDelegation: !0
          };
      }
      if (await this.initSigner(), !this.signer)
        throw new Error("Failed to initialize NFID signer");
      this.setState(
        "PROCESSING"
        /* PROCESSING */
      );
      const i = await this.signer.sendRequest({
        id: window.crypto.randomUUID(),
        jsonrpc: "2.0",
        method: "icrc34_delegation",
        params: {
          publicKey: Be(this.sessionKey.getPublicKey().toDer()),
          targets: (o = r.delegationTargets) == null ? void 0 : o.map((D) => D.toText()),
          maxTimeToLive: this.config.delegationTimeout === void 0 ? void 0 : String(this.config.delegationTimeout)
        }
      }), f = this.unwrapResponse(i), A = Ce.fromDelegations(
        f.signerDelegation.map((D) => {
          var g;
          return {
            delegation: new Fr(
              W0(D.delegation.pubkey),
              BigInt(D.delegation.expiration),
              (g = D.delegation.targets) == null ? void 0 : g.map(
                (w) => L0.fromText(w)
              )
            ),
            signature: W0(D.signature)
          };
        }),
        W0(f.publicKey)
      );
      await this.delegationStorage.set(E0.STORAGE_KEY, JSON.stringify({
        sessionKey: this.sessionKey.toJSON(),
        delegationChain: A.toJSON()
      }));
      const b = Ut.fromDelegation(
        this.sessionKey,
        A
      );
      this.agent = ee.createSync({
        host: r.hostUrl,
        identity: b,
        verifyQuerySignatures: r.verifyQuerySignatures
      }), r.fetchRootKeys && await this.agent.fetchRootKey();
      const s = b.getPrincipal();
      if (console.log("NFID Principal:", s.toString()), s.isAnonymous())
        throw new Error("Failed to authenticate with NFID - got anonymous principal");
      this.signerAgent = At.createSync({
        signer: this.signer,
        account: s
      }), this.identity = b;
      const m = gt(s.toText()) || "", h = Fe(s), p = {
        id: s.toText(),
        displayName: "NFID Account",
        principal: s.toText(),
        subaccount: new Uint8Array(h),
        type: "SESSION"
        /* SESSION */
      };
      return this.accounts = [p], this.setState(
        "READY"
        /* READY */
      ), {
        owner: s,
        subaccount: null,
        hasDelegation: !0
      };
    } catch (i) {
      throw console.error("Error connecting to NFID:", i), this.setState(
        "ERROR"
        /* ERROR */
      ), i;
    }
  }
  async undelegatedActor(r, o) {
    const i = ee.createSync({
      identity: this.identity,
      host: this.config.hostUrl,
      verifyQuerySignatures: this.config.verifyQuerySignatures
    });
    return pe.createActor(o, {
      agent: i,
      canisterId: r
    });
  }
  async disconnect() {
    try {
      this.setState(
        "PROCESSING"
        /* PROCESSING */
      ), this.signer && (await this.signer.closeChannel(), this.signer = null), await this.delegationStorage.remove(E0.STORAGE_KEY), this.signatureQueue.clear(), this.identity = null, this.agent = null, this.signerAgent = null, this.accounts = [], this.actorCache.clear(), this.setState(
        "READY"
        /* READY */
      );
    } catch (r) {
      throw console.error("Error disconnecting from NFID:", r), this.setState(
        "ERROR"
        /* ERROR */
      ), r;
    }
  }
  async createActor(r, o, i = !1) {
    var f;
    console.log("[NFID Debug] Creating actor:", {
      canisterId: r,
      requiresSigning: i,
      hasIdentity: !!this.identity,
      hasAgent: !!this.agent
    });
    try {
      const A = `${r}${i ? "-signed" : ""}`, b = this.actorCache.get(A);
      if (b)
        return b;
      if (!this.identity)
        throw new Error("Identity not initialized");
      if (!((f = this.config.delegationTargets) == null ? void 0 : f.some((h) => h.toText() === r)))
        return this.undelegatedActor(r, o);
      const m = pe.createActor(o, {
        agent: this.agent,
        canisterId: r
      });
      if (i) {
        if (console.log("Creating signed actor with signer agent"), !this.signerAgent)
          throw new Error("No signer agent available. Please connect first.");
        const h = pe.createActor(o, {
          agent: this.signerAgent,
          canisterId: r
        });
        return this.actorCache.set(A, h), h;
      }
      return this.actorCache.set(A, m), m;
    } catch (A) {
      throw console.error("Error creating actor:", A), new Error(`Failed to create actor: ${A instanceof Error ? A.message : String(A)}`);
    }
  }
  async queueSignatureRequest(r) {
    return this.signatureQueue.add(r);
  }
  getState() {
    return this.state;
  }
  getAccounts() {
    return this.accounts;
  }
};
E0.STORAGE_KEY = "nfid_session", E0.logo = $n;
let De = E0;
const _e = class _e {
  constructor() {
    this.name = "Internet Identity", this.logo = _e.logo, this.authClient = null, this.agent = null, this.state = U0.READY, this.url = "https://identity.ic0.app";
  }
  setState(r) {
    this.state = r;
  }
  getState() {
    return this.state;
  }
  // Helper method to initialize the AuthClient
  async initAuthClient() {
    var r, o;
    this.authClient || (this.authClient = await Yr.create({
      idleOptions: {
        idleTimeout: Number(1e3 * 60 * 60 * 24),
        // 1 day in milliseconds
        disableDefaultIdleCallback: !0
        // Disable default reload behavior
      }
    }), (o = (r = this.authClient.idleManager) == null ? void 0 : r.registerCallback) == null || o.call(r, () => this.refreshLogin()));
  }
  // Helper method to initialize the HttpAgent
  async initAgent(r, o) {
    if (this.agent = ee.createSync({
      identity: r,
      host: o,
      verifyQuerySignatures: this.config.verifyQuerySignatures
    }), this.config.fetchRootKeys)
      try {
        await this.agent.fetchRootKey();
      } catch (i) {
        console.warn("Unable to fetch root key. Check to ensure that your local replica is running"), console.error(i);
      }
  }
  // Checks if the wallet is available
  async isAvailable() {
    return !0;
  }
  getIdentityProvider(r) {
    return r ? this.config.identityProvider : "https://identity.ic0.app";
  }
  // Connects to the wallet using the provided configuration
  async connect(r) {
    try {
      if (this.setState(U0.LOADING), this.config = r, await this.initAuthClient(), await this.authClient.isAuthenticated()) {
        const i = await this._continueLogin(r.hostUrl || this.url);
        return this.setState(U0.READY), i;
      } else
        return new Promise((i, f) => {
          this.authClient.login({
            identityProvider: this.getIdentityProvider(r.isDev || !0),
            maxTimeToLive: BigInt(Number(r.delegationTimeout || 24 * 60 * 60 * 1e3 * 1e3 * 1e3)),
            // 24 hours in nanoseconds
            onSuccess: async () => {
              try {
                const A = await this._continueLogin(r.hostUrl || this.url);
                this.setState(U0.READY), i(A);
              } catch (A) {
                this.setState(U0.READY), f(A);
              }
            },
            onError: (A) => {
              this.setState(U0.READY), f(new Error("Authentication failed: " + A));
            }
          });
        });
    } catch (o) {
      throw this.setState(U0.READY), o;
    }
  }
  async _continueLogin(r) {
    try {
      const o = this.authClient.getIdentity(), i = o.getPrincipal();
      return await this.initAgent(o, r), {
        owner: i,
        subaccount: Fe(i)
      };
    } catch (o) {
      throw console.error("Error during _continueLogin:", o), o;
    }
  }
  // Check if the wallet is connected
  async isConnected() {
    return this.authClient ? this.authClient.isAuthenticated() : !1;
  }
  // Create an actor for interacting with a canister
  async createActor(r, o) {
    if (!this.agent)
      throw new Error("Agent is not initialized. Ensure the wallet is connected.");
    return pe.createActor(o, {
      agent: this.agent,
      canisterId: r
    });
  }
  // Get the principal associated with the wallet
  async getPrincipal() {
    if (!this.authClient)
      throw new Error("AuthClient is not initialized. Ensure the wallet is connected.");
    return this.authClient.getIdentity().getPrincipal();
  }
  // Get the subaccount associated with the wallet
  async getAccountId() {
    if (!this.authClient)
      throw new Error("AuthClient is not initialized. Ensure the wallet is connected.");
    const r = this.authClient.getIdentity().getPrincipal(), o = Fe(r);
    if (o)
      return o.toString() || "";
  }
  // Refresh login when session is about to expire
  async refreshLogin() {
    try {
      await this.connect(this.config);
    } catch (r) {
      console.error("Failed to refresh login:", r), await this.disconnect();
    }
  }
  async undelegatedActor(r, o) {
    return this.createActor(r, o);
  }
  // Disconnects from the wallet
  async disconnect() {
    try {
      this.setState(U0.LOADING), this.authClient && (await this.authClient.logout(), this.authClient = null), this.agent && (this.agent = null), this.setState(U0.READY);
    } catch (r) {
      throw this.setState(U0.READY), r;
    }
  }
};
_e.logo = en;
let me = _e;
const fi = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAggICAgICAoICAgICAgICAgICAgICAgICQgICAgICQgICAgICAkICAgICAoICAgICgkKCAgLDQsIDAgICggBAwQEBgUGCgYGCg0OCw0NDg8NDg8PDQ0ODRANDQ4PDg0QDQ0ODQ4PEA4ODw0ODg4QDQ0PDQ8ODxAOEA8ODQ0NDf/AABEIAIAAgAMBEQACEQEDEQH/xAAeAAEAAgMAAwEBAAAAAAAAAAAABwgFBgkDBAoCAf/EAE8QAAIBAwEEBAcJDAYLAAAAAAECAwAEEQUGBxIhCBMxQQkUIjJRYYEkNHFzkZKhs7QVI0JSdHWChbLB0dMzNTZTctQXJSZDYmODk5Sio//EAB0BAQABBQEBAQAAAAAAAAAAAAAHAwQFBggCAQn/xABBEQABAwIDBAUIBwgCAwAAAAABAAIDBBEFITEGEkFRMmFxgZEHEyKhscHR0iMkQoKSsvEWM1JicnPh8KLCFBVD/9oADAMBAAIRAxEAPwDqnREoiURKIlEUdar0kNnYJHhn1jRYZomKSRS6pYxyRuOTI8bzhkYHkVYAivtl5LgNSts2U20s7+EXFjc217ASVE9pPFcwll5Mokhd0JXvHFkV8X0G6zNF9SiLGbR7T21nC9xeTwWtvHgyT3MscEKAnA45ZWVFySAOJhzNEWj2vSb2akZUTWtDd3YKiJq1gzMxOAqqLgliTyAAJJr7ZeQ9p4hSUDXxel/aIlESiJREoiURKIlESiL5ntvD7uvfyu4+ueq40WKf0j2rq/4Gc/6h1T87n7Ha1Tdqryn6PeugVeFcpRFSzwtx/wBkv1nZfsz16bqqM3QK4qVWWNX01bL+9rf4iH6tat1mFlKIlESiJREoiURKIlESiL5nduvf15+VXH1z1XGixT+ke1dX/Az/ANQ6p+dz9jtapu1V5T9HvXQOvCuUoipZ4W/+yX6zsv2bivTdVRm6BXFSqyxq+mrZf3tbfEQ/VrVuswspREoiURKIlESiJREoiURfM7t17+vPyq4+ueq40WKf0j2rq/4Gf+odU/O5+x2tU3aq8p+j3roHXhXKURUs8Lf/AGS/Wdl+zcV6bqqM3QK4qVWWNX01bL+9rb4iH6tat1mFlKIlESiJREoiURKIoo3j735bW4a3gSMmMLxtIGOSyhwFCsuAFYcyTknsGOcdY5tNLRVBp4Gt9EDeLrnUXsACOBCibaTbGfD6s0lMxt2gbxdc5uANgARwIzufUtU/0+Xv4tv8yT+bWuftlXfwx+DvmWp/t/iX8EX4XfOqSar0D9DllkleS/DyyPI2LiEDidixwPFuQyeQq8i2oxaUXjiaexjz7CrR23dfe5EQ7j8ynzo26LFstaz2emkyRXFx4y5umEriTq0iwpjEIC8Ma8ipOc8+dVnbQY03N1P4xyD3qpH5Qa5osBD4O+dTFFv6vD+Db/Mf+bVodra9ps9jAetrh/2V23b7EHfZi/C7517Ue/G7P4MHzH/mVUG1tYfsx+B+ZXTdua8/Zi/C75lHm/8A0hNptP8AubqHElv18dxm1Ijk44w4UcUgmXh8s5HDk4HMc8127VVfJngfmVY7Z1zxYtj8HfMq5R+Df2fP+81L/wAmD/K1cN2oqzwZ4H4r03amrPBngfmV4tM3mTxxpGBERGioCVbJCgKM4cDOBzwBVUbR1J4M8D8Vkm7W1h4M8D8y2HZ3eRJJKiSKmHYKCgIIJOB2scjJGez91ZSixySWVscrRZxAyuLX04lZrDtpJZpmxTNbZxAuLggnIak8VIVbqpDSiJREoiURKIqpb89Z4NTuVAyR1PM9nO3iPt+irCDyeDF6p1fVS7sTiN1rOkd1oabuOTcwdA645Lkvb2v81jVQxoz+jzOn7pijWfUXbtY/AOQ+ipVw3ZLCMOAEFOy4+04b7u3edcjusFF0lVLJq492XsUCb6elvY6RI1siNe3i+fDG4SOI4ziWYq/C3Z5CJIw/C4eWa+I4nT030YG84cBkB2n3WUg7ObDVuLsFQ9wihOjnC5d1tbcXHWSByuos0Pwhr9YPGdO4YSRloLnikRe8hHiVZD6uOP4RWqOxJrz6TMuo/wCPgt8n8lwDPq9Vd3JzLA94cSPBytfu43n2mp263VlKJIzyYebJE/ekiecjDtweRGGBZSCac9DDVsvuhw5EA+oqIcRw+rwqcwVLS13A8HDm08R7NDY5LYtod48FhbyXV3KkUEQy7yH5FXHlM7HkqKGZicAE1H+I7JUkl3MG4ebdPw6eFlfYY+qqpmwQNL3HQe+/ADiTkOKq1tV4TcLKVsNOaWJTymubjqmf04hjifhHeCZSfSq9la3Fsgfty+DfiVOlJsU7cBqZgHfwtG8B94kX8FJm4nwgWn6pOlpewtplzIwSIvKJraVyQFTruCJo3Y+arx8J7OsJIBx1ds9PSt34zvtGuViO7O/j3KyxHZeekYZYXecaNbCzh3XNx2G/UrZwzVrjXLVGPWf2Wl90QfHRftrWYw931mL+tv5gs/hT/rcP9xn5gp7qYlPqURKIlESiJRFT3f64GrXeeX9B9mhqV8ENqGO/8353LkXbHDavEtpqimoonyyO83ZjGl7j9DHwaCe06BQJvk3heIaZeXUf9JHFiI45CWRlijbB7QrurEY5gGrqurBDC57dQMu05BSHhfkJx5sQrsWEcMTS0ujL96VwLgLWj3mi9+LwRyXMG4mZ3Z3JZ3ZmdmOWZmJLMSeZJJJJPaTUUOJJJOql/wA22IebYLBuQAyAAyGS/FeUUg7jt7M2j3yXEZLQuQlzBnyZYs8wAeQdPOjbkQwx5rMDe0k5hffhxHMf7otY2hwKPGaUwOtvjON3FrvgdCOXWAVn+kvvufWbzCFhY25K20fNeLuad1PPjk7gccCYXAJct9rZRLId3ojT4rG7JbOjBqb6QfTv/eHlyYDyHHmc9LWh+rFbyhFeHN3hZegbLrX0Nt5smpaHbvOxee1d7OaRjkyGII0bEnmWMEkXExJLMGPfUJ4xTimqnNbkD6QHK+vrBUI4/StpK1zWZNcA4DlfUeIPcrGbJy+6bf4+L6xap4a761F/W38wVLCXfXIP7jPzBWHqa10SlESiJREoiURUm6Rrn7s3g9Hi/wBlgqScIP1Rn3vzFdCbE4fSwYe2piiY2WUuMjw0Bz91zmt3nandaABc5AZKu+/jZ57rSbyJBl+BJQBzJ6mRJmAHeSqEAenFXFfGZIHNHK/gbrYcfp3VFBLG3WwP4SHewKZujJ0QNhNW0XT9Q+5/WzSQIt2HvtQ8m8jUJcqUW7VVHWhmUcKgxsjAAMKjN92my5bmpmseQRxWL6QXgztLvbzTX0eOGwsUE8eowxTyJOxZc29xFLOl2r9XJgSROFzGPIPExK+Q5WroQSLLWOmHszs7YWlrs3o+m6VLrl2kEdxeJY2wmtIFVTJcGTgLQz3HDxDBykRkfkTCWvKWB8zw1v8Av6LM0GGSVbwyJtydPee7isR0MtC0CC7uNm9otO0u4uGkM2l6jc2VuZLuN85t2mdS5fI4oVLsc9bFnMcQatXUr6d5B/Uc16xDC30chZI31ajmt23FeDI061v7yfWhBfW5nuhbQJIy28ltKYmtmMKJDLbTwETBwtxLGQyKo8lnbGlywbYQDmpK3mdCXd/ZWV1fXOnCKG1heZzHf6ghPCMqijxvBeRsRooHlMygAk0BJNgvsjY2NLnaBQh0HtINrpGGHB43dTXUa5JxGVjhUZPM5EHEpPapB760Ta3B5AxtezogbrhyFzZ3eTY93WucNosVZPiZhH2Ghvfm4juv6irU7Hy+6rb8oh+sWtCwx31qH+4z8wXvB3fXYP7rPzhWTqdV0qlESiJREoiURVF3/wCxM8mrzui+RKkD8bcl5RLEfWecZ5AH2Vkpdr8NwWlayqk+kztG0XeRc520A6yRexteyn7ZTEoY8Kja45tLxYa9Iu9601N3IA8tix9CgAfTnP0VpkvlQdK61PC1o/mJcfVugdma2N2Lb3RaO/NRpZbtdV0K6lu9npUMM7cdxplyfc8jelPKQKfQQ8TIPJDlMILaLaZtQbygDsGSjjFcBbUuMkNs87aW7DpbqOnBZrW99+2N1GYIrKy05mHC92ZFlMee1o166UA+gmKb2dtZqLEadxzN1gYNlp3O9IZdZbb1EnwWn7F7pPEDLPM73V7cEtcXkhLO7MeJgCxLBS3M8RLOQCTyULJeDz0j2/Quu62YOR7AOXZdTFguF09Cz0M3kZnTuA5e3jws3g7u4dQiVZMxyxnignTlJC/I5U8iQSBlcjOAQVIVhmqmmZO3dd3Hkr3E8JgxCPckGfB3EfEcx+qyGzG/3azToxbyQWurog4Y7l5OqnK9iiQ9bHxkDtLRlj3yP21qMuCyB3ojwt71ENXsTVNefNC45gi3gSCPYsVtImtbRSJ92pIrWxicSDTrQnEjjsMjB5M8jjiMrlefCsZbirKUGB53l8OJ9wXN/lTkxTZhkYdGd2W4Y/Ita5uoNibutm0GwI57rgpV04iIIqAIqBVRVGAoUYUADkAAAAPRWZrMMjmjdE4XaQQR1EWsuPhUv3/OEneve/G/NTBuwk666tcf3iufVweWfk4TXJwwqSgxoUTvsSAg82j0ge9vrUybKv8A/Lract/jBP3cz7FZ2pdXUCURKIlESiJRFoO9XZ/rFSYDmnkN/hJyvyNkfpVB3lRo3MpYsSj/APmdx/8AS8+ie52X3ltmA1fm3OiPHMdo19XsUT3Ok1AtLjfWt8ZOoW6Re0s2nQ2NytyLG1N/HBf3JsvHxBbyxTBJmtxNA7ItwIVfq5VfhcleMgI0t7IVNPiNSaecnNhLbGxuCPdc9yscUxCanhEkFrh2dxfIg++y2LT9gteuIEutMk2e1+0ceRPa3lxp7N/02i1OEN3FTdAqeRA54l8bPhucUpt1gH2WWFi2ulb+8jB7CR7d5ejNsdtMMiTZ+ZvXBqukyqf+7c27Y+FBV5DQVUJBbILjQ5g+9ZePbOIZujcOwg/Ba9d7q9pnb7zoNwoP99qekIB7UvJWx8Ck/DUl0OOSMi3akbzhxGV+3LX2rLt2+gDbGJ5PaB8V71r0fNpeB5r1dE0a1jUvLcXeoy3RiQdrMkVtbQAL3l7xAOXM91w/H3fYjHeb+4Kwm8oLzlDAAetxPqAb7VFOw+1Yl1C/S3v4tWsbXxeJbyCxNlBJcnrWuUgD3V280cadRiZpAHZm4RwhXkzGEVs05c+S1hYCw8fcsRimFz7eYHW0NY1gNgacgWDJmhxa65JPJrv5XEcVKYNbevysljfE90bwQ5pIIOoINiO4qfOjBoTM01y3mJ97j9bsAXx/hXA/TqJtpsOh/wDYx1g6fmy0j73ont6Q7F0D5KsPe8y1j+i30Wf1EAu8BYfeKsLWDXRSURKIlESiJRF4rq2DqyNzVgQR6jVnWUkVZA+mnF2PaWuHMEKpG8xuDm6hRBruitDIUbmO1W/GXuP8R3Gvz+2m2eqdnq51LLfd1jfwe3ge0aOHA9RBMiUtS2eMPb3jkVpm3mwNvqNpcWVyvFDcxtHIAcEZ5qynuZGCupwcMoPOsdhuNVGHzsqIj6TDcfA9RGR6ldSASMLHaFcvdu90es7K3zCCe6tgx9z3tpLLAlxGCSMtE4w4HnwOSVP4ylWbsLANrqfF4BLA6zx02X9Jp945O0PbcDSaikMLt1wy4Hms7pfTN2uhAC6nM4AxiWG1mPzpIGf28XOtzbibuatfMtPBeTU+mztfIMHUpEH/AC7azQ/OW34x7GFXAxAnivQgbyUW6lJrm0FysVzc3t+2Qc3M8skMCntchiY4lHPkqjixgAkgHb8OYaxo82M+PV2rPYdhclY8RwNz4ngOsn/erNW/3bbAxaZZxWkXMJlpHxgyStzeQjJxk8gMnhUKMnFSRTU7YIxG39TzU/4Zh7KCnbAzhqeZOp/3QKWNidnpbySKCEFnc49SqPOdj3Ko5k+zmSAcjLVMp4TLIch6+Q71+X/lN2Sm/biqoKRmUz2zDk0StDnuPINeX9trDMgK7WyOzEdnbxW8fmxrgnvdjzZz62bJ9XZ3VEdVUuqZXSv1Pq5DuU74RhcOF0kdHD0WC1+Ljxcesm5WZq0WYSiJREoiURKIlEWP1rREnThf9Fh2qfSP3jvrVdo9nKTH6U01UOtjx0mHmPeNCFd01U+nfvM7xzUX61s9JAcMMr3OPNP8D6j9NcSbS7H4hs/KRUN3oyfRlaCWO5X/AIT/ACnuJAut6payOoF2nPiOK17WtDhuY2huI454nGGjlRZEb4VYEcu0HHI1p0FRLTvEsLi1w0LSQR3hXjmhws4XChDaHoSaHOxaNbm1zzxbzAr8lwk+B6lIA9VSBS7f4tALOLH/ANTc/wDgWrHuw+I6XHZ/m69PSegtosZy5u7j/hmmVV/+EULf+1ZB3lGxJ+QDG9bWkn/kXD1L0yghbrc9/wALLMbe7t7Wxt4RaQxW8auUKxIF4uJchmPa7eT5zEk57a6H8ie1U1dXVVFO8u3oxILnQscGm3K4ePBSNs3I1jnwsAAtfwy96wmxO7661CTq7aMtgjjkPKKMHvd+wenhGWPcDXWdTVxUzd6Q9g4nuWyYli1NhsfnKh1uTdXO7B79BxKuPur3VQ6XDwJ98mfnNMRgsfxVH4KDuXJz2nJ7I+rq+Srdnk0aDl/lcz4zWMxLEH4h5trXlrWX+1uMJLQTxzcT+i3isYsUlESiJREoiURKIlESiL8SRBgQQCD2gjIPsqlLCyZhjlaHNIsQQCCORByXpri03BzUcbeaLHEyGNeEOGyBnGRjs9Hb2Vx55VdnKLCJ6eWhi3BKH74F927d21ho3InIWHUtzwmpfM1wkN7WtzWrVBF1nkpdF7+ibIQXsgiuE6yJfvnDkgFl5LnhIJHPszzqd/I0+WPHnSR3FoH3PK7mD9P8Kyq8QmoY/OU7t1xyvkcjra6lnTNKigRY4USKNRhURQqj2AAe3vrst73PO84knmVoE08k7zJK4ucdSTc+te3XhUEoiURKIlESiJREoiURKIlEWL2h0VZ4yrciPKVh2g/wPYRWnbVbN02P0Jpqi4I9Jjxq1wGvWCMiOPaAVfUdU6nk3m9hHNRBX54KRUoilHYrRFjiVxzaVVYk9wIyFHqH0/JXc3k32bpsLwyOrYS6SoYx73HgC24YOoXPWTnyA0TE6p0spYdGkgfFbFUtLDpREoiURKIlESiJREoiURKIlEX5Zcgj015c3eBHNfQbKHNT0aSJirKeR5HBww9INfnZjezGIYRUvp54nkA2a8NO68cCDmMxwvlodFJEFTHM0OaR2cQvDa6c7kKqsSfQD9Po+E1YUGCV9fMIKaB7nE26JsL8SbWA6yQFUkmZGN5xACmHS7Tq440PMqiqT6wAK/QvBqE4fQU9G43McTGE8y1oBPqUczyeckc8cSSvarMqglESiJREoiURKIlESiJREoiURKIlESiJREoiURKIlESiJRF//9k=", Se = class Se {
  constructor() {
    this.name = "Plug", this.logo = Se.logo, this.url = "https://plugwallet.ooo/", this.readyState = "NotDetected", this.initPlug();
  }
  // Initialize Plug and set readyState accordingly
  initPlug() {
    typeof window < "u" && window.ic && window.ic.plug ? (this.readyState = "Installed", window.ic.plug.isConnected().then((r) => {
      this.readyState = r ? "Connected" : "Installed";
    })) : this.readyState = "NotDetected";
  }
  // Check if the wallet is available
  async isAvailable() {
    return this.readyState !== "NotDetected";
  }
  // Check if the wallet is connected
  async isConnected() {
    var r, o;
    return ((o = (r = window.ic) == null ? void 0 : r.plug) == null ? void 0 : o.isConnected()) || !1;
  }
  // Connect to Plug wallet
  async connect(r) {
    if (this.readyState === "NotDetected")
      throw window.open(this.url, "_blank"), new Error("Plug wallet is not available");
    if (await window.ic.plug.isConnected())
      this.readyState = "Connected";
    else
      try {
        if (console.log("Connecting to Plug wallet...", r), !await window.ic.plug.requestConnect({
          whitelist: r.whitelist || [],
          host: r.hostUrl || "https://mainnet.dfinity.network",
          timeout: r.timeout || 1e3 * 60 * 60 * 24 * 7,
          onConnectionUpdate: this.handleConnectionUpdate.bind(this)
        }))
          throw new Error("User declined the connection request");
        this.readyState = "Connected";
      } catch (f) {
        throw console.error("Failed to connect to Plug wallet:", f), f;
      }
    const i = await this.getPrincipal();
    return await this.getAccountId(), {
      owner: i,
      subaccount: null
    };
  }
  // Disconnect from Plug wallet
  async disconnect() {
    if (window.ic && window.ic.plug && window.ic.plug.disconnect)
      await window.ic.plug.disconnect(), this.readyState = "Disconnected";
    else
      throw new Error("Plug wallet is not available");
  }
  // Get the user's principal ID
  async getPrincipal() {
    if (window.ic && window.ic.plug && window.ic.plug.principalId)
      return L0.fromText(window.ic.plug.principalId);
    throw new Error("Plug wallet is not available or principal ID is unavailable");
  }
  // Get the user's account ID
  async getAccountId() {
    if (window.ic && window.ic.plug && window.ic.plug.accountId)
      return window.ic.plug.accountId;
    throw new Error("Plug wallet is not available or account ID is unavailable");
  }
  // Create an actor for interacting with a canister
  async createActor(r, o) {
    var i;
    if (!((i = window.ic) != null && i.plug))
      throw new Error("Plug wallet is not available");
    return window.ic.plug.createActor({
      canisterId: r,
      interfaceFactory: o
    });
  }
  // Handle connection updates
  handleConnectionUpdate(r) {
    r.sessionExpired && (this.readyState = "Disconnected");
  }
};
Se.logo = fi;
let be = Se;
const yt = [
  {
    id: "nns",
    name: "Internet Identity",
    icon: me.logo,
    adapter: me
  },
  {
    id: "plug",
    name: "Plug Wallet",
    icon: be.logo,
    adapter: be
  },
  {
    id: "nfid",
    name: "NFID",
    icon: De.logo,
    adapter: De
  }
];
class ui {
  constructor(r = {}) {
    this.account = null, this.activeWallet = null, this.provider = null, this.actorCache = /* @__PURE__ */ new Map(), this.isDev = !0, this.fetchRootKeys = !1, this.config = {
      hostUrl: r.hostUrl || "http://localhost:4943",
      identityProvider: r.identityProvider || "https://identity.ic0.app",
      localStorageKey: r.localStorageKey || "pnpConnectedWallet",
      timeout: r.timeout || 1e3 * 60 * 60 * 24,
      // 1 day in milliseconds
      verifyQuerySignatures: r.verifyQuerySignatures ?? !1,
      delegationTimeout: r.delegationTimeout || BigInt(24 * 60 * 60 * 1e3 * 1e3 * 1e3),
      isDev: r.isDev ?? !0,
      ...r
    };
  }
  async connect(r) {
    const o = yt.find((A) => A.id === r);
    if (!o)
      throw new Error(`Wallet ${r} not found`);
    const i = new o.adapter();
    if (!await i.isAvailable())
      throw new Error(`Wallet ${r} is not available`);
    const f = await i.connect(this.config);
    return this.account = f, this.activeWallet = yt.find((A) => A.id === r), this.provider = i, localStorage.setItem(this.config.localStorageKey, r), f;
  }
  async disconnect() {
    this.provider && await this.provider.disconnect(), this.account = null, this.provider = null, this.activeWallet = null, this.actorCache.clear(), localStorage.removeItem(this.config.localStorageKey);
  }
  async getActor(r, o, i) {
    var s;
    const { anon: f = !1 } = i || {}, A = `${((s = this.account) == null ? void 0 : s.owner.toString()) || "anonymous"}-${r}-${f}`;
    let b;
    return f || !this.provider ? b = await this.createAnonymousActor(r, o) : (console.log("Creating actor with provider"), b = await this.provider.createActor(r, o)), this.actorCache.set(A, b), b;
  }
  async createAnonymousActor(r, o) {
    const i = ee.createSync({
      host: this.config.hostUrl,
      verifyQuerySignatures: this.config.verifyQuerySignatures
    });
    this.fetchRootKeys && await i.fetchRootKey();
    const f = typeof o == "function" ? o : o._idlFactory || o.idlFactory;
    return pe.createActor(f, { agent: i, canisterId: r });
  }
  isWalletConnected() {
    return !!this.activeWallet;
  }
}
const Ci = yt, Tr = (u = {}) => new ui(u);
class li {
  constructor(r = {}, o) {
    this.state = "idle", this.transactionLlist = {}, this.stepsList = [], this.completed = [], this.activeStep = "", this.failedSteps = [], this.transactionResults = {}, this.trxArray = [], this._info = !1, this._adapterObj = !1, !(!o || !o.provider) && (Object.entries(r).forEach(([i, f]) => {
      typeof f == "object" && (this.transactionLlist[i] = f);
    }), Object.keys(this.transactionLlist).length > 0 && (this.stepsList = Object.keys(this.transactionLlist), this._adapterObj = o));
  }
  _prepareTrxArry() {
    this.trxArray = [];
    let r = [];
    Object.values(this.transactionLlist).forEach((i) => {
      r.push(i), i.updateNextStep && (this.trxArray.push(r), r = []);
    }), r.length > 0 && this.trxArray.push(r);
    let o = 0;
    return this.trxArray.forEach((i, f) => {
      i.forEach((A, b) => {
        this.trxArray[f][b].stepIndex = o, this.trxArray[f][b].state = "idle", this.trxArray[f][b].onSuccessMain = async (s, m) => {
          const h = m.stepIndex, p = A.onSuccess, D = A.onFail;
          if (s.err || s.Err || s.ERR)
            return this.failedSteps.push(this.stepsList[h]), this.transactionResults[this.stepsList[h]] = s, this.state = "error", m.state = "error", D && await D(s), !1;
          this.completed.push(this.stepsList[h]), this.activeStep = this.stepsList[h + 1], this.transactionResults[this.stepsList[h]] = s, m.state = "done", typeof m.updateNextStep == "function" && this.trxArray[f + 1] && await m.updateNextStep(s, this.trxArray[f + 1][0]), p && await p(s);
        }, this.trxArray[f][b].onFailMain = async (s, m) => {
          const h = A.onFail, p = m.stepIndex;
          return console.error(`error in  ${this.stepsList[p]} `, this.trxArray[f][b]), console.error(s), this.failedSteps.push(this.stepsList[p]), this.activeStep = this.stepsList[p], this.state = "error", m.state = "error", h && await h(s), !1;
        }, o++;
      });
    }), this.trxArray;
  }
  async retryExecute() {
    this.state = "idle", this.failedSteps = [], await this.execute();
  }
  async execute() {
    if (!this._adapterObj || !this._adapterObj.provider)
      throw new Error("Provider not found");
    this.state = "processing", await this._processBatch();
  }
  async _processBatch() {
    this.trxArray.length === 0 && this._prepareTrxArry();
    for (const r of this.trxArray)
      for (const o of r)
        o.state !== "error" && await this._adapterObj.provider.processTransaction(o);
  }
}
const hi = "http://localhost:4943", di = "ryjl3-tyaaa-aaaaa-aaaba-cai", wi = gt;
let Et = null;
function pi() {
  return Et || (Et = Tr({
    whitelist: [di],
    host: hi,
    identityProvider: ""
  })), Et;
}
typeof window < "u" && (window.pnp = {
  PNP: Tr,
  BatchTransact: li,
  nns: { AnonymousIdentity: Vr, Principal: L0 },
  getPNPAdapter: pi
});
export {
  mi as AnonymousIdentity,
  li as BatchTransact,
  hi as HOSTURL,
  di as NNS_CANISTER_ID,
  _i as Principal,
  Tr as createPNP,
  wi as principalIdFromHex,
  Ci as walletsList
};
//# sourceMappingURL=plug-n-play.es.js.map
