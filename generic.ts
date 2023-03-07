const a: Array<number> = []
//泛型的定义
a.push(2)
//约束参数类型
console.log(a)

const p =new Promise<string>((resolve, reject) => {
    resolve('Mark')
})

interface HasWeight {
    weight: number
}

class MyArray<T extends HasWeight> {
    //自定义参数类型T,拓展HasWeight参数类型
    data: T[] = []
    add(t: T) {
        this.data.push(t)
        //push的类型就变成了t
    }
    map<M>(f: (v: T) => M): M[] {
        //map的参数输入是T类型,返回的参数类型是位置的M类型,返回的是M类型的数组
        //因为不知道map返回的类型是什么,所以泛型为未知类型M
        return this.data.map(f)
    }
    sortByWeight(){
        this.data.sort((a,b) => a.weight - b.weight)
        //进行排序
    }
    print(){
        console.log(this.data)
    }
}

class WeightNumber {
    constructor(public weight: number) {}
    //定义一个类
}

const b = new MyArray<WeightNumber>()
b.add(new WeightNumber(1000))
b.add(new WeightNumber(2000))
b.add(new WeightNumber(3000))
// b.map(v => v.toExponential())
//百度查询没有这方法
b.sortByWeight()
console.log(b)


