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
### `initCss()`
Call this function to set up the provided css files, e.g. in your `<App>` component. Should only be called
once.

### `<Icon />`
Name        | Type          | Description
---         | ---           | ---
className   | string?       | Will be added to the container div.
hoverable   | boolean?      | Icon will scale up by 1.1 when hovered if set.
iconName    | IconName      | The name of the icon.
onClick     | () => void    | If passed, the cursor will also be a pointer when hovering the icon.
transition  | boolean?      | Adds transition to the icon's css if true.