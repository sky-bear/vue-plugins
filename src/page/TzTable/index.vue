<template>
  <div class="table-pagination">
    <div class="table-list">
      <el-table
        ref="tzTable"
        v-loading="loading"
        v-bind="$attrs"
        v-on="$listeners"
        class="tzTable"
      >
        <el-table-column
          v-for="(item, index) of _columns"
          :key="`${item.prop}_${index}`"
          :align="item.align || 'center'"
          v-bind="item"
          :fixed="fixedColumns(item)"
        >
          <template
            v-if="item.slotHeaderName"
            v-slot:header
          >
            <slot :name="item.slotHeaderName" />
          </template>

          <template
            v-slot:default="{ store, row, $index, column }"
            v-if="!item.formatter && !item.type"
          >
            <slot
              v-if="item.slotName"
              :name="item.slotName"
              :row="row"
              :index="$index"
              :column="column"
              :store="store"
            />
            <span v-else>
              <template>{{ row[item.prop] }}</template>
            </span>
          </template>
          <template
            v-slot:default="{ store, row, $index, column }"
            v-else-if="item.type && item.slotName"
          >
            <slot
              :name="item.slotName"
              :row="row"
              :index="$index"
              :column="column"
              :store="store"
            />
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      v-if="page"
      class="pagination"
      @current-change="handleChange"
      @size-change="handleSizeChange"
      :current-page="page.pageNum"
      :page-size="page.pageSize"
      :total="parseInt(page.total)"
      :page-sizes="pageSizes"
      layout="total, sizes, prev, pager, next, jumper"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
// import { IPagination } from './types'

@Component({
  name: 'TablePagination'
})
export default class TablePagination extends Vue {
  @Prop(Boolean) private loading!: boolean // 加载状态

  @Prop(Array) private columns!: any[] // columns 列表

  @Prop({ type: [Object, Boolean], default: () => {} }) private page!: any

  @Prop({ type: Array, default: () => [10, 20, 50, 80, 100, 120, 150] })
  private pageSizes!: number[]

  @Prop({ type: Array, default: () => [] }) private hideProps!: string[]

  @Emit('pageChange')
  handleChange(pageNum: number | string) {
    return {
      pageNum,
      pageSize: typeof this.page === 'object' ? this.page.pageSize : 20
    }
  }

  @Emit('pageChange')
  handleSizeChange(pageSize: number | string) {
    return { pageNum: 1, pageSize }
  }

  get _columns() {
    return this.columns.filter(item => !this.hideProps.includes(item.prop))
  }

  // 是否定位
  fixedColumns(column: any) {
    if (column.fixed) {
      return column.fixed
    }
    if (column.prop === 'operate') {
      return 'right'
    }
    return false
  }
}
</script>

<style lang="scss" scoped>
.table-pagination {
  .pagination {
    margin-top: 10px;
    text-align: right;
  }
}
</style>
