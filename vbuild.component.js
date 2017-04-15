module.exports = {
  entry: 'src/index.js',
  // then user can access `window.share` in browser as well
  moduleName: 'Share',
  html: false,
  minimize: false,
  sourceMap: false,
  filename: {
    js: 'vue-social-share.js'
  },
  // this will not copy ./static/** to ./dist/**
  copy: false
}
