# Hvsh

This project is a minimal single-page application created with [React](https://react.dev/), [Vite](https://vitejs.dev/)
and [TypeScript](https://www.typescriptlang.org/), which can calculate hashes (digests) of a given
text, using an algorithm selected by the user.

The web app uses the [SubtleCrypto](https://developer.mozilla.org/docs/Web/API/SubtleCrypto) interface of the [Web Crypto API](https://developer.mozilla.org/docs/Web/API/Web_Crypto_API) under the hood (in particular the [`digest()`](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/digest) method), to perform necessary calculations on the client.