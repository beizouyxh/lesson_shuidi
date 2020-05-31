var name = 'window'

function Person (name) {
  this.name = name;
  this.show1 = function () {
    console.log(this.name)
  }
  this.show2 = () => console.log(this.name)
  this.show3 = function () {
    return function () {
      console.log(this.name)
    }
  }
  this.show4 = function () {
    return () => console.log(this.name)
  }
}

var personA = new Person('personA')
var personB = new Person('personB')

personA.show1()    //persionA
personA.show1.call(personB)   //persionB

personA.show2()   //undefined--> persinA
personA.show2.call(personB)   //underfined--->persionA

personA.show3()()     //persionA----undefined
personA.show3().call(personB)  //persionB
personA.show3.call(personB)()  //undedined

personA.show4()()    //persionA
personA.show4().call(personB)   //persionA
personA.show4.call(personB)()     //persionB
