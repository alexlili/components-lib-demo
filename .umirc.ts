import { defineConfig } from 'dumi';
const repo = 'components_lib_demo';

export default defineConfig({
  title: 'components_lib_demo',
  hash: true,
  // history: {
  //   type: 'browser',
  // },
  // mode: 'site',
  metas: [
    {
      name: 'keywords',
      content: 'components, dumijs, lib, demo',
    },
    {
      name: 'description',
      content: '前端组件库demo',
    },
  ],
  fastRefresh: {},
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  favicon: `/${repo}/images/logo.png`,
  logo: `/${repo}/images/logo.png`,
  outputPath: 'docs-dist',
  description: '烤米莓笔欢迎您',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  targets: {
    ie: 10,
  },
  dynamicImportSyntax: {},
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
