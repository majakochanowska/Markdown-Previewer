import React from 'react';
import '../App.css';
import Preview from './Preview';

const defaultPlaceholder = `
# This is header H1 size
## This is header H2 size

This is a link:
[link](https://majatravels.com)
  
This is inline code: \`<div></div>\`.

This is a code block:

\`\`\`

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

**This is a list**:
- a
- b
- c

This is a quote:
> Block Quote


![mountains](https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683__340.png)
`


class Editor extends React.Component {
    constructor() {
      super();
      
      this.state = {
        markdownText: defaultPlaceholder
      };
  
      this.updatePreview = this.updatePreview.bind(this);
    }
    
    updatePreview(event) {
      this.setState({
        markdownText: event.target.value
      });
    }
    
    render() {
      return (
          <div>
            <div>
                <textarea type="text" id="editor" className="editor" value={this.state.markdownText} onChange={this.updatePreview}/>
            </div>
            <div>
                <h2 className="heading">Preview</h2>
                <Preview markdown={this.state.markdownText} />
            </div>
          </div>
      )
    }
  }


export default Editor;