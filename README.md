# Command Line Tools for NodeJS

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