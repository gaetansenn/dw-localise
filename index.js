const prefix = ['[localise-module]:']

const fs = require('fs').promises
const https = require('https')
const logger = require('consola').withTag(prefix)

module.exports = async function (moduleOptions) {
  if (!this.options._build) return

  const { localise = {} } = Object.assign({}, this.options)
  Object.assign(localise, moduleOptions)

  const parameters = {}

  if (localise.fallback) parameters.fallback = localise.fallback
  if (localise.filter) parameters.filter = localise.filter

  let path = '/api/export/all.json'

  if (Object.keys(parameters).length) path = `${path}?${(new URLSearchParams(parameters)).toString()}`

  let response = await new Promise((resolve, reject) => {
    https.get({
      protocol: 'https:',
      hostname: 'localise.biz',
      path,
      method: 'GET',
      headers: {
        Authorization: `Loco ${localise.token}`
      }
    }, (res) => {
      let data = ''

      res.on('data', (chunk) => {
        data += chunk
      })

      res.on('end', () => {
        resolve(JSON.parse(data))
      })
    }).on('error', reject)
  })

  if (localise.locale) {
    response = {
      [`${localise.locale}`]: response
    }
  }

  await Promise.all(Object.keys(response).map(async (locale) => {
    logger.info(`${prefix} sync ${locale} locale`)

    await fs.writeFile(`${localise.path}/${locale}.json`, JSON.stringify(response[locale]))
  }))

  logger.info(`${prefix}: sync done`)
}
