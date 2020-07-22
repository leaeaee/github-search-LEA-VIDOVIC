import React from 'react';
import List from './List';
import User from './User';
import axios from 'axios';

class Search extends React.Component{
  constructor(){
    super();
    this.state = {
        isLoading: true,
        users: [],
        singleUser: {},
    }
    this.handleClick = this.handleClick.bind(this);
  }

  async getUsers(keyword){
  let token = process.env.REACT_APP_TOKEN;
  console.log('Token', token);
  let result = await axios({
    url: 'https://api.github.com/graphql',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + '582f3ecd601b093cc7fdd035b27177517828398c'},
    data: {
      query: `
      {
        search(type: USER, query: "in:login ${keyword}", first: 20) {
          userCount
          edges {
            node {
              ... on User {
                name
                login
                avatarUrl
                email
                id
                url
                repositories(first: 10) {
                  edges {
                    node {
                      name
                      url
                      id
                    }
                  }
                }
              }
            }
          }
        }
      }`
    }
  })
  .then(res => {
    if (res.status !== 200 && res.status !== 201) throw new Error('Failed!');
    return res;
  })
  .then(resData => {
    this.setState({ users: resData.data.data.search.edges});
    console.log('Nakon setState-a podaci', this.state.users);
  })
  .catch(err => console.log(err));

  return result;
  }
     
  async onSubmit (e){
    e.preventDefault();
    await this.getUsers(this.refs.keyword.value);
  }

  handleClick(user){
    this.setState({singleUser: user})
  }


  render(){
    return(
      <div >
        <form onSubmit = {e => this.onSubmit(e)}>
          <div className="form">
              <input ref='keyword' type='text' placeholder='keyword'/>
              <input type="submit" value="Search" className="btn btn-dark btn-block"/>
          </div>
        </form>
        {this.state.singleUser.login ? <User user={this.state.singleUser}/> : <List users={this.state.users} handleClick={this.handleClick}/>}
      </div>
    )
  }
}

export default Search