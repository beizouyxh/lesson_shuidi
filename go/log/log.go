package main

import (
	"fmt"
	"log"
)

//struct 结构体 关键字 强类型
type User struct {
	Name string
	Age  int
}
type Person struct {
	Name string
	Age  int
}

func main() {
	u := User{
		Name: "尹小豪",
		Age:  22,
	} //声明变量并赋值
	log.Printf("hello struct %s,age is %d", u.Name, u.Age)
	var p1 Person //var 声明变量 内存空间
	p1.Name = "Tom"
	p1.Age = 30

	var p2 = Person{
		Name: "吕媛",
		Age:  21,
	}
	fmt.Println("p2=", p2)
	// 应用调bug 多打一些LOG
	log.SetFlags(log.Lshortfile | log.Ldate | log.Lmicroseconds)
	log.Printf("%s login, age: %d", u.Name, u.Age)

}
