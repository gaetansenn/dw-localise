# dw-localise
A localise module to synth locale with NuxtJS

## Install

Add package `yarn add @dewib/dw-localise`

## Usage

Add the module to your `nuxt.config.js`

```js
modules: {
  '@dewib/dw-localise'
},

// Your localise configuration
localise: {
  filter: ['!ios-only,!ios-infoplist,!android-only'],
  token: process.env.LOCO_API_KEY,
  path: path.resolve(__dirname, 'static/i18n'),
  disabled: process.env.LOCO_DISABLED
}
```

## Config

Localise module handle four parameters.

`filter`: used to filter with tags `https://localise.biz/api/docs/export/exportall#query`<br/>
`token`: the localise token to export the locales<br/>
`path`: where the locales will be writen<br/>
`disabled`: in case you don't need to sync it from localise server<br/>

```js
loco: {
  filter: ['!ios-only,!ios-infoplist,!android-only'],
  token: process.env.LOCO_API_KEY,
  path: path.resolve(__dirname, 'static/i18n'),
  disabled: process.env.LOCO_DISABLED
}
```