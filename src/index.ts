import { Rule } from './Rule';
import { Pattern } from './Pattern';

const defaultRules: Rule[] = [
  new Rule('header', [
    new Pattern(/^#{6}\s?([^\n]+)/gm, '<h6>$1</h6>'),
    new Pattern(/^#{5}\s?([^\n]+)/gm, '<h5>$1</h5>'),
    new Pattern(/^#{4}\s?([^\n]+)/gm, '<h4>$1</h4>'),
    new Pattern(/^#{3}\s?([^\n]+)/gm, '<h3>$1</h3>'),
    new Pattern(/^#{2}\s?([^\n]+)/gm, '<h2>$1</h2>'),
    new Pattern(/^#{1}\s?([^\n]+)/gm, '<h1>$1</h1>'),
  ]),
  new Rule('bold', [
    new Pattern(/\*\*\s?([^\n]+)\*\*/g, '<b>$1</b>'),
    new Pattern(/\_\_\s?([^\n]+)\_\_/g, '<b>$1</b>'),
  ]),
  new Rule('italic', [
    new Pattern(/\*\s?([^\n]+)\*/g, '<i>$1</i>'),
    new Pattern(/\_\s?([^\n]+)\_/g, '<i>$1</i>'),
  ]),
  new Rule('image', [
    new Pattern(/\!\[([^\]]+)\]\((\S+)\)/g, '<img src="$2" alt="$1" />'),
  ]),
  new Rule('link', [
    new Pattern(
      /\[([^\n]+)\]\(([^\n]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener">$1</a>'
    ),
  ]),
  new Rule('paragraph', [
    // this regex can't skip processed HTML
    new Pattern(/([^\n]+\n?)/g, '\n<p>$1</p>\n'),
    // another possible regex that can't skip processed HTML
    // new Pattern(/(?:^|\n)([^\n\<]+(?:\n[^\n\>]+)*)(?:\n|$)/gm, '\n<p>$1</p>\n'),
  ]),
];

export class RMark {
  private rules: Rule[] = defaultRules;

  public addRuleBefore(rule: Rule, before: string): RMark {
    const index = this.rules.findIndex((r) => r.name === before);
    if (index !== -1) {
      this.rules.splice(index, 0, rule);
    }
    return this;
  }

  public addRule(rule: Rule): RMark {
    this.addRuleBefore(rule, 'paragraph');
    return this;
  }

  public render(raw: string) {
    let result = raw;
    this.rules.forEach((rule) => {
      const patterns = rule.patterns;
      patterns.forEach((pattern) => {
        result = result.replace(pattern.regex, pattern.replacement);
      });
    });
    return result;
  }
}

export { Rule } from './Rule';
export { Pattern } from './Pattern';
