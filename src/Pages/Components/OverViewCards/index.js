import React from 'react';

import './style.css'

import Up from '../../../img/icon-up.svg'
import Down from '../../../img/icon-down.svg'

export default function OverViewCards(props) {
 return (
   <div className='CardOverBody'>

        <div className='Top'>
            {props.Title}
            <img src={props.Logo} />
        </div>

        <div className='Botton'>
            <p1>{props.Number}</p1>
            { props.Up ?
                <div className='Up'>
                    <img src={Up}/>
                    {props.Percent}%
                </div>
                    :
                <div className='Down'>
                    <img src={Down}/>
                    {props.Percent}%
                </div>
            }
        </div>
       
   </div>
  );
}