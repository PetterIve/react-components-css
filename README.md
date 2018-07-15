# React CSS icons
 
React wrapper for pure CSS icons is inspired by Wenting Zhang's [CSS Icon](https://cssicon.space/#/) 
project, also found on [GitHub](https://github.com/wentin/cssicon).

Some CSS is optimized for smoother transitions.
 
## [Live demo/explorer](https://petterive.github.io/react-css-icons/)

`$ npm install --save react-css-icons`

## Table of content
1. [Usage](#Usage)
1. [`initCss()`](#`initCss()`)
1. [`<Icon />`](#`<Icon />`)
1. [`<TransitionIcon />`](#`<TransitionIcon />`)


## Usage
```
import { Icon, IconName, initCss } from 'react-css-icons';
 
initCss(); // Call this if you don't want to override with your own styles
...
render () {
  return (
      <div>
        <Icon iconName={IconName.CHAT} className="custom-icon-classname" />
        <IconToggle normalIconName={IconName.PIN} toggledIconName={IconName.CHAT}/>
        <TransitionIcon iconNames={[IconName.TV, IconName.LAPTOP, IconName.TABLET, IconName.MOBILE]} />
      </div>
  )
}
```

`initCss` must be invoked in order to set up the css. If you want to override scss variables 
(see ovverriding sass) this must be done before invoking the function. This only needs to be done once,
suggestively in the root App file of your application.

The icons are adjusted to the `box-sizing: border-box` model.

## `initCss()`
Call this function to set up the provided css files, e.g. in your `<App>` component. Should only be called
once.

## `<Icon />`
Name        | Type          | Description
:---        | :---          | :---
className   | string?       | Will be added to the container div.
hoverable   | boolean?      | Icon will scale up by 1.1 when hovered if set.
iconName    | IconName      | The name of the icon.
onClick     | () => void    | If passed, the cursor will also be a pointer when hovering the icon.
transition  | boolean?      | Adds transition to the icon's css if true.

## `<TransitionIcon />`
Name        | Type          | Description
:---        | :---          | :---
iconNames   | IconName[]    | List of the IconNames to transition between
interval    | number?       | How fast to transition. Defaults to 2000ms.

## `<ToggleIcon />`
Name            | Type          | Description
:---            | :---          | :---
normalIconName  | IconName      | The icon name when the icon is not toggled (default state).
toggledIconName | IconName      | The icon name when the icon is toggled.
isToggled       | boolean?      | Pass this to make the toggle a controlled element.
onToggled       | () => void    | Optional callback if you want to respond to the toggle event. 


## Development
```typescript
npm link
cd example
npm link react-css-icons
npm start
```

### Building the library
`npm run build`

Gulp is handling the build process, see `gulpfile.js`.