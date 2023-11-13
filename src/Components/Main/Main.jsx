import './Main.scss'
import fastDriveImg from '../../assets/fast1.png'
import headphonesImg from '../../assets/headphones1.png'
import plantImg from '../../assets/plant1.png'
import dollarImg from '../../assets/dollar-symbol1.png'
import cac1 from '../../assets/cac1.png'
import cac2 from '../../assets/cac2.png'
import cac3 from '../../assets/cac3.png'
import cac4 from '../../assets/cac4.png'
import cac5 from '../../assets/cac5.png'

import relaxImg1 from'../../assets/relaxPic1.png'
import relaxImg2 from'../../assets/relaxPic2.png'

import favPlant from '../../assets/favPlant.png'

const Main =() => {
    return(
        <div className="Main_container">
      <div className="benefits">

<div className="benefit">
  <div className="benefit-container">
    <div className="ben-name">
      <img src={fastDriveImg} alt="" />
      <p>Fast Delivery</p>
    </div>
    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p></div>
</div>

<div className="benefit">
  <div className="benefit-container">
    <div className="ben-name">
      <img src={headphonesImg} alt="" />
      <p>Great Customer Service</p>
    </div>
    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p></div>
</div>

<div className="benefit">
  <div className="benefit-container">
    <div className="ben-name">
      <img src={plantImg} alt="" />
      <p>Original Plants</p>
    </div>
    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p></div>
</div>

<div className="benefit">
  <div className="benefit-container">
    <div className="ben-name">
      <img src={dollarImg} alt="" />
      <p>Affordable Price</p>
    </div>
    <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p></div>
</div>



</div>



<div className="featuredPlants">

<div className="filter">
  <p className="featuredTitle">           Featured Plants       </p>
  <form className='filterForm'>
    <select name="" id="filterChoice">
      <option value="">most popular</option>
      <option value="">cheaper first</option>
      <option value="">more expensive at first</option> 
    </select>
  </form>

</div>


<div className="cactusList">

  <div className="cactus">

    <img src={cac1} alt="" />

    <div className="cactusName">
      <div className="cactusContainer">

        <p className="cacName">Kaktus Plants</p>
        <p className="cacPrice">IDR 85.000</p>

      </div>
    </div>
  </div>
  
  <div className="cactus">

    <img src={cac2} alt="" />

    <div className="cactusName">
      <div className="cactusContainer">

        <p className="cacName">Landak Plants</p>
        <p className="cacPrice">IDR 105.000</p>
        
      </div>
    </div>
  </div>


  <div className="cactus">

    <img src={cac3} alt="" />

    <div className="cactusName">
      <div className="cactusContainer">

        <p className="cacName">Kecubung Plants</p>
        <p className="cacPrice">IDR 85.000</p>
        
      </div>
    </div>
  </div>


  <div className="cactus">

    <img src={cac4} alt="" />

    <div className="cactusName">
      <div className="cactusContainer">

        <p className="cacName">Kecubung Plants</p>
        <p className="cacPrice">IDR 85.000</p>
        
      </div>
    </div>
  </div>


  <div className="cactus">

    <img src={cac5} alt="" />

    <div className="cactusName">
      <div className="cactusContainer">

        <p className="cacName">Kecubung Plants</p>
        <p className="cacPrice">IDR 85.000</p>
        
      </div>
    </div>
  </div>



</div>


</div>


<div className="relax">




<div className="relax-left">

<div className="textSide">
  <p className="boldTopic">Buy more plants, it helps you to be relaxed</p>
  <p className="thickDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida gravida aliquam. Pellentesque et lobortis nisl. Sed et mauris justo. Nulla eu enim non mauris maximus dignissim. Maecenas vitae eros sapien. Quisque pellentesque tempus dignissim.</p>
</div>

<img src={relaxImg1} alt="" />


</div>

<div className="relax-right">
<img src={relaxImg2} alt="" />
</div>
</div>


<div className="favoritePlant">

<div className="favText">
<p>Get your favourites plant on our shop now</p>
<button>Visit Shop</button>
</div>
<img src={favPlant} alt="" />
</div>

        </div>
    )

}

export default Main