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
用的时候找官方文档 在 `create-react-app` 中使用

安装 `npm install antd`

全局引入
- 在 index.js 引入样式 `import "antd/dist/antd.css"`  
- 
按需引入  线上环境一定要按需引入
- 需要一个插件, 需要在 antd 官网获取
- 官网在 `create-react-app` 中使用查找 `使用 babel-plugin-import `
- 安装 `npm install babel-plugin-import`
- 

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
#### axios 二次封装 
- npm install axios
- npm 官网 查看 axios 拦截器
- utils > axios.js 将拦截器的代码黏贴
- 在axios.js 引入axios ,并抛出 axios
- 在index.js 引入, 挂载在 React 的 Component 原型上

#### 路由
- npm install react-router-dom
- src 目录下 设置 router.js 文件




#### react-redux
使用
- store 文件夹
  1. store.js
  2. state.js
  3. reducer.js
  4. actionCreator.js

## 步骤
### 起步
1. 删除不必要的文件
2. 设置文件夹
3. 设置预处理语言 react预装sass 但我们使用less 因为框架antd 使用的是less
4. UI框架
   - yarn 和 npm 的区别
      1. 下载过的会保存在缓存
      2. npm 初始化安装后, 可以使用yarn, 反之则不行

5. 起别名, 服务器代理 
6. axios 二次封装
7. 路由文件


### 组员开发
- git clone 
- 切到dev分支 再从 dev 分支分一个demo分支

#### pages设置
```
pages 
├── admin
│   ├── index.js
│   └── index.less
├── login
│   ├── index.js
│
│
│
  制表符  ├  │  └  ─
```






### 注事项
1. npm node 版本号保持一致