
import Layout from '../../../Layout/Layout';
import Education from '../../Education/Education';
import Projects from '../../Projects/Projects';
import TechStack from '../../TechStack/TechStack';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const HomePage = () => {
    return (
       
            <div >
                <Layout/>
               <div className='container mx-auto poppins'>
               <About />
               <Services/>  
               <TechStack /> 
               <Education/>  
               <Projects/>
               <Contact/>  
                     
               </div>
              
               <Footer/>
                
            </div>
       
    );
};

export default HomePage;
