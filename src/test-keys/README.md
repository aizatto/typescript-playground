Goal:

- Validate that TypeScript complains that key doesn't exist

Useful for:

- Requiring keys of objects to exist.

Error produced:
```sh
/Users/aizat/.config/yarn/global/node_modules/ts-node/src/index.ts:228
    return new TSError(diagnosticText, diagnosticCodes)
           ^
TSError: ⨯ Unable to compile TypeScript:
src/test-keys.ts(6,20): error TS2339: Property 'doesNotExist' does not exist on type '{ homepage: string; }'.

    at createTSError (/Users/aizat/.config/yarn/global/node_modules/ts-node/src/index.ts:228:12)
    at getOutput (/Users/aizat/.config/yarn/global/node_modules/ts-node/src/index.ts:334:40)
    at Object.compile (/Users/aizat/.config/yarn/global/node_modules/ts-node/src/index.ts:367:11)
    at Module.m._compile (/Users/aizat/.config/yarn/global/node_modules/ts-node/src/index.ts:413:43)
    at Module._extensions..js (module.js:664:10)
    at Object.require.extensions.(anonymous function) [as .ts] (/Users/aizat/.config/yarn/global/node_modules/ts-node/src/index.ts:416:12)
    at Module.load (module.js:566:32)
    at tryModuleLoad (module.js:506:12)
    at Function.Module._load (module.js:498:3)
    at Function.Module.runMain (module.js:694:10)
```
