import React, { Component } from 'react';
import { Layout,message } from 'antd';
import styles from '../App.less';

const { Content } = Layout;

class Introducewho extends Component {
  constructor(){
    super()
    this.state = {users:[]}
  }

  fetchUsers(){
    message.info('request user list from app server..')
    // return fetch('api/users', {accpet: "application/json"}).then(res => {return res.json().then(json => {this.setState({users: json})})})
  }
  render() {
    return (
      <div>
        <div className={styles.AppIntro} onClick={this.fetchUsers.bind(this)}>
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
            </div>
      </div>
    );
  }
}

export default Introducewho;