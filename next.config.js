/** @type {import('next').NextConfig} */

const repo = 'my-portfolio'
const assetPrefix = ''
const basePath = ''

module.exports = {
    output: 'export',
    assetPrefix: assetPrefix,
    basePath: basePath,
    images: {
        unoptimized: true
      },
    webpack: (config, options) =>
    {
        config.module.rules.push({
            test: /\.pdf$/i,
            type: 'asset/source'
        })
        

        return config
    },
}