import React, { Component } from 'react';
import { Layout, LocaleProvider } from 'antd';
import 'antd/dist/antd.less';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import Header from '../Header';
import Nav from '../Nav';
import RouteContent from '$routes/index';
import style from './index.css';
var { ipcRenderer } = require('electron');

const { Content } = Layout;

export default class App extends Component {

  componentDidMount() {
    ipcRenderer.send('window-inited', {
      userAgent: navigator.userAgent,
    });
  }

  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <Layout className={style['page-container']}>
          <Nav />
          {/* <Header /> */}
          <Layout className={style['body-container']}>
            <Content>
              <RouteContent />
            </Content>
          </Layout>
        </Layout>
      </LocaleProvider>
    );
  }
}
