<template>
  <div class="table">
    <h3>table</h3>
    <VETable
      @pageChange="handlePageChange"
      :data="tableList"
      :loading="loading"
      :page="pagination"
      :pageSizes="[20, 50, 80, 100, 120, 150, 200, 300]"
      border
      :columns="allColums"
      @selection-change="handleSelectionChange"
      ref="tzTable"
    >
      <template #head-testTime>

        <span>自定义头部-测试时间</span>
      </template>
      <template #testResult="{row}">
        <span>{{row.testResult}}</span>
      </template>
      <template #wechatNick="{row}">
        <span>{{row.wechatNick}}</span>
      </template>
      <template #testTime="{row}">
        <span>{{row.testTime}}</span>
      </template>
      <template #operate="{ }">
        <button>操作</button>
      </template>
    </VETable>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TablePagination from '@/plugins/Vue-Ele-Table/index.vue'
import { allColums } from './utils'

@Component({
  name: 'TableTest',
  components: {
    TablePagination
  }
})
export default class TableTest extends Vue {
  @Prop() private msg!: string
  private tableList: any[] = []
  private pagination = {
    pageNum: 1,
    pageSize: 20,
    total: 0,
    pages: 0
  }
  private multipleSelection: any = []

  private allColums = allColums

  private loading: boolean = false

  created() {
    const host = 'http://127.0.0.1:9999'
    this.loading = true
    fetch(`${host}/api/tableList`)
      .then(function(response) {
        return response.json()
      })
      .then(res => {
        console.log(res)
        const {
          data: { list, ...pageInfo }
        } = res
        this.tableList = list
        Object.assign(this.pagination, { pageInfo })
      })
      .finally(() => {
        this.loading = false
      })
  }

  handleSelectionChange(val: any) {
    console.log(val)
    this.multipleSelection = val // v1.2.3
  }

  handlePageChange({ pageSize, pageNum }) {
    console.log(pageSize, pageNum)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
