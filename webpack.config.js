function buildConfig(env) {
    return require('./config/webpack.' + env + '.config.js')({env: env})
}

module.exports = buildConfig;