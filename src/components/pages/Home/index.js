import React from 'react';
import {withRouter} from 'react-router-dom';
import bottom from '../../../images/hamiltonlanding.jpg'
import middle from '../../../images/hamiltonlandingoutput.jpg'
import top from '../../../images/hamiltonlandingoutputoutput.jpg'
import tippyTop from '../../../images/hamiltonlandingoutputoutputoutput.jpg'
import {CSSTransition} from 'react-transition-group';

import StyledLink from '../../StyledLink';

import Terminal from 'terminal-in-react';

const styles = {
  root:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    width:'100%',
    height:'100%'
  },
}
function Home(props) {
  const {match} = props;
  const showMsg = () => 'Hello World'
  return (
    <div className="Home" style={styles.root}>
      <CSSTransition
        in={match != null}
        timeout={300}
        classNames="back"
      >
        <div style={{position:'absolute', top:'1rem', left:'1rem'}}>
          <StyledLink to={`/`}>Back</StyledLink>
        </div>
      </CSSTransition>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width:'100%',

        }}
      >
        <Terminal
          hideTopBar
          showActions={false}
          color='green'
          barColor={`rgba(0,0,0,0)`}
          backgroundColor='rgba(0,0,0,0)'
          barColor='black'
          style={{ paddingTop:'1rem',fontWeight: "bold", fontSize: "1em", width:'100%', }}
          commands={{
            'open-google': () => window.open('https://www.google.com/', '_blank'),
            showmsg: showMsg,
            popup: () => alert('Terminal in React')
          }}
          descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}
          msg={`Welcome.  Type "help" for list of commands.`}
        />
      </div>
    </div>
  );
}

export default withRouter(Home);
