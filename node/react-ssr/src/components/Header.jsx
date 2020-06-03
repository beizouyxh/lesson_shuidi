import React,{Component} from 'react' 

//服务端 1. 为了SEO，为了性能，renderToString

class Header extends Component{
    handleClick(){
        console.log('133555')
    }
    render(){
        return(
            <button onClick={ this.handleClick}>header</button>
        )
    }
}

export default Header
