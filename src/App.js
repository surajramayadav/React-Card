import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Card from './card';

 class App extends React.Component{
    render(){
        return(
            <>
            
            <div class="container">
            <div class="row">
              <div class="col-sm">
                <Card/>
              </div>
              <div class="col-sm">
              <Card/>
              </div>
              <div class="col-sm">
              <Card/>
              </div>
            </div>
          </div>
          </>
        );
    }
}
export default App;