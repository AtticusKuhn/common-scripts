import React from 'react';
import Layout from './components/layout.jsx'
class Scripts extends React.Component {
  render() {
    return <>
        <Layout>
            <script  src="/public/scripts/viewscript.js" />
            <link rel="stylesheet" href="/public/styles/viewscript.css" />

            view
            <p id="body_paragraph">
                <button id="copy_button"/>
                <button id="add_to_list">Bundle</button>
            </p>
            
            
        </Layout>
    </>;
  }
}

export default Scripts;