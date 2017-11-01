process.nextTick(function () {
    console.log('nextTick1')
})

process.nextTick(function () {
    console.log('nextTick2')
})

setImmediate(function () {
    console.log('setImmediate1')
    process.nextTick(function () {
        console.log('强势插入')
    })
})

setImmediate(function () {
    console.log('setImmediate2')
})

new Promise(function(resolve, reject) {
    resolve(1)
}).then(function (val) {
    console.log(val)
})

console.log('正常执行')