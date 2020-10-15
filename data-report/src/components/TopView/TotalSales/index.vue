<!-- 销售总额 -->
<template>
  <div>
    <CommonCard title="累计销售额" :value="salesToday">
      <template>
        <div class="compare-wrapper">
          <div class="compare">
            <span>日同比</span>
            <span class="emphasis">{{ salesGrowthLastDay }}</span>
            <div class="increase"></div>
          </div>
          <div class="compare">
            <span>月同比</span>
            <span class="emphasis">{{ salesGrowthLastMonth }}</span>
            <div class="decrease"></div>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <span>昨日销售额</span>
        <span class="emphasis">{{ salesLastDay }}</span>
      </template>
    </CommonCard>
  </div>
</template>

<script>
import commonCardMixin from '../../../mixins/commonCardMixin'
import commonDataMixin from '../../../mixins/commonDataMixin'

export default {
  mixins: [commonCardMixin, commonDataMixin],
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
