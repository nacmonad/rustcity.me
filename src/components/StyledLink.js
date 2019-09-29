import React from 'react'
import {Link} from 'react-router-dom';

export default (props) =>{
  const {disabled, to} = props;
  return (
    <Link
      to={to}
      disabled={disabled}
      onMouseOver={(e)=>{
        if(disabled) {
          e.preventDefault();
        } else {
          e.target.style.textDecoration = 'underline';
        }

      }}
      onMouseLeave={(e)=>{
        if(disabled) {
          e.preventDefault();
        } else {
          e.target.style.textDecoration = 'none';
        }

      }}
      style={{
        color:'white',
        textDecoration: 'none',
        margin:'0 0.25rem',
        color: disabled ?'rgba(192,192,192,1)':'#fff',
        fontWeight:'900'
      }}
      activeStyle={{
        color:'blue'
      }}>
          {props.children}
    </Link>

  )
}
