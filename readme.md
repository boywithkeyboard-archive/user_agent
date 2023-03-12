## user_agent

> A user agent parser built on top of
> [`UAParser.js`](https://github.com/faisalman/ua-parser-js).

```ts
import userAgent from 'https://deno.land/x/user_agent@v0.1.1/mod.ts'

const { browser, cpu, device, engine, os } = userAgent('user agent string')
```
