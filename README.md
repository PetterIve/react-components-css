 # React CSS icons

React CSS icons is inspired by Wenting Zhang's [CSS Icon](https://cssicon.space/#/) project, also found 
on [GitHub](https://github.com/wentin/cssicon). 

The icons are optimized for better transitions.

## Installation
`$ npm install --save react-css-icons`

## Usage
```
import { Icon, IconName, initCss } from 'react-css-icons';
 
initCss();
...
render () {
  return (
    <Icon iconName={IconName.CHAT} className="custom-icon-classname" />
  )
}
```

`initCss` must be invoked in order to set up the css. If you want to override scss variables 
(see ovverriding sass) this must be done before invoking the function. This only needs to be done once,
suggestively in the root App file of your application.

The icons are adjusted to the `box-sizing: border-box` model.

## API
`initCss()`
The initCss function 