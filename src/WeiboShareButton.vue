<template>
  <div>
    <ShareButton network="weibo">
      <WeiboLogo/>
    </ShareButton>
  </div>
</template>

<script>
import ShareButton from "./ShareButton";
import WeiboLogo from "./assets/weibo.svg";
export default {
  name: "weibo-share-button",
  components: {
    ShareButton,
    WeiboLogo
  },
  data() {
    return {};
  },
  props: {}
};
</script>
