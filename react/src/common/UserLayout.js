import React from 'react';

// import { Link, Redirect, Switch, Route } from 'dva/router';
// import DocumentTitle from 'react-document-title';
import MainFooter from './mainfooter';
import Mainheader from './mainheader';
// import GlobalFooter from 'ant-design-pro/lib/GlobalFooter';
import {Layout,Icon} from 'antd';
import styles from './UserLayout.less';

// import logo from '../assets/logo.svg';
// import { getRoutes } from '../utils/utils';

const { Content, Header ,Footer} = Layout;

class UserLayout extends React.PureComponent {
  // getPageTitle() {
  //   const { routerData, location } = this.props;
  //   const { pathname } = location;
  //   let title = 'Ant Design Pro';
  //   if (routerData[pathname] && routerData[pathname].name) {
  //     title = `${routerData[pathname].name} - Ant Design Pro`;
  //   }
  //   return title;
  // }
  render() {
    // const { routerData, match } = this.props;
    return (
      <div className={styles.User}>
        <Layout>
          <Header>
            <Mainheader />
          </Header>
          <Content>
            hello
          </Content>
          <Footer>
            <MainFooter />
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default UserLayout;
