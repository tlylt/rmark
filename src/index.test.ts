import { RMark } from './index';

const sampleText = `# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

**Bold**
*Italic*

[Link](https://github.com)
![Image](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare erat facilisis odio viverra gravida. Phasellus in finibus libero. Duis eget pellentesque arcu, ut lobortis mi. Praesent vitae nulla sed leo dignissim finibus eget hendrerit arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum enim nibh, eu pellentesque tellus fermentum venenatis. Nam consectetur sem a magna mattis, sed luctus purus tincidunt. Nam faucibus tellus sed ligula molestie pulvinar. Mauris facilisis felis ex, eu tempor justo commodo et. Aenean lobortis dignissim diam eget tempor.

Sed pellentesque nulla sit amet tincidunt sagittis. Phasellus eget justo nulla. Cras nisi odio, lobortis nec ante eget, commodo euismod
turpis. Cras id orci dolor. Etiam auctor, nisl luctus volutpat lacinia, turpis orci euismod magna, pharetra eleifend massa metus aliquet
`;

const sampleHtml = `<h1>Header 1</h1>
<h2>Header 2</h2>
<h3>Header 3</h3>
<h4>Header 4</h4>
<h5>Header 5</h5>
<h6>Header 6</h6>

<b>Bold</b>
<i>Italic</i>

<a href="https://github.com" target="_blank" rel="noopener">Link</a>
<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Image" />

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare erat facilisis odio viverra gravida. Phasellus in finibus libero. Duis eget pellentesque arcu, ut lobortis mi. Praesent vitae nulla sed leo dignissim finibus eget hendrerit arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum enim nibh, eu pellentesque tellus fermentum venenatis. Nam consectetur sem a magna mattis, sed luctus purus tincidunt. Nam faucibus tellus sed ligula molestie pulvinar. Mauris facilisis felis ex, eu tempor justo commodo et. Aenean lobortis dignissim diam eget tempor.</p>

<p>Sed pellentesque nulla sit amet tincidunt sagittis. Phasellus eget justo nulla. Cras nisi odio, lobortis nec ante eget, commodo euismod
turpis. Cras id orci dolor. Etiam auctor, nisl luctus volutpat lacinia, turpis orci euismod magna, pharetra eleifend massa metus aliquet</p>
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
    expect(new RMark().render('# Header 1')).toBe('<h1>Header 1</h1>');
    expect(new RMark().render('## Header 2')).toBe('<h2>Header 2</h2>');
    expect(new RMark().render('### Header 3')).toBe('<h3>Header 3</h3>');
    expect(new RMark().render('#### Header 4')).toBe('<h4>Header 4</h4>');
    expect(new RMark().render('##### Header 5')).toBe('<h5>Header 5</h5>');
    expect(new RMark().render('###### Header 6')).toBe('<h6>Header 6</h6>');
  });
  test('should render bold', () => {
    expect(new RMark().render('**Bold**')).toBe('<b>Bold</b>');
    expect(new RMark().render('__Bold__')).toBe('<b>Bold</b>');
    expect(new RMark().render('This is **Bold**')).toBe('This is <b>Bold</b>');
  });
  test('should render italic', () => {
    expect(new RMark().render('*Italic*')).toBe('<i>Italic</i>');
    expect(new RMark().render('_Italic_')).toBe('<i>Italic</i>');
  });
  test('should render image', () => {
    expect(
      new RMark().render(
        '![Image](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)'
      )
    ).toBe(
      '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Image" />'
    );
  });
  test('should render link', () => {
    expect(new RMark().render('[Link](https://github.com)')).toBe(
      '<a href="https://github.com" target="_blank" rel="noopener">Link</a>'
    );
  });
  test('should render paragraph with multiple lines', () => {
    expect(new RMark().render(sampleText)).toBe(sampleHtml);
  });
});
