<!--  -->
<template>
	<div class="top-view">
		<el-row :gutter="20">
			<el-col :span="6">
				<el-card shadow="hover">
					<TotalSales />
				</el-card>
			</el-col>
			<el-col :span="6">
				<el-card shadow="hover">
					<TotalOrders />
				</el-card>
			</el-col>
			<el-col :span="6">
				<el-card shadow="hover">
					<TodayUsers />
				</el-card>
			</el-col>
			<el-col :span="6">
				<el-card shadow="hover">
					<TotalUsers />
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import TotalSales from './TotalSales'
import TotalOrders from './TotalOrders'
import TodayUsers from './TodayUsers'
import TotalUsers from './TotalUsers'
export default {
	data() {
		return {}
	},
	methods: {},
	mounted() {},
	components: {
		TotalSales,
		TotalOrders,
		TodayUsers,
		TotalUsers
	}
}
</script>

<style lang="scss" scoped>
/* @import url(); 引入css类 */
</style>
