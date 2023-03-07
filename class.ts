
interface Employee{
    name: string
    salary: number
    bonus?: number
}

class EmplImpl implements Employee{
    //显式实现接口添加implements关键词跟接口名称
   private allocatedbonus?: number
    constructor(public name: string, public salary: number) {}
    //字段的定义可以简化写
    set bonus(v: number){
       this.allocatedbonus =v
    }//设置和获取allocatedbonus的值
    get bonus(){
       return this.allocatedbonus || 0
    }
}

class Manager extends EmplImpl {
    //类的继承
private reporters: EmplImpl[]
    //初始化 reporters函数
    constructor(name: string, salary: number) {
    //定义构造函数
        super(name,salary)
        //通过super调用基类的字段
        this.reporters = []
    }
    addReporter(e: EmplImpl) {
    this.reporters.push(e)
        //将reportes的字段添加给addReporter方法
    }
}

const emplImpl = new EmplImpl('jhon', 9000)
const emp1: Employee = emplImpl

//定义接口
interface Service {
    login(): void
    getTrips(): string
    getLic(): string
    startTrip(): void
    updateLic(lic: string): void
}
//实现接口
class RPCSerice implements Service {
    //显式实现,不推荐使用,推荐隐式实现
    getLic(): string {
        return "";
    }

    getTrips(): string {
        return "";
    }

    login(): void {
    }

    startTrip(): void {
    }

    updateLic(lic: string): void {
    }

}
interface LoginService{
    login(): void
}//使用者进行定义接口并使用隐式实现
const page ={
    service: new RPCSerice() as LoginService,
    onLoginButtonClicked(){
        this.service.login()
    },
    //使用接口
}