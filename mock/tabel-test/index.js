module.exports = {
  "/api/tableList": {
    data: {
      "list|10": [
        {
          id: "@inc(10)",
          name: "@cstr(2)",
          nickName: "@cstr(4)",
          account: "@inc(10000)",
          prop: "@inc(10000)",
          qq: "@inc(10000)",
          wechat: "微信-@cstr(4)",
          wechatNick: "微信昵称-@cstr(6)",
          "disable|1": [1, 2, 3],
          testTime: '@date("yyyy-MM-dd")',
          mobile: "123654864",
          "testResult|1": ["成功", "失败"]
        }
      ],
      pageSize: 50,
      total: 0,
      pages: 0,
      pageNum: 1
    },
    msg: null,
    platform: null,
    res: 100
  }
};
