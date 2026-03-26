// src/lib/app-params.js
export const appParams = {
  appId: null,
  token: null,
  fromUrl:
    typeof window !== "undefined" ? window.location.href : null,
  functionsVersion: null,
  appBaseUrl: null,
};