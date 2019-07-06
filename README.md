# yagou-upload-file

> 

[![NPM](https://img.shields.io/npm/v/@yagoubi/upload-file.svg)](https://www.npmjs.com/package/yagoubi-upload-filee) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save yagoubi-upload-file
```

## Usage

```jsx
import React, { Component } from 'react'

import UploadFile from 'yagoubi-upload-file'

class Example extends Component {

  onError = error => {
    console.log(error);
  }
 onChange = files => {
    console.log(files);
  }
  render () {
    return (
      <UploadFile
        onError={this.onError}
        onChange={this.onChange}
      />
    )
  }
}
```
### props
***All props are not require***
| props  |  type  | description  |   
|---|---|---|
|  label |  string  |  the label that should diplay in upload button  |   
|  accepts |  array of string    | array of accepted  type of file ['image/png', '.pdf', 'audio/*', ...]  |   
|  multiple | boolen     |  multifile or not |   
| maxFiles  |    number  |  if multiple you can add the maximum of number of files   |   
|maxFileSize |    number  |  maximum file size  |   
| minFileSize    |   number |  minimum file size |   
|  color |  string    |  the color of the upload button  |   
|  onError |  method    |   executing  when an error happen|   
|  onChange |   method   |  executing when file uploaded |   


## License

MIT © [yagoubi abdelkader](https://github.com/yagoubigithub)
