export class Pattern {
  regex: RegExp;
  replacement: string;
  constructor(regex: RegExp, replacement: string) {
    this.regex = regex;
    this.replacement = replacement;
  }

  apply(raw: string): string {
    return raw.replace(this.regex, this.replacement);
  }
}
