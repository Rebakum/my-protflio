
import Layout from '../../../Layout/Layout';
import Education from '../../Education/Education';
import Projects from '../../Projects/Projects';
import TechStack from '../../TechStack/TechStack';
import About from '../About/About';
import Footer from '../Footer/Footer';

const HomePage = () => {
    return (
       
            <div >
                <Layout/>
               <div className='container mx-auto poppins'>
               <About/>  
               <TechStack/> 
               <Education/>  
               <Projects/>          
               </div>
              
               <Footer/>
                
            </div>
       
    );
};

export default HomePage;
