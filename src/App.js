import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import HeaderLine from './HeaderLine/HeaderLine';
import SharedButton from './button/index';
import ListItem from './listItem/index';
import {connect} from 'react-redux';
import {fetchPosts} from './Action/index'


const tempArray = [{
  fName:'Joe',
  lName:'bloggs',
  email:'Joe@iubat.edu',
  age:24,
  onLineStatus:true
}]

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch()
  {
    this.props.fetchPosts();
  }

  render(){

    console.log(this.props.posts);
    const {posts} = this.props;
    const configButton = {
      buttonText:'Get Posts',
      emitEvent:this.fetch
    }
  return (
    <div className="App">
      <Header />
      <HeaderLine 
      header="HeaderLine"
      desc="This is the description of the Header that you are currently watching"
      tempArray ={tempArray}
      />
      <SharedButton 
      {...configButton}
      />
      <div>
      {posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body
                };
                return (
                  <ListItem key={index} {...configListItem} />
                )
              })}
        </div>
        }
      </div>
    </div>
  );
}
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}
export default connect(mapStateToProps,{fetchPosts})(App);
