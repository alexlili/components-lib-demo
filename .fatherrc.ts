export default {
  entry: 'src/index.js',
  doc: {
    title: 'components_lib_demo',
    themeConfig: { mode: 'light' },
    base: '/components_lib_demo',
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  // cssModules: true,
  extractCSS: true,
  lessInBabelMode: true,
  runtimeHelpers: true,
  esm: 'babel',
  cjs: 'babel',
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6'],
  },
};
