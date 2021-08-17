## 安装依赖

```
npm install
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