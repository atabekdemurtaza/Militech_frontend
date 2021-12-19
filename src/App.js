import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    post: []
  };


  //new 
  componentDidMount() {
    this.getPost();
  }

  //new 
  getPost() {
    axios
      .get('http://127.0.0.1:8000/api/')
      .then(res=> {
        this.setState({post: res.data});
      })
      .catch(err=> {
        console.log('Error');
      });
  }

  render() {
    return(
      <div>
        {this.state.post.map(item=> (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.body}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
