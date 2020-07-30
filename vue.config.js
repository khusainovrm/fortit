const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-proposal-class-properties']
      }
    }
  ]

  if (isDev) {
    loaders.push('eslint-loader')
  }

  return loaders
}

// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
    ],
    devtool: isDev ? 'source-map' : false,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: jsLoaders()
        }
      ]
    }
  }
}
