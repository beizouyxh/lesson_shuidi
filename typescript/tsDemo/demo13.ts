class Jspang{
    public name:string
    public age:number
    public skill:string
    constructor(name:string,age:number,skill:string){
        this.name=name
        this.age=age
        this.skill=skill
    }
    public interest(){
        console.log('找小姐姐')
    }
}

let jspang:Jspang=new Jspang('技术胖',18,'coding')
jspang.interest()    //'找小姐姐'


class JsShuai extends Jspang{
    public xingxiang:string="帅气"
    public interest(){
        super.interest()
        console.log('建立大公司')
    }
    public zhuanqian(){
        console.log('先赚一个亿')
    }
}


let shuai:JsShuai=new JsShuai('技术帅',5,'演讲')

shuai.interest()  //找小姐姐   建立大公司
shuai.zhuanqian()   //先赚一个亿