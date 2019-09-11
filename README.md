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

按需引入  线上环境一定要按需引入
用的时候找官方文档 在 `create-react-app` 中使用

安装 `npm install antd`

全局引入
- 在 index.js 引入样式 `import "antd/dist/antd.css"`  

### 基本配置

#### 起别名
- webpack.config.js 
- 全局搜索 alias
- 设置的例子 `'style':path.join(__dirname,'../src/style'),`
- 设置的例子 `'style':path.resolve(__dirname,'../src/style'),`
- 设置完成后进行测试

#### 服务器代理
webpackDevServer.config.js
1. 找到 proxy
2. 设置
```js
proxy:{
  '/api':{
    target:'http://www.baidu.com',  //设置目标路径
    changeOrigin:true,              //是否允许改变源
    pathRewrite:{
      '^/api':''                     //标识符替换
    }
  }
}
```


### 共有库
axios 二次封装 
路由
react-redux


## 步骤
### 起步
1. 删除不必要的文件
2. 设置文件夹
3. 设置预处理语言 react预装sass 但我们使用less 因为框架antd 使用的是less
4. UI框架
   - yarn 和 npm 的区别
      1. 下载过的会保存在缓存
      2. npm 初始化安装后, 可以使用yarn, 反之则不行