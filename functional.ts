//函数作为一等公民
let conparNumber = (a: number,b: number) => a-b
//lambada表达式，javascript/typesrcipt：箭头函数
let a = [1,5,6,7,2,3,8,9,10]
a.sort(conparNumber)
//排序
console.log(a)

//函数中的返回值为函数,使用对象类型参数解释boolean值的返回
function CNumber(p: {smallerFirst: boolean}) {
    if (p.smallerFirst === true ) {
        return (c: number,d: number) => c-d
    }else {
        return (c: number,d: number) => d-c
    }
}

//高阶函数将收到的函数发送给其他人

function loggingComparer(
    logger: (c: number, d: number ) => void,
    //闭包处理,带参数c,d
    comp: (c: number, d: number ) =>  number ){
    //函数comp的参数c,d返回类型是number，返回的是函数体的logger和comp的c,d参数
    return (c: number, d: number ) => {
        logger(c,d)
        return comp(c,d)
    }
}

function process_array(c: number[]){
    //process_array的参数是数组C
    let count_array = 0
    const logger =  (c: number, d: number ) => {
        //logger函数的参数c,d的返回的内容是打印的日志和变量count_array的值
        console.log('comparing', c,d)
        count_array++ //自由变量
    }
    const comp = CNumber({smallerFirst: true})
    //comp函数调用CNumber函数
    c.sort(loggingComparer(logger,comp))
    //给c这个数组进行排序
    return count_array
    //返回排序进行比对的次数
}
let c = [1,5,6,7,2,3,8,9,10]

const count_array1 = process_array(c)
const count_array2 = process_array(c)
console.log(c)
console.log('count_array', count_array1,count_array2)


function isGoodNumber(goodFactor: number, array_value: number){
    //函数用来获取参数为偶数的值
    return array_value % goodFactor === 0
    //求出偶数
}

function filterArray(array: number[], f: (sx: number) => boolean) {
    //函数的数组定义一个参数
    return array.filter(f)
    //返回过滤的信息
}

const GOOD_FACTOR = 2
//定义一个常量


function partiallyApply (
    f: (a: number, b: number) => boolean,
    a: number) {
    return (b: number) => {
        return f(a, b)
        //定义一个函数有A和B两个值，返回的参数是布尔值和参数a
        //参数a是自由变量
    }
}

console.log(
    filterArray(c,partiallyApply(isGoodNumber,GOOD_FACTOR)),
    filterArray(c,(xx) => isGoodNumber(GOOD_FACTOR,xx))
    //调用filterArray函数来过滤c数组中的偶数,传给isGoodNumber函数所需的第二个函数是boolean
)

