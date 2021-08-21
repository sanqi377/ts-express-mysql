## 安装依赖

```
npm install
```

## 编译命令

```
npm run build
```

编译在 `./dist` 目录下

## 运行命令

```
npm run dev
```

## 目录结构

```
.
├── app.ts # 主入口文件
├── package.json
├── config # 配置文件夹
|    └── setting.ts # 基本配置
├── controller # 控制器文件夹
│    └── index
|       └── index.ts
├── model # 数据库操作
│    └── index
|       └── index.ts
├── middleware # 中间件
|    └── cors.ts
│    └── index
|       └── checkLogin.ts
├── util # 公共
│    └── util.ts
```

## Mysql 命令

### 文件引入

```js
const { db } = require('util/mysqlInit') 
```

### 查询

#### 单条查询

```js
db('table').find()
```

#### 查询全部

```js
db('table').select()
```

### 查询不等于

```js
db('table').whereNo({status:1}).select()
```

可与 `where` 连用

```js
db('table').where({id:1}).whereNo({status:1}).select()
```

### 模糊查询

```js
db('table').like({name:'%叁柒%'}).select()
```

### 更新

```js
db('table').where({id:1}).update({name:'叁柒',sex:'男'})
```

### 新增

```js
db('table').insert({name:'叁柒',sex:'男'})
```

### 删除

```js
db('table').where({id:1}).delete()
```