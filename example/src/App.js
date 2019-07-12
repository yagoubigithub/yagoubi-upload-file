import React, { Component } from "react";

import UploadFile from "yagoubi-upload-file";

export default class App extends Component {
  render() {
    return (
      <div>
        <UploadFile multiple id="fileupload" />
      </div>
    );
  }
}
