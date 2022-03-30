import React, {useState} from 'react';

import './style.css'


import Up from '../../../img/icon-up.svg'
import Down from '../../../img/icon-down.svg'

export default function MainCards(props) {

 return (
   <div id="CardBody" className='CardBody'>
    <div 
        className='CardTop' 
        style={{ background: props.BGCollor,}}
    />
    <div className='LogoName'>
        <img src={props.Logo}/>
        <p1>{props.Name}</p1>
    </div>

    <div className='Followers'>
        <p2>{props.Followers}</p2>
        <p3>FOLLOWERS</p3>
    </div>

    { props.EntryPlus ? <div className='Up'>
        <img src={Up} />
        <p4>{props.Entry} Today</p4>
    </div>
    :
    <div className='Down'>
        <img src={Down} />
        <p4>{props.Entry} Today</p4>
    </div>
    }

   </div>
 );
}