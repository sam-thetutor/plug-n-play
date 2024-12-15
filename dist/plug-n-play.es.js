import { HttpAgent, Actor, Cbor, Expiry, SubmitRequestType, compare as compare$1, requestIdOf, Certificate, LookupStatus, lookupResultToBuffer, AnonymousIdentity } from "@dfinity/agent";
import { AnonymousIdentity as AnonymousIdentity2 } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { Principal as Principal2 } from "@dfinity/principal";
import { AuthClient } from "@dfinity/auth-client";
import { principalToSubAccount } from "@dfinity/utils";
import { DelegationChain, Delegation, Ed25519KeyIdentity, DelegationIdentity } from "@dfinity/identity";
import { lebDecode, PipeArrayBuffer } from "@dfinity/candid";
const dfinityLogo = "data:image/webp;base64,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";
var AdapterState = /* @__PURE__ */ ((AdapterState2) => {
  AdapterState2["READY"] = "ready";
  AdapterState2["CONNECTING"] = "connecting";
  AdapterState2["CONNECTED"] = "connected";
  AdapterState2["DISCONNECTED"] = "disconnected";
  AdapterState2["LOADING"] = "loading";
  return AdapterState2;
})(AdapterState || {});
const _NNSAdapter = class _NNSAdapter {
  constructor(config) {
    this.name = "Internet Identity";
    this.logo = _NNSAdapter.logo;
    this.authClient = null;
    this.agent = null;
    this.state = AdapterState.READY;
    this.url = "https://identity.ic0.app";
    this.config = {
      verifyQuerySignatures: config == null ? void 0 : config.verifyQuerySignatures,
      fetchRootKeys: config == null ? void 0 : config.fetchRootKeys,
      identityProviderUrl: (config == null ? void 0 : config.isDev) ? "https://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:4943/#authorize" : "https://identity.ic0.app/authenticate",
      derivationOrigin: (config == null ? void 0 : config.derivationOrigin) || "https://localhost:5173",
      ...config
    };
    AuthClient.create({
      idleOptions: {
        idleTimeout: Number(1e3 * 60 * 60 * 24),
        disableDefaultIdleCallback: true
      }
    }).then((client) => {
      var _a2, _b;
      this.authClient = client;
      (_b = (_a2 = this.authClient.idleManager) == null ? void 0 : _a2.registerCallback) == null ? void 0 : _b.call(_a2, () => this.refreshLogin());
    });
  }
  setState(newState) {
    this.state = newState;
  }
  getState() {
    return this.state;
  }
  // Helper method to initialize the HttpAgent
  async initAgent(identity, host) {
    this.agent = new HttpAgent({
      identity,
      host,
      verifyQuerySignatures: this.config.verifyQuerySignatures
    });
    if (this.config.fetchRootKeys) {
      try {
        await this.agent.fetchRootKey();
      } catch (e) {
        console.warn("Unable to fetch root key. Check to ensure that your local replica is running");
        console.error(e);
      }
    }
  }
  // Checks if the wallet is available
  async isAvailable() {
    return true;
  }
  getIdentityProvider(isDev) {
    return isDev ? this.config.identityProvider : "https://identity.ic0.app";
  }
  // Connects to the wallet using the provided configuration
  async connect(config) {
    try {
      this.setState(AdapterState.LOADING);
      this.config = config;
      while (!this.authClient) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      const isAuthenticated = await this.authClient.isAuthenticated();
      if (!isAuthenticated) {
        return new Promise((resolve, reject) => {
          this.authClient.login({
            derivationOrigin: this.config.derivationOrigin,
            identityProvider: this.getIdentityProvider(config.isDev || true),
            maxTimeToLive: BigInt(Number(config.delegationTimeout || 24 * 60 * 60 * 1e3 * 1e3 * 1e3)),
            onSuccess: () => {
              this._continueLogin(config.hostUrl || this.url).then((account2) => {
                this.setState(AdapterState.READY);
                resolve(account2);
              }).catch(reject);
            },
            onError: (error) => {
              this.setState(AdapterState.READY);
              reject(new Error("Authentication failed: " + error));
            }
          });
        });
      }
      const account = await this._continueLogin(config.hostUrl || this.url);
      this.setState(AdapterState.READY);
      return account;
    } catch (error) {
      this.setState(AdapterState.READY);
      throw error;
    }
  }
  async _continueLogin(host) {
    try {
      const identity = this.authClient.getIdentity();
      const principal = identity.getPrincipal();
      await this.initAgent(identity, host);
      return {
        owner: principal,
        subaccount: principalToSubAccount(principal)
      };
    } catch (error) {
      console.error("Error during _continueLogin:", error);
      throw error;
    }
  }
  // Check if the wallet is connected
  async isConnected() {
    return this.authClient ? this.authClient.isAuthenticated() : false;
  }
  // Create an actor for interacting with a canister
  async createActor(canisterId, idl) {
    if (!this.agent) {
      throw new Error("Agent is not initialized. Ensure the wallet is connected.");
    }
    return Actor.createActor(idl, {
      agent: this.agent,
      canisterId
    });
  }
  // Get the principal associated with the wallet
  async getPrincipal() {
    if (!this.authClient) {
      throw new Error("AuthClient is not initialized. Ensure the wallet is connected.");
    }
    return this.authClient.getIdentity().getPrincipal();
  }
  // Get the subaccount associated with the wallet
  async getAccountId() {
    if (!this.authClient) {
      throw new Error("AuthClient is not initialized. Ensure the wallet is connected.");
    }
    const principal = this.authClient.getIdentity().getPrincipal();
    const subAccount = principalToSubAccount(principal);
    if (subAccount) {
      return subAccount.toString() || "";
    }
  }
  // Refresh login when session is about to expire
  async refreshLogin() {
    try {
      await this.connect(this.config);
    } catch (error) {
      console.error("Failed to refresh login:", error);
      await this.disconnect();
    }
  }
  async undelegatedActor(canisterId, idlFactory) {
    return this.createActor(canisterId, idlFactory);
  }
  // Disconnects from the wallet
  async disconnect() {
    try {
      this.setState(AdapterState.LOADING);
      if (this.authClient) {
        await this.authClient.logout();
        this.authClient = null;
      }
      if (this.agent) {
        this.agent = null;
      }
      localStorage.removeItem(this.config.localStorageKey);
      this.setState(AdapterState.READY);
    } catch (error) {
      this.setState(AdapterState.READY);
      throw error;
    }
  }
};
_NNSAdapter.logo = dfinityLogo;
let NNSAdapter = _NNSAdapter;
const plugLogo = "data:image/webp;base64,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";
const _PlugAdapter = class _PlugAdapter {
  constructor() {
    this.logo = _PlugAdapter.logo;
    this.name = "Plug";
    this.url = "https://plugwallet.ooo/";
    this.readyState = "NotDetected";
    this.initPlug();
  }
  // Initialize Plug and set readyState accordingly
  initPlug() {
    if (typeof window !== "undefined" && window.ic && window.ic.plug) {
      this.readyState = "Installed";
      window.ic.plug.isConnected().then((connected) => {
        this.readyState = connected ? "Connected" : "Installed";
      });
    } else {
      this.readyState = "NotDetected";
    }
  }
  // Check if the wallet is available
  async isAvailable() {
    return this.readyState !== "NotDetected";
  }
  // Connect to Plug wallet
  async connect(config) {
    const isConnected = await window.ic.plug.isConnected();
    if (!isConnected) {
      try {
        console.log("Connecting to Plug wallet...", config);
        const connected = await window.ic.plug.requestConnect({
          whitelist: config.whitelist || [],
          host: config.hostUrl || "https://mainnet.dfinity.network",
          timeout: config.timeout || 1e3 * 60 * 60 * 24 * 7,
          onConnectionUpdate: () => console.log("Plug connection updated")
        });
        if (!connected) {
          throw new Error("User declined the connection request");
        }
        this.readyState = "Connected";
      } catch (e) {
        console.error("Failed to connect to Plug wallet:", e);
        throw e;
      }
    } else {
      this.readyState = "Connected";
    }
    const principal = await this.getPrincipal();
    await this.getAccountId();
    return {
      owner: principal,
      subaccount: null
    };
  }
  // Disconnect from Plug wallet
  async disconnect() {
    if (window.ic && window.ic.plug && window.ic.plug.disconnect) {
      await window.ic.plug.disconnect();
      this.readyState = "Disconnected";
    } else {
      throw new Error("Plug wallet is not available");
    }
  }
  // Get the user's principal ID
  async getPrincipal() {
    if (window.ic && window.ic.plug && window.ic.plug.principalId) {
      return Principal.fromText(window.ic.plug.principalId);
    } else {
      throw new Error("Plug wallet is not available or principal ID is unavailable");
    }
  }
  // Get the user's account ID
  async getAccountId() {
    if (window.ic && window.ic.plug && window.ic.plug.accountId) {
      return window.ic.plug.accountId;
    } else {
      throw new Error("Plug wallet is not available or account ID is unavailable");
    }
  }
  // Create an actor to interact with a canister
  async createActor(canisterId, idlFactory) {
    if (!canisterId || !idlFactory) {
      throw new Error("Canister ID and IDL factory are required");
    }
    if (window.ic && window.ic.plug && window.ic.plug.createActor) {
      try {
        const actor = await window.ic.plug.createActor({
          canisterId,
          interfaceFactory: idlFactory
        });
        return actor;
      } catch (e) {
        console.error("Failed to create actor through Plug:", e);
        throw e;
      }
    } else {
      throw new Error("Plug wallet is not available or not connected");
    }
  }
  async isConnected() {
    if (window.ic && window.ic.plug && window.ic.plug.isConnected) {
      return await window.ic.plug.isConnected();
    } else {
      return false;
    }
  }
  // Handle connection updates (e.g., account switching)
  handleConnectionUpdate() {
    var _a2, _b, _c, _d, _e, _f, _g, _h;
    if (((_b = (_a2 = window.ic) == null ? void 0 : _a2.plug) == null ? void 0 : _b.principalId) && ((_d = (_c = window.ic) == null ? void 0 : _c.plug) == null ? void 0 : _d.accountId)) {
      const { principalId, accountId } = window.ic.plug;
      this.readyState = "Connected";
      const event = new CustomEvent("plug-connection-update", {
        detail: {
          principalId,
          accountId,
          readyState: this.readyState
        }
      });
      window.dispatchEvent(event);
    } else {
      this.readyState = "Disconnected";
      const event = new CustomEvent("plug-connection-update", {
        detail: {
          principalId: null,
          accountId: null,
          readyState: this.readyState
        }
      });
      window.dispatchEvent(event);
    }
    console.log("Plug connection updated:", {
      readyState: this.readyState,
      principalId: (_f = (_e = window.ic) == null ? void 0 : _e.plug) == null ? void 0 : _f.principalId,
      accountId: (_h = (_g = window.ic) == null ? void 0 : _g.plug) == null ? void 0 : _h.accountId
    });
  }
};
_PlugAdapter.logo = plugLogo;
let PlugAdapter = _PlugAdapter;
function getDefaultExportFromCjs$1(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
const CRC_TABLE = new Int32Array([
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
function ensureBuffer(input) {
  if (Buffer.isBuffer(input)) {
    return input;
  }
  if (typeof input === "number") {
    return Buffer.alloc(input);
  } else if (typeof input === "string") {
    return Buffer.from(input);
  } else {
    throw new Error("input must be buffer, number, or string, received " + typeof input);
  }
}
function bufferizeInt(num) {
  const tmp = ensureBuffer(4);
  tmp.writeInt32BE(num, 0);
  return tmp;
}
function _crc32(buf, previous) {
  buf = ensureBuffer(buf);
  if (Buffer.isBuffer(previous)) {
    previous = previous.readUInt32BE(0);
  }
  let crc = ~~previous ^ -1;
  for (var n = 0; n < buf.length; n++) {
    crc = CRC_TABLE[(crc ^ buf[n]) & 255] ^ crc >>> 8;
  }
  return crc ^ -1;
}
function crc32() {
  return bufferizeInt(_crc32.apply(null, arguments));
}
crc32.signed = function() {
  return _crc32.apply(null, arguments);
};
crc32.unsigned = function() {
  return _crc32.apply(null, arguments) >>> 0;
};
var bufferCrc32 = crc32;
const index = /* @__PURE__ */ getDefaultExportFromCjs$1(bufferCrc32);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var buffer = {};
var base64Js = {};
base64Js.byteLength = byteLength;
base64Js.toByteArray = toByteArray;
base64Js.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
}
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  var validLen = b64.indexOf("=");
  if (validLen === -1) validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
}
function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  var curByte = 0;
  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
  var i;
  for (i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 255;
    arr[curByte++] = tmp >> 8 & 255;
    arr[curByte++] = tmp & 255;
  }
  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 255;
  }
  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 255;
    arr[curByte++] = tmp & 255;
  }
  return arr;
}
function tripletToBase64(num) {
  return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (uint8[i + 2] & 255);
    output.push(tripletToBase64(tmp));
  }
  return output.join("");
}
function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3;
  var parts = [];
  var maxChunkLength = 16383;
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(
      lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
    );
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(
      lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
    );
  }
  return parts.join("");
}
var ieee754 = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
ieee754.read = function(buffer2, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer2[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer2[offset + i], i += d, nBits -= 8) {
  }
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer2[offset + i], i += d, nBits -= 8) {
  }
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
ieee754.write = function(buffer2, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);
  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer2[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
  }
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer2[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
  }
  buffer2[offset + i - d] |= s * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(exports) {
  const base64 = base64Js;
  const ieee754$1 = ieee754;
  const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
  exports.Buffer = Buffer2;
  exports.SlowBuffer = SlowBuffer;
  exports.INSPECT_MAX_BYTES = 50;
  const K_MAX_LENGTH = 2147483647;
  exports.kMaxLength = K_MAX_LENGTH;
  Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
  if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
  }
  function typedArraySupport() {
    try {
      const arr = new Uint8Array(1);
      const proto = { foo: function() {
        return 42;
      } };
      Object.setPrototypeOf(proto, Uint8Array.prototype);
      Object.setPrototypeOf(arr, proto);
      return arr.foo() === 42;
    } catch (e) {
      return false;
    }
  }
  Object.defineProperty(Buffer2.prototype, "parent", {
    enumerable: true,
    get: function() {
      if (!Buffer2.isBuffer(this)) return void 0;
      return this.buffer;
    }
  });
  Object.defineProperty(Buffer2.prototype, "offset", {
    enumerable: true,
    get: function() {
      if (!Buffer2.isBuffer(this)) return void 0;
      return this.byteOffset;
    }
  });
  function createBuffer(length) {
    if (length > K_MAX_LENGTH) {
      throw new RangeError('The value "' + length + '" is invalid for option "size"');
    }
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer2.prototype);
    return buf;
  }
  function Buffer2(arg, encodingOrOffset, length) {
    if (typeof arg === "number") {
      if (typeof encodingOrOffset === "string") {
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      }
      return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
  }
  Buffer2.poolSize = 8192;
  function from(value, encodingOrOffset, length) {
    if (typeof value === "string") {
      return fromString(value, encodingOrOffset);
    }
    if (ArrayBuffer.isView(value)) {
      return fromArrayView(value);
    }
    if (value == null) {
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
      );
    }
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
      return fromArrayBuffer(value, encodingOrOffset, length);
    }
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
      return fromArrayBuffer(value, encodingOrOffset, length);
    }
    if (typeof value === "number") {
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    }
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) {
      return Buffer2.from(valueOf, encodingOrOffset, length);
    }
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
      return Buffer2.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    }
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
    );
  }
  Buffer2.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
  };
  Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(Buffer2, Uint8Array);
  function assertSize(size) {
    if (typeof size !== "number") {
      throw new TypeError('"size" argument must be of type number');
    } else if (size < 0) {
      throw new RangeError('The value "' + size + '" is invalid for option "size"');
    }
  }
  function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) {
      return createBuffer(size);
    }
    if (fill !== void 0) {
      return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    }
    return createBuffer(size);
  }
  Buffer2.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
  };
  function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
  }
  Buffer2.allocUnsafe = function(size) {
    return allocUnsafe(size);
  };
  Buffer2.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
  };
  function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") {
      encoding = "utf8";
    }
    if (!Buffer2.isEncoding(encoding)) {
      throw new TypeError("Unknown encoding: " + encoding);
    }
    const length = byteLength2(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) {
      buf = buf.slice(0, actual);
    }
    return buf;
  }
  function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for (let i = 0; i < length; i += 1) {
      buf[i] = array[i] & 255;
    }
    return buf;
  }
  function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
      const copy = new Uint8Array(arrayView);
      return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
  }
  function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) {
      throw new RangeError('"offset" is outside of buffer bounds');
    }
    if (array.byteLength < byteOffset + (length || 0)) {
      throw new RangeError('"length" is outside of buffer bounds');
    }
    let buf;
    if (byteOffset === void 0 && length === void 0) {
      buf = new Uint8Array(array);
    } else if (length === void 0) {
      buf = new Uint8Array(array, byteOffset);
    } else {
      buf = new Uint8Array(array, byteOffset, length);
    }
    Object.setPrototypeOf(buf, Buffer2.prototype);
    return buf;
  }
  function fromObject(obj) {
    if (Buffer2.isBuffer(obj)) {
      const len = checked(obj.length) | 0;
      const buf = createBuffer(len);
      if (buf.length === 0) {
        return buf;
      }
      obj.copy(buf, 0, 0, len);
      return buf;
    }
    if (obj.length !== void 0) {
      if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
        return createBuffer(0);
      }
      return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) {
      return fromArrayLike(obj.data);
    }
  }
  function checked(length) {
    if (length >= K_MAX_LENGTH) {
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    }
    return length | 0;
  }
  function SlowBuffer(length) {
    if (+length != length) {
      length = 0;
    }
    return Buffer2.alloc(+length);
  }
  Buffer2.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer2.prototype;
  };
  Buffer2.compare = function compare2(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer2.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer2.from(b, b.offset, b.byteLength);
    if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    }
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for (let i = 0, len = Math.min(x, y); i < len; ++i) {
      if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
      }
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  };
  Buffer2.isEncoding = function isEncoding(encoding) {
    switch (String(encoding).toLowerCase()) {
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
        return true;
      default:
        return false;
    }
  };
  Buffer2.concat = function concat(list, length) {
    if (!Array.isArray(list)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    if (list.length === 0) {
      return Buffer2.alloc(0);
    }
    let i;
    if (length === void 0) {
      length = 0;
      for (i = 0; i < list.length; ++i) {
        length += list[i].length;
      }
    }
    const buffer2 = Buffer2.allocUnsafe(length);
    let pos = 0;
    for (i = 0; i < list.length; ++i) {
      let buf = list[i];
      if (isInstance(buf, Uint8Array)) {
        if (pos + buf.length > buffer2.length) {
          if (!Buffer2.isBuffer(buf)) buf = Buffer2.from(buf);
          buf.copy(buffer2, pos);
        } else {
          Uint8Array.prototype.set.call(
            buffer2,
            buf,
            pos
          );
        }
      } else if (!Buffer2.isBuffer(buf)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      } else {
        buf.copy(buffer2, pos);
      }
      pos += buf.length;
    }
    return buffer2;
  };
  function byteLength2(string, encoding) {
    if (Buffer2.isBuffer(string)) {
      return string.length;
    }
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
      return string.byteLength;
    }
    if (typeof string !== "string") {
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
      );
    }
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    let loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case "ascii":
        case "latin1":
        case "binary":
          return len;
        case "utf8":
        case "utf-8":
          return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return len * 2;
        case "hex":
          return len >>> 1;
        case "base64":
          return base64ToBytes(string).length;
        default:
          if (loweredCase) {
            return mustMatch ? -1 : utf8ToBytes(string).length;
          }
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer2.byteLength = byteLength2;
  function slowToString(encoding, start, end) {
    let loweredCase = false;
    if (start === void 0 || start < 0) {
      start = 0;
    }
    if (start > this.length) {
      return "";
    }
    if (end === void 0 || end > this.length) {
      end = this.length;
    }
    if (end <= 0) {
      return "";
    }
    end >>>= 0;
    start >>>= 0;
    if (end <= start) {
      return "";
    }
    if (!encoding) encoding = "utf8";
    while (true) {
      switch (encoding) {
        case "hex":
          return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
          return utf8Slice(this, start, end);
        case "ascii":
          return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
          return latin1Slice(this, start, end);
        case "base64":
          return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return utf16leSlice(this, start, end);
        default:
          if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
          encoding = (encoding + "").toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer2.prototype._isBuffer = true;
  function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
  }
  Buffer2.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    }
    for (let i = 0; i < len; i += 2) {
      swap(this, i, i + 1);
    }
    return this;
  };
  Buffer2.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    }
    for (let i = 0; i < len; i += 4) {
      swap(this, i, i + 3);
      swap(this, i + 1, i + 2);
    }
    return this;
  };
  Buffer2.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    }
    for (let i = 0; i < len; i += 8) {
      swap(this, i, i + 7);
      swap(this, i + 1, i + 6);
      swap(this, i + 2, i + 5);
      swap(this, i + 3, i + 4);
    }
    return this;
  };
  Buffer2.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
  };
  Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
  Buffer2.prototype.equals = function equals(b) {
    if (!Buffer2.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer2.compare(this, b) === 0;
  };
  Buffer2.prototype.inspect = function inspect() {
    let str = "";
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
  };
  if (customInspectSymbol) {
    Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
  }
  Buffer2.prototype.compare = function compare2(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) {
      target = Buffer2.from(target, target.offset, target.byteLength);
    }
    if (!Buffer2.isBuffer(target)) {
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
      );
    }
    if (start === void 0) {
      start = 0;
    }
    if (end === void 0) {
      end = target ? target.length : 0;
    }
    if (thisStart === void 0) {
      thisStart = 0;
    }
    if (thisEnd === void 0) {
      thisEnd = this.length;
    }
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
      throw new RangeError("out of range index");
    }
    if (thisStart >= thisEnd && start >= end) {
      return 0;
    }
    if (thisStart >= thisEnd) {
      return -1;
    }
    if (start >= end) {
      return 1;
    }
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for (let i = 0; i < len; ++i) {
      if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
      }
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  };
  function bidirectionalIndexOf(buffer2, val, byteOffset, encoding, dir) {
    if (buffer2.length === 0) return -1;
    if (typeof byteOffset === "string") {
      encoding = byteOffset;
      byteOffset = 0;
    } else if (byteOffset > 2147483647) {
      byteOffset = 2147483647;
    } else if (byteOffset < -2147483648) {
      byteOffset = -2147483648;
    }
    byteOffset = +byteOffset;
    if (numberIsNaN(byteOffset)) {
      byteOffset = dir ? 0 : buffer2.length - 1;
    }
    if (byteOffset < 0) byteOffset = buffer2.length + byteOffset;
    if (byteOffset >= buffer2.length) {
      if (dir) return -1;
      else byteOffset = buffer2.length - 1;
    } else if (byteOffset < 0) {
      if (dir) byteOffset = 0;
      else return -1;
    }
    if (typeof val === "string") {
      val = Buffer2.from(val, encoding);
    }
    if (Buffer2.isBuffer(val)) {
      if (val.length === 0) {
        return -1;
      }
      return arrayIndexOf(buffer2, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
      val = val & 255;
      if (typeof Uint8Array.prototype.indexOf === "function") {
        if (dir) {
          return Uint8Array.prototype.indexOf.call(buffer2, val, byteOffset);
        } else {
          return Uint8Array.prototype.lastIndexOf.call(buffer2, val, byteOffset);
        }
      }
      return arrayIndexOf(buffer2, [val], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
  }
  function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== void 0) {
      encoding = String(encoding).toLowerCase();
      if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
        if (arr.length < 2 || val.length < 2) {
          return -1;
        }
        indexSize = 2;
        arrLength /= 2;
        valLength /= 2;
        byteOffset /= 2;
      }
    }
    function read(buf, i2) {
      if (indexSize === 1) {
        return buf[i2];
      } else {
        return buf.readUInt16BE(i2 * indexSize);
      }
    }
    let i;
    if (dir) {
      let foundIndex = -1;
      for (i = byteOffset; i < arrLength; i++) {
        if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
          if (foundIndex === -1) foundIndex = i;
          if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
          if (foundIndex !== -1) i -= i - foundIndex;
          foundIndex = -1;
        }
      }
    } else {
      if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
      for (i = byteOffset; i >= 0; i--) {
        let found = true;
        for (let j = 0; j < valLength; j++) {
          if (read(arr, i + j) !== read(val, j)) {
            found = false;
            break;
          }
        }
        if (found) return i;
      }
    }
    return -1;
  }
  Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
  };
  Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
  };
  Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
  };
  function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) {
      length = remaining;
    } else {
      length = Number(length);
      if (length > remaining) {
        length = remaining;
      }
    }
    const strLen = string.length;
    if (length > strLen / 2) {
      length = strLen / 2;
    }
    let i;
    for (i = 0; i < length; ++i) {
      const parsed = parseInt(string.substr(i * 2, 2), 16);
      if (numberIsNaN(parsed)) return i;
      buf[offset + i] = parsed;
    }
    return i;
  }
  function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
  }
  function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
  }
  function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
  }
  function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
  }
  Buffer2.prototype.write = function write(string, offset, length, encoding) {
    if (offset === void 0) {
      encoding = "utf8";
      length = this.length;
      offset = 0;
    } else if (length === void 0 && typeof offset === "string") {
      encoding = offset;
      length = this.length;
      offset = 0;
    } else if (isFinite(offset)) {
      offset = offset >>> 0;
      if (isFinite(length)) {
        length = length >>> 0;
        if (encoding === void 0) encoding = "utf8";
      } else {
        encoding = length;
        length = void 0;
      }
    } else {
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    }
    const remaining = this.length - offset;
    if (length === void 0 || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
      throw new RangeError("Attempt to write outside buffer bounds");
    }
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case "hex":
          return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
          return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
          return asciiWrite(this, string, offset, length);
        case "base64":
          return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ucs2Write(this, string, offset, length);
        default:
          if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  };
  Buffer2.prototype.toJSON = function toJSON() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
      return base64.fromByteArray(buf);
    } else {
      return base64.fromByteArray(buf.slice(start, end));
    }
  }
  function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while (i < end) {
      const firstByte = buf[i];
      let codePoint = null;
      let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
      if (i + bytesPerSequence <= end) {
        let secondByte, thirdByte, fourthByte, tempCodePoint;
        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 128) {
              codePoint = firstByte;
            }
            break;
          case 2:
            secondByte = buf[i + 1];
            if ((secondByte & 192) === 128) {
              tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
              if (tempCodePoint > 127) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 3:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
              tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
              if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 4:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            fourthByte = buf[i + 3];
            if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
              tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
              if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                codePoint = tempCodePoint;
              }
            }
        }
      }
      if (codePoint === null) {
        codePoint = 65533;
        bytesPerSequence = 1;
      } else if (codePoint > 65535) {
        codePoint -= 65536;
        res.push(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
      }
      res.push(codePoint);
      i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
  }
  const MAX_ARGUMENTS_LENGTH = 4096;
  function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints);
    }
    let res = "";
    let i = 0;
    while (i < len) {
      res += String.fromCharCode.apply(
        String,
        codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
      );
    }
    return res;
  }
  function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for (let i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i] & 127);
    }
    return ret;
  }
  function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for (let i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i]);
    }
    return ret;
  }
  function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for (let i = start; i < end; ++i) {
      out += hexSliceLookupTable[buf[i]];
    }
    return out;
  }
  function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    for (let i = 0; i < bytes.length - 1; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res;
  }
  Buffer2.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === void 0 ? len : ~~end;
    if (start < 0) {
      start += len;
      if (start < 0) start = 0;
    } else if (start > len) {
      start = len;
    }
    if (end < 0) {
      end += len;
      if (end < 0) end = 0;
    } else if (end > len) {
      end = len;
    }
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    Object.setPrototypeOf(newBuf, Buffer2.prototype);
    return newBuf;
  };
  function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
  }
  Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength3, noAssert) {
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength3, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while (++i < byteLength3 && (mul *= 256)) {
      val += this[offset + i] * mul;
    }
    return val;
  };
  Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength3, noAssert) {
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) {
      checkOffset(offset, byteLength3, this.length);
    }
    let val = this[offset + --byteLength3];
    let mul = 1;
    while (byteLength3 > 0 && (mul *= 256)) {
      val += this[offset + --byteLength3] * mul;
    }
    return val;
  };
  Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
  };
  Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
  };
  Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
  };
  Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
  };
  Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
  };
  Buffer2.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === void 0 || last === void 0) {
      boundsError(offset, this.length - 8);
    }
    const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
  });
  Buffer2.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === void 0 || last === void 0) {
      boundsError(offset, this.length - 8);
    }
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
  });
  Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength3, noAssert) {
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength3, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while (++i < byteLength3 && (mul *= 256)) {
      val += this[offset + i] * mul;
    }
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength3);
    return val;
  };
  Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength3, noAssert) {
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength3, this.length);
    let i = byteLength3;
    let mul = 1;
    let val = this[offset + --i];
    while (i > 0 && (mul *= 256)) {
      val += this[offset + --i] * mul;
    }
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength3);
    return val;
  };
  Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 128)) return this[offset];
    return (255 - this[offset] + 1) * -1;
  };
  Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
  };
  Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 32768 ? val | 4294901760 : val;
  };
  Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
  };
  Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
  };
  Buffer2.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === void 0 || last === void 0) {
      boundsError(offset, this.length - 8);
    }
    const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
  });
  Buffer2.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === void 0 || last === void 0) {
      boundsError(offset, this.length - 8);
    }
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
  });
  Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754$1.read(this, offset, true, 23, 4);
  };
  Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754$1.read(this, offset, false, 23, 4);
  };
  Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754$1.read(this, offset, true, 52, 8);
  };
  Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754$1.read(this, offset, false, 52, 8);
  };
  function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer2.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
  }
  Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength3, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) {
      const maxBytes = Math.pow(2, 8 * byteLength3) - 1;
      checkInt(this, value, offset, byteLength3, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 255;
    while (++i < byteLength3 && (mul *= 256)) {
      this[offset + i] = value / mul & 255;
    }
    return offset + byteLength3;
  };
  Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength3, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength3 = byteLength3 >>> 0;
    if (!noAssert) {
      const maxBytes = Math.pow(2, 8 * byteLength3) - 1;
      checkInt(this, value, offset, byteLength3, maxBytes, 0);
    }
    let i = byteLength3 - 1;
    let mul = 1;
    this[offset + i] = value & 255;
    while (--i >= 0 && (mul *= 256)) {
      this[offset + i] = value / mul & 255;
    }
    return offset + byteLength3;
  };
  Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
    this[offset] = value & 255;
    return offset + 1;
  };
  Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
  };
  Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
  };
  Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
    return offset + 4;
  };
  Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
  };
  function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
  }
  function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
  }
  Buffer2.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  Buffer2.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength3, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      const limit = Math.pow(2, 8 * byteLength3 - 1);
      checkInt(this, value, offset, byteLength3, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 255;
    while (++i < byteLength3 && (mul *= 256)) {
      if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
        sub = 1;
      }
      this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength3;
  };
  Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength3, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      const limit = Math.pow(2, 8 * byteLength3 - 1);
      checkInt(this, value, offset, byteLength3, limit - 1, -limit);
    }
    let i = byteLength3 - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 255;
    while (--i >= 0 && (mul *= 256)) {
      if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
        sub = 1;
      }
      this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength3;
  };
  Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
    if (value < 0) value = 255 + value + 1;
    this[offset] = value & 255;
    return offset + 1;
  };
  Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
  };
  Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
  };
  Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
  };
  Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    if (value < 0) value = 4294967295 + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
  };
  Buffer2.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  Buffer2.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
  }
  function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4);
    }
    ieee754$1.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
  }
  Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
  };
  Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
  };
  function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8);
    }
    ieee754$1.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
  }
  Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
  };
  Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
  };
  Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer2.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    if (targetStart < 0) {
      throw new RangeError("targetStart out of bounds");
    }
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
      this.copyWithin(targetStart, start, end);
    } else {
      Uint8Array.prototype.set.call(
        target,
        this.subarray(start, end),
        targetStart
      );
    }
    return len;
  };
  Buffer2.prototype.fill = function fill(val, start, end, encoding) {
    if (typeof val === "string") {
      if (typeof start === "string") {
        encoding = start;
        start = 0;
        end = this.length;
      } else if (typeof end === "string") {
        encoding = end;
        end = this.length;
      }
      if (encoding !== void 0 && typeof encoding !== "string") {
        throw new TypeError("encoding must be a string");
      }
      if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      if (val.length === 1) {
        const code2 = val.charCodeAt(0);
        if (encoding === "utf8" && code2 < 128 || encoding === "latin1") {
          val = code2;
        }
      }
    } else if (typeof val === "number") {
      val = val & 255;
    } else if (typeof val === "boolean") {
      val = Number(val);
    }
    if (start < 0 || this.length < start || this.length < end) {
      throw new RangeError("Out of range index");
    }
    if (end <= start) {
      return this;
    }
    start = start >>> 0;
    end = end === void 0 ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") {
      for (i = start; i < end; ++i) {
        this[i] = val;
      }
    } else {
      const bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
      const len = bytes.length;
      if (len === 0) {
        throw new TypeError('The value "' + val + '" is invalid for argument "value"');
      }
      for (i = 0; i < end - start; ++i) {
        this[i + start] = bytes[i % len];
      }
    }
    return this;
  };
  const errors = {};
  function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
      constructor() {
        super();
        Object.defineProperty(this, "message", {
          value: getMessage.apply(this, arguments),
          writable: true,
          configurable: true
        });
        this.name = `${this.name} [${sym}]`;
        this.stack;
        delete this.name;
      }
      get code() {
        return sym;
      }
      set code(value) {
        Object.defineProperty(this, "code", {
          configurable: true,
          enumerable: true,
          value,
          writable: true
        });
      }
      toString() {
        return `${this.name} [${sym}]: ${this.message}`;
      }
    };
  }
  E(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(name) {
      if (name) {
        return `${name} is outside of buffer bounds`;
      }
      return "Attempt to access memory outside buffer bounds";
    },
    RangeError
  );
  E(
    "ERR_INVALID_ARG_TYPE",
    function(name, actual) {
      return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
    },
    TypeError
  );
  E(
    "ERR_OUT_OF_RANGE",
    function(str, range, input) {
      let msg = `The value of "${str}" is out of range.`;
      let received = input;
      if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
        received = addNumericalSeparator(String(input));
      } else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
          received = addNumericalSeparator(received);
        }
        received += "n";
      }
      msg += ` It must be ${range}. Received ${received}`;
      return msg;
    },
    RangeError
  );
  function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for (; i >= start + 4; i -= 3) {
      res = `_${val.slice(i - 3, i)}${res}`;
    }
    return `${val.slice(0, i)}${res}`;
  }
  function checkBounds(buf, offset, byteLength3) {
    validateNumber(offset, "offset");
    if (buf[offset] === void 0 || buf[offset + byteLength3] === void 0) {
      boundsError(offset, buf.length - (byteLength3 + 1));
    }
  }
  function checkIntBI(value, min, max, buf, offset, byteLength3) {
    if (value > max || value < min) {
      const n = typeof min === "bigint" ? "n" : "";
      let range;
      {
        if (min === 0 || min === BigInt(0)) {
          range = `>= 0${n} and < 2${n} ** ${(byteLength3 + 1) * 8}${n}`;
        } else {
          range = `>= -(2${n} ** ${(byteLength3 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength3 + 1) * 8 - 1}${n}`;
        }
      }
      throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength3);
  }
  function validateNumber(value, name) {
    if (typeof value !== "number") {
      throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
    }
  }
  function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
      validateNumber(value, type);
      throw new errors.ERR_OUT_OF_RANGE("offset", "an integer", value);
    }
    if (length < 0) {
      throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    }
    throw new errors.ERR_OUT_OF_RANGE(
      "offset",
      `>= ${0} and <= ${length}`,
      value
    );
  }
  const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
  function base64clean(str) {
    str = str.split("=")[0];
    str = str.trim().replace(INVALID_BASE64_RE, "");
    if (str.length < 2) return "";
    while (str.length % 4 !== 0) {
      str = str + "=";
    }
    return str;
  }
  function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for (let i = 0; i < length; ++i) {
      codePoint = string.charCodeAt(i);
      if (codePoint > 55295 && codePoint < 57344) {
        if (!leadSurrogate) {
          if (codePoint > 56319) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
            continue;
          } else if (i + 1 === length) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
            continue;
          }
          leadSurrogate = codePoint;
          continue;
        }
        if (codePoint < 56320) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
          leadSurrogate = codePoint;
          continue;
        }
        codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
      } else if (leadSurrogate) {
        if ((units -= 3) > -1) bytes.push(239, 191, 189);
      }
      leadSurrogate = null;
      if (codePoint < 128) {
        if ((units -= 1) < 0) break;
        bytes.push(codePoint);
      } else if (codePoint < 2048) {
        if ((units -= 2) < 0) break;
        bytes.push(
          codePoint >> 6 | 192,
          codePoint & 63 | 128
        );
      } else if (codePoint < 65536) {
        if ((units -= 3) < 0) break;
        bytes.push(
          codePoint >> 12 | 224,
          codePoint >> 6 & 63 | 128,
          codePoint & 63 | 128
        );
      } else if (codePoint < 1114112) {
        if ((units -= 4) < 0) break;
        bytes.push(
          codePoint >> 18 | 240,
          codePoint >> 12 & 63 | 128,
          codePoint >> 6 & 63 | 128,
          codePoint & 63 | 128
        );
      } else {
        throw new Error("Invalid code point");
      }
    }
    return bytes;
  }
  function asciiToBytes(str) {
    const byteArray = [];
    for (let i = 0; i < str.length; ++i) {
      byteArray.push(str.charCodeAt(i) & 255);
    }
    return byteArray;
  }
  function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for (let i = 0; i < str.length; ++i) {
      if ((units -= 2) < 0) break;
      c = str.charCodeAt(i);
      hi = c >> 8;
      lo = c % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }
    return byteArray;
  }
  function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
  }
  function blitBuffer(src, dst, offset, length) {
    let i;
    for (i = 0; i < length; ++i) {
      if (i + offset >= dst.length || i >= src.length) break;
      dst[i + offset] = src[i];
    }
    return i;
  }
  function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
  }
  function numberIsNaN(obj) {
    return obj !== obj;
  }
  const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for (let i = 0; i < 16; ++i) {
      const i16 = i * 16;
      for (let j = 0; j < 16; ++j) {
        table[i16 + j] = alphabet[i] + alphabet[j];
      }
    }
    return table;
  }();
  function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
  }
  function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
  }
})(buffer);
var cryptoJs = { exports: {} };
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var core = { exports: {} };
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var hasRequiredCore;
function requireCore() {
  if (hasRequiredCore) return core.exports;
  hasRequiredCore = 1;
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory();
      }
    })(commonjsGlobal, function() {
      var CryptoJS = CryptoJS || function(Math2, undefined$1) {
        var crypto2;
        if (typeof window !== "undefined" && window.crypto) {
          crypto2 = window.crypto;
        }
        if (typeof self !== "undefined" && self.crypto) {
          crypto2 = self.crypto;
        }
        if (typeof globalThis !== "undefined" && globalThis.crypto) {
          crypto2 = globalThis.crypto;
        }
        if (!crypto2 && typeof window !== "undefined" && window.msCrypto) {
          crypto2 = window.msCrypto;
        }
        if (!crypto2 && typeof globalThis !== "undefined" && globalThis.crypto) {
          crypto2 = globalThis.crypto;
        }
        if (!crypto2 && typeof commonjsRequire === "function") {
          try {
            crypto2 = require$$0;
          } catch (err) {
          }
        }
        var cryptoSecureRandomInt = function() {
          if (crypto2) {
            if (typeof crypto2.getRandomValues === "function") {
              try {
                return crypto2.getRandomValues(new Uint32Array(1))[0];
              } catch (err) {
              }
            }
            if (typeof crypto2.randomBytes === "function") {
              try {
                return crypto2.randomBytes(4).readInt32LE();
              } catch (err) {
              }
            }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        };
        var create = Object.create || /* @__PURE__ */ function() {
          function F() {
          }
          return function(obj) {
            var subtype;
            F.prototype = obj;
            subtype = new F();
            F.prototype = null;
            return subtype;
          };
        }();
        var C = {};
        var C_lib = C.lib = {};
        var Base = C_lib.Base = /* @__PURE__ */ function() {
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
            extend: function(overrides) {
              var subtype = create(this);
              if (overrides) {
                subtype.mixIn(overrides);
              }
              if (!subtype.hasOwnProperty("init") || this.init === subtype.init) {
                subtype.init = function() {
                  subtype.$super.init.apply(this, arguments);
                };
              }
              subtype.init.prototype = subtype;
              subtype.$super = this;
              return subtype;
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
              var instance = this.extend();
              instance.init.apply(instance, arguments);
              return instance;
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
            mixIn: function(properties) {
              for (var propertyName in properties) {
                if (properties.hasOwnProperty(propertyName)) {
                  this[propertyName] = properties[propertyName];
                }
              }
              if (properties.hasOwnProperty("toString")) {
                this.toString = properties.toString;
              }
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
        }();
        var WordArray = C_lib.WordArray = Base.extend({
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
          init: function(words, sigBytes) {
            words = this.words = words || [];
            if (sigBytes != undefined$1) {
              this.sigBytes = sigBytes;
            } else {
              this.sigBytes = words.length * 4;
            }
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
          toString: function(encoder) {
            return (encoder || Hex).stringify(this);
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
          concat: function(wordArray) {
            var thisWords = this.words;
            var thatWords = wordArray.words;
            var thisSigBytes = this.sigBytes;
            var thatSigBytes = wordArray.sigBytes;
            this.clamp();
            if (thisSigBytes % 4) {
              for (var i = 0; i < thatSigBytes; i++) {
                var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
              }
            } else {
              for (var j = 0; j < thatSigBytes; j += 4) {
                thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
              }
            }
            this.sigBytes += thatSigBytes;
            return this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var words = this.words;
            var sigBytes = this.sigBytes;
            words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
            words.length = Math2.ceil(sigBytes / 4);
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
            var clone2 = Base.clone.call(this);
            clone2.words = this.words.slice(0);
            return clone2;
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
          random: function(nBytes) {
            var words = [];
            for (var i = 0; i < nBytes; i += 4) {
              words.push(cryptoSecureRandomInt());
            }
            return new WordArray.init(words, nBytes);
          }
        });
        var C_enc = C.enc = {};
        var Hex = C_enc.Hex = {
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
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var hexChars = [];
            for (var i = 0; i < sigBytes; i++) {
              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              hexChars.push((bite >>> 4).toString(16));
              hexChars.push((bite & 15).toString(16));
            }
            return hexChars.join("");
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
          parse: function(hexStr) {
            var hexStrLength = hexStr.length;
            var words = [];
            for (var i = 0; i < hexStrLength; i += 2) {
              words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
            }
            return new WordArray.init(words, hexStrLength / 2);
          }
        };
        var Latin1 = C_enc.Latin1 = {
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
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var latin1Chars = [];
            for (var i = 0; i < sigBytes; i++) {
              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              latin1Chars.push(String.fromCharCode(bite));
            }
            return latin1Chars.join("");
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
          parse: function(latin1Str) {
            var latin1StrLength = latin1Str.length;
            var words = [];
            for (var i = 0; i < latin1StrLength; i++) {
              words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
            }
            return new WordArray.init(words, latin1StrLength);
          }
        };
        var Utf8 = C_enc.Utf8 = {
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
          stringify: function(wordArray) {
            try {
              return decodeURIComponent(escape(Latin1.stringify(wordArray)));
            } catch (e) {
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
          parse: function(utf8Str) {
            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
          }
        };
        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new WordArray.init();
            this._nDataBytes = 0;
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
          _append: function(data) {
            if (typeof data == "string") {
              data = Utf8.parse(data);
            }
            this._data.concat(data);
            this._nDataBytes += data.sigBytes;
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
          _process: function(doFlush) {
            var processedWords;
            var data = this._data;
            var dataWords = data.words;
            var dataSigBytes = data.sigBytes;
            var blockSize = this.blockSize;
            var blockSizeBytes = blockSize * 4;
            var nBlocksReady = dataSigBytes / blockSizeBytes;
            if (doFlush) {
              nBlocksReady = Math2.ceil(nBlocksReady);
            } else {
              nBlocksReady = Math2.max((nBlocksReady | 0) - this._minBufferSize, 0);
            }
            var nWordsReady = nBlocksReady * blockSize;
            var nBytesReady = Math2.min(nWordsReady * 4, dataSigBytes);
            if (nWordsReady) {
              for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                this._doProcessBlock(dataWords, offset);
              }
              processedWords = dataWords.splice(0, nWordsReady);
              data.sigBytes -= nBytesReady;
            }
            return new WordArray.init(processedWords, nBytesReady);
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
            var clone2 = Base.clone.call(this);
            clone2._data = this._data.clone();
            return clone2;
          },
          _minBufferSize: 0
        });
        C_lib.Hasher = BufferedBlockAlgorithm.extend({
          /**
           * Configuration options.
           */
          cfg: Base.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(cfg) {
            this.cfg = this.cfg.extend(cfg);
            this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            BufferedBlockAlgorithm.reset.call(this);
            this._doReset();
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
          update: function(messageUpdate) {
            this._append(messageUpdate);
            this._process();
            return this;
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
          finalize: function(messageUpdate) {
            if (messageUpdate) {
              this._append(messageUpdate);
            }
            var hash = this._doFinalize();
            return hash;
          },
          blockSize: 512 / 32,
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
          _createHelper: function(hasher) {
            return function(message, cfg) {
              return new hasher.init(cfg).finalize(message);
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
          _createHmacHelper: function(hasher) {
            return function(message, key) {
              return new C_algo.HMAC.init(hasher, key).finalize(message);
            };
          }
        });
        var C_algo = C.algo = {};
        return C;
      }(Math);
      return CryptoJS;
    });
  })(core);
  return core.exports;
}
var x64Core = { exports: {} };
var hasRequiredX64Core;
function requireX64Core() {
  if (hasRequiredX64Core) return x64Core.exports;
  hasRequiredX64Core = 1;
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory(requireCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function(undefined$1) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var X32WordArray = C_lib.WordArray;
        var C_x64 = C.x64 = {};
        C_x64.Word = Base.extend({
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
          init: function(high, low) {
            this.high = high;
            this.low = low;
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
        });
        C_x64.WordArray = Base.extend({
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
          init: function(words, sigBytes) {
            words = this.words = words || [];
            if (sigBytes != undefined$1) {
              this.sigBytes = sigBytes;
            } else {
              this.sigBytes = words.length * 8;
            }
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
            var x64Words = this.words;
            var x64WordsLength = x64Words.length;
            var x32Words = [];
            for (var i = 0; i < x64WordsLength; i++) {
              var x64Word = x64Words[i];
              x32Words.push(x64Word.high);
              x32Words.push(x64Word.low);
            }
            return X32WordArray.create(x32Words, this.sigBytes);
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
            var clone2 = Base.clone.call(this);
            var words = clone2.words = this.words.slice(0);
            var wordsLength = words.length;
            for (var i = 0; i < wordsLength; i++) {
              words[i] = words[i].clone();
            }
            return clone2;
          }
        });
      })();
      return CryptoJS;
    });
  })(x64Core);
  return x64Core.exports;
}
var libTypedarrays = { exports: {} };
var hasRequiredLibTypedarrays;
function requireLibTypedarrays() {
  if (hasRequiredLibTypedarrays) return libTypedarrays.exports;
  hasRequiredLibTypedarrays = 1;
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory(requireCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        if (typeof ArrayBuffer != "function") {
          return;
        }
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var superInit = WordArray.init;
        var subInit = WordArray.init = function(typedArray) {
          if (typedArray instanceof ArrayBuffer) {
            typedArray = new Uint8Array(typedArray);
          }
          if (typedArray instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) {
            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
          }
          if (typedArray instanceof Uint8Array) {
            var typedArrayByteLength = typedArray.byteLength;
            var words = [];
            for (var i = 0; i < typedArrayByteLength; i++) {
              words[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;
            }
            superInit.call(this, words, typedArrayByteLength);
          } else {
            superInit.apply(this, arguments);
          }
        };
        subInit.prototype = WordArray;
      })();
      return CryptoJS.lib.WordArray;
    });
  })(libTypedarrays);
  return libTypedarrays.exports;
}
var encUtf16 = { exports: {} };
var hasRequiredEncUtf16;
function requireEncUtf16() {
  if (hasRequiredEncUtf16) return encUtf16.exports;
  hasRequiredEncUtf16 = 1;
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory(requireCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        C_enc.Utf16 = C_enc.Utf16BE = {
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
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var utf16Chars = [];
            for (var i = 0; i < sigBytes; i += 2) {
              var codePoint = words[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
              utf16Chars.push(String.fromCharCode(codePoint));
            }
            return utf16Chars.join("");
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
          parse: function(utf16Str) {
            var utf16StrLength = utf16Str.length;
            var words = [];
            for (var i = 0; i < utf16StrLength; i++) {
              words[i >>> 1] |= utf16Str.charCodeAt(i) << 16 - i % 2 * 16;
            }
            return WordArray.create(words, utf16StrLength * 2);
          }
        };
        C_enc.Utf16LE = {
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
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var utf16Chars = [];
            for (var i = 0; i < sigBytes; i += 2) {
              var codePoint = swapEndian(words[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
              utf16Chars.push(String.fromCharCode(codePoint));
            }
            return utf16Chars.join("");
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
          parse: function(utf16Str) {
            var utf16StrLength = utf16Str.length;
            var words = [];
            for (var i = 0; i < utf16StrLength; i++) {
              words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << 16 - i % 2 * 16);
            }
            return WordArray.create(words, utf16StrLength * 2);
          }
        };
        function swapEndian(word) {
          return word << 8 & 4278255360 | word >>> 8 & 16711935;
        }
      })();
      return CryptoJS.enc.Utf16;
    });
  })(encUtf16);
  return encUtf16.exports;
}
var encBase64 = { exports: {} };
var hasRequiredEncBase64;
function requireEncBase64() {
  if (hasRequiredEncBase64) return encBase64.exports;
  hasRequiredEncBase64 = 1;
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory(requireCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        C_enc.Base64 = {
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
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var map = this._map;
            wordArray.clamp();
            var base64Chars = [];
            for (var i = 0; i < sigBytes; i += 3) {
              var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
              var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
              var triplet = byte1 << 16 | byte2 << 8 | byte3;
              for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
                base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              while (base64Chars.length % 4) {
                base64Chars.push(paddingChar);
              }
            }
            return base64Chars.join("");
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
          parse: function(base64Str) {
            var base64StrLength = base64Str.length;
            var map = this._map;
            var reverseMap = this._reverseMap;
            if (!reverseMap) {
              reverseMap = this._reverseMap = [];
              for (var j = 0; j < map.length; j++) {
                reverseMap[map.charCodeAt(j)] = j;
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              var paddingIndex = base64Str.indexOf(paddingChar);
              if (paddingIndex !== -1) {
                base64StrLength = paddingIndex;
              }
            }
            return parseLoop(base64Str, base64StrLength, reverseMap);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function parseLoop(base64Str, base64StrLength, reverseMap) {
          var words = [];
          var nBytes = 0;
          for (var i = 0; i < base64StrLength; i++) {
            if (i % 4) {
              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
              var bitsCombined = bits1 | bits2;
              words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
              nBytes++;
            }
          }
          return WordArray.create(words, nBytes);
        }
      })();
      return CryptoJS.enc.Base64;
    });
  })(encBase64);
  return encBase64.exports;
}
var encBase64url = { exports: {} };
var hasRequiredEncBase64url;
function requireEncBase64url() {
  if (hasRequiredEncBase64url) return encBase64url.exports;
  hasRequiredEncBase64url = 1;
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory(requireCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        C_enc.Base64url = {
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
          stringify: function(wordArray, urlSafe) {
            if (urlSafe === void 0) {
              urlSafe = true;
            }
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var map = urlSafe ? this._safe_map : this._map;
            wordArray.clamp();
            var base64Chars = [];
            for (var i = 0; i < sigBytes; i += 3) {
              var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
              var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
              var triplet = byte1 << 16 | byte2 << 8 | byte3;
              for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
                base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              while (base64Chars.length % 4) {
                base64Chars.push(paddingChar);
              }
            }
            return base64Chars.join("");
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
          parse: function(base64Str, urlSafe) {
            if (urlSafe === void 0) {
              urlSafe = true;
            }
            var base64StrLength = base64Str.length;
            var map = urlSafe ? this._safe_map : this._map;
            var reverseMap = this._reverseMap;
            if (!reverseMap) {
              reverseMap = this._reverseMap = [];
              for (var j = 0; j < map.length; j++) {
                reverseMap[map.charCodeAt(j)] = j;
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              var paddingIndex = base64Str.indexOf(paddingChar);
              if (paddingIndex !== -1) {
                base64StrLength = paddingIndex;
              }
            }
            return parseLoop(base64Str, base64StrLength, reverseMap);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function parseLoop(base64Str, base64StrLength, reverseMap) {
          var words = [];
          var nBytes = 0;
          for (var i = 0; i < base64StrLength; i++) {
            if (i % 4) {
              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
              var bitsCombined = bits1 | bits2;
              words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
              nBytes++;
            }
          }
          return WordArray.create(words, nBytes);
        }
      })();
      return CryptoJS.enc.Base64url;
    });
  })(encBase64url);
  return encBase64url.exports;
}
var md5 = { exports: {} };
var hasRequiredMd5;
function requireMd5() {
  if (hasRequiredMd5) return md5.exports;
  hasRequiredMd5 = 1;
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory(requireCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function(Math2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var T = [];
        (function() {
          for (var i = 0; i < 64; i++) {
            T[i] = Math2.abs(Math2.sin(i + 1)) * 4294967296 | 0;
          }
        })();
        var MD5 = C_algo.MD5 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(M, offset) {
            for (var i = 0; i < 16; i++) {
              var offset_i = offset + i;
              var M_offset_i = M[offset_i];
              M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
            }
            var H = this._hash.words;
            var M_offset_0 = M[offset + 0];
            var M_offset_1 = M[offset + 1];
            var M_offset_2 = M[offset + 2];
            var M_offset_3 = M[offset + 3];
            var M_offset_4 = M[offset + 4];
            var M_offset_5 = M[offset + 5];
            var M_offset_6 = M[offset + 6];
            var M_offset_7 = M[offset + 7];
            var M_offset_8 = M[offset + 8];
            var M_offset_9 = M[offset + 9];
            var M_offset_10 = M[offset + 10];
            var M_offset_11 = M[offset + 11];
            var M_offset_12 = M[offset + 12];
            var M_offset_13 = M[offset + 13];
            var M_offset_14 = M[offset + 14];
            var M_offset_15 = M[offset + 15];
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            a = FF(a, b, c, d, M_offset_0, 7, T[0]);
            d = FF(d, a, b, c, M_offset_1, 12, T[1]);
            c = FF(c, d, a, b, M_offset_2, 17, T[2]);
            b = FF(b, c, d, a, M_offset_3, 22, T[3]);
            a = FF(a, b, c, d, M_offset_4, 7, T[4]);
            d = FF(d, a, b, c, M_offset_5, 12, T[5]);
            c = FF(c, d, a, b, M_offset_6, 17, T[6]);
            b = FF(b, c, d, a, M_offset_7, 22, T[7]);
            a = FF(a, b, c, d, M_offset_8, 7, T[8]);
            d = FF(d, a, b, c, M_offset_9, 12, T[9]);
            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
            a = FF(a, b, c, d, M_offset_12, 7, T[12]);
            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
            b = FF(b, c, d, a, M_offset_15, 22, T[15]);
            a = GG(a, b, c, d, M_offset_1, 5, T[16]);
            d = GG(d, a, b, c, M_offset_6, 9, T[17]);
            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
            b = GG(b, c, d, a, M_offset_0, 20, T[19]);
            a = GG(a, b, c, d, M_offset_5, 5, T[20]);
            d = GG(d, a, b, c, M_offset_10, 9, T[21]);
            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
            b = GG(b, c, d, a, M_offset_4, 20, T[23]);
            a = GG(a, b, c, d, M_offset_9, 5, T[24]);
            d = GG(d, a, b, c, M_offset_14, 9, T[25]);
            c = GG(c, d, a, b, M_offset_3, 14, T[26]);
            b = GG(b, c, d, a, M_offset_8, 20, T[27]);
            a = GG(a, b, c, d, M_offset_13, 5, T[28]);
            d = GG(d, a, b, c, M_offset_2, 9, T[29]);
            c = GG(c, d, a, b, M_offset_7, 14, T[30]);
            b = GG(b, c, d, a, M_offset_12, 20, T[31]);
            a = HH(a, b, c, d, M_offset_5, 4, T[32]);
            d = HH(d, a, b, c, M_offset_8, 11, T[33]);
            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
            a = HH(a, b, c, d, M_offset_1, 4, T[36]);
            d = HH(d, a, b, c, M_offset_4, 11, T[37]);
            c = HH(c, d, a, b, M_offset_7, 16, T[38]);
            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
            a = HH(a, b, c, d, M_offset_13, 4, T[40]);
            d = HH(d, a, b, c, M_offset_0, 11, T[41]);
            c = HH(c, d, a, b, M_offset_3, 16, T[42]);
            b = HH(b, c, d, a, M_offset_6, 23, T[43]);
            a = HH(a, b, c, d, M_offset_9, 4, T[44]);
            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
            b = HH(b, c, d, a, M_offset_2, 23, T[47]);
            a = II(a, b, c, d, M_offset_0, 6, T[48]);
            d = II(d, a, b, c, M_offset_7, 10, T[49]);
            c = II(c, d, a, b, M_offset_14, 15, T[50]);
            b = II(b, c, d, a, M_offset_5, 21, T[51]);
            a = II(a, b, c, d, M_offset_12, 6, T[52]);
            d = II(d, a, b, c, M_offset_3, 10, T[53]);
            c = II(c, d, a, b, M_offset_10, 15, T[54]);
            b = II(b, c, d, a, M_offset_1, 21, T[55]);
            a = II(a, b, c, d, M_offset_8, 6, T[56]);
            d = II(d, a, b, c, M_offset_15, 10, T[57]);
            c = II(c, d, a, b, M_offset_6, 15, T[58]);
            b = II(b, c, d, a, M_offset_13, 21, T[59]);
            a = II(a, b, c, d, M_offset_4, 6, T[60]);
            d = II(d, a, b, c, M_offset_11, 10, T[61]);
            c = II(c, d, a, b, M_offset_2, 15, T[62]);
            b = II(b, c, d, a, M_offset_9, 21, T[63]);
            H[0] = H[0] + a | 0;
            H[1] = H[1] + b | 0;
            H[2] = H[2] + c | 0;
            H[3] = H[3] + d | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            var nBitsTotalH = Math2.floor(nBitsTotal / 4294967296);
            var nBitsTotalL = nBitsTotal;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 16711935 | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 4278255360;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 16711935 | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 4278255360;
            data.sigBytes = (dataWords.length + 1) * 4;
            this._process();
            var hash = this._hash;
            var H = hash.words;
            for (var i = 0; i < 4; i++) {
              var H_i = H[i];
              H[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
            }
            return hash;
          },
          clone: function() {
            var clone2 = Hasher.clone.call(this);
            clone2._hash = this._hash.clone();
            return clone2;
          }
        });
        function FF(a, b, c, d, x, s, t) {
          var n = a + (b & c | ~b & d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function GG(a, b, c, d, x, s, t) {
          var n = a + (b & d | c & ~d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function HH(a, b, c, d, x, s, t) {
          var n = a + (b ^ c ^ d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function II(a, b, c, d, x, s, t) {
          var n = a + (c ^ (b | ~d)) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        C.MD5 = Hasher._createHelper(MD5);
        C.HmacMD5 = Hasher._createHmacHelper(MD5);
      })(Math);
      return CryptoJS.MD5;
    });
  })(md5);
  return md5.exports;
}
var sha1 = { exports: {} };
var hasRequiredSha1;
function requireSha1() {
  if (hasRequiredSha1) return sha1.exports;
  hasRequiredSha1 = 1;
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory(requireCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var W = [];
        var SHA1 = C_algo.SHA1 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(M, offset) {
            var H = this._hash.words;
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            var e = H[4];
            for (var i = 0; i < 80; i++) {
              if (i < 16) {
                W[i] = M[offset + i] | 0;
              } else {
                var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
                W[i] = n << 1 | n >>> 31;
              }
              var t = (a << 5 | a >>> 27) + e + W[i];
              if (i < 20) {
                t += (b & c | ~b & d) + 1518500249;
              } else if (i < 40) {
                t += (b ^ c ^ d) + 1859775393;
              } else if (i < 60) {
                t += (b & c | b & d | c & d) - 1894007588;
              } else {
                t += (b ^ c ^ d) - 899497514;
              }
              e = d;
              d = c;
              c = b << 30 | b >>> 2;
              b = a;
              a = t;
            }
            H[0] = H[0] + a | 0;
            H[1] = H[1] + b | 0;
            H[2] = H[2] + c | 0;
            H[3] = H[3] + d | 0;
            H[4] = H[4] + e | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 4294967296);
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;
            this._process();
            return this._hash;
          },
          clone: function() {
            var clone2 = Hasher.clone.call(this);
            clone2._hash = this._hash.clone();
            return clone2;
          }
        });
        C.SHA1 = Hasher._createHelper(SHA1);
        C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
      })();
      return CryptoJS.SHA1;
    });
  })(sha1);
  return sha1.exports;
}
var sha256 = { exports: {} };
var hasRequiredSha256;
function requireSha256() {
  if (hasRequiredSha256) return sha256.exports;
  hasRequiredSha256 = 1;
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory(requireCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function(Math2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var H = [];
        var K = [];
        (function() {
          function isPrime(n2) {
            var sqrtN = Math2.sqrt(n2);
            for (var factor = 2; factor <= sqrtN; factor++) {
              if (!(n2 % factor)) {
                return false;
              }
            }
            return true;
          }
          function getFractionalBits(n2) {
            return (n2 - (n2 | 0)) * 4294967296 | 0;
          }
          var n = 2;
          var nPrime = 0;
          while (nPrime < 64) {
            if (isPrime(n)) {
              if (nPrime < 8) {
                H[nPrime] = getFractionalBits(Math2.pow(n, 1 / 2));
              }
              K[nPrime] = getFractionalBits(Math2.pow(n, 1 / 3));
              nPrime++;
            }
            n++;
          }
        })();
        var W = [];
        var SHA256 = C_algo.SHA256 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray.init(H.slice(0));
          },
          _doProcessBlock: function(M, offset) {
            var H2 = this._hash.words;
            var a = H2[0];
            var b = H2[1];
            var c = H2[2];
            var d = H2[3];
            var e = H2[4];
            var f = H2[5];
            var g = H2[6];
            var h = H2[7];
            for (var i = 0; i < 64; i++) {
              if (i < 16) {
                W[i] = M[offset + i] | 0;
              } else {
                var gamma0x = W[i - 15];
                var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
                var gamma1x = W[i - 2];
                var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
                W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
              }
              var ch = e & f ^ ~e & g;
              var maj = a & b ^ a & c ^ b & c;
              var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
              var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
              var t1 = h + sigma1 + ch + K[i] + W[i];
              var t2 = sigma0 + maj;
              h = g;
              g = f;
              f = e;
              e = d + t1 | 0;
              d = c;
              c = b;
              b = a;
              a = t1 + t2 | 0;
            }
            H2[0] = H2[0] + a | 0;
            H2[1] = H2[1] + b | 0;
            H2[2] = H2[2] + c | 0;
            H2[3] = H2[3] + d | 0;
            H2[4] = H2[4] + e | 0;
            H2[5] = H2[5] + f | 0;
            H2[6] = H2[6] + g | 0;
            H2[7] = H2[7] + h | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math2.floor(nBitsTotal / 4294967296);
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;
            this._process();
            return this._hash;
          },
          clone: function() {
            var clone2 = Hasher.clone.call(this);
            clone2._hash = this._hash.clone();
            return clone2;
          }
        });
        C.SHA256 = Hasher._createHelper(SHA256);
        C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
      })(Math);
      return CryptoJS.SHA256;
    });
  })(sha256);
  return sha256.exports;
}
var sha224 = { exports: {} };
var hasRequiredSha224;
function requireSha224() {
  if (hasRequiredSha224) return sha224.exports;
  hasRequiredSha224 = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireSha256());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var SHA256 = C_algo.SHA256;
        var SHA224 = C_algo.SHA224 = SHA256.extend({
          _doReset: function() {
            this._hash = new WordArray.init([
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
            var hash = SHA256._doFinalize.call(this);
            hash.sigBytes -= 4;
            return hash;
          }
        });
        C.SHA224 = SHA256._createHelper(SHA224);
        C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
      })();
      return CryptoJS.SHA224;
    });
  })(sha224);
  return sha224.exports;
}
var sha512 = { exports: {} };
var hasRequiredSha512;
function requireSha512() {
  if (hasRequiredSha512) return sha512.exports;
  hasRequiredSha512 = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireX64Core());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Hasher = C_lib.Hasher;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var X64WordArray = C_x64.WordArray;
        var C_algo = C.algo;
        function X64Word_create() {
          return X64Word.create.apply(X64Word, arguments);
        }
        var K = [
          X64Word_create(1116352408, 3609767458),
          X64Word_create(1899447441, 602891725),
          X64Word_create(3049323471, 3964484399),
          X64Word_create(3921009573, 2173295548),
          X64Word_create(961987163, 4081628472),
          X64Word_create(1508970993, 3053834265),
          X64Word_create(2453635748, 2937671579),
          X64Word_create(2870763221, 3664609560),
          X64Word_create(3624381080, 2734883394),
          X64Word_create(310598401, 1164996542),
          X64Word_create(607225278, 1323610764),
          X64Word_create(1426881987, 3590304994),
          X64Word_create(1925078388, 4068182383),
          X64Word_create(2162078206, 991336113),
          X64Word_create(2614888103, 633803317),
          X64Word_create(3248222580, 3479774868),
          X64Word_create(3835390401, 2666613458),
          X64Word_create(4022224774, 944711139),
          X64Word_create(264347078, 2341262773),
          X64Word_create(604807628, 2007800933),
          X64Word_create(770255983, 1495990901),
          X64Word_create(1249150122, 1856431235),
          X64Word_create(1555081692, 3175218132),
          X64Word_create(1996064986, 2198950837),
          X64Word_create(2554220882, 3999719339),
          X64Word_create(2821834349, 766784016),
          X64Word_create(2952996808, 2566594879),
          X64Word_create(3210313671, 3203337956),
          X64Word_create(3336571891, 1034457026),
          X64Word_create(3584528711, 2466948901),
          X64Word_create(113926993, 3758326383),
          X64Word_create(338241895, 168717936),
          X64Word_create(666307205, 1188179964),
          X64Word_create(773529912, 1546045734),
          X64Word_create(1294757372, 1522805485),
          X64Word_create(1396182291, 2643833823),
          X64Word_create(1695183700, 2343527390),
          X64Word_create(1986661051, 1014477480),
          X64Word_create(2177026350, 1206759142),
          X64Word_create(2456956037, 344077627),
          X64Word_create(2730485921, 1290863460),
          X64Word_create(2820302411, 3158454273),
          X64Word_create(3259730800, 3505952657),
          X64Word_create(3345764771, 106217008),
          X64Word_create(3516065817, 3606008344),
          X64Word_create(3600352804, 1432725776),
          X64Word_create(4094571909, 1467031594),
          X64Word_create(275423344, 851169720),
          X64Word_create(430227734, 3100823752),
          X64Word_create(506948616, 1363258195),
          X64Word_create(659060556, 3750685593),
          X64Word_create(883997877, 3785050280),
          X64Word_create(958139571, 3318307427),
          X64Word_create(1322822218, 3812723403),
          X64Word_create(1537002063, 2003034995),
          X64Word_create(1747873779, 3602036899),
          X64Word_create(1955562222, 1575990012),
          X64Word_create(2024104815, 1125592928),
          X64Word_create(2227730452, 2716904306),
          X64Word_create(2361852424, 442776044),
          X64Word_create(2428436474, 593698344),
          X64Word_create(2756734187, 3733110249),
          X64Word_create(3204031479, 2999351573),
          X64Word_create(3329325298, 3815920427),
          X64Word_create(3391569614, 3928383900),
          X64Word_create(3515267271, 566280711),
          X64Word_create(3940187606, 3454069534),
          X64Word_create(4118630271, 4000239992),
          X64Word_create(116418474, 1914138554),
          X64Word_create(174292421, 2731055270),
          X64Word_create(289380356, 3203993006),
          X64Word_create(460393269, 320620315),
          X64Word_create(685471733, 587496836),
          X64Word_create(852142971, 1086792851),
          X64Word_create(1017036298, 365543100),
          X64Word_create(1126000580, 2618297676),
          X64Word_create(1288033470, 3409855158),
          X64Word_create(1501505948, 4234509866),
          X64Word_create(1607167915, 987167468),
          X64Word_create(1816402316, 1246189591)
        ];
        var W = [];
        (function() {
          for (var i = 0; i < 80; i++) {
            W[i] = X64Word_create();
          }
        })();
        var SHA512 = C_algo.SHA512 = Hasher.extend({
          _doReset: function() {
            this._hash = new X64WordArray.init([
              new X64Word.init(1779033703, 4089235720),
              new X64Word.init(3144134277, 2227873595),
              new X64Word.init(1013904242, 4271175723),
              new X64Word.init(2773480762, 1595750129),
              new X64Word.init(1359893119, 2917565137),
              new X64Word.init(2600822924, 725511199),
              new X64Word.init(528734635, 4215389547),
              new X64Word.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(M, offset) {
            var H = this._hash.words;
            var H0 = H[0];
            var H1 = H[1];
            var H2 = H[2];
            var H3 = H[3];
            var H4 = H[4];
            var H5 = H[5];
            var H6 = H[6];
            var H7 = H[7];
            var H0h = H0.high;
            var H0l = H0.low;
            var H1h = H1.high;
            var H1l = H1.low;
            var H2h = H2.high;
            var H2l = H2.low;
            var H3h = H3.high;
            var H3l = H3.low;
            var H4h = H4.high;
            var H4l = H4.low;
            var H5h = H5.high;
            var H5l = H5.low;
            var H6h = H6.high;
            var H6l = H6.low;
            var H7h = H7.high;
            var H7l = H7.low;
            var ah = H0h;
            var al = H0l;
            var bh = H1h;
            var bl = H1l;
            var ch = H2h;
            var cl = H2l;
            var dh = H3h;
            var dl = H3l;
            var eh = H4h;
            var el = H4l;
            var fh = H5h;
            var fl = H5l;
            var gh = H6h;
            var gl = H6l;
            var hh = H7h;
            var hl = H7l;
            for (var i = 0; i < 80; i++) {
              var Wil;
              var Wih;
              var Wi = W[i];
              if (i < 16) {
                Wih = Wi.high = M[offset + i * 2] | 0;
                Wil = Wi.low = M[offset + i * 2 + 1] | 0;
              } else {
                var gamma0x = W[i - 15];
                var gamma0xh = gamma0x.high;
                var gamma0xl = gamma0x.low;
                var gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;
                var gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25);
                var gamma1x = W[i - 2];
                var gamma1xh = gamma1x.high;
                var gamma1xl = gamma1x.low;
                var gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;
                var gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26);
                var Wi7 = W[i - 7];
                var Wi7h = Wi7.high;
                var Wi7l = Wi7.low;
                var Wi16 = W[i - 16];
                var Wi16h = Wi16.high;
                var Wi16l = Wi16.low;
                Wil = gamma0l + Wi7l;
                Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);
                Wil = Wil + gamma1l;
                Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);
                Wil = Wil + Wi16l;
                Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);
                Wi.high = Wih;
                Wi.low = Wil;
              }
              var chh = eh & fh ^ ~eh & gh;
              var chl = el & fl ^ ~el & gl;
              var majh = ah & bh ^ ah & ch ^ bh & ch;
              var majl = al & bl ^ al & cl ^ bl & cl;
              var sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);
              var sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);
              var sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);
              var sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9);
              var Ki = K[i];
              var Kih = Ki.high;
              var Kil = Ki.low;
              var t1l = hl + sigma1l;
              var t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);
              var t1l = t1l + chl;
              var t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);
              var t1l = t1l + Kil;
              var t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);
              var t1l = t1l + Wil;
              var t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0);
              var t2l = sigma0l + majl;
              var t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0);
              hh = gh;
              hl = gl;
              gh = fh;
              gl = fl;
              fh = eh;
              fl = el;
              el = dl + t1l | 0;
              eh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;
              dh = ch;
              dl = cl;
              ch = bh;
              cl = bl;
              bh = ah;
              bl = al;
              al = t1l + t2l | 0;
              ah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;
            }
            H0l = H0.low = H0l + al;
            H0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);
            H1l = H1.low = H1l + bl;
            H1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);
            H2l = H2.low = H2l + cl;
            H2.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);
            H3l = H3.low = H3l + dl;
            H3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);
            H4l = H4.low = H4l + el;
            H4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);
            H5l = H5.low = H5l + fl;
            H5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);
            H6l = H6.low = H6l + gl;
            H6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);
            H7l = H7.low = H7l + hl;
            H7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 128 >>> 10 << 5) + 30] = Math.floor(nBitsTotal / 4294967296);
            dataWords[(nBitsLeft + 128 >>> 10 << 5) + 31] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;
            this._process();
            var hash = this._hash.toX32();
            return hash;
          },
          clone: function() {
            var clone2 = Hasher.clone.call(this);
            clone2._hash = this._hash.clone();
            return clone2;
          },
          blockSize: 1024 / 32
        });
        C.SHA512 = Hasher._createHelper(SHA512);
        C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
      })();
      return CryptoJS.SHA512;
    });
  })(sha512);
  return sha512.exports;
}
var sha384 = { exports: {} };
var hasRequiredSha384;
function requireSha384() {
  if (hasRequiredSha384) return sha384.exports;
  hasRequiredSha384 = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireX64Core(), requireSha512());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var X64WordArray = C_x64.WordArray;
        var C_algo = C.algo;
        var SHA512 = C_algo.SHA512;
        var SHA384 = C_algo.SHA384 = SHA512.extend({
          _doReset: function() {
            this._hash = new X64WordArray.init([
              new X64Word.init(3418070365, 3238371032),
              new X64Word.init(1654270250, 914150663),
              new X64Word.init(2438529370, 812702999),
              new X64Word.init(355462360, 4144912697),
              new X64Word.init(1731405415, 4290775857),
              new X64Word.init(2394180231, 1750603025),
              new X64Word.init(3675008525, 1694076839),
              new X64Word.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var hash = SHA512._doFinalize.call(this);
            hash.sigBytes -= 16;
            return hash;
          }
        });
        C.SHA384 = SHA512._createHelper(SHA384);
        C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
      })();
      return CryptoJS.SHA384;
    });
  })(sha384);
  return sha384.exports;
}
var sha3 = { exports: {} };
var hasRequiredSha3;
function requireSha3() {
  if (hasRequiredSha3) return sha3.exports;
  hasRequiredSha3 = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireX64Core());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function(Math2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var C_algo = C.algo;
        var RHO_OFFSETS = [];
        var PI_INDEXES = [];
        var ROUND_CONSTANTS = [];
        (function() {
          var x = 1, y = 0;
          for (var t = 0; t < 24; t++) {
            RHO_OFFSETS[x + 5 * y] = (t + 1) * (t + 2) / 2 % 64;
            var newX = y % 5;
            var newY = (2 * x + 3 * y) % 5;
            x = newX;
            y = newY;
          }
          for (var x = 0; x < 5; x++) {
            for (var y = 0; y < 5; y++) {
              PI_INDEXES[x + 5 * y] = y + (2 * x + 3 * y) % 5 * 5;
            }
          }
          var LFSR = 1;
          for (var i = 0; i < 24; i++) {
            var roundConstantMsw = 0;
            var roundConstantLsw = 0;
            for (var j = 0; j < 7; j++) {
              if (LFSR & 1) {
                var bitPosition = (1 << j) - 1;
                if (bitPosition < 32) {
                  roundConstantLsw ^= 1 << bitPosition;
                } else {
                  roundConstantMsw ^= 1 << bitPosition - 32;
                }
              }
              if (LFSR & 128) {
                LFSR = LFSR << 1 ^ 113;
              } else {
                LFSR <<= 1;
              }
            }
            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
          }
        })();
        var T = [];
        (function() {
          for (var i = 0; i < 25; i++) {
            T[i] = X64Word.create();
          }
        })();
        var SHA3 = C_algo.SHA3 = Hasher.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: Hasher.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            var state = this._state = [];
            for (var i = 0; i < 25; i++) {
              state[i] = new X64Word.init();
            }
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(M, offset) {
            var state = this._state;
            var nBlockSizeLanes = this.blockSize / 2;
            for (var i = 0; i < nBlockSizeLanes; i++) {
              var M2i = M[offset + 2 * i];
              var M2i1 = M[offset + 2 * i + 1];
              M2i = (M2i << 8 | M2i >>> 24) & 16711935 | (M2i << 24 | M2i >>> 8) & 4278255360;
              M2i1 = (M2i1 << 8 | M2i1 >>> 24) & 16711935 | (M2i1 << 24 | M2i1 >>> 8) & 4278255360;
              var lane = state[i];
              lane.high ^= M2i1;
              lane.low ^= M2i;
            }
            for (var round = 0; round < 24; round++) {
              for (var x = 0; x < 5; x++) {
                var tMsw = 0, tLsw = 0;
                for (var y = 0; y < 5; y++) {
                  var lane = state[x + 5 * y];
                  tMsw ^= lane.high;
                  tLsw ^= lane.low;
                }
                var Tx = T[x];
                Tx.high = tMsw;
                Tx.low = tLsw;
              }
              for (var x = 0; x < 5; x++) {
                var Tx4 = T[(x + 4) % 5];
                var Tx1 = T[(x + 1) % 5];
                var Tx1Msw = Tx1.high;
                var Tx1Lsw = Tx1.low;
                var tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);
                var tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);
                for (var y = 0; y < 5; y++) {
                  var lane = state[x + 5 * y];
                  lane.high ^= tMsw;
                  lane.low ^= tLsw;
                }
              }
              for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
                var tMsw;
                var tLsw;
                var lane = state[laneIndex];
                var laneMsw = lane.high;
                var laneLsw = lane.low;
                var rhoOffset = RHO_OFFSETS[laneIndex];
                if (rhoOffset < 32) {
                  tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;
                  tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;
                } else {
                  tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;
                  tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;
                }
                var TPiLane = T[PI_INDEXES[laneIndex]];
                TPiLane.high = tMsw;
                TPiLane.low = tLsw;
              }
              var T0 = T[0];
              var state0 = state[0];
              T0.high = state0.high;
              T0.low = state0.low;
              for (var x = 0; x < 5; x++) {
                for (var y = 0; y < 5; y++) {
                  var laneIndex = x + 5 * y;
                  var lane = state[laneIndex];
                  var TLane = T[laneIndex];
                  var Tx1Lane = T[(x + 1) % 5 + 5 * y];
                  var Tx2Lane = T[(x + 2) % 5 + 5 * y];
                  lane.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;
                  lane.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;
                }
              }
              var lane = state[0];
              var roundConstant = ROUND_CONSTANTS[round];
              lane.high ^= roundConstant.high;
              lane.low ^= roundConstant.low;
            }
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            var blockSizeBits = this.blockSize * 32;
            dataWords[nBitsLeft >>> 5] |= 1 << 24 - nBitsLeft % 32;
            dataWords[(Math2.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 128;
            data.sigBytes = dataWords.length * 4;
            this._process();
            var state = this._state;
            var outputLengthBytes = this.cfg.outputLength / 8;
            var outputLengthLanes = outputLengthBytes / 8;
            var hashWords = [];
            for (var i = 0; i < outputLengthLanes; i++) {
              var lane = state[i];
              var laneMsw = lane.high;
              var laneLsw = lane.low;
              laneMsw = (laneMsw << 8 | laneMsw >>> 24) & 16711935 | (laneMsw << 24 | laneMsw >>> 8) & 4278255360;
              laneLsw = (laneLsw << 8 | laneLsw >>> 24) & 16711935 | (laneLsw << 24 | laneLsw >>> 8) & 4278255360;
              hashWords.push(laneLsw);
              hashWords.push(laneMsw);
            }
            return new WordArray.init(hashWords, outputLengthBytes);
          },
          clone: function() {
            var clone2 = Hasher.clone.call(this);
            var state = clone2._state = this._state.slice(0);
            for (var i = 0; i < 25; i++) {
              state[i] = state[i].clone();
            }
            return clone2;
          }
        });
        C.SHA3 = Hasher._createHelper(SHA3);
        C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
      })(Math);
      return CryptoJS.SHA3;
    });
  })(sha3);
  return sha3.exports;
}
var ripemd160 = { exports: {} };
var hasRequiredRipemd160;
function requireRipemd160() {
  if (hasRequiredRipemd160) return ripemd160.exports;
  hasRequiredRipemd160 = 1;
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory(requireCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      (function(Math2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var _zl = WordArray.create([
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
        ]);
        var _zr = WordArray.create([
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
        ]);
        var _sl = WordArray.create([
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
        ]);
        var _sr = WordArray.create([
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
        ]);
        var _hl = WordArray.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
        var _hr = WordArray.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
        var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
          _doReset: function() {
            this._hash = WordArray.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(M, offset) {
            for (var i = 0; i < 16; i++) {
              var offset_i = offset + i;
              var M_offset_i = M[offset_i];
              M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
            }
            var H = this._hash.words;
            var hl = _hl.words;
            var hr = _hr.words;
            var zl = _zl.words;
            var zr = _zr.words;
            var sl = _sl.words;
            var sr = _sr.words;
            var al, bl, cl, dl, el;
            var ar, br, cr, dr, er;
            ar = al = H[0];
            br = bl = H[1];
            cr = cl = H[2];
            dr = dl = H[3];
            er = el = H[4];
            var t;
            for (var i = 0; i < 80; i += 1) {
              t = al + M[offset + zl[i]] | 0;
              if (i < 16) {
                t += f1(bl, cl, dl) + hl[0];
              } else if (i < 32) {
                t += f2(bl, cl, dl) + hl[1];
              } else if (i < 48) {
                t += f3(bl, cl, dl) + hl[2];
              } else if (i < 64) {
                t += f4(bl, cl, dl) + hl[3];
              } else {
                t += f5(bl, cl, dl) + hl[4];
              }
              t = t | 0;
              t = rotl(t, sl[i]);
              t = t + el | 0;
              al = el;
              el = dl;
              dl = rotl(cl, 10);
              cl = bl;
              bl = t;
              t = ar + M[offset + zr[i]] | 0;
              if (i < 16) {
                t += f5(br, cr, dr) + hr[0];
              } else if (i < 32) {
                t += f4(br, cr, dr) + hr[1];
              } else if (i < 48) {
                t += f3(br, cr, dr) + hr[2];
              } else if (i < 64) {
                t += f2(br, cr, dr) + hr[3];
              } else {
                t += f1(br, cr, dr) + hr[4];
              }
              t = t | 0;
              t = rotl(t, sr[i]);
              t = t + er | 0;
              ar = er;
              er = dr;
              dr = rotl(cr, 10);
              cr = br;
              br = t;
            }
            t = H[1] + cl + dr | 0;
            H[1] = H[2] + dl + er | 0;
            H[2] = H[3] + el + ar | 0;
            H[3] = H[4] + al + br | 0;
            H[4] = H[0] + bl + cr | 0;
            H[0] = t;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotal << 8 | nBitsTotal >>> 24) & 16711935 | (nBitsTotal << 24 | nBitsTotal >>> 8) & 4278255360;
            data.sigBytes = (dataWords.length + 1) * 4;
            this._process();
            var hash = this._hash;
            var H = hash.words;
            for (var i = 0; i < 5; i++) {
              var H_i = H[i];
              H[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
            }
            return hash;
          },
          clone: function() {
            var clone2 = Hasher.clone.call(this);
            clone2._hash = this._hash.clone();
            return clone2;
          }
        });
        function f1(x, y, z) {
          return x ^ y ^ z;
        }
        function f2(x, y, z) {
          return x & y | ~x & z;
        }
        function f3(x, y, z) {
          return (x | ~y) ^ z;
        }
        function f4(x, y, z) {
          return x & z | y & ~z;
        }
        function f5(x, y, z) {
          return x ^ (y | ~z);
        }
        function rotl(x, n) {
          return x << n | x >>> 32 - n;
        }
        C.RIPEMD160 = Hasher._createHelper(RIPEMD160);
        C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
      })();
      return CryptoJS.RIPEMD160;
    });
  })(ripemd160);
  return ripemd160.exports;
}
var hmac = { exports: {} };
var hasRequiredHmac;
function requireHmac() {
  if (hasRequiredHmac) return hmac.exports;
  hasRequiredHmac = 1;
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory(requireCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var C_enc = C.enc;
        var Utf8 = C_enc.Utf8;
        var C_algo = C.algo;
        C_algo.HMAC = Base.extend({
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
          init: function(hasher, key) {
            hasher = this._hasher = new hasher.init();
            if (typeof key == "string") {
              key = Utf8.parse(key);
            }
            var hasherBlockSize = hasher.blockSize;
            var hasherBlockSizeBytes = hasherBlockSize * 4;
            if (key.sigBytes > hasherBlockSizeBytes) {
              key = hasher.finalize(key);
            }
            key.clamp();
            var oKey = this._oKey = key.clone();
            var iKey = this._iKey = key.clone();
            var oKeyWords = oKey.words;
            var iKeyWords = iKey.words;
            for (var i = 0; i < hasherBlockSize; i++) {
              oKeyWords[i] ^= 1549556828;
              iKeyWords[i] ^= 909522486;
            }
            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;
            this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var hasher = this._hasher;
            hasher.reset();
            hasher.update(this._iKey);
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
          update: function(messageUpdate) {
            this._hasher.update(messageUpdate);
            return this;
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
          finalize: function(messageUpdate) {
            var hasher = this._hasher;
            var innerHash = hasher.finalize(messageUpdate);
            hasher.reset();
            var hmac2 = hasher.finalize(this._oKey.clone().concat(innerHash));
            return hmac2;
          }
        });
      })();
    });
  })(hmac);
  return hmac.exports;
}
var pbkdf2 = { exports: {} };
var hasRequiredPbkdf2;
function requirePbkdf2() {
  if (hasRequiredPbkdf2) return pbkdf2.exports;
  hasRequiredPbkdf2 = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireSha256(), requireHmac());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var SHA256 = C_algo.SHA256;
        var HMAC = C_algo.HMAC;
        var PBKDF2 = C_algo.PBKDF2 = Base.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: Base.extend({
            keySize: 128 / 32,
            hasher: SHA256,
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
          init: function(cfg) {
            this.cfg = this.cfg.extend(cfg);
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
          compute: function(password, salt) {
            var cfg = this.cfg;
            var hmac2 = HMAC.create(cfg.hasher, password);
            var derivedKey = WordArray.create();
            var blockIndex = WordArray.create([1]);
            var derivedKeyWords = derivedKey.words;
            var blockIndexWords = blockIndex.words;
            var keySize = cfg.keySize;
            var iterations = cfg.iterations;
            while (derivedKeyWords.length < keySize) {
              var block = hmac2.update(salt).finalize(blockIndex);
              hmac2.reset();
              var blockWords = block.words;
              var blockWordsLength = blockWords.length;
              var intermediate = block;
              for (var i = 1; i < iterations; i++) {
                intermediate = hmac2.finalize(intermediate);
                hmac2.reset();
                var intermediateWords = intermediate.words;
                for (var j = 0; j < blockWordsLength; j++) {
                  blockWords[j] ^= intermediateWords[j];
                }
              }
              derivedKey.concat(block);
              blockIndexWords[0]++;
            }
            derivedKey.sigBytes = keySize * 4;
            return derivedKey;
          }
        });
        C.PBKDF2 = function(password, salt, cfg) {
          return PBKDF2.create(cfg).compute(password, salt);
        };
      })();
      return CryptoJS.PBKDF2;
    });
  })(pbkdf2);
  return pbkdf2.exports;
}
var evpkdf = { exports: {} };
var hasRequiredEvpkdf;
function requireEvpkdf() {
  if (hasRequiredEvpkdf) return evpkdf.exports;
  hasRequiredEvpkdf = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireSha1(), requireHmac());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var MD5 = C_algo.MD5;
        var EvpKDF = C_algo.EvpKDF = Base.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: Base.extend({
            keySize: 128 / 32,
            hasher: MD5,
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
          init: function(cfg) {
            this.cfg = this.cfg.extend(cfg);
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
          compute: function(password, salt) {
            var block;
            var cfg = this.cfg;
            var hasher = cfg.hasher.create();
            var derivedKey = WordArray.create();
            var derivedKeyWords = derivedKey.words;
            var keySize = cfg.keySize;
            var iterations = cfg.iterations;
            while (derivedKeyWords.length < keySize) {
              if (block) {
                hasher.update(block);
              }
              block = hasher.update(password).finalize(salt);
              hasher.reset();
              for (var i = 1; i < iterations; i++) {
                block = hasher.finalize(block);
                hasher.reset();
              }
              derivedKey.concat(block);
            }
            derivedKey.sigBytes = keySize * 4;
            return derivedKey;
          }
        });
        C.EvpKDF = function(password, salt, cfg) {
          return EvpKDF.create(cfg).compute(password, salt);
        };
      })();
      return CryptoJS.EvpKDF;
    });
  })(evpkdf);
  return evpkdf.exports;
}
var cipherCore = { exports: {} };
var hasRequiredCipherCore;
function requireCipherCore() {
  if (hasRequiredCipherCore) return cipherCore.exports;
  hasRequiredCipherCore = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireEvpkdf());
      }
    })(commonjsGlobal, function(CryptoJS) {
      CryptoJS.lib.Cipher || function(undefined$1) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
        var C_enc = C.enc;
        C_enc.Utf8;
        var Base64 = C_enc.Base64;
        var C_algo = C.algo;
        var EvpKDF = C_algo.EvpKDF;
        var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: Base.extend(),
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
          createEncryptor: function(key, cfg) {
            return this.create(this._ENC_XFORM_MODE, key, cfg);
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
          createDecryptor: function(key, cfg) {
            return this.create(this._DEC_XFORM_MODE, key, cfg);
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
          init: function(xformMode, key, cfg) {
            this.cfg = this.cfg.extend(cfg);
            this._xformMode = xformMode;
            this._key = key;
            this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            BufferedBlockAlgorithm.reset.call(this);
            this._doReset();
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
          process: function(dataUpdate) {
            this._append(dataUpdate);
            return this._process();
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
          finalize: function(dataUpdate) {
            if (dataUpdate) {
              this._append(dataUpdate);
            }
            var finalProcessedData = this._doFinalize();
            return finalProcessedData;
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
            function selectCipherStrategy(key) {
              if (typeof key == "string") {
                return PasswordBasedCipher;
              } else {
                return SerializableCipher;
              }
            }
            return function(cipher) {
              return {
                encrypt: function(message, key, cfg) {
                  return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
                },
                decrypt: function(ciphertext, key, cfg) {
                  return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
                }
              };
            };
          }()
        });
        C_lib.StreamCipher = Cipher.extend({
          _doFinalize: function() {
            var finalProcessedBlocks = this._process(true);
            return finalProcessedBlocks;
          },
          blockSize: 1
        });
        var C_mode = C.mode = {};
        var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
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
          createEncryptor: function(cipher, iv) {
            return this.Encryptor.create(cipher, iv);
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
          createDecryptor: function(cipher, iv) {
            return this.Decryptor.create(cipher, iv);
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
          init: function(cipher, iv) {
            this._cipher = cipher;
            this._iv = iv;
          }
        });
        var CBC = C_mode.CBC = function() {
          var CBC2 = BlockCipherMode.extend();
          CBC2.Encryptor = CBC2.extend({
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
            processBlock: function(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              xorBlock.call(this, words, offset, blockSize);
              cipher.encryptBlock(words, offset);
              this._prevBlock = words.slice(offset, offset + blockSize);
            }
          });
          CBC2.Decryptor = CBC2.extend({
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
            processBlock: function(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              var thisBlock = words.slice(offset, offset + blockSize);
              cipher.decryptBlock(words, offset);
              xorBlock.call(this, words, offset, blockSize);
              this._prevBlock = thisBlock;
            }
          });
          function xorBlock(words, offset, blockSize) {
            var block;
            var iv = this._iv;
            if (iv) {
              block = iv;
              this._iv = undefined$1;
            } else {
              block = this._prevBlock;
            }
            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= block[i];
            }
          }
          return CBC2;
        }();
        var C_pad = C.pad = {};
        var Pkcs7 = C_pad.Pkcs7 = {
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
          pad: function(data, blockSize) {
            var blockSizeBytes = blockSize * 4;
            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
            var paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes;
            var paddingWords = [];
            for (var i = 0; i < nPaddingBytes; i += 4) {
              paddingWords.push(paddingWord);
            }
            var padding = WordArray.create(paddingWords, nPaddingBytes);
            data.concat(padding);
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
          unpad: function(data) {
            var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
            data.sigBytes -= nPaddingBytes;
          }
        };
        C_lib.BlockCipher = Cipher.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: Cipher.cfg.extend({
            mode: CBC,
            padding: Pkcs7
          }),
          reset: function() {
            var modeCreator;
            Cipher.reset.call(this);
            var cfg = this.cfg;
            var iv = cfg.iv;
            var mode = cfg.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) {
              modeCreator = mode.createEncryptor;
            } else {
              modeCreator = mode.createDecryptor;
              this._minBufferSize = 1;
            }
            if (this._mode && this._mode.__creator == modeCreator) {
              this._mode.init(this, iv && iv.words);
            } else {
              this._mode = modeCreator.call(mode, this, iv && iv.words);
              this._mode.__creator = modeCreator;
            }
          },
          _doProcessBlock: function(words, offset) {
            this._mode.processBlock(words, offset);
          },
          _doFinalize: function() {
            var finalProcessedBlocks;
            var padding = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
              padding.pad(this._data, this.blockSize);
              finalProcessedBlocks = this._process(true);
            } else {
              finalProcessedBlocks = this._process(true);
              padding.unpad(finalProcessedBlocks);
            }
            return finalProcessedBlocks;
          },
          blockSize: 128 / 32
        });
        var CipherParams = C_lib.CipherParams = Base.extend({
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
          init: function(cipherParams) {
            this.mixIn(cipherParams);
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
          toString: function(formatter) {
            return (formatter || this.formatter).stringify(this);
          }
        });
        var C_format = C.format = {};
        var OpenSSLFormatter = C_format.OpenSSL = {
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
          stringify: function(cipherParams) {
            var wordArray;
            var ciphertext = cipherParams.ciphertext;
            var salt = cipherParams.salt;
            if (salt) {
              wordArray = WordArray.create([1398893684, 1701076831]).concat(salt).concat(ciphertext);
            } else {
              wordArray = ciphertext;
            }
            return wordArray.toString(Base64);
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
          parse: function(openSSLStr) {
            var salt;
            var ciphertext = Base64.parse(openSSLStr);
            var ciphertextWords = ciphertext.words;
            if (ciphertextWords[0] == 1398893684 && ciphertextWords[1] == 1701076831) {
              salt = WordArray.create(ciphertextWords.slice(2, 4));
              ciphertextWords.splice(0, 4);
              ciphertext.sigBytes -= 16;
            }
            return CipherParams.create({ ciphertext, salt });
          }
        };
        var SerializableCipher = C_lib.SerializableCipher = Base.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: Base.extend({
            format: OpenSSLFormatter
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
          encrypt: function(cipher, message, key, cfg) {
            cfg = this.cfg.extend(cfg);
            var encryptor = cipher.createEncryptor(key, cfg);
            var ciphertext = encryptor.finalize(message);
            var cipherCfg = encryptor.cfg;
            return CipherParams.create({
              ciphertext,
              key,
              iv: cipherCfg.iv,
              algorithm: cipher,
              mode: cipherCfg.mode,
              padding: cipherCfg.padding,
              blockSize: cipher.blockSize,
              formatter: cfg.format
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
          decrypt: function(cipher, ciphertext, key, cfg) {
            cfg = this.cfg.extend(cfg);
            ciphertext = this._parse(ciphertext, cfg.format);
            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
            return plaintext;
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
          _parse: function(ciphertext, format) {
            if (typeof ciphertext == "string") {
              return format.parse(ciphertext, this);
            } else {
              return ciphertext;
            }
          }
        });
        var C_kdf = C.kdf = {};
        var OpenSSLKdf = C_kdf.OpenSSL = {
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
          execute: function(password, keySize, ivSize, salt, hasher) {
            if (!salt) {
              salt = WordArray.random(64 / 8);
            }
            if (!hasher) {
              var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);
            } else {
              var key = EvpKDF.create({ keySize: keySize + ivSize, hasher }).compute(password, salt);
            }
            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
            key.sigBytes = keySize * 4;
            return CipherParams.create({ key, iv, salt });
          }
        };
        var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: SerializableCipher.cfg.extend({
            kdf: OpenSSLKdf
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
          encrypt: function(cipher, message, password, cfg) {
            cfg = this.cfg.extend(cfg);
            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, cfg.salt, cfg.hasher);
            cfg.iv = derivedParams.iv;
            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);
            ciphertext.mixIn(derivedParams);
            return ciphertext;
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
          decrypt: function(cipher, ciphertext, password, cfg) {
            cfg = this.cfg.extend(cfg);
            ciphertext = this._parse(ciphertext, cfg.format);
            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt, cfg.hasher);
            cfg.iv = derivedParams.iv;
            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);
            return plaintext;
          }
        });
      }();
    });
  })(cipherCore);
  return cipherCore.exports;
}
var modeCfb = { exports: {} };
var hasRequiredModeCfb;
function requireModeCfb() {
  if (hasRequiredModeCfb) return modeCfb.exports;
  hasRequiredModeCfb = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      CryptoJS.mode.CFB = function() {
        var CFB = CryptoJS.lib.BlockCipherMode.extend();
        CFB.Encryptor = CFB.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
            this._prevBlock = words.slice(offset, offset + blockSize);
          }
        });
        CFB.Decryptor = CFB.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var thisBlock = words.slice(offset, offset + blockSize);
            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
            this._prevBlock = thisBlock;
          }
        });
        function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
          var keystream;
          var iv = this._iv;
          if (iv) {
            keystream = iv.slice(0);
            this._iv = void 0;
          } else {
            keystream = this._prevBlock;
          }
          cipher.encryptBlock(keystream, 0);
          for (var i = 0; i < blockSize; i++) {
            words[offset + i] ^= keystream[i];
          }
        }
        return CFB;
      }();
      return CryptoJS.mode.CFB;
    });
  })(modeCfb);
  return modeCfb.exports;
}
var modeCtr = { exports: {} };
var hasRequiredModeCtr;
function requireModeCtr() {
  if (hasRequiredModeCtr) return modeCtr.exports;
  hasRequiredModeCtr = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      CryptoJS.mode.CTR = function() {
        var CTR = CryptoJS.lib.BlockCipherMode.extend();
        var Encryptor = CTR.Encryptor = CTR.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var counter = this._counter;
            if (iv) {
              counter = this._counter = iv.slice(0);
              this._iv = void 0;
            }
            var keystream = counter.slice(0);
            cipher.encryptBlock(keystream, 0);
            counter[blockSize - 1] = counter[blockSize - 1] + 1 | 0;
            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= keystream[i];
            }
          }
        });
        CTR.Decryptor = Encryptor;
        return CTR;
      }();
      return CryptoJS.mode.CTR;
    });
  })(modeCtr);
  return modeCtr.exports;
}
var modeCtrGladman = { exports: {} };
var hasRequiredModeCtrGladman;
function requireModeCtrGladman() {
  if (hasRequiredModeCtrGladman) return modeCtrGladman.exports;
  hasRequiredModeCtrGladman = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      CryptoJS.mode.CTRGladman = function() {
        var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();
        function incWord(word) {
          if ((word >> 24 & 255) === 255) {
            var b1 = word >> 16 & 255;
            var b2 = word >> 8 & 255;
            var b3 = word & 255;
            if (b1 === 255) {
              b1 = 0;
              if (b2 === 255) {
                b2 = 0;
                if (b3 === 255) {
                  b3 = 0;
                } else {
                  ++b3;
                }
              } else {
                ++b2;
              }
            } else {
              ++b1;
            }
            word = 0;
            word += b1 << 16;
            word += b2 << 8;
            word += b3;
          } else {
            word += 1 << 24;
          }
          return word;
        }
        function incCounter(counter) {
          if ((counter[0] = incWord(counter[0])) === 0) {
            counter[1] = incWord(counter[1]);
          }
          return counter;
        }
        var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var counter = this._counter;
            if (iv) {
              counter = this._counter = iv.slice(0);
              this._iv = void 0;
            }
            incCounter(counter);
            var keystream = counter.slice(0);
            cipher.encryptBlock(keystream, 0);
            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= keystream[i];
            }
          }
        });
        CTRGladman.Decryptor = Encryptor;
        return CTRGladman;
      }();
      return CryptoJS.mode.CTRGladman;
    });
  })(modeCtrGladman);
  return modeCtrGladman.exports;
}
var modeOfb = { exports: {} };
var hasRequiredModeOfb;
function requireModeOfb() {
  if (hasRequiredModeOfb) return modeOfb.exports;
  hasRequiredModeOfb = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      CryptoJS.mode.OFB = function() {
        var OFB = CryptoJS.lib.BlockCipherMode.extend();
        var Encryptor = OFB.Encryptor = OFB.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var keystream = this._keystream;
            if (iv) {
              keystream = this._keystream = iv.slice(0);
              this._iv = void 0;
            }
            cipher.encryptBlock(keystream, 0);
            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= keystream[i];
            }
          }
        });
        OFB.Decryptor = Encryptor;
        return OFB;
      }();
      return CryptoJS.mode.OFB;
    });
  })(modeOfb);
  return modeOfb.exports;
}
var modeEcb = { exports: {} };
var hasRequiredModeEcb;
function requireModeEcb() {
  if (hasRequiredModeEcb) return modeEcb.exports;
  hasRequiredModeEcb = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      CryptoJS.mode.ECB = function() {
        var ECB = CryptoJS.lib.BlockCipherMode.extend();
        ECB.Encryptor = ECB.extend({
          processBlock: function(words, offset) {
            this._cipher.encryptBlock(words, offset);
          }
        });
        ECB.Decryptor = ECB.extend({
          processBlock: function(words, offset) {
            this._cipher.decryptBlock(words, offset);
          }
        });
        return ECB;
      }();
      return CryptoJS.mode.ECB;
    });
  })(modeEcb);
  return modeEcb.exports;
}
var padAnsix923 = { exports: {} };
var hasRequiredPadAnsix923;
function requirePadAnsix923() {
  if (hasRequiredPadAnsix923) return padAnsix923.exports;
  hasRequiredPadAnsix923 = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      CryptoJS.pad.AnsiX923 = {
        pad: function(data, blockSize) {
          var dataSigBytes = data.sigBytes;
          var blockSizeBytes = blockSize * 4;
          var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;
          var lastBytePos = dataSigBytes + nPaddingBytes - 1;
          data.clamp();
          data.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;
          data.sigBytes += nPaddingBytes;
        },
        unpad: function(data) {
          var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
          data.sigBytes -= nPaddingBytes;
        }
      };
      return CryptoJS.pad.Ansix923;
    });
  })(padAnsix923);
  return padAnsix923.exports;
}
var padIso10126 = { exports: {} };
var hasRequiredPadIso10126;
function requirePadIso10126() {
  if (hasRequiredPadIso10126) return padIso10126.exports;
  hasRequiredPadIso10126 = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      CryptoJS.pad.Iso10126 = {
        pad: function(data, blockSize) {
          var blockSizeBytes = blockSize * 4;
          var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
          data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
        },
        unpad: function(data) {
          var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
          data.sigBytes -= nPaddingBytes;
        }
      };
      return CryptoJS.pad.Iso10126;
    });
  })(padIso10126);
  return padIso10126.exports;
}
var padIso97971 = { exports: {} };
var hasRequiredPadIso97971;
function requirePadIso97971() {
  if (hasRequiredPadIso97971) return padIso97971.exports;
  hasRequiredPadIso97971 = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      CryptoJS.pad.Iso97971 = {
        pad: function(data, blockSize) {
          data.concat(CryptoJS.lib.WordArray.create([2147483648], 1));
          CryptoJS.pad.ZeroPadding.pad(data, blockSize);
        },
        unpad: function(data) {
          CryptoJS.pad.ZeroPadding.unpad(data);
          data.sigBytes--;
        }
      };
      return CryptoJS.pad.Iso97971;
    });
  })(padIso97971);
  return padIso97971.exports;
}
var padZeropadding = { exports: {} };
var hasRequiredPadZeropadding;
function requirePadZeropadding() {
  if (hasRequiredPadZeropadding) return padZeropadding.exports;
  hasRequiredPadZeropadding = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      CryptoJS.pad.ZeroPadding = {
        pad: function(data, blockSize) {
          var blockSizeBytes = blockSize * 4;
          data.clamp();
          data.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);
        },
        unpad: function(data) {
          var dataWords = data.words;
          var i = data.sigBytes - 1;
          for (var i = data.sigBytes - 1; i >= 0; i--) {
            if (dataWords[i >>> 2] >>> 24 - i % 4 * 8 & 255) {
              data.sigBytes = i + 1;
              break;
            }
          }
        }
      };
      return CryptoJS.pad.ZeroPadding;
    });
  })(padZeropadding);
  return padZeropadding.exports;
}
var padNopadding = { exports: {} };
var hasRequiredPadNopadding;
function requirePadNopadding() {
  if (hasRequiredPadNopadding) return padNopadding.exports;
  hasRequiredPadNopadding = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      CryptoJS.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      };
      return CryptoJS.pad.NoPadding;
    });
  })(padNopadding);
  return padNopadding.exports;
}
var formatHex = { exports: {} };
var hasRequiredFormatHex;
function requireFormatHex() {
  if (hasRequiredFormatHex) return formatHex.exports;
  hasRequiredFormatHex = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function(undefined$1) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var CipherParams = C_lib.CipherParams;
        var C_enc = C.enc;
        var Hex = C_enc.Hex;
        var C_format = C.format;
        C_format.Hex = {
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
          stringify: function(cipherParams) {
            return cipherParams.ciphertext.toString(Hex);
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
          parse: function(input) {
            var ciphertext = Hex.parse(input);
            return CipherParams.create({ ciphertext });
          }
        };
      })();
      return CryptoJS.format.Hex;
    });
  })(formatHex);
  return formatHex.exports;
}
var aes = { exports: {} };
var hasRequiredAes;
function requireAes() {
  if (hasRequiredAes) return aes.exports;
  hasRequiredAes = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var BlockCipher = C_lib.BlockCipher;
        var C_algo = C.algo;
        var SBOX = [];
        var INV_SBOX = [];
        var SUB_MIX_0 = [];
        var SUB_MIX_1 = [];
        var SUB_MIX_2 = [];
        var SUB_MIX_3 = [];
        var INV_SUB_MIX_0 = [];
        var INV_SUB_MIX_1 = [];
        var INV_SUB_MIX_2 = [];
        var INV_SUB_MIX_3 = [];
        (function() {
          var d = [];
          for (var i = 0; i < 256; i++) {
            if (i < 128) {
              d[i] = i << 1;
            } else {
              d[i] = i << 1 ^ 283;
            }
          }
          var x = 0;
          var xi = 0;
          for (var i = 0; i < 256; i++) {
            var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
            sx = sx >>> 8 ^ sx & 255 ^ 99;
            SBOX[x] = sx;
            INV_SBOX[sx] = x;
            var x2 = d[x];
            var x4 = d[x2];
            var x8 = d[x4];
            var t = d[sx] * 257 ^ sx * 16843008;
            SUB_MIX_0[x] = t << 24 | t >>> 8;
            SUB_MIX_1[x] = t << 16 | t >>> 16;
            SUB_MIX_2[x] = t << 8 | t >>> 24;
            SUB_MIX_3[x] = t;
            var t = x8 * 16843009 ^ x4 * 65537 ^ x2 * 257 ^ x * 16843008;
            INV_SUB_MIX_0[sx] = t << 24 | t >>> 8;
            INV_SUB_MIX_1[sx] = t << 16 | t >>> 16;
            INV_SUB_MIX_2[sx] = t << 8 | t >>> 24;
            INV_SUB_MIX_3[sx] = t;
            if (!x) {
              x = xi = 1;
            } else {
              x = x2 ^ d[d[d[x8 ^ x2]]];
              xi ^= d[d[xi]];
            }
          }
        })();
        var RCON = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
        var AES = C_algo.AES = BlockCipher.extend({
          _doReset: function() {
            var t;
            if (this._nRounds && this._keyPriorReset === this._key) {
              return;
            }
            var key = this._keyPriorReset = this._key;
            var keyWords = key.words;
            var keySize = key.sigBytes / 4;
            var nRounds = this._nRounds = keySize + 6;
            var ksRows = (nRounds + 1) * 4;
            var keySchedule = this._keySchedule = [];
            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
              if (ksRow < keySize) {
                keySchedule[ksRow] = keyWords[ksRow];
              } else {
                t = keySchedule[ksRow - 1];
                if (!(ksRow % keySize)) {
                  t = t << 8 | t >>> 24;
                  t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 255] << 16 | SBOX[t >>> 8 & 255] << 8 | SBOX[t & 255];
                  t ^= RCON[ksRow / keySize | 0] << 24;
                } else if (keySize > 6 && ksRow % keySize == 4) {
                  t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 255] << 16 | SBOX[t >>> 8 & 255] << 8 | SBOX[t & 255];
                }
                keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
              }
            }
            var invKeySchedule = this._invKeySchedule = [];
            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
              var ksRow = ksRows - invKsRow;
              if (invKsRow % 4) {
                var t = keySchedule[ksRow];
              } else {
                var t = keySchedule[ksRow - 4];
              }
              if (invKsRow < 4 || ksRow <= 4) {
                invKeySchedule[invKsRow] = t;
              } else {
                invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[t >>> 16 & 255]] ^ INV_SUB_MIX_2[SBOX[t >>> 8 & 255]] ^ INV_SUB_MIX_3[SBOX[t & 255]];
              }
            }
          },
          encryptBlock: function(M, offset) {
            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
          },
          decryptBlock: function(M, offset) {
            var t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;
            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);
            var t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;
          },
          _doCryptBlock: function(M, offset, keySchedule, SUB_MIX_02, SUB_MIX_12, SUB_MIX_22, SUB_MIX_32, SBOX2) {
            var nRounds = this._nRounds;
            var s0 = M[offset] ^ keySchedule[0];
            var s1 = M[offset + 1] ^ keySchedule[1];
            var s2 = M[offset + 2] ^ keySchedule[2];
            var s3 = M[offset + 3] ^ keySchedule[3];
            var ksRow = 4;
            for (var round = 1; round < nRounds; round++) {
              var t0 = SUB_MIX_02[s0 >>> 24] ^ SUB_MIX_12[s1 >>> 16 & 255] ^ SUB_MIX_22[s2 >>> 8 & 255] ^ SUB_MIX_32[s3 & 255] ^ keySchedule[ksRow++];
              var t1 = SUB_MIX_02[s1 >>> 24] ^ SUB_MIX_12[s2 >>> 16 & 255] ^ SUB_MIX_22[s3 >>> 8 & 255] ^ SUB_MIX_32[s0 & 255] ^ keySchedule[ksRow++];
              var t2 = SUB_MIX_02[s2 >>> 24] ^ SUB_MIX_12[s3 >>> 16 & 255] ^ SUB_MIX_22[s0 >>> 8 & 255] ^ SUB_MIX_32[s1 & 255] ^ keySchedule[ksRow++];
              var t3 = SUB_MIX_02[s3 >>> 24] ^ SUB_MIX_12[s0 >>> 16 & 255] ^ SUB_MIX_22[s1 >>> 8 & 255] ^ SUB_MIX_32[s2 & 255] ^ keySchedule[ksRow++];
              s0 = t0;
              s1 = t1;
              s2 = t2;
              s3 = t3;
            }
            var t0 = (SBOX2[s0 >>> 24] << 24 | SBOX2[s1 >>> 16 & 255] << 16 | SBOX2[s2 >>> 8 & 255] << 8 | SBOX2[s3 & 255]) ^ keySchedule[ksRow++];
            var t1 = (SBOX2[s1 >>> 24] << 24 | SBOX2[s2 >>> 16 & 255] << 16 | SBOX2[s3 >>> 8 & 255] << 8 | SBOX2[s0 & 255]) ^ keySchedule[ksRow++];
            var t2 = (SBOX2[s2 >>> 24] << 24 | SBOX2[s3 >>> 16 & 255] << 16 | SBOX2[s0 >>> 8 & 255] << 8 | SBOX2[s1 & 255]) ^ keySchedule[ksRow++];
            var t3 = (SBOX2[s3 >>> 24] << 24 | SBOX2[s0 >>> 16 & 255] << 16 | SBOX2[s1 >>> 8 & 255] << 8 | SBOX2[s2 & 255]) ^ keySchedule[ksRow++];
            M[offset] = t0;
            M[offset + 1] = t1;
            M[offset + 2] = t2;
            M[offset + 3] = t3;
          },
          keySize: 256 / 32
        });
        C.AES = BlockCipher._createHelper(AES);
      })();
      return CryptoJS.AES;
    });
  })(aes);
  return aes.exports;
}
var tripledes = { exports: {} };
var hasRequiredTripledes;
function requireTripledes() {
  if (hasRequiredTripledes) return tripledes.exports;
  hasRequiredTripledes = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var BlockCipher = C_lib.BlockCipher;
        var C_algo = C.algo;
        var PC1 = [
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
        ];
        var PC2 = [
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
        ];
        var BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
        var SBOX_P = [
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
        ];
        var SBOX_MASK = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ];
        var DES = C_algo.DES = BlockCipher.extend({
          _doReset: function() {
            var key = this._key;
            var keyWords = key.words;
            var keyBits = [];
            for (var i = 0; i < 56; i++) {
              var keyBitPos = PC1[i] - 1;
              keyBits[i] = keyWords[keyBitPos >>> 5] >>> 31 - keyBitPos % 32 & 1;
            }
            var subKeys = this._subKeys = [];
            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
              var subKey = subKeys[nSubKey] = [];
              var bitShift = BIT_SHIFTS[nSubKey];
              for (var i = 0; i < 24; i++) {
                subKey[i / 6 | 0] |= keyBits[(PC2[i] - 1 + bitShift) % 28] << 31 - i % 6;
                subKey[4 + (i / 6 | 0)] |= keyBits[28 + (PC2[i + 24] - 1 + bitShift) % 28] << 31 - i % 6;
              }
              subKey[0] = subKey[0] << 1 | subKey[0] >>> 31;
              for (var i = 1; i < 7; i++) {
                subKey[i] = subKey[i] >>> (i - 1) * 4 + 3;
              }
              subKey[7] = subKey[7] << 5 | subKey[7] >>> 27;
            }
            var invSubKeys = this._invSubKeys = [];
            for (var i = 0; i < 16; i++) {
              invSubKeys[i] = subKeys[15 - i];
            }
          },
          encryptBlock: function(M, offset) {
            this._doCryptBlock(M, offset, this._subKeys);
          },
          decryptBlock: function(M, offset) {
            this._doCryptBlock(M, offset, this._invSubKeys);
          },
          _doCryptBlock: function(M, offset, subKeys) {
            this._lBlock = M[offset];
            this._rBlock = M[offset + 1];
            exchangeLR.call(this, 4, 252645135);
            exchangeLR.call(this, 16, 65535);
            exchangeRL.call(this, 2, 858993459);
            exchangeRL.call(this, 8, 16711935);
            exchangeLR.call(this, 1, 1431655765);
            for (var round = 0; round < 16; round++) {
              var subKey = subKeys[round];
              var lBlock = this._lBlock;
              var rBlock = this._rBlock;
              var f = 0;
              for (var i = 0; i < 8; i++) {
                f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
              }
              this._lBlock = rBlock;
              this._rBlock = lBlock ^ f;
            }
            var t = this._lBlock;
            this._lBlock = this._rBlock;
            this._rBlock = t;
            exchangeLR.call(this, 1, 1431655765);
            exchangeRL.call(this, 8, 16711935);
            exchangeRL.call(this, 2, 858993459);
            exchangeLR.call(this, 16, 65535);
            exchangeLR.call(this, 4, 252645135);
            M[offset] = this._lBlock;
            M[offset + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function exchangeLR(offset, mask) {
          var t = (this._lBlock >>> offset ^ this._rBlock) & mask;
          this._rBlock ^= t;
          this._lBlock ^= t << offset;
        }
        function exchangeRL(offset, mask) {
          var t = (this._rBlock >>> offset ^ this._lBlock) & mask;
          this._lBlock ^= t;
          this._rBlock ^= t << offset;
        }
        C.DES = BlockCipher._createHelper(DES);
        var TripleDES = C_algo.TripleDES = BlockCipher.extend({
          _doReset: function() {
            var key = this._key;
            var keyWords = key.words;
            if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            }
            var key1 = keyWords.slice(0, 2);
            var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
            var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);
            this._des1 = DES.createEncryptor(WordArray.create(key1));
            this._des2 = DES.createEncryptor(WordArray.create(key2));
            this._des3 = DES.createEncryptor(WordArray.create(key3));
          },
          encryptBlock: function(M, offset) {
            this._des1.encryptBlock(M, offset);
            this._des2.decryptBlock(M, offset);
            this._des3.encryptBlock(M, offset);
          },
          decryptBlock: function(M, offset) {
            this._des3.decryptBlock(M, offset);
            this._des2.encryptBlock(M, offset);
            this._des1.decryptBlock(M, offset);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        C.TripleDES = BlockCipher._createHelper(TripleDES);
      })();
      return CryptoJS.TripleDES;
    });
  })(tripledes);
  return tripledes.exports;
}
var rc4 = { exports: {} };
var hasRequiredRc4;
function requireRc4() {
  if (hasRequiredRc4) return rc4.exports;
  hasRequiredRc4 = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo;
        var RC4 = C_algo.RC4 = StreamCipher.extend({
          _doReset: function() {
            var key = this._key;
            var keyWords = key.words;
            var keySigBytes = key.sigBytes;
            var S = this._S = [];
            for (var i = 0; i < 256; i++) {
              S[i] = i;
            }
            for (var i = 0, j = 0; i < 256; i++) {
              var keyByteIndex = i % keySigBytes;
              var keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 255;
              j = (j + S[i] + keyByte) % 256;
              var t = S[i];
              S[i] = S[j];
              S[j] = t;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(M, offset) {
            M[offset] ^= generateKeystreamWord.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function generateKeystreamWord() {
          var S = this._S;
          var i = this._i;
          var j = this._j;
          var keystreamWord = 0;
          for (var n = 0; n < 4; n++) {
            i = (i + 1) % 256;
            j = (j + S[i]) % 256;
            var t = S[i];
            S[i] = S[j];
            S[j] = t;
            keystreamWord |= S[(S[i] + S[j]) % 256] << 24 - n * 8;
          }
          this._i = i;
          this._j = j;
          return keystreamWord;
        }
        C.RC4 = StreamCipher._createHelper(RC4);
        var RC4Drop = C_algo.RC4Drop = RC4.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: RC4.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            RC4._doReset.call(this);
            for (var i = this.cfg.drop; i > 0; i--) {
              generateKeystreamWord.call(this);
            }
          }
        });
        C.RC4Drop = StreamCipher._createHelper(RC4Drop);
      })();
      return CryptoJS.RC4;
    });
  })(rc4);
  return rc4.exports;
}
var rabbit = { exports: {} };
var hasRequiredRabbit;
function requireRabbit() {
  if (hasRequiredRabbit) return rabbit.exports;
  hasRequiredRabbit = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo;
        var S = [];
        var C_ = [];
        var G = [];
        var Rabbit = C_algo.Rabbit = StreamCipher.extend({
          _doReset: function() {
            var K = this._key.words;
            var iv = this.cfg.iv;
            for (var i = 0; i < 4; i++) {
              K[i] = (K[i] << 8 | K[i] >>> 24) & 16711935 | (K[i] << 24 | K[i] >>> 8) & 4278255360;
            }
            var X = this._X = [
              K[0],
              K[3] << 16 | K[2] >>> 16,
              K[1],
              K[0] << 16 | K[3] >>> 16,
              K[2],
              K[1] << 16 | K[0] >>> 16,
              K[3],
              K[2] << 16 | K[1] >>> 16
            ];
            var C2 = this._C = [
              K[2] << 16 | K[2] >>> 16,
              K[0] & 4294901760 | K[1] & 65535,
              K[3] << 16 | K[3] >>> 16,
              K[1] & 4294901760 | K[2] & 65535,
              K[0] << 16 | K[0] >>> 16,
              K[2] & 4294901760 | K[3] & 65535,
              K[1] << 16 | K[1] >>> 16,
              K[3] & 4294901760 | K[0] & 65535
            ];
            this._b = 0;
            for (var i = 0; i < 4; i++) {
              nextState.call(this);
            }
            for (var i = 0; i < 8; i++) {
              C2[i] ^= X[i + 4 & 7];
            }
            if (iv) {
              var IV = iv.words;
              var IV_0 = IV[0];
              var IV_1 = IV[1];
              var i0 = (IV_0 << 8 | IV_0 >>> 24) & 16711935 | (IV_0 << 24 | IV_0 >>> 8) & 4278255360;
              var i2 = (IV_1 << 8 | IV_1 >>> 24) & 16711935 | (IV_1 << 24 | IV_1 >>> 8) & 4278255360;
              var i1 = i0 >>> 16 | i2 & 4294901760;
              var i3 = i2 << 16 | i0 & 65535;
              C2[0] ^= i0;
              C2[1] ^= i1;
              C2[2] ^= i2;
              C2[3] ^= i3;
              C2[4] ^= i0;
              C2[5] ^= i1;
              C2[6] ^= i2;
              C2[7] ^= i3;
              for (var i = 0; i < 4; i++) {
                nextState.call(this);
              }
            }
          },
          _doProcessBlock: function(M, offset) {
            var X = this._X;
            nextState.call(this);
            S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
            S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
            S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
            S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
            for (var i = 0; i < 4; i++) {
              S[i] = (S[i] << 8 | S[i] >>> 24) & 16711935 | (S[i] << 24 | S[i] >>> 8) & 4278255360;
              M[offset + i] ^= S[i];
            }
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function nextState() {
          var X = this._X;
          var C2 = this._C;
          for (var i = 0; i < 8; i++) {
            C_[i] = C2[i];
          }
          C2[0] = C2[0] + 1295307597 + this._b | 0;
          C2[1] = C2[1] + 3545052371 + (C2[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
          C2[2] = C2[2] + 886263092 + (C2[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
          C2[3] = C2[3] + 1295307597 + (C2[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
          C2[4] = C2[4] + 3545052371 + (C2[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
          C2[5] = C2[5] + 886263092 + (C2[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
          C2[6] = C2[6] + 1295307597 + (C2[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
          C2[7] = C2[7] + 3545052371 + (C2[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
          this._b = C2[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
          for (var i = 0; i < 8; i++) {
            var gx = X[i] + C2[i];
            var ga = gx & 65535;
            var gb = gx >>> 16;
            var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
            var gl = ((gx & 4294901760) * gx | 0) + ((gx & 65535) * gx | 0);
            G[i] = gh ^ gl;
          }
          X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
          X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
          X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
          X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
          X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
          X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
          X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
          X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
        }
        C.Rabbit = StreamCipher._createHelper(Rabbit);
      })();
      return CryptoJS.Rabbit;
    });
  })(rabbit);
  return rabbit.exports;
}
var rabbitLegacy = { exports: {} };
var hasRequiredRabbitLegacy;
function requireRabbitLegacy() {
  if (hasRequiredRabbitLegacy) return rabbitLegacy.exports;
  hasRequiredRabbitLegacy = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo;
        var S = [];
        var C_ = [];
        var G = [];
        var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
          _doReset: function() {
            var K = this._key.words;
            var iv = this.cfg.iv;
            var X = this._X = [
              K[0],
              K[3] << 16 | K[2] >>> 16,
              K[1],
              K[0] << 16 | K[3] >>> 16,
              K[2],
              K[1] << 16 | K[0] >>> 16,
              K[3],
              K[2] << 16 | K[1] >>> 16
            ];
            var C2 = this._C = [
              K[2] << 16 | K[2] >>> 16,
              K[0] & 4294901760 | K[1] & 65535,
              K[3] << 16 | K[3] >>> 16,
              K[1] & 4294901760 | K[2] & 65535,
              K[0] << 16 | K[0] >>> 16,
              K[2] & 4294901760 | K[3] & 65535,
              K[1] << 16 | K[1] >>> 16,
              K[3] & 4294901760 | K[0] & 65535
            ];
            this._b = 0;
            for (var i = 0; i < 4; i++) {
              nextState.call(this);
            }
            for (var i = 0; i < 8; i++) {
              C2[i] ^= X[i + 4 & 7];
            }
            if (iv) {
              var IV = iv.words;
              var IV_0 = IV[0];
              var IV_1 = IV[1];
              var i0 = (IV_0 << 8 | IV_0 >>> 24) & 16711935 | (IV_0 << 24 | IV_0 >>> 8) & 4278255360;
              var i2 = (IV_1 << 8 | IV_1 >>> 24) & 16711935 | (IV_1 << 24 | IV_1 >>> 8) & 4278255360;
              var i1 = i0 >>> 16 | i2 & 4294901760;
              var i3 = i2 << 16 | i0 & 65535;
              C2[0] ^= i0;
              C2[1] ^= i1;
              C2[2] ^= i2;
              C2[3] ^= i3;
              C2[4] ^= i0;
              C2[5] ^= i1;
              C2[6] ^= i2;
              C2[7] ^= i3;
              for (var i = 0; i < 4; i++) {
                nextState.call(this);
              }
            }
          },
          _doProcessBlock: function(M, offset) {
            var X = this._X;
            nextState.call(this);
            S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
            S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
            S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
            S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
            for (var i = 0; i < 4; i++) {
              S[i] = (S[i] << 8 | S[i] >>> 24) & 16711935 | (S[i] << 24 | S[i] >>> 8) & 4278255360;
              M[offset + i] ^= S[i];
            }
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function nextState() {
          var X = this._X;
          var C2 = this._C;
          for (var i = 0; i < 8; i++) {
            C_[i] = C2[i];
          }
          C2[0] = C2[0] + 1295307597 + this._b | 0;
          C2[1] = C2[1] + 3545052371 + (C2[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
          C2[2] = C2[2] + 886263092 + (C2[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
          C2[3] = C2[3] + 1295307597 + (C2[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
          C2[4] = C2[4] + 3545052371 + (C2[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
          C2[5] = C2[5] + 886263092 + (C2[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
          C2[6] = C2[6] + 1295307597 + (C2[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
          C2[7] = C2[7] + 3545052371 + (C2[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
          this._b = C2[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
          for (var i = 0; i < 8; i++) {
            var gx = X[i] + C2[i];
            var ga = gx & 65535;
            var gb = gx >>> 16;
            var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
            var gl = ((gx & 4294901760) * gx | 0) + ((gx & 65535) * gx | 0);
            G[i] = gh ^ gl;
          }
          X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
          X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
          X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
          X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
          X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
          X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
          X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
          X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
        }
        C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
      })();
      return CryptoJS.RabbitLegacy;
    });
  })(rabbitLegacy);
  return rabbitLegacy.exports;
}
var blowfish = { exports: {} };
var hasRequiredBlowfish;
function requireBlowfish() {
  if (hasRequiredBlowfish) return blowfish.exports;
  hasRequiredBlowfish = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var BlockCipher = C_lib.BlockCipher;
        var C_algo = C.algo;
        const N = 16;
        const ORIG_P = [
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
        ];
        const ORIG_S = [
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
        var BLOWFISH_CTX = {
          pbox: [],
          sbox: []
        };
        function F(ctx, x) {
          let a = x >> 24 & 255;
          let b = x >> 16 & 255;
          let c = x >> 8 & 255;
          let d = x & 255;
          let y = ctx.sbox[0][a] + ctx.sbox[1][b];
          y = y ^ ctx.sbox[2][c];
          y = y + ctx.sbox[3][d];
          return y;
        }
        function BlowFish_Encrypt(ctx, left, right) {
          let Xl = left;
          let Xr = right;
          let temp;
          for (let i = 0; i < N; ++i) {
            Xl = Xl ^ ctx.pbox[i];
            Xr = F(ctx, Xl) ^ Xr;
            temp = Xl;
            Xl = Xr;
            Xr = temp;
          }
          temp = Xl;
          Xl = Xr;
          Xr = temp;
          Xr = Xr ^ ctx.pbox[N];
          Xl = Xl ^ ctx.pbox[N + 1];
          return { left: Xl, right: Xr };
        }
        function BlowFish_Decrypt(ctx, left, right) {
          let Xl = left;
          let Xr = right;
          let temp;
          for (let i = N + 1; i > 1; --i) {
            Xl = Xl ^ ctx.pbox[i];
            Xr = F(ctx, Xl) ^ Xr;
            temp = Xl;
            Xl = Xr;
            Xr = temp;
          }
          temp = Xl;
          Xl = Xr;
          Xr = temp;
          Xr = Xr ^ ctx.pbox[1];
          Xl = Xl ^ ctx.pbox[0];
          return { left: Xl, right: Xr };
        }
        function BlowFishInit(ctx, key, keysize) {
          for (let Row = 0; Row < 4; Row++) {
            ctx.sbox[Row] = [];
            for (let Col = 0; Col < 256; Col++) {
              ctx.sbox[Row][Col] = ORIG_S[Row][Col];
            }
          }
          let keyIndex = 0;
          for (let index2 = 0; index2 < N + 2; index2++) {
            ctx.pbox[index2] = ORIG_P[index2] ^ key[keyIndex];
            keyIndex++;
            if (keyIndex >= keysize) {
              keyIndex = 0;
            }
          }
          let Data1 = 0;
          let Data2 = 0;
          let res = 0;
          for (let i = 0; i < N + 2; i += 2) {
            res = BlowFish_Encrypt(ctx, Data1, Data2);
            Data1 = res.left;
            Data2 = res.right;
            ctx.pbox[i] = Data1;
            ctx.pbox[i + 1] = Data2;
          }
          for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 256; j += 2) {
              res = BlowFish_Encrypt(ctx, Data1, Data2);
              Data1 = res.left;
              Data2 = res.right;
              ctx.sbox[i][j] = Data1;
              ctx.sbox[i][j + 1] = Data2;
            }
          }
          return true;
        }
        var Blowfish = C_algo.Blowfish = BlockCipher.extend({
          _doReset: function() {
            if (this._keyPriorReset === this._key) {
              return;
            }
            var key = this._keyPriorReset = this._key;
            var keyWords = key.words;
            var keySize = key.sigBytes / 4;
            BlowFishInit(BLOWFISH_CTX, keyWords, keySize);
          },
          encryptBlock: function(M, offset) {
            var res = BlowFish_Encrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
            M[offset] = res.left;
            M[offset + 1] = res.right;
          },
          decryptBlock: function(M, offset) {
            var res = BlowFish_Decrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
            M[offset] = res.left;
            M[offset + 1] = res.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        C.Blowfish = BlockCipher._createHelper(Blowfish);
      })();
      return CryptoJS.Blowfish;
    });
  })(blowfish);
  return blowfish.exports;
}
(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(requireCore(), requireX64Core(), requireLibTypedarrays(), requireEncUtf16(), requireEncBase64(), requireEncBase64url(), requireMd5(), requireSha1(), requireSha256(), requireSha224(), requireSha512(), requireSha384(), requireSha3(), requireRipemd160(), requireHmac(), requirePbkdf2(), requireEvpkdf(), requireCipherCore(), requireModeCfb(), requireModeCtr(), requireModeCtrGladman(), requireModeOfb(), requireModeEcb(), requirePadAnsix923(), requirePadIso10126(), requirePadIso97971(), requirePadZeropadding(), requirePadNopadding(), requireFormatHex(), requireAes(), requireTripledes(), requireRc4(), requireRabbit(), requireRabbitLegacy(), requireBlowfish());
    }
  })(commonjsGlobal, function(CryptoJS) {
    return CryptoJS;
  });
})(cryptoJs);
var cryptoJsExports = cryptoJs.exports;
const crypto$1 = /* @__PURE__ */ getDefaultExportFromCjs(cryptoJsExports);
if (typeof window !== "undefined") {
  window.Buffer = buffer.Buffer;
}
const SUB_ACCOUNT_ZERO = buffer.Buffer.alloc(32);
const ACCOUNT_DOMAIN_SEPARATOR = "\naccount-id";
const intToHex = (val) => val < 0 ? (Number(val) >>> 0).toString(16) : Number(val).toString(16);
const byteArrayToWordArray = (byteArray) => {
  const wordArray = [];
  for (let i = 0; i < byteArray.length; i += 1) {
    wordArray[i / 4 | 0] |= byteArray[i] << 24 - 8 * (i % 4);
  }
  return crypto$1.lib.WordArray.create(wordArray, byteArray.length);
};
const wordToByteArray = (word, length) => {
  const byteArray = [];
  const xFF = 255;
  if (length > 0) byteArray.push(word >>> 24);
  if (length > 1) byteArray.push(word >>> 16 & xFF);
  if (length > 2) byteArray.push(word >>> 8 & xFF);
  if (length > 3) byteArray.push(word & xFF);
  return byteArray;
};
const wordArrayToByteArray = (wordArray, length) => {
  if ("sigBytes" in wordArray && "words" in wordArray) {
    length = wordArray.sigBytes;
    wordArray = wordArray.words;
  }
  let result = [];
  let bytes;
  let i = 0;
  while (length > 0) {
    bytes = wordToByteArray(wordArray[i], Math.min(4, length));
    length -= bytes.length;
    result = [...result, ...bytes];
    i++;
  }
  return result;
};
const generateChecksum = (hash) => {
  const byteArray = new Uint8Array(hash);
  const crc = index.unsigned(buffer.Buffer.from(byteArray));
  const hex = intToHex(crc);
  return hex.padStart(8, "0");
};
const getAccountIdentifier = (principalId, subAccount = "") => {
  try {
    const principal = Principal.from(principalId);
    const sha = crypto$1.algo.SHA224.create();
    sha.update(ACCOUNT_DOMAIN_SEPARATOR);
    sha.update(byteArrayToWordArray(principal.toUint8Array()));
    const subBuffer = buffer.Buffer.from(SUB_ACCOUNT_ZERO);
    if (subAccount) {
      subBuffer.writeUInt32BE(Number(subAccount), 0);
    }
    sha.update(byteArrayToWordArray(subBuffer));
    const hash = sha.finalize();
    const byteArray = wordArrayToByteArray(hash, 28);
    const checksum = generateChecksum(byteArray);
    return checksum + hash.toString();
  } catch (error) {
    throw new Error(error);
  }
};
const nfidLogo = "data:image/webp;base64,UklGRtg2AABXRUJQVlA4WAoAAAAwAAAAUwEAUwEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZBTFBI6xgAAAHwgP2fKqf9/53dzUZ244prBahQL5qkTakCdS8UKyFovUVqSN1dI/XyrisNVPEWiUHwNw2EoMGje865dOY1r5nMOe+PRoSD23rBVtfTWdNhQahE+T910//7T1SMPyYoIfwxvtighEnpMnDoLfc/8uoX3y/95aMpqbLhstd/WLLoi6InHhkzNO/k9jFUZGR57QfdPveN1UePRdQWTdN0e9p0iVRIWGAbC9uYtETU441VP7561+C+AdnMnz8uJSbzlEHTXpi//YhOToRBazhXIoT/pg6LU4Gahe89PLx/h+iUeL+/beNr33/EvPe+Wl5R20QeHkjRVRLhPp017a1eXfreC3decXob3YtCo97ZqbfqWOkOeSzmfTZrQxiniHa09OFT2haBtO4jVhzVUdMKaXCFjpuqX+rTKbqttHvF/MrjxM6z1jKat9RpTpcFr9nBHLWaJXdmtIW9e8guY8nySJ1kQQlkyDD2nyejRXce+r3jeA1iF22OlwWv63xGbe24sMj0+MbxMmRcuiA1vpXG4/MxRg2oxvoR4jKCdRSckHVx0Ece1aqRR42oxupEQR3du5toloS5aEv98jgXT4CCsup/PClKQK4vV2lLFXNit3WWSTTpeceo8TDL2g9DwtF3H73/iCPycZJcfPhxB2yLm8vD1nt8gpnVsC0cut54aO/m1at+futKn2wCTF1mf71qZdWufYdRXvPUkXyig1AO2wsNkH4CTcwWZlr7zZsP3Hhm15NT01KD5ECTTJpJTEvq2b3nDaPmfvPXXlz7rBDpyj5K2VuAlqSqev3Gjx8ZMShZkW7qPXTa24u26pqKshO9LM5iP6/KWRf0OVqz8tfvXn5wTPZZRntyT7G9zrp+2tz53/7x77oWu8kCN9IHRWnsmoNwa/l30ehTu8WHwsYRzUVSdFxchy4XvPRnK3itqB+J8afxiyE7jNWpPc+eG1TafBLaVR2xRgMeWg+cLgSTWkA92vz8JQL73vLw9c6Y/FUENOQLRQiQjW2BrL7DD8fJYZtpC8G/c2uIewLBPeZvxRkHIBay5QTFSi558yXo7wq4L7y3Ia/cYsPFddMUvBcS7qnhHcfpfJTOoX4298FNbxMXAK5ZnJkFcLbnGG26bjp/H90fqIvjyrlHqNTfF6MoLnz9TLfoT7hSRe1D00AjEOPKKWEtGcsp6MORXq1USmMVB25bYZJzApybzzyOPEHtwb5OCjG56/8UGoNPqVDGz6jjSqnfPRQzufXtMjOYQ36fdedGeDuNNxWRkoQDkdYjYvGLuXG2aRPEDuzKNHDzryIjI9v1l9x4h/b9tRH+cvV0VSvlnXYkmROBLXbFDcOwqz9NcXe6NtAsezgnzqKWzlJcPn1oIIL4AI1fFLcn21nMvqHv4cT3NEYqrp92mtNArMAnKhhTT+FYyP15g8b1XOhGi9usUtyffFqoYQIXBqt2U3DsW894ANpHKNcrXBipUlS/wQOQupNWMYoHE2jmcI4HII0Wcf01zIOnKJofaUfCvYNiSylUBXl4b8UUtmZ5APyfUSIN+9M4EP0ThXJDcw+QXqPtGO15aL6WQkW0F2AWzfnqyiNou4vCAsULcLVG4XYOJDbq5HPxq56AQbRT7T0c6E5bYLPtuH2Y0fS7iA/f4cBNNG5VPEEyPAXynlHBgek0Y+jvDdhCMe9aDnxAy3p6A76jzQWHY+1ijbLAFG/ACzQG4VNLUXuTR2CEw7S5NZVOM4UfPAJn0ngOnQE0HvUIJNMm4xN8X4XGeMUjpIMU1qDzGI1zvQJLTEiljqJTSCPZK/CtORekB8dSsCk1HA0izYpX4FnCtyVFOnNwVYwbUtTWM3A/ZdOInIVMzG6K1ks9AzcYkHeNPGQyGylZiWfgDJ3yw03YEcbjFK3neQa6tZoWTmIqtqdymMLdnoHexynZ/cjkGoZArjjMM5Cyh2LiLyBzTStF6YGegbRNxrogGnlRAJdbKTT29w7ZKoqJfxGNy0SKzse6uxnYR9u1RpvE20U+VHxPUajr4RkILqK4tRUhVPyv2rYrpzHUdFM8Q/qKYuOb4nF1fpGic22id6CEQg2yMJvC6ljvwDQD4s9/h3B1Hh0h85niHbhCJW/GXwRx6biXaAj1Awy8Q8FvyTZ+DbbSOcSldYOieIlrM4n5+EoXtDq/ChVvkYYcNi3cNh+/8zgxDHxvv67rh78dEXRDcI8NZz+zQdf1hg3jo/loHX3WmMHxfsVMXuMmeP61Q7KMEMP/Q5yyXiopKi52SCXFRSVFDsmhzgNRMHrZFLW0BChq1wiuzpxH7x2b2ztd8blbaGSALUxpC1Xa43JUNep9MEbrjIncFaA2B6sXfvDw2It6t3cpchsJ4w0d9VgY4wEzxieph+o2zM6LcSEuajAngo0wjAmGsoyLAneetz14huJ3HYFppC0BqO0opFr2D3FWwdpp618f1clVuLABYNyEUbakgyEY+TrmDzBdHCoRt5/mLy9zEfJMWAUgcGvnOsfNn/aNcg8BOND8BNoc42u37LZkt8hYhpspQ95hUE8gR+6PdgMuaISNvn38bcQBG0LcWTjM6ntZAZerZvM1UKvBnnLY4A8Xt5P/ufg4cAbs9awsHnou5p2Y7adA9uQ0Ak3YDoP/dgdkHRBVID/l5djdFZK9oLHaqh8aZxA9tS68SvIC06i2KQFwSh7tkziDm0C/kwGeqcbB9n7Gi8efXSbx09zAFo06JVQBeKIag9Uim04I+h3/V7J7CQkwChiWBXdHmdL8G9I+IQ9qJhsqiCCMsXobSXNC0oZu6FSBBUx/g0EhDaQk+R9/SHJVATpn6Hco/zvRJ/sijgypCPrsMD1gNqWLJN0QaExRGmo76ch4KQvH4Kbr9DWYBHGqsym8vYOMfeIWa/SF84kFO9Y9LOXYDdNGyhK7AdcX84TcMlLG1YwZEDHOsPfq7Jzc7Nzc7Nyc7NycHKeUN2rm6381akZP7dNFsgFWc+ogYcGaFSbBBxSYjftoOlNXu101/YutTahr5VfpRhxyGxlWvd0442CMZzbpukzW3vrje89rgAnAJRMZIlvyGpgfh/kIO7MwetzhLc2cMkBZmC4f+GQrtLJaaT1Q21F2rYxhB0/DsXScPvd5+xCW2DRUslxoy4wtBB4HOAgMn+QzbxO1WUidDqQvxLoawpKFVWCAJRxjIxOt20mLmw07QrlGyVZghEWA3hIEvH7HXLMN1gX6BK8LybcIeGaYioAhFUHteTPoDhAYO0vCDRnrHjScbA2BITWE2vUpR1HEKZIVHE/szeH5GpaCTNoavgZu38/bQe4ElD0h9/eJd2Qhd36aCt/2SHM7WaZkm/4bxdaJKtiIYYrdGGYAq2RZcwYyKYsxxJU+6cYZWBrgFWM8ko7d+0zS+ZjBSgZIVbDMHPqis2UJMArMQwpblZos9O6f3Yzw9ZBEGWwFpphmph4Yixpn+43FpvdnoJNQgcB8iTKw2fxmsvX6KBhjnBMIUdq+qtLx+z/Z0QsWKsMyFRh8YjaBZcwdAj6hAzr7GaazPBnEtoEyZGNpew1E23QOAzCJ3hWAC9dVptiWOgtBIMz7w4EMDoSrHNsew7/cIlOBAbZqZtyLVeAxAm9bJdgG4TWJFmmxLJ1JCACLaKw71eF0LicfzfaEXp5kNT9I1H9jaojJf2N+j+3N4EH7OmhnSAdDmVZjLgKOMziN1/gnFgHdh6tir5ws0XgYBPJiZ/CJra2KxSfmIkSXWT1m69AgaZLTyCzEAuO2zOzO5DIEX4P6T5ne2+QrkIyTogRTjJFkzqAYIxdeZhcelqjAapT1wNDeKEIJqCUcS+fC/XbDIJkIvUvPS5MLGghDBxVCcIHt2sVHGMGevSdN8uwYxwZ6M06AEZN85lHfyUe4Umf+oVCiAnNDClRgEHkKl7Nnv0k1A5ZnzZyY/wKzZSPj85pmZ5FkHzvnBfEx06hzfDwEAZcQGKox7rjchKvZ+VGiPjHrtMDPxeQfyCuM67n4ZoRqrui/AS/b8zo+wmSiWQBt5S2JCowZPM5gt2SWOAMf4QX27FHZCsD9gzUe5vwRGA/jI7zLno10xbgtdey5x20Df1p9YftpmDQZ2GINGXT8bFkAxhiN1QIOcxEStrALXaVaje3RwQQYBY5iYgndd0C+beUI9qVIk0HNAJOkxRiDMMYyW/IBLsJJtN0PEv5YI2tsZk8TooCQNbWWCl1bZgH6vmV+/IYiW8HcQ6AZXHBqC9yqOAmr2H+Zosi1CHlmABmwCPOwH+SRnWV+WLe/fvJkcBNsqROJhjGOoCHUCvbzeLzEeML6lt5v+IQuEWdgqMY67qbA4XxuWgNhIwN2p9J438rTJ25hhM0nJg6+CD7xZzp7Whpsu3Cwy0bCtmHYJab/xjzue/BtucNRBJ5SXERAjzPwijH6XiV0hNQj6hq83ECu8TDHzMC25HofULB/GCzgKLYQNcXqBatR7U+UKLnscds4YNyWdejx47ZXGy8ThDRDkSh5DcyEEXwt0LLaiSwkrwT1gL4JdVGkKrBSD9R2FLMxH8MVTv0X9I6yBksUmXIhITO3EVgWgpHv1BQ8A7WowpkHdIzUMFiukAVMNNbHtZhC0kKbAbB3pJsiXYFlGxVfiB232LakILVo6nxkuDzuWMQwaBYLwCvif9FhSrZ+MFVorxi4X0NmxtoQkofRt1THSi8qBi5SDe5r2OHsa8Rd/jktFsfyXWYLILmgT0zcKnj5xLdujVA3F4ar9SZFsuSwC7HA2I019sRpIGmAE7sJtT/xsZXwujDLcPgZMo0xsix3phgjeSZg1fpkZGYSpQyHdOI5QybP+6Rsq7HR4aZrFMUVhQKE8VcpkqZZkqqZS4FHmq1Il8H09xNxuG1ZNIxxUD3B2lDegBy0rFDky0BIKIpGAMYYHZqwJxBJpyOnG7iPkAAUIOsBbwIZFAKpYn8mYQY1g4aVnAVhjEWaNciEc1C19cuwnGHOoKCuC1BzjEpRFHjePEJKWSAOozHKeALf7RtVpb0nKgZSLgIfV8YiYF3t1i9Q2nCdYiHjhqgmSs+gDWGtBO7T+lsHxULK1cDLnzXOYM4TbPZtmTgHu8NnKgSkGw9jHVq4TwxMgpyWHc9b5g9UCMg3dsNiqkyxG+hCoK8UqDbEPYlJ5yesP5K3YI45bMQxYozsM8W3euRV6yNxAW7Wjmo+GKPQjsL8Jnb9RYrU0wXscds4GON5nYjpesAn+c1ERe7kNUCgZECfNB++DBgymJJgFY9cqziSxKsxo7AJpE1boGo7nu6rGLhdFgJm9glkNnS0nYiiwttpxqFR/lzYwPwYCm3S0EpRlCBoQz5lLB2gWMkFBMuSOQjY70RGpUjtvH55lEJE5ufiBs2EKQsDz8XOibBmSpT9+9DkaCNM5BYpl6khu/8GbIhs4OBVYE0z2tJRD1TmK8TkStVovgYwzkCYC6JvS9MFsbnmJW8OP9UZdaMK8o6HgTP2eBjrvo23VpqWTO3qN8zFbVJ2kzEt4BmxEwOM3fAPebU2NuzZsPbZW9sprpR6raoqq6wqq6wsq6osq6ooqyovt6SyClOyNPoSaLznGVoCFDX1tySnOhXlNo0s/cnqLP15ftGz992UO6R3Z+Ot62LJ5/wDiARWmFlRBHX+2y+52hbq+0/r42ovc+MNa82ZzxebkJycnBQf5/fZZ9BezlTCez2xrYCE066eVbJ8VVn1ztr1a9cu/3DW1acmKj6/ra6JB7uPOWHC/JoGzXKR7EEKVdM0tXHnp/knRAf8XmyPjkrtM2lJs66puurwOp1xDqto05+jTkmNMrck7t3zK1F+Q3lZ3vEf4vD5M5ftN9qDetuOwNrSWf3CASty4Qsak8JptZz89KIGXV31YD9XXGsdpy6sUzUj+AaEsP/o6q4FEzv2nPDVIT2yqTCHByfudfThyA1uttc4zhZ31FjRUOAT2u6jqU079qmOuX0Yn541hE7sOdnlrkDXkia0eBt1wtGvlL1Enbec6Gb4u8/dY2w13AKaFyBzbQtZ55dcq5biixldZd7xSx9F4TKdovPKKFfC8h8yixs0NcKRJXG4vEjZtnYmuBXnbdF0TeWZbfPh7m6v0nTu5E7P/Dn/6LzTP4m4HX3KhPBQq+vhSp/o4dUadzaHcbt6N0XnY93c6BM3Z6+mcqcmhCuOobwwGvu70CdU2KxzTQ53oygO9bqJQuR89yF6tuFfCJFaZkdjkk072FzkMk8Un3+44UvxhPiO2zMM86vfEYr7d7fL4PfnGK2Jgroux4d306uBoLE1qXPdJrJw7j+W0ybKzY4z8eKFqY0UjQtdhswtujB3lquyuZ0f6zZmN4UF0gRrTIvNp0LdFAbRHu2jUO4qdfyjzf1UqEs7NiqAxUoKB13lRNzdioAJdlPVEy14Q9M32U3qzNW0iGhEHsGq8jiNvi5C1z1WBEy0a29nJEbRGOEexH5gPBExFcficAnlnao/6h6MaxQHSiBmLE4jHWjKfuQazzr94/gI92g7ziP/EQob3ILAtFZdUFqn4nyVW22TmnKL71CpLhCUgKFaGkbhA5q2WXK7MENSdSREczh2n69g3E53qmr/m/7uQNRMVRc2qTOjMMin6XqV5MCLSC0zXDdxr6WpGPSmMcsVflf61OsCp/peGCTTeNUdSk4yZYHFAoyOhw9S+MIVPjGLjROUyNeSaIyuV1JYG+UGkbATmnWhU1MPBKIXUChPc4OvCWJ/ND0f47zzFYUtWW5Qcr4m9EfVPsMo+Dxl0zvsBs5GQo29pLjuRk0CwvUgxZpaznQBTmvQBReb+iIwXiVc1kq5wgWEqzUhM/LUDPWxXzm0nk93AWbqIkKbGgR6HaPwuwtQYpQUnSIEIfE4hWMx0se/XHcgcKjBj9D5FbRdarj0iV0tPqtiEXicpmmh/NsqF5+yBASyaRwNyZ6kDeJTnYxAoI6m6s2SAyPAVys+tckYvf/MVoPgxhUHJE9KWyAFwyseRlN1c5zshWrxWZ/kw+j9Lpqus2RfpEwV8WBMi8PGY/Q+/DuNI6lyJ26tJjxrcDaQ54jxHmsg1rTzOL7Gcj8KeRGbRZH+7M2A1H3iD8Tnfb8PZZnSX9GHT5H61yzx4wwzDFC6P7yJqu6Wi2XO1eIz3IiH4azT18k/27y4ayXOqU2i03SakSH1v5luVBUn+KUFQoBvh4BQzg41SX7rC8MvXgBQuu7RsKyLKPMFJ/KxD83K+6iOZ6S/UUuDksaXL3qWj3gYe0yF6L1joE/K+E9qFvtq7unz+bDmI+ZFmhnY6/14Sw/J3GAN4RKxsz+CmAaeUWG/aP8UafwhW75fwdGqmG6xYyImWL/jPSggnH2IA2E7z31Y0CclPSYgUa+4T31E4Oxgb9x9OGpMPctK27du1XfFT4y66swM2f1mO7KmLBVZXkIO2uK4cY3kW4IORBU0XW1d++WzI3M7Squ27bUVnCVwpk6PIoMSb/iqGfAEbicNG/54+eHrzzktK7NdOBQtjxvHFtuvTtzv3f2MFrHHITziAHn+UP6l5Uht9caVP//45JRu8sAav1Jh79UF4QAHv/YmmpOuYVrOoQkyeRiY2KQJSutk80zM4Uw57x/AKNBmlymeGZJI8533ifq1vYMJj3HoXux4sbA2Z84qYIrf88mjsetUQWkc5VccoDfxsQYvAdWGoFFDB3lki0WqQz5tlcRxDBJeVUbbXBA3oTekQQ9j1IT8qHu7+njuALEjd1EnjKgC02I5Lg3miOoOPxLl47urBt9laZJp8XSSBSWCUilAHKv3pBX1HLqbLgveFg77W+p2ZyG+BbrllWgIv5DXSrU0hAkiFopo7wbFOU5d/tkeTVfNXQZn87lDGqQeF/HamMFSiMtJ+bL8J778elXtvlbm/q5Lk4ez8YSA1PT1+4Q79gdig0ntkoaOm/3D8kPwxdI0xPCK5fG1STBUbX12wPDchHalOueMmVG0YmeL2qhq1m5kNW19HpVKVKxXtWC/7rkq4DdoC+5pqNvZF4+dOueNj777a2PNxr9e7qnIJaXc9cOmmk2V27CdY3jU75Ggz0xtyOX3Bf2xCf6wEbeRT4qO98WHQkUtqsb/15aikFFWhqkNWVrc7D0q/18fDQUUOaa2tHyHrdM0Xg/tL6jqq2wHYq9xk7NDNY71/GILWk12wPx4kOvMzcYXRxejb8DvTfC3Kzxu3PIp1vBuBvHs5jmaGFUVUfE/aqTydvPs5lnw+wI9HtmHz95HehhPCXiUnzoXN2laRMM6C6t6Y0lX4+TmgVLs2O2thuOBVatl++gQZV14mIedppTutv+H8apku9v90+SOwFiNR3lJhs+fubRe1XTjUAd6YGmjReqXTu8Xdj7xSjdRqb0KljTpqnFUBrWrNf9R0Dsl6At4LXw+vxLdI//TmiYKVpC05pP8HsahzdKMfBj2VP+ScPqw6cXL/i7bUFu7bs2aZe/PGHpakrUubFpRnnirhWItgtjE5JSUpISQ374sSO15t8u2A5H2IlMRGF5vdi3Mm/8DISkAVlA4IPYbAABwgwCdASpUAVQBPlEmj0WjpCEVCYyEQAUEpu/D9eAy/+gGViwB7sqn+u/lV4Clz/Bf4P9kP75+3XzNWN+3fiLlNKd85Tl7/W/3X8qPh5/j/ZR+rv+Z7gX6Uf6X+0f5j9nu875hP6j/gP2d94H/Ef9f+8e67+3f5r2AP6r/jf/x7Uv/T9ir9yPYD/mX9+/73riftR8G37aftz7TP/p9gD0AOGI/t/4r/tL5Rf3/8l/X/8S+t/sP4+7vprqfKvtP+1/vH7kevv+f8IfiZqBfjH8v/2e876x/r/QF9evo3/G/vXjKf3HoZ9jfYA/mH9O/6/rB/p/AU+r/8T2Av5V/Vv+V/Xvy3+l3+O/5X+Q/Mz2j/mP+R/9n+n/Hz7Bf5V/TP+p/dv3p/z/zdesT9tP/x7k36q/80uDZUiQFMdICmOkBTGwIOTlrFsluZs/VCENhfEdkCMDCsqY0dGvDMzKWGpm8A1DDznouopFE0iKNfWRLuCpvhMoSc5WabFu2N6cImFknefL/Y36X2ue/h1cQWY8rEkvGJNZlnc+5apWn2O7PS013ZW7ZsP7Xs81Si54BsoEX0XGEXxqbmPkX7ZfTJ2cZMLJomFk0QaHfuMcZebGfGx5+hBBWVMdICmOeWCLjc+GZaoB6IcUsde0KypjpAUx0gJ5rRwrU9PyT1D2XgCxGVXpgVyDzqeqNz8rveo8Cyzqxs3GJDaCkYe159NEQeL6EYpKy9gFvM90dX9JNLcFJs/UelIg4uN85GRD7EupjpAUvHury+OBVqlfZW9nRmKn4M4zpv2f/JZVFrjePGOkAHPlOoYd82aNvqR0dJg3IcqCYQy8mvPpoiDqnl7TS8Nu1zUVLkk/qyRmVzNroFk0TCwb/jkGshp1S8NPe7cftEUvXnhJlmS2tG0PM72jemlagomFk0S5/1BK4XBXfu/6dd55Q6xh/+P9bP/qZqFNlLKPUOCG/qTI3h8Hx7gZAuUkKGLFs6W7RjeHHXUHiQHLaG4MFE18Q9b2Waa/tbfKQbIeP6qtHxml9XFcCYQ7QPyxXToT6uQu8RuzYFNlSJAUurr/C+Fpnka6V+BEjPkTO4mnKp2oV01+K1rNDKKvwILILi2AsmiYWSg1+CB4tg+ZrBgv38rZArC6XmNTaAPyN/GqoMVhrym9MdwgsY6JUiQFMbDEsOFWB9ptfMzWJhacwiFusFHTw7zRvp2VxJv9GJd1yDrOvGrrMofIbqRICeNCvTnCaxhR9wvdvve8TVf0kmMtFzXIcYQkMc+sy6X5KC0ISZShushJOQuPgEBDY4HKthzWWp7KezUUmiJF33hyHzrMFw+nlguaTkMK7d6TGqs1acl64HI0bBjz6Z7pYkUPLZfgutqg9H6GW5V1bQAKFi18o9X7orZsP7Xn00TCyWThvdmbgAP771+AAglTGv1YbtW5LP48HESLz6gBy7WjjclDRWjzCshZmdwZQ/flsY64K3pA52kkYZdgwmQTqNUlXqr5Vmh5N1TU24hyHyAjxwnrMtCMHxUUM/G5dI1DIWX3Jo4gtQBlE4vN+KLqpcMrCgZuDvSl9xtpyq2iMbS2fTzZqPnuUpKDjvxAE587m+wEMM+H6dK6/iZ0nKUZS+IKEpXFw91DZHp7oiCofRoHu1RIVDmoOtqamWt/qKu98kztmC6w5c6RhLTrJ0271PffbnitprJbYtNIYD2Eyvr7ppC2yIHNZN9grUJsh1aCfsVD2kCeQs4FyhpBs/u5VezaM5MCXkgSf9pmSauYJhxBw9OtmhV0/3uItQ1kTBMy5ZW+PtgnLmM5ug8Ukh/cUD1L9L2ZY6HLi5sjfYuzjShgUydOCuOm60/6pKArQqjS/Tux2Mp/z2Lur03Cf2plzNw69xo3f8NflCYDOZ6oN2VMLnF9Y5bl7Ze5eotPsQJ33xJVyigB0J7uqRVhPRF+ngtX6CFU3+UNCQJ4iENZjllvYsUxZjllvbsNXHn58mcbkhB3zBKiJr4VhgfQT+fmlTqcWE7nFjni1L1PFtlRg8VUoT7YJrQi01lPtb7jQkThXjOF7EOOsrmqib3aaLdIwUvkk43OXG6D5EBcVUuLFTdC+fOap+c+xBnuF1lIZdstwJcvjb0xpA+Ac2O+Jj9BTlPRwp6DvVbD5NXyqFLVscW7UCPqgjfUIdF0aW/rOLEj2BJ9cFKgcXzhIk9WMONAYY6UU/OHjMhjo39M2nIc1/dvB8ZvGEKfNOoNXa/oJVHO4zGcd0CUrNM7fIOWcODktALNuRzxXuPByJaTbSvISTLuQ4X/83NTBExOZZAr7WAJx87Ky0vkC1GNUkGVkZvKdBEqpWxL68zkok/SN1DKIWergvqOocGKS6rkFvhO08DxLiAcEUcidAVDAYx7ETeFIbaZDbmmCkQSTeIPQy41EEXDCu/x0om5yomdRTGeku+pyBkYyTg+7l+tx55Z70SGf3qdZFt1hTrkMN/aapV+cqGlEMfC8//ENhQ+gIiXRgdM2kw1T2IT0BJACUTPGBi8usQJCozDM99pi0wkxrex4DVvOlAtfabhbkTc+lhqzth6wBrO/xC2sw3E/yjQsv3TjOCDlP6cxqLOfkD5quLJ0UZw3qjFf70apO1K1ES+x3k/BOrogGNans4P1pGksAww7oFz70aOOloz8Rs39qMCLkP4G8hh2O1gtJdAn87E578Ub4AABq9c+RdgFtg97Lh+VRKHvE0mW5mRF/ctznjtCXR2cpq6KH49I2ZG4iOeOaCeLM1nan7GQzduvxwCrBwVDaBDQchrXRsq9+B/661ZOt8TOlLSR/CVUQYspnB2BZn4yckehQxcYfiAUU1VsfEyA3FyR8HEO5yB1TwsRAxcNEXu/2RA326du5HF6wNBDb46vZmR2LNQ0+ESIeA/m5p33K65lA+2qyEWsG0WhhuhsYM35eAcQACCS09P8P2p3UZWrePOUYcqUrsul7Iv9EI7er2vv9/4ksgMMHNmvA/irVM+Jp09VAXyvRxz0bCLuuI6fA8javlpdUlDqN/K/IOcoprWCR7UQlvKZyYMzklVix2UtEXir4tk1BvdGicfLuPXBI1/HkqXDGR47x46ITOO+BocAWN3o8LLLkA6q4nX9lgcW5ulUMGBZLZd3By0P7wXknkwYuzuuB8TR2psb48+DsZe/bzPQNrYqXtbgbhr6Jja4xau+9jEr7kO3VT4lc5eFLGI7nK+ySzRZ0Yf0WYIkjt9JZRMu/na6N9SpGbPZoHU6BV0gZMuYklp/+2Sgf/lFW15H/6F0ChPbODxdadjqVlD8vWJa2WwAY0WahlS/qLAz2QQ9GnjmpWrjHudtGxph2a7co1jnIGwaWktnmhYI6LRSHKoLvsDQYTVWnBVpX/ed0+56EpL54O8b19c1cKwB/9/oPhJ8Z/KlDQAbNndJ8tBkmNBCRlf+jfVUd0b41eYaHXf/8pQsZkGBW2QumtXat/+IG8vv1tu1KZfz288OkAJeFWwOYblquUL4v+u1pwcTCfkltrG19O6bWpsD8r1U24U+cFomJ3q+w88b8P6IAP6aVj3NQdm1mi3I8kzm3H7yKuSLELAYof3+bUcSSDMAZA7m/ae6+Ig0m0mU2D+PSbS63U8ipUX8w7vrDob7X2OY/3aAd31hNC8mH7Kvr+UodDWgYTB6d6YYDyYaju0maeAXH3h1yLt9huEexmYJtOztmZUKIs0107Dum0m7jz9X+qHF4SXTmy6woT78qYQ659gg3J/ssTpL19CW16fKcar33U7jPq3NUXWswaBROsvKF6bWpjylQZtHJhxqA7/7EiPsmaJYV5PTmi0+sR94HAbvu2Imi7rzttZsBgzGizLDLA6uPenSMCOmXJU+Ajn5gQT8OMf8zlOIXtgBZB919cCesUEq6/EhZCHY4NbcCHcBwkKox8LRGYMpGu0hmZHPAfQO+P5P593Jufyx1LSG9oInH2rwcZPabbLQgpeR/3mWzKhidOWaVLkPG1amkHFyx/zofVVaj/oQEvfR+K5AE7bPYY65cp/3aOzCtNBggG+njxjWH3zXZpPBUXhvCVdXHHmMcRYV9eKyHSQKpLJoTVpM0SxH/Jr/cgHC/+oo+wL7Z4DXhY8duI6vVhXw2XuxiCZjH5smjONwbfzQbcKYfBRLZ8aS6uA1iYr6Jiv+aPC3OkbVqZVe6AS8pNE5wDhCpXmwINgZKo33gJOeaOIhOBoek2uV3LfoOrhUJC+MxrH43sohl9hAyDdUwqyJvO1/uEtjlBijn8HDlWzJ4eJfhtJnKx98IKQ6wvqr+/bSvlGtcE/HnLnCwAWwS4MbEeg4j6huonXjWn3RbYTzSRLF0HdpUfEMiQIQrlWYwQ6+uc1n5lDB3pX00wKmsH4F0IKh3U+hIUwXdeDAGcfYB/ArMFLX0FZWtcU0oZ8cuJsczDG4KaxgUL9ePTjGyZvoUpuqFAV+TaGgSOxRUwIwSmfrCZFCOYs+ad38q9r4/UJfxZ7eTdpgQjYjGPzid22WppvGobcwp4Ii3DTIxAQYnoXyq5lXJrjUuOFQHLJAqQ7hwD5MBugEBj3PbAAo7fzSOcZ0YfiQ6e5HxVAqDpEl4MhN00Wq8NQmO3LMpFZ0C+LZITRqhMlj5tcNrHrF0oCmDr2qyAPrpBwWyzO+Dj7mR3hA5XVxW0O6HeOQywv7vWYJfjiaBch1hXkDeVEy1f0pVJCe20uxSRh7/DX1V1qfM+2q8WVyL3rvEojaV9rE96CQKrRrzH6iYcKKVYaLNo/sQm+J23uIQuqwCcLKHwGiVKkLwJyE2bcMVM6EL1XxIW/oAWWGRlH4s5TvMpQX4F56lOBQ6londi0m3KeP6trSu9R7Yy+PVZAad5SnhAvA7aaiYC/z8EDMbkvHZKv8ezi3yj+1MHdA4owbwAUNUn4iWRExbHtwd2twdKFl6iHt4XOft8hhLbu6YabYJT0XbyjABOxVgYr0/AM5fIKvR/cFNL0Au2yE9EzDJYNND48ze3o97meXykIt5FAHXPGLhM33DTnarz/g1nknqJpT1TiPPsIs/i31MOZJCnh9s+8DdIDqO/kgRd+hPcYPIfz5Lj6hIPhnt+SX8fHXr1BOOtZSm1Koio3XTs+7O8ctS9movrT+7SUoCxJSJJZ12n1R97mSjnwOeHyZFV3/T04p+et9vN4RAB4qe5YhmCNWaPpeS63QQ96GWcKAlHxdXTJaPoQDeBWzjmILeOOY7ipo33ipuMmjjFwg7vWGycDDWZlxaVF39eXjkOxUEZ5EJQQczaUXyfDwugJf7cyo1JQoJVI6dEgcFnZCxId7TovucINsGgQUXbhmWKzjejcXs8hdMSopcXJUXsDpo5/v8skFc7ziDKsPDRWeFu8kpP0RvelFQIZ75eCQF11QkUe12JXEX5Uw9hEvNZd67+/vU+kAMrQln/rxUO5Kzf/8g9BmbpI5KvbEiW3yJObdgADh6Ge6pp+H2AboCK970PWvUu6clj88g/iEzJU+o5aS2wDJO4pmaP1qPvYRLIZSq7sDoi7U3+QJkk9/Dhj4eI3g0+Q3DOB6mSG1/KsQaUCaJ8mg0E1H3xTSBO3cAIhvjXs4Ib/X4K2VGmWq0xaQzzYFSlB2sgR+8bWMuPv/8/zJXNBAQa9sXpN+Di/TC9Yj8VjI1cVjiFEV+TqwkdvjP5Uoek0tzirE6vy3oOb3Fs7HLNj50XXlXceXecPZFpeCU5yFZOKZLRwfjvU+CGJHx3qfKA4KNLec2XZNPGQSitgAQWzSETyyrQIvh8UQCECX/EbrQFFC1TocScT77nX6DmcnvQnLrHNNi0VsFgY/2L5ApVnOmK0H/tJrpEyuUIyEWXYQqDlZMvqZbJZLhJQ6q45ABCkr5JRbMhYb8bklBikpAxvv3LxKlJut/cPWRTkI9PNhOFl7HTDmpguBDpakNe/rB203IfZ31UHUgDjo20cG/kf7qZnf9R06zAABBSRVkK40SglZbAqGisoJtdcccGmSDd/5+njU9+Bb5mtP/jqVHl8UPziXWqGmvwAiltsbpELFVx5qk9jaKStRSXhX+8/xLRLWxklBNzX9+CDxKaU15A7fAYlmYaTIUe36z10x7MSlX+Mxb00bvX3DYuf2Lnoo7jv7+tcM4yMPNH3e5i5HJOGVXXLP/iM5YyJR9N9JCjVwBzMgJRPOEJGXKrqByym3l1ceP5dxE1xYw0BKq3TSfoUYYFly4JzeOdDGge2fw+BDLF/jRUjtVrrYa7mciAmuBPgmj4Vq9FkdEpKzv0JiyfwWBniAEONAHPdPMennjSRDKiLlMvvk9GCLgvbw2lQvzIFX1rpWlVbc8UpSRq1fV0G0KIKPsnakUz3wPG/cQACotn2YwxnMvll/xH4P1M3j0rTFcfjiTnYaBjc8aEjyU4PgO3wRcwv5O7tx+wLHRZ30lrHATCVbqq/XO1fmUC77cOXa8VGNV0KE2xCAw6zC5LYK8He1ViJnDqBwbhEMXl1apld+rP3RAO049t7U+rADxZ5DW82B7wJXIXPUCEtGgc5r9/ay8/7i1493X+G8T9nPm0u+Lt6NSn0MbI5wEmbiehp/OZIb0Wl/Tm+gwf+a0BLN3tz6QgoVVQuTmiLRT9EE9WQFQGU7nTz0ILkW9HxNT2erMGymhk0KJ2YzCFtmgvjI4gjlextqlBtUa9UTr2bD+k6IUX/+USt4OwCHOl1McBBUNf1112G26tMkt59MDMy2MBLHz8THSesyzQ8UinJRqLFhQuWdqqGpYmru+FeFr81NGAAY7YDoxuux4ml/UdJGeJs/pytqHaAl8Hgv881gn0e+EI203htDP4BivI6P9FBQollYDo67GJnsLjwiysDjV67D3j8+7B1TA1kYYTDET2HwSFJAvRjcOL8DJ+44XdWDoZJXVQ9viYpADm5tGNc6+zZd+i7xbtW1uRKDtUJit1tqpCD3QPqAHFLgGh+ewOrh/OmXCXRmz7b0+KluAUrvnEX5tnmLY8+L1G4AXes7GoOQiOjG3ZgkmcdODpguUGy6Ci20+nHyueGl+PzYkoPzBx6VQDMH85VDsCQIEklR1DfERYpxMntaSKciwbhWieRIAgGM5dPHnRZorUrSZKKGBrq7agmy6fYknAAs1ahf6HLahPTSih9Gutrb7A7RSLbBjQ5rtgwYUQQwSpJmjcBzhEsDYI/cAx9OIyLU3O95jP4UFrBzSue0e59uWZcecz1bUkqL40VtUNo8gOHh7DmTAF1lQTixI9Kguih5FRHuvfsVTggq+UbL+DbVSFVZATHALQ8+783CWgxUPI0gwo8kkJOqJVdxkT7X4OWloFNh8jJvLxoBEeLJehtC803oHXEiilgmMpf+jSw/IknCm9E+IrxL632GhVo3eCkHMwoKpYwGDuoj6hipQcIdyPmdlMix1tvyoZzK9O+e/tt2Sv2ZIoxCCI/cqUWzCtdkQ+GyggWL5QugT6B6D8yVoYwAcgT9ApYpXZ+hYYLhQ19RC2C8JtdRoSaxzM5zh3rsyVRL+Mml6YNwgz58o7mFnRj4sg0SE+zNQGTXUJlc9BKyL3Azplh3dMXKsOUJ93QZ0nJMLb6YhvzquEChEuK1j06qglmIbThevCm0GXGYSs1FBy+Iw2Ey78HfEOnbe+nB58Wu9nYSULmNvRlAvORkpknCRCRM/mmecfoyVqiK0gDH8b/oJ2cevYN5WU41KfYeHPSDBl1JQPOilsmGQzc9Ek6/32qj/999sA7Uz6kBJhZkQpNr2HDhSM2GiH975RB01Z8U/DYhiEtEJ4VjXjlqDMQJ2/GsfjEuSl8kp6v4TvJTGrP/StN1fwMzOoJA34c7AGS5+p3O7g5ZvkUXFBvwKeRjtAO3aiZpPwd4ABlfBmzOTS3y85gwlLUCXHyveBfRLAh7iZ7hfZ9AahaRcbh8TqiQQwbaKo/GdxmKbg9bUVVlsEpqvihKgkS4i+fcOQcWnQXjAhsayxOem7fRPdPRrODPsrOO/kXOfNlAzcFIlIkX/+e06bs1xYXnL8v++EsOrN/OgZP/3fJ/IJCf/guxajIwd+//Bq4YdXWVLQUxlaf1qyhagV8fgCOKveVuo5UArKvDVt0HDC72ezcP9GyPK9NntFiWmyH3Ux/x5QCgRNWy2eVhvF4kmljG9Jkc5oYtWIPF1FkQM+E8526XICF/KMkQTM/5K+RjqW6G01W+hr3hd1AxWzcOBNGqhFve3Hh74ieAM7BlLJupvLdLkDFID8X8qTsGcUfi2aB4o+H99xEDV5whfnMv/fIp3EOf7tu0pcuP+GZuIQP8jzEUvMIQww9JCjoGoTE3WLFUbjiWw4Rb1Zuge/E8n+G/s62dcY50nV11Rb+K4+Ch47JRUPnxJIHKxzZJIPQDD3a3Usq2g9QBvQNpqVm5SRWL4JLPV+p/Z3nIwqvNLhkYCh9ZANMMrgdgzfEPFA9r1EtvWAdtQwELqkU+6iEqaOXN103Lnaf7+86XGY64MV1sb5yr6C1r8j7V+WAXIW3IRz87AEarBK1t3ehkV+Xhge4k54ZJrhwwehL4e7JNrU35ir1RU+0Dg4mf6acOI2O8IJLqKVDgoXitHxXCDaN4p8OVj1A08TUmoWdlgJsvzDQDVbEv5WtzH1Hi1IJuBGNe2X0X2dWnE/n1C1gVH3c15XrpiUsKGdJjUas/puOi36oqgn2r8XwxY9mzd+oCuPSoqzKZt3IbKCeFOgsUD09O5er7YXOC82W4e4Gk+2DL/2ZAwimzWTcTh6hLnxicw4toc1RttqZydXfPVDYEXzt8QM4hzq+L3XbTU7av/HelP5howcnPmiVZrREndfcA6cDGz+kKXmc093JFKdsTB/+U5v1f/kVBI+A1xmwZzWPCGl2WlRsSwMTyOJ9to4uLF3kpPpTC1DWLMhf3PSsfmbxYC71sjRxUxh36+FWtw/CJZV4craw/VLL5LTo6/3wZSCMhbf3AlTJ15XPsryipGConb1QiggBxvvxIsiZysGOHwLuv6JdEcyG61/hHPC5JcDAW3PPw4AKp3sQK/hPRPza/vIzBud3I1VU0DTdubC2yMFt/feIigbrBJastCmYfOkqwVSYGT5wpxVJIMOi/mR4PkMpQ/pGG6fOrzQovjlIYKlepc/oeWM/zE5HOFvGASeC8bDkVjt4G74eR+m64Nuh/oLr9XpqccUqTSO9+KgPHFY98mxVTcJXv2xICN59F3vMQ6WwNEfryR8P3jd159n+OXbmldj4n0SwAAAAcaskl6vP5+98OS3m1Yy2Coz3jZAZ2f+tGTVp1ZKXtH8e4PyilITEMKoykMDVZ0Wawy+4Dc4uVDOFEWjxZxDFTwHXcQ82Ppeuh/jRh606k1azkN61Mr3f5P/puk7u6SGaUvJ6k4Cl1JpXKGLJ8O4joyCQqRnA+H6IbhrZ76PADTCtW2iQSc6uzDKxGj8wh4oBVmMxdGQGAFrjkm2cqG0tF0tR8/eO8OG44nyCbI2KuFe9/mEnx8KCvNiXQFIRxp6MmFxQiLM+z+CfMSn/D5LMIT5pFNml7zjso0IVfzyz5lalr/+Xn8QFOMo5Cp4ZgAAAAAAA=";
const NETWORK_ERROR = 4e3;
const fromBase64 = (base64) => {
  if (typeof globalThis.Buffer !== "undefined") {
    return globalThis.Buffer.from(base64, "base64").buffer;
  }
  if (typeof globalThis.atob !== "undefined") {
    return Uint8Array.from(globalThis.atob(base64), (m) => m.charCodeAt(0)).buffer;
  }
  throw Error("Could not decode base64 string");
};
const toBase64 = (bytes) => {
  if (typeof globalThis.Buffer !== "undefined") {
    return globalThis.Buffer.from(bytes).toString("base64");
  }
  if (typeof globalThis.btoa !== "undefined") {
    return btoa(String.fromCharCode(...new Uint8Array(bytes)));
  }
  throw Error("Could not encode base64 string");
};
var __classPrivateFieldSet$4 = function(receiver, state, value, kind, f) {
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return state.set(receiver, value), value;
};
var __classPrivateFieldGet$4 = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Signer_options, _Signer_channel, _Signer_establishingChannel, _Signer_scheduledChannelClosure;
class SignerError extends Error {
  constructor(error) {
    super(error.message);
    Object.setPrototypeOf(this, SignerError.prototype);
    this.code = error.code;
    this.data = error.data;
  }
}
const wrapTransportError = (error) => new SignerError({
  code: NETWORK_ERROR,
  message: error instanceof Error ? error.message : "Network error"
});
const unwrapResponse = (response) => {
  if ("error" in response) {
    throw new SignerError(response.error);
  }
  if ("result" in response) {
    return response.result;
  }
  throw new SignerError({
    code: NETWORK_ERROR,
    message: "Invalid response"
  });
};
class Signer {
  constructor(options) {
    _Signer_options.set(this, void 0);
    _Signer_channel.set(this, void 0);
    _Signer_establishingChannel.set(this, void 0);
    _Signer_scheduledChannelClosure.set(this, void 0);
    __classPrivateFieldSet$4(this, _Signer_options, Object.assign({ autoCloseTransportChannel: true, closeTransportChannelAfter: 200, crypto: globalThis.crypto }, options));
  }
  get transport() {
    return __classPrivateFieldGet$4(this, _Signer_options, "f").transport;
  }
  async openChannel() {
    clearTimeout(__classPrivateFieldGet$4(this, _Signer_scheduledChannelClosure, "f"));
    if (__classPrivateFieldGet$4(this, _Signer_establishingChannel, "f")) {
      await __classPrivateFieldGet$4(this, _Signer_establishingChannel, "f");
    }
    if (__classPrivateFieldGet$4(this, _Signer_channel, "f") && !__classPrivateFieldGet$4(this, _Signer_channel, "f").closed) {
      return __classPrivateFieldGet$4(this, _Signer_channel, "f");
    }
    const channel = __classPrivateFieldGet$4(this, _Signer_options, "f").transport.establishChannel();
    __classPrivateFieldSet$4(this, _Signer_establishingChannel, channel.then(() => {
    }).catch(() => {
    }));
    __classPrivateFieldSet$4(this, _Signer_channel, void 0);
    __classPrivateFieldSet$4(this, _Signer_channel, await channel.catch((error) => {
      throw wrapTransportError(error);
    }));
    __classPrivateFieldSet$4(this, _Signer_establishingChannel, void 0);
    return __classPrivateFieldGet$4(this, _Signer_channel, "f");
  }
  async closeChannel() {
    var _a2;
    await ((_a2 = __classPrivateFieldGet$4(this, _Signer_channel, "f")) === null || _a2 === void 0 ? void 0 : _a2.close());
  }
  async transformRequest(request) {
    if (__classPrivateFieldGet$4(this, _Signer_options, "f").derivationOrigin) {
      return Object.assign(Object.assign({}, request), { params: Object.assign(Object.assign({}, request.params), { icrc95DerivationOrigin: __classPrivateFieldGet$4(this, _Signer_options, "f").derivationOrigin }) });
    }
    return request;
  }
  async sendRequest(request) {
    const channel = await this.openChannel();
    return new Promise(async (resolve, reject) => {
      const responseListener = channel.addEventListener("response", async (response) => {
        if (response.id !== request.id) {
          return;
        }
        responseListener();
        closeListener();
        resolve(response);
        if (__classPrivateFieldGet$4(this, _Signer_options, "f").autoCloseTransportChannel) {
          __classPrivateFieldSet$4(this, _Signer_scheduledChannelClosure, setTimeout(() => {
            if (!channel.closed) {
              channel.close();
            }
          }, __classPrivateFieldGet$4(this, _Signer_options, "f").closeTransportChannelAfter));
        }
      });
      const closeListener = channel.addEventListener("close", () => {
        responseListener();
        closeListener();
        reject(new SignerError({
          code: NETWORK_ERROR,
          message: "Channel was closed before a response was received"
        }));
      });
      try {
        await channel.send(await this.transformRequest(request));
      } catch (error) {
        responseListener();
        closeListener();
        reject(wrapTransportError(error));
      }
    });
  }
  async supportedStandards() {
    const response = await this.sendRequest({
      id: __classPrivateFieldGet$4(this, _Signer_options, "f").crypto.randomUUID(),
      jsonrpc: "2.0",
      method: "icrc25_supported_standards"
    });
    const result = unwrapResponse(response);
    return result.supportedStandards;
  }
  async requestPermissions(scopes) {
    const response = await this.sendRequest({
      id: __classPrivateFieldGet$4(this, _Signer_options, "f").crypto.randomUUID(),
      jsonrpc: "2.0",
      method: "icrc25_request_permissions",
      params: { scopes }
    });
    const result = unwrapResponse(response);
    return result.scopes;
  }
  async permissions() {
    const response = await this.sendRequest({
      id: __classPrivateFieldGet$4(this, _Signer_options, "f").crypto.randomUUID(),
      jsonrpc: "2.0",
      method: "icrc25_permissions"
    });
    const result = unwrapResponse(response);
    return result.scopes;
  }
  async accounts() {
    const response = await this.sendRequest({
      id: __classPrivateFieldGet$4(this, _Signer_options, "f").crypto.randomUUID(),
      jsonrpc: "2.0",
      method: "icrc27_accounts"
    });
    const result = unwrapResponse(response);
    return result.accounts.map(({ owner, subaccount }) => ({
      owner: Principal.fromText(owner),
      subaccount: subaccount === void 0 ? void 0 : fromBase64(subaccount)
    }));
  }
  async delegation(params) {
    var _a2;
    const response = await this.sendRequest({
      id: __classPrivateFieldGet$4(this, _Signer_options, "f").crypto.randomUUID(),
      jsonrpc: "2.0",
      method: "icrc34_delegation",
      params: {
        publicKey: toBase64(params.publicKey),
        targets: (_a2 = params.targets) === null || _a2 === void 0 ? void 0 : _a2.map((p) => p.toText()),
        maxTimeToLive: params.maxTimeToLive === void 0 ? void 0 : String(params.maxTimeToLive)
      }
    });
    const result = unwrapResponse(response);
    return DelegationChain.fromDelegations(result.signerDelegation.map((delegation) => {
      var _a22;
      return {
        delegation: new Delegation(fromBase64(delegation.delegation.pubkey), BigInt(delegation.delegation.expiration), (_a22 = delegation.delegation.targets) === null || _a22 === void 0 ? void 0 : _a22.map((principal) => Principal.fromText(principal))),
        signature: fromBase64(delegation.signature)
      };
    }), fromBase64(result.publicKey));
  }
  async callCanister(params) {
    const response = await this.sendRequest({
      id: __classPrivateFieldGet$4(this, _Signer_options, "f").crypto.randomUUID(),
      jsonrpc: "2.0",
      method: "icrc49_call_canister",
      params: {
        canisterId: params.canisterId.toText(),
        sender: params.sender.toText(),
        method: params.method,
        arg: toBase64(params.arg)
      }
    });
    const result = unwrapResponse(response);
    const contentMap = fromBase64(result.contentMap);
    const certificate = fromBase64(result.certificate);
    return { contentMap, certificate };
  }
}
_Signer_options = /* @__PURE__ */ new WeakMap(), _Signer_channel = /* @__PURE__ */ new WeakMap(), _Signer_establishingChannel = /* @__PURE__ */ new WeakMap(), _Signer_scheduledChannelClosure = /* @__PURE__ */ new WeakMap();
const isJsonRpcMessage = (message) => typeof message === "object" && !!message && "jsonrpc" in message && message.jsonrpc === "2.0";
const isJsonRpcResponse = (message) => isJsonRpcMessage(message) && "id" in message && (typeof message.id === "string" || typeof message.id === "number");
var __classPrivateFieldSet$3 = function(receiver, state, value, kind, f) {
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return state.set(receiver, value), value;
};
var __classPrivateFieldGet$3 = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PostMessageChannel_closeListeners, _PostMessageChannel_options, _PostMessageChannel_closed;
class PostMessageChannel {
  constructor(options) {
    _PostMessageChannel_closeListeners.set(this, /* @__PURE__ */ new Set());
    _PostMessageChannel_options.set(this, void 0);
    _PostMessageChannel_closed.set(this, false);
    __classPrivateFieldSet$3(this, _PostMessageChannel_options, Object.assign({ window: globalThis.window, manageFocus: true }, options));
  }
  get closed() {
    return __classPrivateFieldGet$3(this, _PostMessageChannel_closed, "f");
  }
  addEventListener(...[event, listener]) {
    switch (event) {
      case "close":
        __classPrivateFieldGet$3(this, _PostMessageChannel_closeListeners, "f").add(listener);
        return () => {
          __classPrivateFieldGet$3(this, _PostMessageChannel_closeListeners, "f").delete(listener);
        };
      case "response":
        const messageListener = async (event2) => {
          if (event2.source !== __classPrivateFieldGet$3(this, _PostMessageChannel_options, "f").signerWindow || event2.origin !== __classPrivateFieldGet$3(this, _PostMessageChannel_options, "f").signerOrigin || !isJsonRpcResponse(event2.data)) {
            return;
          }
          listener(event2.data);
        };
        __classPrivateFieldGet$3(this, _PostMessageChannel_options, "f").window.addEventListener("message", messageListener);
        return () => {
          __classPrivateFieldGet$3(this, _PostMessageChannel_options, "f").window.removeEventListener("message", messageListener);
        };
    }
  }
  async send(request) {
    if (__classPrivateFieldGet$3(this, _PostMessageChannel_closed, "f")) {
      throw new PostMessageTransportError("Communication channel is closed");
    }
    __classPrivateFieldGet$3(this, _PostMessageChannel_options, "f").signerWindow.postMessage(request, __classPrivateFieldGet$3(this, _PostMessageChannel_options, "f").signerOrigin);
    if (__classPrivateFieldGet$3(this, _PostMessageChannel_options, "f").manageFocus) {
      __classPrivateFieldGet$3(this, _PostMessageChannel_options, "f").signerWindow.focus();
    }
  }
  async close() {
    if (__classPrivateFieldGet$3(this, _PostMessageChannel_closed, "f")) {
      return;
    }
    __classPrivateFieldSet$3(this, _PostMessageChannel_closed, true);
    __classPrivateFieldGet$3(this, _PostMessageChannel_options, "f").signerWindow.close();
    if (__classPrivateFieldGet$3(this, _PostMessageChannel_options, "f").manageFocus) {
      __classPrivateFieldGet$3(this, _PostMessageChannel_options, "f").window.focus();
    }
    __classPrivateFieldGet$3(this, _PostMessageChannel_closeListeners, "f").forEach((listener) => listener());
  }
}
_PostMessageChannel_closeListeners = /* @__PURE__ */ new WeakMap(), _PostMessageChannel_options = /* @__PURE__ */ new WeakMap(), _PostMessageChannel_closed = /* @__PURE__ */ new WeakMap();
const urlIsSecureContext = (value) => {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.hostname === "127.0.0.1" || url.hostname.split(".").slice(-1)[0] === "localhost";
  } catch (_a2) {
    return false;
  }
};
var __classPrivateFieldSet$2 = function(receiver, state, value, kind, f) {
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return state.set(receiver, value), value;
};
var __classPrivateFieldGet$2 = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PostMessageTransport_options, _PostMessageTransport_withinClick;
const NON_CLICK_ESTABLISHMENT_LINK = "https://github.com/slide-computer/signer-js/blob/main/packages/signer-web/README.md#channels-must-be-established-in-a-click-handler";
class PostMessageTransportError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, PostMessageTransportError.prototype);
  }
}
class PostMessageTransport {
  constructor(options) {
    _PostMessageTransport_options.set(this, void 0);
    _PostMessageTransport_withinClick.set(this, false);
    if (!urlIsSecureContext(options.url)) {
      throw new PostMessageTransportError("Invalid signer RPC url");
    }
    __classPrivateFieldSet$2(this, _PostMessageTransport_options, Object.assign({ windowOpenerFeatures: "", window: globalThis.window, establishTimeout: 1e4, disconnectTimeout: 2e3, statusPollingRate: 300, crypto: globalThis.crypto, manageFocus: true, closeOnEstablishTimeout: true, detectNonClickEstablishment: true }, options));
    if (__classPrivateFieldGet$2(this, _PostMessageTransport_options, "f").detectNonClickEstablishment) {
      window.addEventListener("click", () => __classPrivateFieldSet$2(this, _PostMessageTransport_withinClick, true), true);
      window.addEventListener("click", () => __classPrivateFieldSet$2(this, _PostMessageTransport_withinClick, false));
    }
  }
  async establishChannel() {
    return new Promise((resolve, reject) => {
      let channel;
      let heartbeatInterval;
      let disconnectTimeout;
      if (__classPrivateFieldGet$2(this, _PostMessageTransport_options, "f").detectNonClickEstablishment && !__classPrivateFieldGet$2(this, _PostMessageTransport_withinClick, "f")) {
        reject(new PostMessageTransportError(`Signer window should not be opened outside of click handler, see: ${NON_CLICK_ESTABLISHMENT_LINK}`));
        return;
      }
      const signerWindow = __classPrivateFieldGet$2(this, _PostMessageTransport_options, "f").window.open(__classPrivateFieldGet$2(this, _PostMessageTransport_options, "f").url, "signerWindow", __classPrivateFieldGet$2(this, _PostMessageTransport_options, "f").windowOpenerFeatures);
      if (!signerWindow) {
        reject(new PostMessageTransportError("Signer window could not be opened"));
        return;
      }
      const establishTimeout = setTimeout(() => {
        if (channel) {
          return;
        }
        clearInterval(heartbeatInterval);
        if (__classPrivateFieldGet$2(this, _PostMessageTransport_options, "f").closeOnEstablishTimeout) {
          signerWindow.close();
        }
        reject(new PostMessageTransportError("Communication channel could not be established within a reasonable time"));
      }, __classPrivateFieldGet$2(this, _PostMessageTransport_options, "f").establishTimeout);
      heartbeatInterval = setInterval(() => {
        const id = crypto.randomUUID();
        const listener = async (event) => {
          if (event.source !== signerWindow || !isJsonRpcResponse(event.data) || event.data.id !== id || !("result" in event.data) || event.data.result !== "ready") {
            return;
          }
          __classPrivateFieldGet$2(this, _PostMessageTransport_options, "f").window.removeEventListener("message", listener);
          if (!channel) {
            channel = new PostMessageChannel(Object.assign(Object.assign({}, __classPrivateFieldGet$2(this, _PostMessageTransport_options, "f")), { signerOrigin: event.origin, signerWindow }));
            clearTimeout(establishTimeout);
            resolve(channel);
            return;
          }
          clearTimeout(disconnectTimeout);
          disconnectTimeout = setTimeout(() => {
            clearInterval(heartbeatInterval);
            channel.close();
          }, __classPrivateFieldGet$2(this, _PostMessageTransport_options, "f").disconnectTimeout);
        };
        __classPrivateFieldGet$2(this, _PostMessageTransport_options, "f").window.addEventListener("message", listener);
        signerWindow.postMessage({ jsonrpc: "2.0", id, method: "icrc29_status" }, "*");
      }, __classPrivateFieldGet$2(this, _PostMessageTransport_options, "f").statusPollingRate);
    });
  }
}
_PostMessageTransport_options = /* @__PURE__ */ new WeakMap(), _PostMessageTransport_withinClick = /* @__PURE__ */ new WeakMap();
var isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, mathceil = Math.ceil, mathfloor = Math.floor, bignumberError = "[BigNumber Error] ", tooManyDigits = bignumberError + "Number primitive has more than 15 significant digits: ", BASE = 1e14, LOG_BASE = 14, MAX_SAFE_INTEGER = 9007199254740991, POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], SQRT_BASE = 1e7, MAX = 1e9;
function clone(configObject) {
  var div, convertBase, parseNumeric, P = BigNumber.prototype = { constructor: BigNumber, toString: null, valueOf: null }, ONE = new BigNumber(1), DECIMAL_PLACES = 20, ROUNDING_MODE = 4, TO_EXP_NEG = -7, TO_EXP_POS = 21, MIN_EXP = -1e7, MAX_EXP = 1e7, CRYPTO = false, MODULO_MODE = 1, POW_PRECISION = 0, FORMAT = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz", alphabetHasNormalDecimalDigits = true;
  function BigNumber(v, b) {
    var alphabet, c, caseChanged, e, i, isNum, len, str, x = this;
    if (!(x instanceof BigNumber)) return new BigNumber(v, b);
    if (b == null) {
      if (v && v._isBigNumber === true) {
        x.s = v.s;
        if (!v.c || v.e > MAX_EXP) {
          x.c = x.e = null;
        } else if (v.e < MIN_EXP) {
          x.c = [x.e = 0];
        } else {
          x.e = v.e;
          x.c = v.c.slice();
        }
        return;
      }
      if ((isNum = typeof v == "number") && v * 0 == 0) {
        x.s = 1 / v < 0 ? (v = -v, -1) : 1;
        if (v === ~~v) {
          for (e = 0, i = v; i >= 10; i /= 10, e++) ;
          if (e > MAX_EXP) {
            x.c = x.e = null;
          } else {
            x.e = e;
            x.c = [v];
          }
          return;
        }
        str = String(v);
      } else {
        if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);
        x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
      }
      if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
      if ((i = str.search(/e/i)) > 0) {
        if (e < 0) e = i;
        e += +str.slice(i + 1);
        str = str.substring(0, i);
      } else if (e < 0) {
        e = str.length;
      }
    } else {
      intCheck(b, 2, ALPHABET.length, "Base");
      if (b == 10 && alphabetHasNormalDecimalDigits) {
        x = new BigNumber(v);
        return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
      }
      str = String(v);
      if (isNum = typeof v == "number") {
        if (v * 0 != 0) return parseNumeric(x, str, isNum, b);
        x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;
        if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, "").length > 15) {
          throw Error(tooManyDigits + v);
        }
      } else {
        x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
      }
      alphabet = ALPHABET.slice(0, b);
      e = i = 0;
      for (len = str.length; i < len; i++) {
        if (alphabet.indexOf(c = str.charAt(i)) < 0) {
          if (c == ".") {
            if (i > e) {
              e = len;
              continue;
            }
          } else if (!caseChanged) {
            if (str == str.toUpperCase() && (str = str.toLowerCase()) || str == str.toLowerCase() && (str = str.toUpperCase())) {
              caseChanged = true;
              i = -1;
              e = 0;
              continue;
            }
          }
          return parseNumeric(x, String(v), isNum, b);
        }
      }
      isNum = false;
      str = convertBase(str, b, 10, x.s);
      if ((e = str.indexOf(".")) > -1) str = str.replace(".", "");
      else e = str.length;
    }
    for (i = 0; str.charCodeAt(i) === 48; i++) ;
    for (len = str.length; str.charCodeAt(--len) === 48; ) ;
    if (str = str.slice(i, ++len)) {
      len -= i;
      if (isNum && BigNumber.DEBUG && len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
        throw Error(tooManyDigits + x.s * v);
      }
      if ((e = e - i - 1) > MAX_EXP) {
        x.c = x.e = null;
      } else if (e < MIN_EXP) {
        x.c = [x.e = 0];
      } else {
        x.e = e;
        x.c = [];
        i = (e + 1) % LOG_BASE;
        if (e < 0) i += LOG_BASE;
        if (i < len) {
          if (i) x.c.push(+str.slice(0, i));
          for (len -= LOG_BASE; i < len; ) {
            x.c.push(+str.slice(i, i += LOG_BASE));
          }
          i = LOG_BASE - (str = str.slice(i)).length;
        } else {
          i -= len;
        }
        for (; i--; str += "0") ;
        x.c.push(+str);
      }
    } else {
      x.c = [x.e = 0];
    }
  }
  BigNumber.clone = clone;
  BigNumber.ROUND_UP = 0;
  BigNumber.ROUND_DOWN = 1;
  BigNumber.ROUND_CEIL = 2;
  BigNumber.ROUND_FLOOR = 3;
  BigNumber.ROUND_HALF_UP = 4;
  BigNumber.ROUND_HALF_DOWN = 5;
  BigNumber.ROUND_HALF_EVEN = 6;
  BigNumber.ROUND_HALF_CEIL = 7;
  BigNumber.ROUND_HALF_FLOOR = 8;
  BigNumber.EUCLID = 9;
  BigNumber.config = BigNumber.set = function(obj) {
    var p, v;
    if (obj != null) {
      if (typeof obj == "object") {
        if (obj.hasOwnProperty(p = "DECIMAL_PLACES")) {
          v = obj[p];
          intCheck(v, 0, MAX, p);
          DECIMAL_PLACES = v;
        }
        if (obj.hasOwnProperty(p = "ROUNDING_MODE")) {
          v = obj[p];
          intCheck(v, 0, 8, p);
          ROUNDING_MODE = v;
        }
        if (obj.hasOwnProperty(p = "EXPONENTIAL_AT")) {
          v = obj[p];
          if (v && v.pop) {
            intCheck(v[0], -MAX, 0, p);
            intCheck(v[1], 0, MAX, p);
            TO_EXP_NEG = v[0];
            TO_EXP_POS = v[1];
          } else {
            intCheck(v, -MAX, MAX, p);
            TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
          }
        }
        if (obj.hasOwnProperty(p = "RANGE")) {
          v = obj[p];
          if (v && v.pop) {
            intCheck(v[0], -MAX, -1, p);
            intCheck(v[1], 1, MAX, p);
            MIN_EXP = v[0];
            MAX_EXP = v[1];
          } else {
            intCheck(v, -MAX, MAX, p);
            if (v) {
              MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
            } else {
              throw Error(bignumberError + p + " cannot be zero: " + v);
            }
          }
        }
        if (obj.hasOwnProperty(p = "CRYPTO")) {
          v = obj[p];
          if (v === !!v) {
            if (v) {
              if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                CRYPTO = v;
              } else {
                CRYPTO = !v;
                throw Error(bignumberError + "crypto unavailable");
              }
            } else {
              CRYPTO = v;
            }
          } else {
            throw Error(bignumberError + p + " not true or false: " + v);
          }
        }
        if (obj.hasOwnProperty(p = "MODULO_MODE")) {
          v = obj[p];
          intCheck(v, 0, 9, p);
          MODULO_MODE = v;
        }
        if (obj.hasOwnProperty(p = "POW_PRECISION")) {
          v = obj[p];
          intCheck(v, 0, MAX, p);
          POW_PRECISION = v;
        }
        if (obj.hasOwnProperty(p = "FORMAT")) {
          v = obj[p];
          if (typeof v == "object") FORMAT = v;
          else throw Error(bignumberError + p + " not an object: " + v);
        }
        if (obj.hasOwnProperty(p = "ALPHABET")) {
          v = obj[p];
          if (typeof v == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
            alphabetHasNormalDecimalDigits = v.slice(0, 10) == "0123456789";
            ALPHABET = v;
          } else {
            throw Error(bignumberError + p + " invalid: " + v);
          }
        }
      } else {
        throw Error(bignumberError + "Object expected: " + obj);
      }
    }
    return {
      DECIMAL_PLACES,
      ROUNDING_MODE,
      EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
      RANGE: [MIN_EXP, MAX_EXP],
      CRYPTO,
      MODULO_MODE,
      POW_PRECISION,
      FORMAT,
      ALPHABET
    };
  };
  BigNumber.isBigNumber = function(v) {
    if (!v || v._isBigNumber !== true) return false;
    if (!BigNumber.DEBUG) return true;
    var i, n, c = v.c, e = v.e, s = v.s;
    out: if ({}.toString.call(c) == "[object Array]") {
      if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {
        if (c[0] === 0) {
          if (e === 0 && c.length === 1) return true;
          break out;
        }
        i = (e + 1) % LOG_BASE;
        if (i < 1) i += LOG_BASE;
        if (String(c[0]).length == i) {
          for (i = 0; i < c.length; i++) {
            n = c[i];
            if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
          }
          if (n !== 0) return true;
        }
      }
    } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
      return true;
    }
    throw Error(bignumberError + "Invalid BigNumber: " + v);
  };
  BigNumber.maximum = BigNumber.max = function() {
    return maxOrMin(arguments, -1);
  };
  BigNumber.minimum = BigNumber.min = function() {
    return maxOrMin(arguments, 1);
  };
  BigNumber.random = function() {
    var pow2_53 = 9007199254740992;
    var random53bitInt = Math.random() * pow2_53 & 2097151 ? function() {
      return mathfloor(Math.random() * pow2_53);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(dp) {
      var a, b, e, k, v, i = 0, c = [], rand = new BigNumber(ONE);
      if (dp == null) dp = DECIMAL_PLACES;
      else intCheck(dp, 0, MAX);
      k = mathceil(dp / LOG_BASE);
      if (CRYPTO) {
        if (crypto.getRandomValues) {
          a = crypto.getRandomValues(new Uint32Array(k *= 2));
          for (; i < k; ) {
            v = a[i] * 131072 + (a[i + 1] >>> 11);
            if (v >= 9e15) {
              b = crypto.getRandomValues(new Uint32Array(2));
              a[i] = b[0];
              a[i + 1] = b[1];
            } else {
              c.push(v % 1e14);
              i += 2;
            }
          }
          i = k / 2;
        } else if (crypto.randomBytes) {
          a = crypto.randomBytes(k *= 7);
          for (; i < k; ) {
            v = (a[i] & 31) * 281474976710656 + a[i + 1] * 1099511627776 + a[i + 2] * 4294967296 + a[i + 3] * 16777216 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];
            if (v >= 9e15) {
              crypto.randomBytes(7).copy(a, i);
            } else {
              c.push(v % 1e14);
              i += 7;
            }
          }
          i = k / 7;
        } else {
          CRYPTO = false;
          throw Error(bignumberError + "crypto unavailable");
        }
      }
      if (!CRYPTO) {
        for (; i < k; ) {
          v = random53bitInt();
          if (v < 9e15) c[i++] = v % 1e14;
        }
      }
      k = c[--i];
      dp %= LOG_BASE;
      if (k && dp) {
        v = POWS_TEN[LOG_BASE - dp];
        c[i] = mathfloor(k / v) * v;
      }
      for (; c[i] === 0; c.pop(), i--) ;
      if (i < 0) {
        c = [e = 0];
      } else {
        for (e = -1; c[0] === 0; c.splice(0, 1), e -= LOG_BASE) ;
        for (i = 1, v = c[0]; v >= 10; v /= 10, i++) ;
        if (i < LOG_BASE) e -= LOG_BASE - i;
      }
      rand.e = e;
      rand.c = c;
      return rand;
    };
  }();
  BigNumber.sum = function() {
    var i = 1, args = arguments, sum = new BigNumber(args[0]);
    for (; i < args.length; ) sum = sum.plus(args[i++]);
    return sum;
  };
  convertBase = /* @__PURE__ */ function() {
    var decimal = "0123456789";
    function toBaseOut(str, baseIn, baseOut, alphabet) {
      var j, arr = [0], arrL, i = 0, len = str.length;
      for (; i < len; ) {
        for (arrL = arr.length; arrL--; arr[arrL] *= baseIn) ;
        arr[0] += alphabet.indexOf(str.charAt(i++));
        for (j = 0; j < arr.length; j++) {
          if (arr[j] > baseOut - 1) {
            if (arr[j + 1] == null) arr[j + 1] = 0;
            arr[j + 1] += arr[j] / baseOut | 0;
            arr[j] %= baseOut;
          }
        }
      }
      return arr.reverse();
    }
    return function(str, baseIn, baseOut, sign, callerIsToString) {
      var alphabet, d, e, k, r, x, xc, y, i = str.indexOf("."), dp = DECIMAL_PLACES, rm = ROUNDING_MODE;
      if (i >= 0) {
        k = POW_PRECISION;
        POW_PRECISION = 0;
        str = str.replace(".", "");
        y = new BigNumber(baseIn);
        x = y.pow(str.length - i);
        POW_PRECISION = k;
        y.c = toBaseOut(
          toFixedPoint(coeffToString(x.c), x.e, "0"),
          10,
          baseOut,
          decimal
        );
        y.e = y.c.length;
      }
      xc = toBaseOut(str, baseIn, baseOut, callerIsToString ? (alphabet = ALPHABET, decimal) : (alphabet = decimal, ALPHABET));
      e = k = xc.length;
      for (; xc[--k] == 0; xc.pop()) ;
      if (!xc[0]) return alphabet.charAt(0);
      if (i < 0) {
        --e;
      } else {
        x.c = xc;
        x.e = e;
        x.s = sign;
        x = div(x, y, dp, rm, baseOut);
        xc = x.c;
        r = x.r;
        e = x.e;
      }
      d = e + dp + 1;
      i = xc[d];
      k = baseOut / 2;
      r = r || d < 0 || xc[d + 1] != null;
      r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7));
      if (d < 1 || !xc[0]) {
        str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
      } else {
        xc.length = d;
        if (r) {
          for (--baseOut; ++xc[--d] > baseOut; ) {
            xc[d] = 0;
            if (!d) {
              ++e;
              xc = [1].concat(xc);
            }
          }
        }
        for (k = xc.length; !xc[--k]; ) ;
        for (i = 0, str = ""; i <= k; str += alphabet.charAt(xc[i++])) ;
        str = toFixedPoint(str, e, alphabet.charAt(0));
      }
      return str;
    };
  }();
  div = /* @__PURE__ */ function() {
    function multiply(x, k, base) {
      var m, temp, xlo, xhi, carry = 0, i = x.length, klo = k % SQRT_BASE, khi = k / SQRT_BASE | 0;
      for (x = x.slice(); i--; ) {
        xlo = x[i] % SQRT_BASE;
        xhi = x[i] / SQRT_BASE | 0;
        m = khi * xlo + xhi * klo;
        temp = klo * xlo + m % SQRT_BASE * SQRT_BASE + carry;
        carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
        x[i] = temp % base;
      }
      if (carry) x = [carry].concat(x);
      return x;
    }
    function compare2(a, b, aL, bL) {
      var i, cmp;
      if (aL != bL) {
        cmp = aL > bL ? 1 : -1;
      } else {
        for (i = cmp = 0; i < aL; i++) {
          if (a[i] != b[i]) {
            cmp = a[i] > b[i] ? 1 : -1;
            break;
          }
        }
      }
      return cmp;
    }
    function subtract(a, b, aL, base) {
      var i = 0;
      for (; aL--; ) {
        a[aL] -= i;
        i = a[aL] < b[aL] ? 1 : 0;
        a[aL] = i * base + a[aL] - b[aL];
      }
      for (; !a[0] && a.length > 1; a.splice(0, 1)) ;
    }
    return function(x, y, dp, rm, base) {
      var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0, yL, yz, s = x.s == y.s ? 1 : -1, xc = x.c, yc = y.c;
      if (!xc || !xc[0] || !yc || !yc[0]) {
        return new BigNumber(
          // Return NaN if either NaN, or both Infinity or 0.
          !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            xc && xc[0] == 0 || !yc ? s * 0 : s / 0
          )
        );
      }
      q = new BigNumber(s);
      qc = q.c = [];
      e = x.e - y.e;
      s = dp + e + 1;
      if (!base) {
        base = BASE;
        e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
        s = s / LOG_BASE | 0;
      }
      for (i = 0; yc[i] == (xc[i] || 0); i++) ;
      if (yc[i] > (xc[i] || 0)) e--;
      if (s < 0) {
        qc.push(1);
        more = true;
      } else {
        xL = xc.length;
        yL = yc.length;
        i = 0;
        s += 2;
        n = mathfloor(base / (yc[0] + 1));
        if (n > 1) {
          yc = multiply(yc, n, base);
          xc = multiply(xc, n, base);
          yL = yc.length;
          xL = xc.length;
        }
        xi = yL;
        rem = xc.slice(0, yL);
        remL = rem.length;
        for (; remL < yL; rem[remL++] = 0) ;
        yz = yc.slice();
        yz = [0].concat(yz);
        yc0 = yc[0];
        if (yc[1] >= base / 2) yc0++;
        do {
          n = 0;
          cmp = compare2(yc, rem, yL, remL);
          if (cmp < 0) {
            rem0 = rem[0];
            if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);
            n = mathfloor(rem0 / yc0);
            if (n > 1) {
              if (n >= base) n = base - 1;
              prod = multiply(yc, n, base);
              prodL = prod.length;
              remL = rem.length;
              while (compare2(prod, rem, prodL, remL) == 1) {
                n--;
                subtract(prod, yL < prodL ? yz : yc, prodL, base);
                prodL = prod.length;
                cmp = 1;
              }
            } else {
              if (n == 0) {
                cmp = n = 1;
              }
              prod = yc.slice();
              prodL = prod.length;
            }
            if (prodL < remL) prod = [0].concat(prod);
            subtract(rem, prod, remL, base);
            remL = rem.length;
            if (cmp == -1) {
              while (compare2(yc, rem, yL, remL) < 1) {
                n++;
                subtract(rem, yL < remL ? yz : yc, remL, base);
                remL = rem.length;
              }
            }
          } else if (cmp === 0) {
            n++;
            rem = [0];
          }
          qc[i++] = n;
          if (rem[0]) {
            rem[remL++] = xc[xi] || 0;
          } else {
            rem = [xc[xi]];
            remL = 1;
          }
        } while ((xi++ < xL || rem[0] != null) && s--);
        more = rem[0] != null;
        if (!qc[0]) qc.splice(0, 1);
      }
      if (base == BASE) {
        for (i = 1, s = qc[0]; s >= 10; s /= 10, i++) ;
        round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);
      } else {
        q.e = e;
        q.r = +more;
      }
      return q;
    };
  }();
  function format(n, i, rm, id) {
    var c0, e, ne, len, str;
    if (rm == null) rm = ROUNDING_MODE;
    else intCheck(rm, 0, 8);
    if (!n.c) return n.toString();
    c0 = n.c[0];
    ne = n.e;
    if (i == null) {
      str = coeffToString(n.c);
      str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS) ? toExponential(str, ne) : toFixedPoint(str, ne, "0");
    } else {
      n = round(new BigNumber(n), i, rm);
      e = n.e;
      str = coeffToString(n.c);
      len = str.length;
      if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {
        for (; len < i; str += "0", len++) ;
        str = toExponential(str, e);
      } else {
        i -= ne;
        str = toFixedPoint(str, e, "0");
        if (e + 1 > len) {
          if (--i > 0) for (str += "."; i--; str += "0") ;
        } else {
          i += e - len;
          if (i > 0) {
            if (e + 1 == len) str += ".";
            for (; i--; str += "0") ;
          }
        }
      }
    }
    return n.s < 0 && c0 ? "-" + str : str;
  }
  function maxOrMin(args, n) {
    var k, y, i = 1, x = new BigNumber(args[0]);
    for (; i < args.length; i++) {
      y = new BigNumber(args[i]);
      if (!y.s || (k = compare(x, y)) === n || k === 0 && x.s === n) {
        x = y;
      }
    }
    return x;
  }
  function normalise(n, c, e) {
    var i = 1, j = c.length;
    for (; !c[--j]; c.pop()) ;
    for (j = c[0]; j >= 10; j /= 10, i++) ;
    if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {
      n.c = n.e = null;
    } else if (e < MIN_EXP) {
      n.c = [n.e = 0];
    } else {
      n.e = e;
      n.c = c;
    }
    return n;
  }
  parseNumeric = /* @__PURE__ */ function() {
    var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i, dotAfter = /^([^.]+)\.$/, dotBefore = /^\.([^.]+)$/, isInfinityOrNaN = /^-?(Infinity|NaN)$/, whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(x, str, isNum, b) {
      var base, s = isNum ? str : str.replace(whitespaceOrPlus, "");
      if (isInfinityOrNaN.test(s)) {
        x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
      } else {
        if (!isNum) {
          s = s.replace(basePrefix, function(m, p1, p2) {
            base = (p2 = p2.toLowerCase()) == "x" ? 16 : p2 == "b" ? 2 : 8;
            return !b || b == base ? p1 : m;
          });
          if (b) {
            base = b;
            s = s.replace(dotAfter, "$1").replace(dotBefore, "0.$1");
          }
          if (str != s) return new BigNumber(s, base);
        }
        if (BigNumber.DEBUG) {
          throw Error(bignumberError + "Not a" + (b ? " base " + b : "") + " number: " + str);
        }
        x.s = null;
      }
      x.c = x.e = null;
    };
  }();
  function round(x, sd, rm, r) {
    var d, i, j, k, n, ni, rd, xc = x.c, pows10 = POWS_TEN;
    if (xc) {
      out: {
        for (d = 1, k = xc[0]; k >= 10; k /= 10, d++) ;
        i = sd - d;
        if (i < 0) {
          i += LOG_BASE;
          j = sd;
          n = xc[ni = 0];
          rd = mathfloor(n / pows10[d - j - 1] % 10);
        } else {
          ni = mathceil((i + 1) / LOG_BASE);
          if (ni >= xc.length) {
            if (r) {
              for (; xc.length <= ni; xc.push(0)) ;
              n = rd = 0;
              d = 1;
              i %= LOG_BASE;
              j = i - LOG_BASE + 1;
            } else {
              break out;
            }
          } else {
            n = k = xc[ni];
            for (d = 1; k >= 10; k /= 10, d++) ;
            i %= LOG_BASE;
            j = i - LOG_BASE + d;
            rd = j < 0 ? 0 : mathfloor(n / pows10[d - j - 1] % 10);
          }
        }
        r = r || sd < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);
        r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
        if (sd < 1 || !xc[0]) {
          xc.length = 0;
          if (r) {
            sd -= x.e + 1;
            xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
            x.e = -sd || 0;
          } else {
            xc[0] = x.e = 0;
          }
          return x;
        }
        if (i == 0) {
          xc.length = ni;
          k = 1;
          ni--;
        } else {
          xc.length = ni + 1;
          k = pows10[LOG_BASE - i];
          xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
        }
        if (r) {
          for (; ; ) {
            if (ni == 0) {
              for (i = 1, j = xc[0]; j >= 10; j /= 10, i++) ;
              j = xc[0] += k;
              for (k = 1; j >= 10; j /= 10, k++) ;
              if (i != k) {
                x.e++;
                if (xc[0] == BASE) xc[0] = 1;
              }
              break;
            } else {
              xc[ni] += k;
              if (xc[ni] != BASE) break;
              xc[ni--] = 0;
              k = 1;
            }
          }
        }
        for (i = xc.length; xc[--i] === 0; xc.pop()) ;
      }
      if (x.e > MAX_EXP) {
        x.c = x.e = null;
      } else if (x.e < MIN_EXP) {
        x.c = [x.e = 0];
      }
    }
    return x;
  }
  function valueOf(n) {
    var str, e = n.e;
    if (e === null) return n.toString();
    str = coeffToString(n.c);
    str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e, "0");
    return n.s < 0 ? "-" + str : str;
  }
  P.absoluteValue = P.abs = function() {
    var x = new BigNumber(this);
    if (x.s < 0) x.s = 1;
    return x;
  };
  P.comparedTo = function(y, b) {
    return compare(this, new BigNumber(y, b));
  };
  P.decimalPlaces = P.dp = function(dp, rm) {
    var c, n, v, x = this;
    if (dp != null) {
      intCheck(dp, 0, MAX);
      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);
      return round(new BigNumber(x), dp + x.e + 1, rm);
    }
    if (!(c = x.c)) return null;
    n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;
    if (v = c[v]) for (; v % 10 == 0; v /= 10, n--) ;
    if (n < 0) n = 0;
    return n;
  };
  P.dividedBy = P.div = function(y, b) {
    return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
  };
  P.dividedToIntegerBy = P.idiv = function(y, b) {
    return div(this, new BigNumber(y, b), 0, 1);
  };
  P.exponentiatedBy = P.pow = function(n, m) {
    var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y, x = this;
    n = new BigNumber(n);
    if (n.c && !n.isInteger()) {
      throw Error(bignumberError + "Exponent not an integer: " + valueOf(n));
    }
    if (m != null) m = new BigNumber(m);
    nIsBig = n.e > 14;
    if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {
      y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? n.s * (2 - isOdd(n)) : +valueOf(n)));
      return m ? y.mod(m) : y;
    }
    nIsNeg = n.s < 0;
    if (m) {
      if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);
      isModExp = !nIsNeg && x.isInteger() && m.isInteger();
      if (isModExp) x = x.mod(m);
    } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0 ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7 : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {
      k = x.s < 0 && isOdd(n) ? -0 : 0;
      if (x.e > -1) k = 1 / k;
      return new BigNumber(nIsNeg ? 1 / k : k);
    } else if (POW_PRECISION) {
      k = mathceil(POW_PRECISION / LOG_BASE + 2);
    }
    if (nIsBig) {
      half = new BigNumber(0.5);
      if (nIsNeg) n.s = 1;
      nIsOdd = isOdd(n);
    } else {
      i = Math.abs(+valueOf(n));
      nIsOdd = i % 2;
    }
    y = new BigNumber(ONE);
    for (; ; ) {
      if (nIsOdd) {
        y = y.times(x);
        if (!y.c) break;
        if (k) {
          if (y.c.length > k) y.c.length = k;
        } else if (isModExp) {
          y = y.mod(m);
        }
      }
      if (i) {
        i = mathfloor(i / 2);
        if (i === 0) break;
        nIsOdd = i % 2;
      } else {
        n = n.times(half);
        round(n, n.e + 1, 1);
        if (n.e > 14) {
          nIsOdd = isOdd(n);
        } else {
          i = +valueOf(n);
          if (i === 0) break;
          nIsOdd = i % 2;
        }
      }
      x = x.times(x);
      if (k) {
        if (x.c && x.c.length > k) x.c.length = k;
      } else if (isModExp) {
        x = x.mod(m);
      }
    }
    if (isModExp) return y;
    if (nIsNeg) y = ONE.div(y);
    return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
  };
  P.integerValue = function(rm) {
    var n = new BigNumber(this);
    if (rm == null) rm = ROUNDING_MODE;
    else intCheck(rm, 0, 8);
    return round(n, n.e + 1, rm);
  };
  P.isEqualTo = P.eq = function(y, b) {
    return compare(this, new BigNumber(y, b)) === 0;
  };
  P.isFinite = function() {
    return !!this.c;
  };
  P.isGreaterThan = P.gt = function(y, b) {
    return compare(this, new BigNumber(y, b)) > 0;
  };
  P.isGreaterThanOrEqualTo = P.gte = function(y, b) {
    return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;
  };
  P.isInteger = function() {
    return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
  };
  P.isLessThan = P.lt = function(y, b) {
    return compare(this, new BigNumber(y, b)) < 0;
  };
  P.isLessThanOrEqualTo = P.lte = function(y, b) {
    return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
  };
  P.isNaN = function() {
    return !this.s;
  };
  P.isNegative = function() {
    return this.s < 0;
  };
  P.isPositive = function() {
    return this.s > 0;
  };
  P.isZero = function() {
    return !!this.c && this.c[0] == 0;
  };
  P.minus = function(y, b) {
    var i, j, t, xLTy, x = this, a = x.s;
    y = new BigNumber(y, b);
    b = y.s;
    if (!a || !b) return new BigNumber(NaN);
    if (a != b) {
      y.s = -b;
      return x.plus(y);
    }
    var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
    if (!xe || !ye) {
      if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);
      if (!xc[0] || !yc[0]) {
        return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          ROUNDING_MODE == 3 ? -0 : 0
        ));
      }
    }
    xe = bitFloor(xe);
    ye = bitFloor(ye);
    xc = xc.slice();
    if (a = xe - ye) {
      if (xLTy = a < 0) {
        a = -a;
        t = xc;
      } else {
        ye = xe;
        t = yc;
      }
      t.reverse();
      for (b = a; b--; t.push(0)) ;
      t.reverse();
    } else {
      j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;
      for (a = b = 0; b < j; b++) {
        if (xc[b] != yc[b]) {
          xLTy = xc[b] < yc[b];
          break;
        }
      }
    }
    if (xLTy) {
      t = xc;
      xc = yc;
      yc = t;
      y.s = -y.s;
    }
    b = (j = yc.length) - (i = xc.length);
    if (b > 0) for (; b--; xc[i++] = 0) ;
    b = BASE - 1;
    for (; j > a; ) {
      if (xc[--j] < yc[j]) {
        for (i = j; i && !xc[--i]; xc[i] = b) ;
        --xc[i];
        xc[j] += BASE;
      }
      xc[j] -= yc[j];
    }
    for (; xc[0] == 0; xc.splice(0, 1), --ye) ;
    if (!xc[0]) {
      y.s = ROUNDING_MODE == 3 ? -1 : 1;
      y.c = [y.e = 0];
      return y;
    }
    return normalise(y, xc, ye);
  };
  P.modulo = P.mod = function(y, b) {
    var q, s, x = this;
    y = new BigNumber(y, b);
    if (!x.c || !y.s || y.c && !y.c[0]) {
      return new BigNumber(NaN);
    } else if (!y.c || x.c && !x.c[0]) {
      return new BigNumber(x);
    }
    if (MODULO_MODE == 9) {
      s = y.s;
      y.s = 1;
      q = div(x, y, 0, 3);
      y.s = s;
      q.s *= s;
    } else {
      q = div(x, y, 0, MODULO_MODE);
    }
    y = x.minus(q.times(y));
    if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;
    return y;
  };
  P.multipliedBy = P.times = function(y, b) {
    var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc, base, sqrtBase, x = this, xc = x.c, yc = (y = new BigNumber(y, b)).c;
    if (!xc || !yc || !xc[0] || !yc[0]) {
      if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
        y.c = y.e = y.s = null;
      } else {
        y.s *= x.s;
        if (!xc || !yc) {
          y.c = y.e = null;
        } else {
          y.c = [0];
          y.e = 0;
        }
      }
      return y;
    }
    e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
    y.s *= x.s;
    xcL = xc.length;
    ycL = yc.length;
    if (xcL < ycL) {
      zc = xc;
      xc = yc;
      yc = zc;
      i = xcL;
      xcL = ycL;
      ycL = i;
    }
    for (i = xcL + ycL, zc = []; i--; zc.push(0)) ;
    base = BASE;
    sqrtBase = SQRT_BASE;
    for (i = ycL; --i >= 0; ) {
      c = 0;
      ylo = yc[i] % sqrtBase;
      yhi = yc[i] / sqrtBase | 0;
      for (k = xcL, j = i + k; j > i; ) {
        xlo = xc[--k] % sqrtBase;
        xhi = xc[k] / sqrtBase | 0;
        m = yhi * xlo + xhi * ylo;
        xlo = ylo * xlo + m % sqrtBase * sqrtBase + zc[j] + c;
        c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
        zc[j--] = xlo % base;
      }
      zc[j] = c;
    }
    if (c) {
      ++e;
    } else {
      zc.splice(0, 1);
    }
    return normalise(y, zc, e);
  };
  P.negated = function() {
    var x = new BigNumber(this);
    x.s = -x.s || null;
    return x;
  };
  P.plus = function(y, b) {
    var t, x = this, a = x.s;
    y = new BigNumber(y, b);
    b = y.s;
    if (!a || !b) return new BigNumber(NaN);
    if (a != b) {
      y.s = -b;
      return x.minus(y);
    }
    var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
    if (!xe || !ye) {
      if (!xc || !yc) return new BigNumber(a / 0);
      if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
    }
    xe = bitFloor(xe);
    ye = bitFloor(ye);
    xc = xc.slice();
    if (a = xe - ye) {
      if (a > 0) {
        ye = xe;
        t = yc;
      } else {
        a = -a;
        t = xc;
      }
      t.reverse();
      for (; a--; t.push(0)) ;
      t.reverse();
    }
    a = xc.length;
    b = yc.length;
    if (a - b < 0) {
      t = yc;
      yc = xc;
      xc = t;
      b = a;
    }
    for (a = 0; b; ) {
      a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
      xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
    }
    if (a) {
      xc = [a].concat(xc);
      ++ye;
    }
    return normalise(y, xc, ye);
  };
  P.precision = P.sd = function(sd, rm) {
    var c, n, v, x = this;
    if (sd != null && sd !== !!sd) {
      intCheck(sd, 1, MAX);
      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);
      return round(new BigNumber(x), sd, rm);
    }
    if (!(c = x.c)) return null;
    v = c.length - 1;
    n = v * LOG_BASE + 1;
    if (v = c[v]) {
      for (; v % 10 == 0; v /= 10, n--) ;
      for (v = c[0]; v >= 10; v /= 10, n++) ;
    }
    if (sd && x.e + 1 > n) n = x.e + 1;
    return n;
  };
  P.shiftedBy = function(k) {
    intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
    return this.times("1e" + k);
  };
  P.squareRoot = P.sqrt = function() {
    var m, n, r, rep, t, x = this, c = x.c, s = x.s, e = x.e, dp = DECIMAL_PLACES + 4, half = new BigNumber("0.5");
    if (s !== 1 || !c || !c[0]) {
      return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
    }
    s = Math.sqrt(+valueOf(x));
    if (s == 0 || s == 1 / 0) {
      n = coeffToString(c);
      if ((n.length + e) % 2 == 0) n += "0";
      s = Math.sqrt(+n);
      e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);
      if (s == 1 / 0) {
        n = "5e" + e;
      } else {
        n = s.toExponential();
        n = n.slice(0, n.indexOf("e") + 1) + e;
      }
      r = new BigNumber(n);
    } else {
      r = new BigNumber(s + "");
    }
    if (r.c[0]) {
      e = r.e;
      s = e + dp;
      if (s < 3) s = 0;
      for (; ; ) {
        t = r;
        r = half.times(t.plus(div(x, t, dp, 1)));
        if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {
          if (r.e < e) --s;
          n = n.slice(s - 3, s + 1);
          if (n == "9999" || !rep && n == "4999") {
            if (!rep) {
              round(t, t.e + DECIMAL_PLACES + 2, 0);
              if (t.times(t).eq(x)) {
                r = t;
                break;
              }
            }
            dp += 4;
            s += 4;
            rep = 1;
          } else {
            if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
              round(r, r.e + DECIMAL_PLACES + 2, 1);
              m = !r.times(r).eq(x);
            }
            break;
          }
        }
      }
    }
    return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
  };
  P.toExponential = function(dp, rm) {
    if (dp != null) {
      intCheck(dp, 0, MAX);
      dp++;
    }
    return format(this, dp, rm, 1);
  };
  P.toFixed = function(dp, rm) {
    if (dp != null) {
      intCheck(dp, 0, MAX);
      dp = dp + this.e + 1;
    }
    return format(this, dp, rm);
  };
  P.toFormat = function(dp, rm, format2) {
    var str, x = this;
    if (format2 == null) {
      if (dp != null && rm && typeof rm == "object") {
        format2 = rm;
        rm = null;
      } else if (dp && typeof dp == "object") {
        format2 = dp;
        dp = rm = null;
      } else {
        format2 = FORMAT;
      }
    } else if (typeof format2 != "object") {
      throw Error(bignumberError + "Argument not an object: " + format2);
    }
    str = x.toFixed(dp, rm);
    if (x.c) {
      var i, arr = str.split("."), g1 = +format2.groupSize, g2 = +format2.secondaryGroupSize, groupSeparator = format2.groupSeparator || "", intPart = arr[0], fractionPart = arr[1], isNeg = x.s < 0, intDigits = isNeg ? intPart.slice(1) : intPart, len = intDigits.length;
      if (g2) {
        i = g1;
        g1 = g2;
        g2 = i;
        len -= i;
      }
      if (g1 > 0 && len > 0) {
        i = len % g1 || g1;
        intPart = intDigits.substr(0, i);
        for (; i < len; i += g1) intPart += groupSeparator + intDigits.substr(i, g1);
        if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
        if (isNeg) intPart = "-" + intPart;
      }
      str = fractionPart ? intPart + (format2.decimalSeparator || "") + ((g2 = +format2.fractionGroupSize) ? fractionPart.replace(
        new RegExp("\\d{" + g2 + "}\\B", "g"),
        "$&" + (format2.fractionGroupSeparator || "")
      ) : fractionPart) : intPart;
    }
    return (format2.prefix || "") + str + (format2.suffix || "");
  };
  P.toFraction = function(md) {
    var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s, x = this, xc = x.c;
    if (md != null) {
      n = new BigNumber(md);
      if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
        throw Error(bignumberError + "Argument " + (n.isInteger() ? "out of range: " : "not an integer: ") + valueOf(n));
      }
    }
    if (!xc) return new BigNumber(x);
    d = new BigNumber(ONE);
    n1 = d0 = new BigNumber(ONE);
    d1 = n0 = new BigNumber(ONE);
    s = coeffToString(xc);
    e = d.e = s.length - x.e - 1;
    d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
    md = !md || n.comparedTo(d) > 0 ? e > 0 ? d : n1 : n;
    exp = MAX_EXP;
    MAX_EXP = 1 / 0;
    n = new BigNumber(s);
    n0.c[0] = 0;
    for (; ; ) {
      q = div(n, d, 0, 1);
      d2 = d0.plus(q.times(d1));
      if (d2.comparedTo(md) == 1) break;
      d0 = d1;
      d1 = d2;
      n1 = n0.plus(q.times(d2 = n1));
      n0 = d2;
      d = n.minus(q.times(d2 = d));
      n = d2;
    }
    d2 = div(md.minus(d0), d1, 0, 1);
    n0 = n0.plus(d2.times(n1));
    d0 = d0.plus(d2.times(d1));
    n0.s = n1.s = x.s;
    e = e * 2;
    r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
      div(n0, d0, e, ROUNDING_MODE).minus(x).abs()
    ) < 1 ? [n1, d1] : [n0, d0];
    MAX_EXP = exp;
    return r;
  };
  P.toNumber = function() {
    return +valueOf(this);
  };
  P.toPrecision = function(sd, rm) {
    if (sd != null) intCheck(sd, 1, MAX);
    return format(this, sd, rm, 2);
  };
  P.toString = function(b) {
    var str, n = this, s = n.s, e = n.e;
    if (e === null) {
      if (s) {
        str = "Infinity";
        if (s < 0) str = "-" + str;
      } else {
        str = "NaN";
      }
    } else {
      if (b == null) {
        str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(coeffToString(n.c), e) : toFixedPoint(coeffToString(n.c), e, "0");
      } else if (b === 10 && alphabetHasNormalDecimalDigits) {
        n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
        str = toFixedPoint(coeffToString(n.c), n.e, "0");
      } else {
        intCheck(b, 2, ALPHABET.length, "Base");
        str = convertBase(toFixedPoint(coeffToString(n.c), e, "0"), 10, b, s, true);
      }
      if (s < 0 && n.c[0]) str = "-" + str;
    }
    return str;
  };
  P.valueOf = P.toJSON = function() {
    return valueOf(this);
  };
  P._isBigNumber = true;
  P[Symbol.toStringTag] = "BigNumber";
  P[Symbol.for("nodejs.util.inspect.custom")] = P.valueOf;
  if (configObject != null) BigNumber.set(configObject);
  return BigNumber;
}
function bitFloor(n) {
  var i = n | 0;
  return n > 0 || n === i ? i : i - 1;
}
function coeffToString(a) {
  var s, z, i = 1, j = a.length, r = a[0] + "";
  for (; i < j; ) {
    s = a[i++] + "";
    z = LOG_BASE - s.length;
    for (; z--; s = "0" + s) ;
    r += s;
  }
  for (j = r.length; r.charCodeAt(--j) === 48; ) ;
  return r.slice(0, j + 1 || 1);
}
function compare(x, y) {
  var a, b, xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
  if (!i || !j) return null;
  a = xc && !xc[0];
  b = yc && !yc[0];
  if (a || b) return a ? b ? 0 : -j : i;
  if (i != j) return i;
  a = i < 0;
  b = k == l;
  if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;
  if (!b) return k > l ^ a ? 1 : -1;
  j = (k = xc.length) < (l = yc.length) ? k : l;
  for (i = 0; i < j; i++) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;
  return k == l ? 0 : k > l ^ a ? 1 : -1;
}
function intCheck(n, min, max, name) {
  if (n < min || n > max || n !== mathfloor(n)) {
    throw Error(bignumberError + (name || "Argument") + (typeof n == "number" ? n < min || n > max ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(n));
  }
}
function isOdd(n) {
  var k = n.c.length - 1;
  return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
}
function toExponential(str, e) {
  return (str.length > 1 ? str.charAt(0) + "." + str.slice(1) : str) + (e < 0 ? "e" : "e+") + e;
}
function toFixedPoint(str, e, z) {
  var len, zs;
  if (e < 0) {
    for (zs = z + "."; ++e; zs += z) ;
    str = zs + str;
  } else {
    len = str.length;
    if (++e > len) {
      for (zs = z, e -= len; --e; zs += z) ;
      str += zs;
    } else if (e < len) {
      str = str.slice(0, e) + "." + str.slice(e);
    }
  }
  return str;
}
clone();
const decodeCallRequest = (contentMap) => {
  const decoded = Cbor.decode(contentMap);
  const expiry = new Expiry(0);
  expiry._value = BigInt(decoded.ingress_expiry.toString(10));
  return Object.assign(Object.assign({}, decoded), { canister_id: Principal.from(decoded.canister_id), ingress_expiry: expiry });
};
var __classPrivateFieldGet$1 = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet$1 = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _Queue_ongoing;
class Queue {
  constructor() {
    _Queue_ongoing.set(this, Promise.resolve());
  }
  async schedule(job) {
    return new Promise((resolve, reject) => {
      __classPrivateFieldSet$1(this, _Queue_ongoing, __classPrivateFieldGet$1(this, _Queue_ongoing, "f").finally(async () => {
        try {
          resolve(await job());
        } catch (error) {
          reject(error);
        }
      }), "f");
    });
  }
}
_Queue_ongoing = /* @__PURE__ */ new WeakMap();
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _a, _SignerAgent_isInternalConstructing, _SignerAgent_options, _SignerAgent_certificates, _SignerAgent_queue;
const MAX_AGE_IN_MINUTES = 5;
const INVALID_RESPONSE_MESSAGE = "Received invalid response from signer";
class SignerAgentError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, SignerAgentError.prototype);
  }
}
class SignerAgent {
  constructor(options) {
    _SignerAgent_options.set(this, void 0);
    _SignerAgent_certificates.set(this, /* @__PURE__ */ new Map());
    _SignerAgent_queue.set(this, new Queue());
    const throwError = !__classPrivateFieldGet(_a, _a, "f", _SignerAgent_isInternalConstructing);
    __classPrivateFieldSet(_a, _a, false, "f", _SignerAgent_isInternalConstructing);
    if (throwError) {
      throw new SignerAgentError("SignerAgent is not constructable");
    }
    __classPrivateFieldSet(this, _SignerAgent_options, options, "f");
  }
  get rootKey() {
    return __classPrivateFieldGet(this, _SignerAgent_options, "f").agent.rootKey;
  }
  get signer() {
    return __classPrivateFieldGet(this, _SignerAgent_options, "f").signer;
  }
  static async create(options) {
    var _b;
    __classPrivateFieldSet(_a, _a, true, "f", _SignerAgent_isInternalConstructing);
    return new _a(Object.assign(Object.assign({}, options), { agent: (_b = options.agent) !== null && _b !== void 0 ? _b : await HttpAgent.create() }));
  }
  static createSync(options) {
    var _b;
    __classPrivateFieldSet(_a, _a, true, "f", _SignerAgent_isInternalConstructing);
    return new _a(Object.assign(Object.assign({}, options), { agent: (_b = options.agent) !== null && _b !== void 0 ? _b : HttpAgent.createSync() }));
  }
  async call(canisterId, options) {
    canisterId = Principal.from(canisterId);
    await __classPrivateFieldGet(this, _SignerAgent_options, "f").signer.openChannel();
    const response = await __classPrivateFieldGet(this, _SignerAgent_queue, "f").schedule(() => __classPrivateFieldGet(this, _SignerAgent_options, "f").signer.callCanister({
      canisterId,
      sender: __classPrivateFieldGet(this, _SignerAgent_options, "f").account,
      method: options.methodName,
      arg: options.arg
    }));
    const requestBody = decodeCallRequest(response.contentMap);
    const contentMapMatchesRequest = SubmitRequestType.Call === requestBody.request_type && canisterId.compareTo(requestBody.canister_id) === "eq" && options.methodName === requestBody.method_name && compare$1(options.arg, requestBody.arg) === 0 && __classPrivateFieldGet(this, _SignerAgent_options, "f").account.compareTo(Principal.from(requestBody.sender)) === "eq";
    if (!contentMapMatchesRequest) {
      throw new SignerAgentError(INVALID_RESPONSE_MESSAGE);
    }
    const requestId = requestIdOf(requestBody);
    const certificate = await Certificate.create({
      certificate: response.certificate,
      rootKey: this.rootKey,
      canisterId,
      maxAgeInMinutes: MAX_AGE_IN_MINUTES
    }).catch(() => {
      throw new SignerAgentError(INVALID_RESPONSE_MESSAGE);
    });
    const certificateIsResponseToContentMap = certificate.lookup(["request_status", requestId, "status"]).status === LookupStatus.Found;
    if (!certificateIsResponseToContentMap) {
      throw new SignerAgentError(INVALID_RESPONSE_MESSAGE);
    }
    const requestKey = toBase64(requestId);
    if (__classPrivateFieldGet(this, _SignerAgent_certificates, "f").has(requestKey)) {
      throw new SignerAgentError(INVALID_RESPONSE_MESSAGE);
    }
    __classPrivateFieldGet(this, _SignerAgent_certificates, "f").set(requestKey, response.certificate);
    const now = Date.now();
    const lookupTime = lookupResultToBuffer(certificate.lookup(["time"]));
    if (!lookupTime) {
      throw new SignerAgentError(INVALID_RESPONSE_MESSAGE);
    }
    const certificateTime = Number(lebDecode(new PipeArrayBuffer(lookupTime))) / 1e6;
    const expiry = certificateTime - now + MAX_AGE_IN_MINUTES * 60 * 1e3;
    setTimeout(() => __classPrivateFieldGet(this, _SignerAgent_certificates, "f").delete(requestKey), expiry);
    return {
      requestId,
      response: {
        ok: true,
        status: 202,
        statusText: "Call has been sent over ICRC-25 JSON-RPC",
        body: null,
        headers: []
      }
    };
  }
  async fetchRootKey() {
    return __classPrivateFieldGet(this, _SignerAgent_options, "f").agent.fetchRootKey();
  }
  async getPrincipal() {
    return __classPrivateFieldGet(this, _SignerAgent_options, "f").account;
  }
  async query(canisterId, options) {
    canisterId = Principal.from(canisterId);
    const submitResponse = await this.call(canisterId, options);
    const readStateResponse = await this.readState(canisterId, {
      paths: [
        [new TextEncoder().encode("request_status"), submitResponse.requestId]
      ]
    });
    const certificate = await Certificate.create({
      certificate: readStateResponse.certificate,
      rootKey: this.rootKey,
      canisterId
    });
    const status = certificate.lookup([
      "request_status",
      submitResponse.requestId,
      "status"
    ]);
    const reply = certificate.lookup([
      "request_status",
      submitResponse.requestId,
      "reply"
    ]);
    if (status.status !== LookupStatus.Found || new TextDecoder().decode(status.value) !== "replied" || reply.status !== LookupStatus.Found) {
      throw new SignerAgentError("Certificate is missing reply");
    }
    return {
      requestId: submitResponse.requestId,
      status: "replied",
      reply: {
        arg: reply.value
      },
      httpDetails: {
        ok: true,
        status: 202,
        statusText: "Certificate with reply has been received over ICRC-25 JSON-RPC",
        headers: []
      }
    };
  }
  async createReadStateRequest(_options) {
    return {
      body: {
        content: {}
      }
    };
  }
  async readState(_canisterId, options, _identity, _request) {
    if (options.paths.length !== 1 || options.paths[0].length !== 2 || new TextDecoder().decode(options.paths[0][0]) !== "request_status") {
      throw new SignerAgentError("Given paths are not supported");
    }
    const requestId = options.paths[0][1];
    const key = toBase64(requestId);
    const certificate = __classPrivateFieldGet(this, _SignerAgent_certificates, "f").get(key);
    if (!certificate) {
      throw new SignerAgentError("Certificate could not be found");
    }
    return { certificate };
  }
  async status() {
    return __classPrivateFieldGet(this, _SignerAgent_options, "f").agent.status();
  }
  replaceAccount(account) {
    __classPrivateFieldGet(this, _SignerAgent_options, "f").account = account;
  }
}
_a = SignerAgent, _SignerAgent_options = /* @__PURE__ */ new WeakMap(), _SignerAgent_certificates = /* @__PURE__ */ new WeakMap(), _SignerAgent_queue = /* @__PURE__ */ new WeakMap();
_SignerAgent_isInternalConstructing = { value: false };
class LocalDelegationStorage {
  async get(key) {
    return localStorage.getItem(key);
  }
  async set(key, value) {
    localStorage.setItem(key, value);
  }
  async remove(key) {
    localStorage.removeItem(key);
  }
}
class SignatureQueue {
  constructor() {
    this.queue = [];
    this.isProcessing = false;
  }
  async add(request) {
    return new Promise((resolve, reject) => {
      this.queue.push(async () => {
        try {
          const result = await request();
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
      this.processQueue();
    });
  }
  async processQueue() {
    if (this.isProcessing || this.queue.length === 0) return;
    this.isProcessing = true;
    while (this.queue.length > 0) {
      const request = this.queue.shift();
      if (request) {
        try {
          await request();
        } catch (error) {
          console.error("Error processing signature request:", error);
        }
      }
    }
    this.isProcessing = false;
  }
  clear() {
    this.queue = [];
    this.isProcessing = false;
  }
}
const _NFIDAdapter = class _NFIDAdapter {
  constructor() {
    this.signer = null;
    this.agent = null;
    this.signerAgent = null;
    this.identity = null;
    this.lastConnectionAttempt = 0;
    this.connectionPromise = null;
    this.transport = null;
    this.signerWindow = null;
    this.state = "READY";
    this.accounts = [];
    this.actorCache = /* @__PURE__ */ new Map();
    this.sessionKey = null;
    this.reconnectAttempts = 0;
    this.name = "NFID";
    this.logo = _NFIDAdapter.logo;
    this.identityProviderUrl = "https://nfid.one/authenticate/?applicationName=kong";
    this.url = "https://nfid.one/rpc";
    this.unwrapResponse = (response) => {
      if ("error" in response) {
        throw new SignerError(response.error);
      }
      if ("result" in response) {
        return response.result;
      }
      throw new SignerError({
        code: 500,
        message: "Invalid response"
      });
    };
    this.url = "https://nfid.one/rpc";
    this.name = "NFID";
    this.logo = _NFIDAdapter.logo;
    this.delegationStorage = new LocalDelegationStorage();
    this.signatureQueue = new SignatureQueue();
    this.initialize();
  }
  async initialize() {
    try {
      const restored = await this.tryRestoreSession();
      if (!restored) {
        this.setState(
          "READY"
          /* READY */
        );
      }
    } catch (error) {
      console.error("[NFID] Error during initialization:", error);
      this.setState(
        "ERROR"
        /* ERROR */
      );
    }
  }
  async tryRestoreSession() {
    var _a2, _b;
    try {
      const stored = await this.delegationStorage.get(_NFIDAdapter.STORAGE_KEY);
      if (!stored) return false;
      let parsedData;
      try {
        parsedData = JSON.parse(stored);
      } catch (parseError) {
        console.warn("[NFID] Failed to parse stored session:", parseError);
        await this.delegationStorage.remove(_NFIDAdapter.STORAGE_KEY);
        return false;
      }
      const { sessionKey, delegationChain } = parsedData;
      if (!sessionKey || !delegationChain) {
        console.warn("[NFID] Invalid stored session format");
        await this.delegationStorage.remove(_NFIDAdapter.STORAGE_KEY);
        return false;
      }
      try {
        this.sessionKey = Ed25519KeyIdentity.fromParsedJson(sessionKey);
      } catch (keyError) {
        console.warn("[NFID] Failed to restore session key:", keyError);
        await this.delegationStorage.remove(_NFIDAdapter.STORAGE_KEY);
        return false;
      }
      if (!this.sessionKey) {
        console.warn("[NFID] Session key restoration returned null");
        await this.delegationStorage.remove(_NFIDAdapter.STORAGE_KEY);
        return false;
      }
      let chain;
      try {
        chain = DelegationChain.fromJSON(delegationChain);
      } catch (chainError) {
        console.warn("[NFID] Failed to restore delegation chain:", chainError);
        await this.delegationStorage.remove(_NFIDAdapter.STORAGE_KEY);
        return false;
      }
      const now = BigInt(Date.now()) * BigInt(1e6);
      const isExpired = chain.delegations.some(
        (d) => d.delegation.expiration <= now
      );
      if (isExpired) {
        console.debug("[NFID] Stored delegation chain is expired");
        await this.delegationStorage.remove(_NFIDAdapter.STORAGE_KEY);
        return false;
      }
      this.identity = DelegationIdentity.fromDelegation(this.sessionKey, chain);
      const principal = this.identity.getPrincipal();
      if (principal.isAnonymous()) {
        console.warn("[NFID] Restored identity is anonymous");
        this.identity = null;
        return false;
      }
      await this.initSigner(false);
      if (!this.signer) {
        console.warn("[NFID] Failed to initialize signer during session restore");
        return false;
      }
      this.agent = HttpAgent.createSync({
        host: ((_a2 = this.config) == null ? void 0 : _a2.hostUrl) || "https://icp0.io",
        identity: this.identity,
        verifyQuerySignatures: (_b = this.config) == null ? void 0 : _b.verifyQuerySignatures
      });
      this.signerAgent = SignerAgent.createSync({
        signer: this.signer,
        account: principal
      });
      const accountId = getAccountIdentifier(principal.toText()) || "";
      const subaccount = principalToSubAccount(principal);
      const account = {
        id: accountId,
        displayName: "NFID Account",
        principal: principal.toText(),
        subaccount: new Uint8Array(subaccount),
        type: "SESSION"
        /* SESSION */
      };
      this.accounts = [account];
      try {
        await Promise.race([
          this.signer.sendRequest({
            id: window.crypto.randomUUID(),
            jsonrpc: "2.0",
            method: "icrc34_is_connected",
            params: {}
          }),
          new Promise(
            (_, reject) => setTimeout(() => reject(new Error("Verification timeout")), 5e3)
          )
        ]);
        if (!this.identity || !this.agent || !this.signerAgent || !this.signer) {
          console.warn("[NFID] Components lost during verification");
          throw new Error("Components lost during verification");
        }
        this.setState(
          "READY"
          /* READY */
        );
        this.reconnectAttempts = 0;
        return true;
      } catch (error) {
        console.warn("[NFID] Restored session verification failed:", error);
      }
      console.warn("[NFID] Session restore failed, cleaning up");
      this.cleanupTransport();
      this.identity = null;
      this.agent = null;
      this.signerAgent = null;
      this.accounts = [];
      await this.delegationStorage.remove(_NFIDAdapter.STORAGE_KEY);
      this.setState(
        "ERROR"
        /* ERROR */
      );
      return false;
    } catch (error) {
      console.warn("[NFID] Error restoring session:", error);
      this.cleanupTransport();
      this.identity = null;
      this.agent = null;
      this.signerAgent = null;
      this.accounts = [];
      this.setState(
        "ERROR"
        /* ERROR */
      );
      localStorage.removeItem(_NFIDAdapter.STORAGE_KEY);
      throw error;
    }
  }
  setState(newState) {
    this.state = newState;
  }
  async getDelegationChain(key) {
    const stored = await this.delegationStorage.get(key);
    if (!stored) return null;
    try {
      return DelegationChain.fromJSON(JSON.parse(stored));
    } catch (error) {
      console.error("Error parsing delegation chain:", error);
      return null;
    }
  }
  async setDelegationChain(key, chain) {
    const sessionData = {
      sessionKey: this.sessionKey.toJSON(),
      delegationChain: chain.toJSON()
    };
    await this.delegationStorage.set(key, JSON.stringify(sessionData));
  }
  async removeDelegationChain(key) {
    await this.delegationStorage.remove(key);
  }
  setupWindowTracking() {
    if (this.transport) {
      const transportWindow = this.transport._window;
      if (transportWindow) {
        this.signerWindow = transportWindow;
      }
    }
  }
  async initSigner(forceNewTransport = false) {
    if (this.connectionPromise) {
      return this.connectionPromise;
    }
    const isReconnect = this.reconnectAttempts > 0;
    this.connectionPromise = (async () => {
      try {
        const now = Date.now();
        if (now - this.lastConnectionAttempt < _NFIDAdapter.CONNECTION_COOLDOWN) {
          const waitTime = _NFIDAdapter.CONNECTION_COOLDOWN - (now - this.lastConnectionAttempt);
          await new Promise((resolve) => setTimeout(resolve, waitTime));
        }
        this.lastConnectionAttempt = Date.now();
        let attempts = 0;
        const maxAttempts = 3;
        while (attempts < maxAttempts) {
          try {
            const config = isReconnect ? _NFIDAdapter.HIDDEN_TRANSPORT_CONFIG : _NFIDAdapter.TRANSPORT_CONFIG;
            this.transport = new PostMessageTransport({
              url: this.url,
              detectNonClickEstablishment: false,
              ...config
            });
            this.signer = new Signer({
              transport: this.transport
            });
            if (!isReconnect) {
              this.setupWindowTracking();
              if (this.signerWindow) {
                this.signerWindow.focus();
              }
            }
            break;
          } catch (error) {
            attempts++;
            this.cleanupTransport();
            if (attempts >= maxAttempts) {
              throw error;
            }
            await new Promise((resolve) => setTimeout(resolve, 1e3));
          }
        }
      } catch (error) {
        console.error("[NFID] Error initializing signer:", error);
        this.cleanupTransport();
        throw error;
      } finally {
        this.connectionPromise = null;
      }
    })();
    return this.connectionPromise;
  }
  async cleanupTransport() {
    if (this.signer) {
      try {
        this.signer.closeChannel();
      } catch (error) {
        console.debug("[NFID] Error cleaning up signer:", error);
      }
      this.signer = null;
    }
    if (this.signerWindow && !this.signerWindow.closed) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1e3));
        this.signerWindow.close();
      } catch (error) {
        console.debug("[NFID] Error closing signer window:", error);
      }
      this.signerWindow = null;
    }
    this.transport = null;
  }
  async isAvailable() {
    return true;
  }
  async isConnected() {
    return this.identity !== null && this.agent !== null;
  }
  async getPrincipal() {
    if (!this.identity) {
      throw new Error("Not connected");
    }
    return this.identity.getPrincipal();
  }
  async getAccountId() {
    if (!this.identity) {
      throw new Error("Not connected");
    }
    const principal = this.identity.getPrincipal();
    return getAccountIdentifier(principal.toText()) || "";
  }
  async prepareConnection() {
    this.transport = new PostMessageTransport({
      url: this.url,
      ...this.config
    });
    this.signer = new Signer({
      transport: this.transport
    });
    return this.signer.accounts[0];
  }
  async connect(config) {
    try {
      this.config = config;
      return await Promise.race([
        this._connect(config),
        new Promise(
          (_, reject) => setTimeout(() => {
            this.cleanupTransport();
            reject(new Error("Connection timeout"));
          }, 45e3)
        )
      ]);
    } catch (error) {
      this.cleanupTransport();
      this.setState(
        "ERROR"
        /* ERROR */
      );
      throw error;
    }
  }
  async _connect(config) {
    var _a2;
    try {
      if (this.identity && this.signer && this.agent && this.signerAgent) {
        try {
          return {
            owner: this.identity.getPrincipal(),
            subaccount: principalToSubAccount(this.identity.getPrincipal()),
            hasDelegation: true
          };
        } catch (error) {
          console.debug("[NFID] Existing session invalid, proceeding with new connection:", error);
          this.cleanupTransport();
        }
      } else {
        if (this.identity) {
          try {
            if (!this.signer) {
              throw new Error("Failed to initialize signer");
            }
            this.agent = HttpAgent.createSync({
              host: config.hostUrl,
              identity: this.identity,
              verifyQuerySignatures: config.verifyQuerySignatures
            });
            this.signerAgent = SignerAgent.createSync({
              signer: this.signer,
              account: this.identity.getPrincipal()
            });
            await Promise.race([
              this.signer.sendRequest({
                id: window.crypto.randomUUID(),
                jsonrpc: "2.0",
                method: "icrc34_is_connected",
                params: {}
              }),
              new Promise(
                (_, reject) => setTimeout(() => reject(new Error("Verification timeout")), 5e3)
              )
            ]);
            return {
              owner: this.identity.getPrincipal(),
              subaccount: principalToSubAccount(this.identity.getPrincipal()),
              hasDelegation: true
            };
          } catch (error) {
            console.debug("[NFID] Failed to recreate components:", error);
            this.cleanupTransport();
          }
        }
      }
      this.setState(
        "LOADING"
        /* LOADING */
      );
      await this.initSigner(true);
      if (!this.signer) {
        throw new Error("Failed to initialize NFID signer");
      }
      this.setState(
        "PROCESSING"
        /* PROCESSING */
      );
      if (!this.sessionKey) {
        this.sessionKey = Ed25519KeyIdentity.generate();
      }
      const response = await this.signer.sendRequest({
        id: window.crypto.randomUUID(),
        jsonrpc: "2.0",
        method: "icrc34_delegation",
        params: {
          publicKey: toBase64(this.sessionKey.getPublicKey().toDer()),
          targets: (_a2 = config.delegationTargets) == null ? void 0 : _a2.map((p) => p.toText()),
          maxTimeToLive: this.config.delegationTimeout === void 0 ? BigInt(24 * 60 * 60 * 1e3 * 1e3 * 1e3 * 1e3) : String(BigInt(Date.now()) + this.config.delegationTimeout)
        }
      });
      const result = this.unwrapResponse(response);
      const delegationChain = DelegationChain.fromDelegations(
        result.signerDelegation.map((delegation) => {
          var _a3;
          return {
            delegation: new Delegation(
              fromBase64(delegation.delegation.pubkey),
              BigInt(delegation.delegation.expiration),
              (_a3 = delegation.delegation.targets) == null ? void 0 : _a3.map(
                (principal2) => Principal.fromText(principal2)
              )
            ),
            signature: fromBase64(delegation.signature)
          };
        }),
        fromBase64(result.publicKey)
      );
      await this.setDelegationChain(
        _NFIDAdapter.STORAGE_KEY,
        delegationChain
      );
      const delegationIdentity = DelegationIdentity.fromDelegation(
        this.sessionKey,
        delegationChain
      );
      this.agent = HttpAgent.createSync({
        host: config.hostUrl,
        identity: delegationIdentity,
        verifyQuerySignatures: config.verifyQuerySignatures
      });
      if (config.fetchRootKeys) {
        await this.agent.fetchRootKey();
      }
      const principal = delegationIdentity.getPrincipal();
      if (principal.isAnonymous()) {
        throw new Error(
          "Failed to authenticate with NFID - got anonymous principal"
        );
      }
      this.signerAgent = SignerAgent.createSync({
        signer: this.signer,
        account: principal
      });
      this.identity = delegationIdentity;
      const subaccount = principalToSubAccount(principal);
      const account = {
        id: principal.toText(),
        displayName: "NFID Account",
        principal: principal.toText(),
        subaccount: new Uint8Array(subaccount),
        type: "SESSION"
        /* SESSION */
      };
      this.accounts = [account];
      try {
        await Promise.race([
          this.signer.sendRequest({
            id: window.crypto.randomUUID(),
            jsonrpc: "2.0",
            method: "icrc34_is_connected",
            params: {}
          }),
          new Promise(
            (_, reject) => setTimeout(() => reject(new Error("Verification timeout")), 5e3)
          )
        ]);
        if (this.identity && this.agent && this.signerAgent && this.signer) {
          this.setState(
            "READY"
            /* READY */
          );
          this.reconnectAttempts = 0;
          console.debug("[NFID] Session established successfully");
          this.signerWindow = null;
          return {
            owner: principal,
            subaccount: principalToSubAccount(principal),
            hasDelegation: true
          };
        }
      } catch (error) {
        console.error("[NFID] New session verification failed:", error);
      }
      console.error("[NFID] Session establishment failed, cleaning up");
      this.cleanupTransport();
      this.identity = null;
      this.agent = null;
      this.signerAgent = null;
      this.accounts = [];
      await this.delegationStorage.remove(_NFIDAdapter.STORAGE_KEY);
      this.setState(
        "ERROR"
        /* ERROR */
      );
      throw new Error("Failed to establish session");
    } catch (error) {
      console.error("Error connecting to NFID:", error);
      this.setState(
        "ERROR"
        /* ERROR */
      );
      throw error;
    }
  }
  async isDelegationReady() {
    return this.identity !== null && this.agent !== null && this.signerAgent !== null && this.signerAgent.signer !== null;
  }
  async waitForDelegation(timeoutMs = 5e3) {
    const startTime = Date.now();
    while (Date.now() - startTime < timeoutMs) {
      if (await this.isDelegationReady()) {
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    throw new Error("Delegation initialization timeout");
  }
  async createAnonymousActor(canisterId, idl) {
    var _a2, _b;
    return Actor.createActor(idl, {
      agent: HttpAgent.createSync({
        host: ((_a2 = this.config) == null ? void 0 : _a2.hostUrl) || "https://icp0.io",
        verifyQuerySignatures: (_b = this.config) == null ? void 0 : _b.verifyQuerySignatures
      }),
      canisterId
    });
  }
  async createActor(canisterId, idlFactory, options = {
    requiresSigning: true,
    anon: false
  }) {
    const { requiresSigning = true, anon = false } = options;
    try {
      if (!this.identity) {
        throw new Error("Identity not initialized");
      }
      if (requiresSigning) {
        await this.waitForDelegation();
      }
      const inTargets = this.identity.getDelegation().delegations.some(
        (d) => {
          var _a2;
          return (_a2 = d.delegation.targets) == null ? void 0 : _a2.some((p) => p.toText() === canisterId);
        }
      );
      const isUndelegated = inTargets && !requiresSigning || !inTargets && requiresSigning || !inTargets && !requiresSigning;
      const cacheKey = `${canisterId}-${inTargets}-${requiresSigning}-${isUndelegated}-${this.identity.getPrincipal().toText()}`;
      const cachedActor = this.actorCache.get(cacheKey);
      if (cachedActor) {
        return cachedActor;
      }
      if (!inTargets && !requiresSigning && anon) {
        const anonActor = await this.createAnonymousActor(canisterId, idlFactory);
        this.actorCache.set(cacheKey, anonActor);
        return anonActor;
      }
      if (inTargets && !requiresSigning || !inTargets && !requiresSigning) {
        const actor2 = this.undelegatedActor(canisterId, idlFactory);
        this.actorCache.set(cacheKey, actor2);
        return actor2;
      }
      const actor = Actor.createActor(idlFactory, {
        agent: this.signerAgent,
        canisterId
      });
      if (requiresSigning) {
        if (!this.signerAgent) {
          throw new Error("No signer agent available. Please connect first.");
        }
        const proxiedActor = new Proxy(actor, {
          get: (target, prop) => {
            const original = target[prop];
            if (typeof original === "function") {
              return (...args) => {
                return this.signatureQueue.add(async () => {
                  if (!await this.isDelegationReady()) {
                    throw new Error(
                      "Delegation no longer valid. Please reconnect."
                    );
                  }
                  const wrappedActor = Actor.createActor(idlFactory, {
                    agent: this.signerAgent,
                    canisterId
                  });
                  return wrappedActor[prop](...args);
                });
              };
            }
            return original;
          }
        });
        this.actorCache.set(cacheKey, proxiedActor);
        return proxiedActor;
      }
      return actor;
    } catch (error) {
      console.error("Error creating actor:", error);
      throw new Error(
        `Failed to create actor: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  async undelegatedActor(canisterId, idlFactory) {
    const agent = await HttpAgent.create({
      shouldFetchRootKey: this.config.fetchRootKeys,
      // * local only
      identity: this.identity,
      host: this.config.hostUrl,
      verifyQuerySignatures: this.config.verifyQuerySignatures
    });
    const actor = Actor.createActor(idlFactory, {
      agent,
      canisterId
    });
    return actor;
  }
  async disconnect() {
    this.cleanupTransport();
    this.identity = null;
    this.agent = null;
    this.signerAgent = null;
    this.accounts = [];
    await this.delegationStorage.remove(_NFIDAdapter.STORAGE_KEY);
    this.setState(
      "READY"
      /* READY */
    );
  }
  async queueSignatureRequest(request) {
    return this.signatureQueue.add(request);
  }
  getState() {
    return this.state;
  }
  getAccounts() {
    return this.accounts;
  }
};
_NFIDAdapter.STORAGE_KEY = "nfid_session";
_NFIDAdapter.MAX_RECONNECT_ATTEMPTS = 3;
_NFIDAdapter.CONNECTION_COOLDOWN = 1e3;
_NFIDAdapter.CONNECTION_TIMEOUT = 1e4;
_NFIDAdapter.TRANSPORT_CONFIG = {
  windowOpenerFeatures: "width=525,height=705",
  establishTimeout: 45e3,
  disconnectTimeout: 35e3,
  manageFocus: false
};
_NFIDAdapter.HIDDEN_TRANSPORT_CONFIG = {
  ..._NFIDAdapter.TRANSPORT_CONFIG,
  manageFocus: false
};
_NFIDAdapter.logo = nfidLogo;
let NFIDAdapter = _NFIDAdapter;
const oisyLogo = "data:image/webp;base64,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";
const _OisyAdapter = class _OisyAdapter {
  constructor() {
    this.signer = null;
    this.agent = null;
    this.signerAgent = null;
    this.accounts = [];
    this.transport = null;
    this.connectionPromise = null;
    this.isProcessing = false;
    this.requestQueue = [];
    this.isProcessingRequest = false;
    this.operationLock = null;
    this.name = "Oisy";
    this.logo = _OisyAdapter.logo;
    this.url = "https://oisy.com/sign";
    this.url = "https://oisy.com/sign";
    this.name = "Oisy";
    this.logo = _OisyAdapter.logo;
  }
  async isAvailable() {
    return true;
  }
  async isConnected() {
    return this.agent !== null && this.signer !== null;
  }
  async getPrincipal() {
    if (!this.signerAgent) {
      throw new Error("Not connected");
    }
    return this.signerAgent.getPrincipal();
  }
  async getAccountId() {
    const principal = await this.getPrincipal();
    return getAccountIdentifier(principal.toText()) || "";
  }
  async connect(config) {
    if (this.connectionPromise) {
      return this.connectionPromise.then(async () => ({
        owner: await this.getPrincipal(),
        subaccount: principalToSubAccount(await this.getPrincipal()),
        hasDelegation: false
      }));
    }
    const releaseLock = await this.acquireLock();
    try {
      await this.disconnect();
      this.isProcessing = true;
      this.config = config;
      this.connectionPromise = (async () => {
        this.transport = new PostMessageTransport({
          url: this.url,
          ..._OisyAdapter.TRANSPORT_CONFIG
        });
        this.signer = new Signer({ transport: this.transport });
        await new Promise((resolve) => setTimeout(resolve, 500));
        console.debug("[Oisy] Permissions:", await this.signer.permissions());
        const accounts = await this.signer.accounts();
        if (!accounts || accounts.length === 0) {
          throw new Error("No accounts returned from Oisy");
        }
        const principal2 = accounts[0].owner;
        if (principal2.isAnonymous()) {
          throw new Error("Failed to authenticate with Oisy - got anonymous principal");
        }
        this.signerAgent = SignerAgent.createSync({
          signer: this.signer,
          account: principal2
        });
        this.agent = HttpAgent.createSync({
          host: config.hostUrl || "https://icp0.io",
          verifyQuerySignatures: config.verifyQuerySignatures
        });
        if (config.fetchRootKeys) {
          await this.agent.fetchRootKey();
          await this.signerAgent.fetchRootKey();
        }
        this.accounts = accounts.map((acc) => ({
          id: acc.owner.toText(),
          displayName: `Oisy Account ${acc.owner.toText().slice(0, 8)}...`,
          principal: acc.owner.toText(),
          subaccount: new Uint8Array(principalToSubAccount(acc.owner)),
          type: "SESSION"
          /* SESSION */
        }));
      })();
      await this.connectionPromise;
      const principal = await this.getPrincipal();
      return {
        owner: principal,
        subaccount: principalToSubAccount(principal),
        hasDelegation: false
      };
    } catch (error) {
      console.error("[Oisy] Connection error:", error);
      await this.disconnect();
      throw error;
    } finally {
      this.isProcessing = false;
      this.connectionPromise = null;
      releaseLock();
    }
  }
  async createActor(canisterId, idlFactory, options = {
    requiresSigning: true,
    anon: false
  }) {
    const { requiresSigning = true, anon = false } = options;
    if (anon === true) {
      return this.createAnonymousActor(canisterId, idlFactory);
    }
    if (!this.signerAgent) {
      throw new Error("No signer agent available. Please connect first.");
    }
    const releaseLock = await this.acquireLock();
    try {
      const actor = Actor.createActor(idlFactory, {
        agent: this.signerAgent,
        canisterId
      });
      return actor;
    } finally {
      releaseLock();
    }
  }
  async createAnonymousActor(canisterId, idl) {
    var _a2, _b;
    return Actor.createActor(idl, {
      agent: HttpAgent.createSync({
        host: ((_a2 = this.config) == null ? void 0 : _a2.hostUrl) || "https://icp0.io",
        verifyQuerySignatures: (_b = this.config) == null ? void 0 : _b.verifyQuerySignatures
      }),
      canisterId
    });
  }
  async disconnect() {
    this.requestQueue = [];
    this.isProcessingRequest = false;
    if (this.isProcessing) {
      await new Promise((resolve) => setTimeout(resolve, 1e3));
    }
    if (this.signer) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 200));
        this.signer.closeChannel();
      } catch (error) {
        console.debug("[Oisy] Error cleaning up signer:", error);
      }
      this.signer = null;
    }
    if (this.transport) {
      this.transport = null;
    }
    this.agent = null;
    this.signerAgent = null;
    this.accounts = [];
    this.connectionPromise = null;
    this.isProcessing = false;
  }
  getAccounts() {
    return this.accounts;
  }
  async processQueue() {
    if (this.isProcessingRequest) return;
    while (this.requestQueue.length > 0) {
      this.isProcessingRequest = true;
      const request = this.requestQueue.shift();
      if (request) {
        try {
          await Promise.race([
            request(),
            new Promise(
              (_, reject) => setTimeout(() => reject(new Error("Request timeout")), _OisyAdapter.REQUEST_TIMEOUT)
            )
          ]);
          await new Promise((resolve) => setTimeout(resolve, 100));
        } catch (error) {
          console.error("[Oisy] Error processing request:", error);
        }
      }
    }
    this.isProcessingRequest = false;
  }
  async acquireLock() {
    while (this.operationLock) {
      try {
        await this.operationLock;
      } catch {
      }
    }
    let releaseLock;
    this.operationLock = new Promise((resolve) => {
      releaseLock = () => {
        this.operationLock = null;
        resolve();
      };
    });
    setTimeout(() => {
      if (this.operationLock) {
        console.warn("[Oisy] Operation lock timeout - forcing release");
        releaseLock();
      }
    }, _OisyAdapter.OPERATION_LOCK_TIMEOUT);
    return releaseLock;
  }
};
_OisyAdapter.TRANSPORT_CONFIG = {
  windowOpenerFeatures: "width=525,height=705",
  establishTimeout: 45e3,
  disconnectTimeout: 35e3
};
_OisyAdapter.REQUEST_TIMEOUT = 3e4;
_OisyAdapter.OPERATION_LOCK_TIMEOUT = 1e4;
_OisyAdapter.logo = oisyLogo;
let OisyAdapter = _OisyAdapter;
const walletList = [
  {
    id: "nfid",
    name: "NFID",
    icon: NFIDAdapter.logo,
    adapter: NFIDAdapter
  },
  {
    id: "nns",
    name: "Internet Identity",
    icon: NNSAdapter.logo,
    adapter: NNSAdapter
  },
  {
    id: "plug",
    name: "Plug Wallet",
    icon: PlugAdapter.logo,
    adapter: PlugAdapter
  },
  // {
  //   id: "astrox",
  //   name: "AstroX",
  //   icon: AstroXAdapter.logo,
  //   adapter: AstroXAdapter,
  // },
  {
    id: "oisy",
    name: "Oisy",
    icon: OisyAdapter.logo,
    adapter: OisyAdapter
  }
  // {
  //   id: "stoic",
  //   name: "Stoic",
  //   icon: StoicAdapter.logo,
  //   adapter: StoicAdapter,
  // }
];
class PNP {
  constructor(config = {}) {
    this.account = null;
    this.activeWallet = null;
    this.provider = null;
    this.actorCache = /* @__PURE__ */ new Map();
    this.isDev = true;
    this.fetchRootKeys = false;
    this.isConnecting = false;
    this.config = {
      hostUrl: config.hostUrl || "http://localhost:4943",
      identityProvider: config.identityProvider || "https://identity.ic0.app",
      localStorageKey: config.localStorageKey || "pnpConnectedWallet",
      timeout: config.timeout || 1e3 * 60 * 60 * 24,
      // 1 day in milliseconds
      verifyQuerySignatures: config.verifyQuerySignatures ?? false,
      delegationTimeout: config.delegationTimeout || BigInt(24 * 60 * 60 * 1e3 * 1e3 * 1e3),
      delegationTargets: config.delegationTargets || [],
      isDev: config.isDev ?? true,
      derivationOrigin: config.derivationOrigin || "https://identity.ic0.app",
      ...config
    };
  }
  async prepareConnection(walletId) {
    const adapter = walletList.find((w) => w.id === walletId);
    if (!adapter) {
      throw new Error(`Wallet ${walletId} not found`);
    }
    const instance = new adapter.adapter();
    const isAvailable = await instance.isAvailable();
    if (!isAvailable) {
      throw new Error(`Wallet ${walletId} is not available`);
    }
    return {
      connect: () => {
        return new Promise((resolve, reject) => {
          if ("establishChannel" in instance) {
            instance.establishChannel().then(() => {
              this.provider = instance;
              return instance.connect(this.config);
            }).then((account) => {
              this.account = account;
              this.activeWallet = adapter;
              this.provider = instance;
              localStorage.setItem(this.config.localStorageKey, walletId);
              resolve(account);
            }).catch(reject);
          } else {
            instance.connect(this.config).then((account) => {
              this.account = account;
              this.activeWallet = adapter;
              this.provider = instance;
              localStorage.setItem(this.config.localStorageKey, walletId);
              resolve(account);
            }).catch(reject);
          }
        });
      }
    };
  }
  async connect(walletId) {
    if (this.isConnecting) {
      throw new Error("Connection in progress");
    }
    this.isConnecting = true;
    try {
      const prepared = await this.prepareConnection(walletId);
      return await prepared.connect();
    } finally {
      this.isConnecting = false;
    }
  }
  getAdapter(walletId) {
    const wallet = walletList.find((w) => w.id === walletId);
    if (!wallet) {
      throw new Error(`Wallet ${walletId} not found`);
    }
    return new wallet.adapter();
  }
  async disconnect() {
    if (this.provider) {
      await this.provider.disconnect();
    }
    this.account = null;
    this.provider = null;
    this.activeWallet = null;
    this.actorCache.clear();
    localStorage.removeItem(this.config.localStorageKey);
  }
  async getActor(canisterId, idl, options) {
    const { anon = false, requiresSigning = true } = options || {};
    let actor;
    if (anon) {
      actor = await this.createAnonymousActor(canisterId, idl);
    } else {
      console.log("Creating actor with provider");
      actor = await this.provider.createActor(canisterId, idl, {
        requiresSigning
      });
    }
    return actor;
  }
  async createAnonymousActor(canisterId, idl, options) {
    const agent = HttpAgent.createSync({
      host: this.config.hostUrl,
      verifyQuerySignatures: this.config.verifyQuerySignatures
    });
    if (this.fetchRootKeys) {
      await agent.fetchRootKey();
    }
    const interfaceFactory = typeof idl === "function" ? idl : idl._idlFactory || idl.idlFactory;
    return Actor.createActor(interfaceFactory, { agent, canisterId });
  }
  isWalletConnected() {
    return !!this.activeWallet;
  }
}
const walletsList = walletList;
const createPNP = (config = {}) => new PNP(config);
class BatchTransact {
  constructor(transactionLlist = {}, _adapterObj) {
    this.state = "idle";
    this.transactionLlist = {};
    this.stepsList = [];
    this.completed = [];
    this.activeStep = "";
    this.failedSteps = [];
    this.transactionResults = {};
    this.trxArray = [];
    this._info = false;
    this._adapterObj = false;
    if (!_adapterObj || !_adapterObj.provider) return;
    Object.entries(transactionLlist).forEach(([key, value]) => {
      if (typeof value === "object") {
        this.transactionLlist[key] = value;
      }
    });
    if (Object.keys(this.transactionLlist).length > 0) {
      this.stepsList = Object.keys(this.transactionLlist);
      this._adapterObj = _adapterObj;
    }
  }
  _prepareTrxArry() {
    this.trxArray = [];
    let tempArray = [];
    Object.values(this.transactionLlist).forEach((x) => {
      tempArray.push(x);
      if (x.updateNextStep) {
        this.trxArray.push(tempArray);
        tempArray = [];
      }
    });
    if (tempArray.length > 0) this.trxArray.push(tempArray);
    let trxIndex = 0;
    this.trxArray.forEach((subArray, i) => {
      subArray.forEach((el, j) => {
        this.trxArray[i][j].stepIndex = trxIndex;
        this.trxArray[i][j].state = "idle";
        this.trxArray[i][j].onSuccessMain = async (data, _this) => {
          const stepIndex = _this.stepIndex;
          const onSucessCall = el.onSuccess;
          const onFailCall = el.onFail;
          if (data.err || data.Err || data.ERR) {
            this.failedSteps.push(this.stepsList[stepIndex]);
            this.transactionResults[this.stepsList[stepIndex]] = data;
            this.state = "error";
            _this.state = "error";
            if (onFailCall) await onFailCall(data);
            return false;
          } else {
            this.completed.push(this.stepsList[stepIndex]);
            this.activeStep = this.stepsList[stepIndex + 1];
            this.transactionResults[this.stepsList[stepIndex]] = data;
            _this.state = "done";
          }
          if (typeof _this.updateNextStep === "function" && this.trxArray[i + 1]) {
            await _this.updateNextStep(data, this.trxArray[i + 1][0]);
          }
          if (onSucessCall) await onSucessCall(data);
        };
        this.trxArray[i][j].onFailMain = async (err, _this) => {
          const onFailCall = el.onFail;
          const stepIndex = _this.stepIndex;
          console.error(`error in  ${this.stepsList[stepIndex]} `, this.trxArray[i][j]);
          console.error(err);
          this.failedSteps.push(this.stepsList[stepIndex]);
          this.activeStep = this.stepsList[stepIndex];
          this.state = "error";
          _this.state = "error";
          if (onFailCall) await onFailCall(err);
          return false;
        };
        trxIndex++;
      });
    });
    return this.trxArray;
  }
  async retryExecute() {
    this.state = "idle";
    this.failedSteps = [];
    await this.execute();
  }
  async execute() {
    if (!this._adapterObj || !this._adapterObj.provider) {
      throw new Error("Provider not found");
    }
    this.state = "processing";
    await this._processBatch();
  }
  async _processBatch() {
    if (this.trxArray.length === 0) {
      this._prepareTrxArry();
    }
    for (const batch of this.trxArray) {
      for (const trx of batch) {
        if (trx.state === "error") continue;
        await this._adapterObj.provider.processTransaction(trx);
      }
    }
  }
}
const HOSTURL = "https://icp0.io";
const NNS_CANISTER_ID = "ryjl3-tyaaa-aaaaa-aaaba-cai";
const principalIdFromHex = getAccountIdentifier;
let PNPAdapter = null;
function getPNPAdapter() {
  if (!PNPAdapter) {
    PNPAdapter = createPNP({
      whitelist: [NNS_CANISTER_ID],
      host: HOSTURL,
      identityProvider: ""
    });
  }
  return PNPAdapter;
}
if (typeof window !== "undefined") {
  window.pnp = {
    PNP: createPNP,
    BatchTransact,
    nns: { AnonymousIdentity, Principal },
    getPNPAdapter
  };
}
export {
  AnonymousIdentity2 as AnonymousIdentity,
  BatchTransact,
  HOSTURL,
  NNS_CANISTER_ID,
  Principal2 as Principal,
  createPNP,
  principalIdFromHex,
  walletsList
};
//# sourceMappingURL=plug-n-play.es.js.map
