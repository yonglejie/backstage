## dev
## 起步
### 文件目录结构
pages       页面
components  组件
style       样式
utils       公有的库或者插件
router      路由
store       redux




### 预处理语言
less

#### 安装less模块 
`npm install less less-loader`

默认不支持less
- 配置
  - config > webpack.config.js
  - 全局搜索 sass 改为 less

### UI框架
antd

### 基本配置
起别名


#### 服务器代理
webpack.config.js
1. 找到 proxy


### 共有库
axios 二次封装 
路由
react-redux


## 步骤
### 起步
1. 删除不必要的文件
2. 设置文件夹
3. 设置预处理语言 react预装sass 但我们使用less 因为框架antd 使用的是less