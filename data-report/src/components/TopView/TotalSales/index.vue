<!-- 销售总额 -->
<template>
<div>
  <CommonCard title="累计销售额" value="¥ 54,032,530">
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">80.11% %</span>
          <div class="increase"></div>
        </div>
        <div class="compare">a
          <span>月同比</span>
          <span class="emphasis">132.90%</span>
          <div class="decrease"></div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日销售额</span>
      <span class="emphasis">¥ 30,000,000</span>
    </template>
  </CommonCard>
</div>
</template>

<script>
import commonCardMixin from '../../../mixins/commonCardMixin'

export default {
  mixins: [commonCardMixin],

  data() {
    return {}
  },
  methods: {},
  mounted() {},
  components: {}
}
</script>

<style lang="scss" scoped>
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.compare {
  display: flex;
  align-items: center;
  margin-top: 3px;
  font-size: 12px;
  color: #666;
}
</style>
