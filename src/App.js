import React from 'react';
import { Layout } from 'antd';
import PageContent from "./PageContent";
import './App.css';

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  render() {
    return (
      <Layout>
        <Layout className="site-layout">
          <PageContent />
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo
