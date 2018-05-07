import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.less';
import  moment from 'moment';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import { Layout } from 'antd';
import Mainfooter from './common/mainfooter';
import Mainheader from './common/header/index';
import Introducehow from './howtolearn/introducehow';
import Introducewho from './whotolearn/introducewho';
import Introducewhat from './whattolearn/introducewhat';


const { Content, Header } = Layout;


moment.locales('zh-cn');

class App extends Component {

  render() {
    return (
      <div>
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
