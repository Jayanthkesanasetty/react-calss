import IndiaIplwithStyling from "./task on 11-7-24";
import './cardforipl.css';

export const Head=()=>{
    return (
<>
<div className="head">
<h1>INDIAN PREMIER LEAGUE</h1>
</div>
</>
    )
}

export const Nav=()=>{
    return(
      <>
        <div className="nav">
        <h3>HOME</h3>
        <h3>ABOUT</h3>
        <h3>SUPPORT</h3>
        <h3>OTHERS</h3>
        </div>
      </>
    )
}
const IplCard=()=>{
    return (
        <>
        {
        IndiaIplwithStyling.map((EachTeam)=>{
            return(
                <div className="IplCard">
                 <h1 id="h1">Team: {EachTeam.team}</h1>
      <img src={EachTeam.flag} width={400} height={250} id="img"></img>
      <h2 className="h2">players: {EachTeam.players}</h2>
      <h2 className="h2">trophies: {EachTeam.trophies}</h2>
                </div>
            )       
            
        })}
        </>
    )
}


export const Foot=()=>{
    return(
        <>
        <div className="cen">
        <center>Developed by Jayanth.K</center>
        </div>
        </>
    )
}

export default IplCard;