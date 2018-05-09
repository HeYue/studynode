import styles from './App.less';
import React, { Component } from 'react';
// import logo from './logo.svg';
import  moment from 'moment';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import { Layout } from 'antd';
import Mainfooter from './mainfooter';
import Mainheader from './mainheader';
import Introducehow from '../howtolearn/introducehow';
import Introducewho from '../whotolearn/introducewho';
import Introducewhat from '../whattolearn/introducewhat';


const { Content, Header ,Footer} = Layout;


moment.locales('zh-cn');

class App extends Component {

  render() {
    return (
      <div className={styles.App}>
        <Layout>
          <Header style={{ position: 'fixed', width: '100%',  background: '#fff' }}>
            <Mainheader/>
          </Header>
          <Content>
            <Introducehow/>
            <Introducewho/>
            <Introducewhat/>
          </Content>
          <Footer>
            <Mainfooter/>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
