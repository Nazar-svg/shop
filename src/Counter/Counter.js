import React, { Component } from 'react';
import classes from './Counter.module.css';

class Counter extends Component {
  state = {
    totul: 0,
  };

  onPlas = () => {
    this.setState({
      totul: this.state.totul + 1,
    });
  };

  onMinus = () => {
    const totul = this.state.totul;
    if (totul > 0) {
      this.setState({
        totul: totul - 1,
      });
    }
  };

  render() {
    return (
      <div className={classes.Counter}>
        <i class="fas fa-minus" onClick={this.onMinus} />
        <span className={classes.Count}>{this.state.totul}</span>
        <i class="fas fa-plus" onClick={this.onPlas} />
      </div>
    );
  }
}

export default Counter;
