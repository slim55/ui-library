import webpack from 'webpack'
import { type BuildOptions } from './types/config'

export function plugins ({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin()
  ]
}
