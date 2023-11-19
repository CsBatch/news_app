import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsColumn from './Components/NewsColumn';
import LoadingBar from 'react-top-loading-bar'
import {
  HashRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
// import Search from './Components/Search';

export default class App extends Component {
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Navbar />
          {/* <Search /> */}
          <div className='container'>
            <Switch>
              <Route exact path='/' element={
                <NewsColumn
                  setProgress={this.setProgress}
                  key='home'
                  headLines={1} />} />

              <Route exact path='/business' element={
                <NewsColumn
                  setProgress={this.setProgress}
                  key='business'
                  category='business'
                  headLines={1} />} />

              <Route exact path='/health' element={
                <NewsColumn
                setProgress={this.setProgress}
                key='health'
                category='health'
                headLines={1} />} />

              <Route exact path='/science' element={
                <NewsColumn
                setProgress={this.setProgress}
                key='science'
                category='science'
                headLines={1} />} />

              <Route exact path='/sports' element={
                <NewsColumn
                setProgress={this.setProgress}
                key='sports'
                category='sports'
                headLines={1} />} />

              <Route exact path='/technology' element={
                <NewsColumn
                  setProgress={this.setProgress}
                  key='technology'
                  category='technology'
                  headLines={1} />} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}