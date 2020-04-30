import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Item extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    render() { 
        return (
         <div onClick={this.handleClick}>
             {this.props.avname}为你做- {this.props.content}
         </div>
          );
    }
    handleClick(){
        this.props.deleteItem(this.props.index)

    }
}
/*校验*/
Item.prototypes={
    avname:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}
Item.defaultProps={
    avname:'三上悠亚'
}
export default Item;