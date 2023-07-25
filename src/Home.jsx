import React from 'react'
import vg from "./assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube} from "react-icons/ai";
const Home = () => {
  return (
 <>
       <div className='home' id ="home">
    <main>
        <h1>TechStar</h1>
        <p>Solution to all your problems</p>
        </main>
    </div>
    <div className='home2'>
        <img src={vg} alt="Graphics was here" />
        <div>
            <p>We are your one and only solution for every problems related to tech.We are leading education company whose aim is to scale free education all over India.</p>
        </div>
    </div>
    <div className="home3" id="about">
    <div>
        <h1>Who we are?</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis vitae id quibusdam ut ullam saepe, ducimus consequuntur natus dolores magnam odit sint libero illo ex mollitia debitis quisquam unde aspernatur maxime, nemo a consequatur? Enim in aspernatur eos, eum suscipit dolore maiores fugit laudantium minima praesentium officia veritatis. Voluptatibus laboriosam officia, saepe culpa id sunt esse molestias laborum repellendus eum.</p>
        </div>
    </div>
    <div className="home4" id ="brand">
        <div>
        <h1>Brands</h1>
            <article>
            {/* //For google */}
                <div style={{
                    animationDelay:"0.3s"
                }}>
                <AiFillGoogleCircle />
                    <p>Google</p>
                </div>
               {/* For AMAZON */}
                <div style={{
                    animationDelay:"0.5s"
                }}>
                <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                {/* fOR YOUTUBE */}
                <div style={{
                    animationDelay:"0.7s"
                }}>
                <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                {/* For INSTAGRAM */}
                <div style={{
                    animationDelay:"1s"
                }}>
                <AiFillYoutube/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
 </>
  )

}

export default Home