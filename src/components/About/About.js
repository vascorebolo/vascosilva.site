import React from 'react'

import styled from 'styled-components'
import ImageLoader from 'react-loading-image'

import colors from 'constants/colors'
import { small600 } from 'constants/breakpoints'
import aboutImage from './about.jpg'
import Loading from 'components/Loading'

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

  @media (max-width: ${small600}) {
    img {
      display: block;
      margin-bottom: 20px;
      margin-right: 0;
      width: 100%;
    }
  }
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
      <p>
        Born and raised in the beautiful city of Viana do Castelo, Portugal, I studied and graduated in what is commonly known in southern Europe as "Informatics Engineering", at Universidade do Minho, Braga.
      </p>

      <p>
        I love web development and design, to learn new programming technologies and languages.<br />
      I'm starting to believe that javascript is "the language to rule them all" but, I don't shy away from some php, c, kotlin, java...
      </p>

      <p>
        I am currently working as a software developer at <a href="www.gen.pt">gen design studio</a>.
      </p>

      <p>
        I'm very passionate about photography, and I love to wander the streets, looking for stories, for the perfect light and framing, to capture the "decisive moment", or just and ordinary moment that I felt compelled to.
        I often use my strobes to get some visions and images I have in my mind, and to portray people the best I can.
        I'm also very enthusiastic on doing analog photography, and my cameras' shelf always has some more space to another analog camera.
      </p>
    </AboutStyled>
  );
};

export default About
