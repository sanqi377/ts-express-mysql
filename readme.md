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

### 更新

```js
db('table').where({id:1}).update({name:'叁柒',sex:'男'})
```

### 删除

```js
db('table').where({id:1}).delete()
```