import React, {component} from 'react';
import Article from '../Article';
import Banner from '../Banner';


const Welcome = () => 
{
    return(
   <div>
    <Banner
    backgroundImage = "url(assets/img/bg-gift.jpg)"
    title = "Latest Blog Posts"
    subTitle = "Read and get updated on how we progress."
    />
   <main className="main-content bg-gray">
    <div className="row">
      <div className="col-12 col-lg-6 offset-lg-3">
      <Article />
    </div>
    </div>
    </main>
   </div>
    )
}

export default Welcome;