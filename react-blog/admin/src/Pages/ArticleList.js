import React,{useState,useEffect} from 'react';
import '../public/style/ArticleList.css'
import { List ,Row ,Col , Modal ,message ,Button} from 'antd';
import axios from 'axios'
import  servicePath  from '../config/apiUrl'
const { confirm } = Modal;

function ArticleList(props){
    const [list,setList]=useState([])
    useEffect(()=>{
        getList()     
    },[])
    //获得文章
    const getList=()=>{
        axios({
            method:'get',
            url: servicePath.getArticleList,
            withCredentials: true,
            header:{ 'Access-Control-Allow-Origin':'*' }
        }).then(
            res=>{
                setList(res.data.list)  //调用接口的getArticleList方法中的list传给 setlist
            }  
        )
    }

    //删除文章
    const delArticle=(id)=>{
        confirm({
            title:'确定删除文章吗？',
            content:'如果你点击OK,文章将永远删除，无法恢复',
            onOk(){
                axios(servicePath.delArticle+id,{ withCredentials: true}).then(
                    res=>{ 
                        message.success('文章删除成功')
                        getList()
                    }
                )
            },
            onCancel(){
                message.success('已取消删除')
            }      
          })
    }

    //修改文章的跳转方法
    const updateArticle=(id)=>{
        props.history.push('/index/add/'+id)
    }


    return(
       <div>
            <List 
                header={
                    <Row className="list-div">
                        <Col span={8}>
                          <b>标题</b>
                        </Col>
                        <Col span={4}>
                          <b>类别</b>
                        </Col>
                        <Col span={4}>
                          <b>发布时间</b>
                        </Col>
                        <Col span={4}>
                          <b>浏览量</b>
                        </Col>
                        <Col span={4}>
                          <b>操作</b>
                        </Col>
                    </Row>
                }
                bordered     //边框
                dataSource={list}
                renderItem={item=>(      //渲染项
                    <List.Item>
                      <Row className="list-div">
                        <Col span={8}>
                            {item.title}
                        </Col>
                        <Col span={3}>
                            {item.typeName}
                        </Col>
                        <Col span={3}>
                            {item.addTime}
                        </Col>
                        <Col span={3}>
                            共<span>{item.part_count}</span>集
                        </Col>
                        <Col span={3}>
                          {item.view_count}
                        </Col>

                        <Col span={4}>
                          <Button type="primary" onClick={()=>{updateArticle(item.id)}}>修改</Button>&nbsp;

                          <Button onClick={()=>{delArticle(item.id)}}>删除 </Button>
                        </Col>
                      </Row>
                    </List.Item>
                )}
            />
       </div>
    )
}

export default ArticleList