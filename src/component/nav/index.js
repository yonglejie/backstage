import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
class Nav extends Component{
  jump=(path)=>{
    console.log(this)
    this.props.history.push(path)
  }
  render(){
    return(
      <div>
        {this.props.children}
        <button onClick={this.jump.bind(this,'/page1')}>page1</button>
      </div>
      // <button onClick={this.jump.bind(this,'/admin/admin')}>admin</button>
      // <button onClick={this.jump.bind(this,'/admin/page1')}>page1</button>

    )
  }
}
export default withRouter(Nav) 