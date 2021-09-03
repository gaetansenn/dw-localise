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
  fallback: 'fr',
  locale: 'fr',
  token: process.env.LOCO_API_KEY,
  path: path.resolve(__dirname, 'static/i18n'),
  disabled: process.env.LOCO_DISABLED,
}
```

## Config

Localise module handle four parameters.

`filter`: used to filter with tags [see more](https://localise.biz/api/docs/export/exportall#query)<br/>
`fallback`: fallback locale for untranslated assets, specified as short code. e.g. en or en_GB [see more](https://localise.biz/api/docs/export/exportall#query)<br/>
`locale`: used to handle case you have only one locale and due to lack of informations from localise.
`token`: the localise token to export the locales<br/>
`path`: where the locales will be writen<br/>
`disabled`: in case you don't need to sync it from localise server<br/>