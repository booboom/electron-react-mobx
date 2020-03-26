import React from 'react';
import { Layout } from 'antd';
import { observer } from 'mobx-react';
import store from './store';
import './index.css';

@observer
class Home extends React.Component {

  componentDidMount() {
    store.initValue();
  }


  render() {
    return (
        <div className="formCon">
          <h2>第一页</h2>
          <h2>当前环境：{store.currentEnv}</h2>
          <h2>接口前缀：{store.currentUrlPrefix}</h2>
        </div>
    );
  }
}

export default Home;