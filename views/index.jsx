import React from 'react';
import Layout from './components/layout.jsx'
import Pagelink from './components/link.jsx'
class Index extends React.Component {
  render() {
    return <>
        <Layout>
            <link rel="stylesheet" href="/public/styles/home.css" />
            home
            <p id="body_paragraph">Common Scripts is a repository for the most commonly use scripts that
            could be applied in any project. Simply use a script tag and you will stop the monotony of
            endlessly copy-pasting old code.
            <Pagelink name="See some examples" link="/scripts" />

            </p>
        </Layout>
    </>;
  }
}

export default Index;