namespace shuaiGe{
    export class Dehua{
        public name:string="刘德华"
        talk(){
            console.log('我是刘德华')
        }
    }
}

namespace baJie{
    export class Dehua{
        public name:string="马德华"
        talk(){
            console.log('我是马德华')
        }
    }
}

let dehua1:shuaiGe.Dehua=new shuaiGe.Dehua()
let dehua2:baJie.Dehua=new baJie.Dehua()
dehua1.talk()
dehua2.talk()