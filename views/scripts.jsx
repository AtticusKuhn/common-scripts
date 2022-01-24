import React from 'react';
import Layout from './components/layout.jsx'
class Scripts extends React.Component {
  render() {
    return <>
        <Layout>
            <link rel="stylesheet" href="/public/styles/scripts.css" />
            <script  src="/public/scripts/scripts.js" />

            scripts
            <input placeholder="search..." autoComplete="off" id="search"/>
            <div id="scripts_container"/>
        </Layout>
    </>;
  }
}

export default Scripts;