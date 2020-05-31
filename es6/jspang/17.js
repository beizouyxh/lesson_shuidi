class Coder{
    name(val){
      return this.val=val
    }
    skill(val){
        //this指向coder
        console.log(this.name('北走')+ ':' + 'skill:' + this.val)
    }
    constructor(a,b){
        this.a=a
        this.b=b
    }
    add(){
        return this.a+this.b
    }
}
// let coder=new Coder()
// console.log(coder.name('北走'))
// coder.skill('web')

// let beizou=new Coder(1,2)
// console.log(beizou.add())



//继承
class htmer extends Coder{

}
let jspang=new htmer
console.log(jspang.name('技术胖'))