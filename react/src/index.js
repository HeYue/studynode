import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './common/App';
import UserLayout from './common/UserLayout';

import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<UserLayout />, document.getElementById('root'));
registerServiceWorker();
