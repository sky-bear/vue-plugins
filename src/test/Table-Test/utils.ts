export const allColums: any[] = [
  { prop: 'id', type: 'selection', width: 50, align: 'center', selectable: (row: any) => row.disable !== 1, fixed: 'left' },
  { prop: 'nickName', label: '昵称', minWidth: 100 },
  { prop: 'name', label: '真实姓名', minWidth: 140, align: 'center', },
  { prop: 'account', label: '账号', minWidth: 140, align: 'center', },
  { prop: 'mobile', label: '电话', minWidth: 140, align: 'center', },
  { prop: 'qq', label: 'QQ号', minWidth: 140, align: 'center', },
  { prop: 'wechat', label: '微信', minWidth: 140, align: 'center', },
  { prop: 'wechatNick', label: '微信昵称', minWidth: 140, align: 'center', slotName: 'wechatNick' },
  { prop: 'testTime', label: '测试时间', minWidth: 180, align: 'center', slotName: 'testTime', slotHeaderName: 'head-testTime' },
  { prop: 'testResult', label: '测试结果', minWidth: 150, align: 'center', slotName: 'testResult' },
  { prop: 'operate', label: '操作', slotName: 'operate', minWidth: 200, align: 'center', },
]

/**
 * 定义表格每列数据
 * prop: prop，
 * label: 表头名
 * slotName: 自定义列表
 * slotHeaderName： 自定义表头
 * ...other  其他element-ui table-column上的属性
 */