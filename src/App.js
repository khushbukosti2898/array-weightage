import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    newarr: [],
    val: []
  }
  arr = [{ x: 1, y: 5, weightage: 5 },
  { x: 2, y: 7, weightage: 4 },
  { x: 2, y: 6, weightage: 3 },
  { x: 5, y: 8, weightage: 5 }];

  // let newarr=[].concat(...arr)

  flatten = (obj) => {
    const array = Array.isArray(obj) ? obj : [obj];
    return array.reduce((acc, value) => {
      let x = value.x;
      let y = value.y;
      acc.push(x);
      acc.push(y);
      return acc;
    }, []);
  }
  newarr = this.flatten(this.arr).filter((v, i, a) => a.indexOf(v) === i).sort();

  handlClick = () => {
    let val = this.newarr.map((value, i) => {
      let sum = 0;
      if (i + 1 < this.newarr.length) {
        this.arr.map((value1) => {
          if (this.newarr[i] >= value1.x && this.newarr[i + 1] <= value1.y) {
            sum += value1.weightage;
          }
        })
      }
      return sum;
    })
    console.log(val);
    this.setState({ newarr: this.newarr, val: val })
  }
  render() {
    var { newarr, val } = this.state;
    return (<>
      <button onClick={this.handlClick}>Display</button>
      {
        newarr.map((value, i) =>{
          if(newarr.length>i+1)
          return <h3>{newarr[i]} - {newarr[i + 1]} = {val[i]}</h3>
        }
          
        )
      }
    </>);
  }
}

export default App;
