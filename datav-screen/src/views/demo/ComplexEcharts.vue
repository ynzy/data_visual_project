<!--  -->
<template>
  <div style="width:100%;height:100%">
    <!-- <GdpTimelineChart /> -->
    <JiangsuMapWarning />
  </div>
</template>

<script>
import GdpTimelineChart from '@/components/GdpTimelineChart/index.vue'
import JiangsuMapWarning from '@/components/JiangsuMapWarning/index.vue'
export default {
  name: '',
  components: { GdpTimelineChart, JiangsuMapWarning }
}
</script>
<style lang="scss" scoped></style>
