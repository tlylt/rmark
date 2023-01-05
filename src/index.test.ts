import { Pattern, RMark, Rule } from './index';
import { sampleText } from './page';

const sampleHtml = `
<p><h1>Header 1</h1>
</p>

<p><h2>Header 2</h2>
</p>

<p><h3>Header 3</h3>
</p>

<p><h4>Header 4</h4>
</p>

<p><h5>Header 5</h5>
</p>

<p><h6>Header 6</h6>
</p>


<p><b>Bold</b>
</p>

<p><i>Italic</i>
</p>


<p><a href="https://github.com/tlylt/rmark" target="_blank" rel="noopener">Link</a>
</p>

<p><img src="https://raw.githubusercontent.com/tlylt/rmark/main/static/logo.svg" alt="Image" />
</p>


<p>This is <b>Bold</b> and this is <i>Italic</i>.
</p>


<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare erat facilisis odio viverra gravida. Phasellus in finibus libero. Duis eget pellentesque arcu, ut lobortis mi. Praesent vitae nulla sed leo dignissim finibus eget hendrerit arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum enim nibh, eu pellentesque tellus fermentum venenatis. Nam consectetur sem a magna mattis, sed luctus purus tincidunt. Nam faucibus tellus sed ligula molestie pulvinar. Mauris facilisis felis ex, eu tempor justo commodo et. Aenean lobortis dignissim diam eget tempor.
</p>


<p>Sed pellentesque nulla sit amet tincidunt sagittis. Phasellus eget justo nulla. Cras nisi odio, lobortis nec ante eget, commodo euismod
</p>

<p>turpis. Cras id orci dolor. Etiam auctor, nisl luctus volutpat lacinia, turpis orci euismod magna, pharetra eleifend massa metus aliquet
</p>
`;

describe('testing index file', () => {
  test('empty string should render nothing', () => {
    expect(new RMark().render('')).toBe('');
  });
  test('should render paragraph', () => {
    expect(
      new RMark().render(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      )
    ).toBe(
      '\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n'
    );
  });
  test('should render header', () => {
    expect(new RMark().render('# Header 1')).toBe(
      '\n<p><h1>Header 1</h1></p>\n'
    );
    expect(new RMark().render('## Header 2')).toBe(
      '\n<p><h2>Header 2</h2></p>\n'
    );
    expect(new RMark().render('### Header 3')).toBe(
      '\n<p><h3>Header 3</h3></p>\n'
    );
    expect(new RMark().render('#### Header 4')).toBe(
      '\n<p><h4>Header 4</h4></p>\n'
    );
    expect(new RMark().render('##### Header 5')).toBe(
      '\n<p><h5>Header 5</h5></p>\n'
    );
    expect(new RMark().render('###### Header 6')).toBe(
      '\n<p><h6>Header 6</h6></p>\n'
    );
  });
  test('should render bold', () => {
    expect(new RMark().render('**Bold**')).toBe('\n<p><b>Bold</b></p>\n');
    expect(new RMark().render('__Bold__')).toBe('\n<p><b>Bold</b></p>\n');
    expect(new RMark().render('This is **Bold**')).toBe(
      '\n<p>This is <b>Bold</b></p>\n'
    );
  });
  test('should render italic', () => {
    expect(new RMark().render('*Italic*')).toBe('\n<p><i>Italic</i></p>\n');
    expect(new RMark().render('_Italic_')).toBe('\n<p><i>Italic</i></p>\n');
  });
  test('should render image', () => {
    expect(
      new RMark().render(
        '![Image](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)'
      )
    ).toBe(
      '\n<p><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Image" /></p>\n'
    );
  });
  test('should render link', () => {
    expect(new RMark().render('[Link](https://github.com)')).toBe(
      '\n<p><a href="https://github.com" target="_blank" rel="noopener">Link</a></p>\n'
    );
  });
  test('should render paragraph with multiple lines', () => {
    expect(new RMark().render(sampleText)).toBe(sampleHtml);
  });
  test('should work with adding rules', () => {
    const rmark = new RMark();
    rmark.addRule(
      new Rule('horizontal', [
        new Pattern(/^(-{3})/gm, '<hr />'),
        new Pattern(/^(_{3})/gm, '<hr />'),
      ])
    );
    expect(rmark.render('---')).toBe('\n<p><hr /></p>\n');
  });
});
