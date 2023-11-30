import type webpack from 'webpack'

export function loaders (): webpack.RuleSetRule[] {
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: [{
      loader: 'ts-loader',
      options: {
        configFile: 'tsconfig.webpack.json'
      }
    }],
    exclude: /node_modules/
  }

  return [
    babelLoader,
    typescriptLoader
  ]
}
