<!-- 销售总额 -->
<template>
	<div>
		<CommonCard title="累计销售额" value="1123">
			<template>
				<div class="compare">表哥</div>
			</template>
			<template v-slot:footer>
				<div><span>昨日销售额</span> <span class="money">¥ 234234234234</span></div>
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
.compare {
	height: 100%;
	background: yellow;
}
span {
	font-size: 12px;
}
.money {
	margin-left: 5px;
	color: #333;
	font-weight: bold;
}
</style>
