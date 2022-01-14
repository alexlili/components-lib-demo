import { defineConfig } from 'dumi';
const repo = 'components_lib_demo';

export default defineConfig({
  title: 'tf-components',
  hash: true,
  mode: 'site',
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  favicon: '/images/logo.png',
  logo: '/images/logo.png',
  outputPath: 'docs-dist',
  description: '组件库demo',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  // analyze: {
  //   analyzerMode: 'server',
  //   analyzerPort: 8888,
  //   openAnalyzer: true,
  //   // generate stats file while ANALYZE_DUMP exist
  //   generateStatsFile: false,
  //   statsFilename: 'stats.json',
  //   logLevel: 'info',
  //   defaultSizes: 'parsed', // stat  // gzip
  // }
  // more config: https://d.umijs.org/config
});
