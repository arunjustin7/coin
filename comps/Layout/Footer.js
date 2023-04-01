
function Footer() {
  return (
    <footer className=" p-6 bg-[#84FF90] text-[#0F0450]">
      <div className="grid grid-cols-2 items-start gap-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img src="./img/logos/coinskite.png" alt="" />

            <p className="my-2">
              6th Floor, Nizara Bonanza, Door No:813,
              Anna Salai, Chennai, Tamil Nadu 600002
            </p>

            <p className="df flex-wrap my-2">
              <img src="./img/social/twitter.png" alt="" />
              <img src="./img/social/linikedin.png" alt="" />
              <img src="./img/social/facebook.png" alt="" />
              <img src="./img/social/instagram.png" alt="" />
              <img src="./img/social/whatsapp.png" alt="" />
              <img src="./img/social/medium.png" alt="" />
            </p>

            <p>
              @Copyright 2022 Coinskite Inc. All Rights Reserved
            </p>
          </div>

          <div className="dfc">
            <strong>COMPANY</strong>
            <a href="/">About kiteza</a>
            <a href="/">Coinskite</a>
            <a href="/">Career</a>
            <a href="/">Contact</a>
            <a href="/">Work</a>
            <a href="/">Insights</a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="dfc">
            <a href="/">Buyer</a>
            <a href="/">Seller</a>
            <a href="/">Mandi Price</a>
          </div>

          <div className="">
            <strong>EXPERIENCE APP ON MOBILE</strong>
            <img className="my-2" src="./img/playstore.png" alt="" />
            <img src="./img/appstore.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer