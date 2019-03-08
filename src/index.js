import WeiboShareButton from './WeiboShareButton.vue'

WeiboShareButton.install = Vue => {
  Vue.component('WeiboShareButton', WeiboShareButton)
}

if (typeof window !== 'undefined' && window.vue) {
  window.WeiboShareButton = WeiboShareButton
}

export { WeiboShareButton };
