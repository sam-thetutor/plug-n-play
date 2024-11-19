import { HttpAgent as S0, Actor as St, AnonymousIdentity as be } from "@dfinity/agent";
import { Principal as V0 } from "@dfinity/principal";
import { AuthClient as _t } from "@dfinity/auth-client";
import { DelegationIdentity as N0 } from "@dfinity/identity";
var Ke = ((r) => (r[r.FractionalMoreThan8Decimals = 0] = "FractionalMoreThan8Decimals", r[r.InvalidFormat = 1] = "InvalidFormat", r[r.FractionalTooManyDecimals = 2] = "FractionalTooManyDecimals", r))(Ke || {});
BigInt(1e8);
var Mt = "abcdefghijklmnopqrstuvwxyz234567", P0 = /* @__PURE__ */ Object.create(null);
for (let r = 0; r < Mt.length; r++) P0[Mt[r]] = r;
P0[0] = P0.o;
P0[1] = P0.i;
var Rt = (r) => {
  let u = r.toUint8Array(), a = new Uint8Array(32);
  return a[0] = u.length, a.set(u, 1), a;
};
const Ge = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.1.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20880%20640'%20style='enable-background:new%200%200%20880%20640;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:none;}%20.st1{fill:url(%23SVGID_1_);}%20.st2{fill:url(%23SVGID_2_);}%20.st3{fill:%2329ABE2;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M671.99,320c0-45.09-37.63-81.78-83.89-81.78c-12.26,0-33.8,6.07-66.78,34.97%20c-17.73,15.54-33.17,32.87-43.85,45.55c17.99,19.05,37.47,39.23,46.31,46.89c3.63,3.14,27.63,22.81,56.09,35.14%20c3.34,0.74,6.06,1,8.16,1C634.34,401.5,671.99,364.84,671.99,320z'/%3e%3cpath%20class='st0'%20d='M522.89,366.54c27.22,23.59,45.72,31.74,56.98,34.24c3.34,0.74,6.06,1,8.16,1%20c46.3-0.28,83.95-36.94,83.95-81.78c0-45.09-37.63-81.78-83.89-81.78c-12.26,0-33.8,6.07-66.78,34.97%20c-17.73,15.54-33.17,32.87-43.85,45.55C477.21,319.05,504.3,350.43,522.89,366.54z'/%3e%3clinearGradient%20id='SVGID_1_'%20gradientUnits='userSpaceOnUse'%20x1='515.2743'%20y1='201.9346'%20x2='705.4849'%20y2='398.9034'%3e%3cstop%20offset='0.21'%20style='stop-color:%23F15A24'/%3e%3cstop%20offset='0.6841'%20style='stop-color:%23FBB03B'/%3e%3c/linearGradient%3e%3cpath%20class='st1'%20d='M588.1,184c-32.16,0-67.28,16.49-104.38,49c-17.57,15.4-32.8,31.88-44.23,45.1c0.02,0.02,0.04,0.04,0.06,0.07%20c0.03-0.04,0.05-0.06,0.05-0.06s18.03,19.63,37.87,40.64c10.68-12.69,26.11-30.01,43.85-45.55c32.98-28.91,54.52-34.97,66.78-34.97%20c46.26,0,83.89,36.69,83.89,81.78c0,44.84-37.65,81.5-83.95,81.78c-2.11,0-4.82-0.26-8.16-1c13.49,5.84,27.99,10.04,41.8,10.04%20c84.79,0,101.36-55.33,102.49-59.25c2.51-10.14,3.84-20.7,3.84-31.56C728,245.01,665.24,184,588.1,184z'/%3e%3cpath%20class='st0'%20d='M208.01,320c0,45.09,37.63,81.78,83.89,81.78c12.26,0,33.8-6.07,66.78-34.97%20c17.73-15.54,33.17-32.87,43.85-45.55c-17.99-19.05-37.47-39.23-46.31-46.89c-3.63-3.14-27.63-22.81-56.09-35.14%20c-3.34-0.74-6.06-1-8.16-1C245.66,238.5,208.01,275.16,208.01,320z'/%3e%3cpath%20class='st0'%20d='M357.11,273.46c-27.22-23.59-45.72-31.74-56.98-34.24c-3.34-0.74-6.06-1-8.16-1%20c-46.3,0.28-83.95,36.94-83.95,81.78c0,45.09,37.63,81.78,83.89,81.78c12.26,0,33.8-6.07,66.78-34.97%20c17.73-15.54,33.17-32.87,43.85-45.55c0.26-0.3,0.52-0.62,0.78-0.92C392.12,307.51,375.7,289.57,357.11,273.46z'/%3e%3clinearGradient%20id='SVGID_2_'%20gradientUnits='userSpaceOnUse'%20x1='-877.3035'%20y1='-1122.6819'%20x2='-687.0928'%20y2='-925.7131'%20gradientTransform='matrix(-1%200%200%20-1%20-512.5778%20-684.6164)'%3e%3cstop%20offset='0.21'%20style='stop-color:%23ED1E79'/%3e%3cstop%20offset='0.8929'%20style='stop-color:%23522785'/%3e%3c/linearGradient%3e%3cpath%20class='st2'%20d='M291.9,456c32.16,0,67.28-16.49,104.38-49c17.57-15.4,32.8-31.88,44.23-45.1c-0.02-0.02-0.04-0.04-0.06-0.07%20c-0.03,0.04-0.05,0.06-0.05,0.06s-18.03-19.63-37.87-40.64c-10.68,12.69-26.11,30.01-43.85,45.55%20c-32.98,28.91-54.52,34.97-66.78,34.97c-46.26,0-83.89-36.69-83.89-81.78c0-44.84,37.65-81.5,83.95-81.78c2.11,0,4.82,0.26,8.16,1%20c-13.49-5.84-27.99-10.04-41.8-10.04c-84.79,0-101.36,55.33-102.49,59.25c-2.51,10.14-3.84,20.7-3.84,31.56%20C152,394.99,214.76,456,291.9,456z'/%3e%3cpath%20class='st3'%20d='M621.52,409.45c-43.41-1.07-88.53-35.3-97.74-43.81c-23.78-21.99-78.66-81.53-82.97-86.2%20C400.58,234.4,346.07,184,291.9,184h-0.07h-0.07c-65.85,0.33-121.19,44.92-135.91,104.44c1.13-3.92,22.76-60.3,102.42-58.34%20c43.41,1.07,88.75,35.76,97.95,44.27c23.78,21.99,78.68,81.54,82.97,86.21C479.42,405.61,533.93,456,588.1,456h0.07h0.07%20c65.85-0.33,121.19-44.92,135.91-104.44C723.03,355.48,701.18,411.41,621.52,409.45z'/%3e%3c/g%3e%3c/svg%3e", W0 = class W0 {
  constructor() {
    this.name = "Internet Identity", this.logo = W0.logo, this.authClient = null, this.agent = null, this.url = "https://identity.ic0.app";
  }
  // Helper method to initialize the AuthClient
  async initAuthClient() {
    var u, a;
    this.authClient || (this.authClient = await _t.create({
      idleOptions: {
        idleTimeout: this.config.timeout || 1e3 * 60 * 60 * 24 * 7,
        // 7 days
        disableDefaultIdleCallback: !0
        // Disable default reload behavior
      }
    }), (a = (u = this.authClient.idleManager) == null ? void 0 : u.registerCallback) == null || a.call(u, () => this.refreshLogin()));
  }
  // Helper method to initialize the HttpAgent
  async initAgent(u, a) {
    if (this.agent = new S0({
      identity: u,
      host: a
    }), a.includes("localhost") || a.includes("127.0.0.1"))
      try {
        await this.agent.fetchRootKey();
      } catch (o) {
        console.warn("Unable to fetch root key. Check to ensure that your local replica is running"), console.error(o);
      }
  }
  // Checks if the wallet is available
  async isAvailable() {
    return !0;
  }
  // Connects to the wallet using the provided configuration
  async connect(u) {
    return this.config = u, await this.initAuthClient(), await this.authClient.isAuthenticated() ? this._continueLogin(u.hostUrl || this.url) : new Promise((o, d) => {
      this.authClient.login({
        identityProvider: u.identityProvider || this.url,
        onSuccess: async () => {
          try {
            const p = await this._continueLogin(u.hostUrl || this.url);
            o(p);
          } catch (p) {
            d(p);
          }
        },
        onError: (p) => {
          d(new Error("Authentication failed: " + p));
        }
      });
    });
  }
  async _continueLogin(u) {
    try {
      const a = this.authClient.getIdentity(), o = a.getPrincipal();
      return await this.initAgent(a, u), {
        owner: o,
        subaccount: Rt(o)
      };
    } catch (a) {
      throw console.error("Error during _continueLogin:", a), a;
    }
  }
  // Check if the wallet is connected
  async isConnected() {
    return this.authClient ? this.authClient.isAuthenticated() : !1;
  }
  // Create an actor for interacting with a canister
  async createActor(u, a) {
    if (!this.agent)
      throw new Error("Agent is not initialized. Ensure the wallet is connected.");
    return St.createActor(a, {
      agent: this.agent,
      canisterId: u
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
    const u = this.authClient.getIdentity().getPrincipal(), a = Rt(u);
    if (a)
      return a.toString() || "";
  }
  // Refresh login when session is about to expire
  async refreshLogin() {
    try {
      await this.connect(this.config);
    } catch (u) {
      console.error("Failed to refresh login:", u), await this.disconnect();
    }
  }
  // Disconnects from the wallet
  async disconnect() {
    this.authClient && (await this.authClient.logout(), this.agent = null, this.authClient = null, this.config = {});
  }
};
W0.logo = Ge;
let O0 = W0;
const Xe = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAggICAgICAoICAgICAgICAgICAgICAgICQgICAgICQgICAgICAkICAgICAoICAgICgkKCAgLDQsIDAgICggBAwQEBgUGCgYGCg0OCw0NDg8NDg8PDQ0ODRANDQ4PDg0QDQ0ODQ4PEA4ODw0ODg4QDQ0PDQ8ODxAOEA8ODQ0NDf/AABEIAIAAgAMBEQACEQEDEQH/xAAeAAEAAgMAAwEBAAAAAAAAAAAABwgFBgkDBAoCAf/EAE8QAAIBAwEEBAcJDAYLAAAAAAECAwAEEQUGBxIhCBMxQQkUIjJRYYEkNHFzkZKhs7QVI0JSdHWChbLB0dMzNTZTctQXJSZDYmODk5Sio//EAB0BAQABBQEBAQAAAAAAAAAAAAAHAwQFBggCAQn/xABBEQABAwIDBAUIBwgCAwAAAAABAAIDBBEFITEGEkFRMmFxgZEHEyKhscHR0iMkQoKSsvEWM1JicnPh8KLCFBVD/9oADAMBAAIRAxEAPwDqnREoiURKIlEUdar0kNnYJHhn1jRYZomKSRS6pYxyRuOTI8bzhkYHkVYAivtl5LgNSts2U20s7+EXFjc217ASVE9pPFcwll5Mokhd0JXvHFkV8X0G6zNF9SiLGbR7T21nC9xeTwWtvHgyT3MscEKAnA45ZWVFySAOJhzNEWj2vSb2akZUTWtDd3YKiJq1gzMxOAqqLgliTyAAJJr7ZeQ9p4hSUDXxel/aIlESiJREoiURKIlESiL5ntvD7uvfyu4+ueq40WKf0j2rq/4Gc/6h1T87n7Ha1Tdqryn6PeugVeFcpRFSzwtx/wBkv1nZfsz16bqqM3QK4qVWWNX01bL+9rf4iH6tat1mFlKIlESiJREoiURKIlESiL5nduvf15+VXH1z1XGixT+ke1dX/Az/ANQ6p+dz9jtapu1V5T9HvXQOvCuUoipZ4W/+yX6zsv2bivTdVRm6BXFSqyxq+mrZf3tbfEQ/VrVuswspREoiURKIlESiJREoiURfM7t17+vPyq4+ueq40WKf0j2rq/4Gf+odU/O5+x2tU3aq8p+j3roHXhXKURUs8Lf/AGS/Wdl+zcV6bqqM3QK4qVWWNX01bL+9rb4iH6tat1mFlKIlESiJREoiURKIoo3j735bW4a3gSMmMLxtIGOSyhwFCsuAFYcyTknsGOcdY5tNLRVBp4Gt9EDeLrnUXsACOBCibaTbGfD6s0lMxt2gbxdc5uANgARwIzufUtU/0+Xv4tv8yT+bWuftlXfwx+DvmWp/t/iX8EX4XfOqSar0D9DllkleS/DyyPI2LiEDidixwPFuQyeQq8i2oxaUXjiaexjz7CrR23dfe5EQ7j8ynzo26LFstaz2emkyRXFx4y5umEriTq0iwpjEIC8Ma8ipOc8+dVnbQY03N1P4xyD3qpH5Qa5osBD4O+dTFFv6vD+Db/Mf+bVodra9ps9jAetrh/2V23b7EHfZi/C7517Ue/G7P4MHzH/mVUG1tYfsx+B+ZXTdua8/Zi/C75lHm/8A0hNptP8AubqHElv18dxm1Ijk44w4UcUgmXh8s5HDk4HMc8127VVfJngfmVY7Z1zxYtj8HfMq5R+Df2fP+81L/wAmD/K1cN2oqzwZ4H4r03amrPBngfmV4tM3mTxxpGBERGioCVbJCgKM4cDOBzwBVUbR1J4M8D8Vkm7W1h4M8D8y2HZ3eRJJKiSKmHYKCgIIJOB2scjJGez91ZSixySWVscrRZxAyuLX04lZrDtpJZpmxTNbZxAuLggnIak8VIVbqpDSiJREoiURKIqpb89Z4NTuVAyR1PM9nO3iPt+irCDyeDF6p1fVS7sTiN1rOkd1oabuOTcwdA645Lkvb2v81jVQxoz+jzOn7pijWfUXbtY/AOQ+ipVw3ZLCMOAEFOy4+04b7u3edcjusFF0lVLJq492XsUCb6elvY6RI1siNe3i+fDG4SOI4ziWYq/C3Z5CJIw/C4eWa+I4nT030YG84cBkB2n3WUg7ObDVuLsFQ9wihOjnC5d1tbcXHWSByuos0Pwhr9YPGdO4YSRloLnikRe8hHiVZD6uOP4RWqOxJrz6TMuo/wCPgt8n8lwDPq9Vd3JzLA94cSPBytfu43n2mp263VlKJIzyYebJE/ekiecjDtweRGGBZSCac9DDVsvuhw5EA+oqIcRw+rwqcwVLS13A8HDm08R7NDY5LYtod48FhbyXV3KkUEQy7yH5FXHlM7HkqKGZicAE1H+I7JUkl3MG4ebdPw6eFlfYY+qqpmwQNL3HQe+/ADiTkOKq1tV4TcLKVsNOaWJTymubjqmf04hjifhHeCZSfSq9la3Fsgfty+DfiVOlJsU7cBqZgHfwtG8B94kX8FJm4nwgWn6pOlpewtplzIwSIvKJraVyQFTruCJo3Y+arx8J7OsJIBx1ds9PSt34zvtGuViO7O/j3KyxHZeekYZYXecaNbCzh3XNx2G/UrZwzVrjXLVGPWf2Wl90QfHRftrWYw931mL+tv5gs/hT/rcP9xn5gp7qYlPqURKIlESiJRFT3f64GrXeeX9B9mhqV8ENqGO/8353LkXbHDavEtpqimoonyyO83ZjGl7j9DHwaCe06BQJvk3heIaZeXUf9JHFiI45CWRlijbB7QrurEY5gGrqurBDC57dQMu05BSHhfkJx5sQrsWEcMTS0ujL96VwLgLWj3mi9+LwRyXMG4mZ3Z3JZ3ZmdmOWZmJLMSeZJJJJPaTUUOJJJOql/wA22IebYLBuQAyAAyGS/FeUUg7jt7M2j3yXEZLQuQlzBnyZYs8wAeQdPOjbkQwx5rMDe0k5hffhxHMf7otY2hwKPGaUwOtvjON3FrvgdCOXWAVn+kvvufWbzCFhY25K20fNeLuad1PPjk7gccCYXAJct9rZRLId3ojT4rG7JbOjBqb6QfTv/eHlyYDyHHmc9LWh+rFbyhFeHN3hZegbLrX0Nt5smpaHbvOxee1d7OaRjkyGII0bEnmWMEkXExJLMGPfUJ4xTimqnNbkD6QHK+vrBUI4/StpK1zWZNcA4DlfUeIPcrGbJy+6bf4+L6xap4a761F/W38wVLCXfXIP7jPzBWHqa10SlESiJREoiURUm6Rrn7s3g9Hi/wBlgqScIP1Rn3vzFdCbE4fSwYe2piiY2WUuMjw0Bz91zmt3nandaABc5AZKu+/jZ57rSbyJBl+BJQBzJ6mRJmAHeSqEAenFXFfGZIHNHK/gbrYcfp3VFBLG3WwP4SHewKZujJ0QNhNW0XT9Q+5/WzSQIt2HvtQ8m8jUJcqUW7VVHWhmUcKgxsjAAMKjN92my5bmpmseQRxWL6QXgztLvbzTX0eOGwsUE8eowxTyJOxZc29xFLOl2r9XJgSROFzGPIPExK+Q5WroQSLLWOmHszs7YWlrs3o+m6VLrl2kEdxeJY2wmtIFVTJcGTgLQz3HDxDBykRkfkTCWvKWB8zw1v8Av6LM0GGSVbwyJtydPee7isR0MtC0CC7uNm9otO0u4uGkM2l6jc2VuZLuN85t2mdS5fI4oVLsc9bFnMcQatXUr6d5B/Uc16xDC30chZI31ajmt23FeDI061v7yfWhBfW5nuhbQJIy28ltKYmtmMKJDLbTwETBwtxLGQyKo8lnbGlywbYQDmpK3mdCXd/ZWV1fXOnCKG1heZzHf6ghPCMqijxvBeRsRooHlMygAk0BJNgvsjY2NLnaBQh0HtINrpGGHB43dTXUa5JxGVjhUZPM5EHEpPapB760Ta3B5AxtezogbrhyFzZ3eTY93WucNosVZPiZhH2Ghvfm4juv6irU7Hy+6rb8oh+sWtCwx31qH+4z8wXvB3fXYP7rPzhWTqdV0qlESiJREoiURVF3/wCxM8mrzui+RKkD8bcl5RLEfWecZ5AH2Vkpdr8NwWlayqk+kztG0XeRc520A6yRexteyn7ZTEoY8Kja45tLxYa9Iu9601N3IA8tix9CgAfTnP0VpkvlQdK61PC1o/mJcfVugdma2N2Lb3RaO/NRpZbtdV0K6lu9npUMM7cdxplyfc8jelPKQKfQQ8TIPJDlMILaLaZtQbygDsGSjjFcBbUuMkNs87aW7DpbqOnBZrW99+2N1GYIrKy05mHC92ZFlMee1o166UA+gmKb2dtZqLEadxzN1gYNlp3O9IZdZbb1EnwWn7F7pPEDLPM73V7cEtcXkhLO7MeJgCxLBS3M8RLOQCTyULJeDz0j2/Quu62YOR7AOXZdTFguF09Cz0M3kZnTuA5e3jws3g7u4dQiVZMxyxnignTlJC/I5U8iQSBlcjOAQVIVhmqmmZO3dd3Hkr3E8JgxCPckGfB3EfEcx+qyGzG/3azToxbyQWurog4Y7l5OqnK9iiQ9bHxkDtLRlj3yP21qMuCyB3ojwt71ENXsTVNefNC45gi3gSCPYsVtImtbRSJ92pIrWxicSDTrQnEjjsMjB5M8jjiMrlefCsZbirKUGB53l8OJ9wXN/lTkxTZhkYdGd2W4Y/Ita5uoNibutm0GwI57rgpV04iIIqAIqBVRVGAoUYUADkAAAAPRWZrMMjmjdE4XaQQR1EWsuPhUv3/OEneve/G/NTBuwk666tcf3iufVweWfk4TXJwwqSgxoUTvsSAg82j0ge9vrUybKv8A/Lract/jBP3cz7FZ2pdXUCURKIlESiJRFoO9XZ/rFSYDmnkN/hJyvyNkfpVB3lRo3MpYsSj/APmdx/8AS8+ie52X3ltmA1fm3OiPHMdo19XsUT3Ok1AtLjfWt8ZOoW6Re0s2nQ2NytyLG1N/HBf3JsvHxBbyxTBJmtxNA7ItwIVfq5VfhcleMgI0t7IVNPiNSaecnNhLbGxuCPdc9yscUxCanhEkFrh2dxfIg++y2LT9gteuIEutMk2e1+0ceRPa3lxp7N/02i1OEN3FTdAqeRA54l8bPhucUpt1gH2WWFi2ulb+8jB7CR7d5ejNsdtMMiTZ+ZvXBqukyqf+7c27Y+FBV5DQVUJBbILjQ5g+9ZePbOIZujcOwg/Ba9d7q9pnb7zoNwoP99qekIB7UvJWx8Ck/DUl0OOSMi3akbzhxGV+3LX2rLt2+gDbGJ5PaB8V71r0fNpeB5r1dE0a1jUvLcXeoy3RiQdrMkVtbQAL3l7xAOXM91w/H3fYjHeb+4Kwm8oLzlDAAetxPqAb7VFOw+1Yl1C/S3v4tWsbXxeJbyCxNlBJcnrWuUgD3V280cadRiZpAHZm4RwhXkzGEVs05c+S1hYCw8fcsRimFz7eYHW0NY1gNgacgWDJmhxa65JPJrv5XEcVKYNbevysljfE90bwQ5pIIOoINiO4qfOjBoTM01y3mJ97j9bsAXx/hXA/TqJtpsOh/wDYx1g6fmy0j73ont6Q7F0D5KsPe8y1j+i30Wf1EAu8BYfeKsLWDXRSURKIlESiJRF4rq2DqyNzVgQR6jVnWUkVZA+mnF2PaWuHMEKpG8xuDm6hRBruitDIUbmO1W/GXuP8R3Gvz+2m2eqdnq51LLfd1jfwe3ge0aOHA9RBMiUtS2eMPb3jkVpm3mwNvqNpcWVyvFDcxtHIAcEZ5qynuZGCupwcMoPOsdhuNVGHzsqIj6TDcfA9RGR6ldSASMLHaFcvdu90es7K3zCCe6tgx9z3tpLLAlxGCSMtE4w4HnwOSVP4ylWbsLANrqfF4BLA6zx02X9Jp945O0PbcDSaikMLt1wy4Hms7pfTN2uhAC6nM4AxiWG1mPzpIGf28XOtzbibuatfMtPBeTU+mztfIMHUpEH/AC7azQ/OW34x7GFXAxAnivQgbyUW6lJrm0FysVzc3t+2Qc3M8skMCntchiY4lHPkqjixgAkgHb8OYaxo82M+PV2rPYdhclY8RwNz4ngOsn/erNW/3bbAxaZZxWkXMJlpHxgyStzeQjJxk8gMnhUKMnFSRTU7YIxG39TzU/4Zh7KCnbAzhqeZOp/3QKWNidnpbySKCEFnc49SqPOdj3Ko5k+zmSAcjLVMp4TLIch6+Q71+X/lN2Sm/biqoKRmUz2zDk0StDnuPINeX9trDMgK7WyOzEdnbxW8fmxrgnvdjzZz62bJ9XZ3VEdVUuqZXSv1Pq5DuU74RhcOF0kdHD0WC1+Ljxcesm5WZq0WYSiJREoiURKIlEWP1rREnThf9Fh2qfSP3jvrVdo9nKTH6U01UOtjx0mHmPeNCFd01U+nfvM7xzUX61s9JAcMMr3OPNP8D6j9NcSbS7H4hs/KRUN3oyfRlaCWO5X/AIT/ACnuJAut6payOoF2nPiOK17WtDhuY2huI454nGGjlRZEb4VYEcu0HHI1p0FRLTvEsLi1w0LSQR3hXjmhws4XChDaHoSaHOxaNbm1zzxbzAr8lwk+B6lIA9VSBS7f4tALOLH/ANTc/wDgWrHuw+I6XHZ/m69PSegtosZy5u7j/hmmVV/+EULf+1ZB3lGxJ+QDG9bWkn/kXD1L0yghbrc9/wALLMbe7t7Wxt4RaQxW8auUKxIF4uJchmPa7eT5zEk57a6H8ie1U1dXVVFO8u3oxILnQscGm3K4ePBSNs3I1jnwsAAtfwy96wmxO7661CTq7aMtgjjkPKKMHvd+wenhGWPcDXWdTVxUzd6Q9g4nuWyYli1NhsfnKh1uTdXO7B79BxKuPur3VQ6XDwJ98mfnNMRgsfxVH4KDuXJz2nJ7I+rq+Srdnk0aDl/lcz4zWMxLEH4h5trXlrWX+1uMJLQTxzcT+i3isYsUlESiJREoiURKIlESiL8SRBgQQCD2gjIPsqlLCyZhjlaHNIsQQCCORByXpri03BzUcbeaLHEyGNeEOGyBnGRjs9Hb2Vx55VdnKLCJ6eWhi3BKH74F927d21ho3InIWHUtzwmpfM1wkN7WtzWrVBF1nkpdF7+ibIQXsgiuE6yJfvnDkgFl5LnhIJHPszzqd/I0+WPHnSR3FoH3PK7mD9P8Kyq8QmoY/OU7t1xyvkcjra6lnTNKigRY4USKNRhURQqj2AAe3vrst73PO84knmVoE08k7zJK4ucdSTc+te3XhUEoiURKIlESiJREoiURKIlEWL2h0VZ4yrciPKVh2g/wPYRWnbVbN02P0Jpqi4I9Jjxq1wGvWCMiOPaAVfUdU6nk3m9hHNRBX54KRUoilHYrRFjiVxzaVVYk9wIyFHqH0/JXc3k32bpsLwyOrYS6SoYx73HgC24YOoXPWTnyA0TE6p0spYdGkgfFbFUtLDpREoiURKIlESiJREoiURKIlEX5Zcgj015c3eBHNfQbKHNT0aSJirKeR5HBww9INfnZjezGIYRUvp54nkA2a8NO68cCDmMxwvlodFJEFTHM0OaR2cQvDa6c7kKqsSfQD9Po+E1YUGCV9fMIKaB7nE26JsL8SbWA6yQFUkmZGN5xACmHS7Tq440PMqiqT6wAK/QvBqE4fQU9G43McTGE8y1oBPqUczyeckc8cSSvarMqglESiJREoiURKIlESiJREoiURKIlESiJREoiURKIlESiJRF//9k=", I0 = class I0 {
  constructor() {
    this.name = "Plug", this.logo = I0.logo, this.url = "https://plugwallet.ooo/", this.readyState = "NotDetected", this.initPlug();
  }
  // Initialize Plug and set readyState accordingly
  initPlug() {
    typeof window < "u" && window.ic && window.ic.plug ? (this.readyState = "Installed", window.ic.plug.isConnected().then((u) => {
      this.readyState = u ? "Connected" : "Installed";
    })) : this.readyState = "NotDetected";
  }
  // Check if the wallet is available
  async isAvailable() {
    return this.readyState !== "NotDetected";
  }
  // Check if the wallet is connected
  async isConnected() {
    var u, a;
    return ((a = (u = window.ic) == null ? void 0 : u.plug) == null ? void 0 : a.isConnected()) || !1;
  }
  // Connect to Plug wallet
  async connect(u) {
    if (this.readyState === "NotDetected")
      throw window.open(this.url, "_blank"), new Error("Plug wallet is not available");
    if (await window.ic.plug.isConnected())
      this.readyState = "Connected";
    else
      try {
        if (console.log("Connecting to Plug wallet...", u), !await window.ic.plug.requestConnect({
          whitelist: u.whitelist || [],
          host: u.hostUrl || "https://mainnet.dfinity.network",
          timeout: u.timeout || 1e3 * 60 * 60 * 24 * 7,
          onConnectionUpdate: this.handleConnectionUpdate.bind(this)
        }))
          throw new Error("User declined the connection request");
        this.readyState = "Connected";
      } catch (d) {
        throw console.error("Failed to connect to Plug wallet:", d), d;
      }
    const o = await this.getPrincipal();
    return await this.getAccountId(), {
      owner: o,
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
      return V0.fromText(window.ic.plug.principalId);
    throw new Error("Plug wallet is not available or principal ID is unavailable");
  }
  // Get the user's account ID
  async getAccountId() {
    if (window.ic && window.ic.plug && window.ic.plug.accountId)
      return window.ic.plug.accountId;
    throw new Error("Plug wallet is not available or account ID is unavailable");
  }
  // Create an actor for interacting with a canister
  async createActor(u, a) {
    var o;
    if (!((o = window.ic) != null && o.plug))
      throw new Error("Plug wallet is not available");
    return window.ic.plug.createActor({
      canisterId: u,
      interfaceFactory: a
    });
  }
  // Handle connection updates
  handleConnectionUpdate(u) {
    u.sessionExpired && (this.readyState = "Disconnected");
  }
};
I0.logo = Xe;
let q0 = I0;
function Qe(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
const Ze = new Int32Array([
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
function _e(r) {
  if (Buffer.isBuffer(r))
    return r;
  if (typeof r == "number")
    return Buffer.alloc(r);
  if (typeof r == "string")
    return Buffer.from(r);
  throw new Error("input must be buffer, number, or string, received " + typeof r);
}
function je(r) {
  const u = _e(4);
  return u.writeInt32BE(r, 0), u;
}
function kt(r, u) {
  r = _e(r), Buffer.isBuffer(u) && (u = u.readUInt32BE(0));
  let a = ~~u ^ -1;
  for (var o = 0; o < r.length; o++)
    a = Ze[(a ^ r[o]) & 255] ^ a >>> 8;
  return a ^ -1;
}
function Tt() {
  return je(kt.apply(null, arguments));
}
Tt.signed = function() {
  return kt.apply(null, arguments);
};
Tt.unsigned = function() {
  return kt.apply(null, arguments) >>> 0;
};
var Ye = Tt;
const Je = /* @__PURE__ */ Qe(Ye);
var X = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
function $e(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function Le(r) {
  if (r.__esModule) return r;
  var u = r.default;
  if (typeof u == "function") {
    var a = function o() {
      return this instanceof o ? Reflect.construct(u, arguments, this.constructor) : u.apply(this, arguments);
    };
    a.prototype = u.prototype;
  } else a = {};
  return Object.defineProperty(a, "__esModule", { value: !0 }), Object.keys(r).forEach(function(o) {
    var d = Object.getOwnPropertyDescriptor(r, o);
    Object.defineProperty(a, o, d.get ? d : {
      enumerable: !0,
      get: function() {
        return r[o];
      }
    });
  }), a;
}
var H0 = {}, M0 = {};
M0.byteLength = rr;
M0.toByteArray = ir;
M0.fromByteArray = xr;
var d0 = [], l0 = [], tr = typeof Uint8Array < "u" ? Uint8Array : Array, G0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var R0 = 0, er = G0.length; R0 < er; ++R0)
  d0[R0] = G0[R0], l0[G0.charCodeAt(R0)] = R0;
l0[45] = 62;
l0[95] = 63;
function Re(r) {
  var u = r.length;
  if (u % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var a = r.indexOf("=");
  a === -1 && (a = u);
  var o = a === u ? 0 : 4 - a % 4;
  return [a, o];
}
function rr(r) {
  var u = Re(r), a = u[0], o = u[1];
  return (a + o) * 3 / 4 - o;
}
function nr(r, u, a) {
  return (u + a) * 3 / 4 - a;
}
function ir(r) {
  var u, a = Re(r), o = a[0], d = a[1], p = new tr(nr(r, o, d)), w = 0, i = d > 0 ? o - 4 : o, g;
  for (g = 0; g < i; g += 4)
    u = l0[r.charCodeAt(g)] << 18 | l0[r.charCodeAt(g + 1)] << 12 | l0[r.charCodeAt(g + 2)] << 6 | l0[r.charCodeAt(g + 3)], p[w++] = u >> 16 & 255, p[w++] = u >> 8 & 255, p[w++] = u & 255;
  return d === 2 && (u = l0[r.charCodeAt(g)] << 2 | l0[r.charCodeAt(g + 1)] >> 4, p[w++] = u & 255), d === 1 && (u = l0[r.charCodeAt(g)] << 10 | l0[r.charCodeAt(g + 1)] << 4 | l0[r.charCodeAt(g + 2)] >> 2, p[w++] = u >> 8 & 255, p[w++] = u & 255), p;
}
function or(r) {
  return d0[r >> 18 & 63] + d0[r >> 12 & 63] + d0[r >> 6 & 63] + d0[r & 63];
}
function ar(r, u, a) {
  for (var o, d = [], p = u; p < a; p += 3)
    o = (r[p] << 16 & 16711680) + (r[p + 1] << 8 & 65280) + (r[p + 2] & 255), d.push(or(o));
  return d.join("");
}
function xr(r) {
  for (var u, a = r.length, o = a % 3, d = [], p = 16383, w = 0, i = a - o; w < i; w += p)
    d.push(ar(r, w, w + p > i ? i : w + p));
  return o === 1 ? (u = r[a - 1], d.push(
    d0[u >> 2] + d0[u << 4 & 63] + "=="
  )) : o === 2 && (u = (r[a - 2] << 8) + r[a - 1], d.push(
    d0[u >> 10] + d0[u >> 4 & 63] + d0[u << 2 & 63] + "="
  )), d.join("");
}
var Ut = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Ut.read = function(r, u, a, o, d) {
  var p, w, i = d * 8 - o - 1, g = (1 << i) - 1, x = g >> 1, c = -7, F = a ? d - 1 : 0, f = a ? -1 : 1, B = r[u + F];
  for (F += f, p = B & (1 << -c) - 1, B >>= -c, c += i; c > 0; p = p * 256 + r[u + F], F += f, c -= 8)
    ;
  for (w = p & (1 << -c) - 1, p >>= -c, c += o; c > 0; w = w * 256 + r[u + F], F += f, c -= 8)
    ;
  if (p === 0)
    p = 1 - x;
  else {
    if (p === g)
      return w ? NaN : (B ? -1 : 1) * (1 / 0);
    w = w + Math.pow(2, o), p = p - x;
  }
  return (B ? -1 : 1) * w * Math.pow(2, p - o);
};
Ut.write = function(r, u, a, o, d, p) {
  var w, i, g, x = p * 8 - d - 1, c = (1 << x) - 1, F = c >> 1, f = d === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, B = o ? 0 : p - 1, v = o ? 1 : -1, C = u < 0 || u === 0 && 1 / u < 0 ? 1 : 0;
  for (u = Math.abs(u), isNaN(u) || u === 1 / 0 ? (i = isNaN(u) ? 1 : 0, w = c) : (w = Math.floor(Math.log(u) / Math.LN2), u * (g = Math.pow(2, -w)) < 1 && (w--, g *= 2), w + F >= 1 ? u += f / g : u += f * Math.pow(2, 1 - F), u * g >= 2 && (w++, g /= 2), w + F >= c ? (i = 0, w = c) : w + F >= 1 ? (i = (u * g - 1) * Math.pow(2, d), w = w + F) : (i = u * Math.pow(2, F - 1) * Math.pow(2, d), w = 0)); d >= 8; r[a + B] = i & 255, B += v, i /= 256, d -= 8)
    ;
  for (w = w << d | i, x += d; x > 0; r[a + B] = w & 255, B += v, w /= 256, x -= 8)
    ;
  r[a + B - v] |= C * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(r) {
  const u = M0, a = Ut, o = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  r.Buffer = i, r.SlowBuffer = l, r.INSPECT_MAX_BYTES = 50;
  const d = 2147483647;
  r.kMaxLength = d, i.TYPED_ARRAY_SUPPORT = p(), !i.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function p() {
    try {
      const n = new Uint8Array(1), t = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(n, t), n.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(i.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (i.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(i.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (i.isBuffer(this))
        return this.byteOffset;
    }
  });
  function w(n) {
    if (n > d)
      throw new RangeError('The value "' + n + '" is invalid for option "size"');
    const t = new Uint8Array(n);
    return Object.setPrototypeOf(t, i.prototype), t;
  }
  function i(n, t, e) {
    if (typeof n == "number") {
      if (typeof t == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return F(n);
    }
    return g(n, t, e);
  }
  i.poolSize = 8192;
  function g(n, t, e) {
    if (typeof n == "string")
      return f(n, t);
    if (ArrayBuffer.isView(n))
      return v(n);
    if (n == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof n
      );
    if (i0(n, ArrayBuffer) || n && i0(n.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (i0(n, SharedArrayBuffer) || n && i0(n.buffer, SharedArrayBuffer)))
      return C(n, t, e);
    if (typeof n == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const s = n.valueOf && n.valueOf();
    if (s != null && s !== n)
      return i.from(s, t, e);
    const y = A(n);
    if (y) return y;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof n[Symbol.toPrimitive] == "function")
      return i.from(n[Symbol.toPrimitive]("string"), t, e);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof n
    );
  }
  i.from = function(n, t, e) {
    return g(n, t, e);
  }, Object.setPrototypeOf(i.prototype, Uint8Array.prototype), Object.setPrototypeOf(i, Uint8Array);
  function x(n) {
    if (typeof n != "number")
      throw new TypeError('"size" argument must be of type number');
    if (n < 0)
      throw new RangeError('The value "' + n + '" is invalid for option "size"');
  }
  function c(n, t, e) {
    return x(n), n <= 0 ? w(n) : t !== void 0 ? typeof e == "string" ? w(n).fill(t, e) : w(n).fill(t) : w(n);
  }
  i.alloc = function(n, t, e) {
    return c(n, t, e);
  };
  function F(n) {
    return x(n), w(n < 0 ? 0 : D(n) | 0);
  }
  i.allocUnsafe = function(n) {
    return F(n);
  }, i.allocUnsafeSlow = function(n) {
    return F(n);
  };
  function f(n, t) {
    if ((typeof t != "string" || t === "") && (t = "utf8"), !i.isEncoding(t))
      throw new TypeError("Unknown encoding: " + t);
    const e = h(n, t) | 0;
    let s = w(e);
    const y = s.write(n, t);
    return y !== e && (s = s.slice(0, y)), s;
  }
  function B(n) {
    const t = n.length < 0 ? 0 : D(n.length) | 0, e = w(t);
    for (let s = 0; s < t; s += 1)
      e[s] = n[s] & 255;
    return e;
  }
  function v(n) {
    if (i0(n, Uint8Array)) {
      const t = new Uint8Array(n);
      return C(t.buffer, t.byteOffset, t.byteLength);
    }
    return B(n);
  }
  function C(n, t, e) {
    if (t < 0 || n.byteLength < t)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (n.byteLength < t + (e || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let s;
    return t === void 0 && e === void 0 ? s = new Uint8Array(n) : e === void 0 ? s = new Uint8Array(n, t) : s = new Uint8Array(n, t, e), Object.setPrototypeOf(s, i.prototype), s;
  }
  function A(n) {
    if (i.isBuffer(n)) {
      const t = D(n.length) | 0, e = w(t);
      return e.length === 0 || n.copy(e, 0, 0, t), e;
    }
    if (n.length !== void 0)
      return typeof n.length != "number" || u0(n.length) ? w(0) : B(n);
    if (n.type === "Buffer" && Array.isArray(n.data))
      return B(n.data);
  }
  function D(n) {
    if (n >= d)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + d.toString(16) + " bytes");
    return n | 0;
  }
  function l(n) {
    return +n != n && (n = 0), i.alloc(+n);
  }
  i.isBuffer = function(t) {
    return t != null && t._isBuffer === !0 && t !== i.prototype;
  }, i.compare = function(t, e) {
    if (i0(t, Uint8Array) && (t = i.from(t, t.offset, t.byteLength)), i0(e, Uint8Array) && (e = i.from(e, e.offset, e.byteLength)), !i.isBuffer(t) || !i.isBuffer(e))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (t === e) return 0;
    let s = t.length, y = e.length;
    for (let R = 0, P = Math.min(s, y); R < P; ++R)
      if (t[R] !== e[R]) {
        s = t[R], y = e[R];
        break;
      }
    return s < y ? -1 : y < s ? 1 : 0;
  }, i.isEncoding = function(t) {
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
  }, i.concat = function(t, e) {
    if (!Array.isArray(t))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (t.length === 0)
      return i.alloc(0);
    let s;
    if (e === void 0)
      for (e = 0, s = 0; s < t.length; ++s)
        e += t[s].length;
    const y = i.allocUnsafe(e);
    let R = 0;
    for (s = 0; s < t.length; ++s) {
      let P = t[s];
      if (i0(P, Uint8Array))
        R + P.length > y.length ? (i.isBuffer(P) || (P = i.from(P)), P.copy(y, R)) : Uint8Array.prototype.set.call(
          y,
          P,
          R
        );
      else if (i.isBuffer(P))
        P.copy(y, R);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      R += P.length;
    }
    return y;
  };
  function h(n, t) {
    if (i.isBuffer(n))
      return n.length;
    if (ArrayBuffer.isView(n) || i0(n, ArrayBuffer))
      return n.byteLength;
    if (typeof n != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof n
      );
    const e = n.length, s = arguments.length > 2 && arguments[2] === !0;
    if (!s && e === 0) return 0;
    let y = !1;
    for (; ; )
      switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return e;
        case "utf8":
        case "utf-8":
          return A0(n).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return e * 2;
        case "hex":
          return e >>> 1;
        case "base64":
          return E0(n).length;
        default:
          if (y)
            return s ? -1 : A0(n).length;
          t = ("" + t).toLowerCase(), y = !0;
      }
  }
  i.byteLength = h;
  function E(n, t, e) {
    let s = !1;
    if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((e === void 0 || e > this.length) && (e = this.length), e <= 0) || (e >>>= 0, t >>>= 0, e <= t))
      return "";
    for (n || (n = "utf8"); ; )
      switch (n) {
        case "hex":
          return $(this, t, e);
        case "utf8":
        case "utf-8":
          return I(this, t, e);
        case "ascii":
          return L(this, t, e);
        case "latin1":
        case "binary":
          return Z(this, t, e);
        case "base64":
          return O(this, t, e);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return j(this, t, e);
        default:
          if (s) throw new TypeError("Unknown encoding: " + n);
          n = (n + "").toLowerCase(), s = !0;
      }
  }
  i.prototype._isBuffer = !0;
  function b(n, t, e) {
    const s = n[t];
    n[t] = n[e], n[e] = s;
  }
  i.prototype.swap16 = function() {
    const t = this.length;
    if (t % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let e = 0; e < t; e += 2)
      b(this, e, e + 1);
    return this;
  }, i.prototype.swap32 = function() {
    const t = this.length;
    if (t % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let e = 0; e < t; e += 4)
      b(this, e, e + 3), b(this, e + 1, e + 2);
    return this;
  }, i.prototype.swap64 = function() {
    const t = this.length;
    if (t % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let e = 0; e < t; e += 8)
      b(this, e, e + 7), b(this, e + 1, e + 6), b(this, e + 2, e + 5), b(this, e + 3, e + 4);
    return this;
  }, i.prototype.toString = function() {
    const t = this.length;
    return t === 0 ? "" : arguments.length === 0 ? I(this, 0, t) : E.apply(this, arguments);
  }, i.prototype.toLocaleString = i.prototype.toString, i.prototype.equals = function(t) {
    if (!i.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
    return this === t ? !0 : i.compare(this, t) === 0;
  }, i.prototype.inspect = function() {
    let t = "";
    const e = r.INSPECT_MAX_BYTES;
    return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(), this.length > e && (t += " ... "), "<Buffer " + t + ">";
  }, o && (i.prototype[o] = i.prototype.inspect), i.prototype.compare = function(t, e, s, y, R) {
    if (i0(t, Uint8Array) && (t = i.from(t, t.offset, t.byteLength)), !i.isBuffer(t))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t
      );
    if (e === void 0 && (e = 0), s === void 0 && (s = t ? t.length : 0), y === void 0 && (y = 0), R === void 0 && (R = this.length), e < 0 || s > t.length || y < 0 || R > this.length)
      throw new RangeError("out of range index");
    if (y >= R && e >= s)
      return 0;
    if (y >= R)
      return -1;
    if (e >= s)
      return 1;
    if (e >>>= 0, s >>>= 0, y >>>= 0, R >>>= 0, this === t) return 0;
    let P = R - y, G = s - e;
    const r0 = Math.min(P, G), e0 = this.slice(y, R), n0 = t.slice(e, s);
    for (let Y = 0; Y < r0; ++Y)
      if (e0[Y] !== n0[Y]) {
        P = e0[Y], G = n0[Y];
        break;
      }
    return P < G ? -1 : G < P ? 1 : 0;
  };
  function _(n, t, e, s, y) {
    if (n.length === 0) return -1;
    if (typeof e == "string" ? (s = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), e = +e, u0(e) && (e = y ? 0 : n.length - 1), e < 0 && (e = n.length + e), e >= n.length) {
      if (y) return -1;
      e = n.length - 1;
    } else if (e < 0)
      if (y) e = 0;
      else return -1;
    if (typeof t == "string" && (t = i.from(t, s)), i.isBuffer(t))
      return t.length === 0 ? -1 : S(n, t, e, s, y);
    if (typeof t == "number")
      return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? y ? Uint8Array.prototype.indexOf.call(n, t, e) : Uint8Array.prototype.lastIndexOf.call(n, t, e) : S(n, [t], e, s, y);
    throw new TypeError("val must be string, number or Buffer");
  }
  function S(n, t, e, s, y) {
    let R = 1, P = n.length, G = t.length;
    if (s !== void 0 && (s = String(s).toLowerCase(), s === "ucs2" || s === "ucs-2" || s === "utf16le" || s === "utf-16le")) {
      if (n.length < 2 || t.length < 2)
        return -1;
      R = 2, P /= 2, G /= 2, e /= 2;
    }
    function r0(n0, Y) {
      return R === 1 ? n0[Y] : n0.readUInt16BE(Y * R);
    }
    let e0;
    if (y) {
      let n0 = -1;
      for (e0 = e; e0 < P; e0++)
        if (r0(n, e0) === r0(t, n0 === -1 ? 0 : e0 - n0)) {
          if (n0 === -1 && (n0 = e0), e0 - n0 + 1 === G) return n0 * R;
        } else
          n0 !== -1 && (e0 -= e0 - n0), n0 = -1;
    } else
      for (e + G > P && (e = P - G), e0 = e; e0 >= 0; e0--) {
        let n0 = !0;
        for (let Y = 0; Y < G; Y++)
          if (r0(n, e0 + Y) !== r0(t, Y)) {
            n0 = !1;
            break;
          }
        if (n0) return e0;
      }
    return -1;
  }
  i.prototype.includes = function(t, e, s) {
    return this.indexOf(t, e, s) !== -1;
  }, i.prototype.indexOf = function(t, e, s) {
    return _(this, t, e, s, !0);
  }, i.prototype.lastIndexOf = function(t, e, s) {
    return _(this, t, e, s, !1);
  };
  function U(n, t, e, s) {
    e = Number(e) || 0;
    const y = n.length - e;
    s ? (s = Number(s), s > y && (s = y)) : s = y;
    const R = t.length;
    s > R / 2 && (s = R / 2);
    let P;
    for (P = 0; P < s; ++P) {
      const G = parseInt(t.substr(P * 2, 2), 16);
      if (u0(G)) return P;
      n[e + P] = G;
    }
    return P;
  }
  function W(n, t, e, s) {
    return c0(A0(t, n.length - e), n, e, s);
  }
  function m(n, t, e, s) {
    return c0(w0(t), n, e, s);
  }
  function k(n, t, e, s) {
    return c0(E0(t), n, e, s);
  }
  function N(n, t, e, s) {
    return c0(T0(t, n.length - e), n, e, s);
  }
  i.prototype.write = function(t, e, s, y) {
    if (e === void 0)
      y = "utf8", s = this.length, e = 0;
    else if (s === void 0 && typeof e == "string")
      y = e, s = this.length, e = 0;
    else if (isFinite(e))
      e = e >>> 0, isFinite(s) ? (s = s >>> 0, y === void 0 && (y = "utf8")) : (y = s, s = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const R = this.length - e;
    if ((s === void 0 || s > R) && (s = R), t.length > 0 && (s < 0 || e < 0) || e > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    y || (y = "utf8");
    let P = !1;
    for (; ; )
      switch (y) {
        case "hex":
          return U(this, t, e, s);
        case "utf8":
        case "utf-8":
          return W(this, t, e, s);
        case "ascii":
        case "latin1":
        case "binary":
          return m(this, t, e, s);
        case "base64":
          return k(this, t, e, s);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return N(this, t, e, s);
        default:
          if (P) throw new TypeError("Unknown encoding: " + y);
          y = ("" + y).toLowerCase(), P = !0;
      }
  }, i.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function O(n, t, e) {
    return t === 0 && e === n.length ? u.fromByteArray(n) : u.fromByteArray(n.slice(t, e));
  }
  function I(n, t, e) {
    e = Math.min(n.length, e);
    const s = [];
    let y = t;
    for (; y < e; ) {
      const R = n[y];
      let P = null, G = R > 239 ? 4 : R > 223 ? 3 : R > 191 ? 2 : 1;
      if (y + G <= e) {
        let r0, e0, n0, Y;
        switch (G) {
          case 1:
            R < 128 && (P = R);
            break;
          case 2:
            r0 = n[y + 1], (r0 & 192) === 128 && (Y = (R & 31) << 6 | r0 & 63, Y > 127 && (P = Y));
            break;
          case 3:
            r0 = n[y + 1], e0 = n[y + 2], (r0 & 192) === 128 && (e0 & 192) === 128 && (Y = (R & 15) << 12 | (r0 & 63) << 6 | e0 & 63, Y > 2047 && (Y < 55296 || Y > 57343) && (P = Y));
            break;
          case 4:
            r0 = n[y + 1], e0 = n[y + 2], n0 = n[y + 3], (r0 & 192) === 128 && (e0 & 192) === 128 && (n0 & 192) === 128 && (Y = (R & 15) << 18 | (r0 & 63) << 12 | (e0 & 63) << 6 | n0 & 63, Y > 65535 && Y < 1114112 && (P = Y));
        }
      }
      P === null ? (P = 65533, G = 1) : P > 65535 && (P -= 65536, s.push(P >>> 10 & 1023 | 55296), P = 56320 | P & 1023), s.push(P), y += G;
    }
    return K(s);
  }
  const V = 4096;
  function K(n) {
    const t = n.length;
    if (t <= V)
      return String.fromCharCode.apply(String, n);
    let e = "", s = 0;
    for (; s < t; )
      e += String.fromCharCode.apply(
        String,
        n.slice(s, s += V)
      );
    return e;
  }
  function L(n, t, e) {
    let s = "";
    e = Math.min(n.length, e);
    for (let y = t; y < e; ++y)
      s += String.fromCharCode(n[y] & 127);
    return s;
  }
  function Z(n, t, e) {
    let s = "";
    e = Math.min(n.length, e);
    for (let y = t; y < e; ++y)
      s += String.fromCharCode(n[y]);
    return s;
  }
  function $(n, t, e) {
    const s = n.length;
    (!t || t < 0) && (t = 0), (!e || e < 0 || e > s) && (e = s);
    let y = "";
    for (let R = t; R < e; ++R)
      y += _0[n[R]];
    return y;
  }
  function j(n, t, e) {
    const s = n.slice(t, e);
    let y = "";
    for (let R = 0; R < s.length - 1; R += 2)
      y += String.fromCharCode(s[R] + s[R + 1] * 256);
    return y;
  }
  i.prototype.slice = function(t, e) {
    const s = this.length;
    t = ~~t, e = e === void 0 ? s : ~~e, t < 0 ? (t += s, t < 0 && (t = 0)) : t > s && (t = s), e < 0 ? (e += s, e < 0 && (e = 0)) : e > s && (e = s), e < t && (e = t);
    const y = this.subarray(t, e);
    return Object.setPrototypeOf(y, i.prototype), y;
  };
  function T(n, t, e) {
    if (n % 1 !== 0 || n < 0) throw new RangeError("offset is not uint");
    if (n + t > e) throw new RangeError("Trying to access beyond buffer length");
  }
  i.prototype.readUintLE = i.prototype.readUIntLE = function(t, e, s) {
    t = t >>> 0, e = e >>> 0, s || T(t, e, this.length);
    let y = this[t], R = 1, P = 0;
    for (; ++P < e && (R *= 256); )
      y += this[t + P] * R;
    return y;
  }, i.prototype.readUintBE = i.prototype.readUIntBE = function(t, e, s) {
    t = t >>> 0, e = e >>> 0, s || T(t, e, this.length);
    let y = this[t + --e], R = 1;
    for (; e > 0 && (R *= 256); )
      y += this[t + --e] * R;
    return y;
  }, i.prototype.readUint8 = i.prototype.readUInt8 = function(t, e) {
    return t = t >>> 0, e || T(t, 1, this.length), this[t];
  }, i.prototype.readUint16LE = i.prototype.readUInt16LE = function(t, e) {
    return t = t >>> 0, e || T(t, 2, this.length), this[t] | this[t + 1] << 8;
  }, i.prototype.readUint16BE = i.prototype.readUInt16BE = function(t, e) {
    return t = t >>> 0, e || T(t, 2, this.length), this[t] << 8 | this[t + 1];
  }, i.prototype.readUint32LE = i.prototype.readUInt32LE = function(t, e) {
    return t = t >>> 0, e || T(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216;
  }, i.prototype.readUint32BE = i.prototype.readUInt32BE = function(t, e) {
    return t = t >>> 0, e || T(t, 4, this.length), this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
  }, i.prototype.readBigUInt64LE = h0(function(t) {
    t = t >>> 0, a0(t, "offset");
    const e = this[t], s = this[t + 7];
    (e === void 0 || s === void 0) && o0(t, this.length - 8);
    const y = e + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24, R = this[++t] + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + s * 2 ** 24;
    return BigInt(y) + (BigInt(R) << BigInt(32));
  }), i.prototype.readBigUInt64BE = h0(function(t) {
    t = t >>> 0, a0(t, "offset");
    const e = this[t], s = this[t + 7];
    (e === void 0 || s === void 0) && o0(t, this.length - 8);
    const y = e * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t], R = this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + s;
    return (BigInt(y) << BigInt(32)) + BigInt(R);
  }), i.prototype.readIntLE = function(t, e, s) {
    t = t >>> 0, e = e >>> 0, s || T(t, e, this.length);
    let y = this[t], R = 1, P = 0;
    for (; ++P < e && (R *= 256); )
      y += this[t + P] * R;
    return R *= 128, y >= R && (y -= Math.pow(2, 8 * e)), y;
  }, i.prototype.readIntBE = function(t, e, s) {
    t = t >>> 0, e = e >>> 0, s || T(t, e, this.length);
    let y = e, R = 1, P = this[t + --y];
    for (; y > 0 && (R *= 256); )
      P += this[t + --y] * R;
    return R *= 128, P >= R && (P -= Math.pow(2, 8 * e)), P;
  }, i.prototype.readInt8 = function(t, e) {
    return t = t >>> 0, e || T(t, 1, this.length), this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t];
  }, i.prototype.readInt16LE = function(t, e) {
    t = t >>> 0, e || T(t, 2, this.length);
    const s = this[t] | this[t + 1] << 8;
    return s & 32768 ? s | 4294901760 : s;
  }, i.prototype.readInt16BE = function(t, e) {
    t = t >>> 0, e || T(t, 2, this.length);
    const s = this[t + 1] | this[t] << 8;
    return s & 32768 ? s | 4294901760 : s;
  }, i.prototype.readInt32LE = function(t, e) {
    return t = t >>> 0, e || T(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
  }, i.prototype.readInt32BE = function(t, e) {
    return t = t >>> 0, e || T(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
  }, i.prototype.readBigInt64LE = h0(function(t) {
    t = t >>> 0, a0(t, "offset");
    const e = this[t], s = this[t + 7];
    (e === void 0 || s === void 0) && o0(t, this.length - 8);
    const y = this[t + 4] + this[t + 5] * 2 ** 8 + this[t + 6] * 2 ** 16 + (s << 24);
    return (BigInt(y) << BigInt(32)) + BigInt(e + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24);
  }), i.prototype.readBigInt64BE = h0(function(t) {
    t = t >>> 0, a0(t, "offset");
    const e = this[t], s = this[t + 7];
    (e === void 0 || s === void 0) && o0(t, this.length - 8);
    const y = (e << 24) + // Overflow
    this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t];
    return (BigInt(y) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + s);
  }), i.prototype.readFloatLE = function(t, e) {
    return t = t >>> 0, e || T(t, 4, this.length), a.read(this, t, !0, 23, 4);
  }, i.prototype.readFloatBE = function(t, e) {
    return t = t >>> 0, e || T(t, 4, this.length), a.read(this, t, !1, 23, 4);
  }, i.prototype.readDoubleLE = function(t, e) {
    return t = t >>> 0, e || T(t, 8, this.length), a.read(this, t, !0, 52, 8);
  }, i.prototype.readDoubleBE = function(t, e) {
    return t = t >>> 0, e || T(t, 8, this.length), a.read(this, t, !1, 52, 8);
  };
  function H(n, t, e, s, y, R) {
    if (!i.isBuffer(n)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > y || t < R) throw new RangeError('"value" argument is out of bounds');
    if (e + s > n.length) throw new RangeError("Index out of range");
  }
  i.prototype.writeUintLE = i.prototype.writeUIntLE = function(t, e, s, y) {
    if (t = +t, e = e >>> 0, s = s >>> 0, !y) {
      const G = Math.pow(2, 8 * s) - 1;
      H(this, t, e, s, G, 0);
    }
    let R = 1, P = 0;
    for (this[e] = t & 255; ++P < s && (R *= 256); )
      this[e + P] = t / R & 255;
    return e + s;
  }, i.prototype.writeUintBE = i.prototype.writeUIntBE = function(t, e, s, y) {
    if (t = +t, e = e >>> 0, s = s >>> 0, !y) {
      const G = Math.pow(2, 8 * s) - 1;
      H(this, t, e, s, G, 0);
    }
    let R = s - 1, P = 1;
    for (this[e + R] = t & 255; --R >= 0 && (P *= 256); )
      this[e + R] = t / P & 255;
    return e + s;
  }, i.prototype.writeUint8 = i.prototype.writeUInt8 = function(t, e, s) {
    return t = +t, e = e >>> 0, s || H(this, t, e, 1, 255, 0), this[e] = t & 255, e + 1;
  }, i.prototype.writeUint16LE = i.prototype.writeUInt16LE = function(t, e, s) {
    return t = +t, e = e >>> 0, s || H(this, t, e, 2, 65535, 0), this[e] = t & 255, this[e + 1] = t >>> 8, e + 2;
  }, i.prototype.writeUint16BE = i.prototype.writeUInt16BE = function(t, e, s) {
    return t = +t, e = e >>> 0, s || H(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = t & 255, e + 2;
  }, i.prototype.writeUint32LE = i.prototype.writeUInt32LE = function(t, e, s) {
    return t = +t, e = e >>> 0, s || H(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = t & 255, e + 4;
  }, i.prototype.writeUint32BE = i.prototype.writeUInt32BE = function(t, e, s) {
    return t = +t, e = e >>> 0, s || H(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = t & 255, e + 4;
  };
  function z(n, t, e, s, y) {
    v0(t, s, y, n, e, 7);
    let R = Number(t & BigInt(4294967295));
    n[e++] = R, R = R >> 8, n[e++] = R, R = R >> 8, n[e++] = R, R = R >> 8, n[e++] = R;
    let P = Number(t >> BigInt(32) & BigInt(4294967295));
    return n[e++] = P, P = P >> 8, n[e++] = P, P = P >> 8, n[e++] = P, P = P >> 8, n[e++] = P, e;
  }
  function q(n, t, e, s, y) {
    v0(t, s, y, n, e, 7);
    let R = Number(t & BigInt(4294967295));
    n[e + 7] = R, R = R >> 8, n[e + 6] = R, R = R >> 8, n[e + 5] = R, R = R >> 8, n[e + 4] = R;
    let P = Number(t >> BigInt(32) & BigInt(4294967295));
    return n[e + 3] = P, P = P >> 8, n[e + 2] = P, P = P >> 8, n[e + 1] = P, P = P >> 8, n[e] = P, e + 8;
  }
  i.prototype.writeBigUInt64LE = h0(function(t, e = 0) {
    return z(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
  }), i.prototype.writeBigUInt64BE = h0(function(t, e = 0) {
    return q(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
  }), i.prototype.writeIntLE = function(t, e, s, y) {
    if (t = +t, e = e >>> 0, !y) {
      const r0 = Math.pow(2, 8 * s - 1);
      H(this, t, e, s, r0 - 1, -r0);
    }
    let R = 0, P = 1, G = 0;
    for (this[e] = t & 255; ++R < s && (P *= 256); )
      t < 0 && G === 0 && this[e + R - 1] !== 0 && (G = 1), this[e + R] = (t / P >> 0) - G & 255;
    return e + s;
  }, i.prototype.writeIntBE = function(t, e, s, y) {
    if (t = +t, e = e >>> 0, !y) {
      const r0 = Math.pow(2, 8 * s - 1);
      H(this, t, e, s, r0 - 1, -r0);
    }
    let R = s - 1, P = 1, G = 0;
    for (this[e + R] = t & 255; --R >= 0 && (P *= 256); )
      t < 0 && G === 0 && this[e + R + 1] !== 0 && (G = 1), this[e + R] = (t / P >> 0) - G & 255;
    return e + s;
  }, i.prototype.writeInt8 = function(t, e, s) {
    return t = +t, e = e >>> 0, s || H(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = t & 255, e + 1;
  }, i.prototype.writeInt16LE = function(t, e, s) {
    return t = +t, e = e >>> 0, s || H(this, t, e, 2, 32767, -32768), this[e] = t & 255, this[e + 1] = t >>> 8, e + 2;
  }, i.prototype.writeInt16BE = function(t, e, s) {
    return t = +t, e = e >>> 0, s || H(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = t & 255, e + 2;
  }, i.prototype.writeInt32LE = function(t, e, s) {
    return t = +t, e = e >>> 0, s || H(this, t, e, 4, 2147483647, -2147483648), this[e] = t & 255, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4;
  }, i.prototype.writeInt32BE = function(t, e, s) {
    return t = +t, e = e >>> 0, s || H(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = t & 255, e + 4;
  }, i.prototype.writeBigInt64LE = h0(function(t, e = 0) {
    return z(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), i.prototype.writeBigInt64BE = h0(function(t, e = 0) {
    return q(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function t0(n, t, e, s, y, R) {
    if (e + s > n.length) throw new RangeError("Index out of range");
    if (e < 0) throw new RangeError("Index out of range");
  }
  function J(n, t, e, s, y) {
    return t = +t, e = e >>> 0, y || t0(n, t, e, 4), a.write(n, t, e, s, 23, 4), e + 4;
  }
  i.prototype.writeFloatLE = function(t, e, s) {
    return J(this, t, e, !0, s);
  }, i.prototype.writeFloatBE = function(t, e, s) {
    return J(this, t, e, !1, s);
  };
  function s0(n, t, e, s, y) {
    return t = +t, e = e >>> 0, y || t0(n, t, e, 8), a.write(n, t, e, s, 52, 8), e + 8;
  }
  i.prototype.writeDoubleLE = function(t, e, s) {
    return s0(this, t, e, !0, s);
  }, i.prototype.writeDoubleBE = function(t, e, s) {
    return s0(this, t, e, !1, s);
  }, i.prototype.copy = function(t, e, s, y) {
    if (!i.isBuffer(t)) throw new TypeError("argument should be a Buffer");
    if (s || (s = 0), !y && y !== 0 && (y = this.length), e >= t.length && (e = t.length), e || (e = 0), y > 0 && y < s && (y = s), y === s || t.length === 0 || this.length === 0) return 0;
    if (e < 0)
      throw new RangeError("targetStart out of bounds");
    if (s < 0 || s >= this.length) throw new RangeError("Index out of range");
    if (y < 0) throw new RangeError("sourceEnd out of bounds");
    y > this.length && (y = this.length), t.length - e < y - s && (y = t.length - e + s);
    const R = y - s;
    return this === t && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(e, s, y) : Uint8Array.prototype.set.call(
      t,
      this.subarray(s, y),
      e
    ), R;
  }, i.prototype.fill = function(t, e, s, y) {
    if (typeof t == "string") {
      if (typeof e == "string" ? (y = e, e = 0, s = this.length) : typeof s == "string" && (y = s, s = this.length), y !== void 0 && typeof y != "string")
        throw new TypeError("encoding must be a string");
      if (typeof y == "string" && !i.isEncoding(y))
        throw new TypeError("Unknown encoding: " + y);
      if (t.length === 1) {
        const P = t.charCodeAt(0);
        (y === "utf8" && P < 128 || y === "latin1") && (t = P);
      }
    } else typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
    if (e < 0 || this.length < e || this.length < s)
      throw new RangeError("Out of range index");
    if (s <= e)
      return this;
    e = e >>> 0, s = s === void 0 ? this.length : s >>> 0, t || (t = 0);
    let R;
    if (typeof t == "number")
      for (R = e; R < s; ++R)
        this[R] = t;
    else {
      const P = i.isBuffer(t) ? t : i.from(t, y), G = P.length;
      if (G === 0)
        throw new TypeError('The value "' + t + '" is invalid for argument "value"');
      for (R = 0; R < s - e; ++R)
        this[R + e] = P[R % G];
    }
    return this;
  };
  const M = {};
  function p0(n, t, e) {
    M[n] = class extends e {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: t.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${n}]`, this.stack, delete this.name;
      }
      get code() {
        return n;
      }
      set code(y) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: y,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${n}]: ${this.message}`;
      }
    };
  }
  p0(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(n) {
      return n ? `${n} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), p0(
    "ERR_INVALID_ARG_TYPE",
    function(n, t) {
      return `The "${n}" argument must be of type number. Received type ${typeof t}`;
    },
    TypeError
  ), p0(
    "ERR_OUT_OF_RANGE",
    function(n, t, e) {
      let s = `The value of "${n}" is out of range.`, y = e;
      return Number.isInteger(e) && Math.abs(e) > 2 ** 32 ? y = B0(String(e)) : typeof e == "bigint" && (y = String(e), (e > BigInt(2) ** BigInt(32) || e < -(BigInt(2) ** BigInt(32))) && (y = B0(y)), y += "n"), s += ` It must be ${t}. Received ${y}`, s;
    },
    RangeError
  );
  function B0(n) {
    let t = "", e = n.length;
    const s = n[0] === "-" ? 1 : 0;
    for (; e >= s + 4; e -= 3)
      t = `_${n.slice(e - 3, e)}${t}`;
    return `${n.slice(0, e)}${t}`;
  }
  function k0(n, t, e) {
    a0(t, "offset"), (n[t] === void 0 || n[t + e] === void 0) && o0(t, n.length - (e + 1));
  }
  function v0(n, t, e, s, y, R) {
    if (n > e || n < t) {
      const P = typeof t == "bigint" ? "n" : "";
      let G;
      throw t === 0 || t === BigInt(0) ? G = `>= 0${P} and < 2${P} ** ${(R + 1) * 8}${P}` : G = `>= -(2${P} ** ${(R + 1) * 8 - 1}${P}) and < 2 ** ${(R + 1) * 8 - 1}${P}`, new M.ERR_OUT_OF_RANGE("value", G, n);
    }
    k0(s, y, R);
  }
  function a0(n, t) {
    if (typeof n != "number")
      throw new M.ERR_INVALID_ARG_TYPE(t, "number", n);
  }
  function o0(n, t, e) {
    throw Math.floor(n) !== n ? (a0(n, e), new M.ERR_OUT_OF_RANGE("offset", "an integer", n)) : t < 0 ? new M.ERR_BUFFER_OUT_OF_BOUNDS() : new M.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${t}`,
      n
    );
  }
  const b0 = /[^+/0-9A-Za-z-_]/g;
  function F0(n) {
    if (n = n.split("=")[0], n = n.trim().replace(b0, ""), n.length < 2) return "";
    for (; n.length % 4 !== 0; )
      n = n + "=";
    return n;
  }
  function A0(n, t) {
    t = t || 1 / 0;
    let e;
    const s = n.length;
    let y = null;
    const R = [];
    for (let P = 0; P < s; ++P) {
      if (e = n.charCodeAt(P), e > 55295 && e < 57344) {
        if (!y) {
          if (e > 56319) {
            (t -= 3) > -1 && R.push(239, 191, 189);
            continue;
          } else if (P + 1 === s) {
            (t -= 3) > -1 && R.push(239, 191, 189);
            continue;
          }
          y = e;
          continue;
        }
        if (e < 56320) {
          (t -= 3) > -1 && R.push(239, 191, 189), y = e;
          continue;
        }
        e = (y - 55296 << 10 | e - 56320) + 65536;
      } else y && (t -= 3) > -1 && R.push(239, 191, 189);
      if (y = null, e < 128) {
        if ((t -= 1) < 0) break;
        R.push(e);
      } else if (e < 2048) {
        if ((t -= 2) < 0) break;
        R.push(
          e >> 6 | 192,
          e & 63 | 128
        );
      } else if (e < 65536) {
        if ((t -= 3) < 0) break;
        R.push(
          e >> 12 | 224,
          e >> 6 & 63 | 128,
          e & 63 | 128
        );
      } else if (e < 1114112) {
        if ((t -= 4) < 0) break;
        R.push(
          e >> 18 | 240,
          e >> 12 & 63 | 128,
          e >> 6 & 63 | 128,
          e & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return R;
  }
  function w0(n) {
    const t = [];
    for (let e = 0; e < n.length; ++e)
      t.push(n.charCodeAt(e) & 255);
    return t;
  }
  function T0(n, t) {
    let e, s, y;
    const R = [];
    for (let P = 0; P < n.length && !((t -= 2) < 0); ++P)
      e = n.charCodeAt(P), s = e >> 8, y = e % 256, R.push(y), R.push(s);
    return R;
  }
  function E0(n) {
    return u.toByteArray(F0(n));
  }
  function c0(n, t, e, s) {
    let y;
    for (y = 0; y < s && !(y + e >= t.length || y >= n.length); ++y)
      t[y + e] = n[y];
    return y;
  }
  function i0(n, t) {
    return n instanceof t || n != null && n.constructor != null && n.constructor.name != null && n.constructor.name === t.name;
  }
  function u0(n) {
    return n !== n;
  }
  const _0 = function() {
    const n = "0123456789abcdef", t = new Array(256);
    for (let e = 0; e < 16; ++e) {
      const s = e * 16;
      for (let y = 0; y < 16; ++y)
        t[s + y] = n[e] + n[y];
    }
    return t;
  }();
  function h0(n) {
    return typeof BigInt > "u" ? g0 : n;
  }
  function g0() {
    throw new Error("BigInt not supported");
  }
})(H0);
var Se = { exports: {} };
function sr(r) {
  throw new Error('Could not dynamically require "' + r + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var X0 = { exports: {} };
const cr = {}, fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cr
}, Symbol.toStringTag, { value: "Module" })), ur = /* @__PURE__ */ Le(fr);
var Kt;
function Q() {
  return Kt || (Kt = 1, function(r, u) {
    (function(a, o) {
      r.exports = o();
    })(X, function() {
      var a = a || function(o, d) {
        var p;
        if (typeof window < "u" && window.crypto && (p = window.crypto), typeof self < "u" && self.crypto && (p = self.crypto), typeof globalThis < "u" && globalThis.crypto && (p = globalThis.crypto), !p && typeof window < "u" && window.msCrypto && (p = window.msCrypto), !p && typeof globalThis < "u" && globalThis.crypto && (p = globalThis.crypto), !p && typeof sr == "function")
          try {
            p = ur;
          } catch {
          }
        var w = function() {
          if (p) {
            if (typeof p.getRandomValues == "function")
              try {
                return p.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof p.randomBytes == "function")
              try {
                return p.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, i = Object.create || /* @__PURE__ */ function() {
          function l() {
          }
          return function(h) {
            var E;
            return l.prototype = h, E = new l(), l.prototype = null, E;
          };
        }(), g = {}, x = g.lib = {}, c = x.Base = /* @__PURE__ */ function() {
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
              var h = i(this);
              return l && h.mixIn(l), (!h.hasOwnProperty("init") || this.init === h.init) && (h.init = function() {
                h.$super.init.apply(this, arguments);
              }), h.init.prototype = h, h.$super = this, h;
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
              for (var h in l)
                l.hasOwnProperty(h) && (this[h] = l[h]);
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
        }(), F = x.WordArray = c.extend({
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
          init: function(l, h) {
            l = this.words = l || [], h != d ? this.sigBytes = h : this.sigBytes = l.length * 4;
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
            return (l || B).stringify(this);
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
            var h = this.words, E = l.words, b = this.sigBytes, _ = l.sigBytes;
            if (this.clamp(), b % 4)
              for (var S = 0; S < _; S++) {
                var U = E[S >>> 2] >>> 24 - S % 4 * 8 & 255;
                h[b + S >>> 2] |= U << 24 - (b + S) % 4 * 8;
              }
            else
              for (var W = 0; W < _; W += 4)
                h[b + W >>> 2] = E[W >>> 2];
            return this.sigBytes += _, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var l = this.words, h = this.sigBytes;
            l[h >>> 2] &= 4294967295 << 32 - h % 4 * 8, l.length = o.ceil(h / 4);
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
            var l = c.clone.call(this);
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
            for (var h = [], E = 0; E < l; E += 4)
              h.push(w());
            return new F.init(h, l);
          }
        }), f = g.enc = {}, B = f.Hex = {
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
            for (var h = l.words, E = l.sigBytes, b = [], _ = 0; _ < E; _++) {
              var S = h[_ >>> 2] >>> 24 - _ % 4 * 8 & 255;
              b.push((S >>> 4).toString(16)), b.push((S & 15).toString(16));
            }
            return b.join("");
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
            for (var h = l.length, E = [], b = 0; b < h; b += 2)
              E[b >>> 3] |= parseInt(l.substr(b, 2), 16) << 24 - b % 8 * 4;
            return new F.init(E, h / 2);
          }
        }, v = f.Latin1 = {
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
            for (var h = l.words, E = l.sigBytes, b = [], _ = 0; _ < E; _++) {
              var S = h[_ >>> 2] >>> 24 - _ % 4 * 8 & 255;
              b.push(String.fromCharCode(S));
            }
            return b.join("");
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
            for (var h = l.length, E = [], b = 0; b < h; b++)
              E[b >>> 2] |= (l.charCodeAt(b) & 255) << 24 - b % 4 * 8;
            return new F.init(E, h);
          }
        }, C = f.Utf8 = {
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
              return decodeURIComponent(escape(v.stringify(l)));
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
            return v.parse(unescape(encodeURIComponent(l)));
          }
        }, A = x.BufferedBlockAlgorithm = c.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new F.init(), this._nDataBytes = 0;
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
            typeof l == "string" && (l = C.parse(l)), this._data.concat(l), this._nDataBytes += l.sigBytes;
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
            var h, E = this._data, b = E.words, _ = E.sigBytes, S = this.blockSize, U = S * 4, W = _ / U;
            l ? W = o.ceil(W) : W = o.max((W | 0) - this._minBufferSize, 0);
            var m = W * S, k = o.min(m * 4, _);
            if (m) {
              for (var N = 0; N < m; N += S)
                this._doProcessBlock(b, N);
              h = b.splice(0, m), E.sigBytes -= k;
            }
            return new F.init(h, k);
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
            var l = c.clone.call(this);
            return l._data = this._data.clone(), l;
          },
          _minBufferSize: 0
        });
        x.Hasher = A.extend({
          /**
           * Configuration options.
           */
          cfg: c.extend(),
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
            A.reset.call(this), this._doReset();
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
            var h = this._doFinalize();
            return h;
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
            return function(h, E) {
              return new l.init(E).finalize(h);
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
            return function(h, E) {
              return new D.HMAC.init(l, E).finalize(h);
            };
          }
        });
        var D = g.algo = {};
        return g;
      }(Math);
      return a;
    });
  }(X0)), X0.exports;
}
var Q0 = { exports: {} }, Gt;
function K0() {
  return Gt || (Gt = 1, function(r, u) {
    (function(a, o) {
      r.exports = o(Q());
    })(X, function(a) {
      return function(o) {
        var d = a, p = d.lib, w = p.Base, i = p.WordArray, g = d.x64 = {};
        g.Word = w.extend({
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
          init: function(x, c) {
            this.high = x, this.low = c;
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
        }), g.WordArray = w.extend({
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
          init: function(x, c) {
            x = this.words = x || [], c != o ? this.sigBytes = c : this.sigBytes = x.length * 8;
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
            for (var x = this.words, c = x.length, F = [], f = 0; f < c; f++) {
              var B = x[f];
              F.push(B.high), F.push(B.low);
            }
            return i.create(F, this.sigBytes);
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
            for (var x = w.clone.call(this), c = x.words = this.words.slice(0), F = c.length, f = 0; f < F; f++)
              c[f] = c[f].clone();
            return x;
          }
        });
      }(), a;
    });
  }(Q0)), Q0.exports;
}
var Z0 = { exports: {} }, Xt;
function lr() {
  return Xt || (Xt = 1, function(r, u) {
    (function(a, o) {
      r.exports = o(Q());
    })(X, function(a) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var o = a, d = o.lib, p = d.WordArray, w = p.init, i = p.init = function(g) {
            if (g instanceof ArrayBuffer && (g = new Uint8Array(g)), (g instanceof Int8Array || typeof Uint8ClampedArray < "u" && g instanceof Uint8ClampedArray || g instanceof Int16Array || g instanceof Uint16Array || g instanceof Int32Array || g instanceof Uint32Array || g instanceof Float32Array || g instanceof Float64Array) && (g = new Uint8Array(g.buffer, g.byteOffset, g.byteLength)), g instanceof Uint8Array) {
              for (var x = g.byteLength, c = [], F = 0; F < x; F++)
                c[F >>> 2] |= g[F] << 24 - F % 4 * 8;
              w.call(this, c, x);
            } else
              w.apply(this, arguments);
          };
          i.prototype = p;
        }
      }(), a.lib.WordArray;
    });
  }(Z0)), Z0.exports;
}
var j0 = { exports: {} }, Qt;
function hr() {
  return Qt || (Qt = 1, function(r, u) {
    (function(a, o) {
      r.exports = o(Q());
    })(X, function(a) {
      return function() {
        var o = a, d = o.lib, p = d.WordArray, w = o.enc;
        w.Utf16 = w.Utf16BE = {
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
          stringify: function(g) {
            for (var x = g.words, c = g.sigBytes, F = [], f = 0; f < c; f += 2) {
              var B = x[f >>> 2] >>> 16 - f % 4 * 8 & 65535;
              F.push(String.fromCharCode(B));
            }
            return F.join("");
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
          parse: function(g) {
            for (var x = g.length, c = [], F = 0; F < x; F++)
              c[F >>> 1] |= g.charCodeAt(F) << 16 - F % 2 * 16;
            return p.create(c, x * 2);
          }
        }, w.Utf16LE = {
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
          stringify: function(g) {
            for (var x = g.words, c = g.sigBytes, F = [], f = 0; f < c; f += 2) {
              var B = i(x[f >>> 2] >>> 16 - f % 4 * 8 & 65535);
              F.push(String.fromCharCode(B));
            }
            return F.join("");
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
          parse: function(g) {
            for (var x = g.length, c = [], F = 0; F < x; F++)
              c[F >>> 1] |= i(g.charCodeAt(F) << 16 - F % 2 * 16);
            return p.create(c, x * 2);
          }
        };
        function i(g) {
          return g << 8 & 4278255360 | g >>> 8 & 16711935;
        }
      }(), a.enc.Utf16;
    });
  }(j0)), j0.exports;
}
var Y0 = { exports: {} }, Zt;
function m0() {
  return Zt || (Zt = 1, function(r, u) {
    (function(a, o) {
      r.exports = o(Q());
    })(X, function(a) {
      return function() {
        var o = a, d = o.lib, p = d.WordArray, w = o.enc;
        w.Base64 = {
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
          stringify: function(g) {
            var x = g.words, c = g.sigBytes, F = this._map;
            g.clamp();
            for (var f = [], B = 0; B < c; B += 3)
              for (var v = x[B >>> 2] >>> 24 - B % 4 * 8 & 255, C = x[B + 1 >>> 2] >>> 24 - (B + 1) % 4 * 8 & 255, A = x[B + 2 >>> 2] >>> 24 - (B + 2) % 4 * 8 & 255, D = v << 16 | C << 8 | A, l = 0; l < 4 && B + l * 0.75 < c; l++)
                f.push(F.charAt(D >>> 6 * (3 - l) & 63));
            var h = F.charAt(64);
            if (h)
              for (; f.length % 4; )
                f.push(h);
            return f.join("");
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
          parse: function(g) {
            var x = g.length, c = this._map, F = this._reverseMap;
            if (!F) {
              F = this._reverseMap = [];
              for (var f = 0; f < c.length; f++)
                F[c.charCodeAt(f)] = f;
            }
            var B = c.charAt(64);
            if (B) {
              var v = g.indexOf(B);
              v !== -1 && (x = v);
            }
            return i(g, x, F);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function i(g, x, c) {
          for (var F = [], f = 0, B = 0; B < x; B++)
            if (B % 4) {
              var v = c[g.charCodeAt(B - 1)] << B % 4 * 2, C = c[g.charCodeAt(B)] >>> 6 - B % 4 * 2, A = v | C;
              F[f >>> 2] |= A << 24 - f % 4 * 8, f++;
            }
          return p.create(F, f);
        }
      }(), a.enc.Base64;
    });
  }(Y0)), Y0.exports;
}
var J0 = { exports: {} }, jt;
function dr() {
  return jt || (jt = 1, function(r, u) {
    (function(a, o) {
      r.exports = o(Q());
    })(X, function(a) {
      return function() {
        var o = a, d = o.lib, p = d.WordArray, w = o.enc;
        w.Base64url = {
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
          stringify: function(g, x) {
            x === void 0 && (x = !0);
            var c = g.words, F = g.sigBytes, f = x ? this._safe_map : this._map;
            g.clamp();
            for (var B = [], v = 0; v < F; v += 3)
              for (var C = c[v >>> 2] >>> 24 - v % 4 * 8 & 255, A = c[v + 1 >>> 2] >>> 24 - (v + 1) % 4 * 8 & 255, D = c[v + 2 >>> 2] >>> 24 - (v + 2) % 4 * 8 & 255, l = C << 16 | A << 8 | D, h = 0; h < 4 && v + h * 0.75 < F; h++)
                B.push(f.charAt(l >>> 6 * (3 - h) & 63));
            var E = f.charAt(64);
            if (E)
              for (; B.length % 4; )
                B.push(E);
            return B.join("");
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
          parse: function(g, x) {
            x === void 0 && (x = !0);
            var c = g.length, F = x ? this._safe_map : this._map, f = this._reverseMap;
            if (!f) {
              f = this._reverseMap = [];
              for (var B = 0; B < F.length; B++)
                f[F.charCodeAt(B)] = B;
            }
            var v = F.charAt(64);
            if (v) {
              var C = g.indexOf(v);
              C !== -1 && (c = C);
            }
            return i(g, c, f);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function i(g, x, c) {
          for (var F = [], f = 0, B = 0; B < x; B++)
            if (B % 4) {
              var v = c[g.charCodeAt(B - 1)] << B % 4 * 2, C = c[g.charCodeAt(B)] >>> 6 - B % 4 * 2, A = v | C;
              F[f >>> 2] |= A << 24 - f % 4 * 8, f++;
            }
          return p.create(F, f);
        }
      }(), a.enc.Base64url;
    });
  }(J0)), J0.exports;
}
var $0 = { exports: {} }, Yt;
function D0() {
  return Yt || (Yt = 1, function(r, u) {
    (function(a, o) {
      r.exports = o(Q());
    })(X, function(a) {
      return function(o) {
        var d = a, p = d.lib, w = p.WordArray, i = p.Hasher, g = d.algo, x = [];
        (function() {
          for (var C = 0; C < 64; C++)
            x[C] = o.abs(o.sin(C + 1)) * 4294967296 | 0;
        })();
        var c = g.MD5 = i.extend({
          _doReset: function() {
            this._hash = new w.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(C, A) {
            for (var D = 0; D < 16; D++) {
              var l = A + D, h = C[l];
              C[l] = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360;
            }
            var E = this._hash.words, b = C[A + 0], _ = C[A + 1], S = C[A + 2], U = C[A + 3], W = C[A + 4], m = C[A + 5], k = C[A + 6], N = C[A + 7], O = C[A + 8], I = C[A + 9], V = C[A + 10], K = C[A + 11], L = C[A + 12], Z = C[A + 13], $ = C[A + 14], j = C[A + 15], T = E[0], H = E[1], z = E[2], q = E[3];
            T = F(T, H, z, q, b, 7, x[0]), q = F(q, T, H, z, _, 12, x[1]), z = F(z, q, T, H, S, 17, x[2]), H = F(H, z, q, T, U, 22, x[3]), T = F(T, H, z, q, W, 7, x[4]), q = F(q, T, H, z, m, 12, x[5]), z = F(z, q, T, H, k, 17, x[6]), H = F(H, z, q, T, N, 22, x[7]), T = F(T, H, z, q, O, 7, x[8]), q = F(q, T, H, z, I, 12, x[9]), z = F(z, q, T, H, V, 17, x[10]), H = F(H, z, q, T, K, 22, x[11]), T = F(T, H, z, q, L, 7, x[12]), q = F(q, T, H, z, Z, 12, x[13]), z = F(z, q, T, H, $, 17, x[14]), H = F(H, z, q, T, j, 22, x[15]), T = f(T, H, z, q, _, 5, x[16]), q = f(q, T, H, z, k, 9, x[17]), z = f(z, q, T, H, K, 14, x[18]), H = f(H, z, q, T, b, 20, x[19]), T = f(T, H, z, q, m, 5, x[20]), q = f(q, T, H, z, V, 9, x[21]), z = f(z, q, T, H, j, 14, x[22]), H = f(H, z, q, T, W, 20, x[23]), T = f(T, H, z, q, I, 5, x[24]), q = f(q, T, H, z, $, 9, x[25]), z = f(z, q, T, H, U, 14, x[26]), H = f(H, z, q, T, O, 20, x[27]), T = f(T, H, z, q, Z, 5, x[28]), q = f(q, T, H, z, S, 9, x[29]), z = f(z, q, T, H, N, 14, x[30]), H = f(H, z, q, T, L, 20, x[31]), T = B(T, H, z, q, m, 4, x[32]), q = B(q, T, H, z, O, 11, x[33]), z = B(z, q, T, H, K, 16, x[34]), H = B(H, z, q, T, $, 23, x[35]), T = B(T, H, z, q, _, 4, x[36]), q = B(q, T, H, z, W, 11, x[37]), z = B(z, q, T, H, N, 16, x[38]), H = B(H, z, q, T, V, 23, x[39]), T = B(T, H, z, q, Z, 4, x[40]), q = B(q, T, H, z, b, 11, x[41]), z = B(z, q, T, H, U, 16, x[42]), H = B(H, z, q, T, k, 23, x[43]), T = B(T, H, z, q, I, 4, x[44]), q = B(q, T, H, z, L, 11, x[45]), z = B(z, q, T, H, j, 16, x[46]), H = B(H, z, q, T, S, 23, x[47]), T = v(T, H, z, q, b, 6, x[48]), q = v(q, T, H, z, N, 10, x[49]), z = v(z, q, T, H, $, 15, x[50]), H = v(H, z, q, T, m, 21, x[51]), T = v(T, H, z, q, L, 6, x[52]), q = v(q, T, H, z, U, 10, x[53]), z = v(z, q, T, H, V, 15, x[54]), H = v(H, z, q, T, _, 21, x[55]), T = v(T, H, z, q, O, 6, x[56]), q = v(q, T, H, z, j, 10, x[57]), z = v(z, q, T, H, k, 15, x[58]), H = v(H, z, q, T, Z, 21, x[59]), T = v(T, H, z, q, W, 6, x[60]), q = v(q, T, H, z, K, 10, x[61]), z = v(z, q, T, H, S, 15, x[62]), H = v(H, z, q, T, I, 21, x[63]), E[0] = E[0] + T | 0, E[1] = E[1] + H | 0, E[2] = E[2] + z | 0, E[3] = E[3] + q | 0;
          },
          _doFinalize: function() {
            var C = this._data, A = C.words, D = this._nDataBytes * 8, l = C.sigBytes * 8;
            A[l >>> 5] |= 128 << 24 - l % 32;
            var h = o.floor(D / 4294967296), E = D;
            A[(l + 64 >>> 9 << 4) + 15] = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360, A[(l + 64 >>> 9 << 4) + 14] = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360, C.sigBytes = (A.length + 1) * 4, this._process();
            for (var b = this._hash, _ = b.words, S = 0; S < 4; S++) {
              var U = _[S];
              _[S] = (U << 8 | U >>> 24) & 16711935 | (U << 24 | U >>> 8) & 4278255360;
            }
            return b;
          },
          clone: function() {
            var C = i.clone.call(this);
            return C._hash = this._hash.clone(), C;
          }
        });
        function F(C, A, D, l, h, E, b) {
          var _ = C + (A & D | ~A & l) + h + b;
          return (_ << E | _ >>> 32 - E) + A;
        }
        function f(C, A, D, l, h, E, b) {
          var _ = C + (A & l | D & ~l) + h + b;
          return (_ << E | _ >>> 32 - E) + A;
        }
        function B(C, A, D, l, h, E, b) {
          var _ = C + (A ^ D ^ l) + h + b;
          return (_ << E | _ >>> 32 - E) + A;
        }
        function v(C, A, D, l, h, E, b) {
          var _ = C + (D ^ (A | ~l)) + h + b;
          return (_ << E | _ >>> 32 - E) + A;
        }
        d.MD5 = i._createHelper(c), d.HmacMD5 = i._createHmacHelper(c);
      }(Math), a.MD5;
    });
  }($0)), $0.exports;
}
var L0 = { exports: {} }, Jt;
function ke() {
  return Jt || (Jt = 1, function(r, u) {
    (function(a, o) {
      r.exports = o(Q());
    })(X, function(a) {
      return function() {
        var o = a, d = o.lib, p = d.WordArray, w = d.Hasher, i = o.algo, g = [], x = i.SHA1 = w.extend({
          _doReset: function() {
            this._hash = new p.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(c, F) {
            for (var f = this._hash.words, B = f[0], v = f[1], C = f[2], A = f[3], D = f[4], l = 0; l < 80; l++) {
              if (l < 16)
                g[l] = c[F + l] | 0;
              else {
                var h = g[l - 3] ^ g[l - 8] ^ g[l - 14] ^ g[l - 16];
                g[l] = h << 1 | h >>> 31;
              }
              var E = (B << 5 | B >>> 27) + D + g[l];
              l < 20 ? E += (v & C | ~v & A) + 1518500249 : l < 40 ? E += (v ^ C ^ A) + 1859775393 : l < 60 ? E += (v & C | v & A | C & A) - 1894007588 : E += (v ^ C ^ A) - 899497514, D = A, A = C, C = v << 30 | v >>> 2, v = B, B = E;
            }
            f[0] = f[0] + B | 0, f[1] = f[1] + v | 0, f[2] = f[2] + C | 0, f[3] = f[3] + A | 0, f[4] = f[4] + D | 0;
          },
          _doFinalize: function() {
            var c = this._data, F = c.words, f = this._nDataBytes * 8, B = c.sigBytes * 8;
            return F[B >>> 5] |= 128 << 24 - B % 32, F[(B + 64 >>> 9 << 4) + 14] = Math.floor(f / 4294967296), F[(B + 64 >>> 9 << 4) + 15] = f, c.sigBytes = F.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var c = w.clone.call(this);
            return c._hash = this._hash.clone(), c;
          }
        });
        o.SHA1 = w._createHelper(x), o.HmacSHA1 = w._createHmacHelper(x);
      }(), a.SHA1;
    });
  }(L0)), L0.exports;
}
var tt = { exports: {} }, $t;
function Pt() {
  return $t || ($t = 1, function(r, u) {
    (function(a, o) {
      r.exports = o(Q());
    })(X, function(a) {
      return function(o) {
        var d = a, p = d.lib, w = p.WordArray, i = p.Hasher, g = d.algo, x = [], c = [];
        (function() {
          function B(D) {
            for (var l = o.sqrt(D), h = 2; h <= l; h++)
              if (!(D % h))
                return !1;
            return !0;
          }
          function v(D) {
            return (D - (D | 0)) * 4294967296 | 0;
          }
          for (var C = 2, A = 0; A < 64; )
            B(C) && (A < 8 && (x[A] = v(o.pow(C, 1 / 2))), c[A] = v(o.pow(C, 1 / 3)), A++), C++;
        })();
        var F = [], f = g.SHA256 = i.extend({
          _doReset: function() {
            this._hash = new w.init(x.slice(0));
          },
          _doProcessBlock: function(B, v) {
            for (var C = this._hash.words, A = C[0], D = C[1], l = C[2], h = C[3], E = C[4], b = C[5], _ = C[6], S = C[7], U = 0; U < 64; U++) {
              if (U < 16)
                F[U] = B[v + U] | 0;
              else {
                var W = F[U - 15], m = (W << 25 | W >>> 7) ^ (W << 14 | W >>> 18) ^ W >>> 3, k = F[U - 2], N = (k << 15 | k >>> 17) ^ (k << 13 | k >>> 19) ^ k >>> 10;
                F[U] = m + F[U - 7] + N + F[U - 16];
              }
              var O = E & b ^ ~E & _, I = A & D ^ A & l ^ D & l, V = (A << 30 | A >>> 2) ^ (A << 19 | A >>> 13) ^ (A << 10 | A >>> 22), K = (E << 26 | E >>> 6) ^ (E << 21 | E >>> 11) ^ (E << 7 | E >>> 25), L = S + K + O + c[U] + F[U], Z = V + I;
              S = _, _ = b, b = E, E = h + L | 0, h = l, l = D, D = A, A = L + Z | 0;
            }
            C[0] = C[0] + A | 0, C[1] = C[1] + D | 0, C[2] = C[2] + l | 0, C[3] = C[3] + h | 0, C[4] = C[4] + E | 0, C[5] = C[5] + b | 0, C[6] = C[6] + _ | 0, C[7] = C[7] + S | 0;
          },
          _doFinalize: function() {
            var B = this._data, v = B.words, C = this._nDataBytes * 8, A = B.sigBytes * 8;
            return v[A >>> 5] |= 128 << 24 - A % 32, v[(A + 64 >>> 9 << 4) + 14] = o.floor(C / 4294967296), v[(A + 64 >>> 9 << 4) + 15] = C, B.sigBytes = v.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var B = i.clone.call(this);
            return B._hash = this._hash.clone(), B;
          }
        });
        d.SHA256 = i._createHelper(f), d.HmacSHA256 = i._createHmacHelper(f);
      }(Math), a.SHA256;
    });
  }(tt)), tt.exports;
}
var et = { exports: {} }, Lt;
function pr() {
  return Lt || (Lt = 1, function(r, u) {
    (function(a, o, d) {
      r.exports = o(Q(), Pt());
    })(X, function(a) {
      return function() {
        var o = a, d = o.lib, p = d.WordArray, w = o.algo, i = w.SHA256, g = w.SHA224 = i.extend({
          _doReset: function() {
            this._hash = new p.init([
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
            var x = i._doFinalize.call(this);
            return x.sigBytes -= 4, x;
          }
        });
        o.SHA224 = i._createHelper(g), o.HmacSHA224 = i._createHmacHelper(g);
      }(), a.SHA224;
    });
  }(et)), et.exports;
}
var rt = { exports: {} }, te;
function Te() {
  return te || (te = 1, function(r, u) {
    (function(a, o, d) {
      r.exports = o(Q(), K0());
    })(X, function(a) {
      return function() {
        var o = a, d = o.lib, p = d.Hasher, w = o.x64, i = w.Word, g = w.WordArray, x = o.algo;
        function c() {
          return i.create.apply(i, arguments);
        }
        var F = [
          c(1116352408, 3609767458),
          c(1899447441, 602891725),
          c(3049323471, 3964484399),
          c(3921009573, 2173295548),
          c(961987163, 4081628472),
          c(1508970993, 3053834265),
          c(2453635748, 2937671579),
          c(2870763221, 3664609560),
          c(3624381080, 2734883394),
          c(310598401, 1164996542),
          c(607225278, 1323610764),
          c(1426881987, 3590304994),
          c(1925078388, 4068182383),
          c(2162078206, 991336113),
          c(2614888103, 633803317),
          c(3248222580, 3479774868),
          c(3835390401, 2666613458),
          c(4022224774, 944711139),
          c(264347078, 2341262773),
          c(604807628, 2007800933),
          c(770255983, 1495990901),
          c(1249150122, 1856431235),
          c(1555081692, 3175218132),
          c(1996064986, 2198950837),
          c(2554220882, 3999719339),
          c(2821834349, 766784016),
          c(2952996808, 2566594879),
          c(3210313671, 3203337956),
          c(3336571891, 1034457026),
          c(3584528711, 2466948901),
          c(113926993, 3758326383),
          c(338241895, 168717936),
          c(666307205, 1188179964),
          c(773529912, 1546045734),
          c(1294757372, 1522805485),
          c(1396182291, 2643833823),
          c(1695183700, 2343527390),
          c(1986661051, 1014477480),
          c(2177026350, 1206759142),
          c(2456956037, 344077627),
          c(2730485921, 1290863460),
          c(2820302411, 3158454273),
          c(3259730800, 3505952657),
          c(3345764771, 106217008),
          c(3516065817, 3606008344),
          c(3600352804, 1432725776),
          c(4094571909, 1467031594),
          c(275423344, 851169720),
          c(430227734, 3100823752),
          c(506948616, 1363258195),
          c(659060556, 3750685593),
          c(883997877, 3785050280),
          c(958139571, 3318307427),
          c(1322822218, 3812723403),
          c(1537002063, 2003034995),
          c(1747873779, 3602036899),
          c(1955562222, 1575990012),
          c(2024104815, 1125592928),
          c(2227730452, 2716904306),
          c(2361852424, 442776044),
          c(2428436474, 593698344),
          c(2756734187, 3733110249),
          c(3204031479, 2999351573),
          c(3329325298, 3815920427),
          c(3391569614, 3928383900),
          c(3515267271, 566280711),
          c(3940187606, 3454069534),
          c(4118630271, 4000239992),
          c(116418474, 1914138554),
          c(174292421, 2731055270),
          c(289380356, 3203993006),
          c(460393269, 320620315),
          c(685471733, 587496836),
          c(852142971, 1086792851),
          c(1017036298, 365543100),
          c(1126000580, 2618297676),
          c(1288033470, 3409855158),
          c(1501505948, 4234509866),
          c(1607167915, 987167468),
          c(1816402316, 1246189591)
        ], f = [];
        (function() {
          for (var v = 0; v < 80; v++)
            f[v] = c();
        })();
        var B = x.SHA512 = p.extend({
          _doReset: function() {
            this._hash = new g.init([
              new i.init(1779033703, 4089235720),
              new i.init(3144134277, 2227873595),
              new i.init(1013904242, 4271175723),
              new i.init(2773480762, 1595750129),
              new i.init(1359893119, 2917565137),
              new i.init(2600822924, 725511199),
              new i.init(528734635, 4215389547),
              new i.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(v, C) {
            for (var A = this._hash.words, D = A[0], l = A[1], h = A[2], E = A[3], b = A[4], _ = A[5], S = A[6], U = A[7], W = D.high, m = D.low, k = l.high, N = l.low, O = h.high, I = h.low, V = E.high, K = E.low, L = b.high, Z = b.low, $ = _.high, j = _.low, T = S.high, H = S.low, z = U.high, q = U.low, t0 = W, J = m, s0 = k, M = N, p0 = O, B0 = I, k0 = V, v0 = K, a0 = L, o0 = Z, b0 = $, F0 = j, A0 = T, w0 = H, T0 = z, E0 = q, c0 = 0; c0 < 80; c0++) {
              var i0, u0, _0 = f[c0];
              if (c0 < 16)
                u0 = _0.high = v[C + c0 * 2] | 0, i0 = _0.low = v[C + c0 * 2 + 1] | 0;
              else {
                var h0 = f[c0 - 15], g0 = h0.high, n = h0.low, t = (g0 >>> 1 | n << 31) ^ (g0 >>> 8 | n << 24) ^ g0 >>> 7, e = (n >>> 1 | g0 << 31) ^ (n >>> 8 | g0 << 24) ^ (n >>> 7 | g0 << 25), s = f[c0 - 2], y = s.high, R = s.low, P = (y >>> 19 | R << 13) ^ (y << 3 | R >>> 29) ^ y >>> 6, G = (R >>> 19 | y << 13) ^ (R << 3 | y >>> 29) ^ (R >>> 6 | y << 26), r0 = f[c0 - 7], e0 = r0.high, n0 = r0.low, Y = f[c0 - 16], He = Y.high, Ot = Y.low;
                i0 = e + n0, u0 = t + e0 + (i0 >>> 0 < e >>> 0 ? 1 : 0), i0 = i0 + G, u0 = u0 + P + (i0 >>> 0 < G >>> 0 ? 1 : 0), i0 = i0 + Ot, u0 = u0 + He + (i0 >>> 0 < Ot >>> 0 ? 1 : 0), _0.high = u0, _0.low = i0;
              }
              var Ne = a0 & b0 ^ ~a0 & A0, qt = o0 & F0 ^ ~o0 & w0, Oe = t0 & s0 ^ t0 & p0 ^ s0 & p0, qe = J & M ^ J & B0 ^ M & B0, ze = (t0 >>> 28 | J << 4) ^ (t0 << 30 | J >>> 2) ^ (t0 << 25 | J >>> 7), zt = (J >>> 28 | t0 << 4) ^ (J << 30 | t0 >>> 2) ^ (J << 25 | t0 >>> 7), We = (a0 >>> 14 | o0 << 18) ^ (a0 >>> 18 | o0 << 14) ^ (a0 << 23 | o0 >>> 9), Ie = (o0 >>> 14 | a0 << 18) ^ (o0 >>> 18 | a0 << 14) ^ (o0 << 23 | a0 >>> 9), Wt = F[c0], Ve = Wt.high, It = Wt.low, f0 = E0 + Ie, C0 = T0 + We + (f0 >>> 0 < E0 >>> 0 ? 1 : 0), f0 = f0 + qt, C0 = C0 + Ne + (f0 >>> 0 < qt >>> 0 ? 1 : 0), f0 = f0 + It, C0 = C0 + Ve + (f0 >>> 0 < It >>> 0 ? 1 : 0), f0 = f0 + i0, C0 = C0 + u0 + (f0 >>> 0 < i0 >>> 0 ? 1 : 0), Vt = zt + qe, Me = ze + Oe + (Vt >>> 0 < zt >>> 0 ? 1 : 0);
              T0 = A0, E0 = w0, A0 = b0, w0 = F0, b0 = a0, F0 = o0, o0 = v0 + f0 | 0, a0 = k0 + C0 + (o0 >>> 0 < v0 >>> 0 ? 1 : 0) | 0, k0 = p0, v0 = B0, p0 = s0, B0 = M, s0 = t0, M = J, J = f0 + Vt | 0, t0 = C0 + Me + (J >>> 0 < f0 >>> 0 ? 1 : 0) | 0;
            }
            m = D.low = m + J, D.high = W + t0 + (m >>> 0 < J >>> 0 ? 1 : 0), N = l.low = N + M, l.high = k + s0 + (N >>> 0 < M >>> 0 ? 1 : 0), I = h.low = I + B0, h.high = O + p0 + (I >>> 0 < B0 >>> 0 ? 1 : 0), K = E.low = K + v0, E.high = V + k0 + (K >>> 0 < v0 >>> 0 ? 1 : 0), Z = b.low = Z + o0, b.high = L + a0 + (Z >>> 0 < o0 >>> 0 ? 1 : 0), j = _.low = j + F0, _.high = $ + b0 + (j >>> 0 < F0 >>> 0 ? 1 : 0), H = S.low = H + w0, S.high = T + A0 + (H >>> 0 < w0 >>> 0 ? 1 : 0), q = U.low = q + E0, U.high = z + T0 + (q >>> 0 < E0 >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var v = this._data, C = v.words, A = this._nDataBytes * 8, D = v.sigBytes * 8;
            C[D >>> 5] |= 128 << 24 - D % 32, C[(D + 128 >>> 10 << 5) + 30] = Math.floor(A / 4294967296), C[(D + 128 >>> 10 << 5) + 31] = A, v.sigBytes = C.length * 4, this._process();
            var l = this._hash.toX32();
            return l;
          },
          clone: function() {
            var v = p.clone.call(this);
            return v._hash = this._hash.clone(), v;
          },
          blockSize: 1024 / 32
        });
        o.SHA512 = p._createHelper(B), o.HmacSHA512 = p._createHmacHelper(B);
      }(), a.SHA512;
    });
  }(rt)), rt.exports;
}
var nt = { exports: {} }, ee;
function Br() {
  return ee || (ee = 1, function(r, u) {
    (function(a, o, d) {
      r.exports = o(Q(), K0(), Te());
    })(X, function(a) {
      return function() {
        var o = a, d = o.x64, p = d.Word, w = d.WordArray, i = o.algo, g = i.SHA512, x = i.SHA384 = g.extend({
          _doReset: function() {
            this._hash = new w.init([
              new p.init(3418070365, 3238371032),
              new p.init(1654270250, 914150663),
              new p.init(2438529370, 812702999),
              new p.init(355462360, 4144912697),
              new p.init(1731405415, 4290775857),
              new p.init(2394180231, 1750603025),
              new p.init(3675008525, 1694076839),
              new p.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var c = g._doFinalize.call(this);
            return c.sigBytes -= 16, c;
          }
        });
        o.SHA384 = g._createHelper(x), o.HmacSHA384 = g._createHmacHelper(x);
      }(), a.SHA384;
    });
  }(nt)), nt.exports;
}
var it = { exports: {} }, re;
function vr() {
  return re || (re = 1, function(r, u) {
    (function(a, o, d) {
      r.exports = o(Q(), K0());
    })(X, function(a) {
      return function(o) {
        var d = a, p = d.lib, w = p.WordArray, i = p.Hasher, g = d.x64, x = g.Word, c = d.algo, F = [], f = [], B = [];
        (function() {
          for (var A = 1, D = 0, l = 0; l < 24; l++) {
            F[A + 5 * D] = (l + 1) * (l + 2) / 2 % 64;
            var h = D % 5, E = (2 * A + 3 * D) % 5;
            A = h, D = E;
          }
          for (var A = 0; A < 5; A++)
            for (var D = 0; D < 5; D++)
              f[A + 5 * D] = D + (2 * A + 3 * D) % 5 * 5;
          for (var b = 1, _ = 0; _ < 24; _++) {
            for (var S = 0, U = 0, W = 0; W < 7; W++) {
              if (b & 1) {
                var m = (1 << W) - 1;
                m < 32 ? U ^= 1 << m : S ^= 1 << m - 32;
              }
              b & 128 ? b = b << 1 ^ 113 : b <<= 1;
            }
            B[_] = x.create(S, U);
          }
        })();
        var v = [];
        (function() {
          for (var A = 0; A < 25; A++)
            v[A] = x.create();
        })();
        var C = c.SHA3 = i.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: i.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var A = this._state = [], D = 0; D < 25; D++)
              A[D] = new x.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(A, D) {
            for (var l = this._state, h = this.blockSize / 2, E = 0; E < h; E++) {
              var b = A[D + 2 * E], _ = A[D + 2 * E + 1];
              b = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360, _ = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360;
              var S = l[E];
              S.high ^= _, S.low ^= b;
            }
            for (var U = 0; U < 24; U++) {
              for (var W = 0; W < 5; W++) {
                for (var m = 0, k = 0, N = 0; N < 5; N++) {
                  var S = l[W + 5 * N];
                  m ^= S.high, k ^= S.low;
                }
                var O = v[W];
                O.high = m, O.low = k;
              }
              for (var W = 0; W < 5; W++)
                for (var I = v[(W + 4) % 5], V = v[(W + 1) % 5], K = V.high, L = V.low, m = I.high ^ (K << 1 | L >>> 31), k = I.low ^ (L << 1 | K >>> 31), N = 0; N < 5; N++) {
                  var S = l[W + 5 * N];
                  S.high ^= m, S.low ^= k;
                }
              for (var Z = 1; Z < 25; Z++) {
                var m, k, S = l[Z], $ = S.high, j = S.low, T = F[Z];
                T < 32 ? (m = $ << T | j >>> 32 - T, k = j << T | $ >>> 32 - T) : (m = j << T - 32 | $ >>> 64 - T, k = $ << T - 32 | j >>> 64 - T);
                var H = v[f[Z]];
                H.high = m, H.low = k;
              }
              var z = v[0], q = l[0];
              z.high = q.high, z.low = q.low;
              for (var W = 0; W < 5; W++)
                for (var N = 0; N < 5; N++) {
                  var Z = W + 5 * N, S = l[Z], t0 = v[Z], J = v[(W + 1) % 5 + 5 * N], s0 = v[(W + 2) % 5 + 5 * N];
                  S.high = t0.high ^ ~J.high & s0.high, S.low = t0.low ^ ~J.low & s0.low;
                }
              var S = l[0], M = B[U];
              S.high ^= M.high, S.low ^= M.low;
            }
          },
          _doFinalize: function() {
            var A = this._data, D = A.words;
            this._nDataBytes * 8;
            var l = A.sigBytes * 8, h = this.blockSize * 32;
            D[l >>> 5] |= 1 << 24 - l % 32, D[(o.ceil((l + 1) / h) * h >>> 5) - 1] |= 128, A.sigBytes = D.length * 4, this._process();
            for (var E = this._state, b = this.cfg.outputLength / 8, _ = b / 8, S = [], U = 0; U < _; U++) {
              var W = E[U], m = W.high, k = W.low;
              m = (m << 8 | m >>> 24) & 16711935 | (m << 24 | m >>> 8) & 4278255360, k = (k << 8 | k >>> 24) & 16711935 | (k << 24 | k >>> 8) & 4278255360, S.push(k), S.push(m);
            }
            return new w.init(S, b);
          },
          clone: function() {
            for (var A = i.clone.call(this), D = A._state = this._state.slice(0), l = 0; l < 25; l++)
              D[l] = D[l].clone();
            return A;
          }
        });
        d.SHA3 = i._createHelper(C), d.HmacSHA3 = i._createHmacHelper(C);
      }(Math), a.SHA3;
    });
  }(it)), it.exports;
}
var ot = { exports: {} }, ne;
function Ar() {
  return ne || (ne = 1, function(r, u) {
    (function(a, o) {
      r.exports = o(Q());
    })(X, function(a) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(o) {
        var d = a, p = d.lib, w = p.WordArray, i = p.Hasher, g = d.algo, x = w.create([
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
        ]), c = w.create([
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
        ]), F = w.create([
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
        ]), f = w.create([
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
        ]), B = w.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), v = w.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), C = g.RIPEMD160 = i.extend({
          _doReset: function() {
            this._hash = w.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(_, S) {
            for (var U = 0; U < 16; U++) {
              var W = S + U, m = _[W];
              _[W] = (m << 8 | m >>> 24) & 16711935 | (m << 24 | m >>> 8) & 4278255360;
            }
            var k = this._hash.words, N = B.words, O = v.words, I = x.words, V = c.words, K = F.words, L = f.words, Z, $, j, T, H, z, q, t0, J, s0;
            z = Z = k[0], q = $ = k[1], t0 = j = k[2], J = T = k[3], s0 = H = k[4];
            for (var M, U = 0; U < 80; U += 1)
              M = Z + _[S + I[U]] | 0, U < 16 ? M += A($, j, T) + N[0] : U < 32 ? M += D($, j, T) + N[1] : U < 48 ? M += l($, j, T) + N[2] : U < 64 ? M += h($, j, T) + N[3] : M += E($, j, T) + N[4], M = M | 0, M = b(M, K[U]), M = M + H | 0, Z = H, H = T, T = b(j, 10), j = $, $ = M, M = z + _[S + V[U]] | 0, U < 16 ? M += E(q, t0, J) + O[0] : U < 32 ? M += h(q, t0, J) + O[1] : U < 48 ? M += l(q, t0, J) + O[2] : U < 64 ? M += D(q, t0, J) + O[3] : M += A(q, t0, J) + O[4], M = M | 0, M = b(M, L[U]), M = M + s0 | 0, z = s0, s0 = J, J = b(t0, 10), t0 = q, q = M;
            M = k[1] + j + J | 0, k[1] = k[2] + T + s0 | 0, k[2] = k[3] + H + z | 0, k[3] = k[4] + Z + q | 0, k[4] = k[0] + $ + t0 | 0, k[0] = M;
          },
          _doFinalize: function() {
            var _ = this._data, S = _.words, U = this._nDataBytes * 8, W = _.sigBytes * 8;
            S[W >>> 5] |= 128 << 24 - W % 32, S[(W + 64 >>> 9 << 4) + 14] = (U << 8 | U >>> 24) & 16711935 | (U << 24 | U >>> 8) & 4278255360, _.sigBytes = (S.length + 1) * 4, this._process();
            for (var m = this._hash, k = m.words, N = 0; N < 5; N++) {
              var O = k[N];
              k[N] = (O << 8 | O >>> 24) & 16711935 | (O << 24 | O >>> 8) & 4278255360;
            }
            return m;
          },
          clone: function() {
            var _ = i.clone.call(this);
            return _._hash = this._hash.clone(), _;
          }
        });
        function A(_, S, U) {
          return _ ^ S ^ U;
        }
        function D(_, S, U) {
          return _ & S | ~_ & U;
        }
        function l(_, S, U) {
          return (_ | ~S) ^ U;
        }
        function h(_, S, U) {
          return _ & U | S & ~U;
        }
        function E(_, S, U) {
          return _ ^ (S | ~U);
        }
        function b(_, S) {
          return _ << S | _ >>> 32 - S;
        }
        d.RIPEMD160 = i._createHelper(C), d.HmacRIPEMD160 = i._createHmacHelper(C);
      }(), a.RIPEMD160;
    });
  }(ot)), ot.exports;
}
var at = { exports: {} }, ie;
function Ht() {
  return ie || (ie = 1, function(r, u) {
    (function(a, o) {
      r.exports = o(Q());
    })(X, function(a) {
      (function() {
        var o = a, d = o.lib, p = d.Base, w = o.enc, i = w.Utf8, g = o.algo;
        g.HMAC = p.extend({
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
          init: function(x, c) {
            x = this._hasher = new x.init(), typeof c == "string" && (c = i.parse(c));
            var F = x.blockSize, f = F * 4;
            c.sigBytes > f && (c = x.finalize(c)), c.clamp();
            for (var B = this._oKey = c.clone(), v = this._iKey = c.clone(), C = B.words, A = v.words, D = 0; D < F; D++)
              C[D] ^= 1549556828, A[D] ^= 909522486;
            B.sigBytes = v.sigBytes = f, this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var x = this._hasher;
            x.reset(), x.update(this._iKey);
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
          update: function(x) {
            return this._hasher.update(x), this;
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
          finalize: function(x) {
            var c = this._hasher, F = c.finalize(x);
            c.reset();
            var f = c.finalize(this._oKey.clone().concat(F));
            return f;
          }
        });
      })();
    });
  }(at)), at.exports;
}
var xt = { exports: {} }, oe;
function Er() {
  return oe || (oe = 1, function(r, u) {
    (function(a, o, d) {
      r.exports = o(Q(), Pt(), Ht());
    })(X, function(a) {
      return function() {
        var o = a, d = o.lib, p = d.Base, w = d.WordArray, i = o.algo, g = i.SHA256, x = i.HMAC, c = i.PBKDF2 = p.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: p.extend({
            keySize: 128 / 32,
            hasher: g,
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
          init: function(F) {
            this.cfg = this.cfg.extend(F);
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
          compute: function(F, f) {
            for (var B = this.cfg, v = x.create(B.hasher, F), C = w.create(), A = w.create([1]), D = C.words, l = A.words, h = B.keySize, E = B.iterations; D.length < h; ) {
              var b = v.update(f).finalize(A);
              v.reset();
              for (var _ = b.words, S = _.length, U = b, W = 1; W < E; W++) {
                U = v.finalize(U), v.reset();
                for (var m = U.words, k = 0; k < S; k++)
                  _[k] ^= m[k];
              }
              C.concat(b), l[0]++;
            }
            return C.sigBytes = h * 4, C;
          }
        });
        o.PBKDF2 = function(F, f, B) {
          return c.create(B).compute(F, f);
        };
      }(), a.PBKDF2;
    });
  }(xt)), xt.exports;
}
var st = { exports: {} }, ae;
function y0() {
  return ae || (ae = 1, function(r, u) {
    (function(a, o, d) {
      r.exports = o(Q(), ke(), Ht());
    })(X, function(a) {
      return function() {
        var o = a, d = o.lib, p = d.Base, w = d.WordArray, i = o.algo, g = i.MD5, x = i.EvpKDF = p.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: p.extend({
            keySize: 128 / 32,
            hasher: g,
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
          init: function(c) {
            this.cfg = this.cfg.extend(c);
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
          compute: function(c, F) {
            for (var f, B = this.cfg, v = B.hasher.create(), C = w.create(), A = C.words, D = B.keySize, l = B.iterations; A.length < D; ) {
              f && v.update(f), f = v.update(c).finalize(F), v.reset();
              for (var h = 1; h < l; h++)
                f = v.finalize(f), v.reset();
              C.concat(f);
            }
            return C.sigBytes = D * 4, C;
          }
        });
        o.EvpKDF = function(c, F, f) {
          return x.create(f).compute(c, F);
        };
      }(), a.EvpKDF;
    });
  }(st)), st.exports;
}
var ct = { exports: {} }, xe;
function x0() {
  return xe || (xe = 1, function(r, u) {
    (function(a, o, d) {
      r.exports = o(Q(), y0());
    })(X, function(a) {
      a.lib.Cipher || function(o) {
        var d = a, p = d.lib, w = p.Base, i = p.WordArray, g = p.BufferedBlockAlgorithm, x = d.enc;
        x.Utf8;
        var c = x.Base64, F = d.algo, f = F.EvpKDF, B = p.Cipher = g.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: w.extend(),
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
          createEncryptor: function(m, k) {
            return this.create(this._ENC_XFORM_MODE, m, k);
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
          createDecryptor: function(m, k) {
            return this.create(this._DEC_XFORM_MODE, m, k);
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
          init: function(m, k, N) {
            this.cfg = this.cfg.extend(N), this._xformMode = m, this._key = k, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            g.reset.call(this), this._doReset();
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
          process: function(m) {
            return this._append(m), this._process();
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
          finalize: function(m) {
            m && this._append(m);
            var k = this._doFinalize();
            return k;
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
            function m(k) {
              return typeof k == "string" ? W : _;
            }
            return function(k) {
              return {
                encrypt: function(N, O, I) {
                  return m(O).encrypt(k, N, O, I);
                },
                decrypt: function(N, O, I) {
                  return m(O).decrypt(k, N, O, I);
                }
              };
            };
          }()
        });
        p.StreamCipher = B.extend({
          _doFinalize: function() {
            var m = this._process(!0);
            return m;
          },
          blockSize: 1
        });
        var v = d.mode = {}, C = p.BlockCipherMode = w.extend({
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
          createEncryptor: function(m, k) {
            return this.Encryptor.create(m, k);
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
          createDecryptor: function(m, k) {
            return this.Decryptor.create(m, k);
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
          init: function(m, k) {
            this._cipher = m, this._iv = k;
          }
        }), A = v.CBC = function() {
          var m = C.extend();
          m.Encryptor = m.extend({
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
            processBlock: function(N, O) {
              var I = this._cipher, V = I.blockSize;
              k.call(this, N, O, V), I.encryptBlock(N, O), this._prevBlock = N.slice(O, O + V);
            }
          }), m.Decryptor = m.extend({
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
            processBlock: function(N, O) {
              var I = this._cipher, V = I.blockSize, K = N.slice(O, O + V);
              I.decryptBlock(N, O), k.call(this, N, O, V), this._prevBlock = K;
            }
          });
          function k(N, O, I) {
            var V, K = this._iv;
            K ? (V = K, this._iv = o) : V = this._prevBlock;
            for (var L = 0; L < I; L++)
              N[O + L] ^= V[L];
          }
          return m;
        }(), D = d.pad = {}, l = D.Pkcs7 = {
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
          pad: function(m, k) {
            for (var N = k * 4, O = N - m.sigBytes % N, I = O << 24 | O << 16 | O << 8 | O, V = [], K = 0; K < O; K += 4)
              V.push(I);
            var L = i.create(V, O);
            m.concat(L);
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
          unpad: function(m) {
            var k = m.words[m.sigBytes - 1 >>> 2] & 255;
            m.sigBytes -= k;
          }
        };
        p.BlockCipher = B.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: B.cfg.extend({
            mode: A,
            padding: l
          }),
          reset: function() {
            var m;
            B.reset.call(this);
            var k = this.cfg, N = k.iv, O = k.mode;
            this._xformMode == this._ENC_XFORM_MODE ? m = O.createEncryptor : (m = O.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == m ? this._mode.init(this, N && N.words) : (this._mode = m.call(O, this, N && N.words), this._mode.__creator = m);
          },
          _doProcessBlock: function(m, k) {
            this._mode.processBlock(m, k);
          },
          _doFinalize: function() {
            var m, k = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (k.pad(this._data, this.blockSize), m = this._process(!0)) : (m = this._process(!0), k.unpad(m)), m;
          },
          blockSize: 128 / 32
        });
        var h = p.CipherParams = w.extend({
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
          init: function(m) {
            this.mixIn(m);
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
          toString: function(m) {
            return (m || this.formatter).stringify(this);
          }
        }), E = d.format = {}, b = E.OpenSSL = {
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
          stringify: function(m) {
            var k, N = m.ciphertext, O = m.salt;
            return O ? k = i.create([1398893684, 1701076831]).concat(O).concat(N) : k = N, k.toString(c);
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
          parse: function(m) {
            var k, N = c.parse(m), O = N.words;
            return O[0] == 1398893684 && O[1] == 1701076831 && (k = i.create(O.slice(2, 4)), O.splice(0, 4), N.sigBytes -= 16), h.create({ ciphertext: N, salt: k });
          }
        }, _ = p.SerializableCipher = w.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: w.extend({
            format: b
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
          encrypt: function(m, k, N, O) {
            O = this.cfg.extend(O);
            var I = m.createEncryptor(N, O), V = I.finalize(k), K = I.cfg;
            return h.create({
              ciphertext: V,
              key: N,
              iv: K.iv,
              algorithm: m,
              mode: K.mode,
              padding: K.padding,
              blockSize: m.blockSize,
              formatter: O.format
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
          decrypt: function(m, k, N, O) {
            O = this.cfg.extend(O), k = this._parse(k, O.format);
            var I = m.createDecryptor(N, O).finalize(k.ciphertext);
            return I;
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
          _parse: function(m, k) {
            return typeof m == "string" ? k.parse(m, this) : m;
          }
        }), S = d.kdf = {}, U = S.OpenSSL = {
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
          execute: function(m, k, N, O, I) {
            if (O || (O = i.random(64 / 8)), I)
              var V = f.create({ keySize: k + N, hasher: I }).compute(m, O);
            else
              var V = f.create({ keySize: k + N }).compute(m, O);
            var K = i.create(V.words.slice(k), N * 4);
            return V.sigBytes = k * 4, h.create({ key: V, iv: K, salt: O });
          }
        }, W = p.PasswordBasedCipher = _.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: _.cfg.extend({
            kdf: U
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
          encrypt: function(m, k, N, O) {
            O = this.cfg.extend(O);
            var I = O.kdf.execute(N, m.keySize, m.ivSize, O.salt, O.hasher);
            O.iv = I.iv;
            var V = _.encrypt.call(this, m, k, I.key, O);
            return V.mixIn(I), V;
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
          decrypt: function(m, k, N, O) {
            O = this.cfg.extend(O), k = this._parse(k, O.format);
            var I = O.kdf.execute(N, m.keySize, m.ivSize, k.salt, O.hasher);
            O.iv = I.iv;
            var V = _.decrypt.call(this, m, k, I.key, O);
            return V;
          }
        });
      }();
    });
  }(ct)), ct.exports;
}
var ft = { exports: {} }, se;
function gr() {
  return se || (se = 1, function(r, u) {
    (function(a, o, d) {
      r.exports = o(Q(), x0());
    })(X, function(a) {
      return a.mode.CFB = function() {
        var o = a.lib.BlockCipherMode.extend();
        o.Encryptor = o.extend({
          processBlock: function(p, w) {
            var i = this._cipher, g = i.blockSize;
            d.call(this, p, w, g, i), this._prevBlock = p.slice(w, w + g);
          }
        }), o.Decryptor = o.extend({
          processBlock: function(p, w) {
            var i = this._cipher, g = i.blockSize, x = p.slice(w, w + g);
            d.call(this, p, w, g, i), this._prevBlock = x;
          }
        });
        function d(p, w, i, g) {
          var x, c = this._iv;
          c ? (x = c.slice(0), this._iv = void 0) : x = this._prevBlock, g.encryptBlock(x, 0);
          for (var F = 0; F < i; F++)
            p[w + F] ^= x[F];
        }
        return o;
      }(), a.mode.CFB;
    });
  }(ft)), ft.exports;
}
var ut = { exports: {} }, ce;
function Cr() {
  return ce || (ce = 1, function(r, u) {
    (function(a, o, d) {
      r.exports = o(Q(), x0());
    })(X, function(a) {
      return a.mode.CTR = function() {
        var o = a.lib.BlockCipherMode.extend(), d = o.Encryptor = o.extend({
          processBlock: function(p, w) {
            var i = this._cipher, g = i.blockSize, x = this._iv, c = this._counter;
            x && (c = this._counter = x.slice(0), this._iv = void 0);
            var F = c.slice(0);
            i.encryptBlock(F, 0), c[g - 1] = c[g - 1] + 1 | 0;
            for (var f = 0; f < g; f++)
              p[w + f] ^= F[f];
          }
        });
        return o.Decryptor = d, o;
      }(), a.mode.CTR;
    });
  }(ut)), ut.exports;
}
var lt = { exports: {} }, fe;
function yr() {
  return fe || (fe = 1, function(r, u) {
    (function(a, o, d) {
      r.exports = o(Q(), x0());
    })(X, function(a) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return a.mode.CTRGladman = function() {
        var o = a.lib.BlockCipherMode.extend();
        function d(i) {
          if ((i >> 24 & 255) === 255) {
            var g = i >> 16 & 255, x = i >> 8 & 255, c = i & 255;
            g === 255 ? (g = 0, x === 255 ? (x = 0, c === 255 ? c = 0 : ++c) : ++x) : ++g, i = 0, i += g << 16, i += x << 8, i += c;
          } else
            i += 1 << 24;
          return i;
        }
        function p(i) {
          return (i[0] = d(i[0])) === 0 && (i[1] = d(i[1])), i;
        }
        var w = o.Encryptor = o.extend({
          processBlock: function(i, g) {
            var x = this._cipher, c = x.blockSize, F = this._iv, f = this._counter;
            F && (f = this._counter = F.slice(0), this._iv = void 0), p(f);
            var B = f.slice(0);
            x.encryptBlock(B, 0);
            for (var v = 0; v < c; v++)
              i[g + v] ^= B[v];
          }
        });
        return o.Decryptor = w, o;
      }(), a.mode.CTRGladman;
    });
  }(lt)), lt.exports;
}
var ht = { exports: {} }, ue;
function Fr() {
  return ue || (ue = 1, function(r, u) {
    (function(a, o, d) {
      r.exports = o(Q(), x0());
    })(X, function(a) {
      return a.mode.OFB = function() {
        var o = a.lib.BlockCipherMode.extend(), d = o.Encryptor = o.extend({
          processBlock: function(p, w) {
            var i = this._cipher, g = i.blockSize, x = this._iv, c = this._keystream;
            x && (c = this._keystream = x.slice(0), this._iv = void 0), i.encryptBlock(c, 0);
            for (var F = 0; F < g; F++)
              p[w + F] ^= c[F];
          }
        });
        return o.Decryptor = d, o;
      }(), a.mode.OFB;
    });
  }(ht)), ht.exports;
}
var dt = { exports: {} }, le;
function wr() {
  return le || (le = 1, function(r, u) {
    (function(a, o, d) {
      r.exports = o(Q(), x0());
    })(X, function(a) {
      return a.mode.ECB = function() {
        var o = a.lib.BlockCipherMode.extend();
        return o.Encryptor = o.extend({
          processBlock: function(d, p) {
            this._cipher.encryptBlock(d, p);
          }
        }), o.Decryptor = o.extend({
          processBlock: function(d, p) {
            this._cipher.decryptBlock(d, p);
          }
        }), o;
      }(), a.mode.ECB;
    });
  }(dt)), dt.exports;
}
var pt = { exports: {} }, he;
function mr() {
  return he || (he = 1, function(r, u) {
    (function(a, o, d) {
      r.exports = o(Q(), x0());
    })(X, function(a) {
      return a.pad.AnsiX923 = {
        pad: function(o, d) {
          var p = o.sigBytes, w = d * 4, i = w - p % w, g = p + i - 1;
          o.clamp(), o.words[g >>> 2] |= i << 24 - g % 4 * 8, o.sigBytes += i;
        },
        unpad: function(o) {
          var d = o.words[o.sigBytes - 1 >>> 2] & 255;
          o.sigBytes -= d;
        }
      }, a.pad.Ansix923;
    });
  }(pt)), pt.exports;
}
var Bt = { exports: {} }, de;
function Dr() {
  return de || (de = 1, function(r, u) {
    (function(a, o, d) {
      r.exports = o(Q(), x0());
    })(X, function(a) {
      return a.pad.Iso10126 = {
        pad: function(o, d) {
          var p = d * 4, w = p - o.sigBytes % p;
          o.concat(a.lib.WordArray.random(w - 1)).concat(a.lib.WordArray.create([w << 24], 1));
        },
        unpad: function(o) {
          var d = o.words[o.sigBytes - 1 >>> 2] & 255;
          o.sigBytes -= d;
        }
      }, a.pad.Iso10126;
    });
  }(Bt)), Bt.exports;
}
var vt = { exports: {} }, pe;
function br() {
  return pe || (pe = 1, function(r, u) {
    (function(a, o, d) {
      r.exports = o(Q(), x0());
    })(X, function(a) {
      return a.pad.Iso97971 = {
        pad: function(o, d) {
          o.concat(a.lib.WordArray.create([2147483648], 1)), a.pad.ZeroPadding.pad(o, d);
        },
        unpad: function(o) {
          a.pad.ZeroPadding.unpad(o), o.sigBytes--;
        }
      }, a.pad.Iso97971;
    });
  }(vt)), vt.exports;
}
var At = { exports: {} }, Be;
function _r() {
  return Be || (Be = 1, function(r, u) {
    (function(a, o, d) {
      r.exports = o(Q(), x0());
    })(X, function(a) {
      return a.pad.ZeroPadding = {
        pad: function(o, d) {
          var p = d * 4;
          o.clamp(), o.sigBytes += p - (o.sigBytes % p || p);
        },
        unpad: function(o) {
          for (var d = o.words, p = o.sigBytes - 1, p = o.sigBytes - 1; p >= 0; p--)
            if (d[p >>> 2] >>> 24 - p % 4 * 8 & 255) {
              o.sigBytes = p + 1;
              break;
            }
        }
      }, a.pad.ZeroPadding;
    });
  }(At)), At.exports;
}
var Et = { exports: {} }, ve;
function Rr() {
  return ve || (ve = 1, function(r, u) {
    (function(a, o, d) {
      r.exports = o(Q(), x0());
    })(X, function(a) {
      return a.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, a.pad.NoPadding;
    });
  }(Et)), Et.exports;
}
var gt = { exports: {} }, Ae;
function Sr() {
  return Ae || (Ae = 1, function(r, u) {
    (function(a, o, d) {
      r.exports = o(Q(), x0());
    })(X, function(a) {
      return function(o) {
        var d = a, p = d.lib, w = p.CipherParams, i = d.enc, g = i.Hex, x = d.format;
        x.Hex = {
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
          stringify: function(c) {
            return c.ciphertext.toString(g);
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
          parse: function(c) {
            var F = g.parse(c);
            return w.create({ ciphertext: F });
          }
        };
      }(), a.format.Hex;
    });
  }(gt)), gt.exports;
}
var Ct = { exports: {} }, Ee;
function kr() {
  return Ee || (Ee = 1, function(r, u) {
    (function(a, o, d) {
      r.exports = o(Q(), m0(), D0(), y0(), x0());
    })(X, function(a) {
      return function() {
        var o = a, d = o.lib, p = d.BlockCipher, w = o.algo, i = [], g = [], x = [], c = [], F = [], f = [], B = [], v = [], C = [], A = [];
        (function() {
          for (var h = [], E = 0; E < 256; E++)
            E < 128 ? h[E] = E << 1 : h[E] = E << 1 ^ 283;
          for (var b = 0, _ = 0, E = 0; E < 256; E++) {
            var S = _ ^ _ << 1 ^ _ << 2 ^ _ << 3 ^ _ << 4;
            S = S >>> 8 ^ S & 255 ^ 99, i[b] = S, g[S] = b;
            var U = h[b], W = h[U], m = h[W], k = h[S] * 257 ^ S * 16843008;
            x[b] = k << 24 | k >>> 8, c[b] = k << 16 | k >>> 16, F[b] = k << 8 | k >>> 24, f[b] = k;
            var k = m * 16843009 ^ W * 65537 ^ U * 257 ^ b * 16843008;
            B[S] = k << 24 | k >>> 8, v[S] = k << 16 | k >>> 16, C[S] = k << 8 | k >>> 24, A[S] = k, b ? (b = U ^ h[h[h[m ^ U]]], _ ^= h[h[_]]) : b = _ = 1;
          }
        })();
        var D = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], l = w.AES = p.extend({
          _doReset: function() {
            var h;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var E = this._keyPriorReset = this._key, b = E.words, _ = E.sigBytes / 4, S = this._nRounds = _ + 6, U = (S + 1) * 4, W = this._keySchedule = [], m = 0; m < U; m++)
                m < _ ? W[m] = b[m] : (h = W[m - 1], m % _ ? _ > 6 && m % _ == 4 && (h = i[h >>> 24] << 24 | i[h >>> 16 & 255] << 16 | i[h >>> 8 & 255] << 8 | i[h & 255]) : (h = h << 8 | h >>> 24, h = i[h >>> 24] << 24 | i[h >>> 16 & 255] << 16 | i[h >>> 8 & 255] << 8 | i[h & 255], h ^= D[m / _ | 0] << 24), W[m] = W[m - _] ^ h);
              for (var k = this._invKeySchedule = [], N = 0; N < U; N++) {
                var m = U - N;
                if (N % 4)
                  var h = W[m];
                else
                  var h = W[m - 4];
                N < 4 || m <= 4 ? k[N] = h : k[N] = B[i[h >>> 24]] ^ v[i[h >>> 16 & 255]] ^ C[i[h >>> 8 & 255]] ^ A[i[h & 255]];
              }
            }
          },
          encryptBlock: function(h, E) {
            this._doCryptBlock(h, E, this._keySchedule, x, c, F, f, i);
          },
          decryptBlock: function(h, E) {
            var b = h[E + 1];
            h[E + 1] = h[E + 3], h[E + 3] = b, this._doCryptBlock(h, E, this._invKeySchedule, B, v, C, A, g);
            var b = h[E + 1];
            h[E + 1] = h[E + 3], h[E + 3] = b;
          },
          _doCryptBlock: function(h, E, b, _, S, U, W, m) {
            for (var k = this._nRounds, N = h[E] ^ b[0], O = h[E + 1] ^ b[1], I = h[E + 2] ^ b[2], V = h[E + 3] ^ b[3], K = 4, L = 1; L < k; L++) {
              var Z = _[N >>> 24] ^ S[O >>> 16 & 255] ^ U[I >>> 8 & 255] ^ W[V & 255] ^ b[K++], $ = _[O >>> 24] ^ S[I >>> 16 & 255] ^ U[V >>> 8 & 255] ^ W[N & 255] ^ b[K++], j = _[I >>> 24] ^ S[V >>> 16 & 255] ^ U[N >>> 8 & 255] ^ W[O & 255] ^ b[K++], T = _[V >>> 24] ^ S[N >>> 16 & 255] ^ U[O >>> 8 & 255] ^ W[I & 255] ^ b[K++];
              N = Z, O = $, I = j, V = T;
            }
            var Z = (m[N >>> 24] << 24 | m[O >>> 16 & 255] << 16 | m[I >>> 8 & 255] << 8 | m[V & 255]) ^ b[K++], $ = (m[O >>> 24] << 24 | m[I >>> 16 & 255] << 16 | m[V >>> 8 & 255] << 8 | m[N & 255]) ^ b[K++], j = (m[I >>> 24] << 24 | m[V >>> 16 & 255] << 16 | m[N >>> 8 & 255] << 8 | m[O & 255]) ^ b[K++], T = (m[V >>> 24] << 24 | m[N >>> 16 & 255] << 16 | m[O >>> 8 & 255] << 8 | m[I & 255]) ^ b[K++];
            h[E] = Z, h[E + 1] = $, h[E + 2] = j, h[E + 3] = T;
          },
          keySize: 256 / 32
        });
        o.AES = p._createHelper(l);
      }(), a.AES;
    });
  }(Ct)), Ct.exports;
}
var yt = { exports: {} }, ge;
function Tr() {
  return ge || (ge = 1, function(r, u) {
    (function(a, o, d) {
      r.exports = o(Q(), m0(), D0(), y0(), x0());
    })(X, function(a) {
      return function() {
        var o = a, d = o.lib, p = d.WordArray, w = d.BlockCipher, i = o.algo, g = [
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
        ], x = [
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
        ], c = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], F = [
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
        ], f = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], B = i.DES = w.extend({
          _doReset: function() {
            for (var D = this._key, l = D.words, h = [], E = 0; E < 56; E++) {
              var b = g[E] - 1;
              h[E] = l[b >>> 5] >>> 31 - b % 32 & 1;
            }
            for (var _ = this._subKeys = [], S = 0; S < 16; S++) {
              for (var U = _[S] = [], W = c[S], E = 0; E < 24; E++)
                U[E / 6 | 0] |= h[(x[E] - 1 + W) % 28] << 31 - E % 6, U[4 + (E / 6 | 0)] |= h[28 + (x[E + 24] - 1 + W) % 28] << 31 - E % 6;
              U[0] = U[0] << 1 | U[0] >>> 31;
              for (var E = 1; E < 7; E++)
                U[E] = U[E] >>> (E - 1) * 4 + 3;
              U[7] = U[7] << 5 | U[7] >>> 27;
            }
            for (var m = this._invSubKeys = [], E = 0; E < 16; E++)
              m[E] = _[15 - E];
          },
          encryptBlock: function(D, l) {
            this._doCryptBlock(D, l, this._subKeys);
          },
          decryptBlock: function(D, l) {
            this._doCryptBlock(D, l, this._invSubKeys);
          },
          _doCryptBlock: function(D, l, h) {
            this._lBlock = D[l], this._rBlock = D[l + 1], v.call(this, 4, 252645135), v.call(this, 16, 65535), C.call(this, 2, 858993459), C.call(this, 8, 16711935), v.call(this, 1, 1431655765);
            for (var E = 0; E < 16; E++) {
              for (var b = h[E], _ = this._lBlock, S = this._rBlock, U = 0, W = 0; W < 8; W++)
                U |= F[W][((S ^ b[W]) & f[W]) >>> 0];
              this._lBlock = S, this._rBlock = _ ^ U;
            }
            var m = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = m, v.call(this, 1, 1431655765), C.call(this, 8, 16711935), C.call(this, 2, 858993459), v.call(this, 16, 65535), v.call(this, 4, 252645135), D[l] = this._lBlock, D[l + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function v(D, l) {
          var h = (this._lBlock >>> D ^ this._rBlock) & l;
          this._rBlock ^= h, this._lBlock ^= h << D;
        }
        function C(D, l) {
          var h = (this._rBlock >>> D ^ this._lBlock) & l;
          this._lBlock ^= h, this._rBlock ^= h << D;
        }
        o.DES = w._createHelper(B);
        var A = i.TripleDES = w.extend({
          _doReset: function() {
            var D = this._key, l = D.words;
            if (l.length !== 2 && l.length !== 4 && l.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var h = l.slice(0, 2), E = l.length < 4 ? l.slice(0, 2) : l.slice(2, 4), b = l.length < 6 ? l.slice(0, 2) : l.slice(4, 6);
            this._des1 = B.createEncryptor(p.create(h)), this._des2 = B.createEncryptor(p.create(E)), this._des3 = B.createEncryptor(p.create(b));
          },
          encryptBlock: function(D, l) {
            this._des1.encryptBlock(D, l), this._des2.decryptBlock(D, l), this._des3.encryptBlock(D, l);
          },
          decryptBlock: function(D, l) {
            this._des3.decryptBlock(D, l), this._des2.encryptBlock(D, l), this._des1.decryptBlock(D, l);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        o.TripleDES = w._createHelper(A);
      }(), a.TripleDES;
    });
  }(yt)), yt.exports;
}
var Ft = { exports: {} }, Ce;
function Ur() {
  return Ce || (Ce = 1, function(r, u) {
    (function(a, o, d) {
      r.exports = o(Q(), m0(), D0(), y0(), x0());
    })(X, function(a) {
      return function() {
        var o = a, d = o.lib, p = d.StreamCipher, w = o.algo, i = w.RC4 = p.extend({
          _doReset: function() {
            for (var c = this._key, F = c.words, f = c.sigBytes, B = this._S = [], v = 0; v < 256; v++)
              B[v] = v;
            for (var v = 0, C = 0; v < 256; v++) {
              var A = v % f, D = F[A >>> 2] >>> 24 - A % 4 * 8 & 255;
              C = (C + B[v] + D) % 256;
              var l = B[v];
              B[v] = B[C], B[C] = l;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(c, F) {
            c[F] ^= g.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function g() {
          for (var c = this._S, F = this._i, f = this._j, B = 0, v = 0; v < 4; v++) {
            F = (F + 1) % 256, f = (f + c[F]) % 256;
            var C = c[F];
            c[F] = c[f], c[f] = C, B |= c[(c[F] + c[f]) % 256] << 24 - v * 8;
          }
          return this._i = F, this._j = f, B;
        }
        o.RC4 = p._createHelper(i);
        var x = w.RC4Drop = i.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: i.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            i._doReset.call(this);
            for (var c = this.cfg.drop; c > 0; c--)
              g.call(this);
          }
        });
        o.RC4Drop = p._createHelper(x);
      }(), a.RC4;
    });
  }(Ft)), Ft.exports;
}
var wt = { exports: {} }, ye;
function Pr() {
  return ye || (ye = 1, function(r, u) {
    (function(a, o, d) {
      r.exports = o(Q(), m0(), D0(), y0(), x0());
    })(X, function(a) {
      return function() {
        var o = a, d = o.lib, p = d.StreamCipher, w = o.algo, i = [], g = [], x = [], c = w.Rabbit = p.extend({
          _doReset: function() {
            for (var f = this._key.words, B = this.cfg.iv, v = 0; v < 4; v++)
              f[v] = (f[v] << 8 | f[v] >>> 24) & 16711935 | (f[v] << 24 | f[v] >>> 8) & 4278255360;
            var C = this._X = [
              f[0],
              f[3] << 16 | f[2] >>> 16,
              f[1],
              f[0] << 16 | f[3] >>> 16,
              f[2],
              f[1] << 16 | f[0] >>> 16,
              f[3],
              f[2] << 16 | f[1] >>> 16
            ], A = this._C = [
              f[2] << 16 | f[2] >>> 16,
              f[0] & 4294901760 | f[1] & 65535,
              f[3] << 16 | f[3] >>> 16,
              f[1] & 4294901760 | f[2] & 65535,
              f[0] << 16 | f[0] >>> 16,
              f[2] & 4294901760 | f[3] & 65535,
              f[1] << 16 | f[1] >>> 16,
              f[3] & 4294901760 | f[0] & 65535
            ];
            this._b = 0;
            for (var v = 0; v < 4; v++)
              F.call(this);
            for (var v = 0; v < 8; v++)
              A[v] ^= C[v + 4 & 7];
            if (B) {
              var D = B.words, l = D[0], h = D[1], E = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360, b = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360, _ = E >>> 16 | b & 4294901760, S = b << 16 | E & 65535;
              A[0] ^= E, A[1] ^= _, A[2] ^= b, A[3] ^= S, A[4] ^= E, A[5] ^= _, A[6] ^= b, A[7] ^= S;
              for (var v = 0; v < 4; v++)
                F.call(this);
            }
          },
          _doProcessBlock: function(f, B) {
            var v = this._X;
            F.call(this), i[0] = v[0] ^ v[5] >>> 16 ^ v[3] << 16, i[1] = v[2] ^ v[7] >>> 16 ^ v[5] << 16, i[2] = v[4] ^ v[1] >>> 16 ^ v[7] << 16, i[3] = v[6] ^ v[3] >>> 16 ^ v[1] << 16;
            for (var C = 0; C < 4; C++)
              i[C] = (i[C] << 8 | i[C] >>> 24) & 16711935 | (i[C] << 24 | i[C] >>> 8) & 4278255360, f[B + C] ^= i[C];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function F() {
          for (var f = this._X, B = this._C, v = 0; v < 8; v++)
            g[v] = B[v];
          B[0] = B[0] + 1295307597 + this._b | 0, B[1] = B[1] + 3545052371 + (B[0] >>> 0 < g[0] >>> 0 ? 1 : 0) | 0, B[2] = B[2] + 886263092 + (B[1] >>> 0 < g[1] >>> 0 ? 1 : 0) | 0, B[3] = B[3] + 1295307597 + (B[2] >>> 0 < g[2] >>> 0 ? 1 : 0) | 0, B[4] = B[4] + 3545052371 + (B[3] >>> 0 < g[3] >>> 0 ? 1 : 0) | 0, B[5] = B[5] + 886263092 + (B[4] >>> 0 < g[4] >>> 0 ? 1 : 0) | 0, B[6] = B[6] + 1295307597 + (B[5] >>> 0 < g[5] >>> 0 ? 1 : 0) | 0, B[7] = B[7] + 3545052371 + (B[6] >>> 0 < g[6] >>> 0 ? 1 : 0) | 0, this._b = B[7] >>> 0 < g[7] >>> 0 ? 1 : 0;
          for (var v = 0; v < 8; v++) {
            var C = f[v] + B[v], A = C & 65535, D = C >>> 16, l = ((A * A >>> 17) + A * D >>> 15) + D * D, h = ((C & 4294901760) * C | 0) + ((C & 65535) * C | 0);
            x[v] = l ^ h;
          }
          f[0] = x[0] + (x[7] << 16 | x[7] >>> 16) + (x[6] << 16 | x[6] >>> 16) | 0, f[1] = x[1] + (x[0] << 8 | x[0] >>> 24) + x[7] | 0, f[2] = x[2] + (x[1] << 16 | x[1] >>> 16) + (x[0] << 16 | x[0] >>> 16) | 0, f[3] = x[3] + (x[2] << 8 | x[2] >>> 24) + x[1] | 0, f[4] = x[4] + (x[3] << 16 | x[3] >>> 16) + (x[2] << 16 | x[2] >>> 16) | 0, f[5] = x[5] + (x[4] << 8 | x[4] >>> 24) + x[3] | 0, f[6] = x[6] + (x[5] << 16 | x[5] >>> 16) + (x[4] << 16 | x[4] >>> 16) | 0, f[7] = x[7] + (x[6] << 8 | x[6] >>> 24) + x[5] | 0;
        }
        o.Rabbit = p._createHelper(c);
      }(), a.Rabbit;
    });
  }(wt)), wt.exports;
}
var mt = { exports: {} }, Fe;
function Hr() {
  return Fe || (Fe = 1, function(r, u) {
    (function(a, o, d) {
      r.exports = o(Q(), m0(), D0(), y0(), x0());
    })(X, function(a) {
      return function() {
        var o = a, d = o.lib, p = d.StreamCipher, w = o.algo, i = [], g = [], x = [], c = w.RabbitLegacy = p.extend({
          _doReset: function() {
            var f = this._key.words, B = this.cfg.iv, v = this._X = [
              f[0],
              f[3] << 16 | f[2] >>> 16,
              f[1],
              f[0] << 16 | f[3] >>> 16,
              f[2],
              f[1] << 16 | f[0] >>> 16,
              f[3],
              f[2] << 16 | f[1] >>> 16
            ], C = this._C = [
              f[2] << 16 | f[2] >>> 16,
              f[0] & 4294901760 | f[1] & 65535,
              f[3] << 16 | f[3] >>> 16,
              f[1] & 4294901760 | f[2] & 65535,
              f[0] << 16 | f[0] >>> 16,
              f[2] & 4294901760 | f[3] & 65535,
              f[1] << 16 | f[1] >>> 16,
              f[3] & 4294901760 | f[0] & 65535
            ];
            this._b = 0;
            for (var A = 0; A < 4; A++)
              F.call(this);
            for (var A = 0; A < 8; A++)
              C[A] ^= v[A + 4 & 7];
            if (B) {
              var D = B.words, l = D[0], h = D[1], E = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360, b = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360, _ = E >>> 16 | b & 4294901760, S = b << 16 | E & 65535;
              C[0] ^= E, C[1] ^= _, C[2] ^= b, C[3] ^= S, C[4] ^= E, C[5] ^= _, C[6] ^= b, C[7] ^= S;
              for (var A = 0; A < 4; A++)
                F.call(this);
            }
          },
          _doProcessBlock: function(f, B) {
            var v = this._X;
            F.call(this), i[0] = v[0] ^ v[5] >>> 16 ^ v[3] << 16, i[1] = v[2] ^ v[7] >>> 16 ^ v[5] << 16, i[2] = v[4] ^ v[1] >>> 16 ^ v[7] << 16, i[3] = v[6] ^ v[3] >>> 16 ^ v[1] << 16;
            for (var C = 0; C < 4; C++)
              i[C] = (i[C] << 8 | i[C] >>> 24) & 16711935 | (i[C] << 24 | i[C] >>> 8) & 4278255360, f[B + C] ^= i[C];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function F() {
          for (var f = this._X, B = this._C, v = 0; v < 8; v++)
            g[v] = B[v];
          B[0] = B[0] + 1295307597 + this._b | 0, B[1] = B[1] + 3545052371 + (B[0] >>> 0 < g[0] >>> 0 ? 1 : 0) | 0, B[2] = B[2] + 886263092 + (B[1] >>> 0 < g[1] >>> 0 ? 1 : 0) | 0, B[3] = B[3] + 1295307597 + (B[2] >>> 0 < g[2] >>> 0 ? 1 : 0) | 0, B[4] = B[4] + 3545052371 + (B[3] >>> 0 < g[3] >>> 0 ? 1 : 0) | 0, B[5] = B[5] + 886263092 + (B[4] >>> 0 < g[4] >>> 0 ? 1 : 0) | 0, B[6] = B[6] + 1295307597 + (B[5] >>> 0 < g[5] >>> 0 ? 1 : 0) | 0, B[7] = B[7] + 3545052371 + (B[6] >>> 0 < g[6] >>> 0 ? 1 : 0) | 0, this._b = B[7] >>> 0 < g[7] >>> 0 ? 1 : 0;
          for (var v = 0; v < 8; v++) {
            var C = f[v] + B[v], A = C & 65535, D = C >>> 16, l = ((A * A >>> 17) + A * D >>> 15) + D * D, h = ((C & 4294901760) * C | 0) + ((C & 65535) * C | 0);
            x[v] = l ^ h;
          }
          f[0] = x[0] + (x[7] << 16 | x[7] >>> 16) + (x[6] << 16 | x[6] >>> 16) | 0, f[1] = x[1] + (x[0] << 8 | x[0] >>> 24) + x[7] | 0, f[2] = x[2] + (x[1] << 16 | x[1] >>> 16) + (x[0] << 16 | x[0] >>> 16) | 0, f[3] = x[3] + (x[2] << 8 | x[2] >>> 24) + x[1] | 0, f[4] = x[4] + (x[3] << 16 | x[3] >>> 16) + (x[2] << 16 | x[2] >>> 16) | 0, f[5] = x[5] + (x[4] << 8 | x[4] >>> 24) + x[3] | 0, f[6] = x[6] + (x[5] << 16 | x[5] >>> 16) + (x[4] << 16 | x[4] >>> 16) | 0, f[7] = x[7] + (x[6] << 8 | x[6] >>> 24) + x[5] | 0;
        }
        o.RabbitLegacy = p._createHelper(c);
      }(), a.RabbitLegacy;
    });
  }(mt)), mt.exports;
}
var Dt = { exports: {} }, we;
function Nr() {
  return we || (we = 1, function(r, u) {
    (function(a, o, d) {
      r.exports = o(Q(), m0(), D0(), y0(), x0());
    })(X, function(a) {
      return function() {
        var o = a, d = o.lib, p = d.BlockCipher, w = o.algo;
        const i = 16, g = [
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
        ], x = [
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
        var c = {
          pbox: [],
          sbox: []
        };
        function F(A, D) {
          let l = D >> 24 & 255, h = D >> 16 & 255, E = D >> 8 & 255, b = D & 255, _ = A.sbox[0][l] + A.sbox[1][h];
          return _ = _ ^ A.sbox[2][E], _ = _ + A.sbox[3][b], _;
        }
        function f(A, D, l) {
          let h = D, E = l, b;
          for (let _ = 0; _ < i; ++_)
            h = h ^ A.pbox[_], E = F(A, h) ^ E, b = h, h = E, E = b;
          return b = h, h = E, E = b, E = E ^ A.pbox[i], h = h ^ A.pbox[i + 1], { left: h, right: E };
        }
        function B(A, D, l) {
          let h = D, E = l, b;
          for (let _ = i + 1; _ > 1; --_)
            h = h ^ A.pbox[_], E = F(A, h) ^ E, b = h, h = E, E = b;
          return b = h, h = E, E = b, E = E ^ A.pbox[1], h = h ^ A.pbox[0], { left: h, right: E };
        }
        function v(A, D, l) {
          for (let S = 0; S < 4; S++) {
            A.sbox[S] = [];
            for (let U = 0; U < 256; U++)
              A.sbox[S][U] = x[S][U];
          }
          let h = 0;
          for (let S = 0; S < i + 2; S++)
            A.pbox[S] = g[S] ^ D[h], h++, h >= l && (h = 0);
          let E = 0, b = 0, _ = 0;
          for (let S = 0; S < i + 2; S += 2)
            _ = f(A, E, b), E = _.left, b = _.right, A.pbox[S] = E, A.pbox[S + 1] = b;
          for (let S = 0; S < 4; S++)
            for (let U = 0; U < 256; U += 2)
              _ = f(A, E, b), E = _.left, b = _.right, A.sbox[S][U] = E, A.sbox[S][U + 1] = b;
          return !0;
        }
        var C = w.Blowfish = p.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var A = this._keyPriorReset = this._key, D = A.words, l = A.sigBytes / 4;
              v(c, D, l);
            }
          },
          encryptBlock: function(A, D) {
            var l = f(c, A[D], A[D + 1]);
            A[D] = l.left, A[D + 1] = l.right;
          },
          decryptBlock: function(A, D) {
            var l = B(c, A[D], A[D + 1]);
            A[D] = l.left, A[D + 1] = l.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        o.Blowfish = p._createHelper(C);
      }(), a.Blowfish;
    });
  }(Dt)), Dt.exports;
}
(function(r, u) {
  (function(a, o, d) {
    r.exports = o(Q(), K0(), lr(), hr(), m0(), dr(), D0(), ke(), Pt(), pr(), Te(), Br(), vr(), Ar(), Ht(), Er(), y0(), x0(), gr(), Cr(), yr(), Fr(), wr(), mr(), Dr(), br(), _r(), Rr(), Sr(), kr(), Tr(), Ur(), Pr(), Hr(), Nr());
  })(X, function(a) {
    return a;
  });
})(Se);
var Or = Se.exports;
const Ue = /* @__PURE__ */ $e(Or);
typeof window < "u" && (window.Buffer = H0.Buffer);
const qr = H0.Buffer.alloc(32), zr = `
account-id`, Wr = (r) => r < 0 ? (Number(r) >>> 0).toString(16) : Number(r).toString(16), me = (r) => {
  const u = [];
  for (let a = 0; a < r.length; a += 1)
    u[a / 4 | 0] |= r[a] << 24 - 8 * (a % 4);
  return Ue.lib.WordArray.create(u, r.length);
}, Ir = (r, u) => {
  const a = [];
  return u > 0 && a.push(r >>> 24), u > 1 && a.push(r >>> 16 & 255), u > 2 && a.push(r >>> 8 & 255), u > 3 && a.push(r & 255), a;
}, Vr = (r, u) => {
  "sigBytes" in r && "words" in r && (u = r.sigBytes, r = r.words);
  let a = [], o, d = 0;
  for (; u > 0; )
    o = Ir(r[d], Math.min(4, u)), u -= o.length, a = [...a, ...o], d++;
  return a;
}, Mr = (r) => {
  const u = new Uint8Array(r), a = Je.unsigned(H0.Buffer.from(u));
  return Wr(a).padStart(8, "0");
}, Nt = (r, u = "") => {
  try {
    const a = V0.from(r), o = Ue.algo.SHA224.create();
    o.update(zr), o.update(me(a.toUint8Array()));
    const d = H0.Buffer.from(qr);
    u && d.writeUInt32BE(Number(u), 0), o.update(me(d));
    const p = o.finalize(), w = Vr(p, 28);
    return Mr(w) + p.toString();
  } catch (a) {
    throw new Error(a);
  }
};
function De(r) {
  return "createSync" in S0 && typeof S0.createSync == "function" ? S0.createSync(r) : new S0(r);
}
const Kr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='48'%20height='48'%20fill='none'%3e%3cpath%20d='M11.794%202.433A1.162%201.162%200%200%200%2011.548.12L9.174.374c-1.216.13-2.191.234-2.983.378-.816.148-1.516.35-2.165.714a6.675%206.675%200%200%200-2.53%202.506c-.37.646-.578%201.343-.732%202.157C.614%206.919.5%207.893.36%209.106l-.006.052-.233%202.318a1.162%201.162%200%201%200%202.313.232l.231-2.3c.146-1.264.249-2.15.381-2.845.13-.682.275-1.1.467-1.436a4.35%204.35%200%200%201%201.648-1.633c.338-.19.76-.331%201.443-.455.699-.127%201.59-.223%202.86-.358l2.33-.248Zm22.613-1.28a1.162%201.162%200%200%200%201.033%201.28l2.33.248c1.27.135%202.16.231%202.859.358.684.124%201.105.265%201.443.455a4.35%204.35%200%200%201%201.648%201.633c.193.335.337.754.467%201.436.132.695.235%201.581.38%202.844l.232%202.302a1.162%201.162%200%201%200%202.313-.233l-.233-2.318-.006-.052c-.14-1.214-.252-2.187-.402-2.977-.155-.814-.364-1.511-.734-2.157a6.675%206.675%200%200%200-2.529-2.506c-.65-.364-1.349-.566-2.165-.714-.792-.144-1.767-.248-2.983-.378L35.686.121a1.162%201.162%200%200%200-1.279%201.033Zm0%2044.923a1.162%201.162%200%200%201%201.033-1.28l2.33-.248c1.27-.135%202.16-.23%202.859-.357.684-.124%201.105-.266%201.443-.455a4.35%204.35%200%200%200%201.648-1.633c.193-.336.337-.755.467-1.437.132-.695.235-1.581.38-2.844l.232-2.301a1.162%201.162%200%201%201%202.313.233l-.233%202.317-.006.053c-.14%201.213-.252%202.186-.402%202.976-.155.814-.364%201.512-.734%202.158a6.675%206.675%200%200%201-2.529%202.506c-.65.364-1.349.566-2.165.714-.792.143-1.767.247-2.983.377l-2.374.253a1.162%201.162%200%200%201-1.279-1.032Zm-21.58%200a1.162%201.162%200%200%200-1.033-1.28l-2.33-.248c-1.27-.135-2.16-.23-2.859-.357-.684-.124-1.105-.266-1.443-.455a4.35%204.35%200%200%201-1.648-1.633c-.192-.336-.337-.755-.467-1.437-.132-.695-.235-1.581-.38-2.844l-.232-2.301a1.162%201.162%200%200%200-2.313.233l.233%202.317.006.053c.14%201.213.252%202.186.403%202.976.154.814.363%201.512.733%202.158a6.674%206.674%200%200%200%202.529%202.506c.65.364%201.349.566%202.165.714.792.143%201.767.247%202.983.377l2.374.253a1.162%201.162%200%200%200%201.279-1.032Zm-.636-31.422a1%201%200%200%200-1%201v16.264a1%201%200%200%200%201%201h3.166a1%201%200%200%200%201-1V15.654a1%201%200%200%200-1-1h-3.166Zm8.56%200a1%201%200%200%200-1%201v16.264a1%201%200%200%200%201%201h7.637c2%200%203.774-.374%205.322-1.122%201.548-.748%202.749-1.809%203.601-3.183.852-1.374%201.279-2.983%201.279-4.827%200-1.844-.427-3.453-1.279-4.827-.852-1.374-2.053-2.435-3.6-3.183-1.549-.748-3.323-1.122-5.323-1.122H20.75Zm11.185%2012.811c-.94.887-2.192%201.33-3.757%201.33h-2.962a.3.3%200%200%201-.3-.3v-9.419a.3.3%200%200%201%20.3-.3h2.962c1.565%200%202.818.444%203.757%201.331.957.887%201.435%202.114%201.435%203.68%200%201.565-.478%202.79-1.435%203.678Z'%20fill='url(%23a)'/%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='11.415'%20y1='15.756'%20x2='27.548'%20y2='39.206'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23CC5CDC'/%3e%3cstop%20offset='.245'%20stop-color='%237B66FF'/%3e%3cstop%20offset='.521'%20stop-color='%231F8AF0'/%3e%3cstop%20offset='.76'%20stop-color='%2300D1FF'/%3e%3cstop%20offset='1'%20stop-color='%233DEDD7'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", U0 = class U0 {
  constructor() {
    this.authClient = null, this.agent = null, this.identity = null, this.signIdentity = null, this.name = "NFID", this.logo = U0.logo, this.readyState = "Loadable", this.url = "https://nfid.one/", this.delegationState = {
      retryCount: 0
    }, this.url = "https://nfid.one/", this.name = "NFID", this.logo = U0.logo, this.readyState = "Loadable";
  }
  resetDelegationState() {
    this.delegationState = {
      retryCount: 0
    };
  }
  async waitForDelegation(u = 3e4) {
    const a = Date.now();
    for (; Date.now() - a < u; ) {
      const o = await this.getDelegation({});
      if (o) return o;
      await new Promise((d) => setTimeout(d, 1e3));
    }
    return null;
  }
  async initAuthClient() {
    var u, a, o;
    this.authClient || (this.authClient = await _t.create({
      idleOptions: {
        idleTimeout: ((u = this.config) == null ? void 0 : u.timeout) || 1e3 * 60 * 60 * 24 * 7,
        // 7 days
        disableDefaultIdleCallback: !0
        // Disable default reload behavior
      }
    }), (o = (a = this.authClient.idleManager) == null ? void 0 : a.registerCallback) == null || o.call(a, () => this.refreshLogin()));
  }
  async refreshLogin() {
    try {
      await this.connect(this.config);
    } catch (u) {
      console.error("Failed to refresh login:", u), await this.disconnect();
    }
  }
  async isAvailable() {
    return !0;
  }
  async connect(u) {
    var d, p, w;
    console.log("Connecting with config:", {
      hostUrl: u.hostUrl,
      hasDelegationTargets: !!((d = u.delegationTargets) != null && d.length),
      delegationTimeout: (p = u.delegationTimeout) == null ? void 0 : p.toString()
    }), this.config = u, this.resetDelegationState(), await this.initAuthClient();
    const a = !!((w = this.config.delegationTargets) != null && w.length);
    a && await this.authClient.logout();
    const o = await this.authClient.isAuthenticated();
    return console.log("Auth state:", { isAuthenticated: o, useDelegation: a }), !o || a ? new Promise((i, g) => {
      var B, v;
      const x = a ? this.config.delegationTimeout || BigInt(((B = this.config) == null ? void 0 : B.timeout) || 6048e5) : void 0, c = new URL("https://nfid.one/authenticate/");
      if (c.searchParams.set("applicationName", window.location.hostname), a && this.config.delegationTargets) {
        const C = {
          method: "icrc34_delegation",
          targets: this.config.delegationTargets.map((A) => A.toString())
        };
        c.searchParams.set("scope", JSON.stringify([C])), c.searchParams.set("targets", this.config.delegationTargets.map((A) => A.toString()).join(",")), x && c.searchParams.set("maxTimeToLive", x.toString());
      }
      console.log("NFID login URL:", c.toString());
      let F;
      const f = () => {
        F && window.clearTimeout(F);
      };
      F = window.setTimeout(() => {
        f(), g(new Error("Login process timed out"));
      }, 12e4), this.authClient.login({
        identityProvider: c.toString(),
        windowOpenerFeatures: `left=${window.screen.width / 2 - 525 / 2}, top=${window.screen.height / 2 - 705 / 2}, toolbar=0,location=0,menubar=0,width=525,height=705`,
        maxTimeToLive: x,
        derivationOrigin: (v = this.config) == null ? void 0 : v.derivationOrigin,
        onSuccess: async () => {
          var C, A, D;
          try {
            f();
            const l = this.authClient.getIdentity();
            if (this.identity = l, a) {
              if (!("sign" in l && "getPublicKey" in l)) {
                g(new Error("Current identity does not support signing"));
                return;
              }
              this.signIdentity = l;
              const E = await this.getDelegation({
                targets: this.config.delegationTargets,
                maxTimeToLive: x
              });
              if (E) {
                console.log("Got delegation:", {
                  delegationChainLength: E.delegations.length,
                  delegationKey: (C = E.delegations[0]) == null ? void 0 : C.delegation.pubkey,
                  expiry: (A = E.delegations[0]) == null ? void 0 : A.delegation.expiration.toString()
                });
                const b = N0.fromDelegation(
                  this.signIdentity,
                  E
                );
                this.identity = b, this.signIdentity = b, this.authClient = await _t.create({
                  identity: b,
                  idleOptions: {
                    idleTimeout: ((D = this.config) == null ? void 0 : D.timeout) || 1e3 * 60 * 60 * 24 * 7,
                    // 7 days
                    disableDefaultIdleCallback: !0
                    // Disable default reload behavior
                  }
                });
              } else
                console.warn("No delegation received from NFID");
            }
            const h = await this._continueLogin(u.hostUrl);
            console.log("Login successful with account:", {
              principal: h.owner.toString(),
              hasDelegation: h.hasDelegation
            }), i(h);
          } catch (l) {
            f(), g(l);
          }
        },
        onError: (C) => {
          f(), g(new Error("Authentication failed: " + C));
        }
      });
    }) : this._continueLogin(u.hostUrl);
  }
  async _continueLogin(u) {
    var a;
    try {
      if (!this.identity) {
        const p = this.authClient.getIdentity();
        this.identity = p;
      }
      if (!!((a = this.config.delegationTargets) != null && a.length)) {
        if (!("sign" in this.identity && "getPublicKey" in this.identity))
          throw new Error("Current identity does not support signing");
        this.signIdentity = this.identity;
      }
      const d = this.identity.getPrincipal();
      return this.agent = De({
        identity: this.identity,
        host: u
      }), {
        owner: d,
        subaccount: Rt(d),
        hasDelegation: this.identity instanceof N0
      };
    } catch (o) {
      throw console.error("Failed to continue login:", o), o;
    }
  }
  async requestPermissions(u) {
    var o, d;
    if (!this.authClient)
      throw new Error("Not connected");
    console.log("Requesting permissions for targets:", (o = u.targets) == null ? void 0 : o.map((p) => p.toString()));
    const a = this.authClient.getIdentity();
    if (!("sign" in a && "getPublicKey" in a))
      throw new Error("Current identity does not support signing");
    this.signIdentity = a;
    try {
      const p = this.config.delegationTimeout || BigInt(((d = this.config) == null ? void 0 : d.timeout) || 6048e5);
      console.log("Requesting delegation with timeout:", p.toString());
      const w = await this.createDelegation({
        targets: u.targets,
        maxTimeToLive: p
      });
      if (w) {
        console.log("Creating delegation identity");
        const i = N0.fromDelegation(
          this.signIdentity,
          w
        );
        this.identity = i, this.signIdentity = i, this.agent = De({
          identity: this.identity,
          host: this.config.hostUrl
        });
        const g = this.identity.getPrincipal();
        return console.log("Delegation identity created with principal:", g.toString()), !0;
      }
      return console.warn("No delegation created"), !1;
    } catch (p) {
      throw console.error("Failed to request permissions:", p), p;
    }
  }
  async createActor(u, a) {
    var d;
    if (!this.agent) throw new Error("Not connected");
    if (!!((d = this.config.delegationTargets) != null && d.length) && !this.signIdentity) {
      const p = V0.fromText(u);
      await this.requestPermissions({
        targets: [p],
        canisterId: u
      });
    }
    return St.createActor(a, {
      agent: this.agent,
      canisterId: u
    });
  }
  async disconnect() {
    this.authClient && (await this.authClient.logout(), this.authClient = null, this.agent = null, this.identity = null, this.signIdentity = null);
  }
  async getPrincipal() {
    if (!this.identity) throw new Error("Not connected");
    return this.identity.getPrincipal();
  }
  async getAccountId() {
    const u = await this.getPrincipal();
    return Nt(u.toString()) || "";
  }
  async isConnected() {
    return this.authClient ? this.authClient.isAuthenticated() : !1;
  }
  async getDelegation(u) {
    var a, o;
    if (!this.authClient || !this.identity)
      throw new Error("Not connected");
    try {
      if (this.delegationState.pendingPromise)
        return this.delegationState.pendingPromise;
      const d = this.authClient.getIdentity();
      if (d instanceof N0) {
        const p = d.getDelegation();
        if (((a = p.delegations[0]) == null ? void 0 : a.delegation.expiration) > BigInt(Date.now()) * BigInt(1e6))
          return p;
      }
      if ("getDelegation" in d)
        try {
          const p = await d.getDelegation();
          if (p && ((o = p.delegations[0]) == null ? void 0 : o.delegation.expiration) > BigInt(Date.now()) * BigInt(1e6))
            return p;
        } catch (p) {
          console.warn("Failed to get delegation directly:", p);
        }
      if (this.delegationState.retryCount > 0 && (this.delegationState.lastAttempt ? Date.now() - this.delegationState.lastAttempt : 1 / 0) < 5e3)
        throw new Error("Please wait before requesting another delegation");
      return this.delegationState.lastAttempt = Date.now(), this.delegationState.retryCount++, this.delegationState.pendingPromise = this.createDelegation(u).then(async (p) => (await new Promise((w) => setTimeout(w, 1e3)), p)).finally(() => {
        this.delegationState.pendingPromise = void 0;
      }), this.delegationState.pendingPromise;
    } catch (d) {
      throw console.error("Failed to get delegation:", d), d;
    }
  }
  async createDelegation(u) {
    var a, o;
    if (!this.authClient)
      throw new Error("Not connected");
    try {
      return console.log("Creating delegation with params:", {
        targets: (a = u.targets) == null ? void 0 : a.map((d) => d.toString()),
        maxTimeToLive: (o = u.maxTimeToLive) == null ? void 0 : o.toString()
      }), new Promise((d, p) => {
        var g;
        let w;
        const i = () => {
          w && window.clearTimeout(w);
        };
        w = window.setTimeout(() => {
          i(), p(new Error("Delegation request timed out"));
        }, 6e4), this.authClient.login({
          identityProvider: this.config.identityProvider || "https://nfid.one",
          maxTimeToLive: u.maxTimeToLive,
          derivationOrigin: (g = this.config) == null ? void 0 : g.derivationOrigin,
          windowOpenerFeatures: `left=${window.screen.width / 2 - 525 / 2}, top=${window.screen.height / 2 - 705 / 2}, toolbar=0,location=0,menubar=0,width=525,height=705`,
          onSuccess: async () => {
            var x;
            try {
              if (i(), !("getDelegation" in this.authClient.getIdentity())) {
                p(new Error("Identity does not support delegations"));
                return;
              }
              const F = await this.waitForDelegation();
              if (!F) {
                p(new Error("Delegation not received after waiting"));
                return;
              }
              console.log("Delegation created successfully:", {
                delegationChainLength: F.delegations.length,
                expiry: (x = F.delegations[0]) == null ? void 0 : x.delegation.expiration.toString()
              }), d(F);
            } catch (c) {
              i(), console.error("Failed to get delegation:", c), p(c);
            }
          },
          onError: (x) => {
            i(), console.error("Failed to create delegation:", x), p(x);
          }
        });
      });
    } catch (d) {
      throw console.error("Failed to create delegation:", d), d;
    }
  }
  calculateExpiryTime(u) {
    const o = BigInt(Date.now()) * BigInt(1e6) + u, d = BigInt(30 * 60 * 1e9);
    return o + d;
  }
};
U0.logo = Kr;
let z0 = U0;
const Gr = [
  {
    id: "nns",
    name: "Internet Identity",
    icon: O0.logo,
    adapter: O0
  },
  {
    id: "plug",
    name: "Plug Wallet",
    icon: q0.logo,
    adapter: q0
  },
  {
    id: "nfid",
    name: "NFID",
    icon: z0.logo,
    adapter: z0
  }
], Xr = ({ IDL: r }) => {
  const u = r.Record({ e8s: r.Nat64 }), a = r.Record({ secs: r.Nat64, nanos: r.Nat32 }), o = r.Record({
    owner: r.Principal,
    subaccount: r.Opt(r.Vec(r.Nat8))
  }), d = r.Record({
    num_blocks_to_archive: r.Nat64,
    max_transactions_per_response: r.Opt(r.Nat64),
    trigger_threshold: r.Nat64,
    max_message_size_bytes: r.Opt(r.Nat64),
    cycles_for_archive_creation: r.Opt(r.Nat64),
    node_max_memory_size_bytes: r.Opt(r.Nat64),
    controller_id: r.Principal
  });
  r.Record({
    send_whitelist: r.Vec(r.Principal),
    token_symbol: r.Opt(r.Text),
    transfer_fee: r.Opt(u),
    minting_account: r.Text,
    transaction_window: r.Opt(a),
    max_message_size_bytes: r.Opt(r.Nat64),
    icrc1_minting_account: r.Opt(o),
    archive_options: r.Opt(d),
    initial_values: r.Vec(r.Tuple(r.Text, u)),
    token_name: r.Opt(r.Text)
  });
  const p = r.Record({
    account: r.Vec(r.Nat8)
  }), w = r.Record({ account: r.Text }), i = r.Record({ canister_id: r.Principal }), g = r.Record({ archives: r.Vec(i) }), x = r.Record({ decimals: r.Nat32 }), c = r.Variant({
    Int: r.Int,
    Nat: r.Nat,
    Blob: r.Vec(r.Nat8),
    Text: r.Text
  }), F = r.Record({ url: r.Text, name: r.Text }), f = r.Record({
    to: o,
    fee: r.Opt(r.Nat),
    memo: r.Opt(r.Vec(r.Nat8)),
    from_subaccount: r.Opt(r.Vec(r.Nat8)),
    created_at_time: r.Opt(r.Nat64),
    amount: r.Nat
  }), B = r.Variant({
    GenericError: r.Record({
      message: r.Text,
      error_code: r.Nat
    }),
    TemporarilyUnavailable: r.Null,
    BadBurn: r.Record({ min_burn_amount: r.Nat }),
    Duplicate: r.Record({ duplicate_of: r.Nat }),
    BadFee: r.Record({ expected_fee: r.Nat }),
    CreatedInFuture: r.Record({ ledger_time: r.Nat64 }),
    TooOld: r.Null,
    InsufficientFunds: r.Record({ balance: r.Nat })
  }), v = r.Variant({ Ok: r.Nat, Err: B }), C = r.Record({ name: r.Text }), A = r.Record({
    start: r.Nat64,
    length: r.Nat64
  }), D = r.Record({ timestamp_nanos: r.Nat64 }), l = r.Variant({
    Approve: r.Record({
      fee: u,
      from: r.Vec(r.Nat8),
      allowance_e8s: r.Int,
      expires_at: r.Opt(D),
      spender: r.Vec(r.Nat8)
    }),
    Burn: r.Record({ from: r.Vec(r.Nat8), amount: u }),
    Mint: r.Record({ to: r.Vec(r.Nat8), amount: u }),
    Transfer: r.Record({
      to: r.Vec(r.Nat8),
      fee: u,
      from: r.Vec(r.Nat8),
      amount: u
    }),
    TransferFrom: r.Record({
      to: r.Vec(r.Nat8),
      fee: u,
      from: r.Vec(r.Nat8),
      amount: u,
      spender: r.Vec(r.Nat8)
    })
  }), h = r.Record({
    memo: r.Nat64,
    icrc1_memo: r.Opt(r.Vec(r.Nat8)),
    operation: r.Opt(l),
    created_at_time: D
  }), E = r.Record({
    transaction: h,
    timestamp: D,
    parent_hash: r.Opt(r.Vec(r.Nat8))
  }), b = r.Record({ blocks: r.Vec(E) }), _ = r.Variant({
    BadFirstBlockIndex: r.Record({
      requested_index: r.Nat64,
      first_valid_index: r.Nat64
    }),
    Other: r.Record({
      error_message: r.Text,
      error_code: r.Nat64
    })
  }), S = r.Record({
    callback: r.Func(
      [A],
      [r.Variant({ Ok: b, Err: _ })],
      ["query"]
    ),
    start: r.Nat64,
    length: r.Nat64
  }), U = r.Record({
    certificate: r.Opt(r.Vec(r.Nat8)),
    blocks: r.Vec(E),
    chain_length: r.Nat64,
    first_block_index: r.Nat64,
    archived_blocks: r.Vec(S)
  }), W = r.Record({
    to: r.Text,
    fee: u,
    memo: r.Nat64,
    from_subaccount: r.Opt(r.Vec(r.Nat8)),
    created_at_time: r.Opt(D),
    amount: u
  }), m = r.Record({ symbol: r.Text }), k = r.Record({
    to: r.Vec(r.Nat8),
    fee: u,
    memo: r.Nat64,
    from_subaccount: r.Opt(r.Vec(r.Nat8)),
    created_at_time: r.Opt(D),
    amount: u
  }), N = r.Variant({
    TxTooOld: r.Record({ allowed_window_nanos: r.Nat64 }),
    BadFee: r.Record({ expected_fee: u }),
    TxDuplicate: r.Record({ duplicate_of: r.Nat64 }),
    TxCreatedInFuture: r.Null,
    InsufficientFunds: r.Record({ balance: u })
  }), O = r.Variant({ Ok: r.Nat64, Err: N }), I = r.Record({ transfer_fee: u });
  return r.Service({
    account_balance: r.Func(
      [p],
      [u],
      ["query"]
    ),
    account_balance_dfx: r.Func([w], [u], ["query"]),
    archives: r.Func([], [g], ["query"]),
    decimals: r.Func([], [x], ["query"]),
    icrc1_balance_of: r.Func([o], [r.Nat], ["query"]),
    icrc1_decimals: r.Func([], [r.Nat8], ["query"]),
    icrc1_fee: r.Func([], [r.Nat], ["query"]),
    icrc1_metadata: r.Func(
      [],
      [r.Vec(r.Tuple(r.Text, c))],
      ["query"]
    ),
    icrc1_minting_account: r.Func([], [r.Opt(o)], ["query"]),
    icrc1_name: r.Func([], [r.Text], ["query"]),
    icrc1_supported_standards: r.Func(
      [],
      [r.Vec(F)],
      ["query"]
    ),
    icrc1_symbol: r.Func([], [r.Text], ["query"]),
    icrc1_total_supply: r.Func([], [r.Nat], ["query"]),
    icrc1_transfer: r.Func([f], [v], []),
    name: r.Func([], [C], ["query"]),
    query_blocks: r.Func(
      [A],
      [U],
      ["query"]
    ),
    send_dfx: r.Func([W], [r.Nat64], []),
    symbol: r.Func([], [m], ["query"]),
    transfer: r.Func([k], [O], []),
    transfer_fee: r.Func([r.Record({})], [I], ["query"])
  });
};
class Qr {
  constructor(u = {}) {
    this.state = {
      account: null,
      activeWallet: null,
      provider: null,
      canisterActors: {},
      anonCanisterActors: {},
      config: {
        hostUrl: u.hostUrl || "http://localhost:4943",
        localStorageKey: u.localStorageKey || "pnpConnectedWallet",
        identityProvider: u.identityProvider,
        timeout: u.timeout || 1e3 * 60 * 60 * 24 * 7,
        // 7 days
        ...u
      }
    };
  }
  getAccountId() {
    if (!this.state.provider || !this.state.account) return null;
    const u = this.state.account.owner.toString();
    return Nt(u) || null;
  }
  getPrincipalId() {
    return this.state.provider && this.state.account ? this.state.account.owner : null;
  }
  async connect(u) {
    const a = Zr.find((w) => w.id === u);
    if (!a)
      throw new Error(`Wallet with ID "${u}" not found.`);
    const o = new a.adapter();
    if (!await o.isAvailable())
      throw new Error(
        `Wallet "${u}" is not available. Please install or enable it.`
      );
    const p = await o.connect(this.state.config);
    if (!p || typeof p == "boolean")
      throw new Error(`Failed to connect to wallet "${u}".`);
    return this.state.account = p, this.state.activeWallet = u, this.state.provider = o, localStorage.setItem(this.state.config.localStorageKey, u), p;
  }
  async disconnect() {
    this.state.provider && await this.state.provider.disconnect(), localStorage.removeItem(this.state.config.localStorageKey), this.state.account = null, this.state.activeWallet = null, this.state.provider = null, this.state.canisterActors = {}, this.state.anonCanisterActors = {};
  }
  async callCanister(u, a, o = [], d, p) {
    const { isAnon: w = !1, isSigned: i = !1 } = p || {};
    if (!this.state.provider && !w)
      throw new Error("Wallet not connected");
    try {
      const g = await this.getActor(u, d || Xr, {
        isAnon: w,
        isSigned: i
      });
      if (typeof g[a] != "function")
        throw new Error(
          `Method "${a}" not found on canister "${u}"`
        );
      return await g[a](...o);
    } catch (g) {
      throw console.error(
        `Error calling method "${a}" on canister "${u}":`,
        g
      ), g;
    }
  }
  async getActor(u, a, o) {
    const { isAnon: d = !1, isForced: p = !1, isSigned: w = !1 } = o || {};
    if (w)
      return this.createSignedActor(u, a);
    const i = d ? this.state.anonCanisterActors : this.state.canisterActors;
    if (!p && i[u])
      return i[u];
    const g = d ? await this.createAnonymousActor(u, a) : await this.createSignedActor(u, a);
    return i[u] = g, g;
  }
  async createAnonymousActor(u, a) {
    var d;
    const o = await S0.create({
      identity: new be(),
      host: this.state.config.hostUrl
    });
    return (d = this.state.config.hostUrl) != null && d.includes("localhost") && this.state.provider.name !== "NFID" && await o.fetchRootKey(), St.createActor(a, { agent: o, canisterId: u });
  }
  async createSignedActor(u, a) {
    if (!this.state.provider) throw new Error("Wallet not connected");
    return this.state.provider.createActor(u, a);
  }
  isWalletConnected() {
    return !!this.state.activeWallet;
  }
  activeWallet() {
    return this.state.account;
  }
}
const Zr = Gr, Pe = (r = {}) => new Qr(r);
class jr {
  constructor(u = {}, a) {
    this.state = "idle", this.transactionLlist = {}, this.stepsList = [], this.completed = [], this.activeStep = "", this.failedSteps = [], this.transactionResults = {}, this.trxArray = [], this._info = !1, this._adapterObj = !1, !(!a || !a.provider) && (Object.entries(u).forEach(([o, d]) => {
      typeof d == "object" && (this.transactionLlist[o] = d);
    }), Object.keys(this.transactionLlist).length > 0 && (this.stepsList = Object.keys(this.transactionLlist), this._adapterObj = a));
  }
  _prepareTrxArry() {
    this.trxArray = [];
    let u = [];
    Object.values(this.transactionLlist).forEach((o) => {
      u.push(o), o.updateNextStep && (this.trxArray.push(u), u = []);
    }), u.length > 0 && this.trxArray.push(u);
    let a = 0;
    return this.trxArray.forEach((o, d) => {
      o.forEach((p, w) => {
        this.trxArray[d][w].stepIndex = a, this.trxArray[d][w].state = "idle", this.trxArray[d][w].onSuccessMain = async (i, g) => {
          const x = g.stepIndex, c = p.onSuccess, F = p.onFail;
          if (i.err || i.Err || i.ERR)
            return this.failedSteps.push(this.stepsList[x]), this.transactionResults[this.stepsList[x]] = i, this.state = "error", g.state = "error", F && await F(i), !1;
          this.completed.push(this.stepsList[x]), this.activeStep = this.stepsList[x + 1], this.transactionResults[this.stepsList[x]] = i, g.state = "done", g.updateNextStep && this.trxArray[d + 1] && await g.updateNextStep(i, this.trxArray[d + 1][0]), c && await c(i);
        }, this.trxArray[d][w].onFailMain = async (i, g) => {
          const x = p.onFail, c = g.stepIndex;
          return console.error(`error in  ${this.stepsList[c]} `, this.trxArray[d][w]), console.error(i), this.failedSteps.push(this.stepsList[c]), this.activeStep = this.stepsList[c], this.state = "error", g.state = "error", x && await x(i), !1;
        }, a++;
      });
    }), this.trxArray;
  }
  // ... rest of the methods (retryExecute, execute, _processBatch) remain the same,
  // but you should add type annotations to their parameters and return types.
}
const Yr = "http://localhost:4943", Jr = "ryjl3-tyaaa-aaaaa-aaaba-cai", on = Nt;
let bt = null;
function $r() {
  return bt || (bt = Pe({
    whitelist: [Jr],
    host: Yr,
    identityProvider: ""
  })), bt;
}
typeof window < "u" && (window.pnp = {
  PNP: Pe,
  BatchTransact: jr,
  nns: { AnonymousIdentity: be, Principal: V0 },
  getPNPAdapter: $r
});
export {
  jr as BatchTransact,
  Pe as createPNP,
  Nt as getAccountIdentifier,
  $r as getPNPAdapter,
  on as principalIdFromHex,
  Zr as walletsList
};
//# sourceMappingURL=plug-n-play.es.js.map
