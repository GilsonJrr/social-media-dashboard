import React, {useState} from 'react';
import Switch from "react-switch";

import './style.css'

import { data, Overview } from '../../Data/data';

import MainCards from '../Components/MainCards';
import OverViewCards from '../Components/OverViewCards';

export default function Home() {

    const [darkMode, setDarkMode] = useState(false)

    function DarkMode() {

        var HomeBody = document.getElementById("HomeBody")
        HomeBody.classList.toggle("HomeBodyLight");

        var Titles = document.getElementById("Titles")
        Titles.classList.toggle("TitlesLight")

        var OverView = document.getElementsByClassName("OverViewDiv")
        OverView[0].classList.toggle("OverViewDivLight")

        var CardBody = document.getElementsByClassName( 'CardBody' );
        for ( var a = 0; a < CardBody.length; ++a ) {
            CardBody[a].classList.toggle("CardBodyLight")
        }

        var CardOver = document.getElementsByClassName( 'CardOverBody' );
        for ( var a = 0; a < CardOver.length; ++a ) {
            CardOver[a].classList.toggle("CardOverBodyLight")
        }

        if(darkMode){
            setDarkMode(false)
        }else{
            setDarkMode(true)
        }
    
    }

 return (
     <div id="HomeBody" className='HomeBody'>

        <div className='TitlesDiv'>
            <div id="Titles" className='Titles'>
                <p1>Social Media Dahboard</p1>
                <p2>Total Followers: 23,004</p2>
            </div>
        
            <hr/>

            <div className='DarkMode'>
                <p2>Dark Mode</p2> 
                <div>
                {/* <button onClick={DarkMode}>
                Dark
                </button> */}
                <Switch 
                    onChange={DarkMode} 
                    checked={darkMode} 
                    handleDiameter={14}
                    height={18}
                    width={38}
                    offColor="#11D8C5"
                    onColor="#D0D8EF"
                    offHandleColor="#1F212E"
                    onHandleColor="#FFFFFF"
                    uncheckedIcon={''}
                    checkedIcon={''}
                    activeBoxShadow=''
                />
                </div>
            </div>
        </div>
        
        <div className='MainCardDiv'>
            {data.map((itens)=>{
                return(
                    <MainCards
                        Media={itens.media}
                        Logo={itens.logo}
                        Name={itens.name}
                        Followers={itens.followers}
                        Entry={itens.entry}
                        EntryPlus={itens.entryPlus}
                        BGCollor={itens.bgCollor}
                    />
                )
            })}
        </div>

        <div className='OverViewDiv'>
            <p1>Overview - Today</p1>
        </div>
            
        <div className='OverCardDiv'>
            {Overview.map((itens)=>{
                return(
                    <OverViewCards
                        Title={itens.title}
                        Logo={itens.logo}
                        Number={itens.number}
                        Percent={itens.percent}
                        Up={itens.up}
                    />
                )
            })} 
        </div>       
        
     </div>
  );
}