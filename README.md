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
| props  |  type  | description  |   
|---|---|---|
|  label |  string  |    |   
|  accepts |  array of string    |   |   
|  multiple | boolen     |   |   
| maxFiles  |    number  |   |   
|maxFileSize |    number  |   |   
| minFileSize    |   number |   |   
|  color |  string    |   |   
|  onError |  method    |   |   
|  onChange |   method   |   |   


## License

MIT © [yagoubi abdelkader](https://github.com/yagoubigithub)
