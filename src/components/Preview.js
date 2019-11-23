import React from 'react';
import marked from 'marked';
import '../App.css';

  class Preview extends React.Component {
    
    createMarkup() {
      return { __html: marked(this.props.markdown) }
    }
    
    render() {
      return (
        <div id="preview" className="preview" dangerouslySetInnerHTML={this.createMarkup()}></div>
      )
    }
  }

export default Preview;