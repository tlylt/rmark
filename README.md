# RMark

RMark is a simple regex-based toy Markdown parser written in TypeScript.

## Usage

```typescript
import { RMark } from 'rmark';

const rmark = new RMark();
const html = rmark.render('# Hello, world!');
```