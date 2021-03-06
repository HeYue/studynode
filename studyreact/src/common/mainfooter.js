import React, { Component,Fragment } from 'react';
import GlobalFooter from 'ant-design-pro/lib/GlobalFooter';
import { Icon } from 'antd';

const links = [{
  key: '帮助',
  title: '帮助',
  href: '',
}, {
  key: 'github',
  title: <Icon type="github" />,
  href: 'https://github.com/ant-design/ant-design-pro',
  blankTarget: true,
}, {
  key: '条款',
  title: '条款',
  href: '',
  blankTarget: true,
}];

const copyright = <div>Copyright <Icon type="copyright" /> 2017 蚂蚁金服体验技术部出品</div>;

class Mainfooter extends Component {
  render() {
    return (
      <div >
        <GlobalFooter links={links} copyright={copyright} />
      </div>
    );
  }
}

export default Mainfooter;
