interface Employee {
    //创建一个接口,描述一个类型,可以不进行实现,但是需要满足接口中的结构
    //行尾可以不添加后缀
    readonly name: string
    //只读字段
    salary: number
    bonus?: number
    //updateBonus(p: number): void
    //接口中可以添加方法
}

const emp1: Employee ={
    name: 'jhon',
    salary: 9000,
   }

const emp2: Employee ={
    name: 'Mark',
    salary: 9000,
    bonus: 10000,

}

function  updateBonus(e: Employee, p: number){
    //调用接口
    if (!e.bonus){
        e.bonus = e.salary * p
    }
}

interface hasname{
    userid: number
    Equipment_type: string
}

interface Employee2 extends hasname {
    //接口拓展可以将两个接口拼接为一个大的
   name?: {
       first?: string
       last: string
   }
    salary: number
    bonus?: number
}


function hasBadName(e:Employee2){
    return e.name!.first?.startsWith('M')
    //可选字段的串联，非空断言
}

console.log(hasBadName({
    name: {
        first: 'jhon',
        last: 'smith',
    },
    salary: 8000,
    userid: 0o1,
    Equipment_type: 'pc',
}))
console.log(hasBadName({
    name: {

        last: 'smith',
    },
    salary: 8000,
    userid: 0o1,
    Equipment_type: 'pc',
}))


interface WxButton {
    visible: boolean
    enabled: boolean
    onClick(): void
}
interface WxImage {
    visible: boolean
    src: string
    width: number
    height: number
}

function processElement(e: WxButton| WxImage){
if ((e as any).onClick) {
    //类型的断言,告诉编译器类型
    const btn = e as WxButton
    btn.onClick()
}else {
    const img = e as WxImage
    console.log(img.src)
}
}

processElement({
    visible: true,
    enabled: true,
    onClick() {
        console.log('clicked')
    }
})