import Common from './Common'
import web from "./images/home-gra-03.png"
function About() {
    return (
        <>
            <Common name="Welcom to About page" imgsrc={web} visit='/Contact' btnname="Contact Now" />
        </>
    );
  }
  
  export default About;