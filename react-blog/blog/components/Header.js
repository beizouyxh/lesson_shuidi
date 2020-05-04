
import '../public/style/components/Header.css'
import React ,{useState,useEffect} from 'react'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import  servicePath  from '../config/apiUrl'
// import { Icon } from '@ant-design/compatible';
import {Row,Col, Menu,Icon} from 'antd'
const Header = () => {
     const [navArray,setNavArray]=useState([])
     useEffect(()=>{
         const fetchData=async ()=>{
             const result =await axios(servicePath.getTypeInfo).then(
                 (res)=>{
                  
                     return res.data.data
                 }
             )
            setNavArray(result)
         }
         fetchData()
     },[])

     const handleClick=(e)=>{
         if(e.key==0){
             Router.push('/')  //next.js 语法 ，满足跳转首页
         }else{
             Router.push('/list?id='+e.key)
         }
     }

    return(
     <div className="header">
       <Row type="flex" justify="center">
        <Col  xs={24} sm={24} md={10} lg={10} xl={10}>
            <span className="header-logo">北走</span>
            <span className="header-txt">专注前端开发！</span>
        </Col>

        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
            <Menu  mode="horizontal" onClick={handleClick}>
                <Menu.Item key="0">
                    <Icon type="home" />
                    首页
                </Menu.Item>
                {
                    navArray.map((item)=>{
                       return(
                           <Menu.Item key={item.Id}>
                           <Icon type={item.Icon} />
                            {item.typeName}
                </Menu.Item>
                       )
                    })
                }
                
                
            </Menu>
        </Col>
    </Row>
 </div>
    )
}

export default Header