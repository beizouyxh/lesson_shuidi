import React,{Component,Fragment } from 'react'
import './style.css'
import Item from './Item'
class App extends Component{
  //js的构造函数，由于其他任何函数执行
  constructor(props){
    super(props) //调用父类的构造函数，固定写法
    this.state={
        inputValue:'' , // input中的值
        //----------主要 代码--------start
        list:['基础按摩','精油推背']   
        //----------主要 代码--------end
    }
}
  render(){
    return  (
      <Fragment>
          <div>
              <label htmlFor="jspang">加入服务：</label>
              <input 
                id="jspang" 
                className="input" 
                value={this.state.inputValue} 
                onChange={this.inputChange.bind(this)} 
                ref={(input)=>{this.input=input}}   /*绑定input */
              />
              <button onClick={this.addList.bind(this)}> 增加服务 </button>
          </div>
          <ul ref={(ul)=>{this.ul=ul}}>
              {
                  this.state.list.map((item,index)=>{
                      return(
                        // {/* <li key={index+item}  onClick={this.deleteItem.bind(this,index)} >
                        // {item}
                        // </li>*/  }
                       
                        <Item        
                         key={index+item} 
                         content={item} 
                         index={index}  
                         list={this.state.list}
                         deleteItem={this.deleteItem.bind(this)}/>
                               
                      )
                  })
              }
          </ul>  
      </Fragment>
    )
  }
  inputChange(e){
    // console.log(e.target.value);
    // this.state.inputValue=e.target.value;  这是错误的
    this.setState({        /*异步的 绑定ul div  但是因为是异步的，所以length比实际少1，所以使用回调 */
        inputValue:this.input.value
    },()=>{
      console.log(this.ul.querySelectorAll('div').length)
    })       
      
  }
    
  
  //增加服务的按钮响应方法
  addList(){
    this.setState({
      list:[...this.state.list,this.state.inputValue]
    })
  }
  //删除单项服务
  deleteItem(index){
    let list = this.state.list
    list.splice(index,1)
    this.setState({
      list:list
    })
  }
}
export default App