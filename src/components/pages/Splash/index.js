import React from 'react';
import bottom from '../../../images/hamiltonlanding.jpg'
import middle from '../../../images/hamiltonlandingoutput.jpg'
import top from '../../../images/hamiltonlandingoutputoutput.jpg'
import tippyTop from '../../../images/hamiltonlandingoutputoutputoutput.jpg'

import {CSSTransition} from 'react-transition-group';
import {withRouter} from 'react-router-dom';
import StyledLink from '../../StyledLink';

const styles = {
  root:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:'100%'
  },
  imageWrapper:{
    position:'absolute',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:'61.8vh',
    backgroundImage: `url(${bottom})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition:'0 50%',
    opacity: 0.5,
    zIndex:0,
    transition: 'opacity 0.5s ease-in-out'
  },
  overlayImageWrapper:{
    position:'absolute',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:'61.8vh',
    backgroundImage: `url(${middle})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition:'0% 50%',
    opacity: 0,
    zIndex:0,
    transition: 'opacity 0.5s ease-in-out'
  },
  contentWrapper:{
    zIndex:1,
    opacity:0.9,
    transition: 'opacity 0.5s ease-in-out'

  },
  langRow:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    position:'absolute',
    bottom:'44vh',
    marginLeft:'-1.5rem'
  }
}
function Splash(props) {
  console.log(props)
  const {match} = props;

  function handleMouseLeave(e){
    document.getElementById('overlay').style.opacity =0;
    document.getElementById('base').style.opacity = 0.5;
    document.getElementById('contentWrapper').style.opacity = 0.9;

  }
  function handleMouseOver(e){
    document.getElementById('overlay').style.opacity = 0.7;
    document.getElementById('base').style.opacity = 0;
    document.getElementById('contentWrapper').style.opacity = 1;

  }
  return (
    <div className="Splash" style={styles.root}>
        <div id="contentWrapper" style={styles.contentWrapper}>
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames="title"
          >
            <h2
              className="secondary"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{zIndex:1}}
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
            >
              rustcity.me
            </h2>
          </CSSTransition>
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames="link"
          >
            <div className="langRow"
                style={styles.langRow}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}>
              <StyledLink className="link" key={'/home/en'} to={'/home/en'} match={match}>BLOG</StyledLink>
              <StyledLink className="link" key={'/cv'} to={'/cv'} match={match}>CV</StyledLink>
              <StyledLink className="link" key={'/contact'} to={'/contact'} match={match}>CONTACT</StyledLink>
            </div>
          </CSSTransition>

        </div>

        <div id="base" style={styles.imageWrapper}>

        </div>
        <div id="overlay" style={styles.overlayImageWrapper}>

        </div>

    </div>
  );
}

export default withRouter(Splash);
