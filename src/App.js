import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { yourFunction } from './actions/reducer_name';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            this comes from redux
            "{this.props.partOfStateThatWillChange}"
            happy hacking 
          </p>
        </header>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    partOfStateThatWillChange: state.Reducer.partOfStateThatWillChange
  }
}

export default connect( mapStateToProps , {yourFunction})(App);
