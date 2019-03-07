# typescript-playground

I think what would be interesting would have the JS files created with different outputs

For example the typescript file `test-async-main.ts` would generate several versions of the files:

- test-async-main-fail-es5.js
- test-async-main-fail-es6.js
- test-async-main-fail-es2015.js
- test-async-main-fail-es2016.js
- test-async-main-fail-es2017.js
- test-async-main-fail-es2018.js
- test-async-main-fail-esnext.js

The header of the file should include the `tsconfig.json` that was used to generate the file.

This would be useful in learning about the differences in files.
