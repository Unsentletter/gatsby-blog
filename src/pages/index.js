import React from 'react';

import Layout from '../components/layout';
import MainBody from '../components/main-body';

export default class App extends React.Component {
  render() {
    return (
      <div>
        {/* Bit of SEO here when I work out how it works*/}
        <Layout>
          <MainBody />
        </Layout>
      </div>
    );
  }
}

// {posts.map(({ node }) => {
//   const title = node.frontmatter.title || node.fields.slug
//   return (
//     <article key={node.fields.slug}>
//       <header>
//         <h3
//           style={{
//             marginBottom: rhythm(1 / 4),
//           }}
//         >
//           <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
//             {title}
//           </Link>
//         </h3>
//         <small>{node.frontmatter.date}</small>
//       </header>
//       <section>
//         <p
//           dangerouslySetInnerHTML={{
//             __html: node.frontmatter.description || node.excerpt,
//           }}
//         />
//       </section>
//     </article>
//   )
// })}
