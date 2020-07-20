
// import React, { Component } from 'react';

// class Example extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count:0 }
//     }
//     render() { 
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={this.addCount.bind(this)}>Chlick me</button>
//             </div>
//         );
//     }
//     addCount(){
//         this.setState({count:this.state.count+1})
//     }
// }

// export default Example;
import React, { useState , useEffect } from 'react';
import {BrowserRouter as Router,Route,Link}from 'react-router-dom';

function Index(){
    return(
        <h2>JSpang.com</h2>
    )
}

function List(){
    return(
        <div>
            <h2>List Page</h2>
        </div>
    )
}
function Example(){
    const [ count , setCount ] = useState(0);
    //---关键代码---------start-------
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`)
    })
    //---关键代码---------end-------

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            <Router>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/list/'>列表</Link></li>
                </ul>
                <Route path='/' exact component={Index}/>
                <Route path='/list/' exact component={List}/>
            </Router>
        </div>
    )
}
export default Example;