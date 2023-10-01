import { useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
function App() {
  const [markdown, setMarkdown] = useState(
    `# Header 1
## Header 2
[Link to Google](https://www.google.com)
\`inline code\`

\`\`\`
// Code block
function example() {
  return "Hello, World!";
}
\`\`\`

- List item 1
- List item 2

> Blockquote

![Image](https://example.com/image.jpg)

**Bold Text**`
  );
  const handleTextarea = (e) => {
    setMarkdown(e.target.value);
  };

  marked.use({
    breaks: true,
  });
  const htmlContent = marked(markdown);

  const sanitizedHtml = DOMPurify.sanitize(htmlContent);
  return (
    <main>
      <textarea
        name="markdown"
        id="editor"
        cols="30"
        rows="10"
        value={markdown}
        onChange={handleTextarea}
      ></textarea>
      <div id="preview" dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
    </main>
  );
}

export default App;
