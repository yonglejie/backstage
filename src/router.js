import React,{Component} from 'react'
import {HashRouter,Route,Redirect,Switch} from 'react-router-dom'
import App from './App'
import Admin from 'pages/admin'
import Login from 'pages/login'
class Router extends Component{
  render(){
    return(
      <App>
        <HashRouter>
          <Switch>
            {/* <Redirect exact form="/" to="/login"></Redirect> */}
            <Route path="/admin" component={Admin}></Route>
            <Route path="/login" component={Login}></Route>
          </Switch>
        </HashRouter>
      </App>
    )
  }
}
export default Router