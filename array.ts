const  a = [1,2,3,4]

const b = a.map(v => v)
//遍历数组a
console.log(b)

const b1 = a.map(v => v*v)
//计算数组中元素的平方
console.log(b1)


function reduce(b: number[], r: (s: number, v: number)=> number){
    //reduce的原理
    let previousValue = 0
    //默认以前的值
    b.forEach(currenValue => {
        //遍历当前的值
        previousValue = r(previousValue, currenValue)
        //以前的值等于以前的值和当前的值
    })
    return previousValue
    //返回以前的值
}

const b2 = a.map(v => v*v)
const sum = b2.reduce((s,v)=> s+v)
//计算数组元素的平方和
console.log(sum)

