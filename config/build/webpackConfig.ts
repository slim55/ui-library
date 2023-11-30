import { type BuildOptions } from './types/config'
import type webpack from 'webpack'
import { plugins } from './plugins'
import { loaders } from './loaders'
import { resolvers } from './resolvers'

export function webpackConfig (options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: 'index.js',
      path: paths.build,
      libraryTarget: 'umd',
      clean: true
    },
    plugins: plugins(options),
    module: {
      rules: loaders()
    },
    resolve: resolvers(),
    externals: {
      react: 'react',
      'styled-components': {
        commonjs: 'styled-components',
        commonjs2: 'styled-components',
        amd: 'styled-components'
      }
    },
    devtool: isDev ? 'inline-source-map' : undefined
  }
}
