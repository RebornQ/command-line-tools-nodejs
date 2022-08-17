# Command Line Tools by NodeJS

## Unescape JSON

It's for converting all JSON strings in JSON to JSON Object or JSON Array.

etc.

```json
{
  "json":  {
    "json-object": {
      "p1": "p1-data"
    },
    "json-array-string": "[ \"data1\", \"data2\" ]",
    "json-object-string": "{ \"param1\": \"1\", \"param2\": \"2\" }"
  } 
}
```

It can be converted to this:

```json
{
    "json": {
        "json-object": {
            "p1": "p1-data"
        },
        "json-array-string": [
            "data1",
            "data2"
        ],
        "json-object-string": {
            "param1": "1",
            "param2": "2"
        }
    }
}
```

### build

```shell
yarn run pkg-unescape-json
```

### Run

```shell
yarn run unescape-json
```

## Thanks

- [将Node.js项目打包为一个可执行文件](https://zhuanlan.zhihu.com/p/66411743)
- [@vercel/pkg](https://github.com/vercel/pkg)
- [node之readline(逐行读取)](https://www.jianshu.com/p/02c93c8e8977)
- [node.js怎么读取多行输入](https://segmentfault.com/q/1010000010616328)
- [用node.js做编程题](https://segmentfault.com/a/1190000010715910)
- [NodeJS的 按行读取（readline）模块，某种情况下，无法终止读取？（close方法不生效）](https://segmentfault.com/q/1010000019048693)