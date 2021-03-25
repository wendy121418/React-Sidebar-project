import React, { Component } from "react";
import { EditorState, convertToRaw  } from "draft-js";
import draftToHtml from 'draftjs-to-html';
import { Editor } from "react-draft-wysiwyg";
import "../styles/WysiwygEditor.scss"

export default class WysiwygEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div className="editor">
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
        />
        {/* <textarea
         className="h-24 w-full"
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
      </div>
    );
  }
}
