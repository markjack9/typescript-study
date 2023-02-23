enum HttpStatus {
    OK= 200,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR= 405,
}

function processHttpStatus(s: HttpStatus){
    if (s === HttpStatus.NOT_FOUND){
        console.log('Not Found')
    }else {
        console.log('OK')
    }
    console.log(HttpStatus[s])

}
processHttpStatus(HttpStatus.NOT_FOUND)

//定义数组
let a: number[] = [1,2,3]
let b: string[] = ['a','b','c']
console.log(a[2],b[1],a[-1],b[4])
//数组中越界时出现undefined

if (a.length !== 0){
    //判断数组是否为空
    console.log('this is a value')
} else {
    console.log('this is a null value')
}
const d: number[] = []
//定义一个独有的数组，不被其他数组改变

let c: number[] = []
//从右边进行插入数据
c.push(1)
c.pop()
//清空数组
c.push(2)
c.push(3)
c.unshift(0)
c.unshift(-1)
//从左边进行插入数据
c.shift()
//去除左边第一个元素
c.unshift(-2)
console.log(c)


const e: number[] = [1,2,3,4,5,6,7,8,9,10]

console.log(e.slice(2,5),e.slice(3))
//数组中的取出元素
e.splice(3,2)
console.log(e)
//splice进行删除元素，从第三个开始删除两个

const deleted = e.splice(3,2,2,30,40)
//splice进行删除元素，从第三个开始删除两个，添加3个元素
console.log(e,'delete',deleted)

console.log('index of 2', e.indexOf(2))
//从左往右检索数组中的元素2
console.log('index of 2', e.indexOf(2, 2))
//索引数组中的元素2，从指定位置检索
console.log('lastOf of 2',e.lastIndexOf(2))
//从右往左检索元素2的位置


e.sort()
console.log(e)

const f = [1,2,3]
const [f1,f2]= f
console.log(f2,f1)
//元组

console.log('a,b,c,1,2,3'.split(','))
//字符串元素转成数组，字符串类型

const g = [1,2,3,4].join(' ')
//字符串分割为单个元素，使用空格间隔
console.log(g)

