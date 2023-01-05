import { RMark } from '.';

export const sampleText = `# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

**Bold**
*Italic*

[Link](https://github.com/tlylt/rmark)
![Image](https://raw.githubusercontent.com/tlylt/rmark/main/static/logo.svg)

This is **Bold** and this is *Italic*.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare erat facilisis odio viverra gravida. Phasellus in finibus libero. Duis eget pellentesque arcu, ut lobortis mi. Praesent vitae nulla sed leo dignissim finibus eget hendrerit arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum enim nibh, eu pellentesque tellus fermentum venenatis. Nam consectetur sem a magna mattis, sed luctus purus tincidunt. Nam faucibus tellus sed ligula molestie pulvinar. Mauris facilisis felis ex, eu tempor justo commodo et. Aenean lobortis dignissim diam eget tempor.

Sed pellentesque nulla sit amet tincidunt sagittis. Phasellus eget justo nulla. Cras nisi odio, lobortis nec ante eget, commodo euismod
turpis. Cras id orci dolor. Etiam auctor, nisl luctus volutpat lacinia, turpis orci euismod magna, pharetra eleifend massa metus aliquet
`;

const page = document.getElementById('page');

if (page) {
  page.innerHTML = new RMark().render(sampleText);
}
