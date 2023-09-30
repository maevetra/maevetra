/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    output: 'export',
    basePath: "/maevetra",
    webpack: (config, options) =>
    {
        config.module.rules.push({
            test: /\.pdf$/i,
            type: 'asset/source'
        })
        

        return config
    },
}