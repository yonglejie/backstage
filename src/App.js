import React,{Component} from 'react';
import 'style/test.less';
class App extends Component{
  constructor(){
    super()
  }
  render(){
    return (
      <div >
       {this.props.children} 
      </div>
    )
  }
}

export default (App);
