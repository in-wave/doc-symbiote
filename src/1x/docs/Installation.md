```json
{
  "title": "Symbiote.js | Installation"
}
```
# Installation
## NPM

`npm i @in-wave/symbiote`

## Alternatives

### CDN

```js
import { BaseComponent } from 'https://esm.sh/@in-wave/symbiote/';
```

TypeScript support (my-types.d.ts):
```ts
// First, let TypeScript allow all module names starting with "https://". This will suppress TS errors.
declare module 'https://*';

// Second, list out all your dependencies. For every URL, you must map it to its local module.
declare module 'https://esm.sh/@in-wave/symbiote/' {
  export * from '@in-wave/symbiote';
}
```

### Git submodule

Initial submodule connection:

`git submodule add -b main https://github.com/in-wave/symbiote.git ./symbiote`

Activation at the cloned host repository and getting updates: 

`git submodule update --init --recursive --remote`

Switch to the certain revision:

`cd symbiote && git checkout <VERSION_TAG>`
<br>
<br>
`package.json` scripts section example:
```json
{
  "scripts": {
    "git-modules": "git submodule update --init --recursive --remote",
    "sym-version": "cd symbiote && git checkout <VERSION_TAG> && cd ..",
    "setup": "npm run git-modules && npm run sym-version && npm i"
  }
}
```
Then `npm run setup`


