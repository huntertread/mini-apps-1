import React from 'react';
import ReactDOM from 'react-dom';
import Square from './square.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return(
      <div id="col1">
        <Square x={0} y={0}/>
        <Square x={1} y={0}/>
        <Square x={2} y={0}/>
        <Square x={3} y={0}/>
        <Square x={4} y={0}/>
        <Square x={5} y={0}/>
        <Square x={6} y={0}/>
      </div>
      // <div id="col2">
      //   <Square x={0} y={1}/>
      //   <Square x={1} y={1}/>
      //   <Square x={2} y={1}/>
      //   <Square x={3} y={1}/>
      //   <Square x={4} y={1}/>
      //   <Square x={5} y={1}/>
      //   <Square x={6} y={1}/>
      // </div>
    )
  }
}

export default App;