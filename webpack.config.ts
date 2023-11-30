import webpack from 'webpack'
import { webpackConfig } from './config/build/webpackConfig'
import { BuildEnv, BuildPaths } from './config/build/types/config'
import path from 'path'


export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'dist'),
  }

  const mode = env.mode || 'development'
  const isDev = mode === 'development'

  const config: webpack.Configuration = webpackConfig({
    mode,
    paths,
    isDev,
  })

  return config
}
