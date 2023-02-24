const emp1 = {
    name: {
        first: '三',
        last: '张'
    },
    gender: 'male' as 'male'|'female'|'other'|'unknown',
    salary: 8000,
    bonus: undefined as (number|undefined),
    performance: 3.5,
    badges: ['A','F'],
}

if (!emp1.bonus){
    emp1.bonus = emp1.salary * emp1.performance
}

//定义一个对象
console.log(`${emp1.name.last}${emp1.name.first} salary is ${emp1.salary}, and bonus is ${emp1.bonus} `)
console.log(emp1)
//调用字段中的内容

const s: string = JSON.stringify(emp1)
//转换称字符串
console.log(s)

const emp2 = JSON.parse(s)
console.log(`emp1 === emp2?`,emp1.name.first === emp2.name.first)
//any类型比较只能够手动定位到指定元素

//定义一个函数
function add(
    a: number,
    b: number,
    c?: number,
    //可选参数
    d: number=0,
    //参数默认值
    ...e: number[]
    //可变参数列表
): number{
let sum = a +b +(c||0) +d
    for (let i =0;i < e.length;i++){
        sum +=e[i]
    }
    return sum
}
console.log(add(2,3,4,5,6,7,8))

const number = [1,1,1,1,1]
//函数中参数引入数组
console.log(add(1,2,3,4,...number))


function sedRequest(ma:{
    //函数在定义时参数过多使用对象进行定义参数
    url: string,
    method: 'GET'|'POST'|'PUT',
    header: object,
    data: string,
    requireAuth: boolean,
    retry: boolean,
    retryTimeout: number,}){

}

sedRequest({
    //调用函数时参数调用比较明了
    url: 'http://www.baidu.com',
    method: 'GET',
    header: {contentType: 'application/json'},
    data: '{"name":"john"}',
    requireAuth: true,
    retry: true,
    retryTimeout: 30000})


const emp3 = {
    name: 'mark',
    Daily_salary: 300,
    monthly_salary: undefined as (number|undefined),
    income(){
        if (!emp3.monthly_salary){
            emp3.monthly_salary = emp3.Daily_salary * 22
        }
    },
}
emp3.income()
console.log(emp3)


function registerEmptloyee (p:any){
    //给对象进行定义方法
    return p
}
registerEmptloyee ({
    name: 'mark',
    Daily_salary: 300,
    monthly_salary: undefined as (number|undefined),
    income(){
        if (!this.monthly_salary){
            this.monthly_salary = this.Daily_salary * 22
        }
    },
})

