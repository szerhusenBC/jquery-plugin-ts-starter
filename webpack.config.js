function buildConfig(env, argv) {
    const profile = (argv.mode === "development") ? "dev" : "prod"
    return require('./config/webpack.' + profile + '.config.js')({env: env})
}

module.exports = buildConfig;