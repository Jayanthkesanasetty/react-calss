const IndiaIpl =()=>{
const IplTeam= [
    {
        team:"RCB",
        players:11,
        trophies:0,
        flag:"https://wallpaperaccess.com/full/2009369.jpg"
    },
    {
        team:"CSK",
        players:12,
        trophies:5,
        flag:"https://tse3.mm.bing.net/th?id=OIP.QRYy1rkZ5QYCelGblQJ1MQHaEo&pid=Api&P=0&h=180"
    },
    {
        team:"SRH",
        players:11,
        trophies:1,
        flag:"https://tse1.mm.bing.net/th?id=OIP.SoAaiduvpcvmqr3GogsImQHaEc&pid=Api&P=0&h=180"
    },
    {
        team:"DC",
        players:11,
        trophies:1,
        flag:"https://i.pinimg.com/originals/cb/8f/20/cb8f20c8797a3c27640314743bfbb528.jpg"
    },
    {
        team:"RR",
        players:12,
        trophies:2,
        flag:"https://newsd.in/wp-content/uploads/2018/12/626620-rajasthan-royals-082617.jpg"
    },
    {
        team:"KKR",
        players:11,
        trophies:2,
        flag:"https://cdorg.b-cdn.net/wp-content/uploads/2022/03/Cricketdata-IPL-Flag-Kolkata-Knight-Riders-2.jpg"
    },
    {
        team:"MI",
        players:11,
        trophies:5,
        flag:"https://i.pinimg.com/originals/78/49/d8/7849d8537abc41e5a7a62314fced1030.jpg"
    }
]
   
return (
    <>
     <h1>IPL TEAMS</h1> 
     <hr />
    {
        IplTeam.map((eachTeam)=>{
            const {team,players,trophies,flag}=eachTeam
            return  (
            <>
            <h3>Team Name: {team}</h3>
            <img src={flag} width="450px" height="200px"></img>
            <h4>players: {players}</h4> 
            <h4>trophies: {trophies}</h4>
      </>
        )})
    }
   
    </>
)
}
export default IndiaIpl;
