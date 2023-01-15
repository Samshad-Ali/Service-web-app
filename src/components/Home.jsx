import React from 'react'
import { AiFillGoogleCircle,AiFillYoutube,AiFillAndroid,AiFillApple} from 'react-icons/ai';

import image2 from '../assets/2.webp'

const Home = () => {
  return (<>
      <div className='home'>
          <main>
      <h1>Tony Strak</h1>
              <p>Solution to all Your Problems</p>
          </main>
      </div>
      <div className="home-2">
            <img src={image2} alt="animated-photo" />
            <div>
                <p>   We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.</p>
            </div>
      </div>
      <div className="home-3" id='about'>
          <div>
          <h1>Who we are ?...</h1>
              <p> We are the Service Provider. IT professionals characterize or conform to the ethical or technical standards of a profession. Technical standards move forward in every industry. But the speed of the IT industry arguably moves at a more broad and rapid pace.
                  We are here to solve the real world problems.But the speed of the IT industry arguably moves at a more broad and rapid pace.We are the Service Provider. IT professionals characterize or conform to the ethical or technical standards of a profession.
          </p>
        </div>
      </div>
      <div className="home-4" id='brands'>
          <div>
              <h1>Brands</h1>
              <article>
                  <div style={{animationDelay:'.1s'}} >
                      <AiFillGoogleCircle size={'3em'} />
                      <p>Google</p>
                  </div>
                  <div style={{animationDelay:'.4s'}} >
                      <AiFillApple size={'3em'} />
                      <p>Apple</p>
                  </div>
                  <div style={{animationDelay:'6s'}} >
                      <AiFillAndroid size={'3em'} />
                      <p>Android</p>
                  </div>
                  <div style={{animationDelay:'1s'}} >
                      <AiFillYoutube size={'3em'}/>
                      <p>Youtube</p>
                  </div>
              </article>
          </div>
    </div>
      </>
  )
}

export default Home;

