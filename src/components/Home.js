import '../components/Home.css';
import Navbar from "./Navbar";
import vid from "../video/video.mp4";
import img1 from "../imgs/1.png";
import img2 from "../imgs/2.png";
import img3 from "../imgs/3.png";
function Home() {
    return(
      <div id="home">
          <Navbar />
      <video id="vid" autoPlay loop muted>
          <source src={vid} type='video/mp4'/>
      </video>
        <div className='container grid'>
        <div id="left">
          <h2 className="heading">
            NEXT LEVEL<br/>
            DESIGN &
            <br/>
             ENGINEERING
          </h2>
          <div className="box"></div>

          <h2 className="description">
          You have the vision for a stunning digital experience. We’re<br/>
          the software design and engineering team that can bring it to life.
          </h2>
          <a className="btn-red">
              Let's  get started
          </a>

        </div>
        <div id="right">
        
        <i class="far fa-play-circle play"></i>
       </div>
      </div>
      <div className="container">
         <div className="line"></div>
         <div className="holder">
          <div className="slogan">
             <h4>WE'VE BUILT SOLUTIONS FOR...</h4>
          </div>
          <div className="logos">
           <a href="https://www.strv.com/our-work/microsoft"><img src={img2}/></a> 
           <a href="https://www.strv.com/our-work/boosted"><img src={img1}/></a> 
           <a href="https://www.strv.com/our-work/feeln"><img src={img3}/></a> 
          </div>
         </div>
      </div>

      
    </div>)
  }
  
  export default Home;
  