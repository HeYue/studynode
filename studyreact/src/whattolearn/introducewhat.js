import React, { Component } from 'react';
import { Layout,message } from 'antd';

const { Content } = Layout;

class Introducewhat extends Component {
  constructor(){
    super()
    this.state = {users:[]}
  }

  fetchUsers(){
    message.info('request user list from app server..')
    return fetch('api/users', {accpet: "application/json"}).then(res => {return res.json().then(json => {this.setState({users: json})})})
  }
  render() {
    return (
      <div>
        <Layout>
          <Content style={{padding: '10px'}}>
            <p className="App-intro" onClick={this.fetchUsers.bind(this)}>
              To get started, edit <code>src/App.js</code> and save to reload.
              <br/>test here
              <br/>test here
              <br/>test here
              <br/>test here
              <br/>test here
              <br/>test here
              <br/>test here
              <br/>test here
              <br/>last
            </p>
            {/*{this.state.users}*/}
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Introducewhat;
