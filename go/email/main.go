package main

import (
	"net/smtp"

	"log"

	"github.com/jordan-wright/email"
)

func main() {
	e := email.NewEmail() //:=定义并且赋值
	e.From = "<874609947@qq.com>"
	//[] ? Array ？ 多个用户发邮件   { }集合
	e.To = []string{"1324315157@qq.com", "527576505@qq.com"}
	e.Subject = "在家还好吗" //标题
	//byte  ？go 类型 byte 字节流
	//本地并没有搭建邮件服务器 通过腾讯服务器转发smtp.qq.com
	// e.Text = []byte("今天约pao了吗") //内容
	//链接 多行字符
	e.HTML = []byte(`
	 <ul>
	   <li><a href="https://www.bai.com">百度</li>
	   <li><a href="https://www.taobao.com">淘宝</li>
	 </ul>
	`)
	e.AttachFile("view1.jpeg") //附件
	err := e.Send("smtp.qq.com:25", smtp.PlainAuth("", "874609947@qq.com", "zzflzduulrfjbbjg", "smtp.qq.com"))

	if err != nil {
		log.Fatal(err) //Fatal打印错误
	}
}
