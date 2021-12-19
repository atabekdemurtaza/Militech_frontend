import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

const list = [
                {
                  "id": 1,
                  "title": "1st post",
                  "body": "Learn Django properly."
                }, 
                {
                  "id": 2,
                  "title": "Learn HTTP",
                  "body": "It's important"
                },
                {
                  "id": 3,
                  "title": "Third item",
                  "body": "Learn Python"
                }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {list};
  }
  render() {
    return(
      <div>
        {this.state.list.map(item=>(
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default App;
