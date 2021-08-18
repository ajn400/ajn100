const defaultSettings = require('./src/setting')

const name = defaultSettings.title || 'vue Study'
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    configureWebpack: {
        name: name,
        resolve: {
            alias: {
                '@': resolve('src'
                )
            }
        }
    },
    devServer:{
        host:'localhost',
        port:1234,
    }
}
