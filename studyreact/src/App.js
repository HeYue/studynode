import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import  moment from 'moment';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import { Layout } from 'antd';
import Mainfooter from './common/mainfooter';
import Mainheader from './common/mainheader';
import Introducehow from './howtolearn/introducehow';
import Introducewho from './whotolearn/introducewho';
import Introducewhat from './whattolearn/introducewhat';


const { Content } = Layout;


moment.locales('zh-cn');

class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout>
          <Mainheader/>
          <Introducehow/>
          <Introducewho/>
          <Introducewhat/>
          <Mainfooter/>
        </Layout>
      </div>
    );
  }
}

export default App;
