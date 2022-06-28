let config = {
  namespace: 'vue-pc', // 必须设置，项目命名空间，以gitlab项目标识串为准，为解决同一个域名下面的本地存储问题，本地存储一律加上项目namespace-appId
  openUserCenter: true, // 是否开启账户中心登录
  clientCode: 'FA000802', // euaf平台客户端code，用于换取euaf平台cliengId（非集团账户中心clientId）
  devUserCenterInfo: {
    localUrl: 'http://172.18.126.108'
  },
  openRespondPlugin: false, // 是否开启自适应插件
  useEcharts: true // 是否使用echarts
}
module.exports = config