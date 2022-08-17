const args = require('minimist')(process.argv.slice(2))
const fs = require('fs')
// const args = process.argv.slice(2)
// const input = args[0]
// if (args < 0 || !input) {
//     throw new Error("请输入参数！")
// }
// 命令行参数解析 https://segmentfault.com/q/1010000000367285
let help = args['help']
if (help !== undefined) {
    console.log("用法：")
    console.log("unescape-json.exe [ --out={JSON输出文件路径} ]")
    return;
}

let outPath = args['out'];
// TODO 优化：暂时强制输出 output.json，右面有需要再允许自定义开启输出文件还是直接在控制台输出内容
if (outPath === undefined || outPath === '') {
    outPath = 'output.json'
}

const unescapeJson = (s) => {
    let json = JSON.parse(s)
    if (Array.isArray(json)) {
        unescapeJSONArray(json)
    } else {
        unescapeJSONObject(json)
    }
    return json;
};

/**
 * 处理 JSON 对象
 *
 * @param o json 对象
 */
function unescapeJSONObject(o) {
    Object.keys(o).forEach((value, index, array) => {
        try {
            let jsonValue = o[value];
            if (typeof jsonValue === 'string' && isNaN(Number(jsonValue))) {
                o[value] = JSON.parse(jsonValue);
            }
            if (typeof o[value] === 'object') {
                unescapeJSONObject(o[value])
            } else if (Array.isArray(o[value])) {
                unescapeJSONArray(o[value])
            }
        } catch (e) {
        }
    })
}

/**
 * 处理 JSON 数组
 *
 * @param arr json 数组
 */
function unescapeJSONArray(arr) {
    arr.forEach(value => {
        if (typeof value === 'object') {
            unescapeJSONObject(value)
        }
    });
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
if (outPath !== undefined) {
    console.log("处理后的内容将输出到：" + outPath + '\n')
}
readline.question(`请输入 JSON 字符串（可右键粘贴）: \n`, input => {
    if (!input) {
        throw new Error("请输入参数！")
    }
    let resultJson = unescapeJson(input);
    let json = JSON.stringify(resultJson, null, 4)
    if (outPath !== undefined) {
        fs.writeFile(outPath, json, err => {
            if (err) {
                console.error(err);
            } else {
                // 文件写入成功。
                console.log("\n处理结果已输出到：" + outPath)
            }
            close()
        })
    } else {
        console.log("\n转换结果：")
        console.log(json)
        close()
    }
})

function close() {
    readline.question("\n执行完毕，按回车结束...", input => {
        readline.close();
    })
}

readline.on('close', function() {
    process.exit(0); // 退出当前进程
})
