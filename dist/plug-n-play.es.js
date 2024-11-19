import { HttpAgent as Y0, Actor as ae, Cbor as Wr, Expiry as Ir, SubmitRequestType as zr, compare as Vr, requestIdOf as Gr, Certificate as kt, LookupStatus as Se, lookupResultToBuffer as Kr, AnonymousIdentity as Bt } from "@dfinity/agent";
import { AnonymousIdentity as Oi } from "@dfinity/agent";
import { Principal as W0 } from "@dfinity/principal";
import { Principal as Hi } from "@dfinity/principal";
import { AuthClient as jr } from "@dfinity/auth-client";
import { DelegationChain as gr, Delegation as Qr, Ed25519KeyIdentity as Xr, DelegationIdentity as Zr } from "@dfinity/identity";
import { lebDecode as Yr, PipeArrayBuffer as Jr } from "@dfinity/candid";
var $r = ((t) => (t[t.FractionalMoreThan8Decimals = 0] = "FractionalMoreThan8Decimals", t[t.InvalidFormat = 1] = "InvalidFormat", t[t.FractionalTooManyDecimals = 2] = "FractionalTooManyDecimals", t))($r || {});
BigInt(1e8);
var Nt = "abcdefghijklmnopqrstuvwxyz234567", de = /* @__PURE__ */ Object.create(null);
for (let t = 0; t < Nt.length; t++) de[Nt[t]] = t;
de[0] = de.o;
de[1] = de.i;
var vt = (t) => {
  let n = t.toUint8Array(), i = new Uint8Array(32);
  return i[0] = n.length, i.set(n, 1), i;
};
const Lr = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.1.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20880%20640'%20style='enable-background:new%200%200%20880%20640;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:none;}%20.st1{fill:url(%23SVGID_1_);}%20.st2{fill:url(%23SVGID_2_);}%20.st3{fill:%2329ABE2;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M671.99,320c0-45.09-37.63-81.78-83.89-81.78c-12.26,0-33.8,6.07-66.78,34.97%20c-17.73,15.54-33.17,32.87-43.85,45.55c17.99,19.05,37.47,39.23,46.31,46.89c3.63,3.14,27.63,22.81,56.09,35.14%20c3.34,0.74,6.06,1,8.16,1C634.34,401.5,671.99,364.84,671.99,320z'/%3e%3cpath%20class='st0'%20d='M522.89,366.54c27.22,23.59,45.72,31.74,56.98,34.24c3.34,0.74,6.06,1,8.16,1%20c46.3-0.28,83.95-36.94,83.95-81.78c0-45.09-37.63-81.78-83.89-81.78c-12.26,0-33.8,6.07-66.78,34.97%20c-17.73,15.54-33.17,32.87-43.85,45.55C477.21,319.05,504.3,350.43,522.89,366.54z'/%3e%3clinearGradient%20id='SVGID_1_'%20gradientUnits='userSpaceOnUse'%20x1='515.2743'%20y1='201.9346'%20x2='705.4849'%20y2='398.9034'%3e%3cstop%20offset='0.21'%20style='stop-color:%23F15A24'/%3e%3cstop%20offset='0.6841'%20style='stop-color:%23FBB03B'/%3e%3c/linearGradient%3e%3cpath%20class='st1'%20d='M588.1,184c-32.16,0-67.28,16.49-104.38,49c-17.57,15.4-32.8,31.88-44.23,45.1c0.02,0.02,0.04,0.04,0.06,0.07%20c0.03-0.04,0.05-0.06,0.05-0.06s18.03,19.63,37.87,40.64c10.68-12.69,26.11-30.01,43.85-45.55c32.98-28.91,54.52-34.97,66.78-34.97%20c46.26,0,83.89,36.69,83.89,81.78c0,44.84-37.65,81.5-83.95,81.78c-2.11,0-4.82-0.26-8.16-1c13.49,5.84,27.99,10.04,41.8,10.04%20c84.79,0,101.36-55.33,102.49-59.25c2.51-10.14,3.84-20.7,3.84-31.56C728,245.01,665.24,184,588.1,184z'/%3e%3cpath%20class='st0'%20d='M208.01,320c0,45.09,37.63,81.78,83.89,81.78c12.26,0,33.8-6.07,66.78-34.97%20c17.73-15.54,33.17-32.87,43.85-45.55c-17.99-19.05-37.47-39.23-46.31-46.89c-3.63-3.14-27.63-22.81-56.09-35.14%20c-3.34-0.74-6.06-1-8.16-1C245.66,238.5,208.01,275.16,208.01,320z'/%3e%3cpath%20class='st0'%20d='M357.11,273.46c-27.22-23.59-45.72-31.74-56.98-34.24c-3.34-0.74-6.06-1-8.16-1%20c-46.3,0.28-83.95,36.94-83.95,81.78c0,45.09,37.63,81.78,83.89,81.78c12.26,0,33.8-6.07,66.78-34.97%20c17.73-15.54,33.17-32.87,43.85-45.55c0.26-0.3,0.52-0.62,0.78-0.92C392.12,307.51,375.7,289.57,357.11,273.46z'/%3e%3clinearGradient%20id='SVGID_2_'%20gradientUnits='userSpaceOnUse'%20x1='-877.3035'%20y1='-1122.6819'%20x2='-687.0928'%20y2='-925.7131'%20gradientTransform='matrix(-1%200%200%20-1%20-512.5778%20-684.6164)'%3e%3cstop%20offset='0.21'%20style='stop-color:%23ED1E79'/%3e%3cstop%20offset='0.8929'%20style='stop-color:%23522785'/%3e%3c/linearGradient%3e%3cpath%20class='st2'%20d='M291.9,456c32.16,0,67.28-16.49,104.38-49c17.57-15.4,32.8-31.88,44.23-45.1c-0.02-0.02-0.04-0.04-0.06-0.07%20c-0.03,0.04-0.05,0.06-0.05,0.06s-18.03-19.63-37.87-40.64c-10.68,12.69-26.11,30.01-43.85,45.55%20c-32.98,28.91-54.52,34.97-66.78,34.97c-46.26,0-83.89-36.69-83.89-81.78c0-44.84,37.65-81.5,83.95-81.78c2.11,0,4.82,0.26,8.16,1%20c-13.49-5.84-27.99-10.04-41.8-10.04c-84.79,0-101.36,55.33-102.49,59.25c-2.51,10.14-3.84,20.7-3.84,31.56%20C152,394.99,214.76,456,291.9,456z'/%3e%3cpath%20class='st3'%20d='M621.52,409.45c-43.41-1.07-88.53-35.3-97.74-43.81c-23.78-21.99-78.66-81.53-82.97-86.2%20C400.58,234.4,346.07,184,291.9,184h-0.07h-0.07c-65.85,0.33-121.19,44.92-135.91,104.44c1.13-3.92,22.76-60.3,102.42-58.34%20c43.41,1.07,88.75,35.76,97.95,44.27c23.78,21.99,78.68,81.54,82.97,86.21C479.42,405.61,533.93,456,588.1,456h0.07h0.07%20c65.85-0.33,121.19-44.92,135.91-104.44C723.03,355.48,701.18,411.41,621.52,409.45z'/%3e%3c/g%3e%3c/svg%3e", me = class me {
  constructor() {
    this.name = "Internet Identity", this.logo = me.logo, this.authClient = null, this.agent = null, this.url = "https://identity.ic0.app";
  }
  // Helper method to initialize the AuthClient
  async initAuthClient() {
    var n, i;
    this.authClient || (this.authClient = await jr.create({
      idleOptions: {
        idleTimeout: this.config.timeout || 1e3 * 60 * 60 * 24 * 7,
        // 7 days
        disableDefaultIdleCallback: !0
        // Disable default reload behavior
      }
    }), (i = (n = this.authClient.idleManager) == null ? void 0 : n.registerCallback) == null || i.call(n, () => this.refreshLogin()));
  }
  // Helper method to initialize the HttpAgent
  async initAgent(n, i) {
    if (this.agent = Y0.createSync({
      identity: n,
      host: i
    }), i.includes("localhost") || i.includes("127.0.0.1"))
      try {
        await this.agent.fetchRootKey();
      } catch (a) {
        console.warn("Unable to fetch root key. Check to ensure that your local replica is running"), console.error(a);
      }
  }
  // Checks if the wallet is available
  async isAvailable() {
    return !0;
  }
  // Connects to the wallet using the provided configuration
  async connect(n) {
    return this.config = n, await this.initAuthClient(), await this.authClient.isAuthenticated() ? this._continueLogin(n.hostUrl || this.url) : new Promise((a, f) => {
      this.authClient.login({
        identityProvider: n.identityProvider || this.url,
        onSuccess: async () => {
          try {
            const E = await this._continueLogin(n.hostUrl || this.url);
            a(E);
          } catch (E) {
            f(E);
          }
        },
        onError: (E) => {
          f(new Error("Authentication failed: " + E));
        }
      });
    });
  }
  async _continueLogin(n) {
    try {
      const i = this.authClient.getIdentity(), a = i.getPrincipal();
      return await this.initAgent(i, n), {
        owner: a,
        subaccount: vt(a)
      };
    } catch (i) {
      throw console.error("Error during _continueLogin:", i), i;
    }
  }
  // Check if the wallet is connected
  async isConnected() {
    return this.authClient ? this.authClient.isAuthenticated() : !1;
  }
  // Create an actor for interacting with a canister
  async createActor(n, i) {
    if (!this.agent)
      throw new Error("Agent is not initialized. Ensure the wallet is connected.");
    return ae.createActor(i, {
      agent: this.agent,
      canisterId: n
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
    const n = this.authClient.getIdentity().getPrincipal(), i = vt(n);
    if (i)
      return i.toString() || "";
  }
  // Refresh login when session is about to expire
  async refreshLogin() {
    try {
      await this.connect(this.config);
    } catch (n) {
      console.error("Failed to refresh login:", n), await this.disconnect();
    }
  }
  // Disconnects from the wallet
  async disconnect() {
    this.authClient && (await this.authClient.logout(), this.agent = null, this.authClient = null, this.config = {});
  }
};
me.logo = Lr;
let Ce = me;
const en = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAggICAgICAoICAgICAgICAgICAgICAgICQgICAgICQgICAgICAkICAgICAoICAgICgkKCAgLDQsIDAgICggBAwQEBgUGCgYGCg0OCw0NDg8NDg8PDQ0ODRANDQ4PDg0QDQ0ODQ4PEA4ODw0ODg4QDQ0PDQ8ODxAOEA8ODQ0NDf/AABEIAIAAgAMBEQACEQEDEQH/xAAeAAEAAgMAAwEBAAAAAAAAAAAABwgFBgkDBAoCAf/EAE8QAAIBAwEEBAcJDAYLAAAAAAECAwAEEQUGBxIhCBMxQQkUIjJRYYEkNHFzkZKhs7QVI0JSdHWChbLB0dMzNTZTctQXJSZDYmODk5Sio//EAB0BAQABBQEBAQAAAAAAAAAAAAAHAwQFBggCAQn/xABBEQABAwIDBAUIBwgCAwAAAAABAAIDBBEFITEGEkFRMmFxgZEHEyKhscHR0iMkQoKSsvEWM1JicnPh8KLCFBVD/9oADAMBAAIRAxEAPwDqnREoiURKIlEUdar0kNnYJHhn1jRYZomKSRS6pYxyRuOTI8bzhkYHkVYAivtl5LgNSts2U20s7+EXFjc217ASVE9pPFcwll5Mokhd0JXvHFkV8X0G6zNF9SiLGbR7T21nC9xeTwWtvHgyT3MscEKAnA45ZWVFySAOJhzNEWj2vSb2akZUTWtDd3YKiJq1gzMxOAqqLgliTyAAJJr7ZeQ9p4hSUDXxel/aIlESiJREoiURKIlESiL5ntvD7uvfyu4+ueq40WKf0j2rq/4Gc/6h1T87n7Ha1Tdqryn6PeugVeFcpRFSzwtx/wBkv1nZfsz16bqqM3QK4qVWWNX01bL+9rf4iH6tat1mFlKIlESiJREoiURKIlESiL5nduvf15+VXH1z1XGixT+ke1dX/Az/ANQ6p+dz9jtapu1V5T9HvXQOvCuUoipZ4W/+yX6zsv2bivTdVRm6BXFSqyxq+mrZf3tbfEQ/VrVuswspREoiURKIlESiJREoiURfM7t17+vPyq4+ueq40WKf0j2rq/4Gf+odU/O5+x2tU3aq8p+j3roHXhXKURUs8Lf/AGS/Wdl+zcV6bqqM3QK4qVWWNX01bL+9rb4iH6tat1mFlKIlESiJREoiURKIoo3j735bW4a3gSMmMLxtIGOSyhwFCsuAFYcyTknsGOcdY5tNLRVBp4Gt9EDeLrnUXsACOBCibaTbGfD6s0lMxt2gbxdc5uANgARwIzufUtU/0+Xv4tv8yT+bWuftlXfwx+DvmWp/t/iX8EX4XfOqSar0D9DllkleS/DyyPI2LiEDidixwPFuQyeQq8i2oxaUXjiaexjz7CrR23dfe5EQ7j8ynzo26LFstaz2emkyRXFx4y5umEriTq0iwpjEIC8Ma8ipOc8+dVnbQY03N1P4xyD3qpH5Qa5osBD4O+dTFFv6vD+Db/Mf+bVodra9ps9jAetrh/2V23b7EHfZi/C7517Ue/G7P4MHzH/mVUG1tYfsx+B+ZXTdua8/Zi/C75lHm/8A0hNptP8AubqHElv18dxm1Ijk44w4UcUgmXh8s5HDk4HMc8127VVfJngfmVY7Z1zxYtj8HfMq5R+Df2fP+81L/wAmD/K1cN2oqzwZ4H4r03amrPBngfmV4tM3mTxxpGBERGioCVbJCgKM4cDOBzwBVUbR1J4M8D8Vkm7W1h4M8D8y2HZ3eRJJKiSKmHYKCgIIJOB2scjJGez91ZSixySWVscrRZxAyuLX04lZrDtpJZpmxTNbZxAuLggnIak8VIVbqpDSiJREoiURKIqpb89Z4NTuVAyR1PM9nO3iPt+irCDyeDF6p1fVS7sTiN1rOkd1oabuOTcwdA645Lkvb2v81jVQxoz+jzOn7pijWfUXbtY/AOQ+ipVw3ZLCMOAEFOy4+04b7u3edcjusFF0lVLJq492XsUCb6elvY6RI1siNe3i+fDG4SOI4ziWYq/C3Z5CJIw/C4eWa+I4nT030YG84cBkB2n3WUg7ObDVuLsFQ9wihOjnC5d1tbcXHWSByuos0Pwhr9YPGdO4YSRloLnikRe8hHiVZD6uOP4RWqOxJrz6TMuo/wCPgt8n8lwDPq9Vd3JzLA94cSPBytfu43n2mp263VlKJIzyYebJE/ekiecjDtweRGGBZSCac9DDVsvuhw5EA+oqIcRw+rwqcwVLS13A8HDm08R7NDY5LYtod48FhbyXV3KkUEQy7yH5FXHlM7HkqKGZicAE1H+I7JUkl3MG4ebdPw6eFlfYY+qqpmwQNL3HQe+/ADiTkOKq1tV4TcLKVsNOaWJTymubjqmf04hjifhHeCZSfSq9la3Fsgfty+DfiVOlJsU7cBqZgHfwtG8B94kX8FJm4nwgWn6pOlpewtplzIwSIvKJraVyQFTruCJo3Y+arx8J7OsJIBx1ds9PSt34zvtGuViO7O/j3KyxHZeekYZYXecaNbCzh3XNx2G/UrZwzVrjXLVGPWf2Wl90QfHRftrWYw931mL+tv5gs/hT/rcP9xn5gp7qYlPqURKIlESiJRFT3f64GrXeeX9B9mhqV8ENqGO/8353LkXbHDavEtpqimoonyyO83ZjGl7j9DHwaCe06BQJvk3heIaZeXUf9JHFiI45CWRlijbB7QrurEY5gGrqurBDC57dQMu05BSHhfkJx5sQrsWEcMTS0ujL96VwLgLWj3mi9+LwRyXMG4mZ3Z3JZ3ZmdmOWZmJLMSeZJJJJPaTUUOJJJOql/wA22IebYLBuQAyAAyGS/FeUUg7jt7M2j3yXEZLQuQlzBnyZYs8wAeQdPOjbkQwx5rMDe0k5hffhxHMf7otY2hwKPGaUwOtvjON3FrvgdCOXWAVn+kvvufWbzCFhY25K20fNeLuad1PPjk7gccCYXAJct9rZRLId3ojT4rG7JbOjBqb6QfTv/eHlyYDyHHmc9LWh+rFbyhFeHN3hZegbLrX0Nt5smpaHbvOxee1d7OaRjkyGII0bEnmWMEkXExJLMGPfUJ4xTimqnNbkD6QHK+vrBUI4/StpK1zWZNcA4DlfUeIPcrGbJy+6bf4+L6xap4a761F/W38wVLCXfXIP7jPzBWHqa10SlESiJREoiURUm6Rrn7s3g9Hi/wBlgqScIP1Rn3vzFdCbE4fSwYe2piiY2WUuMjw0Bz91zmt3nandaABc5AZKu+/jZ57rSbyJBl+BJQBzJ6mRJmAHeSqEAenFXFfGZIHNHK/gbrYcfp3VFBLG3WwP4SHewKZujJ0QNhNW0XT9Q+5/WzSQIt2HvtQ8m8jUJcqUW7VVHWhmUcKgxsjAAMKjN92my5bmpmseQRxWL6QXgztLvbzTX0eOGwsUE8eowxTyJOxZc29xFLOl2r9XJgSROFzGPIPExK+Q5WroQSLLWOmHszs7YWlrs3o+m6VLrl2kEdxeJY2wmtIFVTJcGTgLQz3HDxDBykRkfkTCWvKWB8zw1v8Av6LM0GGSVbwyJtydPee7isR0MtC0CC7uNm9otO0u4uGkM2l6jc2VuZLuN85t2mdS5fI4oVLsc9bFnMcQatXUr6d5B/Uc16xDC30chZI31ajmt23FeDI061v7yfWhBfW5nuhbQJIy28ltKYmtmMKJDLbTwETBwtxLGQyKo8lnbGlywbYQDmpK3mdCXd/ZWV1fXOnCKG1heZzHf6ghPCMqijxvBeRsRooHlMygAk0BJNgvsjY2NLnaBQh0HtINrpGGHB43dTXUa5JxGVjhUZPM5EHEpPapB760Ta3B5AxtezogbrhyFzZ3eTY93WucNosVZPiZhH2Ghvfm4juv6irU7Hy+6rb8oh+sWtCwx31qH+4z8wXvB3fXYP7rPzhWTqdV0qlESiJREoiURVF3/wCxM8mrzui+RKkD8bcl5RLEfWecZ5AH2Vkpdr8NwWlayqk+kztG0XeRc520A6yRexteyn7ZTEoY8Kja45tLxYa9Iu9601N3IA8tix9CgAfTnP0VpkvlQdK61PC1o/mJcfVugdma2N2Lb3RaO/NRpZbtdV0K6lu9npUMM7cdxplyfc8jelPKQKfQQ8TIPJDlMILaLaZtQbygDsGSjjFcBbUuMkNs87aW7DpbqOnBZrW99+2N1GYIrKy05mHC92ZFlMee1o166UA+gmKb2dtZqLEadxzN1gYNlp3O9IZdZbb1EnwWn7F7pPEDLPM73V7cEtcXkhLO7MeJgCxLBS3M8RLOQCTyULJeDz0j2/Quu62YOR7AOXZdTFguF09Cz0M3kZnTuA5e3jws3g7u4dQiVZMxyxnignTlJC/I5U8iQSBlcjOAQVIVhmqmmZO3dd3Hkr3E8JgxCPckGfB3EfEcx+qyGzG/3azToxbyQWurog4Y7l5OqnK9iiQ9bHxkDtLRlj3yP21qMuCyB3ojwt71ENXsTVNefNC45gi3gSCPYsVtImtbRSJ92pIrWxicSDTrQnEjjsMjB5M8jjiMrlefCsZbirKUGB53l8OJ9wXN/lTkxTZhkYdGd2W4Y/Ita5uoNibutm0GwI57rgpV04iIIqAIqBVRVGAoUYUADkAAAAPRWZrMMjmjdE4XaQQR1EWsuPhUv3/OEneve/G/NTBuwk666tcf3iufVweWfk4TXJwwqSgxoUTvsSAg82j0ge9vrUybKv8A/Lract/jBP3cz7FZ2pdXUCURKIlESiJRFoO9XZ/rFSYDmnkN/hJyvyNkfpVB3lRo3MpYsSj/APmdx/8AS8+ie52X3ltmA1fm3OiPHMdo19XsUT3Ok1AtLjfWt8ZOoW6Re0s2nQ2NytyLG1N/HBf3JsvHxBbyxTBJmtxNA7ItwIVfq5VfhcleMgI0t7IVNPiNSaecnNhLbGxuCPdc9yscUxCanhEkFrh2dxfIg++y2LT9gteuIEutMk2e1+0ceRPa3lxp7N/02i1OEN3FTdAqeRA54l8bPhucUpt1gH2WWFi2ulb+8jB7CR7d5ejNsdtMMiTZ+ZvXBqukyqf+7c27Y+FBV5DQVUJBbILjQ5g+9ZePbOIZujcOwg/Ba9d7q9pnb7zoNwoP99qekIB7UvJWx8Ck/DUl0OOSMi3akbzhxGV+3LX2rLt2+gDbGJ5PaB8V71r0fNpeB5r1dE0a1jUvLcXeoy3RiQdrMkVtbQAL3l7xAOXM91w/H3fYjHeb+4Kwm8oLzlDAAetxPqAb7VFOw+1Yl1C/S3v4tWsbXxeJbyCxNlBJcnrWuUgD3V280cadRiZpAHZm4RwhXkzGEVs05c+S1hYCw8fcsRimFz7eYHW0NY1gNgacgWDJmhxa65JPJrv5XEcVKYNbevysljfE90bwQ5pIIOoINiO4qfOjBoTM01y3mJ97j9bsAXx/hXA/TqJtpsOh/wDYx1g6fmy0j73ont6Q7F0D5KsPe8y1j+i30Wf1EAu8BYfeKsLWDXRSURKIlESiJRF4rq2DqyNzVgQR6jVnWUkVZA+mnF2PaWuHMEKpG8xuDm6hRBruitDIUbmO1W/GXuP8R3Gvz+2m2eqdnq51LLfd1jfwe3ge0aOHA9RBMiUtS2eMPb3jkVpm3mwNvqNpcWVyvFDcxtHIAcEZ5qynuZGCupwcMoPOsdhuNVGHzsqIj6TDcfA9RGR6ldSASMLHaFcvdu90es7K3zCCe6tgx9z3tpLLAlxGCSMtE4w4HnwOSVP4ylWbsLANrqfF4BLA6zx02X9Jp945O0PbcDSaikMLt1wy4Hms7pfTN2uhAC6nM4AxiWG1mPzpIGf28XOtzbibuatfMtPBeTU+mztfIMHUpEH/AC7azQ/OW34x7GFXAxAnivQgbyUW6lJrm0FysVzc3t+2Qc3M8skMCntchiY4lHPkqjixgAkgHb8OYaxo82M+PV2rPYdhclY8RwNz4ngOsn/erNW/3bbAxaZZxWkXMJlpHxgyStzeQjJxk8gMnhUKMnFSRTU7YIxG39TzU/4Zh7KCnbAzhqeZOp/3QKWNidnpbySKCEFnc49SqPOdj3Ko5k+zmSAcjLVMp4TLIch6+Q71+X/lN2Sm/biqoKRmUz2zDk0StDnuPINeX9trDMgK7WyOzEdnbxW8fmxrgnvdjzZz62bJ9XZ3VEdVUuqZXSv1Pq5DuU74RhcOF0kdHD0WC1+Ljxcesm5WZq0WYSiJREoiURKIlEWP1rREnThf9Fh2qfSP3jvrVdo9nKTH6U01UOtjx0mHmPeNCFd01U+nfvM7xzUX61s9JAcMMr3OPNP8D6j9NcSbS7H4hs/KRUN3oyfRlaCWO5X/AIT/ACnuJAut6payOoF2nPiOK17WtDhuY2huI454nGGjlRZEb4VYEcu0HHI1p0FRLTvEsLi1w0LSQR3hXjmhws4XChDaHoSaHOxaNbm1zzxbzAr8lwk+B6lIA9VSBS7f4tALOLH/ANTc/wDgWrHuw+I6XHZ/m69PSegtosZy5u7j/hmmVV/+EULf+1ZB3lGxJ+QDG9bWkn/kXD1L0yghbrc9/wALLMbe7t7Wxt4RaQxW8auUKxIF4uJchmPa7eT5zEk57a6H8ie1U1dXVVFO8u3oxILnQscGm3K4ePBSNs3I1jnwsAAtfwy96wmxO7661CTq7aMtgjjkPKKMHvd+wenhGWPcDXWdTVxUzd6Q9g4nuWyYli1NhsfnKh1uTdXO7B79BxKuPur3VQ6XDwJ98mfnNMRgsfxVH4KDuXJz2nJ7I+rq+Srdnk0aDl/lcz4zWMxLEH4h5trXlrWX+1uMJLQTxzcT+i3isYsUlESiJREoiURKIlESiL8SRBgQQCD2gjIPsqlLCyZhjlaHNIsQQCCORByXpri03BzUcbeaLHEyGNeEOGyBnGRjs9Hb2Vx55VdnKLCJ6eWhi3BKH74F927d21ho3InIWHUtzwmpfM1wkN7WtzWrVBF1nkpdF7+ibIQXsgiuE6yJfvnDkgFl5LnhIJHPszzqd/I0+WPHnSR3FoH3PK7mD9P8Kyq8QmoY/OU7t1xyvkcjra6lnTNKigRY4USKNRhURQqj2AAe3vrst73PO84knmVoE08k7zJK4ucdSTc+te3XhUEoiURKIlESiJREoiURKIlEWL2h0VZ4yrciPKVh2g/wPYRWnbVbN02P0Jpqi4I9Jjxq1wGvWCMiOPaAVfUdU6nk3m9hHNRBX54KRUoilHYrRFjiVxzaVVYk9wIyFHqH0/JXc3k32bpsLwyOrYS6SoYx73HgC24YOoXPWTnyA0TE6p0spYdGkgfFbFUtLDpREoiURKIlESiJREoiURKIlEX5Zcgj015c3eBHNfQbKHNT0aSJirKeR5HBww9INfnZjezGIYRUvp54nkA2a8NO68cCDmMxwvlodFJEFTHM0OaR2cQvDa6c7kKqsSfQD9Po+E1YUGCV9fMIKaB7nE26JsL8SbWA6yQFUkmZGN5xACmHS7Tq440PMqiqT6wAK/QvBqE4fQU9G43McTGE8y1oBPqUczyeckc8cSSvarMqglESiJREoiURKIlESiJREoiURKIlESiJREoiURKIlESiJRF//9k=", _e = class _e {
  constructor() {
    this.name = "Plug", this.logo = _e.logo, this.url = "https://plugwallet.ooo/", this.readyState = "NotDetected", this.initPlug();
  }
  // Initialize Plug and set readyState accordingly
  initPlug() {
    typeof window < "u" && window.ic && window.ic.plug ? (this.readyState = "Installed", window.ic.plug.isConnected().then((n) => {
      this.readyState = n ? "Connected" : "Installed";
    })) : this.readyState = "NotDetected";
  }
  // Check if the wallet is available
  async isAvailable() {
    return this.readyState !== "NotDetected";
  }
  // Check if the wallet is connected
  async isConnected() {
    var n, i;
    return ((i = (n = window.ic) == null ? void 0 : n.plug) == null ? void 0 : i.isConnected()) || !1;
  }
  // Connect to Plug wallet
  async connect(n) {
    if (this.readyState === "NotDetected")
      throw window.open(this.url, "_blank"), new Error("Plug wallet is not available");
    if (await window.ic.plug.isConnected())
      this.readyState = "Connected";
    else
      try {
        if (console.log("Connecting to Plug wallet...", n), !await window.ic.plug.requestConnect({
          whitelist: n.whitelist || [],
          host: n.hostUrl || "https://mainnet.dfinity.network",
          timeout: n.timeout || 1e3 * 60 * 60 * 24 * 7,
          onConnectionUpdate: this.handleConnectionUpdate.bind(this)
        }))
          throw new Error("User declined the connection request");
        this.readyState = "Connected";
      } catch (f) {
        throw console.error("Failed to connect to Plug wallet:", f), f;
      }
    const a = await this.getPrincipal();
    return await this.getAccountId(), {
      owner: a,
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
      return W0.fromText(window.ic.plug.principalId);
    throw new Error("Plug wallet is not available or principal ID is unavailable");
  }
  // Get the user's account ID
  async getAccountId() {
    if (window.ic && window.ic.plug && window.ic.plug.accountId)
      return window.ic.plug.accountId;
    throw new Error("Plug wallet is not available or account ID is unavailable");
  }
  // Create an actor for interacting with a canister
  async createActor(n, i) {
    var a;
    if (!((a = window.ic) != null && a.plug))
      throw new Error("Plug wallet is not available");
    return window.ic.plug.createActor({
      canisterId: n,
      interfaceFactory: i
    });
  }
  // Handle connection updates
  handleConnectionUpdate(n) {
    n.sessionExpired && (this.readyState = "Disconnected");
  }
};
_e.logo = en;
let ye = _e;
function tn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
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
function Ar(t) {
  if (Buffer.isBuffer(t))
    return t;
  if (typeof t == "number")
    return Buffer.alloc(t);
  if (typeof t == "string")
    return Buffer.from(t);
  throw new Error("input must be buffer, number, or string, received " + typeof t);
}
function nn(t) {
  const n = Ar(4);
  return n.writeInt32BE(t, 0), n;
}
function Et(t, n) {
  t = Ar(t), Buffer.isBuffer(n) && (n = n.readUInt32BE(0));
  let i = ~~n ^ -1;
  for (var a = 0; a < t.length; a++)
    i = rn[(i ^ t[a]) & 255] ^ i >>> 8;
  return i ^ -1;
}
function gt() {
  return nn(Et.apply(null, arguments));
}
gt.signed = function() {
  return Et.apply(null, arguments);
};
gt.unsigned = function() {
  return Et.apply(null, arguments) >>> 0;
};
var on = gt;
const an = /* @__PURE__ */ tn(on);
var L = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
function sn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function cn(t) {
  if (t.__esModule) return t;
  var n = t.default;
  if (typeof n == "function") {
    var i = function a() {
      return this instanceof a ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    i.prototype = n.prototype;
  } else i = {};
  return Object.defineProperty(i, "__esModule", { value: !0 }), Object.keys(t).forEach(function(a) {
    var f = Object.getOwnPropertyDescriptor(t, a);
    Object.defineProperty(i, a, f.get ? f : {
      enumerable: !0,
      get: function() {
        return t[a];
      }
    });
  }), i;
}
var ve = {}, be = {};
be.byteLength = un;
be.toByteArray = hn;
be.fromByteArray = vn;
var H0 = [], k0 = [], xn = typeof Uint8Array < "u" ? Uint8Array : Array, Re = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var ee = 0, fn = Re.length; ee < fn; ++ee)
  H0[ee] = Re[ee], k0[Re.charCodeAt(ee)] = ee;
k0[45] = 62;
k0[95] = 63;
function Cr(t) {
  var n = t.length;
  if (n % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var i = t.indexOf("=");
  i === -1 && (i = n);
  var a = i === n ? 0 : 4 - i % 4;
  return [i, a];
}
function un(t) {
  var n = Cr(t), i = n[0], a = n[1];
  return (i + a) * 3 / 4 - a;
}
function ln(t, n, i) {
  return (n + i) * 3 / 4 - i;
}
function hn(t) {
  var n, i = Cr(t), a = i[0], f = i[1], E = new xn(ln(t, a, f)), m = 0, s = f > 0 ? a - 4 : a, C;
  for (C = 0; C < s; C += 4)
    n = k0[t.charCodeAt(C)] << 18 | k0[t.charCodeAt(C + 1)] << 12 | k0[t.charCodeAt(C + 2)] << 6 | k0[t.charCodeAt(C + 3)], E[m++] = n >> 16 & 255, E[m++] = n >> 8 & 255, E[m++] = n & 255;
  return f === 2 && (n = k0[t.charCodeAt(C)] << 2 | k0[t.charCodeAt(C + 1)] >> 4, E[m++] = n & 255), f === 1 && (n = k0[t.charCodeAt(C)] << 10 | k0[t.charCodeAt(C + 1)] << 4 | k0[t.charCodeAt(C + 2)] >> 2, E[m++] = n >> 8 & 255, E[m++] = n & 255), E;
}
function dn(t) {
  return H0[t >> 18 & 63] + H0[t >> 12 & 63] + H0[t >> 6 & 63] + H0[t & 63];
}
function pn(t, n, i) {
  for (var a, f = [], E = n; E < i; E += 3)
    a = (t[E] << 16 & 16711680) + (t[E + 1] << 8 & 65280) + (t[E + 2] & 255), f.push(dn(a));
  return f.join("");
}
function vn(t) {
  for (var n, i = t.length, a = i % 3, f = [], E = 16383, m = 0, s = i - a; m < s; m += E)
    f.push(pn(t, m, m + E > s ? s : m + E));
  return a === 1 ? (n = t[i - 1], f.push(
    H0[n >> 2] + H0[n << 4 & 63] + "=="
  )) : a === 2 && (n = (t[i - 2] << 8) + t[i - 1], f.push(
    H0[n >> 10] + H0[n >> 4 & 63] + H0[n << 2 & 63] + "="
  )), f.join("");
}
var At = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
At.read = function(t, n, i, a, f) {
  var E, m, s = f * 8 - a - 1, C = (1 << s) - 1, h = C >> 1, v = -7, R = i ? f - 1 : 0, A = i ? -1 : 1, F = t[n + R];
  for (R += A, E = F & (1 << -v) - 1, F >>= -v, v += s; v > 0; E = E * 256 + t[n + R], R += A, v -= 8)
    ;
  for (m = E & (1 << -v) - 1, E >>= -v, v += a; v > 0; m = m * 256 + t[n + R], R += A, v -= 8)
    ;
  if (E === 0)
    E = 1 - h;
  else {
    if (E === C)
      return m ? NaN : (F ? -1 : 1) * (1 / 0);
    m = m + Math.pow(2, a), E = E - h;
  }
  return (F ? -1 : 1) * m * Math.pow(2, E - a);
};
At.write = function(t, n, i, a, f, E) {
  var m, s, C, h = E * 8 - f - 1, v = (1 << h) - 1, R = v >> 1, A = f === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, F = a ? 0 : E - 1, _ = a ? 1 : -1, k = n < 0 || n === 0 && 1 / n < 0 ? 1 : 0;
  for (n = Math.abs(n), isNaN(n) || n === 1 / 0 ? (s = isNaN(n) ? 1 : 0, m = v) : (m = Math.floor(Math.log(n) / Math.LN2), n * (C = Math.pow(2, -m)) < 1 && (m--, C *= 2), m + R >= 1 ? n += A / C : n += A * Math.pow(2, 1 - R), n * C >= 2 && (m++, C /= 2), m + R >= v ? (s = 0, m = v) : m + R >= 1 ? (s = (n * C - 1) * Math.pow(2, f), m = m + R) : (s = n * Math.pow(2, R - 1) * Math.pow(2, f), m = 0)); f >= 8; t[i + F] = s & 255, F += _, s /= 256, f -= 8)
    ;
  for (m = m << f | s, h += f; h > 0; t[i + F] = m & 255, F += _, m /= 256, h -= 8)
    ;
  t[i + F - _] |= k * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(t) {
  const n = be, i = At, a = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  t.Buffer = s, t.SlowBuffer = l, t.INSPECT_MAX_BYTES = 50;
  const f = 2147483647;
  t.kMaxLength = f, s.TYPED_ARRAY_SUPPORT = E(), !s.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function E() {
    try {
      const x = new Uint8Array(1), e = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(x, e), x.foo() === 42;
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
  function m(x) {
    if (x > f)
      throw new RangeError('The value "' + x + '" is invalid for option "size"');
    const e = new Uint8Array(x);
    return Object.setPrototypeOf(e, s.prototype), e;
  }
  function s(x, e, r) {
    if (typeof x == "number") {
      if (typeof e == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return R(x);
    }
    return C(x, e, r);
  }
  s.poolSize = 8192;
  function C(x, e, r) {
    if (typeof x == "string")
      return A(x, e);
    if (ArrayBuffer.isView(x))
      return _(x);
    if (x == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof x
      );
    if (x0(x, ArrayBuffer) || x && x0(x.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (x0(x, SharedArrayBuffer) || x && x0(x.buffer, SharedArrayBuffer)))
      return k(x, e, r);
    if (typeof x == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const B = x.valueOf && x.valueOf();
    if (B != null && B !== x)
      return s.from(B, e, r);
    const T = b(x);
    if (T) return T;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof x[Symbol.toPrimitive] == "function")
      return s.from(x[Symbol.toPrimitive]("string"), e, r);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof x
    );
  }
  s.from = function(x, e, r) {
    return C(x, e, r);
  }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array);
  function h(x) {
    if (typeof x != "number")
      throw new TypeError('"size" argument must be of type number');
    if (x < 0)
      throw new RangeError('The value "' + x + '" is invalid for option "size"');
  }
  function v(x, e, r) {
    return h(x), x <= 0 ? m(x) : e !== void 0 ? typeof r == "string" ? m(x).fill(e, r) : m(x).fill(e) : m(x);
  }
  s.alloc = function(x, e, r) {
    return v(x, e, r);
  };
  function R(x) {
    return h(x), m(x < 0 ? 0 : H(x) | 0);
  }
  s.allocUnsafe = function(x) {
    return R(x);
  }, s.allocUnsafeSlow = function(x) {
    return R(x);
  };
  function A(x, e) {
    if ((typeof e != "string" || e === "") && (e = "utf8"), !s.isEncoding(e))
      throw new TypeError("Unknown encoding: " + e);
    const r = w(x, e) | 0;
    let B = m(r);
    const T = B.write(x, e);
    return T !== r && (B = B.slice(0, T)), B;
  }
  function F(x) {
    const e = x.length < 0 ? 0 : H(x.length) | 0, r = m(e);
    for (let B = 0; B < e; B += 1)
      r[B] = x[B] & 255;
    return r;
  }
  function _(x) {
    if (x0(x, Uint8Array)) {
      const e = new Uint8Array(x);
      return k(e.buffer, e.byteOffset, e.byteLength);
    }
    return F(x);
  }
  function k(x, e, r) {
    if (e < 0 || x.byteLength < e)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (x.byteLength < e + (r || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let B;
    return e === void 0 && r === void 0 ? B = new Uint8Array(x) : r === void 0 ? B = new Uint8Array(x, e) : B = new Uint8Array(x, e, r), Object.setPrototypeOf(B, s.prototype), B;
  }
  function b(x) {
    if (s.isBuffer(x)) {
      const e = H(x.length) | 0, r = m(e);
      return r.length === 0 || x.copy(r, 0, 0, e), r;
    }
    if (x.length !== void 0)
      return typeof x.length != "number" || _0(x.length) ? m(0) : F(x);
    if (x.type === "Buffer" && Array.isArray(x.data))
      return F(x.data);
  }
  function H(x) {
    if (x >= f)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + f.toString(16) + " bytes");
    return x | 0;
  }
  function l(x) {
    return +x != x && (x = 0), s.alloc(+x);
  }
  s.isBuffer = function(e) {
    return e != null && e._isBuffer === !0 && e !== s.prototype;
  }, s.compare = function(e, r) {
    if (x0(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), x0(r, Uint8Array) && (r = s.from(r, r.offset, r.byteLength)), !s.isBuffer(e) || !s.isBuffer(r))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (e === r) return 0;
    let B = e.length, T = r.length;
    for (let I = 0, j = Math.min(B, T); I < j; ++I)
      if (e[I] !== r[I]) {
        B = e[I], T = r[I];
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
  }, s.concat = function(e, r) {
    if (!Array.isArray(e))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (e.length === 0)
      return s.alloc(0);
    let B;
    if (r === void 0)
      for (r = 0, B = 0; B < e.length; ++B)
        r += e[B].length;
    const T = s.allocUnsafe(r);
    let I = 0;
    for (B = 0; B < e.length; ++B) {
      let j = e[B];
      if (x0(j, Uint8Array))
        I + j.length > T.length ? (s.isBuffer(j) || (j = s.from(j)), j.copy(T, I)) : Uint8Array.prototype.set.call(
          T,
          j,
          I
        );
      else if (s.isBuffer(j))
        j.copy(T, I);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      I += j.length;
    }
    return T;
  };
  function w(x, e) {
    if (s.isBuffer(x))
      return x.length;
    if (ArrayBuffer.isView(x) || x0(x, ArrayBuffer))
      return x.byteLength;
    if (typeof x != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof x
      );
    const r = x.length, B = arguments.length > 2 && arguments[2] === !0;
    if (!B && r === 0) return 0;
    let T = !1;
    for (; ; )
      switch (e) {
        case "ascii":
        case "latin1":
        case "binary":
          return r;
        case "utf8":
        case "utf-8":
          return I0(x).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return r * 2;
        case "hex":
          return r >>> 1;
        case "base64":
          return z0(x).length;
        default:
          if (T)
            return B ? -1 : I0(x).length;
          e = ("" + e).toLowerCase(), T = !0;
      }
  }
  s.byteLength = w;
  function D(x, e, r) {
    let B = !1;
    if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((r === void 0 || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0, e >>>= 0, r <= e))
      return "";
    for (x || (x = "utf8"); ; )
      switch (x) {
        case "hex":
          return V(this, e, r);
        case "utf8":
        case "utf-8":
          return N(this, e, r);
        case "ascii":
          return U(this, e, r);
        case "latin1":
        case "binary":
          return P(this, e, r);
        case "base64":
          return g(this, e, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Q(this, e, r);
        default:
          if (B) throw new TypeError("Unknown encoding: " + x);
          x = (x + "").toLowerCase(), B = !0;
      }
  }
  s.prototype._isBuffer = !0;
  function M(x, e, r) {
    const B = x[e];
    x[e] = x[r], x[r] = B;
  }
  s.prototype.swap16 = function() {
    const e = this.length;
    if (e % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let r = 0; r < e; r += 2)
      M(this, r, r + 1);
    return this;
  }, s.prototype.swap32 = function() {
    const e = this.length;
    if (e % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let r = 0; r < e; r += 4)
      M(this, r, r + 3), M(this, r + 1, r + 2);
    return this;
  }, s.prototype.swap64 = function() {
    const e = this.length;
    if (e % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let r = 0; r < e; r += 8)
      M(this, r, r + 7), M(this, r + 1, r + 6), M(this, r + 2, r + 5), M(this, r + 3, r + 4);
    return this;
  }, s.prototype.toString = function() {
    const e = this.length;
    return e === 0 ? "" : arguments.length === 0 ? N(this, 0, e) : D.apply(this, arguments);
  }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
    if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
    return this === e ? !0 : s.compare(this, e) === 0;
  }, s.prototype.inspect = function() {
    let e = "";
    const r = t.INSPECT_MAX_BYTES;
    return e = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (e += " ... "), "<Buffer " + e + ">";
  }, a && (s.prototype[a] = s.prototype.inspect), s.prototype.compare = function(e, r, B, T, I) {
    if (x0(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e
      );
    if (r === void 0 && (r = 0), B === void 0 && (B = e ? e.length : 0), T === void 0 && (T = 0), I === void 0 && (I = this.length), r < 0 || B > e.length || T < 0 || I > this.length)
      throw new RangeError("out of range index");
    if (T >= I && r >= B)
      return 0;
    if (T >= I)
      return -1;
    if (r >= B)
      return 1;
    if (r >>>= 0, B >>>= 0, T >>>= 0, I >>>= 0, this === e) return 0;
    let j = I - T, $ = B - r;
    const s0 = Math.min(j, $), a0 = this.slice(T, I), c0 = e.slice(r, B);
    for (let i0 = 0; i0 < s0; ++i0)
      if (a0[i0] !== c0[i0]) {
        j = a0[i0], $ = c0[i0];
        break;
      }
    return j < $ ? -1 : $ < j ? 1 : 0;
  };
  function q(x, e, r, B, T) {
    if (x.length === 0) return -1;
    if (typeof r == "string" ? (B = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, _0(r) && (r = T ? 0 : x.length - 1), r < 0 && (r = x.length + r), r >= x.length) {
      if (T) return -1;
      r = x.length - 1;
    } else if (r < 0)
      if (T) r = 0;
      else return -1;
    if (typeof e == "string" && (e = s.from(e, B)), s.isBuffer(e))
      return e.length === 0 ? -1 : W(x, e, r, B, T);
    if (typeof e == "number")
      return e = e & 255, typeof Uint8Array.prototype.indexOf == "function" ? T ? Uint8Array.prototype.indexOf.call(x, e, r) : Uint8Array.prototype.lastIndexOf.call(x, e, r) : W(x, [e], r, B, T);
    throw new TypeError("val must be string, number or Buffer");
  }
  function W(x, e, r, B, T) {
    let I = 1, j = x.length, $ = e.length;
    if (B !== void 0 && (B = String(B).toLowerCase(), B === "ucs2" || B === "ucs-2" || B === "utf16le" || B === "utf-16le")) {
      if (x.length < 2 || e.length < 2)
        return -1;
      I = 2, j /= 2, $ /= 2, r /= 2;
    }
    function s0(c0, i0) {
      return I === 1 ? c0[i0] : c0.readUInt16BE(i0 * I);
    }
    let a0;
    if (T) {
      let c0 = -1;
      for (a0 = r; a0 < j; a0++)
        if (s0(x, a0) === s0(e, c0 === -1 ? 0 : a0 - c0)) {
          if (c0 === -1 && (c0 = a0), a0 - c0 + 1 === $) return c0 * I;
        } else
          c0 !== -1 && (a0 -= a0 - c0), c0 = -1;
    } else
      for (r + $ > j && (r = j - $), a0 = r; a0 >= 0; a0--) {
        let c0 = !0;
        for (let i0 = 0; i0 < $; i0++)
          if (s0(x, a0 + i0) !== s0(e, i0)) {
            c0 = !1;
            break;
          }
        if (c0) return a0;
      }
    return -1;
  }
  s.prototype.includes = function(e, r, B) {
    return this.indexOf(e, r, B) !== -1;
  }, s.prototype.indexOf = function(e, r, B) {
    return q(this, e, r, B, !0);
  }, s.prototype.lastIndexOf = function(e, r, B) {
    return q(this, e, r, B, !1);
  };
  function o(x, e, r, B) {
    r = Number(r) || 0;
    const T = x.length - r;
    B ? (B = Number(B), B > T && (B = T)) : B = T;
    const I = e.length;
    B > I / 2 && (B = I / 2);
    let j;
    for (j = 0; j < B; ++j) {
      const $ = parseInt(e.substr(j * 2, 2), 16);
      if (_0($)) return j;
      x[r + j] = $;
    }
    return j;
  }
  function u(x, e, r, B) {
    return B0(I0(e, x.length - r), x, r, B);
  }
  function c(x, e, r, B) {
    return B0(X0(e), x, r, B);
  }
  function d(x, e, r, B) {
    return B0(z0(e), x, r, B);
  }
  function p(x, e, r, B) {
    return B0(xe(e, x.length - r), x, r, B);
  }
  s.prototype.write = function(e, r, B, T) {
    if (r === void 0)
      T = "utf8", B = this.length, r = 0;
    else if (B === void 0 && typeof r == "string")
      T = r, B = this.length, r = 0;
    else if (isFinite(r))
      r = r >>> 0, isFinite(B) ? (B = B >>> 0, T === void 0 && (T = "utf8")) : (T = B, B = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const I = this.length - r;
    if ((B === void 0 || B > I) && (B = I), e.length > 0 && (B < 0 || r < 0) || r > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    T || (T = "utf8");
    let j = !1;
    for (; ; )
      switch (T) {
        case "hex":
          return o(this, e, r, B);
        case "utf8":
        case "utf-8":
          return u(this, e, r, B);
        case "ascii":
        case "latin1":
        case "binary":
          return c(this, e, r, B);
        case "base64":
          return d(this, e, r, B);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return p(this, e, r, B);
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
  function g(x, e, r) {
    return e === 0 && r === x.length ? n.fromByteArray(x) : n.fromByteArray(x.slice(e, r));
  }
  function N(x, e, r) {
    r = Math.min(x.length, r);
    const B = [];
    let T = e;
    for (; T < r; ) {
      const I = x[T];
      let j = null, $ = I > 239 ? 4 : I > 223 ? 3 : I > 191 ? 2 : 1;
      if (T + $ <= r) {
        let s0, a0, c0, i0;
        switch ($) {
          case 1:
            I < 128 && (j = I);
            break;
          case 2:
            s0 = x[T + 1], (s0 & 192) === 128 && (i0 = (I & 31) << 6 | s0 & 63, i0 > 127 && (j = i0));
            break;
          case 3:
            s0 = x[T + 1], a0 = x[T + 2], (s0 & 192) === 128 && (a0 & 192) === 128 && (i0 = (I & 15) << 12 | (s0 & 63) << 6 | a0 & 63, i0 > 2047 && (i0 < 55296 || i0 > 57343) && (j = i0));
            break;
          case 4:
            s0 = x[T + 1], a0 = x[T + 2], c0 = x[T + 3], (s0 & 192) === 128 && (a0 & 192) === 128 && (c0 & 192) === 128 && (i0 = (I & 15) << 18 | (s0 & 63) << 12 | (a0 & 63) << 6 | c0 & 63, i0 > 65535 && i0 < 1114112 && (j = i0));
        }
      }
      j === null ? (j = 65533, $ = 1) : j > 65535 && (j -= 65536, B.push(j >>> 10 & 1023 | 55296), j = 56320 | j & 1023), B.push(j), T += $;
    }
    return S(B);
  }
  const y = 4096;
  function S(x) {
    const e = x.length;
    if (e <= y)
      return String.fromCharCode.apply(String, x);
    let r = "", B = 0;
    for (; B < e; )
      r += String.fromCharCode.apply(
        String,
        x.slice(B, B += y)
      );
    return r;
  }
  function U(x, e, r) {
    let B = "";
    r = Math.min(x.length, r);
    for (let T = e; T < r; ++T)
      B += String.fromCharCode(x[T] & 127);
    return B;
  }
  function P(x, e, r) {
    let B = "";
    r = Math.min(x.length, r);
    for (let T = e; T < r; ++T)
      B += String.fromCharCode(x[T]);
    return B;
  }
  function V(x, e, r) {
    const B = x.length;
    (!e || e < 0) && (e = 0), (!r || r < 0 || r > B) && (r = B);
    let T = "";
    for (let I = e; I < r; ++I)
      T += L0[x[I]];
    return T;
  }
  function Q(x, e, r) {
    const B = x.slice(e, r);
    let T = "";
    for (let I = 0; I < B.length - 1; I += 2)
      T += String.fromCharCode(B[I] + B[I + 1] * 256);
    return T;
  }
  s.prototype.slice = function(e, r) {
    const B = this.length;
    e = ~~e, r = r === void 0 ? B : ~~r, e < 0 ? (e += B, e < 0 && (e = 0)) : e > B && (e = B), r < 0 ? (r += B, r < 0 && (r = 0)) : r > B && (r = B), r < e && (r = e);
    const T = this.subarray(e, r);
    return Object.setPrototypeOf(T, s.prototype), T;
  };
  function O(x, e, r) {
    if (x % 1 !== 0 || x < 0) throw new RangeError("offset is not uint");
    if (x + e > r) throw new RangeError("Trying to access beyond buffer length");
  }
  s.prototype.readUintLE = s.prototype.readUIntLE = function(e, r, B) {
    e = e >>> 0, r = r >>> 0, B || O(e, r, this.length);
    let T = this[e], I = 1, j = 0;
    for (; ++j < r && (I *= 256); )
      T += this[e + j] * I;
    return T;
  }, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, r, B) {
    e = e >>> 0, r = r >>> 0, B || O(e, r, this.length);
    let T = this[e + --r], I = 1;
    for (; r > 0 && (I *= 256); )
      T += this[e + --r] * I;
    return T;
  }, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, r) {
    return e = e >>> 0, r || O(e, 1, this.length), this[e];
  }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, r) {
    return e = e >>> 0, r || O(e, 2, this.length), this[e] | this[e + 1] << 8;
  }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, r) {
    return e = e >>> 0, r || O(e, 2, this.length), this[e] << 8 | this[e + 1];
  }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, r) {
    return e = e >>> 0, r || O(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
  }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, r) {
    return e = e >>> 0, r || O(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
  }, s.prototype.readBigUInt64LE = N0(function(e) {
    e = e >>> 0, n0(e, "offset");
    const r = this[e], B = this[e + 7];
    (r === void 0 || B === void 0) && e0(e, this.length - 8);
    const T = r + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, I = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + B * 2 ** 24;
    return BigInt(T) + (BigInt(I) << BigInt(32));
  }), s.prototype.readBigUInt64BE = N0(function(e) {
    e = e >>> 0, n0(e, "offset");
    const r = this[e], B = this[e + 7];
    (r === void 0 || B === void 0) && e0(e, this.length - 8);
    const T = r * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], I = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + B;
    return (BigInt(T) << BigInt(32)) + BigInt(I);
  }), s.prototype.readIntLE = function(e, r, B) {
    e = e >>> 0, r = r >>> 0, B || O(e, r, this.length);
    let T = this[e], I = 1, j = 0;
    for (; ++j < r && (I *= 256); )
      T += this[e + j] * I;
    return I *= 128, T >= I && (T -= Math.pow(2, 8 * r)), T;
  }, s.prototype.readIntBE = function(e, r, B) {
    e = e >>> 0, r = r >>> 0, B || O(e, r, this.length);
    let T = r, I = 1, j = this[e + --T];
    for (; T > 0 && (I *= 256); )
      j += this[e + --T] * I;
    return I *= 128, j >= I && (j -= Math.pow(2, 8 * r)), j;
  }, s.prototype.readInt8 = function(e, r) {
    return e = e >>> 0, r || O(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
  }, s.prototype.readInt16LE = function(e, r) {
    e = e >>> 0, r || O(e, 2, this.length);
    const B = this[e] | this[e + 1] << 8;
    return B & 32768 ? B | 4294901760 : B;
  }, s.prototype.readInt16BE = function(e, r) {
    e = e >>> 0, r || O(e, 2, this.length);
    const B = this[e + 1] | this[e] << 8;
    return B & 32768 ? B | 4294901760 : B;
  }, s.prototype.readInt32LE = function(e, r) {
    return e = e >>> 0, r || O(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
  }, s.prototype.readInt32BE = function(e, r) {
    return e = e >>> 0, r || O(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
  }, s.prototype.readBigInt64LE = N0(function(e) {
    e = e >>> 0, n0(e, "offset");
    const r = this[e], B = this[e + 7];
    (r === void 0 || B === void 0) && e0(e, this.length - 8);
    const T = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (B << 24);
    return (BigInt(T) << BigInt(32)) + BigInt(r + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
  }), s.prototype.readBigInt64BE = N0(function(e) {
    e = e >>> 0, n0(e, "offset");
    const r = this[e], B = this[e + 7];
    (r === void 0 || B === void 0) && e0(e, this.length - 8);
    const T = (r << 24) + // Overflow
    this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
    return (BigInt(T) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + B);
  }), s.prototype.readFloatLE = function(e, r) {
    return e = e >>> 0, r || O(e, 4, this.length), i.read(this, e, !0, 23, 4);
  }, s.prototype.readFloatBE = function(e, r) {
    return e = e >>> 0, r || O(e, 4, this.length), i.read(this, e, !1, 23, 4);
  }, s.prototype.readDoubleLE = function(e, r) {
    return e = e >>> 0, r || O(e, 8, this.length), i.read(this, e, !0, 52, 8);
  }, s.prototype.readDoubleBE = function(e, r) {
    return e = e >>> 0, r || O(e, 8, this.length), i.read(this, e, !1, 52, 8);
  };
  function z(x, e, r, B, T, I) {
    if (!s.isBuffer(x)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (e > T || e < I) throw new RangeError('"value" argument is out of bounds');
    if (r + B > x.length) throw new RangeError("Index out of range");
  }
  s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, r, B, T) {
    if (e = +e, r = r >>> 0, B = B >>> 0, !T) {
      const $ = Math.pow(2, 8 * B) - 1;
      z(this, e, r, B, $, 0);
    }
    let I = 1, j = 0;
    for (this[r] = e & 255; ++j < B && (I *= 256); )
      this[r + j] = e / I & 255;
    return r + B;
  }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, r, B, T) {
    if (e = +e, r = r >>> 0, B = B >>> 0, !T) {
      const $ = Math.pow(2, 8 * B) - 1;
      z(this, e, r, B, $, 0);
    }
    let I = B - 1, j = 1;
    for (this[r + I] = e & 255; --I >= 0 && (j *= 256); )
      this[r + I] = e / j & 255;
    return r + B;
  }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, r, B) {
    return e = +e, r = r >>> 0, B || z(this, e, r, 1, 255, 0), this[r] = e & 255, r + 1;
  }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, r, B) {
    return e = +e, r = r >>> 0, B || z(this, e, r, 2, 65535, 0), this[r] = e & 255, this[r + 1] = e >>> 8, r + 2;
  }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, r, B) {
    return e = +e, r = r >>> 0, B || z(this, e, r, 2, 65535, 0), this[r] = e >>> 8, this[r + 1] = e & 255, r + 2;
  }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, r, B) {
    return e = +e, r = r >>> 0, B || z(this, e, r, 4, 4294967295, 0), this[r + 3] = e >>> 24, this[r + 2] = e >>> 16, this[r + 1] = e >>> 8, this[r] = e & 255, r + 4;
  }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, r, B) {
    return e = +e, r = r >>> 0, B || z(this, e, r, 4, 4294967295, 0), this[r] = e >>> 24, this[r + 1] = e >>> 16, this[r + 2] = e >>> 8, this[r + 3] = e & 255, r + 4;
  };
  function K(x, e, r, B, T) {
    g0(e, B, T, x, r, 7);
    let I = Number(e & BigInt(4294967295));
    x[r++] = I, I = I >> 8, x[r++] = I, I = I >> 8, x[r++] = I, I = I >> 8, x[r++] = I;
    let j = Number(e >> BigInt(32) & BigInt(4294967295));
    return x[r++] = j, j = j >> 8, x[r++] = j, j = j >> 8, x[r++] = j, j = j >> 8, x[r++] = j, r;
  }
  function G(x, e, r, B, T) {
    g0(e, B, T, x, r, 7);
    let I = Number(e & BigInt(4294967295));
    x[r + 7] = I, I = I >> 8, x[r + 6] = I, I = I >> 8, x[r + 5] = I, I = I >> 8, x[r + 4] = I;
    let j = Number(e >> BigInt(32) & BigInt(4294967295));
    return x[r + 3] = j, j = j >> 8, x[r + 2] = j, j = j >> 8, x[r + 1] = j, j = j >> 8, x[r] = j, r + 8;
  }
  s.prototype.writeBigUInt64LE = N0(function(e, r = 0) {
    return K(this, e, r, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeBigUInt64BE = N0(function(e, r = 0) {
    return G(this, e, r, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeIntLE = function(e, r, B, T) {
    if (e = +e, r = r >>> 0, !T) {
      const s0 = Math.pow(2, 8 * B - 1);
      z(this, e, r, B, s0 - 1, -s0);
    }
    let I = 0, j = 1, $ = 0;
    for (this[r] = e & 255; ++I < B && (j *= 256); )
      e < 0 && $ === 0 && this[r + I - 1] !== 0 && ($ = 1), this[r + I] = (e / j >> 0) - $ & 255;
    return r + B;
  }, s.prototype.writeIntBE = function(e, r, B, T) {
    if (e = +e, r = r >>> 0, !T) {
      const s0 = Math.pow(2, 8 * B - 1);
      z(this, e, r, B, s0 - 1, -s0);
    }
    let I = B - 1, j = 1, $ = 0;
    for (this[r + I] = e & 255; --I >= 0 && (j *= 256); )
      e < 0 && $ === 0 && this[r + I + 1] !== 0 && ($ = 1), this[r + I] = (e / j >> 0) - $ & 255;
    return r + B;
  }, s.prototype.writeInt8 = function(e, r, B) {
    return e = +e, r = r >>> 0, B || z(this, e, r, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[r] = e & 255, r + 1;
  }, s.prototype.writeInt16LE = function(e, r, B) {
    return e = +e, r = r >>> 0, B || z(this, e, r, 2, 32767, -32768), this[r] = e & 255, this[r + 1] = e >>> 8, r + 2;
  }, s.prototype.writeInt16BE = function(e, r, B) {
    return e = +e, r = r >>> 0, B || z(this, e, r, 2, 32767, -32768), this[r] = e >>> 8, this[r + 1] = e & 255, r + 2;
  }, s.prototype.writeInt32LE = function(e, r, B) {
    return e = +e, r = r >>> 0, B || z(this, e, r, 4, 2147483647, -2147483648), this[r] = e & 255, this[r + 1] = e >>> 8, this[r + 2] = e >>> 16, this[r + 3] = e >>> 24, r + 4;
  }, s.prototype.writeInt32BE = function(e, r, B) {
    return e = +e, r = r >>> 0, B || z(this, e, r, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[r] = e >>> 24, this[r + 1] = e >>> 16, this[r + 2] = e >>> 8, this[r + 3] = e & 255, r + 4;
  }, s.prototype.writeBigInt64LE = N0(function(e, r = 0) {
    return K(this, e, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), s.prototype.writeBigInt64BE = N0(function(e, r = 0) {
    return G(this, e, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function X(x, e, r, B, T, I) {
    if (r + B > x.length) throw new RangeError("Index out of range");
    if (r < 0) throw new RangeError("Index out of range");
  }
  function Z(x, e, r, B, T) {
    return e = +e, r = r >>> 0, T || X(x, e, r, 4), i.write(x, e, r, B, 23, 4), r + 4;
  }
  s.prototype.writeFloatLE = function(e, r, B) {
    return Z(this, e, r, !0, B);
  }, s.prototype.writeFloatBE = function(e, r, B) {
    return Z(this, e, r, !1, B);
  };
  function r0(x, e, r, B, T) {
    return e = +e, r = r >>> 0, T || X(x, e, r, 8), i.write(x, e, r, B, 52, 8), r + 8;
  }
  s.prototype.writeDoubleLE = function(e, r, B) {
    return r0(this, e, r, !0, B);
  }, s.prototype.writeDoubleBE = function(e, r, B) {
    return r0(this, e, r, !1, B);
  }, s.prototype.copy = function(e, r, B, T) {
    if (!s.isBuffer(e)) throw new TypeError("argument should be a Buffer");
    if (B || (B = 0), !T && T !== 0 && (T = this.length), r >= e.length && (r = e.length), r || (r = 0), T > 0 && T < B && (T = B), T === B || e.length === 0 || this.length === 0) return 0;
    if (r < 0)
      throw new RangeError("targetStart out of bounds");
    if (B < 0 || B >= this.length) throw new RangeError("Index out of range");
    if (T < 0) throw new RangeError("sourceEnd out of bounds");
    T > this.length && (T = this.length), e.length - r < T - B && (T = e.length - r + B);
    const I = T - B;
    return this === e && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(r, B, T) : Uint8Array.prototype.set.call(
      e,
      this.subarray(B, T),
      r
    ), I;
  }, s.prototype.fill = function(e, r, B, T) {
    if (typeof e == "string") {
      if (typeof r == "string" ? (T = r, r = 0, B = this.length) : typeof B == "string" && (T = B, B = this.length), T !== void 0 && typeof T != "string")
        throw new TypeError("encoding must be a string");
      if (typeof T == "string" && !s.isEncoding(T))
        throw new TypeError("Unknown encoding: " + T);
      if (e.length === 1) {
        const j = e.charCodeAt(0);
        (T === "utf8" && j < 128 || T === "latin1") && (e = j);
      }
    } else typeof e == "number" ? e = e & 255 : typeof e == "boolean" && (e = Number(e));
    if (r < 0 || this.length < r || this.length < B)
      throw new RangeError("Out of range index");
    if (B <= r)
      return this;
    r = r >>> 0, B = B === void 0 ? this.length : B >>> 0, e || (e = 0);
    let I;
    if (typeof e == "number")
      for (I = r; I < B; ++I)
        this[I] = e;
    else {
      const j = s.isBuffer(e) ? e : s.from(e, T), $ = j.length;
      if ($ === 0)
        throw new TypeError('The value "' + e + '" is invalid for argument "value"');
      for (I = 0; I < B - r; ++I)
        this[I + r] = j[I % $];
    }
    return this;
  };
  const Y = {};
  function w0(x, e, r) {
    Y[x] = class extends r {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: e.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${x}]`, this.stack, delete this.name;
      }
      get code() {
        return x;
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
        return `${this.name} [${x}]: ${this.message}`;
      }
    };
  }
  w0(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(x) {
      return x ? `${x} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), w0(
    "ERR_INVALID_ARG_TYPE",
    function(x, e) {
      return `The "${x}" argument must be of type number. Received type ${typeof e}`;
    },
    TypeError
  ), w0(
    "ERR_OUT_OF_RANGE",
    function(x, e, r) {
      let B = `The value of "${x}" is out of range.`, T = r;
      return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? T = F0(String(r)) : typeof r == "bigint" && (T = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (T = F0(T)), T += "n"), B += ` It must be ${e}. Received ${T}`, B;
    },
    RangeError
  );
  function F0(x) {
    let e = "", r = x.length;
    const B = x[0] === "-" ? 1 : 0;
    for (; r >= B + 4; r -= 3)
      e = `_${x.slice(r - 3, r)}${e}`;
    return `${x.slice(0, r)}${e}`;
  }
  function v0(x, e, r) {
    n0(e, "offset"), (x[e] === void 0 || x[e + r] === void 0) && e0(e, x.length - (r + 1));
  }
  function g0(x, e, r, B, T, I) {
    if (x > r || x < e) {
      const j = typeof e == "bigint" ? "n" : "";
      let $;
      throw e === 0 || e === BigInt(0) ? $ = `>= 0${j} and < 2${j} ** ${(I + 1) * 8}${j}` : $ = `>= -(2${j} ** ${(I + 1) * 8 - 1}${j}) and < 2 ** ${(I + 1) * 8 - 1}${j}`, new Y.ERR_OUT_OF_RANGE("value", $, x);
    }
    v0(B, T, I);
  }
  function n0(x, e) {
    if (typeof x != "number")
      throw new Y.ERR_INVALID_ARG_TYPE(e, "number", x);
  }
  function e0(x, e, r) {
    throw Math.floor(x) !== x ? (n0(x, r), new Y.ERR_OUT_OF_RANGE("offset", "an integer", x)) : e < 0 ? new Y.ERR_BUFFER_OUT_OF_BOUNDS() : new Y.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${e}`,
      x
    );
  }
  const o0 = /[^+/0-9A-Za-z-_]/g;
  function Q0(x) {
    if (x = x.split("=")[0], x = x.trim().replace(o0, ""), x.length < 2) return "";
    for (; x.length % 4 !== 0; )
      x = x + "=";
    return x;
  }
  function I0(x, e) {
    e = e || 1 / 0;
    let r;
    const B = x.length;
    let T = null;
    const I = [];
    for (let j = 0; j < B; ++j) {
      if (r = x.charCodeAt(j), r > 55295 && r < 57344) {
        if (!T) {
          if (r > 56319) {
            (e -= 3) > -1 && I.push(239, 191, 189);
            continue;
          } else if (j + 1 === B) {
            (e -= 3) > -1 && I.push(239, 191, 189);
            continue;
          }
          T = r;
          continue;
        }
        if (r < 56320) {
          (e -= 3) > -1 && I.push(239, 191, 189), T = r;
          continue;
        }
        r = (T - 55296 << 10 | r - 56320) + 65536;
      } else T && (e -= 3) > -1 && I.push(239, 191, 189);
      if (T = null, r < 128) {
        if ((e -= 1) < 0) break;
        I.push(r);
      } else if (r < 2048) {
        if ((e -= 2) < 0) break;
        I.push(
          r >> 6 | 192,
          r & 63 | 128
        );
      } else if (r < 65536) {
        if ((e -= 3) < 0) break;
        I.push(
          r >> 12 | 224,
          r >> 6 & 63 | 128,
          r & 63 | 128
        );
      } else if (r < 1114112) {
        if ((e -= 4) < 0) break;
        I.push(
          r >> 18 | 240,
          r >> 12 & 63 | 128,
          r >> 6 & 63 | 128,
          r & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return I;
  }
  function X0(x) {
    const e = [];
    for (let r = 0; r < x.length; ++r)
      e.push(x.charCodeAt(r) & 255);
    return e;
  }
  function xe(x, e) {
    let r, B, T;
    const I = [];
    for (let j = 0; j < x.length && !((e -= 2) < 0); ++j)
      r = x.charCodeAt(j), B = r >> 8, T = r % 256, I.push(T), I.push(B);
    return I;
  }
  function z0(x) {
    return n.toByteArray(Q0(x));
  }
  function B0(x, e, r, B) {
    let T;
    for (T = 0; T < B && !(T + r >= e.length || T >= x.length); ++T)
      e[T + r] = x[T];
    return T;
  }
  function x0(x, e) {
    return x instanceof e || x != null && x.constructor != null && x.constructor.name != null && x.constructor.name === e.name;
  }
  function _0(x) {
    return x !== x;
  }
  const L0 = function() {
    const x = "0123456789abcdef", e = new Array(256);
    for (let r = 0; r < 16; ++r) {
      const B = r * 16;
      for (let T = 0; T < 16; ++T)
        e[B + T] = x[r] + x[T];
    }
    return e;
  }();
  function N0(x) {
    return typeof BigInt > "u" ? V0 : x;
  }
  function V0() {
    throw new Error("BigInt not supported");
  }
})(ve);
var yr = { exports: {} };
function Bn(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ke = { exports: {} };
const En = {}, gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: En
}, Symbol.toStringTag, { value: "Module" })), An = /* @__PURE__ */ cn(gn);
var Tt;
function t0() {
  return Tt || (Tt = 1, function(t, n) {
    (function(i, a) {
      t.exports = a();
    })(L, function() {
      var i = i || function(a, f) {
        var E;
        if (typeof window < "u" && window.crypto && (E = window.crypto), typeof self < "u" && self.crypto && (E = self.crypto), typeof globalThis < "u" && globalThis.crypto && (E = globalThis.crypto), !E && typeof window < "u" && window.msCrypto && (E = window.msCrypto), !E && typeof globalThis < "u" && globalThis.crypto && (E = globalThis.crypto), !E && typeof Bn == "function")
          try {
            E = An;
          } catch {
          }
        var m = function() {
          if (E) {
            if (typeof E.getRandomValues == "function")
              try {
                return E.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof E.randomBytes == "function")
              try {
                return E.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, s = Object.create || /* @__PURE__ */ function() {
          function l() {
          }
          return function(w) {
            var D;
            return l.prototype = w, D = new l(), l.prototype = null, D;
          };
        }(), C = {}, h = C.lib = {}, v = h.Base = /* @__PURE__ */ function() {
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
              var w = s(this);
              return l && w.mixIn(l), (!w.hasOwnProperty("init") || this.init === w.init) && (w.init = function() {
                w.$super.init.apply(this, arguments);
              }), w.init.prototype = w, w.$super = this, w;
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
              for (var w in l)
                l.hasOwnProperty(w) && (this[w] = l[w]);
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
        }(), R = h.WordArray = v.extend({
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
          init: function(l, w) {
            l = this.words = l || [], w != f ? this.sigBytes = w : this.sigBytes = l.length * 4;
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
            return (l || F).stringify(this);
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
            var w = this.words, D = l.words, M = this.sigBytes, q = l.sigBytes;
            if (this.clamp(), M % 4)
              for (var W = 0; W < q; W++) {
                var o = D[W >>> 2] >>> 24 - W % 4 * 8 & 255;
                w[M + W >>> 2] |= o << 24 - (M + W) % 4 * 8;
              }
            else
              for (var u = 0; u < q; u += 4)
                w[M + u >>> 2] = D[u >>> 2];
            return this.sigBytes += q, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var l = this.words, w = this.sigBytes;
            l[w >>> 2] &= 4294967295 << 32 - w % 4 * 8, l.length = a.ceil(w / 4);
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
            var l = v.clone.call(this);
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
            for (var w = [], D = 0; D < l; D += 4)
              w.push(m());
            return new R.init(w, l);
          }
        }), A = C.enc = {}, F = A.Hex = {
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
            for (var w = l.words, D = l.sigBytes, M = [], q = 0; q < D; q++) {
              var W = w[q >>> 2] >>> 24 - q % 4 * 8 & 255;
              M.push((W >>> 4).toString(16)), M.push((W & 15).toString(16));
            }
            return M.join("");
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
            for (var w = l.length, D = [], M = 0; M < w; M += 2)
              D[M >>> 3] |= parseInt(l.substr(M, 2), 16) << 24 - M % 8 * 4;
            return new R.init(D, w / 2);
          }
        }, _ = A.Latin1 = {
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
            for (var w = l.words, D = l.sigBytes, M = [], q = 0; q < D; q++) {
              var W = w[q >>> 2] >>> 24 - q % 4 * 8 & 255;
              M.push(String.fromCharCode(W));
            }
            return M.join("");
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
            for (var w = l.length, D = [], M = 0; M < w; M++)
              D[M >>> 2] |= (l.charCodeAt(M) & 255) << 24 - M % 4 * 8;
            return new R.init(D, w);
          }
        }, k = A.Utf8 = {
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
              return decodeURIComponent(escape(_.stringify(l)));
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
            return _.parse(unescape(encodeURIComponent(l)));
          }
        }, b = h.BufferedBlockAlgorithm = v.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new R.init(), this._nDataBytes = 0;
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
            typeof l == "string" && (l = k.parse(l)), this._data.concat(l), this._nDataBytes += l.sigBytes;
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
            var w, D = this._data, M = D.words, q = D.sigBytes, W = this.blockSize, o = W * 4, u = q / o;
            l ? u = a.ceil(u) : u = a.max((u | 0) - this._minBufferSize, 0);
            var c = u * W, d = a.min(c * 4, q);
            if (c) {
              for (var p = 0; p < c; p += W)
                this._doProcessBlock(M, p);
              w = M.splice(0, c), D.sigBytes -= d;
            }
            return new R.init(w, d);
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
            var l = v.clone.call(this);
            return l._data = this._data.clone(), l;
          },
          _minBufferSize: 0
        });
        h.Hasher = b.extend({
          /**
           * Configuration options.
           */
          cfg: v.extend(),
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
            b.reset.call(this), this._doReset();
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
            var w = this._doFinalize();
            return w;
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
            return function(w, D) {
              return new l.init(D).finalize(w);
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
            return function(w, D) {
              return new H.HMAC.init(l, D).finalize(w);
            };
          }
        });
        var H = C.algo = {};
        return C;
      }(Math);
      return i;
    });
  }(ke)), ke.exports;
}
var Ne = { exports: {} }, Pt;
function De() {
  return Pt || (Pt = 1, function(t, n) {
    (function(i, a) {
      t.exports = a(t0());
    })(L, function(i) {
      return function(a) {
        var f = i, E = f.lib, m = E.Base, s = E.WordArray, C = f.x64 = {};
        C.Word = m.extend({
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
          init: function(h, v) {
            this.high = h, this.low = v;
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
        }), C.WordArray = m.extend({
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
          init: function(h, v) {
            h = this.words = h || [], v != a ? this.sigBytes = v : this.sigBytes = h.length * 8;
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
            for (var h = this.words, v = h.length, R = [], A = 0; A < v; A++) {
              var F = h[A];
              R.push(F.high), R.push(F.low);
            }
            return s.create(R, this.sigBytes);
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
            for (var h = m.clone.call(this), v = h.words = this.words.slice(0), R = v.length, A = 0; A < R; A++)
              v[A] = v[A].clone();
            return h;
          }
        });
      }(), i;
    });
  }(Ne)), Ne.exports;
}
var Te = { exports: {} }, Ot;
function Cn() {
  return Ot || (Ot = 1, function(t, n) {
    (function(i, a) {
      t.exports = a(t0());
    })(L, function(i) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var a = i, f = a.lib, E = f.WordArray, m = E.init, s = E.init = function(C) {
            if (C instanceof ArrayBuffer && (C = new Uint8Array(C)), (C instanceof Int8Array || typeof Uint8ClampedArray < "u" && C instanceof Uint8ClampedArray || C instanceof Int16Array || C instanceof Uint16Array || C instanceof Int32Array || C instanceof Uint32Array || C instanceof Float32Array || C instanceof Float64Array) && (C = new Uint8Array(C.buffer, C.byteOffset, C.byteLength)), C instanceof Uint8Array) {
              for (var h = C.byteLength, v = [], R = 0; R < h; R++)
                v[R >>> 2] |= C[R] << 24 - R % 4 * 8;
              m.call(this, v, h);
            } else
              m.apply(this, arguments);
          };
          s.prototype = E;
        }
      }(), i.lib.WordArray;
    });
  }(Te)), Te.exports;
}
var Pe = { exports: {} }, Ut;
function yn() {
  return Ut || (Ut = 1, function(t, n) {
    (function(i, a) {
      t.exports = a(t0());
    })(L, function(i) {
      return function() {
        var a = i, f = a.lib, E = f.WordArray, m = a.enc;
        m.Utf16 = m.Utf16BE = {
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
          stringify: function(C) {
            for (var h = C.words, v = C.sigBytes, R = [], A = 0; A < v; A += 2) {
              var F = h[A >>> 2] >>> 16 - A % 4 * 8 & 65535;
              R.push(String.fromCharCode(F));
            }
            return R.join("");
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
          parse: function(C) {
            for (var h = C.length, v = [], R = 0; R < h; R++)
              v[R >>> 1] |= C.charCodeAt(R) << 16 - R % 2 * 16;
            return E.create(v, h * 2);
          }
        }, m.Utf16LE = {
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
          stringify: function(C) {
            for (var h = C.words, v = C.sigBytes, R = [], A = 0; A < v; A += 2) {
              var F = s(h[A >>> 2] >>> 16 - A % 4 * 8 & 65535);
              R.push(String.fromCharCode(F));
            }
            return R.join("");
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
          parse: function(C) {
            for (var h = C.length, v = [], R = 0; R < h; R++)
              v[R >>> 1] |= s(C.charCodeAt(R) << 16 - R % 2 * 16);
            return E.create(v, h * 2);
          }
        };
        function s(C) {
          return C << 8 & 4278255360 | C >>> 8 & 16711935;
        }
      }(), i.enc.Utf16;
    });
  }(Pe)), Pe.exports;
}
var Oe = { exports: {} }, Ht;
function J0() {
  return Ht || (Ht = 1, function(t, n) {
    (function(i, a) {
      t.exports = a(t0());
    })(L, function(i) {
      return function() {
        var a = i, f = a.lib, E = f.WordArray, m = a.enc;
        m.Base64 = {
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
          stringify: function(C) {
            var h = C.words, v = C.sigBytes, R = this._map;
            C.clamp();
            for (var A = [], F = 0; F < v; F += 3)
              for (var _ = h[F >>> 2] >>> 24 - F % 4 * 8 & 255, k = h[F + 1 >>> 2] >>> 24 - (F + 1) % 4 * 8 & 255, b = h[F + 2 >>> 2] >>> 24 - (F + 2) % 4 * 8 & 255, H = _ << 16 | k << 8 | b, l = 0; l < 4 && F + l * 0.75 < v; l++)
                A.push(R.charAt(H >>> 6 * (3 - l) & 63));
            var w = R.charAt(64);
            if (w)
              for (; A.length % 4; )
                A.push(w);
            return A.join("");
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
          parse: function(C) {
            var h = C.length, v = this._map, R = this._reverseMap;
            if (!R) {
              R = this._reverseMap = [];
              for (var A = 0; A < v.length; A++)
                R[v.charCodeAt(A)] = A;
            }
            var F = v.charAt(64);
            if (F) {
              var _ = C.indexOf(F);
              _ !== -1 && (h = _);
            }
            return s(C, h, R);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function s(C, h, v) {
          for (var R = [], A = 0, F = 0; F < h; F++)
            if (F % 4) {
              var _ = v[C.charCodeAt(F - 1)] << F % 4 * 2, k = v[C.charCodeAt(F)] >>> 6 - F % 4 * 2, b = _ | k;
              R[A >>> 2] |= b << 24 - A % 4 * 8, A++;
            }
          return E.create(R, A);
        }
      }(), i.enc.Base64;
    });
  }(Oe)), Oe.exports;
}
var Ue = { exports: {} }, qt;
function wn() {
  return qt || (qt = 1, function(t, n) {
    (function(i, a) {
      t.exports = a(t0());
    })(L, function(i) {
      return function() {
        var a = i, f = a.lib, E = f.WordArray, m = a.enc;
        m.Base64url = {
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
          stringify: function(C, h) {
            h === void 0 && (h = !0);
            var v = C.words, R = C.sigBytes, A = h ? this._safe_map : this._map;
            C.clamp();
            for (var F = [], _ = 0; _ < R; _ += 3)
              for (var k = v[_ >>> 2] >>> 24 - _ % 4 * 8 & 255, b = v[_ + 1 >>> 2] >>> 24 - (_ + 1) % 4 * 8 & 255, H = v[_ + 2 >>> 2] >>> 24 - (_ + 2) % 4 * 8 & 255, l = k << 16 | b << 8 | H, w = 0; w < 4 && _ + w * 0.75 < R; w++)
                F.push(A.charAt(l >>> 6 * (3 - w) & 63));
            var D = A.charAt(64);
            if (D)
              for (; F.length % 4; )
                F.push(D);
            return F.join("");
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
          parse: function(C, h) {
            h === void 0 && (h = !0);
            var v = C.length, R = h ? this._safe_map : this._map, A = this._reverseMap;
            if (!A) {
              A = this._reverseMap = [];
              for (var F = 0; F < R.length; F++)
                A[R.charCodeAt(F)] = F;
            }
            var _ = R.charAt(64);
            if (_) {
              var k = C.indexOf(_);
              k !== -1 && (v = k);
            }
            return s(C, v, A);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function s(C, h, v) {
          for (var R = [], A = 0, F = 0; F < h; F++)
            if (F % 4) {
              var _ = v[C.charCodeAt(F - 1)] << F % 4 * 2, k = v[C.charCodeAt(F)] >>> 6 - F % 4 * 2, b = _ | k;
              R[A >>> 2] |= b << 24 - A % 4 * 8, A++;
            }
          return E.create(R, A);
        }
      }(), i.enc.Base64url;
    });
  }(Ue)), Ue.exports;
}
var He = { exports: {} }, Mt;
function $0() {
  return Mt || (Mt = 1, function(t, n) {
    (function(i, a) {
      t.exports = a(t0());
    })(L, function(i) {
      return function(a) {
        var f = i, E = f.lib, m = E.WordArray, s = E.Hasher, C = f.algo, h = [];
        (function() {
          for (var k = 0; k < 64; k++)
            h[k] = a.abs(a.sin(k + 1)) * 4294967296 | 0;
        })();
        var v = C.MD5 = s.extend({
          _doReset: function() {
            this._hash = new m.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(k, b) {
            for (var H = 0; H < 16; H++) {
              var l = b + H, w = k[l];
              k[l] = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360;
            }
            var D = this._hash.words, M = k[b + 0], q = k[b + 1], W = k[b + 2], o = k[b + 3], u = k[b + 4], c = k[b + 5], d = k[b + 6], p = k[b + 7], g = k[b + 8], N = k[b + 9], y = k[b + 10], S = k[b + 11], U = k[b + 12], P = k[b + 13], V = k[b + 14], Q = k[b + 15], O = D[0], z = D[1], K = D[2], G = D[3];
            O = R(O, z, K, G, M, 7, h[0]), G = R(G, O, z, K, q, 12, h[1]), K = R(K, G, O, z, W, 17, h[2]), z = R(z, K, G, O, o, 22, h[3]), O = R(O, z, K, G, u, 7, h[4]), G = R(G, O, z, K, c, 12, h[5]), K = R(K, G, O, z, d, 17, h[6]), z = R(z, K, G, O, p, 22, h[7]), O = R(O, z, K, G, g, 7, h[8]), G = R(G, O, z, K, N, 12, h[9]), K = R(K, G, O, z, y, 17, h[10]), z = R(z, K, G, O, S, 22, h[11]), O = R(O, z, K, G, U, 7, h[12]), G = R(G, O, z, K, P, 12, h[13]), K = R(K, G, O, z, V, 17, h[14]), z = R(z, K, G, O, Q, 22, h[15]), O = A(O, z, K, G, q, 5, h[16]), G = A(G, O, z, K, d, 9, h[17]), K = A(K, G, O, z, S, 14, h[18]), z = A(z, K, G, O, M, 20, h[19]), O = A(O, z, K, G, c, 5, h[20]), G = A(G, O, z, K, y, 9, h[21]), K = A(K, G, O, z, Q, 14, h[22]), z = A(z, K, G, O, u, 20, h[23]), O = A(O, z, K, G, N, 5, h[24]), G = A(G, O, z, K, V, 9, h[25]), K = A(K, G, O, z, o, 14, h[26]), z = A(z, K, G, O, g, 20, h[27]), O = A(O, z, K, G, P, 5, h[28]), G = A(G, O, z, K, W, 9, h[29]), K = A(K, G, O, z, p, 14, h[30]), z = A(z, K, G, O, U, 20, h[31]), O = F(O, z, K, G, c, 4, h[32]), G = F(G, O, z, K, g, 11, h[33]), K = F(K, G, O, z, S, 16, h[34]), z = F(z, K, G, O, V, 23, h[35]), O = F(O, z, K, G, q, 4, h[36]), G = F(G, O, z, K, u, 11, h[37]), K = F(K, G, O, z, p, 16, h[38]), z = F(z, K, G, O, y, 23, h[39]), O = F(O, z, K, G, P, 4, h[40]), G = F(G, O, z, K, M, 11, h[41]), K = F(K, G, O, z, o, 16, h[42]), z = F(z, K, G, O, d, 23, h[43]), O = F(O, z, K, G, N, 4, h[44]), G = F(G, O, z, K, U, 11, h[45]), K = F(K, G, O, z, Q, 16, h[46]), z = F(z, K, G, O, W, 23, h[47]), O = _(O, z, K, G, M, 6, h[48]), G = _(G, O, z, K, p, 10, h[49]), K = _(K, G, O, z, V, 15, h[50]), z = _(z, K, G, O, c, 21, h[51]), O = _(O, z, K, G, U, 6, h[52]), G = _(G, O, z, K, o, 10, h[53]), K = _(K, G, O, z, y, 15, h[54]), z = _(z, K, G, O, q, 21, h[55]), O = _(O, z, K, G, g, 6, h[56]), G = _(G, O, z, K, Q, 10, h[57]), K = _(K, G, O, z, d, 15, h[58]), z = _(z, K, G, O, P, 21, h[59]), O = _(O, z, K, G, u, 6, h[60]), G = _(G, O, z, K, S, 10, h[61]), K = _(K, G, O, z, W, 15, h[62]), z = _(z, K, G, O, N, 21, h[63]), D[0] = D[0] + O | 0, D[1] = D[1] + z | 0, D[2] = D[2] + K | 0, D[3] = D[3] + G | 0;
          },
          _doFinalize: function() {
            var k = this._data, b = k.words, H = this._nDataBytes * 8, l = k.sigBytes * 8;
            b[l >>> 5] |= 128 << 24 - l % 32;
            var w = a.floor(H / 4294967296), D = H;
            b[(l + 64 >>> 9 << 4) + 15] = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, b[(l + 64 >>> 9 << 4) + 14] = (D << 8 | D >>> 24) & 16711935 | (D << 24 | D >>> 8) & 4278255360, k.sigBytes = (b.length + 1) * 4, this._process();
            for (var M = this._hash, q = M.words, W = 0; W < 4; W++) {
              var o = q[W];
              q[W] = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & 4278255360;
            }
            return M;
          },
          clone: function() {
            var k = s.clone.call(this);
            return k._hash = this._hash.clone(), k;
          }
        });
        function R(k, b, H, l, w, D, M) {
          var q = k + (b & H | ~b & l) + w + M;
          return (q << D | q >>> 32 - D) + b;
        }
        function A(k, b, H, l, w, D, M) {
          var q = k + (b & l | H & ~l) + w + M;
          return (q << D | q >>> 32 - D) + b;
        }
        function F(k, b, H, l, w, D, M) {
          var q = k + (b ^ H ^ l) + w + M;
          return (q << D | q >>> 32 - D) + b;
        }
        function _(k, b, H, l, w, D, M) {
          var q = k + (H ^ (b | ~l)) + w + M;
          return (q << D | q >>> 32 - D) + b;
        }
        f.MD5 = s._createHelper(v), f.HmacMD5 = s._createHmacHelper(v);
      }(Math), i.MD5;
    });
  }(He)), He.exports;
}
var qe = { exports: {} }, Wt;
function wr() {
  return Wt || (Wt = 1, function(t, n) {
    (function(i, a) {
      t.exports = a(t0());
    })(L, function(i) {
      return function() {
        var a = i, f = a.lib, E = f.WordArray, m = f.Hasher, s = a.algo, C = [], h = s.SHA1 = m.extend({
          _doReset: function() {
            this._hash = new E.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(v, R) {
            for (var A = this._hash.words, F = A[0], _ = A[1], k = A[2], b = A[3], H = A[4], l = 0; l < 80; l++) {
              if (l < 16)
                C[l] = v[R + l] | 0;
              else {
                var w = C[l - 3] ^ C[l - 8] ^ C[l - 14] ^ C[l - 16];
                C[l] = w << 1 | w >>> 31;
              }
              var D = (F << 5 | F >>> 27) + H + C[l];
              l < 20 ? D += (_ & k | ~_ & b) + 1518500249 : l < 40 ? D += (_ ^ k ^ b) + 1859775393 : l < 60 ? D += (_ & k | _ & b | k & b) - 1894007588 : D += (_ ^ k ^ b) - 899497514, H = b, b = k, k = _ << 30 | _ >>> 2, _ = F, F = D;
            }
            A[0] = A[0] + F | 0, A[1] = A[1] + _ | 0, A[2] = A[2] + k | 0, A[3] = A[3] + b | 0, A[4] = A[4] + H | 0;
          },
          _doFinalize: function() {
            var v = this._data, R = v.words, A = this._nDataBytes * 8, F = v.sigBytes * 8;
            return R[F >>> 5] |= 128 << 24 - F % 32, R[(F + 64 >>> 9 << 4) + 14] = Math.floor(A / 4294967296), R[(F + 64 >>> 9 << 4) + 15] = A, v.sigBytes = R.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var v = m.clone.call(this);
            return v._hash = this._hash.clone(), v;
          }
        });
        a.SHA1 = m._createHelper(h), a.HmacSHA1 = m._createHmacHelper(h);
      }(), i.SHA1;
    });
  }(qe)), qe.exports;
}
var Me = { exports: {} }, It;
function Ct() {
  return It || (It = 1, function(t, n) {
    (function(i, a) {
      t.exports = a(t0());
    })(L, function(i) {
      return function(a) {
        var f = i, E = f.lib, m = E.WordArray, s = E.Hasher, C = f.algo, h = [], v = [];
        (function() {
          function F(H) {
            for (var l = a.sqrt(H), w = 2; w <= l; w++)
              if (!(H % w))
                return !1;
            return !0;
          }
          function _(H) {
            return (H - (H | 0)) * 4294967296 | 0;
          }
          for (var k = 2, b = 0; b < 64; )
            F(k) && (b < 8 && (h[b] = _(a.pow(k, 1 / 2))), v[b] = _(a.pow(k, 1 / 3)), b++), k++;
        })();
        var R = [], A = C.SHA256 = s.extend({
          _doReset: function() {
            this._hash = new m.init(h.slice(0));
          },
          _doProcessBlock: function(F, _) {
            for (var k = this._hash.words, b = k[0], H = k[1], l = k[2], w = k[3], D = k[4], M = k[5], q = k[6], W = k[7], o = 0; o < 64; o++) {
              if (o < 16)
                R[o] = F[_ + o] | 0;
              else {
                var u = R[o - 15], c = (u << 25 | u >>> 7) ^ (u << 14 | u >>> 18) ^ u >>> 3, d = R[o - 2], p = (d << 15 | d >>> 17) ^ (d << 13 | d >>> 19) ^ d >>> 10;
                R[o] = c + R[o - 7] + p + R[o - 16];
              }
              var g = D & M ^ ~D & q, N = b & H ^ b & l ^ H & l, y = (b << 30 | b >>> 2) ^ (b << 19 | b >>> 13) ^ (b << 10 | b >>> 22), S = (D << 26 | D >>> 6) ^ (D << 21 | D >>> 11) ^ (D << 7 | D >>> 25), U = W + S + g + v[o] + R[o], P = y + N;
              W = q, q = M, M = D, D = w + U | 0, w = l, l = H, H = b, b = U + P | 0;
            }
            k[0] = k[0] + b | 0, k[1] = k[1] + H | 0, k[2] = k[2] + l | 0, k[3] = k[3] + w | 0, k[4] = k[4] + D | 0, k[5] = k[5] + M | 0, k[6] = k[6] + q | 0, k[7] = k[7] + W | 0;
          },
          _doFinalize: function() {
            var F = this._data, _ = F.words, k = this._nDataBytes * 8, b = F.sigBytes * 8;
            return _[b >>> 5] |= 128 << 24 - b % 32, _[(b + 64 >>> 9 << 4) + 14] = a.floor(k / 4294967296), _[(b + 64 >>> 9 << 4) + 15] = k, F.sigBytes = _.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var F = s.clone.call(this);
            return F._hash = this._hash.clone(), F;
          }
        });
        f.SHA256 = s._createHelper(A), f.HmacSHA256 = s._createHmacHelper(A);
      }(Math), i.SHA256;
    });
  }(Me)), Me.exports;
}
var We = { exports: {} }, zt;
function Fn() {
  return zt || (zt = 1, function(t, n) {
    (function(i, a, f) {
      t.exports = a(t0(), Ct());
    })(L, function(i) {
      return function() {
        var a = i, f = a.lib, E = f.WordArray, m = a.algo, s = m.SHA256, C = m.SHA224 = s.extend({
          _doReset: function() {
            this._hash = new E.init([
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
        a.SHA224 = s._createHelper(C), a.HmacSHA224 = s._createHmacHelper(C);
      }(), i.SHA224;
    });
  }(We)), We.exports;
}
var Ie = { exports: {} }, Vt;
function Fr() {
  return Vt || (Vt = 1, function(t, n) {
    (function(i, a, f) {
      t.exports = a(t0(), De());
    })(L, function(i) {
      return function() {
        var a = i, f = a.lib, E = f.Hasher, m = a.x64, s = m.Word, C = m.WordArray, h = a.algo;
        function v() {
          return s.create.apply(s, arguments);
        }
        var R = [
          v(1116352408, 3609767458),
          v(1899447441, 602891725),
          v(3049323471, 3964484399),
          v(3921009573, 2173295548),
          v(961987163, 4081628472),
          v(1508970993, 3053834265),
          v(2453635748, 2937671579),
          v(2870763221, 3664609560),
          v(3624381080, 2734883394),
          v(310598401, 1164996542),
          v(607225278, 1323610764),
          v(1426881987, 3590304994),
          v(1925078388, 4068182383),
          v(2162078206, 991336113),
          v(2614888103, 633803317),
          v(3248222580, 3479774868),
          v(3835390401, 2666613458),
          v(4022224774, 944711139),
          v(264347078, 2341262773),
          v(604807628, 2007800933),
          v(770255983, 1495990901),
          v(1249150122, 1856431235),
          v(1555081692, 3175218132),
          v(1996064986, 2198950837),
          v(2554220882, 3999719339),
          v(2821834349, 766784016),
          v(2952996808, 2566594879),
          v(3210313671, 3203337956),
          v(3336571891, 1034457026),
          v(3584528711, 2466948901),
          v(113926993, 3758326383),
          v(338241895, 168717936),
          v(666307205, 1188179964),
          v(773529912, 1546045734),
          v(1294757372, 1522805485),
          v(1396182291, 2643833823),
          v(1695183700, 2343527390),
          v(1986661051, 1014477480),
          v(2177026350, 1206759142),
          v(2456956037, 344077627),
          v(2730485921, 1290863460),
          v(2820302411, 3158454273),
          v(3259730800, 3505952657),
          v(3345764771, 106217008),
          v(3516065817, 3606008344),
          v(3600352804, 1432725776),
          v(4094571909, 1467031594),
          v(275423344, 851169720),
          v(430227734, 3100823752),
          v(506948616, 1363258195),
          v(659060556, 3750685593),
          v(883997877, 3785050280),
          v(958139571, 3318307427),
          v(1322822218, 3812723403),
          v(1537002063, 2003034995),
          v(1747873779, 3602036899),
          v(1955562222, 1575990012),
          v(2024104815, 1125592928),
          v(2227730452, 2716904306),
          v(2361852424, 442776044),
          v(2428436474, 593698344),
          v(2756734187, 3733110249),
          v(3204031479, 2999351573),
          v(3329325298, 3815920427),
          v(3391569614, 3928383900),
          v(3515267271, 566280711),
          v(3940187606, 3454069534),
          v(4118630271, 4000239992),
          v(116418474, 1914138554),
          v(174292421, 2731055270),
          v(289380356, 3203993006),
          v(460393269, 320620315),
          v(685471733, 587496836),
          v(852142971, 1086792851),
          v(1017036298, 365543100),
          v(1126000580, 2618297676),
          v(1288033470, 3409855158),
          v(1501505948, 4234509866),
          v(1607167915, 987167468),
          v(1816402316, 1246189591)
        ], A = [];
        (function() {
          for (var _ = 0; _ < 80; _++)
            A[_] = v();
        })();
        var F = h.SHA512 = E.extend({
          _doReset: function() {
            this._hash = new C.init([
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
          _doProcessBlock: function(_, k) {
            for (var b = this._hash.words, H = b[0], l = b[1], w = b[2], D = b[3], M = b[4], q = b[5], W = b[6], o = b[7], u = H.high, c = H.low, d = l.high, p = l.low, g = w.high, N = w.low, y = D.high, S = D.low, U = M.high, P = M.low, V = q.high, Q = q.low, O = W.high, z = W.low, K = o.high, G = o.low, X = u, Z = c, r0 = d, Y = p, w0 = g, F0 = N, v0 = y, g0 = S, n0 = U, e0 = P, o0 = V, Q0 = Q, I0 = O, X0 = z, xe = K, z0 = G, B0 = 0; B0 < 80; B0++) {
              var x0, _0, L0 = A[B0];
              if (B0 < 16)
                _0 = L0.high = _[k + B0 * 2] | 0, x0 = L0.low = _[k + B0 * 2 + 1] | 0;
              else {
                var N0 = A[B0 - 15], V0 = N0.high, x = N0.low, e = (V0 >>> 1 | x << 31) ^ (V0 >>> 8 | x << 24) ^ V0 >>> 7, r = (x >>> 1 | V0 << 31) ^ (x >>> 8 | V0 << 24) ^ (x >>> 7 | V0 << 25), B = A[B0 - 2], T = B.high, I = B.low, j = (T >>> 19 | I << 13) ^ (T << 3 | I >>> 29) ^ T >>> 6, $ = (I >>> 19 | T << 13) ^ (I << 3 | T >>> 29) ^ (I >>> 6 | T << 26), s0 = A[B0 - 7], a0 = s0.high, c0 = s0.low, i0 = A[B0 - 16], kr = i0.high, mt = i0.low;
                x0 = r + c0, _0 = e + a0 + (x0 >>> 0 < r >>> 0 ? 1 : 0), x0 = x0 + $, _0 = _0 + j + (x0 >>> 0 < $ >>> 0 ? 1 : 0), x0 = x0 + mt, _0 = _0 + kr + (x0 >>> 0 < mt >>> 0 ? 1 : 0), L0.high = _0, L0.low = x0;
              }
              var Nr = n0 & o0 ^ ~n0 & I0, _t = e0 & Q0 ^ ~e0 & X0, Tr = X & r0 ^ X & w0 ^ r0 & w0, Pr = Z & Y ^ Z & F0 ^ Y & F0, Or = (X >>> 28 | Z << 4) ^ (X << 30 | Z >>> 2) ^ (X << 25 | Z >>> 7), bt = (Z >>> 28 | X << 4) ^ (Z << 30 | X >>> 2) ^ (Z << 25 | X >>> 7), Ur = (n0 >>> 14 | e0 << 18) ^ (n0 >>> 18 | e0 << 14) ^ (n0 << 23 | e0 >>> 9), Hr = (e0 >>> 14 | n0 << 18) ^ (e0 >>> 18 | n0 << 14) ^ (e0 << 23 | n0 >>> 9), Dt = R[B0], qr = Dt.high, St = Dt.low, m0 = z0 + Hr, G0 = xe + Ur + (m0 >>> 0 < z0 >>> 0 ? 1 : 0), m0 = m0 + _t, G0 = G0 + Nr + (m0 >>> 0 < _t >>> 0 ? 1 : 0), m0 = m0 + St, G0 = G0 + qr + (m0 >>> 0 < St >>> 0 ? 1 : 0), m0 = m0 + x0, G0 = G0 + _0 + (m0 >>> 0 < x0 >>> 0 ? 1 : 0), Rt = bt + Pr, Mr = Or + Tr + (Rt >>> 0 < bt >>> 0 ? 1 : 0);
              xe = I0, z0 = X0, I0 = o0, X0 = Q0, o0 = n0, Q0 = e0, e0 = g0 + m0 | 0, n0 = v0 + G0 + (e0 >>> 0 < g0 >>> 0 ? 1 : 0) | 0, v0 = w0, g0 = F0, w0 = r0, F0 = Y, r0 = X, Y = Z, Z = m0 + Rt | 0, X = G0 + Mr + (Z >>> 0 < m0 >>> 0 ? 1 : 0) | 0;
            }
            c = H.low = c + Z, H.high = u + X + (c >>> 0 < Z >>> 0 ? 1 : 0), p = l.low = p + Y, l.high = d + r0 + (p >>> 0 < Y >>> 0 ? 1 : 0), N = w.low = N + F0, w.high = g + w0 + (N >>> 0 < F0 >>> 0 ? 1 : 0), S = D.low = S + g0, D.high = y + v0 + (S >>> 0 < g0 >>> 0 ? 1 : 0), P = M.low = P + e0, M.high = U + n0 + (P >>> 0 < e0 >>> 0 ? 1 : 0), Q = q.low = Q + Q0, q.high = V + o0 + (Q >>> 0 < Q0 >>> 0 ? 1 : 0), z = W.low = z + X0, W.high = O + I0 + (z >>> 0 < X0 >>> 0 ? 1 : 0), G = o.low = G + z0, o.high = K + xe + (G >>> 0 < z0 >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var _ = this._data, k = _.words, b = this._nDataBytes * 8, H = _.sigBytes * 8;
            k[H >>> 5] |= 128 << 24 - H % 32, k[(H + 128 >>> 10 << 5) + 30] = Math.floor(b / 4294967296), k[(H + 128 >>> 10 << 5) + 31] = b, _.sigBytes = k.length * 4, this._process();
            var l = this._hash.toX32();
            return l;
          },
          clone: function() {
            var _ = E.clone.call(this);
            return _._hash = this._hash.clone(), _;
          },
          blockSize: 1024 / 32
        });
        a.SHA512 = E._createHelper(F), a.HmacSHA512 = E._createHmacHelper(F);
      }(), i.SHA512;
    });
  }(Ie)), Ie.exports;
}
var ze = { exports: {} }, Gt;
function mn() {
  return Gt || (Gt = 1, function(t, n) {
    (function(i, a, f) {
      t.exports = a(t0(), De(), Fr());
    })(L, function(i) {
      return function() {
        var a = i, f = a.x64, E = f.Word, m = f.WordArray, s = a.algo, C = s.SHA512, h = s.SHA384 = C.extend({
          _doReset: function() {
            this._hash = new m.init([
              new E.init(3418070365, 3238371032),
              new E.init(1654270250, 914150663),
              new E.init(2438529370, 812702999),
              new E.init(355462360, 4144912697),
              new E.init(1731405415, 4290775857),
              new E.init(2394180231, 1750603025),
              new E.init(3675008525, 1694076839),
              new E.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var v = C._doFinalize.call(this);
            return v.sigBytes -= 16, v;
          }
        });
        a.SHA384 = C._createHelper(h), a.HmacSHA384 = C._createHmacHelper(h);
      }(), i.SHA384;
    });
  }(ze)), ze.exports;
}
var Ve = { exports: {} }, Kt;
function _n() {
  return Kt || (Kt = 1, function(t, n) {
    (function(i, a, f) {
      t.exports = a(t0(), De());
    })(L, function(i) {
      return function(a) {
        var f = i, E = f.lib, m = E.WordArray, s = E.Hasher, C = f.x64, h = C.Word, v = f.algo, R = [], A = [], F = [];
        (function() {
          for (var b = 1, H = 0, l = 0; l < 24; l++) {
            R[b + 5 * H] = (l + 1) * (l + 2) / 2 % 64;
            var w = H % 5, D = (2 * b + 3 * H) % 5;
            b = w, H = D;
          }
          for (var b = 0; b < 5; b++)
            for (var H = 0; H < 5; H++)
              A[b + 5 * H] = H + (2 * b + 3 * H) % 5 * 5;
          for (var M = 1, q = 0; q < 24; q++) {
            for (var W = 0, o = 0, u = 0; u < 7; u++) {
              if (M & 1) {
                var c = (1 << u) - 1;
                c < 32 ? o ^= 1 << c : W ^= 1 << c - 32;
              }
              M & 128 ? M = M << 1 ^ 113 : M <<= 1;
            }
            F[q] = h.create(W, o);
          }
        })();
        var _ = [];
        (function() {
          for (var b = 0; b < 25; b++)
            _[b] = h.create();
        })();
        var k = v.SHA3 = s.extend({
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
            for (var b = this._state = [], H = 0; H < 25; H++)
              b[H] = new h.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(b, H) {
            for (var l = this._state, w = this.blockSize / 2, D = 0; D < w; D++) {
              var M = b[H + 2 * D], q = b[H + 2 * D + 1];
              M = (M << 8 | M >>> 24) & 16711935 | (M << 24 | M >>> 8) & 4278255360, q = (q << 8 | q >>> 24) & 16711935 | (q << 24 | q >>> 8) & 4278255360;
              var W = l[D];
              W.high ^= q, W.low ^= M;
            }
            for (var o = 0; o < 24; o++) {
              for (var u = 0; u < 5; u++) {
                for (var c = 0, d = 0, p = 0; p < 5; p++) {
                  var W = l[u + 5 * p];
                  c ^= W.high, d ^= W.low;
                }
                var g = _[u];
                g.high = c, g.low = d;
              }
              for (var u = 0; u < 5; u++)
                for (var N = _[(u + 4) % 5], y = _[(u + 1) % 5], S = y.high, U = y.low, c = N.high ^ (S << 1 | U >>> 31), d = N.low ^ (U << 1 | S >>> 31), p = 0; p < 5; p++) {
                  var W = l[u + 5 * p];
                  W.high ^= c, W.low ^= d;
                }
              for (var P = 1; P < 25; P++) {
                var c, d, W = l[P], V = W.high, Q = W.low, O = R[P];
                O < 32 ? (c = V << O | Q >>> 32 - O, d = Q << O | V >>> 32 - O) : (c = Q << O - 32 | V >>> 64 - O, d = V << O - 32 | Q >>> 64 - O);
                var z = _[A[P]];
                z.high = c, z.low = d;
              }
              var K = _[0], G = l[0];
              K.high = G.high, K.low = G.low;
              for (var u = 0; u < 5; u++)
                for (var p = 0; p < 5; p++) {
                  var P = u + 5 * p, W = l[P], X = _[P], Z = _[(u + 1) % 5 + 5 * p], r0 = _[(u + 2) % 5 + 5 * p];
                  W.high = X.high ^ ~Z.high & r0.high, W.low = X.low ^ ~Z.low & r0.low;
                }
              var W = l[0], Y = F[o];
              W.high ^= Y.high, W.low ^= Y.low;
            }
          },
          _doFinalize: function() {
            var b = this._data, H = b.words;
            this._nDataBytes * 8;
            var l = b.sigBytes * 8, w = this.blockSize * 32;
            H[l >>> 5] |= 1 << 24 - l % 32, H[(a.ceil((l + 1) / w) * w >>> 5) - 1] |= 128, b.sigBytes = H.length * 4, this._process();
            for (var D = this._state, M = this.cfg.outputLength / 8, q = M / 8, W = [], o = 0; o < q; o++) {
              var u = D[o], c = u.high, d = u.low;
              c = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360, d = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360, W.push(d), W.push(c);
            }
            return new m.init(W, M);
          },
          clone: function() {
            for (var b = s.clone.call(this), H = b._state = this._state.slice(0), l = 0; l < 25; l++)
              H[l] = H[l].clone();
            return b;
          }
        });
        f.SHA3 = s._createHelper(k), f.HmacSHA3 = s._createHmacHelper(k);
      }(Math), i.SHA3;
    });
  }(Ve)), Ve.exports;
}
var Ge = { exports: {} }, jt;
function bn() {
  return jt || (jt = 1, function(t, n) {
    (function(i, a) {
      t.exports = a(t0());
    })(L, function(i) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(a) {
        var f = i, E = f.lib, m = E.WordArray, s = E.Hasher, C = f.algo, h = m.create([
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
        ]), v = m.create([
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
        ]), R = m.create([
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
        ]), A = m.create([
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
        ]), F = m.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), _ = m.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), k = C.RIPEMD160 = s.extend({
          _doReset: function() {
            this._hash = m.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(q, W) {
            for (var o = 0; o < 16; o++) {
              var u = W + o, c = q[u];
              q[u] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            }
            var d = this._hash.words, p = F.words, g = _.words, N = h.words, y = v.words, S = R.words, U = A.words, P, V, Q, O, z, K, G, X, Z, r0;
            K = P = d[0], G = V = d[1], X = Q = d[2], Z = O = d[3], r0 = z = d[4];
            for (var Y, o = 0; o < 80; o += 1)
              Y = P + q[W + N[o]] | 0, o < 16 ? Y += b(V, Q, O) + p[0] : o < 32 ? Y += H(V, Q, O) + p[1] : o < 48 ? Y += l(V, Q, O) + p[2] : o < 64 ? Y += w(V, Q, O) + p[3] : Y += D(V, Q, O) + p[4], Y = Y | 0, Y = M(Y, S[o]), Y = Y + z | 0, P = z, z = O, O = M(Q, 10), Q = V, V = Y, Y = K + q[W + y[o]] | 0, o < 16 ? Y += D(G, X, Z) + g[0] : o < 32 ? Y += w(G, X, Z) + g[1] : o < 48 ? Y += l(G, X, Z) + g[2] : o < 64 ? Y += H(G, X, Z) + g[3] : Y += b(G, X, Z) + g[4], Y = Y | 0, Y = M(Y, U[o]), Y = Y + r0 | 0, K = r0, r0 = Z, Z = M(X, 10), X = G, G = Y;
            Y = d[1] + Q + Z | 0, d[1] = d[2] + O + r0 | 0, d[2] = d[3] + z + K | 0, d[3] = d[4] + P + G | 0, d[4] = d[0] + V + X | 0, d[0] = Y;
          },
          _doFinalize: function() {
            var q = this._data, W = q.words, o = this._nDataBytes * 8, u = q.sigBytes * 8;
            W[u >>> 5] |= 128 << 24 - u % 32, W[(u + 64 >>> 9 << 4) + 14] = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & 4278255360, q.sigBytes = (W.length + 1) * 4, this._process();
            for (var c = this._hash, d = c.words, p = 0; p < 5; p++) {
              var g = d[p];
              d[p] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360;
            }
            return c;
          },
          clone: function() {
            var q = s.clone.call(this);
            return q._hash = this._hash.clone(), q;
          }
        });
        function b(q, W, o) {
          return q ^ W ^ o;
        }
        function H(q, W, o) {
          return q & W | ~q & o;
        }
        function l(q, W, o) {
          return (q | ~W) ^ o;
        }
        function w(q, W, o) {
          return q & o | W & ~o;
        }
        function D(q, W, o) {
          return q ^ (W | ~o);
        }
        function M(q, W) {
          return q << W | q >>> 32 - W;
        }
        f.RIPEMD160 = s._createHelper(k), f.HmacRIPEMD160 = s._createHmacHelper(k);
      }(), i.RIPEMD160;
    });
  }(Ge)), Ge.exports;
}
var Ke = { exports: {} }, Qt;
function yt() {
  return Qt || (Qt = 1, function(t, n) {
    (function(i, a) {
      t.exports = a(t0());
    })(L, function(i) {
      (function() {
        var a = i, f = a.lib, E = f.Base, m = a.enc, s = m.Utf8, C = a.algo;
        C.HMAC = E.extend({
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
          init: function(h, v) {
            h = this._hasher = new h.init(), typeof v == "string" && (v = s.parse(v));
            var R = h.blockSize, A = R * 4;
            v.sigBytes > A && (v = h.finalize(v)), v.clamp();
            for (var F = this._oKey = v.clone(), _ = this._iKey = v.clone(), k = F.words, b = _.words, H = 0; H < R; H++)
              k[H] ^= 1549556828, b[H] ^= 909522486;
            F.sigBytes = _.sigBytes = A, this.reset();
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
            var v = this._hasher, R = v.finalize(h);
            v.reset();
            var A = v.finalize(this._oKey.clone().concat(R));
            return A;
          }
        });
      })();
    });
  }(Ke)), Ke.exports;
}
var je = { exports: {} }, Xt;
function Dn() {
  return Xt || (Xt = 1, function(t, n) {
    (function(i, a, f) {
      t.exports = a(t0(), Ct(), yt());
    })(L, function(i) {
      return function() {
        var a = i, f = a.lib, E = f.Base, m = f.WordArray, s = a.algo, C = s.SHA256, h = s.HMAC, v = s.PBKDF2 = E.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: E.extend({
            keySize: 128 / 32,
            hasher: C,
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
          init: function(R) {
            this.cfg = this.cfg.extend(R);
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
          compute: function(R, A) {
            for (var F = this.cfg, _ = h.create(F.hasher, R), k = m.create(), b = m.create([1]), H = k.words, l = b.words, w = F.keySize, D = F.iterations; H.length < w; ) {
              var M = _.update(A).finalize(b);
              _.reset();
              for (var q = M.words, W = q.length, o = M, u = 1; u < D; u++) {
                o = _.finalize(o), _.reset();
                for (var c = o.words, d = 0; d < W; d++)
                  q[d] ^= c[d];
              }
              k.concat(M), l[0]++;
            }
            return k.sigBytes = w * 4, k;
          }
        });
        a.PBKDF2 = function(R, A, F) {
          return v.create(F).compute(R, A);
        };
      }(), i.PBKDF2;
    });
  }(je)), je.exports;
}
var Qe = { exports: {} }, Zt;
function j0() {
  return Zt || (Zt = 1, function(t, n) {
    (function(i, a, f) {
      t.exports = a(t0(), wr(), yt());
    })(L, function(i) {
      return function() {
        var a = i, f = a.lib, E = f.Base, m = f.WordArray, s = a.algo, C = s.MD5, h = s.EvpKDF = E.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: E.extend({
            keySize: 128 / 32,
            hasher: C,
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
          init: function(v) {
            this.cfg = this.cfg.extend(v);
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
          compute: function(v, R) {
            for (var A, F = this.cfg, _ = F.hasher.create(), k = m.create(), b = k.words, H = F.keySize, l = F.iterations; b.length < H; ) {
              A && _.update(A), A = _.update(v).finalize(R), _.reset();
              for (var w = 1; w < l; w++)
                A = _.finalize(A), _.reset();
              k.concat(A);
            }
            return k.sigBytes = H * 4, k;
          }
        });
        a.EvpKDF = function(v, R, A) {
          return h.create(A).compute(v, R);
        };
      }(), i.EvpKDF;
    });
  }(Qe)), Qe.exports;
}
var Xe = { exports: {} }, Yt;
function p0() {
  return Yt || (Yt = 1, function(t, n) {
    (function(i, a, f) {
      t.exports = a(t0(), j0());
    })(L, function(i) {
      i.lib.Cipher || function(a) {
        var f = i, E = f.lib, m = E.Base, s = E.WordArray, C = E.BufferedBlockAlgorithm, h = f.enc;
        h.Utf8;
        var v = h.Base64, R = f.algo, A = R.EvpKDF, F = E.Cipher = C.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: m.extend(),
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
          createEncryptor: function(c, d) {
            return this.create(this._ENC_XFORM_MODE, c, d);
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
          createDecryptor: function(c, d) {
            return this.create(this._DEC_XFORM_MODE, c, d);
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
          init: function(c, d, p) {
            this.cfg = this.cfg.extend(p), this._xformMode = c, this._key = d, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            C.reset.call(this), this._doReset();
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
          process: function(c) {
            return this._append(c), this._process();
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
          finalize: function(c) {
            c && this._append(c);
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
            function c(d) {
              return typeof d == "string" ? u : q;
            }
            return function(d) {
              return {
                encrypt: function(p, g, N) {
                  return c(g).encrypt(d, p, g, N);
                },
                decrypt: function(p, g, N) {
                  return c(g).decrypt(d, p, g, N);
                }
              };
            };
          }()
        });
        E.StreamCipher = F.extend({
          _doFinalize: function() {
            var c = this._process(!0);
            return c;
          },
          blockSize: 1
        });
        var _ = f.mode = {}, k = E.BlockCipherMode = m.extend({
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
          createEncryptor: function(c, d) {
            return this.Encryptor.create(c, d);
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
          createDecryptor: function(c, d) {
            return this.Decryptor.create(c, d);
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
          init: function(c, d) {
            this._cipher = c, this._iv = d;
          }
        }), b = _.CBC = function() {
          var c = k.extend();
          c.Encryptor = c.extend({
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
            processBlock: function(p, g) {
              var N = this._cipher, y = N.blockSize;
              d.call(this, p, g, y), N.encryptBlock(p, g), this._prevBlock = p.slice(g, g + y);
            }
          }), c.Decryptor = c.extend({
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
            processBlock: function(p, g) {
              var N = this._cipher, y = N.blockSize, S = p.slice(g, g + y);
              N.decryptBlock(p, g), d.call(this, p, g, y), this._prevBlock = S;
            }
          });
          function d(p, g, N) {
            var y, S = this._iv;
            S ? (y = S, this._iv = a) : y = this._prevBlock;
            for (var U = 0; U < N; U++)
              p[g + U] ^= y[U];
          }
          return c;
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
          pad: function(c, d) {
            for (var p = d * 4, g = p - c.sigBytes % p, N = g << 24 | g << 16 | g << 8 | g, y = [], S = 0; S < g; S += 4)
              y.push(N);
            var U = s.create(y, g);
            c.concat(U);
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
          unpad: function(c) {
            var d = c.words[c.sigBytes - 1 >>> 2] & 255;
            c.sigBytes -= d;
          }
        };
        E.BlockCipher = F.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: F.cfg.extend({
            mode: b,
            padding: l
          }),
          reset: function() {
            var c;
            F.reset.call(this);
            var d = this.cfg, p = d.iv, g = d.mode;
            this._xformMode == this._ENC_XFORM_MODE ? c = g.createEncryptor : (c = g.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == c ? this._mode.init(this, p && p.words) : (this._mode = c.call(g, this, p && p.words), this._mode.__creator = c);
          },
          _doProcessBlock: function(c, d) {
            this._mode.processBlock(c, d);
          },
          _doFinalize: function() {
            var c, d = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (d.pad(this._data, this.blockSize), c = this._process(!0)) : (c = this._process(!0), d.unpad(c)), c;
          },
          blockSize: 128 / 32
        });
        var w = E.CipherParams = m.extend({
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
          init: function(c) {
            this.mixIn(c);
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
          toString: function(c) {
            return (c || this.formatter).stringify(this);
          }
        }), D = f.format = {}, M = D.OpenSSL = {
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
          stringify: function(c) {
            var d, p = c.ciphertext, g = c.salt;
            return g ? d = s.create([1398893684, 1701076831]).concat(g).concat(p) : d = p, d.toString(v);
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
          parse: function(c) {
            var d, p = v.parse(c), g = p.words;
            return g[0] == 1398893684 && g[1] == 1701076831 && (d = s.create(g.slice(2, 4)), g.splice(0, 4), p.sigBytes -= 16), w.create({ ciphertext: p, salt: d });
          }
        }, q = E.SerializableCipher = m.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: m.extend({
            format: M
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
          encrypt: function(c, d, p, g) {
            g = this.cfg.extend(g);
            var N = c.createEncryptor(p, g), y = N.finalize(d), S = N.cfg;
            return w.create({
              ciphertext: y,
              key: p,
              iv: S.iv,
              algorithm: c,
              mode: S.mode,
              padding: S.padding,
              blockSize: c.blockSize,
              formatter: g.format
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
          decrypt: function(c, d, p, g) {
            g = this.cfg.extend(g), d = this._parse(d, g.format);
            var N = c.createDecryptor(p, g).finalize(d.ciphertext);
            return N;
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
          _parse: function(c, d) {
            return typeof c == "string" ? d.parse(c, this) : c;
          }
        }), W = f.kdf = {}, o = W.OpenSSL = {
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
          execute: function(c, d, p, g, N) {
            if (g || (g = s.random(64 / 8)), N)
              var y = A.create({ keySize: d + p, hasher: N }).compute(c, g);
            else
              var y = A.create({ keySize: d + p }).compute(c, g);
            var S = s.create(y.words.slice(d), p * 4);
            return y.sigBytes = d * 4, w.create({ key: y, iv: S, salt: g });
          }
        }, u = E.PasswordBasedCipher = q.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: q.cfg.extend({
            kdf: o
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
          encrypt: function(c, d, p, g) {
            g = this.cfg.extend(g);
            var N = g.kdf.execute(p, c.keySize, c.ivSize, g.salt, g.hasher);
            g.iv = N.iv;
            var y = q.encrypt.call(this, c, d, N.key, g);
            return y.mixIn(N), y;
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
          decrypt: function(c, d, p, g) {
            g = this.cfg.extend(g), d = this._parse(d, g.format);
            var N = g.kdf.execute(p, c.keySize, c.ivSize, d.salt, g.hasher);
            g.iv = N.iv;
            var y = q.decrypt.call(this, c, d, N.key, g);
            return y;
          }
        });
      }();
    });
  }(Xe)), Xe.exports;
}
var Ze = { exports: {} }, Jt;
function Sn() {
  return Jt || (Jt = 1, function(t, n) {
    (function(i, a, f) {
      t.exports = a(t0(), p0());
    })(L, function(i) {
      return i.mode.CFB = function() {
        var a = i.lib.BlockCipherMode.extend();
        a.Encryptor = a.extend({
          processBlock: function(E, m) {
            var s = this._cipher, C = s.blockSize;
            f.call(this, E, m, C, s), this._prevBlock = E.slice(m, m + C);
          }
        }), a.Decryptor = a.extend({
          processBlock: function(E, m) {
            var s = this._cipher, C = s.blockSize, h = E.slice(m, m + C);
            f.call(this, E, m, C, s), this._prevBlock = h;
          }
        });
        function f(E, m, s, C) {
          var h, v = this._iv;
          v ? (h = v.slice(0), this._iv = void 0) : h = this._prevBlock, C.encryptBlock(h, 0);
          for (var R = 0; R < s; R++)
            E[m + R] ^= h[R];
        }
        return a;
      }(), i.mode.CFB;
    });
  }(Ze)), Ze.exports;
}
var Ye = { exports: {} }, $t;
function Rn() {
  return $t || ($t = 1, function(t, n) {
    (function(i, a, f) {
      t.exports = a(t0(), p0());
    })(L, function(i) {
      return i.mode.CTR = function() {
        var a = i.lib.BlockCipherMode.extend(), f = a.Encryptor = a.extend({
          processBlock: function(E, m) {
            var s = this._cipher, C = s.blockSize, h = this._iv, v = this._counter;
            h && (v = this._counter = h.slice(0), this._iv = void 0);
            var R = v.slice(0);
            s.encryptBlock(R, 0), v[C - 1] = v[C - 1] + 1 | 0;
            for (var A = 0; A < C; A++)
              E[m + A] ^= R[A];
          }
        });
        return a.Decryptor = f, a;
      }(), i.mode.CTR;
    });
  }(Ye)), Ye.exports;
}
var Je = { exports: {} }, Lt;
function kn() {
  return Lt || (Lt = 1, function(t, n) {
    (function(i, a, f) {
      t.exports = a(t0(), p0());
    })(L, function(i) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return i.mode.CTRGladman = function() {
        var a = i.lib.BlockCipherMode.extend();
        function f(s) {
          if ((s >> 24 & 255) === 255) {
            var C = s >> 16 & 255, h = s >> 8 & 255, v = s & 255;
            C === 255 ? (C = 0, h === 255 ? (h = 0, v === 255 ? v = 0 : ++v) : ++h) : ++C, s = 0, s += C << 16, s += h << 8, s += v;
          } else
            s += 1 << 24;
          return s;
        }
        function E(s) {
          return (s[0] = f(s[0])) === 0 && (s[1] = f(s[1])), s;
        }
        var m = a.Encryptor = a.extend({
          processBlock: function(s, C) {
            var h = this._cipher, v = h.blockSize, R = this._iv, A = this._counter;
            R && (A = this._counter = R.slice(0), this._iv = void 0), E(A);
            var F = A.slice(0);
            h.encryptBlock(F, 0);
            for (var _ = 0; _ < v; _++)
              s[C + _] ^= F[_];
          }
        });
        return a.Decryptor = m, a;
      }(), i.mode.CTRGladman;
    });
  }(Je)), Je.exports;
}
var $e = { exports: {} }, er;
function Nn() {
  return er || (er = 1, function(t, n) {
    (function(i, a, f) {
      t.exports = a(t0(), p0());
    })(L, function(i) {
      return i.mode.OFB = function() {
        var a = i.lib.BlockCipherMode.extend(), f = a.Encryptor = a.extend({
          processBlock: function(E, m) {
            var s = this._cipher, C = s.blockSize, h = this._iv, v = this._keystream;
            h && (v = this._keystream = h.slice(0), this._iv = void 0), s.encryptBlock(v, 0);
            for (var R = 0; R < C; R++)
              E[m + R] ^= v[R];
          }
        });
        return a.Decryptor = f, a;
      }(), i.mode.OFB;
    });
  }($e)), $e.exports;
}
var Le = { exports: {} }, tr;
function Tn() {
  return tr || (tr = 1, function(t, n) {
    (function(i, a, f) {
      t.exports = a(t0(), p0());
    })(L, function(i) {
      return i.mode.ECB = function() {
        var a = i.lib.BlockCipherMode.extend();
        return a.Encryptor = a.extend({
          processBlock: function(f, E) {
            this._cipher.encryptBlock(f, E);
          }
        }), a.Decryptor = a.extend({
          processBlock: function(f, E) {
            this._cipher.decryptBlock(f, E);
          }
        }), a;
      }(), i.mode.ECB;
    });
  }(Le)), Le.exports;
}
var et = { exports: {} }, rr;
function Pn() {
  return rr || (rr = 1, function(t, n) {
    (function(i, a, f) {
      t.exports = a(t0(), p0());
    })(L, function(i) {
      return i.pad.AnsiX923 = {
        pad: function(a, f) {
          var E = a.sigBytes, m = f * 4, s = m - E % m, C = E + s - 1;
          a.clamp(), a.words[C >>> 2] |= s << 24 - C % 4 * 8, a.sigBytes += s;
        },
        unpad: function(a) {
          var f = a.words[a.sigBytes - 1 >>> 2] & 255;
          a.sigBytes -= f;
        }
      }, i.pad.Ansix923;
    });
  }(et)), et.exports;
}
var tt = { exports: {} }, nr;
function On() {
  return nr || (nr = 1, function(t, n) {
    (function(i, a, f) {
      t.exports = a(t0(), p0());
    })(L, function(i) {
      return i.pad.Iso10126 = {
        pad: function(a, f) {
          var E = f * 4, m = E - a.sigBytes % E;
          a.concat(i.lib.WordArray.random(m - 1)).concat(i.lib.WordArray.create([m << 24], 1));
        },
        unpad: function(a) {
          var f = a.words[a.sigBytes - 1 >>> 2] & 255;
          a.sigBytes -= f;
        }
      }, i.pad.Iso10126;
    });
  }(tt)), tt.exports;
}
var rt = { exports: {} }, ir;
function Un() {
  return ir || (ir = 1, function(t, n) {
    (function(i, a, f) {
      t.exports = a(t0(), p0());
    })(L, function(i) {
      return i.pad.Iso97971 = {
        pad: function(a, f) {
          a.concat(i.lib.WordArray.create([2147483648], 1)), i.pad.ZeroPadding.pad(a, f);
        },
        unpad: function(a) {
          i.pad.ZeroPadding.unpad(a), a.sigBytes--;
        }
      }, i.pad.Iso97971;
    });
  }(rt)), rt.exports;
}
var nt = { exports: {} }, or;
function Hn() {
  return or || (or = 1, function(t, n) {
    (function(i, a, f) {
      t.exports = a(t0(), p0());
    })(L, function(i) {
      return i.pad.ZeroPadding = {
        pad: function(a, f) {
          var E = f * 4;
          a.clamp(), a.sigBytes += E - (a.sigBytes % E || E);
        },
        unpad: function(a) {
          for (var f = a.words, E = a.sigBytes - 1, E = a.sigBytes - 1; E >= 0; E--)
            if (f[E >>> 2] >>> 24 - E % 4 * 8 & 255) {
              a.sigBytes = E + 1;
              break;
            }
        }
      }, i.pad.ZeroPadding;
    });
  }(nt)), nt.exports;
}
var it = { exports: {} }, ar;
function qn() {
  return ar || (ar = 1, function(t, n) {
    (function(i, a, f) {
      t.exports = a(t0(), p0());
    })(L, function(i) {
      return i.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, i.pad.NoPadding;
    });
  }(it)), it.exports;
}
var ot = { exports: {} }, sr;
function Mn() {
  return sr || (sr = 1, function(t, n) {
    (function(i, a, f) {
      t.exports = a(t0(), p0());
    })(L, function(i) {
      return function(a) {
        var f = i, E = f.lib, m = E.CipherParams, s = f.enc, C = s.Hex, h = f.format;
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
          stringify: function(v) {
            return v.ciphertext.toString(C);
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
          parse: function(v) {
            var R = C.parse(v);
            return m.create({ ciphertext: R });
          }
        };
      }(), i.format.Hex;
    });
  }(ot)), ot.exports;
}
var at = { exports: {} }, cr;
function Wn() {
  return cr || (cr = 1, function(t, n) {
    (function(i, a, f) {
      t.exports = a(t0(), J0(), $0(), j0(), p0());
    })(L, function(i) {
      return function() {
        var a = i, f = a.lib, E = f.BlockCipher, m = a.algo, s = [], C = [], h = [], v = [], R = [], A = [], F = [], _ = [], k = [], b = [];
        (function() {
          for (var w = [], D = 0; D < 256; D++)
            D < 128 ? w[D] = D << 1 : w[D] = D << 1 ^ 283;
          for (var M = 0, q = 0, D = 0; D < 256; D++) {
            var W = q ^ q << 1 ^ q << 2 ^ q << 3 ^ q << 4;
            W = W >>> 8 ^ W & 255 ^ 99, s[M] = W, C[W] = M;
            var o = w[M], u = w[o], c = w[u], d = w[W] * 257 ^ W * 16843008;
            h[M] = d << 24 | d >>> 8, v[M] = d << 16 | d >>> 16, R[M] = d << 8 | d >>> 24, A[M] = d;
            var d = c * 16843009 ^ u * 65537 ^ o * 257 ^ M * 16843008;
            F[W] = d << 24 | d >>> 8, _[W] = d << 16 | d >>> 16, k[W] = d << 8 | d >>> 24, b[W] = d, M ? (M = o ^ w[w[w[c ^ o]]], q ^= w[w[q]]) : M = q = 1;
          }
        })();
        var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], l = m.AES = E.extend({
          _doReset: function() {
            var w;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var D = this._keyPriorReset = this._key, M = D.words, q = D.sigBytes / 4, W = this._nRounds = q + 6, o = (W + 1) * 4, u = this._keySchedule = [], c = 0; c < o; c++)
                c < q ? u[c] = M[c] : (w = u[c - 1], c % q ? q > 6 && c % q == 4 && (w = s[w >>> 24] << 24 | s[w >>> 16 & 255] << 16 | s[w >>> 8 & 255] << 8 | s[w & 255]) : (w = w << 8 | w >>> 24, w = s[w >>> 24] << 24 | s[w >>> 16 & 255] << 16 | s[w >>> 8 & 255] << 8 | s[w & 255], w ^= H[c / q | 0] << 24), u[c] = u[c - q] ^ w);
              for (var d = this._invKeySchedule = [], p = 0; p < o; p++) {
                var c = o - p;
                if (p % 4)
                  var w = u[c];
                else
                  var w = u[c - 4];
                p < 4 || c <= 4 ? d[p] = w : d[p] = F[s[w >>> 24]] ^ _[s[w >>> 16 & 255]] ^ k[s[w >>> 8 & 255]] ^ b[s[w & 255]];
              }
            }
          },
          encryptBlock: function(w, D) {
            this._doCryptBlock(w, D, this._keySchedule, h, v, R, A, s);
          },
          decryptBlock: function(w, D) {
            var M = w[D + 1];
            w[D + 1] = w[D + 3], w[D + 3] = M, this._doCryptBlock(w, D, this._invKeySchedule, F, _, k, b, C);
            var M = w[D + 1];
            w[D + 1] = w[D + 3], w[D + 3] = M;
          },
          _doCryptBlock: function(w, D, M, q, W, o, u, c) {
            for (var d = this._nRounds, p = w[D] ^ M[0], g = w[D + 1] ^ M[1], N = w[D + 2] ^ M[2], y = w[D + 3] ^ M[3], S = 4, U = 1; U < d; U++) {
              var P = q[p >>> 24] ^ W[g >>> 16 & 255] ^ o[N >>> 8 & 255] ^ u[y & 255] ^ M[S++], V = q[g >>> 24] ^ W[N >>> 16 & 255] ^ o[y >>> 8 & 255] ^ u[p & 255] ^ M[S++], Q = q[N >>> 24] ^ W[y >>> 16 & 255] ^ o[p >>> 8 & 255] ^ u[g & 255] ^ M[S++], O = q[y >>> 24] ^ W[p >>> 16 & 255] ^ o[g >>> 8 & 255] ^ u[N & 255] ^ M[S++];
              p = P, g = V, N = Q, y = O;
            }
            var P = (c[p >>> 24] << 24 | c[g >>> 16 & 255] << 16 | c[N >>> 8 & 255] << 8 | c[y & 255]) ^ M[S++], V = (c[g >>> 24] << 24 | c[N >>> 16 & 255] << 16 | c[y >>> 8 & 255] << 8 | c[p & 255]) ^ M[S++], Q = (c[N >>> 24] << 24 | c[y >>> 16 & 255] << 16 | c[p >>> 8 & 255] << 8 | c[g & 255]) ^ M[S++], O = (c[y >>> 24] << 24 | c[p >>> 16 & 255] << 16 | c[g >>> 8 & 255] << 8 | c[N & 255]) ^ M[S++];
            w[D] = P, w[D + 1] = V, w[D + 2] = Q, w[D + 3] = O;
          },
          keySize: 256 / 32
        });
        a.AES = E._createHelper(l);
      }(), i.AES;
    });
  }(at)), at.exports;
}
var st = { exports: {} }, xr;
function In() {
  return xr || (xr = 1, function(t, n) {
    (function(i, a, f) {
      t.exports = a(t0(), J0(), $0(), j0(), p0());
    })(L, function(i) {
      return function() {
        var a = i, f = a.lib, E = f.WordArray, m = f.BlockCipher, s = a.algo, C = [
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
        ], v = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], R = [
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
        ], A = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], F = s.DES = m.extend({
          _doReset: function() {
            for (var H = this._key, l = H.words, w = [], D = 0; D < 56; D++) {
              var M = C[D] - 1;
              w[D] = l[M >>> 5] >>> 31 - M % 32 & 1;
            }
            for (var q = this._subKeys = [], W = 0; W < 16; W++) {
              for (var o = q[W] = [], u = v[W], D = 0; D < 24; D++)
                o[D / 6 | 0] |= w[(h[D] - 1 + u) % 28] << 31 - D % 6, o[4 + (D / 6 | 0)] |= w[28 + (h[D + 24] - 1 + u) % 28] << 31 - D % 6;
              o[0] = o[0] << 1 | o[0] >>> 31;
              for (var D = 1; D < 7; D++)
                o[D] = o[D] >>> (D - 1) * 4 + 3;
              o[7] = o[7] << 5 | o[7] >>> 27;
            }
            for (var c = this._invSubKeys = [], D = 0; D < 16; D++)
              c[D] = q[15 - D];
          },
          encryptBlock: function(H, l) {
            this._doCryptBlock(H, l, this._subKeys);
          },
          decryptBlock: function(H, l) {
            this._doCryptBlock(H, l, this._invSubKeys);
          },
          _doCryptBlock: function(H, l, w) {
            this._lBlock = H[l], this._rBlock = H[l + 1], _.call(this, 4, 252645135), _.call(this, 16, 65535), k.call(this, 2, 858993459), k.call(this, 8, 16711935), _.call(this, 1, 1431655765);
            for (var D = 0; D < 16; D++) {
              for (var M = w[D], q = this._lBlock, W = this._rBlock, o = 0, u = 0; u < 8; u++)
                o |= R[u][((W ^ M[u]) & A[u]) >>> 0];
              this._lBlock = W, this._rBlock = q ^ o;
            }
            var c = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = c, _.call(this, 1, 1431655765), k.call(this, 8, 16711935), k.call(this, 2, 858993459), _.call(this, 16, 65535), _.call(this, 4, 252645135), H[l] = this._lBlock, H[l + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function _(H, l) {
          var w = (this._lBlock >>> H ^ this._rBlock) & l;
          this._rBlock ^= w, this._lBlock ^= w << H;
        }
        function k(H, l) {
          var w = (this._rBlock >>> H ^ this._lBlock) & l;
          this._lBlock ^= w, this._rBlock ^= w << H;
        }
        a.DES = m._createHelper(F);
        var b = s.TripleDES = m.extend({
          _doReset: function() {
            var H = this._key, l = H.words;
            if (l.length !== 2 && l.length !== 4 && l.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var w = l.slice(0, 2), D = l.length < 4 ? l.slice(0, 2) : l.slice(2, 4), M = l.length < 6 ? l.slice(0, 2) : l.slice(4, 6);
            this._des1 = F.createEncryptor(E.create(w)), this._des2 = F.createEncryptor(E.create(D)), this._des3 = F.createEncryptor(E.create(M));
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
        a.TripleDES = m._createHelper(b);
      }(), i.TripleDES;
    });
  }(st)), st.exports;
}
var ct = { exports: {} }, fr;
function zn() {
  return fr || (fr = 1, function(t, n) {
    (function(i, a, f) {
      t.exports = a(t0(), J0(), $0(), j0(), p0());
    })(L, function(i) {
      return function() {
        var a = i, f = a.lib, E = f.StreamCipher, m = a.algo, s = m.RC4 = E.extend({
          _doReset: function() {
            for (var v = this._key, R = v.words, A = v.sigBytes, F = this._S = [], _ = 0; _ < 256; _++)
              F[_] = _;
            for (var _ = 0, k = 0; _ < 256; _++) {
              var b = _ % A, H = R[b >>> 2] >>> 24 - b % 4 * 8 & 255;
              k = (k + F[_] + H) % 256;
              var l = F[_];
              F[_] = F[k], F[k] = l;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(v, R) {
            v[R] ^= C.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function C() {
          for (var v = this._S, R = this._i, A = this._j, F = 0, _ = 0; _ < 4; _++) {
            R = (R + 1) % 256, A = (A + v[R]) % 256;
            var k = v[R];
            v[R] = v[A], v[A] = k, F |= v[(v[R] + v[A]) % 256] << 24 - _ * 8;
          }
          return this._i = R, this._j = A, F;
        }
        a.RC4 = E._createHelper(s);
        var h = m.RC4Drop = s.extend({
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
            for (var v = this.cfg.drop; v > 0; v--)
              C.call(this);
          }
        });
        a.RC4Drop = E._createHelper(h);
      }(), i.RC4;
    });
  }(ct)), ct.exports;
}
var xt = { exports: {} }, ur;
function Vn() {
  return ur || (ur = 1, function(t, n) {
    (function(i, a, f) {
      t.exports = a(t0(), J0(), $0(), j0(), p0());
    })(L, function(i) {
      return function() {
        var a = i, f = a.lib, E = f.StreamCipher, m = a.algo, s = [], C = [], h = [], v = m.Rabbit = E.extend({
          _doReset: function() {
            for (var A = this._key.words, F = this.cfg.iv, _ = 0; _ < 4; _++)
              A[_] = (A[_] << 8 | A[_] >>> 24) & 16711935 | (A[_] << 24 | A[_] >>> 8) & 4278255360;
            var k = this._X = [
              A[0],
              A[3] << 16 | A[2] >>> 16,
              A[1],
              A[0] << 16 | A[3] >>> 16,
              A[2],
              A[1] << 16 | A[0] >>> 16,
              A[3],
              A[2] << 16 | A[1] >>> 16
            ], b = this._C = [
              A[2] << 16 | A[2] >>> 16,
              A[0] & 4294901760 | A[1] & 65535,
              A[3] << 16 | A[3] >>> 16,
              A[1] & 4294901760 | A[2] & 65535,
              A[0] << 16 | A[0] >>> 16,
              A[2] & 4294901760 | A[3] & 65535,
              A[1] << 16 | A[1] >>> 16,
              A[3] & 4294901760 | A[0] & 65535
            ];
            this._b = 0;
            for (var _ = 0; _ < 4; _++)
              R.call(this);
            for (var _ = 0; _ < 8; _++)
              b[_] ^= k[_ + 4 & 7];
            if (F) {
              var H = F.words, l = H[0], w = H[1], D = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360, M = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, q = D >>> 16 | M & 4294901760, W = M << 16 | D & 65535;
              b[0] ^= D, b[1] ^= q, b[2] ^= M, b[3] ^= W, b[4] ^= D, b[5] ^= q, b[6] ^= M, b[7] ^= W;
              for (var _ = 0; _ < 4; _++)
                R.call(this);
            }
          },
          _doProcessBlock: function(A, F) {
            var _ = this._X;
            R.call(this), s[0] = _[0] ^ _[5] >>> 16 ^ _[3] << 16, s[1] = _[2] ^ _[7] >>> 16 ^ _[5] << 16, s[2] = _[4] ^ _[1] >>> 16 ^ _[7] << 16, s[3] = _[6] ^ _[3] >>> 16 ^ _[1] << 16;
            for (var k = 0; k < 4; k++)
              s[k] = (s[k] << 8 | s[k] >>> 24) & 16711935 | (s[k] << 24 | s[k] >>> 8) & 4278255360, A[F + k] ^= s[k];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function R() {
          for (var A = this._X, F = this._C, _ = 0; _ < 8; _++)
            C[_] = F[_];
          F[0] = F[0] + 1295307597 + this._b | 0, F[1] = F[1] + 3545052371 + (F[0] >>> 0 < C[0] >>> 0 ? 1 : 0) | 0, F[2] = F[2] + 886263092 + (F[1] >>> 0 < C[1] >>> 0 ? 1 : 0) | 0, F[3] = F[3] + 1295307597 + (F[2] >>> 0 < C[2] >>> 0 ? 1 : 0) | 0, F[4] = F[4] + 3545052371 + (F[3] >>> 0 < C[3] >>> 0 ? 1 : 0) | 0, F[5] = F[5] + 886263092 + (F[4] >>> 0 < C[4] >>> 0 ? 1 : 0) | 0, F[6] = F[6] + 1295307597 + (F[5] >>> 0 < C[5] >>> 0 ? 1 : 0) | 0, F[7] = F[7] + 3545052371 + (F[6] >>> 0 < C[6] >>> 0 ? 1 : 0) | 0, this._b = F[7] >>> 0 < C[7] >>> 0 ? 1 : 0;
          for (var _ = 0; _ < 8; _++) {
            var k = A[_] + F[_], b = k & 65535, H = k >>> 16, l = ((b * b >>> 17) + b * H >>> 15) + H * H, w = ((k & 4294901760) * k | 0) + ((k & 65535) * k | 0);
            h[_] = l ^ w;
          }
          A[0] = h[0] + (h[7] << 16 | h[7] >>> 16) + (h[6] << 16 | h[6] >>> 16) | 0, A[1] = h[1] + (h[0] << 8 | h[0] >>> 24) + h[7] | 0, A[2] = h[2] + (h[1] << 16 | h[1] >>> 16) + (h[0] << 16 | h[0] >>> 16) | 0, A[3] = h[3] + (h[2] << 8 | h[2] >>> 24) + h[1] | 0, A[4] = h[4] + (h[3] << 16 | h[3] >>> 16) + (h[2] << 16 | h[2] >>> 16) | 0, A[5] = h[5] + (h[4] << 8 | h[4] >>> 24) + h[3] | 0, A[6] = h[6] + (h[5] << 16 | h[5] >>> 16) + (h[4] << 16 | h[4] >>> 16) | 0, A[7] = h[7] + (h[6] << 8 | h[6] >>> 24) + h[5] | 0;
        }
        a.Rabbit = E._createHelper(v);
      }(), i.Rabbit;
    });
  }(xt)), xt.exports;
}
var ft = { exports: {} }, lr;
function Gn() {
  return lr || (lr = 1, function(t, n) {
    (function(i, a, f) {
      t.exports = a(t0(), J0(), $0(), j0(), p0());
    })(L, function(i) {
      return function() {
        var a = i, f = a.lib, E = f.StreamCipher, m = a.algo, s = [], C = [], h = [], v = m.RabbitLegacy = E.extend({
          _doReset: function() {
            var A = this._key.words, F = this.cfg.iv, _ = this._X = [
              A[0],
              A[3] << 16 | A[2] >>> 16,
              A[1],
              A[0] << 16 | A[3] >>> 16,
              A[2],
              A[1] << 16 | A[0] >>> 16,
              A[3],
              A[2] << 16 | A[1] >>> 16
            ], k = this._C = [
              A[2] << 16 | A[2] >>> 16,
              A[0] & 4294901760 | A[1] & 65535,
              A[3] << 16 | A[3] >>> 16,
              A[1] & 4294901760 | A[2] & 65535,
              A[0] << 16 | A[0] >>> 16,
              A[2] & 4294901760 | A[3] & 65535,
              A[1] << 16 | A[1] >>> 16,
              A[3] & 4294901760 | A[0] & 65535
            ];
            this._b = 0;
            for (var b = 0; b < 4; b++)
              R.call(this);
            for (var b = 0; b < 8; b++)
              k[b] ^= _[b + 4 & 7];
            if (F) {
              var H = F.words, l = H[0], w = H[1], D = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360, M = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, q = D >>> 16 | M & 4294901760, W = M << 16 | D & 65535;
              k[0] ^= D, k[1] ^= q, k[2] ^= M, k[3] ^= W, k[4] ^= D, k[5] ^= q, k[6] ^= M, k[7] ^= W;
              for (var b = 0; b < 4; b++)
                R.call(this);
            }
          },
          _doProcessBlock: function(A, F) {
            var _ = this._X;
            R.call(this), s[0] = _[0] ^ _[5] >>> 16 ^ _[3] << 16, s[1] = _[2] ^ _[7] >>> 16 ^ _[5] << 16, s[2] = _[4] ^ _[1] >>> 16 ^ _[7] << 16, s[3] = _[6] ^ _[3] >>> 16 ^ _[1] << 16;
            for (var k = 0; k < 4; k++)
              s[k] = (s[k] << 8 | s[k] >>> 24) & 16711935 | (s[k] << 24 | s[k] >>> 8) & 4278255360, A[F + k] ^= s[k];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function R() {
          for (var A = this._X, F = this._C, _ = 0; _ < 8; _++)
            C[_] = F[_];
          F[0] = F[0] + 1295307597 + this._b | 0, F[1] = F[1] + 3545052371 + (F[0] >>> 0 < C[0] >>> 0 ? 1 : 0) | 0, F[2] = F[2] + 886263092 + (F[1] >>> 0 < C[1] >>> 0 ? 1 : 0) | 0, F[3] = F[3] + 1295307597 + (F[2] >>> 0 < C[2] >>> 0 ? 1 : 0) | 0, F[4] = F[4] + 3545052371 + (F[3] >>> 0 < C[3] >>> 0 ? 1 : 0) | 0, F[5] = F[5] + 886263092 + (F[4] >>> 0 < C[4] >>> 0 ? 1 : 0) | 0, F[6] = F[6] + 1295307597 + (F[5] >>> 0 < C[5] >>> 0 ? 1 : 0) | 0, F[7] = F[7] + 3545052371 + (F[6] >>> 0 < C[6] >>> 0 ? 1 : 0) | 0, this._b = F[7] >>> 0 < C[7] >>> 0 ? 1 : 0;
          for (var _ = 0; _ < 8; _++) {
            var k = A[_] + F[_], b = k & 65535, H = k >>> 16, l = ((b * b >>> 17) + b * H >>> 15) + H * H, w = ((k & 4294901760) * k | 0) + ((k & 65535) * k | 0);
            h[_] = l ^ w;
          }
          A[0] = h[0] + (h[7] << 16 | h[7] >>> 16) + (h[6] << 16 | h[6] >>> 16) | 0, A[1] = h[1] + (h[0] << 8 | h[0] >>> 24) + h[7] | 0, A[2] = h[2] + (h[1] << 16 | h[1] >>> 16) + (h[0] << 16 | h[0] >>> 16) | 0, A[3] = h[3] + (h[2] << 8 | h[2] >>> 24) + h[1] | 0, A[4] = h[4] + (h[3] << 16 | h[3] >>> 16) + (h[2] << 16 | h[2] >>> 16) | 0, A[5] = h[5] + (h[4] << 8 | h[4] >>> 24) + h[3] | 0, A[6] = h[6] + (h[5] << 16 | h[5] >>> 16) + (h[4] << 16 | h[4] >>> 16) | 0, A[7] = h[7] + (h[6] << 8 | h[6] >>> 24) + h[5] | 0;
        }
        a.RabbitLegacy = E._createHelper(v);
      }(), i.RabbitLegacy;
    });
  }(ft)), ft.exports;
}
var ut = { exports: {} }, hr;
function Kn() {
  return hr || (hr = 1, function(t, n) {
    (function(i, a, f) {
      t.exports = a(t0(), J0(), $0(), j0(), p0());
    })(L, function(i) {
      return function() {
        var a = i, f = a.lib, E = f.BlockCipher, m = a.algo;
        const s = 16, C = [
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
        var v = {
          pbox: [],
          sbox: []
        };
        function R(b, H) {
          let l = H >> 24 & 255, w = H >> 16 & 255, D = H >> 8 & 255, M = H & 255, q = b.sbox[0][l] + b.sbox[1][w];
          return q = q ^ b.sbox[2][D], q = q + b.sbox[3][M], q;
        }
        function A(b, H, l) {
          let w = H, D = l, M;
          for (let q = 0; q < s; ++q)
            w = w ^ b.pbox[q], D = R(b, w) ^ D, M = w, w = D, D = M;
          return M = w, w = D, D = M, D = D ^ b.pbox[s], w = w ^ b.pbox[s + 1], { left: w, right: D };
        }
        function F(b, H, l) {
          let w = H, D = l, M;
          for (let q = s + 1; q > 1; --q)
            w = w ^ b.pbox[q], D = R(b, w) ^ D, M = w, w = D, D = M;
          return M = w, w = D, D = M, D = D ^ b.pbox[1], w = w ^ b.pbox[0], { left: w, right: D };
        }
        function _(b, H, l) {
          for (let W = 0; W < 4; W++) {
            b.sbox[W] = [];
            for (let o = 0; o < 256; o++)
              b.sbox[W][o] = h[W][o];
          }
          let w = 0;
          for (let W = 0; W < s + 2; W++)
            b.pbox[W] = C[W] ^ H[w], w++, w >= l && (w = 0);
          let D = 0, M = 0, q = 0;
          for (let W = 0; W < s + 2; W += 2)
            q = A(b, D, M), D = q.left, M = q.right, b.pbox[W] = D, b.pbox[W + 1] = M;
          for (let W = 0; W < 4; W++)
            for (let o = 0; o < 256; o += 2)
              q = A(b, D, M), D = q.left, M = q.right, b.sbox[W][o] = D, b.sbox[W][o + 1] = M;
          return !0;
        }
        var k = m.Blowfish = E.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var b = this._keyPriorReset = this._key, H = b.words, l = b.sigBytes / 4;
              _(v, H, l);
            }
          },
          encryptBlock: function(b, H) {
            var l = A(v, b[H], b[H + 1]);
            b[H] = l.left, b[H + 1] = l.right;
          },
          decryptBlock: function(b, H) {
            var l = F(v, b[H], b[H + 1]);
            b[H] = l.left, b[H + 1] = l.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        a.Blowfish = E._createHelper(k);
      }(), i.Blowfish;
    });
  }(ut)), ut.exports;
}
(function(t, n) {
  (function(i, a, f) {
    t.exports = a(t0(), De(), Cn(), yn(), J0(), wn(), $0(), wr(), Ct(), Fn(), Fr(), mn(), _n(), bn(), yt(), Dn(), j0(), p0(), Sn(), Rn(), kn(), Nn(), Tn(), Pn(), On(), Un(), Hn(), qn(), Mn(), Wn(), In(), zn(), Vn(), Gn(), Kn());
  })(L, function(i) {
    return i;
  });
})(yr);
var jn = yr.exports;
const mr = /* @__PURE__ */ sn(jn);
typeof window < "u" && (window.Buffer = ve.Buffer);
const Qn = ve.Buffer.alloc(32), Xn = `
account-id`, Zn = (t) => t < 0 ? (Number(t) >>> 0).toString(16) : Number(t).toString(16), dr = (t) => {
  const n = [];
  for (let i = 0; i < t.length; i += 1)
    n[i / 4 | 0] |= t[i] << 24 - 8 * (i % 4);
  return mr.lib.WordArray.create(n, t.length);
}, Yn = (t, n) => {
  const i = [];
  return n > 0 && i.push(t >>> 24), n > 1 && i.push(t >>> 16 & 255), n > 2 && i.push(t >>> 8 & 255), n > 3 && i.push(t & 255), i;
}, Jn = (t, n) => {
  "sigBytes" in t && "words" in t && (n = t.sigBytes, t = t.words);
  let i = [], a, f = 0;
  for (; n > 0; )
    a = Yn(t[f], Math.min(4, n)), n -= a.length, i = [...i, ...a], f++;
  return i;
}, $n = (t) => {
  const n = new Uint8Array(t), i = an.unsigned(ve.Buffer.from(n));
  return Zn(i).padStart(8, "0");
}, pe = (t, n = "") => {
  try {
    const i = W0.from(t), a = mr.algo.SHA224.create();
    a.update(Xn), a.update(dr(i.toUint8Array()));
    const f = ve.Buffer.from(Qn);
    n && f.writeUInt32BE(Number(n), 0), a.update(dr(f));
    const E = a.finalize(), m = Jn(E, 28);
    return $n(m) + E.toString();
  } catch (i) {
    throw new Error(i);
  }
}, Ln = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20fill='none'%3e%3cpath%20d='M11.794%202.433A1.162%201.162%200%200%200%2011.548.12L9.174.374c-1.216.13-2.191.234-2.983.378-.816.148-1.516.35-2.165.714a6.675%206.675%200%200%200-2.53%202.506c-.37.646-.578%201.343-.732%202.157C.614%206.919.5%207.893.36%209.106l-.006.052-.233%202.318a1.162%201.162%200%201%200%202.313.232l.231-2.3c.146-1.264.249-2.15.381-2.845.13-.682.275-1.1.467-1.436a4.35%204.35%200%200%201%201.648-1.633c.338-.19.76-.331%201.443-.455.699-.127%201.59-.223%202.86-.358l2.33-.248Zm22.613-1.28a1.162%201.162%200%200%200%201.033%201.28l2.33.248c1.27.135%202.16.231%202.859.358.684.124%201.105.265%201.443.455a4.35%204.35%200%200%201%201.648%201.633c.193.335.337.754.467%201.436.132.695.235%201.581.38%202.844l.232%202.302a1.162%201.162%200%201%200%202.313-.233l-.233-2.318-.006-.052c-.14-1.214-.252-2.187-.402-2.977-.155-.814-.364-1.511-.734-2.157a6.675%206.675%200%200%200-2.529-2.506c-.65-.364-1.349-.566-2.165-.714-.792-.144-1.767-.248-2.983-.378L35.686.121a1.162%201.162%200%200%200-1.279%201.033Zm0%2044.923a1.162%201.162%200%200%201%201.033-1.28l2.33-.248c1.27-.135%202.16-.23%202.859-.357.684-.124%201.105-.266%201.443-.455a4.35%204.35%200%200%200%201.648-1.633c.193-.336.337-.755.467-1.437.132-.695.235-1.581.38-2.844l.232-2.301a1.162%201.162%200%201%201%202.313.233l-.233%202.317-.006.053c-.14%201.213-.252%202.186-.402%202.976-.155.814-.364%201.512-.734%202.158a6.675%206.675%200%200%201-2.529%202.506c-.65.364-1.349.566-2.165.714-.792.143-1.767.247-2.983.377l-2.374.253a1.162%201.162%200%200%201-1.279-1.032Zm-21.58%200a1.162%201.162%200%200%200-1.033-1.28l-2.33-.248c-1.27-.135-2.16-.23-2.859-.357-.684-.124-1.105-.266-1.443-.455a4.35%204.35%200%200%201-1.648-1.633c-.192-.336-.337-.755-.467-1.437-.132-.695-.235-1.581-.38-2.844l-.232-2.301a1.162%201.162%200%200%200-2.313.233l.233%202.317.006.053c.14%201.213.252%202.186.403%202.976.154.814.363%201.512.733%202.158a6.674%206.674%200%200%200%202.529%202.506c.65.364%201.349.566%202.165.714.792.143%201.767.247%202.983.377l2.374.253a1.162%201.162%200%200%200%201.279-1.032Zm-.636-31.422a1%201%200%200%200-1%201v16.264a1%201%200%200%200%201%201h3.166a1%201%200%200%200%201-1V15.654a1%201%200%200%200-1-1h-3.166Zm8.56%200a1%201%200%200%200-1%201v16.264a1%201%200%200%200%201%201h7.637c2%200%203.774-.374%205.322-1.122%201.548-.748%202.749-1.809%203.601-3.183.852-1.374%201.279-2.983%201.279-4.827%200-1.844-.427-3.453-1.279-4.827-.852-1.374-2.053-2.435-3.6-3.183-1.549-.748-3.323-1.122-5.323-1.122H20.75Zm11.185%2012.811c-.94.887-2.192%201.33-3.757%201.33h-2.962a.3.3%200%200%201-.3-.3v-9.419a.3.3%200%200%201%20.3-.3h2.962c1.565%200%202.818.444%203.757%201.331.957.887%201.435%202.114%201.435%203.68%200%201.565-.478%202.79-1.435%203.678Z'%20fill='url(%23a)'/%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='11.415'%20y1='15.756'%20x2='27.548'%20y2='39.206'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23CC5CDC'/%3e%3cstop%20offset='.245'%20stop-color='%237B66FF'/%3e%3cstop%20offset='.521'%20stop-color='%231F8AF0'/%3e%3cstop%20offset='.76'%20stop-color='%2300D1FF'/%3e%3cstop%20offset='1'%20stop-color='%233DEDD7'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", wt = 4e3, te = (t) => {
  if (typeof globalThis.Buffer < "u")
    return globalThis.Buffer.from(t, "base64").buffer;
  if (typeof globalThis.atob < "u")
    return Uint8Array.from(globalThis.atob(t), (n) => n.charCodeAt(0)).buffer;
  throw Error("Could not decode base64 string");
}, we = (t) => {
  if (typeof globalThis.Buffer < "u")
    return globalThis.Buffer.from(t).toString("base64");
  if (typeof globalThis.btoa < "u")
    return btoa(String.fromCharCode(...new Uint8Array(t)));
  throw Error("Could not encode base64 string");
};
var re = function(t, n, i, a, f) {
  if (typeof n == "function" ? t !== n || !f : !n.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n.set(t, i), i;
}, u0 = function(t, n, i, a) {
  if (i === "a" && !a) throw new TypeError("Private accessor was defined without a getter");
  if (typeof n == "function" ? t !== n || !a : !n.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return i === "m" ? a : i === "a" ? a.call(t) : a ? a.value : n.get(t);
}, E0, M0, ie, Ae;
class ce extends Error {
  constructor(n) {
    super(n.message), Object.setPrototypeOf(this, ce.prototype), this.code = n.code, this.data = n.data;
  }
}
const pr = (t) => new ce({
  code: wt,
  message: t instanceof Error ? t.message : "Network error"
}), ne = (t) => {
  if ("error" in t)
    throw new ce(t.error);
  if ("result" in t)
    return t.result;
  throw new ce({
    code: wt,
    message: "Invalid response"
  });
};
class ei {
  constructor(n) {
    E0.set(this, void 0), M0.set(this, void 0), ie.set(this, void 0), Ae.set(this, void 0), re(this, E0, Object.assign({ autoCloseTransportChannel: !0, closeTransportChannelAfter: 200, crypto: globalThis.crypto }, n));
  }
  get transport() {
    return u0(this, E0, "f").transport;
  }
  async openChannel() {
    if (clearTimeout(u0(this, Ae, "f")), u0(this, ie, "f") && await u0(this, ie, "f"), u0(this, M0, "f") && !u0(this, M0, "f").closed)
      return u0(this, M0, "f");
    const n = u0(this, E0, "f").transport.establishChannel();
    return re(this, ie, n.then(() => {
    }).catch(() => {
    })), re(this, M0, void 0), re(this, M0, await n.catch((i) => {
      throw pr(i);
    })), re(this, ie, void 0), u0(this, M0, "f");
  }
  async closeChannel() {
    var n;
    await ((n = u0(this, M0, "f")) === null || n === void 0 ? void 0 : n.close());
  }
  async transformRequest(n) {
    return u0(this, E0, "f").derivationOrigin ? Object.assign(Object.assign({}, n), { params: Object.assign(Object.assign({}, n.params), { icrc95DerivationOrigin: u0(this, E0, "f").derivationOrigin }) }) : n;
  }
  async sendRequest(n) {
    const i = await this.openChannel();
    return new Promise(async (a, f) => {
      const E = i.addEventListener("response", async (s) => {
        s.id === n.id && (E(), m(), a(s), u0(this, E0, "f").autoCloseTransportChannel && re(this, Ae, setTimeout(() => {
          i.closed || i.close();
        }, u0(this, E0, "f").closeTransportChannelAfter)));
      }), m = i.addEventListener("close", () => {
        E(), m(), f(new ce({
          code: wt,
          message: "Channel was closed before a response was received"
        }));
      });
      try {
        await i.send(await this.transformRequest(n));
      } catch (s) {
        E(), m(), f(pr(s));
      }
    });
  }
  async supportedStandards() {
    const n = await this.sendRequest({
      id: u0(this, E0, "f").crypto.randomUUID(),
      jsonrpc: "2.0",
      method: "icrc25_supported_standards"
    });
    return ne(n).supportedStandards;
  }
  async requestPermissions(n) {
    const i = await this.sendRequest({
      id: u0(this, E0, "f").crypto.randomUUID(),
      jsonrpc: "2.0",
      method: "icrc25_request_permissions",
      params: { scopes: n }
    });
    return ne(i).scopes;
  }
  async permissions() {
    const n = await this.sendRequest({
      id: u0(this, E0, "f").crypto.randomUUID(),
      jsonrpc: "2.0",
      method: "icrc25_permissions"
    });
    return ne(n).scopes;
  }
  async accounts() {
    const n = await this.sendRequest({
      id: u0(this, E0, "f").crypto.randomUUID(),
      jsonrpc: "2.0",
      method: "icrc27_accounts"
    });
    return ne(n).accounts.map(({ owner: a, subaccount: f }) => ({
      owner: W0.fromText(a),
      subaccount: f === void 0 ? void 0 : te(f)
    }));
  }
  async delegation(n) {
    var i;
    const a = await this.sendRequest({
      id: u0(this, E0, "f").crypto.randomUUID(),
      jsonrpc: "2.0",
      method: "icrc34_delegation",
      params: {
        publicKey: we(n.publicKey),
        targets: (i = n.targets) === null || i === void 0 ? void 0 : i.map((E) => E.toText()),
        maxTimeToLive: n.maxTimeToLive === void 0 ? void 0 : String(n.maxTimeToLive)
      }
    }), f = ne(a);
    return gr.fromDelegations(f.signerDelegation.map((E) => {
      var m;
      return {
        delegation: new Qr(te(E.delegation.pubkey), BigInt(E.delegation.expiration), (m = E.delegation.targets) === null || m === void 0 ? void 0 : m.map((s) => W0.fromText(s))),
        signature: te(E.signature)
      };
    }), te(f.publicKey));
  }
  async callCanister(n) {
    const i = await this.sendRequest({
      id: u0(this, E0, "f").crypto.randomUUID(),
      jsonrpc: "2.0",
      method: "icrc49_call_canister",
      params: {
        canisterId: n.canisterId.toText(),
        sender: n.sender.toText(),
        method: n.method,
        arg: we(n.arg)
      }
    }), a = ne(i), f = te(a.contentMap), E = te(a.certificate);
    return { contentMap: f, certificate: E };
  }
}
E0 = /* @__PURE__ */ new WeakMap(), M0 = /* @__PURE__ */ new WeakMap(), ie = /* @__PURE__ */ new WeakMap(), Ae = /* @__PURE__ */ new WeakMap();
const ti = (t) => typeof t == "object" && !!t && "jsonrpc" in t && t.jsonrpc === "2.0", _r = (t) => ti(t) && "id" in t && (typeof t.id == "string" || typeof t.id == "number");
var ri = function(t, n, i, a, f) {
  if (typeof n == "function" ? t !== n || !f : !n.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n.set(t, i), i;
}, l0 = function(t, n, i, a) {
  if (i === "a" && !a) throw new TypeError("Private accessor was defined without a getter");
  if (typeof n == "function" ? t !== n || !a : !n.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return i === "m" ? a : i === "a" ? a.call(t) : a ? a.value : n.get(t);
}, ue, d0;
class ni {
  constructor(n) {
    ue.set(this, /* @__PURE__ */ new Set()), d0.set(this, void 0), ri(this, d0, Object.assign({ window: globalThis.window, windowCloseMonitoringInterval: 500, manageFocus: !0 }, n));
    const i = setInterval(() => {
      l0(this, d0, "f").signerWindow.closed && (l0(this, ue, "f").forEach((a) => a()), clearInterval(i));
    }, l0(this, d0, "f").windowCloseMonitoringInterval);
  }
  get closed() {
    return l0(this, d0, "f").signerWindow.closed;
  }
  addEventListener(...[n, i]) {
    switch (n) {
      case "close":
        return l0(this, ue, "f").add(i), () => {
          l0(this, ue, "f").delete(i);
        };
      case "response":
        const a = async (f) => {
          f.source !== l0(this, d0, "f").signerWindow || f.origin !== l0(this, d0, "f").signerOrigin || !_r(f.data) || i(f.data);
        };
        return l0(this, d0, "f").window.addEventListener("message", a), () => {
          l0(this, d0, "f").window.removeEventListener("message", a);
        };
    }
  }
  async send(n) {
    if (l0(this, d0, "f").signerWindow.closed)
      throw new se("Communication channel is closed");
    l0(this, d0, "f").signerWindow.postMessage(n, l0(this, d0, "f").signerOrigin), l0(this, d0, "f").manageFocus && l0(this, d0, "f").signerWindow.focus();
  }
  async close() {
    l0(this, d0, "f").signerWindow.close(), l0(this, d0, "f").manageFocus && l0(this, d0, "f").window.focus();
  }
}
ue = /* @__PURE__ */ new WeakMap(), d0 = /* @__PURE__ */ new WeakMap();
const ii = (t) => {
  try {
    const n = new URL(t);
    return n.protocol === "https:" || n.hostname === "127.0.0.1" || n.hostname.split(".").slice(-1)[0] === "localhost";
  } catch {
    return !1;
  }
};
var oi = function(t, n, i, a, f) {
  if (typeof n == "function" ? t !== n || !f : !n.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n.set(t, i), i;
}, T0 = function(t, n, i, a) {
  if (i === "a" && !a) throw new TypeError("Private accessor was defined without a getter");
  if (typeof n == "function" ? t !== n || !a : !n.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return i === "m" ? a : i === "a" ? a.call(t) : a ? a.value : n.get(t);
}, C0;
class se extends Error {
  constructor(n) {
    super(n), Object.setPrototypeOf(this, se.prototype);
  }
}
class ai {
  constructor(n) {
    var i;
    if (C0.set(this, void 0), !ii(n.url))
      throw new se("Invalid signer RPC url");
    oi(this, C0, Object.assign({ windowOpenerFeatures: (i = n.windowOpenerFeatures) !== null && i !== void 0 ? i : "", window: globalThis.window, crypto: globalThis.crypto, statusPollingRate: 200, statusTimeout: 5e3, windowCloseMonitoringInterval: 500, manageFocus: !0 }, n));
  }
  async establishChannel() {
    const n = globalThis.open(T0(this, C0, "f").url, "signerWindow", T0(this, C0, "f").windowOpenerFeatures);
    if (!n)
      throw new se("Communication channel could not be established");
    const i = T0(this, C0, "f").crypto.randomUUID();
    return new Promise((a, f) => {
      const E = (C) => {
        C.source !== n || !_r(C.data) || C.data.id !== i || !("result" in C.data) || C.data.result !== "ready" || (clearInterval(m), clearTimeout(s), T0(this, C0, "f").window.removeEventListener("message", E), a(new ni({
          signerWindow: n,
          signerOrigin: C.origin,
          window: T0(this, C0, "f").window,
          windowCloseMonitoringInterval: T0(this, C0, "f").windowCloseMonitoringInterval,
          manageFocus: T0(this, C0, "f").manageFocus
        })));
      };
      T0(this, C0, "f").window.addEventListener("message", E);
      const m = setInterval(() => {
        n.postMessage({ jsonrpc: "2.0", id: i, method: "icrc29_status" }, "*");
      }, T0(this, C0, "f").statusPollingRate), s = setTimeout(() => {
        clearInterval(m), T0(this, C0, "f").window.removeEventListener("message", E), f(new se("Establish communication channel timeout"));
      }, T0(this, C0, "f").statusTimeout);
    });
  }
}
C0 = /* @__PURE__ */ new WeakMap();
var si = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, lt = Math.ceil, D0 = Math.floor, y0 = "[BigNumber Error] ", vr = y0 + "Number primitive has more than 15 significant digits: ", P0 = 1e14, J = 14, ht = 9007199254740991, dt = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], K0 = 1e7, h0 = 1e9;
function br(t) {
  var n, i, a, f = l.prototype = { constructor: l, toString: null, valueOf: null }, E = new l(1), m = 20, s = 4, C = -7, h = 21, v = -1e7, R = 1e7, A = !1, F = 1, _ = 0, k = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, b = "0123456789abcdefghijklmnopqrstuvwxyz", H = !0;
  function l(o, u) {
    var c, d, p, g, N, y, S, U, P = this;
    if (!(P instanceof l)) return new l(o, u);
    if (u == null) {
      if (o && o._isBigNumber === !0) {
        P.s = o.s, !o.c || o.e > R ? P.c = P.e = null : o.e < v ? P.c = [P.e = 0] : (P.e = o.e, P.c = o.c.slice());
        return;
      }
      if ((y = typeof o == "number") && o * 0 == 0) {
        if (P.s = 1 / o < 0 ? (o = -o, -1) : 1, o === ~~o) {
          for (g = 0, N = o; N >= 10; N /= 10, g++) ;
          g > R ? P.c = P.e = null : (P.e = g, P.c = [o]);
          return;
        }
        U = String(o);
      } else {
        if (!si.test(U = String(o))) return a(P, U, y);
        P.s = U.charCodeAt(0) == 45 ? (U = U.slice(1), -1) : 1;
      }
      (g = U.indexOf(".")) > -1 && (U = U.replace(".", "")), (N = U.search(/e/i)) > 0 ? (g < 0 && (g = N), g += +U.slice(N + 1), U = U.substring(0, N)) : g < 0 && (g = U.length);
    } else {
      if (f0(u, 2, b.length, "Base"), u == 10 && H)
        return P = new l(o), q(P, m + P.e + 1, s);
      if (U = String(o), y = typeof o == "number") {
        if (o * 0 != 0) return a(P, U, y, u);
        if (P.s = 1 / o < 0 ? (U = U.slice(1), -1) : 1, l.DEBUG && U.replace(/^0\.0*|\./, "").length > 15)
          throw Error(vr + o);
      } else
        P.s = U.charCodeAt(0) === 45 ? (U = U.slice(1), -1) : 1;
      for (c = b.slice(0, u), g = N = 0, S = U.length; N < S; N++)
        if (c.indexOf(d = U.charAt(N)) < 0) {
          if (d == ".") {
            if (N > g) {
              g = S;
              continue;
            }
          } else if (!p && (U == U.toUpperCase() && (U = U.toLowerCase()) || U == U.toLowerCase() && (U = U.toUpperCase()))) {
            p = !0, N = -1, g = 0;
            continue;
          }
          return a(P, String(o), y, u);
        }
      y = !1, U = i(U, u, 10, P.s), (g = U.indexOf(".")) > -1 ? U = U.replace(".", "") : g = U.length;
    }
    for (N = 0; U.charCodeAt(N) === 48; N++) ;
    for (S = U.length; U.charCodeAt(--S) === 48; ) ;
    if (U = U.slice(N, ++S)) {
      if (S -= N, y && l.DEBUG && S > 15 && (o > ht || o !== D0(o)))
        throw Error(vr + P.s * o);
      if ((g = g - N - 1) > R)
        P.c = P.e = null;
      else if (g < v)
        P.c = [P.e = 0];
      else {
        if (P.e = g, P.c = [], N = (g + 1) % J, g < 0 && (N += J), N < S) {
          for (N && P.c.push(+U.slice(0, N)), S -= J; N < S; )
            P.c.push(+U.slice(N, N += J));
          N = J - (U = U.slice(N)).length;
        } else
          N -= S;
        for (; N--; U += "0") ;
        P.c.push(+U);
      }
    } else
      P.c = [P.e = 0];
  }
  l.clone = br, l.ROUND_UP = 0, l.ROUND_DOWN = 1, l.ROUND_CEIL = 2, l.ROUND_FLOOR = 3, l.ROUND_HALF_UP = 4, l.ROUND_HALF_DOWN = 5, l.ROUND_HALF_EVEN = 6, l.ROUND_HALF_CEIL = 7, l.ROUND_HALF_FLOOR = 8, l.EUCLID = 9, l.config = l.set = function(o) {
    var u, c;
    if (o != null)
      if (typeof o == "object") {
        if (o.hasOwnProperty(u = "DECIMAL_PLACES") && (c = o[u], f0(c, 0, h0, u), m = c), o.hasOwnProperty(u = "ROUNDING_MODE") && (c = o[u], f0(c, 0, 8, u), s = c), o.hasOwnProperty(u = "EXPONENTIAL_AT") && (c = o[u], c && c.pop ? (f0(c[0], -h0, 0, u), f0(c[1], 0, h0, u), C = c[0], h = c[1]) : (f0(c, -h0, h0, u), C = -(h = c < 0 ? -c : c))), o.hasOwnProperty(u = "RANGE"))
          if (c = o[u], c && c.pop)
            f0(c[0], -h0, -1, u), f0(c[1], 1, h0, u), v = c[0], R = c[1];
          else if (f0(c, -h0, h0, u), c)
            v = -(R = c < 0 ? -c : c);
          else
            throw Error(y0 + u + " cannot be zero: " + c);
        if (o.hasOwnProperty(u = "CRYPTO"))
          if (c = o[u], c === !!c)
            if (c)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                A = c;
              else
                throw A = !c, Error(y0 + "crypto unavailable");
            else
              A = c;
          else
            throw Error(y0 + u + " not true or false: " + c);
        if (o.hasOwnProperty(u = "MODULO_MODE") && (c = o[u], f0(c, 0, 9, u), F = c), o.hasOwnProperty(u = "POW_PRECISION") && (c = o[u], f0(c, 0, h0, u), _ = c), o.hasOwnProperty(u = "FORMAT"))
          if (c = o[u], typeof c == "object") k = c;
          else throw Error(y0 + u + " not an object: " + c);
        if (o.hasOwnProperty(u = "ALPHABET"))
          if (c = o[u], typeof c == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(c))
            H = c.slice(0, 10) == "0123456789", b = c;
          else
            throw Error(y0 + u + " invalid: " + c);
      } else
        throw Error(y0 + "Object expected: " + o);
    return {
      DECIMAL_PLACES: m,
      ROUNDING_MODE: s,
      EXPONENTIAL_AT: [C, h],
      RANGE: [v, R],
      CRYPTO: A,
      MODULO_MODE: F,
      POW_PRECISION: _,
      FORMAT: k,
      ALPHABET: b
    };
  }, l.isBigNumber = function(o) {
    if (!o || o._isBigNumber !== !0) return !1;
    if (!l.DEBUG) return !0;
    var u, c, d = o.c, p = o.e, g = o.s;
    e: if ({}.toString.call(d) == "[object Array]") {
      if ((g === 1 || g === -1) && p >= -h0 && p <= h0 && p === D0(p)) {
        if (d[0] === 0) {
          if (p === 0 && d.length === 1) return !0;
          break e;
        }
        if (u = (p + 1) % J, u < 1 && (u += J), String(d[0]).length == u) {
          for (u = 0; u < d.length; u++)
            if (c = d[u], c < 0 || c >= P0 || c !== D0(c)) break e;
          if (c !== 0) return !0;
        }
      }
    } else if (d === null && p === null && (g === null || g === 1 || g === -1))
      return !0;
    throw Error(y0 + "Invalid BigNumber: " + o);
  }, l.maximum = l.max = function() {
    return D(arguments, -1);
  }, l.minimum = l.min = function() {
    return D(arguments, 1);
  }, l.random = function() {
    var o = 9007199254740992, u = Math.random() * o & 2097151 ? function() {
      return D0(Math.random() * o);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(c) {
      var d, p, g, N, y, S = 0, U = [], P = new l(E);
      if (c == null ? c = m : f0(c, 0, h0), N = lt(c / J), A)
        if (crypto.getRandomValues) {
          for (d = crypto.getRandomValues(new Uint32Array(N *= 2)); S < N; )
            y = d[S] * 131072 + (d[S + 1] >>> 11), y >= 9e15 ? (p = crypto.getRandomValues(new Uint32Array(2)), d[S] = p[0], d[S + 1] = p[1]) : (U.push(y % 1e14), S += 2);
          S = N / 2;
        } else if (crypto.randomBytes) {
          for (d = crypto.randomBytes(N *= 7); S < N; )
            y = (d[S] & 31) * 281474976710656 + d[S + 1] * 1099511627776 + d[S + 2] * 4294967296 + d[S + 3] * 16777216 + (d[S + 4] << 16) + (d[S + 5] << 8) + d[S + 6], y >= 9e15 ? crypto.randomBytes(7).copy(d, S) : (U.push(y % 1e14), S += 7);
          S = N / 7;
        } else
          throw A = !1, Error(y0 + "crypto unavailable");
      if (!A)
        for (; S < N; )
          y = u(), y < 9e15 && (U[S++] = y % 1e14);
      for (N = U[--S], c %= J, N && c && (y = dt[J - c], U[S] = D0(N / y) * y); U[S] === 0; U.pop(), S--) ;
      if (S < 0)
        U = [g = 0];
      else {
        for (g = -1; U[0] === 0; U.splice(0, 1), g -= J) ;
        for (S = 1, y = U[0]; y >= 10; y /= 10, S++) ;
        S < J && (g -= J - S);
      }
      return P.e = g, P.c = U, P;
    };
  }(), l.sum = function() {
    for (var o = 1, u = arguments, c = new l(u[0]); o < u.length; ) c = c.plus(u[o++]);
    return c;
  }, i = /* @__PURE__ */ function() {
    var o = "0123456789";
    function u(c, d, p, g) {
      for (var N, y = [0], S, U = 0, P = c.length; U < P; ) {
        for (S = y.length; S--; y[S] *= d) ;
        for (y[0] += g.indexOf(c.charAt(U++)), N = 0; N < y.length; N++)
          y[N] > p - 1 && (y[N + 1] == null && (y[N + 1] = 0), y[N + 1] += y[N] / p | 0, y[N] %= p);
      }
      return y.reverse();
    }
    return function(c, d, p, g, N) {
      var y, S, U, P, V, Q, O, z, K = c.indexOf("."), G = m, X = s;
      for (K >= 0 && (P = _, _ = 0, c = c.replace(".", ""), z = new l(d), Q = z.pow(c.length - K), _ = P, z.c = u(
        q0(b0(Q.c), Q.e, "0"),
        10,
        p,
        o
      ), z.e = z.c.length), O = u(c, d, p, N ? (y = b, o) : (y = o, b)), U = P = O.length; O[--P] == 0; O.pop()) ;
      if (!O[0]) return y.charAt(0);
      if (K < 0 ? --U : (Q.c = O, Q.e = U, Q.s = g, Q = n(Q, z, G, X, p), O = Q.c, V = Q.r, U = Q.e), S = U + G + 1, K = O[S], P = p / 2, V = V || S < 0 || O[S + 1] != null, V = X < 4 ? (K != null || V) && (X == 0 || X == (Q.s < 0 ? 3 : 2)) : K > P || K == P && (X == 4 || V || X == 6 && O[S - 1] & 1 || X == (Q.s < 0 ? 8 : 7)), S < 1 || !O[0])
        c = V ? q0(y.charAt(1), -G, y.charAt(0)) : y.charAt(0);
      else {
        if (O.length = S, V)
          for (--p; ++O[--S] > p; )
            O[S] = 0, S || (++U, O = [1].concat(O));
        for (P = O.length; !O[--P]; ) ;
        for (K = 0, c = ""; K <= P; c += y.charAt(O[K++])) ;
        c = q0(c, U, y.charAt(0));
      }
      return c;
    };
  }(), n = /* @__PURE__ */ function() {
    function o(d, p, g) {
      var N, y, S, U, P = 0, V = d.length, Q = p % K0, O = p / K0 | 0;
      for (d = d.slice(); V--; )
        S = d[V] % K0, U = d[V] / K0 | 0, N = O * S + U * Q, y = Q * S + N % K0 * K0 + P, P = (y / g | 0) + (N / K0 | 0) + O * U, d[V] = y % g;
      return P && (d = [P].concat(d)), d;
    }
    function u(d, p, g, N) {
      var y, S;
      if (g != N)
        S = g > N ? 1 : -1;
      else
        for (y = S = 0; y < g; y++)
          if (d[y] != p[y]) {
            S = d[y] > p[y] ? 1 : -1;
            break;
          }
      return S;
    }
    function c(d, p, g, N) {
      for (var y = 0; g--; )
        d[g] -= y, y = d[g] < p[g] ? 1 : 0, d[g] = y * N + d[g] - p[g];
      for (; !d[0] && d.length > 1; d.splice(0, 1)) ;
    }
    return function(d, p, g, N, y) {
      var S, U, P, V, Q, O, z, K, G, X, Z, r0, Y, w0, F0, v0, g0, n0 = d.s == p.s ? 1 : -1, e0 = d.c, o0 = p.c;
      if (!e0 || !e0[0] || !o0 || !o0[0])
        return new l(
          // Return NaN if either NaN, or both Infinity or 0.
          !d.s || !p.s || (e0 ? o0 && e0[0] == o0[0] : !o0) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            e0 && e0[0] == 0 || !o0 ? n0 * 0 : n0 / 0
          )
        );
      for (K = new l(n0), G = K.c = [], U = d.e - p.e, n0 = g + U + 1, y || (y = P0, U = S0(d.e / J) - S0(p.e / J), n0 = n0 / J | 0), P = 0; o0[P] == (e0[P] || 0); P++) ;
      if (o0[P] > (e0[P] || 0) && U--, n0 < 0)
        G.push(1), V = !0;
      else {
        for (w0 = e0.length, v0 = o0.length, P = 0, n0 += 2, Q = D0(y / (o0[0] + 1)), Q > 1 && (o0 = o(o0, Q, y), e0 = o(e0, Q, y), v0 = o0.length, w0 = e0.length), Y = v0, X = e0.slice(0, v0), Z = X.length; Z < v0; X[Z++] = 0) ;
        g0 = o0.slice(), g0 = [0].concat(g0), F0 = o0[0], o0[1] >= y / 2 && F0++;
        do {
          if (Q = 0, S = u(o0, X, v0, Z), S < 0) {
            if (r0 = X[0], v0 != Z && (r0 = r0 * y + (X[1] || 0)), Q = D0(r0 / F0), Q > 1)
              for (Q >= y && (Q = y - 1), O = o(o0, Q, y), z = O.length, Z = X.length; u(O, X, z, Z) == 1; )
                Q--, c(O, v0 < z ? g0 : o0, z, y), z = O.length, S = 1;
            else
              Q == 0 && (S = Q = 1), O = o0.slice(), z = O.length;
            if (z < Z && (O = [0].concat(O)), c(X, O, Z, y), Z = X.length, S == -1)
              for (; u(o0, X, v0, Z) < 1; )
                Q++, c(X, v0 < Z ? g0 : o0, Z, y), Z = X.length;
          } else S === 0 && (Q++, X = [0]);
          G[P++] = Q, X[0] ? X[Z++] = e0[Y] || 0 : (X = [e0[Y]], Z = 1);
        } while ((Y++ < w0 || X[0] != null) && n0--);
        V = X[0] != null, G[0] || G.splice(0, 1);
      }
      if (y == P0) {
        for (P = 1, n0 = G[0]; n0 >= 10; n0 /= 10, P++) ;
        q(K, g + (K.e = P + U * J - 1) + 1, N, V);
      } else
        K.e = U, K.r = +V;
      return K;
    };
  }();
  function w(o, u, c, d) {
    var p, g, N, y, S;
    if (c == null ? c = s : f0(c, 0, 8), !o.c) return o.toString();
    if (p = o.c[0], N = o.e, u == null)
      S = b0(o.c), S = d == 1 || d == 2 && (N <= C || N >= h) ? Ee(S, N) : q0(S, N, "0");
    else if (o = q(new l(o), u, c), g = o.e, S = b0(o.c), y = S.length, d == 1 || d == 2 && (u <= g || g <= C)) {
      for (; y < u; S += "0", y++) ;
      S = Ee(S, g);
    } else if (u -= N, S = q0(S, g, "0"), g + 1 > y) {
      if (--u > 0) for (S += "."; u--; S += "0") ;
    } else if (u += g - y, u > 0)
      for (g + 1 == y && (S += "."); u--; S += "0") ;
    return o.s < 0 && p ? "-" + S : S;
  }
  function D(o, u) {
    for (var c, d, p = 1, g = new l(o[0]); p < o.length; p++)
      d = new l(o[p]), (!d.s || (c = Z0(g, d)) === u || c === 0 && g.s === u) && (g = d);
    return g;
  }
  function M(o, u, c) {
    for (var d = 1, p = u.length; !u[--p]; u.pop()) ;
    for (p = u[0]; p >= 10; p /= 10, d++) ;
    return (c = d + c * J - 1) > R ? o.c = o.e = null : c < v ? o.c = [o.e = 0] : (o.e = c, o.c = u), o;
  }
  a = /* @__PURE__ */ function() {
    var o = /^(-?)0([xbo])(?=\w[\w.]*$)/i, u = /^([^.]+)\.$/, c = /^\.([^.]+)$/, d = /^-?(Infinity|NaN)$/, p = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(g, N, y, S) {
      var U, P = y ? N : N.replace(p, "");
      if (d.test(P))
        g.s = isNaN(P) ? null : P < 0 ? -1 : 1;
      else {
        if (!y && (P = P.replace(o, function(V, Q, O) {
          return U = (O = O.toLowerCase()) == "x" ? 16 : O == "b" ? 2 : 8, !S || S == U ? Q : V;
        }), S && (U = S, P = P.replace(u, "$1").replace(c, "0.$1")), N != P))
          return new l(P, U);
        if (l.DEBUG)
          throw Error(y0 + "Not a" + (S ? " base " + S : "") + " number: " + N);
        g.s = null;
      }
      g.c = g.e = null;
    };
  }();
  function q(o, u, c, d) {
    var p, g, N, y, S, U, P, V = o.c, Q = dt;
    if (V) {
      e: {
        for (p = 1, y = V[0]; y >= 10; y /= 10, p++) ;
        if (g = u - p, g < 0)
          g += J, N = u, S = V[U = 0], P = D0(S / Q[p - N - 1] % 10);
        else if (U = lt((g + 1) / J), U >= V.length)
          if (d) {
            for (; V.length <= U; V.push(0)) ;
            S = P = 0, p = 1, g %= J, N = g - J + 1;
          } else
            break e;
        else {
          for (S = y = V[U], p = 1; y >= 10; y /= 10, p++) ;
          g %= J, N = g - J + p, P = N < 0 ? 0 : D0(S / Q[p - N - 1] % 10);
        }
        if (d = d || u < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        V[U + 1] != null || (N < 0 ? S : S % Q[p - N - 1]), d = c < 4 ? (P || d) && (c == 0 || c == (o.s < 0 ? 3 : 2)) : P > 5 || P == 5 && (c == 4 || d || c == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (g > 0 ? N > 0 ? S / Q[p - N] : 0 : V[U - 1]) % 10 & 1 || c == (o.s < 0 ? 8 : 7)), u < 1 || !V[0])
          return V.length = 0, d ? (u -= o.e + 1, V[0] = Q[(J - u % J) % J], o.e = -u || 0) : V[0] = o.e = 0, o;
        if (g == 0 ? (V.length = U, y = 1, U--) : (V.length = U + 1, y = Q[J - g], V[U] = N > 0 ? D0(S / Q[p - N] % Q[N]) * y : 0), d)
          for (; ; )
            if (U == 0) {
              for (g = 1, N = V[0]; N >= 10; N /= 10, g++) ;
              for (N = V[0] += y, y = 1; N >= 10; N /= 10, y++) ;
              g != y && (o.e++, V[0] == P0 && (V[0] = 1));
              break;
            } else {
              if (V[U] += y, V[U] != P0) break;
              V[U--] = 0, y = 1;
            }
        for (g = V.length; V[--g] === 0; V.pop()) ;
      }
      o.e > R ? o.c = o.e = null : o.e < v && (o.c = [o.e = 0]);
    }
    return o;
  }
  function W(o) {
    var u, c = o.e;
    return c === null ? o.toString() : (u = b0(o.c), u = c <= C || c >= h ? Ee(u, c) : q0(u, c, "0"), o.s < 0 ? "-" + u : u);
  }
  return f.absoluteValue = f.abs = function() {
    var o = new l(this);
    return o.s < 0 && (o.s = 1), o;
  }, f.comparedTo = function(o, u) {
    return Z0(this, new l(o, u));
  }, f.decimalPlaces = f.dp = function(o, u) {
    var c, d, p, g = this;
    if (o != null)
      return f0(o, 0, h0), u == null ? u = s : f0(u, 0, 8), q(new l(g), o + g.e + 1, u);
    if (!(c = g.c)) return null;
    if (d = ((p = c.length - 1) - S0(this.e / J)) * J, p = c[p]) for (; p % 10 == 0; p /= 10, d--) ;
    return d < 0 && (d = 0), d;
  }, f.dividedBy = f.div = function(o, u) {
    return n(this, new l(o, u), m, s);
  }, f.dividedToIntegerBy = f.idiv = function(o, u) {
    return n(this, new l(o, u), 0, 1);
  }, f.exponentiatedBy = f.pow = function(o, u) {
    var c, d, p, g, N, y, S, U, P, V = this;
    if (o = new l(o), o.c && !o.isInteger())
      throw Error(y0 + "Exponent not an integer: " + W(o));
    if (u != null && (u = new l(u)), y = o.e > 14, !V.c || !V.c[0] || V.c[0] == 1 && !V.e && V.c.length == 1 || !o.c || !o.c[0])
      return P = new l(Math.pow(+W(V), y ? o.s * (2 - Be(o)) : +W(o))), u ? P.mod(u) : P;
    if (S = o.s < 0, u) {
      if (u.c ? !u.c[0] : !u.s) return new l(NaN);
      d = !S && V.isInteger() && u.isInteger(), d && (V = V.mod(u));
    } else {
      if (o.e > 9 && (V.e > 0 || V.e < -1 || (V.e == 0 ? V.c[0] > 1 || y && V.c[1] >= 24e7 : V.c[0] < 8e13 || y && V.c[0] <= 9999975e7)))
        return g = V.s < 0 && Be(o) ? -0 : 0, V.e > -1 && (g = 1 / g), new l(S ? 1 / g : g);
      _ && (g = lt(_ / J + 2));
    }
    for (y ? (c = new l(0.5), S && (o.s = 1), U = Be(o)) : (p = Math.abs(+W(o)), U = p % 2), P = new l(E); ; ) {
      if (U) {
        if (P = P.times(V), !P.c) break;
        g ? P.c.length > g && (P.c.length = g) : d && (P = P.mod(u));
      }
      if (p) {
        if (p = D0(p / 2), p === 0) break;
        U = p % 2;
      } else if (o = o.times(c), q(o, o.e + 1, 1), o.e > 14)
        U = Be(o);
      else {
        if (p = +W(o), p === 0) break;
        U = p % 2;
      }
      V = V.times(V), g ? V.c && V.c.length > g && (V.c.length = g) : d && (V = V.mod(u));
    }
    return d ? P : (S && (P = E.div(P)), u ? P.mod(u) : g ? q(P, _, s, N) : P);
  }, f.integerValue = function(o) {
    var u = new l(this);
    return o == null ? o = s : f0(o, 0, 8), q(u, u.e + 1, o);
  }, f.isEqualTo = f.eq = function(o, u) {
    return Z0(this, new l(o, u)) === 0;
  }, f.isFinite = function() {
    return !!this.c;
  }, f.isGreaterThan = f.gt = function(o, u) {
    return Z0(this, new l(o, u)) > 0;
  }, f.isGreaterThanOrEqualTo = f.gte = function(o, u) {
    return (u = Z0(this, new l(o, u))) === 1 || u === 0;
  }, f.isInteger = function() {
    return !!this.c && S0(this.e / J) > this.c.length - 2;
  }, f.isLessThan = f.lt = function(o, u) {
    return Z0(this, new l(o, u)) < 0;
  }, f.isLessThanOrEqualTo = f.lte = function(o, u) {
    return (u = Z0(this, new l(o, u))) === -1 || u === 0;
  }, f.isNaN = function() {
    return !this.s;
  }, f.isNegative = function() {
    return this.s < 0;
  }, f.isPositive = function() {
    return this.s > 0;
  }, f.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, f.minus = function(o, u) {
    var c, d, p, g, N = this, y = N.s;
    if (o = new l(o, u), u = o.s, !y || !u) return new l(NaN);
    if (y != u)
      return o.s = -u, N.plus(o);
    var S = N.e / J, U = o.e / J, P = N.c, V = o.c;
    if (!S || !U) {
      if (!P || !V) return P ? (o.s = -u, o) : new l(V ? N : NaN);
      if (!P[0] || !V[0])
        return V[0] ? (o.s = -u, o) : new l(P[0] ? N : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          s == 3 ? -0 : 0
        ));
    }
    if (S = S0(S), U = S0(U), P = P.slice(), y = S - U) {
      for ((g = y < 0) ? (y = -y, p = P) : (U = S, p = V), p.reverse(), u = y; u--; p.push(0)) ;
      p.reverse();
    } else
      for (d = (g = (y = P.length) < (u = V.length)) ? y : u, y = u = 0; u < d; u++)
        if (P[u] != V[u]) {
          g = P[u] < V[u];
          break;
        }
    if (g && (p = P, P = V, V = p, o.s = -o.s), u = (d = V.length) - (c = P.length), u > 0) for (; u--; P[c++] = 0) ;
    for (u = P0 - 1; d > y; ) {
      if (P[--d] < V[d]) {
        for (c = d; c && !P[--c]; P[c] = u) ;
        --P[c], P[d] += P0;
      }
      P[d] -= V[d];
    }
    for (; P[0] == 0; P.splice(0, 1), --U) ;
    return P[0] ? M(o, P, U) : (o.s = s == 3 ? -1 : 1, o.c = [o.e = 0], o);
  }, f.modulo = f.mod = function(o, u) {
    var c, d, p = this;
    return o = new l(o, u), !p.c || !o.s || o.c && !o.c[0] ? new l(NaN) : !o.c || p.c && !p.c[0] ? new l(p) : (F == 9 ? (d = o.s, o.s = 1, c = n(p, o, 0, 3), o.s = d, c.s *= d) : c = n(p, o, 0, F), o = p.minus(c.times(o)), !o.c[0] && F == 1 && (o.s = p.s), o);
  }, f.multipliedBy = f.times = function(o, u) {
    var c, d, p, g, N, y, S, U, P, V, Q, O, z, K, G, X = this, Z = X.c, r0 = (o = new l(o, u)).c;
    if (!Z || !r0 || !Z[0] || !r0[0])
      return !X.s || !o.s || Z && !Z[0] && !r0 || r0 && !r0[0] && !Z ? o.c = o.e = o.s = null : (o.s *= X.s, !Z || !r0 ? o.c = o.e = null : (o.c = [0], o.e = 0)), o;
    for (d = S0(X.e / J) + S0(o.e / J), o.s *= X.s, S = Z.length, V = r0.length, S < V && (z = Z, Z = r0, r0 = z, p = S, S = V, V = p), p = S + V, z = []; p--; z.push(0)) ;
    for (K = P0, G = K0, p = V; --p >= 0; ) {
      for (c = 0, Q = r0[p] % G, O = r0[p] / G | 0, N = S, g = p + N; g > p; )
        U = Z[--N] % G, P = Z[N] / G | 0, y = O * U + P * Q, U = Q * U + y % G * G + z[g] + c, c = (U / K | 0) + (y / G | 0) + O * P, z[g--] = U % K;
      z[g] = c;
    }
    return c ? ++d : z.splice(0, 1), M(o, z, d);
  }, f.negated = function() {
    var o = new l(this);
    return o.s = -o.s || null, o;
  }, f.plus = function(o, u) {
    var c, d = this, p = d.s;
    if (o = new l(o, u), u = o.s, !p || !u) return new l(NaN);
    if (p != u)
      return o.s = -u, d.minus(o);
    var g = d.e / J, N = o.e / J, y = d.c, S = o.c;
    if (!g || !N) {
      if (!y || !S) return new l(p / 0);
      if (!y[0] || !S[0]) return S[0] ? o : new l(y[0] ? d : p * 0);
    }
    if (g = S0(g), N = S0(N), y = y.slice(), p = g - N) {
      for (p > 0 ? (N = g, c = S) : (p = -p, c = y), c.reverse(); p--; c.push(0)) ;
      c.reverse();
    }
    for (p = y.length, u = S.length, p - u < 0 && (c = S, S = y, y = c, u = p), p = 0; u; )
      p = (y[--u] = y[u] + S[u] + p) / P0 | 0, y[u] = P0 === y[u] ? 0 : y[u] % P0;
    return p && (y = [p].concat(y), ++N), M(o, y, N);
  }, f.precision = f.sd = function(o, u) {
    var c, d, p, g = this;
    if (o != null && o !== !!o)
      return f0(o, 1, h0), u == null ? u = s : f0(u, 0, 8), q(new l(g), o, u);
    if (!(c = g.c)) return null;
    if (p = c.length - 1, d = p * J + 1, p = c[p]) {
      for (; p % 10 == 0; p /= 10, d--) ;
      for (p = c[0]; p >= 10; p /= 10, d++) ;
    }
    return o && g.e + 1 > d && (d = g.e + 1), d;
  }, f.shiftedBy = function(o) {
    return f0(o, -ht, ht), this.times("1e" + o);
  }, f.squareRoot = f.sqrt = function() {
    var o, u, c, d, p, g = this, N = g.c, y = g.s, S = g.e, U = m + 4, P = new l("0.5");
    if (y !== 1 || !N || !N[0])
      return new l(!y || y < 0 && (!N || N[0]) ? NaN : N ? g : 1 / 0);
    if (y = Math.sqrt(+W(g)), y == 0 || y == 1 / 0 ? (u = b0(N), (u.length + S) % 2 == 0 && (u += "0"), y = Math.sqrt(+u), S = S0((S + 1) / 2) - (S < 0 || S % 2), y == 1 / 0 ? u = "5e" + S : (u = y.toExponential(), u = u.slice(0, u.indexOf("e") + 1) + S), c = new l(u)) : c = new l(y + ""), c.c[0]) {
      for (S = c.e, y = S + U, y < 3 && (y = 0); ; )
        if (p = c, c = P.times(p.plus(n(g, p, U, 1))), b0(p.c).slice(0, y) === (u = b0(c.c)).slice(0, y))
          if (c.e < S && --y, u = u.slice(y - 3, y + 1), u == "9999" || !d && u == "4999") {
            if (!d && (q(p, p.e + m + 2, 0), p.times(p).eq(g))) {
              c = p;
              break;
            }
            U += 4, y += 4, d = 1;
          } else {
            (!+u || !+u.slice(1) && u.charAt(0) == "5") && (q(c, c.e + m + 2, 1), o = !c.times(c).eq(g));
            break;
          }
    }
    return q(c, c.e + m + 1, s, o);
  }, f.toExponential = function(o, u) {
    return o != null && (f0(o, 0, h0), o++), w(this, o, u, 1);
  }, f.toFixed = function(o, u) {
    return o != null && (f0(o, 0, h0), o = o + this.e + 1), w(this, o, u);
  }, f.toFormat = function(o, u, c) {
    var d, p = this;
    if (c == null)
      o != null && u && typeof u == "object" ? (c = u, u = null) : o && typeof o == "object" ? (c = o, o = u = null) : c = k;
    else if (typeof c != "object")
      throw Error(y0 + "Argument not an object: " + c);
    if (d = p.toFixed(o, u), p.c) {
      var g, N = d.split("."), y = +c.groupSize, S = +c.secondaryGroupSize, U = c.groupSeparator || "", P = N[0], V = N[1], Q = p.s < 0, O = Q ? P.slice(1) : P, z = O.length;
      if (S && (g = y, y = S, S = g, z -= g), y > 0 && z > 0) {
        for (g = z % y || y, P = O.substr(0, g); g < z; g += y) P += U + O.substr(g, y);
        S > 0 && (P += U + O.slice(g)), Q && (P = "-" + P);
      }
      d = V ? P + (c.decimalSeparator || "") + ((S = +c.fractionGroupSize) ? V.replace(
        new RegExp("\\d{" + S + "}\\B", "g"),
        "$&" + (c.fractionGroupSeparator || "")
      ) : V) : P;
    }
    return (c.prefix || "") + d + (c.suffix || "");
  }, f.toFraction = function(o) {
    var u, c, d, p, g, N, y, S, U, P, V, Q, O = this, z = O.c;
    if (o != null && (y = new l(o), !y.isInteger() && (y.c || y.s !== 1) || y.lt(E)))
      throw Error(y0 + "Argument " + (y.isInteger() ? "out of range: " : "not an integer: ") + W(y));
    if (!z) return new l(O);
    for (u = new l(E), U = c = new l(E), d = S = new l(E), Q = b0(z), g = u.e = Q.length - O.e - 1, u.c[0] = dt[(N = g % J) < 0 ? J + N : N], o = !o || y.comparedTo(u) > 0 ? g > 0 ? u : U : y, N = R, R = 1 / 0, y = new l(Q), S.c[0] = 0; P = n(y, u, 0, 1), p = c.plus(P.times(d)), p.comparedTo(o) != 1; )
      c = d, d = p, U = S.plus(P.times(p = U)), S = p, u = y.minus(P.times(p = u)), y = p;
    return p = n(o.minus(c), d, 0, 1), S = S.plus(p.times(U)), c = c.plus(p.times(d)), S.s = U.s = O.s, g = g * 2, V = n(U, d, g, s).minus(O).abs().comparedTo(
      n(S, c, g, s).minus(O).abs()
    ) < 1 ? [U, d] : [S, c], R = N, V;
  }, f.toNumber = function() {
    return +W(this);
  }, f.toPrecision = function(o, u) {
    return o != null && f0(o, 1, h0), w(this, o, u, 2);
  }, f.toString = function(o) {
    var u, c = this, d = c.s, p = c.e;
    return p === null ? d ? (u = "Infinity", d < 0 && (u = "-" + u)) : u = "NaN" : (o == null ? u = p <= C || p >= h ? Ee(b0(c.c), p) : q0(b0(c.c), p, "0") : o === 10 && H ? (c = q(new l(c), m + p + 1, s), u = q0(b0(c.c), c.e, "0")) : (f0(o, 2, b.length, "Base"), u = i(q0(b0(c.c), p, "0"), 10, o, d, !0)), d < 0 && c.c[0] && (u = "-" + u)), u;
  }, f.valueOf = f.toJSON = function() {
    return W(this);
  }, f._isBigNumber = !0, f[Symbol.toStringTag] = "BigNumber", f[Symbol.for("nodejs.util.inspect.custom")] = f.valueOf, t != null && l.set(t), l;
}
function S0(t) {
  var n = t | 0;
  return t > 0 || t === n ? n : n - 1;
}
function b0(t) {
  for (var n, i, a = 1, f = t.length, E = t[0] + ""; a < f; ) {
    for (n = t[a++] + "", i = J - n.length; i--; n = "0" + n) ;
    E += n;
  }
  for (f = E.length; E.charCodeAt(--f) === 48; ) ;
  return E.slice(0, f + 1 || 1);
}
function Z0(t, n) {
  var i, a, f = t.c, E = n.c, m = t.s, s = n.s, C = t.e, h = n.e;
  if (!m || !s) return null;
  if (i = f && !f[0], a = E && !E[0], i || a) return i ? a ? 0 : -s : m;
  if (m != s) return m;
  if (i = m < 0, a = C == h, !f || !E) return a ? 0 : !f ^ i ? 1 : -1;
  if (!a) return C > h ^ i ? 1 : -1;
  for (s = (C = f.length) < (h = E.length) ? C : h, m = 0; m < s; m++) if (f[m] != E[m]) return f[m] > E[m] ^ i ? 1 : -1;
  return C == h ? 0 : C > h ^ i ? 1 : -1;
}
function f0(t, n, i, a) {
  if (t < n || t > i || t !== D0(t))
    throw Error(y0 + (a || "Argument") + (typeof t == "number" ? t < n || t > i ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(t));
}
function Be(t) {
  var n = t.c.length - 1;
  return S0(t.e / J) == n && t.c[n] % 2 != 0;
}
function Ee(t, n) {
  return (t.length > 1 ? t.charAt(0) + "." + t.slice(1) : t) + (n < 0 ? "e" : "e+") + n;
}
function q0(t, n, i) {
  var a, f;
  if (n < 0) {
    for (f = i + "."; ++n; f += i) ;
    t = f + t;
  } else if (a = t.length, ++n > a) {
    for (f = i, n -= a; --n; f += i) ;
    t += f;
  } else n < a && (t = t.slice(0, n) + "." + t.slice(n));
  return t;
}
br();
const ci = (t) => {
  const n = Wr.decode(t), i = new Ir(0);
  return i._value = BigInt(n.ingress_expiry.toString(10)), Object.assign(Object.assign({}, n), { canister_id: W0.from(n.canister_id), ingress_expiry: i });
};
var A0 = function(t, n, i, a) {
  if (i === "a" && !a) throw new TypeError("Private accessor was defined without a getter");
  if (typeof n == "function" ? t !== n || !a : !n.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return i === "m" ? a : i === "a" ? a.call(t) : a ? a.value : n.get(t);
}, ge = function(t, n, i, a, f) {
  if (a === "m") throw new TypeError("Private method is not writable");
  if (a === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof n == "function" ? t !== n || !f : !n.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return a === "a" ? f.call(t, i) : f ? f.value = i : n.set(t, i), i;
}, O0, le, R0, oe;
const Br = 5, fe = "Received invalid response from signer";
class U0 extends Error {
  constructor(n) {
    super(n), Object.setPrototypeOf(this, U0.prototype);
  }
}
class Dr {
  constructor(n) {
    R0.set(this, void 0), oe.set(this, /* @__PURE__ */ new Map());
    const i = !A0(O0, O0, "f", le);
    if (ge(O0, O0, !1, "f", le), i)
      throw new U0("SignerAgent is not constructable");
    ge(this, R0, n, "f");
  }
  get rootKey() {
    return A0(this, R0, "f").agent.rootKey;
  }
  get signer() {
    return A0(this, R0, "f").signer;
  }
  static async create(n) {
    var i;
    return ge(O0, O0, !0, "f", le), new O0(Object.assign(Object.assign({}, n), { agent: (i = n.agent) !== null && i !== void 0 ? i : await Y0.create() }));
  }
  static createSync(n) {
    var i;
    return ge(O0, O0, !0, "f", le), new O0(Object.assign(Object.assign({}, n), { agent: (i = n.agent) !== null && i !== void 0 ? i : Y0.createSync() }));
  }
  async call(n, i) {
    n = W0.from(n);
    const a = await A0(this, R0, "f").signer.callCanister({
      canisterId: n,
      sender: A0(this, R0, "f").account,
      method: i.methodName,
      arg: i.arg
    }), f = ci(a.contentMap);
    if (!(zr.Call === f.request_type && n.compareTo(f.canister_id) === "eq" && i.methodName === f.method_name && Vr(i.arg, f.arg) === 0 && A0(this, R0, "f").account.compareTo(W0.from(f.sender)) === "eq"))
      throw new U0(fe);
    const m = Gr(f), s = await kt.create({
      certificate: a.certificate,
      rootKey: this.rootKey,
      canisterId: n,
      maxAgeInMinutes: Br
    }).catch(() => {
      throw new U0(fe);
    });
    if (!(s.lookup(["request_status", m, "status"]).status === Se.Found))
      throw new U0(fe);
    const h = we(m);
    if (A0(this, oe, "f").has(h))
      throw new U0(fe);
    A0(this, oe, "f").set(h, a.certificate);
    const v = Date.now(), R = Kr(s.lookup(["time"]));
    if (!R)
      throw new U0(fe);
    const F = Number(Yr(new Jr(R))) / 1e6 - v + Br * 60 * 1e3;
    return setTimeout(() => A0(this, oe, "f").delete(h), F), {
      requestId: m,
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
  async query(n, i) {
    n = W0.from(n);
    const a = await this.call(n, i), f = await this.readState(n, {
      paths: [
        [new TextEncoder().encode("request_status"), a.requestId]
      ]
    }), E = await kt.create({
      certificate: f.certificate,
      rootKey: this.rootKey,
      canisterId: n
    }), m = E.lookup([
      "request_status",
      a.requestId,
      "status"
    ]), s = E.lookup([
      "request_status",
      a.requestId,
      "reply"
    ]);
    if (m.status !== Se.Found || new TextDecoder().decode(m.value) !== "replied" || s.status !== Se.Found)
      throw new U0("Certificate is missing reply");
    return {
      requestId: a.requestId,
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
  async createReadStateRequest(n) {
  }
  async readState(n, i, a, f) {
    if (i.paths.length !== 1 || i.paths[0].length !== 2 || new TextDecoder().decode(i.paths[0][0]) !== "request_status")
      throw new U0("Given paths are not supported");
    const E = i.paths[0][1], m = we(E), s = A0(this, oe, "f").get(m);
    if (!s)
      throw new U0("Certificate could not be found");
    return { certificate: s };
  }
  async status() {
    return A0(this, R0, "f").agent.status();
  }
  replaceAccount(n) {
    A0(this, R0, "f").account = n;
  }
}
O0 = Dr, R0 = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap();
le = { value: !1 };
class xi {
  async get(n) {
    return localStorage.getItem(n);
  }
  async set(n, i) {
    localStorage.setItem(n, i);
  }
  async remove(n) {
    localStorage.removeItem(n);
  }
}
class fi {
  constructor() {
    this.queue = [], this.isProcessing = !1;
  }
  async add(n) {
    return new Promise((i, a) => {
      this.queue.push(async () => {
        try {
          const f = await n();
          i(f);
        } catch (f) {
          a(f);
        }
      }), this.processQueue();
    });
  }
  async processQueue() {
    if (!(this.isProcessing || this.queue.length === 0)) {
      for (this.isProcessing = !0; this.queue.length > 0; ) {
        const n = this.queue.shift();
        if (n)
          try {
            await n();
          } catch (i) {
            console.error("Error processing signature request:", i);
          }
      }
      this.isProcessing = !1;
    }
  }
  clear() {
    this.queue = [], this.isProcessing = !1;
  }
}
const he = class he {
  constructor() {
    this.signer = null, this.agent = null, this.signerAgent = null, this.identity = null, this.lastConnectionAttempt = 0, this.CONNECTION_COOLDOWN = 3e3, this.state = "READY", this.accounts = [], this.actorCache = /* @__PURE__ */ new Map(), this.name = "NFID", this.logo = he.logo, this.url = "https://nfid.one/rpc", this.url = "https://nfid.one/rpc", this.name = "NFID", this.logo = he.logo, this.delegationStorage = new xi(), this.signatureQueue = new fi();
  }
  setState(n) {
    this.state = n;
  }
  async getDelegationChain(n) {
    const i = await this.delegationStorage.get(n);
    if (!i) return null;
    try {
      return gr.fromJSON(JSON.parse(i));
    } catch (a) {
      return console.error("Error parsing delegation chain:", a), null;
    }
  }
  async setDelegationChain(n, i) {
    await this.delegationStorage.set(n, JSON.stringify(i.toJSON()));
  }
  async removeDelegationChain(n) {
    await this.delegationStorage.remove(n);
  }
  async initSigner() {
    if (!this.signer) {
      const n = Date.now();
      if (n - this.lastConnectionAttempt < this.CONNECTION_COOLDOWN)
        throw new Error("Please wait before attempting to connect again");
      this.lastConnectionAttempt = n;
      const i = new ai({
        url: this.url
      });
      this.signer = new ei({ transport: i });
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
    const n = this.identity.getPrincipal();
    return pe(n.toText()) || "";
  }
  async connect(n) {
    try {
      if (this.setState(
        "LOADING"
        /* LOADING */
      ), this.config = n, await this.initSigner(), !this.signer)
        throw new Error("Failed to initialize NFID signer");
      this.setState(
        "PROCESSING"
        /* PROCESSING */
      );
      const i = Xr.generate(), a = await this.signer.delegation({
        publicKey: i.getPublicKey().toDer(),
        targets: n.delegationTargets || [],
        maxTimeToLive: n.delegationTimeout || BigInt(24 * 60 * 60 * 1e3 * 1e3 * 1e3)
        // 24 hours
      }), f = Zr.fromDelegation(
        i,
        a
      );
      this.agent = Y0.createSync({
        host: n.host,
        identity: f,
        verifyQuerySignatures: n.verifyQuerySignatures
      });
      const E = f.getPrincipal();
      if (console.log("NFID Principal:", E.toString()), E.isAnonymous())
        throw new Error("Failed to authenticate with NFID - got anonymous principal");
      this.signerAgent = Dr.createSync({
        signer: this.signer,
        account: E
      }), this.identity = f;
      const m = pe(E.toText()) || "", s = vt(E), C = {
        id: E.toText(),
        displayName: "NFID Account",
        principal: E.toText(),
        subaccount: new Uint8Array(s),
        type: "SESSION"
        /* SESSION */
      };
      return this.accounts = [C], this.setState(
        "READY"
        /* READY */
      ), {
        owner: E,
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
  async disconnect() {
    try {
      this.setState(
        "PROCESSING"
        /* PROCESSING */
      ), this.signer && (await this.signer.closeChannel(), this.signer = null), this.signatureQueue.clear(), this.identity = null, this.agent = null, this.signerAgent = null, this.accounts = [], this.actorCache.clear(), this.setState(
        "READY"
        /* READY */
      );
    } catch (n) {
      throw console.error("Error disconnecting from NFID:", n), this.setState(
        "ERROR"
        /* ERROR */
      ), n;
    }
  }
  async createActor(n, i, a = !1) {
    try {
      console.log("Creating actor for canister:", n), console.log("Configuration:", {
        isConnected: await this.isConnected(),
        requiresSigning: a,
        host: this.config.hostUrl || this.config.host,
        verifyQuerySignatures: this.config.verifyQuerySignatures
      });
      const f = `${n}-${a}`;
      if (this.actorCache.has(f))
        return this.actorCache.get(f);
      if (!this.isConnected()) {
        console.log("Creating anonymous actor - not connected");
        const E = Y0.createSync({
          host: this.config.host,
          verifyQuerySignatures: this.config.verifyQuerySignatures
        });
        if (!this.config.isDev)
          try {
            await E.fetchRootKey();
          } catch (s) {
            console.warn("Unable to fetch root key:", s);
          }
        const m = ae.createActor(i, {
          agent: E,
          canisterId: n
        });
        return this.actorCache.set(f, m), m;
      }
      if (a) {
        if (console.log("Creating signed actor with signer agent"), !this.signerAgent)
          throw new Error("No signer agent available. Please connect first.");
        const E = ae.createActor(i, {
          agent: this.signerAgent,
          canisterId: n
        }), m = new Proxy(E, {
          get: (s, C) => {
            const h = s[C];
            return typeof h == "function" ? (...v) => (console.log("Queuing signed operation:", C), this.queueSignatureRequest(async () => h.apply(s, v))) : h;
          }
        });
        return this.actorCache.set(f, m), m;
      } else {
        if (console.log("Creating authenticated but unsigned actor with HttpAgent"), !this.agent)
          throw new Error("No HTTP agent available. Please connect first.");
        if (!this.config.isDev)
          try {
            await this.agent.fetchRootKey();
          } catch (m) {
            console.warn("Unable to fetch root key:", m);
          }
        const E = ae.createActor(i, {
          agent: this.agent,
          canisterId: n
        });
        return this.actorCache.set(f, E), E;
      }
    } catch (f) {
      throw console.error("Error creating actor:", f), new Error(`Failed to create actor: ${f instanceof Error ? f.message : String(f)}`);
    }
  }
  async queueSignatureRequest(n) {
    return this.signatureQueue.add(n);
  }
  getState() {
    return this.state;
  }
  getAccounts() {
    return this.accounts;
  }
};
he.logo = Ln;
let Fe = he;
const Ft = [
  {
    id: "nns",
    name: "Internet Identity",
    icon: Ce.logo,
    adapter: Ce
  },
  {
    id: "plug",
    name: "Plug Wallet",
    icon: ye.logo,
    adapter: ye
  },
  {
    id: "nfid",
    name: "NFID",
    icon: Fe.logo,
    adapter: Fe
  }
], Sr = ({ IDL: t }) => {
  const n = t.Record({ e8s: t.Nat64 }), i = t.Record({ secs: t.Nat64, nanos: t.Nat32 }), a = t.Record({
    owner: t.Principal,
    subaccount: t.Opt(t.Vec(t.Nat8))
  }), f = t.Record({
    num_blocks_to_archive: t.Nat64,
    max_transactions_per_response: t.Opt(t.Nat64),
    trigger_threshold: t.Nat64,
    max_message_size_bytes: t.Opt(t.Nat64),
    cycles_for_archive_creation: t.Opt(t.Nat64),
    node_max_memory_size_bytes: t.Opt(t.Nat64),
    controller_id: t.Principal
  });
  t.Record({
    send_whitelist: t.Vec(t.Principal),
    token_symbol: t.Opt(t.Text),
    transfer_fee: t.Opt(n),
    minting_account: t.Text,
    transaction_window: t.Opt(i),
    max_message_size_bytes: t.Opt(t.Nat64),
    icrc1_minting_account: t.Opt(a),
    archive_options: t.Opt(f),
    initial_values: t.Vec(t.Tuple(t.Text, n)),
    token_name: t.Opt(t.Text)
  });
  const E = t.Record({
    account: t.Vec(t.Nat8)
  }), m = t.Record({ account: t.Text }), s = t.Record({ canister_id: t.Principal }), C = t.Record({ archives: t.Vec(s) }), h = t.Record({ decimals: t.Nat32 }), v = t.Variant({
    Int: t.Int,
    Nat: t.Nat,
    Blob: t.Vec(t.Nat8),
    Text: t.Text
  }), R = t.Record({ url: t.Text, name: t.Text }), A = t.Record({
    to: a,
    fee: t.Opt(t.Nat),
    memo: t.Opt(t.Vec(t.Nat8)),
    from_subaccount: t.Opt(t.Vec(t.Nat8)),
    created_at_time: t.Opt(t.Nat64),
    amount: t.Nat
  }), F = t.Variant({
    GenericError: t.Record({
      message: t.Text,
      error_code: t.Nat
    }),
    TemporarilyUnavailable: t.Null,
    BadBurn: t.Record({ min_burn_amount: t.Nat }),
    Duplicate: t.Record({ duplicate_of: t.Nat }),
    BadFee: t.Record({ expected_fee: t.Nat }),
    CreatedInFuture: t.Record({ ledger_time: t.Nat64 }),
    TooOld: t.Null,
    InsufficientFunds: t.Record({ balance: t.Nat })
  }), _ = t.Variant({ Ok: t.Nat, Err: F }), k = t.Record({ name: t.Text }), b = t.Record({
    start: t.Nat64,
    length: t.Nat64
  }), H = t.Record({ timestamp_nanos: t.Nat64 }), l = t.Variant({
    Approve: t.Record({
      fee: n,
      from: t.Vec(t.Nat8),
      allowance_e8s: t.Int,
      expires_at: t.Opt(H),
      spender: t.Vec(t.Nat8)
    }),
    Burn: t.Record({ from: t.Vec(t.Nat8), amount: n }),
    Mint: t.Record({ to: t.Vec(t.Nat8), amount: n }),
    Transfer: t.Record({
      to: t.Vec(t.Nat8),
      fee: n,
      from: t.Vec(t.Nat8),
      amount: n
    }),
    TransferFrom: t.Record({
      to: t.Vec(t.Nat8),
      fee: n,
      from: t.Vec(t.Nat8),
      amount: n,
      spender: t.Vec(t.Nat8)
    })
  }), w = t.Record({
    memo: t.Nat64,
    icrc1_memo: t.Opt(t.Vec(t.Nat8)),
    operation: t.Opt(l),
    created_at_time: H
  }), D = t.Record({
    transaction: w,
    timestamp: H,
    parent_hash: t.Opt(t.Vec(t.Nat8))
  }), M = t.Record({ blocks: t.Vec(D) }), q = t.Variant({
    BadFirstBlockIndex: t.Record({
      requested_index: t.Nat64,
      first_valid_index: t.Nat64
    }),
    Other: t.Record({
      error_message: t.Text,
      error_code: t.Nat64
    })
  }), W = t.Record({
    callback: t.Func(
      [b],
      [t.Variant({ Ok: M, Err: q })],
      ["query"]
    ),
    start: t.Nat64,
    length: t.Nat64
  }), o = t.Record({
    certificate: t.Opt(t.Vec(t.Nat8)),
    blocks: t.Vec(D),
    chain_length: t.Nat64,
    first_block_index: t.Nat64,
    archived_blocks: t.Vec(W)
  }), u = t.Record({
    to: t.Text,
    fee: n,
    memo: t.Nat64,
    from_subaccount: t.Opt(t.Vec(t.Nat8)),
    created_at_time: t.Opt(H),
    amount: n
  }), c = t.Record({ symbol: t.Text }), d = t.Record({
    to: t.Vec(t.Nat8),
    fee: n,
    memo: t.Nat64,
    from_subaccount: t.Opt(t.Vec(t.Nat8)),
    created_at_time: t.Opt(H),
    amount: n
  }), p = t.Variant({
    TxTooOld: t.Record({ allowed_window_nanos: t.Nat64 }),
    BadFee: t.Record({ expected_fee: n }),
    TxDuplicate: t.Record({ duplicate_of: t.Nat64 }),
    TxCreatedInFuture: t.Null,
    InsufficientFunds: t.Record({ balance: n })
  }), g = t.Variant({ Ok: t.Nat64, Err: p }), N = t.Record({ transfer_fee: n });
  return t.Service({
    account_balance: t.Func(
      [E],
      [n],
      ["query"]
    ),
    account_balance_dfx: t.Func([m], [n], ["query"]),
    archives: t.Func([], [C], ["query"]),
    decimals: t.Func([], [h], ["query"]),
    icrc1_balance_of: t.Func([a], [t.Nat], ["query"]),
    icrc1_decimals: t.Func([], [t.Nat8], ["query"]),
    icrc1_fee: t.Func([], [t.Nat], ["query"]),
    icrc1_metadata: t.Func(
      [],
      [t.Vec(t.Tuple(t.Text, v))],
      ["query"]
    ),
    icrc1_minting_account: t.Func([], [t.Opt(a)], ["query"]),
    icrc1_name: t.Func([], [t.Text], ["query"]),
    icrc1_supported_standards: t.Func(
      [],
      [t.Vec(R)],
      ["query"]
    ),
    icrc1_symbol: t.Func([], [t.Text], ["query"]),
    icrc1_total_supply: t.Func([], [t.Nat], ["query"]),
    icrc1_transfer: t.Func([A], [_], []),
    name: t.Func([], [k], ["query"]),
    query_blocks: t.Func(
      [b],
      [o],
      ["query"]
    ),
    send_dfx: t.Func([u], [t.Nat64], []),
    symbol: t.Func([], [c], ["query"]),
    transfer: t.Func([d], [g], []),
    transfer_fee: t.Func([t.Record({})], [N], ["query"])
  });
}, Fi = (t = {}) => ({
  account: null,
  activeWallet: null,
  provider: null,
  actorCache: /* @__PURE__ */ new Map(),
  config: {
    hostUrl: t.hostUrl || "http://localhost:4943",
    localStorageKey: t.localStorageKey || "pnpConnectedWallet",
    identityProvider: t.identityProvider,
    timeout: t.timeout || 1e3 * 60 * 60 * 24 * 7,
    // 7 days
    verifyQuerySignatures: t.verifyQuerySignatures,
    ...t
  }
}), mi = (t) => {
  if (!t.provider || !t.account) return null;
  const n = t.account.owner.toString();
  return pe(n) || null;
}, _i = (t) => t.provider && t.account ? t.account.owner : null, bi = async (t, n) => {
  const i = Ft.find((s) => s.id === n);
  if (!i)
    throw new Error(`Wallet with ID "${n}" not found.`);
  const a = new i.adapter();
  if (!await a.isAvailable())
    throw new Error(
      `Wallet "${n}" is not available. Please install or enable it.`
    );
  const E = await a.connect(t.config);
  if (!E || typeof E == "boolean")
    throw new Error(`Failed to connect to wallet "${n}".`);
  return localStorage.setItem(t.config.localStorageKey, n), [{
    ...t,
    account: E,
    activeWallet: n,
    provider: a
  }, E];
}, Di = async (t) => (t.provider && await t.provider.disconnect(), localStorage.removeItem(t.config.localStorageKey), {
  ...t,
  provider: null,
  account: null,
  activeWallet: null,
  actorCache: /* @__PURE__ */ new Map()
}), Si = async (t, n, i, a = [], f, E) => {
  const { isAnon: m = !1, isSigned: s = !1 } = E || {};
  if (!t.provider && !m)
    throw new Error("Wallet not connected");
  try {
    const [C, h] = await ui(t, n, f || Sr, {
      isAnon: m,
      isSigned: s
    });
    if (typeof h[i] != "function")
      throw new Error(
        `Method "${i}" not found on canister "${n}"`
      );
    const v = await h[i](...a);
    return [C, v];
  } catch (C) {
    throw console.error(
      `Error calling method "${i}" on canister "${n}":`,
      C
    ), C;
  }
}, ui = async (t, n, i, a) => {
  var R;
  const { isAnon: f = !1, isForced: E = !1, isSigned: m = !1 } = a || {}, s = `${((R = t.account) == null ? void 0 : R.owner.toString()) || "anonymous"}-${n}-${f}-${m}`;
  if (!E && t.actorCache.has(s))
    return [t, t.actorCache.get(s)];
  let C;
  f ? C = await Er(t, n, i) : t.provider ? m ? C = await li(t, n, i) : C = await t.provider.createActor(n, i) : C = await Er(t, n, i);
  const h = new Map(t.actorCache);
  return h.set(s, C), [{
    ...t,
    actorCache: h
  }, C];
}, Er = async (t, n, i) => {
  var f, E;
  const a = Y0.createSync({
    identity: new Bt(),
    host: t.config.hostUrl,
    verifyQuerySignatures: t.config.verifyQuerySignatures
  });
  return (f = t.config.hostUrl) != null && f.includes("localhost") && ((E = t.provider) == null ? void 0 : E.name) !== "NFID" && await a.fetchRootKey(), ae.createActor(i, { agent: a, canisterId: n });
}, li = async (t, n, i) => {
  if (!t.provider) throw new Error("Wallet not connected");
  return t.provider.createActor(n, i);
}, Ri = (t) => !!t.activeWallet;
class hi {
  constructor(n = {}) {
    this.state = {
      account: null,
      activeWallet: null,
      provider: null,
      actorCache: /* @__PURE__ */ new Map(),
      config: {
        hostUrl: n.hostUrl || "http://localhost:4943",
        localStorageKey: n.localStorageKey || "pnpConnectedWallet",
        identityProvider: n.identityProvider,
        timeout: n.timeout || 1e3 * 60 * 60 * 24 * 7,
        // 7 days
        verifyQuerySignatures: n.verifyQuerySignatures,
        ...n
      }
    };
  }
  getAccountId() {
    if (!this.state.provider || !this.state.account) return null;
    const n = this.state.account.owner.toString();
    return pe(n) || null;
  }
  getPrincipalId() {
    return this.state.provider && this.state.account ? this.state.account.owner : null;
  }
  async connect(n) {
    const i = Ft.find((m) => m.id === n);
    if (!i)
      throw new Error(`Wallet with ID "${n}" not found.`);
    const a = new i.adapter();
    if (!await a.isAvailable())
      throw new Error(
        `Wallet "${n}" is not available. Please install or enable it.`
      );
    const E = await a.connect(this.state.config);
    if (!E || typeof E == "boolean")
      throw new Error(`Failed to connect to wallet "${n}".`);
    return this.state.account = E, this.state.activeWallet = n, this.state.provider = a, localStorage.setItem(this.state.config.localStorageKey, n), E;
  }
  async disconnect() {
    this.state.provider && await this.state.provider.disconnect(), this.state.provider = null, this.state.account = null, this.state.activeWallet = null, this.state.actorCache.clear(), localStorage.removeItem(this.state.config.localStorageKey);
  }
  async callCanister(n, i, a = [], f, E) {
    const { isAnon: m = !1, isSigned: s = !1 } = E || {};
    if (!this.state.provider && !m)
      throw new Error("Wallet not connected");
    try {
      const C = await this.getActor(n, f || Sr, {
        isAnon: m,
        isSigned: s
      });
      if (typeof C[i] != "function")
        throw new Error(
          `Method "${i}" not found on canister "${n}"`
        );
      return await C[i](...a);
    } catch (C) {
      throw console.error(
        `Error calling method "${i}" on canister "${n}":`,
        C
      ), C;
    }
  }
  async getActor(n, i, a) {
    var h;
    const { isAnon: f = !1, isForced: E = !1, isSigned: m = !1 } = a || {};
    console.log("Creating actor:", {
      canisterId: n,
      isAnon: f,
      isSigned: m,
      hasProvider: !!this.state.provider
    });
    const s = `${((h = this.state.account) == null ? void 0 : h.owner.toString()) || "anonymous"}-${n}-${f}-${m}`;
    if (!E && this.state.actorCache.has(s))
      return console.log("Returning cached actor for:", s), this.state.actorCache.get(s);
    let C;
    return f ? C = await this.createAnonymousActor(n, i) : this.state.provider ? m ? (console.log("Creating signed actor"), C = await this.createSignedActor(n, i)) : (console.log("Creating unsigned authenticated actor"), C = await this.state.provider.createActor(n, i)) : (console.log("No provider available, falling back to anonymous actor"), C = await this.createAnonymousActor(n, i)), this.state.actorCache.set(s, C), C;
  }
  async createAnonymousActor(n, i) {
    var f, E;
    const a = Y0.createSync({
      identity: new Bt(),
      host: this.state.config.hostUrl,
      verifyQuerySignatures: this.state.config.verifyQuerySignatures
    });
    return (f = this.state.config.hostUrl) != null && f.includes("localhost") && ((E = this.state.provider) == null ? void 0 : E.name) !== "NFID" && await a.fetchRootKey(), ae.createActor(i, { agent: a, canisterId: n });
  }
  async createSignedActor(n, i) {
    if (!this.state.provider) throw new Error("Wallet not connected");
    return this.state.provider.createActor(n, i);
  }
  isWalletConnected() {
    return !!this.state.activeWallet;
  }
  activeWallet() {
    return this.state.account;
  }
}
const ki = Ft, Rr = (t = {}) => new hi(t);
class di {
  constructor(n = {}, i) {
    this.state = "idle", this.transactionLlist = {}, this.stepsList = [], this.completed = [], this.activeStep = "", this.failedSteps = [], this.transactionResults = {}, this.trxArray = [], this._info = !1, this._adapterObj = !1, !(!i || !i.provider) && (Object.entries(n).forEach(([a, f]) => {
      typeof f == "object" && (this.transactionLlist[a] = f);
    }), Object.keys(this.transactionLlist).length > 0 && (this.stepsList = Object.keys(this.transactionLlist), this._adapterObj = i));
  }
  _prepareTrxArry() {
    this.trxArray = [];
    let n = [];
    Object.values(this.transactionLlist).forEach((a) => {
      n.push(a), a.updateNextStep && (this.trxArray.push(n), n = []);
    }), n.length > 0 && this.trxArray.push(n);
    let i = 0;
    return this.trxArray.forEach((a, f) => {
      a.forEach((E, m) => {
        this.trxArray[f][m].stepIndex = i, this.trxArray[f][m].state = "idle", this.trxArray[f][m].onSuccessMain = async (s, C) => {
          const h = C.stepIndex, v = E.onSuccess, R = E.onFail;
          if (s.err || s.Err || s.ERR)
            return this.failedSteps.push(this.stepsList[h]), this.transactionResults[this.stepsList[h]] = s, this.state = "error", C.state = "error", R && await R(s), !1;
          this.completed.push(this.stepsList[h]), this.activeStep = this.stepsList[h + 1], this.transactionResults[this.stepsList[h]] = s, C.state = "done", C.updateNextStep && this.trxArray[f + 1] && await C.updateNextStep(s, this.trxArray[f + 1][0]), v && await v(s);
        }, this.trxArray[f][m].onFailMain = async (s, C) => {
          const h = E.onFail, v = C.stepIndex;
          return console.error(`error in  ${this.stepsList[v]} `, this.trxArray[f][m]), console.error(s), this.failedSteps.push(this.stepsList[v]), this.activeStep = this.stepsList[v], this.state = "error", C.state = "error", h && await h(s), !1;
        }, i++;
      });
    }), this.trxArray;
  }
  // ... rest of the methods (retryExecute, execute, _processBatch) remain the same,
  // but you should add type annotations to their parameters and return types.
}
const pi = "http://localhost:4943", vi = "ryjl3-tyaaa-aaaaa-aaaba-cai", Ni = pe;
let pt = null;
function Bi() {
  return pt || (pt = Rr({
    whitelist: [vi],
    host: pi,
    identityProvider: ""
  })), pt;
}
typeof window < "u" && (window.pnp = {
  PNP: Rr,
  BatchTransact: di,
  nns: { AnonymousIdentity: Bt, Principal: W0 },
  getPNPAdapter: Bi
});
export {
  Oi as AnonymousIdentity,
  di as BatchTransact,
  pi as HOSTURL,
  vi as NNS_CANISTER_ID,
  Hi as Principal,
  Si as callCanister,
  bi as connect,
  Fi as createInitialState,
  Rr as createPNP,
  Di as disconnect,
  mi as getAccountId,
  ui as getActor,
  _i as getPrincipalId,
  Ri as isWalletConnected,
  Ni as principalIdFromHex,
  ki as walletsList
};
//# sourceMappingURL=plug-n-play.es.js.map
