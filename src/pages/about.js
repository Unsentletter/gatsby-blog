import React from 'react';
import Layout from '../components/layout';

class About extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <div className="body">
            <div className="left">
              <img src="static/me.png" alt="This is me" />
            </div>
            <div className="right">
              As you can probably tell by the url that brought you here my name
              is Tristan Southwell. What you probably can’t tell from that url
              is that I am a software developer, an aquarium enthusiast, an
              outdoors adventurer, and a fan of the oxford comma.
              <br />
              <br /> I created this blog as a fun way to share things I have
              learnt, and things I have achieved in my coding adventures, and in
              my aquarium adventures. It will also be fun for me to have a
              record of things I have learned and things I have achieved. It is
              always nice to look at your personal growth and feel good about
              yourself.
              <br />
              <br />
              The blogs are split into two categories. Tech Blog, and Fishroom.
              The titles are pretty self explanatory. Both blogs are a mixture
              of me writing down my thoughts, processes, and journeys, and posts
              where I will break a subject down and explain it. This will be as
              much for my own learning as well as anyone who happens upon this
              page. I love to learn and I love to teach, so this is me just
              living the dream.
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default About;
