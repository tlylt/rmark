# RMark

RMark is a simple regex-based toy Markdown parser written in TypeScript.

## Usage

Install the package:

```bash
npm install @tlylt/rmark
```

Import the package and use it:
```typescript
import { RMark } from '@tlylt/rmark';

const rmark = new RMark();
const html = rmark.render('# Hello, world!');
```

Add more rules to the parser:

```typescript
import { RMark, Rule, Pattern } from '@tlylt/rmark';

const rmark = new RMark();
rmark.addRule(
    new Rule('horizontal', [
    new Pattern(/^(-{3})/gm, '<hr />'),
    new Pattern(/^(_{3})/gm, '<hr />'),
    ])
);
const html = rmark.render('---');
```