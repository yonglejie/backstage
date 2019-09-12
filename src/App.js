import React from 'react';
import {Button} from 'antd'
import 'style/test.less';
function App(props) {
  console.log(props)
  return (
    <div >
      123
     {props.children}
     <Button>123</Button>
    </div>
  );
}

export default App;
