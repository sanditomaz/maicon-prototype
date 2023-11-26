import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Caroussel () {
    return(
        <Carousel dynamicHeight='true' autoPlay='true' transitionTime={1} swipeable='true' infiniteLoop='true' >
                <div>
                    <img src="/image/imageeng01.jpg" />
                   
                </div>
                <div>
                    <img src="/image/imageeng02.jpg" />
                    
                </div>
                <div>
                    <img src="/image/imageeng03.jpg" />
                    
                </div>
              
                <div>
                    <img src="/image/imageeng05.jpg" />
                    
                </div>
                <div>
                    <img src="/image/imageeng06.jpg" />
                    
                </div>
                <div>
                    <img src="/image/imageeng07.jpg" />
                    
                </div>
               
                <div>
                    <img src="/image/imageeng08.jpg" />
                    
                </div>
                <div>
                    <img src="/image/imageeng09.jpeg" />
                    
                </div>
                <div>
                    <img src="/image/imageeng10.jpg" />
                    
                </div>

                <div>
                    <img src="/image/imageeng11.jpg" />
                    
                </div>

                <div>
                    <img src="/image/imageeng12.jpeg" />
                    
                </div>
                <div>
                    <img src="/image/imageeng13.jpg" />
                 </div> 
                 <div>
                    <img src="/image/imageeng06.jpg" />
                    
                </div>  
                    <div>
                    <img src="/image/imageeng04.jpg" />
                    
                </div>
            </Carousel>
    )
}