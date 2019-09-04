import React from 'react';
import Layout from '../components/layout';

import styles from './styles/tech-blog.module.css';

class TechBlog extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <div className={styles.body}>
            <h1>
              This will be where my tech blog will be Changing some text to test
              Travis
            </h1>
          </div>
        </Layout>
      </div>
    );
  }
}

export default TechBlog;
