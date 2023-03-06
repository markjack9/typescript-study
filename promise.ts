function add(
    //回调函数
    a: number, b: number,
    callback: (res: number) => void): void {
    setTimeout(() => {
        callback(a + b)
    }, 2000)

}

add(2, 3, res => {
    console.log('2+3=', res)
    add(res,4,res2 => {
        console.log('2+3+4=', res2)
    })
})

//在前端程序中返回计算结果使用回调函数进行处理

function add2(a2: number, b2: number): Promise<number> {
return new Promise((resolve, reject) =>{
    //promise应用
    //使用resolve参数来返回给外部
    //使用reject返回错误
    if (b2 % 17 ===0){
        reject(`bad number: ${b2}`)
    }
    setTimeout(() => {
        resolve(a2 + b2)
    }, 2000)
})
}

add2(6,7).then(res => {
    console.log('6+7', res)
    return add2(res,4)
}).then(res => {
    console.log('6+7+4',res)
    return add2(res,17)
    //当b2参数为17时抛出错误
}).then(res => {
    console.log('6+7+17',res)
}).catch(err => {
    //接收regect的错误
    console.log('caught error', err)
})


Promise.all([add2(2,3),add2(4,5)]).then(res => {
    //使用promise.all函数实现，值为数组类型
    const [a2,b2] = res
    //使用元组展开
    console.log('result',a2,b2)
    return a2*b2
}).then(res => {
    console.log('final result',res)
})

async function calc(){

    try {
        const [a3,b3] = await  Promise.all([add2(2,3),add2(4,5)])
        //使用async-await语法，这样可以减少代码的使用量，错误处理使用try catch即可。
        console.log('2+3=',a3)
        console.log('4+5=',b3)
        return a3 * b3
    } catch (err){
        console.log('caught err',err)
        return undefined
    }
    }

calc().then(res =>{
    //calc函数返回的时Promise类型，可以直接使用.then
    console.log('final result', res)
})