import React from 'react'

import styled from 'styled-components'
import ImageLoader from 'react-loading-image'

import colors from 'constants/colors'
import aboutImage from './about.jpg'
import Loading from 'components/Loading'
import media from 'constants/breakpoints'

const AboutStyled = styled.div`
  padding-bottom: 40px;

  img {
    float: left;
    border: 1px solid ${colors.grey.main};
    margin-bottom: 5px;
    margin-right: 30px;
    max-width: 600px;
    width: 50%;
  }

  ${media.s`
    img {
      display: block;
      margin-bottom: 20px;
      margin-right: 0;
      width: 100%;
    }
  `}
`

const About = () => {
  return (
    <AboutStyled>
      <br />
      <ImageLoader
        src={aboutImage}
        loading={() => <Loading />}
        image={props => <img
          src={aboutImage}
          alt='self portrait'
        /> }
        error={() => <div>Error</div>}
      />
      <p>Hello, I'm Vasco Silva, a software engineer from Portugal.</p>
      <p>
        One of the most enduring passions in my life is photography, and I can
        say I don't remember my life before it.  It's something I'm sure I'll carry
        to the rest of my life, it'll always be my main expression, my creative
        endeavor, my frustration, my love/hate.
      </p>
      <p>This is like my photography related space, where I share my works on photography.</p>
      <p>
        I must say, I don't think photography is an art form, it's more like a
        language. Words of a language can be used to sell a car, promote a festival,
        tell news, write poems... So, it's actually what you do with photography
        that can or may be art. I'm not too concerned about this, sometimes
        I have artistic aspirations, at times I'm just doing it for fun, other times
        I don't even think about what I'm doing. This site serves as a self(?) curated
        space to share projects, series, or collections of related photos.
        It's a way for me to think more on groups of photos, instead of the
        typical "one photo" language mainly used in social media.
        I hope I can touch you somehow with my photography, even if in a negative
        way, and be sure to let me know what you think. You can also contact me
        if you are interested in being photographed, or wanting to colaborate somehow.
      </p>
      <p>
        Cheers.
      </p>
    </AboutStyled>
  );
};

export default About
