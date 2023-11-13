import './Footer.scss'

const Footer =() => {
    return(
        <div className="Footer_container">
<footer>

<div className="foot-container">

  <div className="plantku">
    <p className="logoTxt">PLANTKU</p>
    <p className="plantkuHouse">Plantku House</p>
    <p className="plantkuDescrip">Jl. Laksda Adisucipto No.51, Demangan, Kec. Depok, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55282</p>
  </div>

  <div className="Perusahaan">
    <p className="PerusahaanHead">Perusahaan</p>
    <div className="PerusahaanLinks">
      <a href="#">Tentang Kami</a>
      <a href="#">Hubungi Kami</a>
    </div>
  </div>

  <div className="Produk">
    <p className="ProdukHead">Produk</p>
    <div className="ProdukLinks">
      <a href="#">Tanaman</a>
      <a href="#">Tanaman Lain</a>
    </div>
  </div>

  <div className="Berlangganan">
    <p className="BerlanggananHead">Berlangganan</p>
      <input type="email" placeholder='Masukan Alamat Email' name="" id="emailInput" />
      <button>Submit</button>
  </div>
</div>
</footer>


        </div>
    )

}

export default Footer