/** @type {import('next').NextConfig} */

const repo = 'my-portfolio'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

module.exports = {
    output: 'export',
    assetPrefix: assetPrefix,
    basePath: basePath,
    experimental: {
        serverActions: true,
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