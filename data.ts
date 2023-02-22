
const typedata = 'hello world!';
//定义一个常量typedata
console.log(typedata);
//打印出来这常量

let typedata_2 = 'world';
//定义一个变量typedata
typedata_2 = 'stream'
let typedata_3: number = 123456
let typebool: boolean = true
//变量可用再次赋值
console.log(typedata_2,typedata_3,typebool)


//literal type
let answer: 'yes'|'no'|'maybe' = 'maybe'
let httpstatus: 200 | 404 | 500 | 403  | '200' = '200'

answer = 'yes'

let s:string = answer
let s2:string = httpstatus
//编译器可用自动判断变量的数据类型
console.log(s,s2)
//变量也可以用于赋值

function f(s: 200 | 404 | 500 | 403  | '200') {
    let s3: string | number = s
    console.log(s3)

}
f(httpstatus)

let s4:undefined = undefined
let s5:any = 'sinfotek'
s5 = 123123

console.log(s4,s5)

function logi_crl(s: 200 | 404 | 500 | 403  | '200'| '403') {
    let statusStr = ''
    if (typeof s === 'number'){
        statusStr = s.toString()
        //转换s的数据类型为字符串
        //const statusNum = typeof s === 'string' ?
        //statusNum = parseInt(s) : s
    } else {
        statusStr = s
    }
   //一律使用===以及！==
    if (s === 200){
        console.log('ok')
    } else if (s === 404){
        console.log('no found')
    } else if (s === 500){
        console.log('server error')
    }else if (s === 403){
        console.log('address redirection')
    }else {
        console.log('unknown error')
    } //不用添加意外条件的判断，因为程序中不允许传该参数

}

logi_crl('200')
