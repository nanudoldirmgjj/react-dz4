import './Header.scss'
import plantPic from '../../assets/MaskGroup.png'
import prevSlide from '../../assets/previos.png'
import nextSlide from '../../assets/next.png'
import logo from '../../assets/logo.png'
import searchImg from '../../assets/search1.png'
import cartImg from '../../assets/shopping-cart1.png'

import Button from '../Button/Button'

const Header =() => {
    return(
        <div className="Header_container">
                  <div className="head-block">
        <div className="plant-div">
          <img className='main-plant' src={plantPic} alt="" />
        </div>
        <div className="intro">
          <div className="topic">
            <p className='name'>Kembang Flower Mantap</p>
            <p className="name-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
          </div>


          <div className="slider">



            <div className="previos">
              <div className="prev-container">
                <div className="prev-button">
                  <img src={prevSlide} alt="" />
                  <p>Previous</p>
                </div>
                <p className="Pbut-name">Kaktus Plant</p>
              </div>
            </div>




            <div className="next">
              <div className="next-container">
                <div className="next-button">
                  <p>Next</p>
                  <img src={nextSlide} alt="" />
                </div>
                <p className="Nbut-name">Rahasia Plant</p>
              </div>
            </div>

          </div>
        </div>
      </div>
          <Button/>

      <div className="head-menu">

        <img src={logo} alt="" />

        <div className="left-menu">
          <button className='search'><img src={searchImg} alt="" /></button>
          <button className="cart"><img src={cartImg} alt="" /></button>
          <button className='signUp-but'>Sign Up</button>
          <button className='signIn-but'>Sign In</button>
        </div>

      </div>

        </div>
    )

}

export default Header