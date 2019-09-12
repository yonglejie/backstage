import React,{Component} from 'react'
import {HashRouter,Route,Redirect,Switch} from 'react-router-dom'
import App from './App'
import Admin from 'pages/admin'
import Login from 'pages/login'
import Page1 from 'pages/page1'
class Router extends Component{
  render(){
    return(
      <App>
        
        <HashRouter>
          <Switch>
            {/* <Redirect exact form="/" to="/login"></Redirect> */}
            <Redirect exact from = '/' to = '/admin'></Redirect>

            <Route path="/admin" component={Admin}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/page1" component={Page1}></Route>

          </Switch>
        </HashRouter>
      </App>
    )
  }
}
export default Router