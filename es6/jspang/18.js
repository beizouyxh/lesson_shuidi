var name = 'window'

var person1 = {
  name: 'person1',
  show1: function () {
    console.log(this.name)
  },
  show2: () => console.log(this.name),
  show3: function () {
    return function () {
      console.log(this.name)
    }
  },
  show4: function () {
    return () => console.log(this.name)
  }
}
var person2 = { name: 'person2' }
 
person1.show1()            //persion1
person1.show1.call(person2)   //persion2

person1.show2()          //  undefined
person1.show2.call(person2)    //underfined

person1.show3()()    //undefined
person1.show3().call(person2)   //persion2
person1.show3.call(person2)()    //undefined

person1.show4()()     //persion1
person1.show4().call(person2)    //persion1
person1.show4.call(person2)()   //persion2
