import { defineConfig } from 'dumi';
const repo = 'components_lib_demo';

export default defineConfig({
  title: 'tf-components',
  hash: true,
  // history: {
  //   type: 'browser',
  // },
  // mode: 'site',
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  favicon: `/${repo}/images/logo.png`,
  logo: `/${repo}/images/logo.png`,
  outputPath: 'docs-dist',
  description: '组件库demo',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  // mfsu: {},
  // webpack5: {},
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
