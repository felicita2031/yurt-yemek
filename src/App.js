import { useState, useEffect, memo } from 'react'
import Menu from "./components/menu/Menu"
import Card from "./components/card/Card"

import './App.css'

const App = () => {

  useEffect(() => {

    // const fetchMenu = async () => {
    //     try {
    //         // console.log("app mount oldu")
    //         // const response = await axios.get('http://188.132.232.221:5000/menus');
    //         // setMenu(response.data)
    //     } catch (error) {
    //         // console.error('Error fetching menu:', error);
    //     }
    // };
    // fetchMenu();
    console.log("HOME Componenti Mouth oldu")
    const fetchMenu = async () => {
      try {
        setMenu(Menu)
      } catch (error) {
        console.error('Error fetching menu:', error)
      }
    }
    fetchMenu()


    return () => {
      console.log("Header  Componenti Unmouth oldu")
    }

  }, [])

  useEffect(() => {
    console.log("HOME Componenti Render oldu")
    findTodayMenu()
  })

  const [menu, setMenu] = useState([])
  const [todayMenu, setTodayMenu] = useState()
  const [tomorrowMenu, setTomorrowMenu] = useState()
  const [mounthMenu, setMounthMenu] = useState()

  const [showToday, setShowToday] = useState(true);
  const [showTomorrow, setShowTomorrow] = useState(false);
  const [showThisMonth, setShowThisMonth] = useState(false)

  const tarihAl = (gun) => {
    const today = new Date();

    if (gun === "today") {

      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0'); // Aylar 0'dan başlar, bu yüzden 1 ekliyoruz
      const day = String(today.getDate()).padStart(2, '0'); // Gün bilgisini iki haneli hale getiriyoruz

      const formattedDate = `${year}-${month}-${day}`;

      //console.log(formattedDate);
      return formattedDate
    }
    if (gun === "tomorrow") {

      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0'); // Aylar 0'dan başlar, bu yüzden 1 ekliyoruz
      const day = String(today.getDate() + 1).padStart(2, '0'); // Gün bilgisini iki haneli hale getiriyoruz

      const formattedDate = `${year}-${month}-${day}`;

      //console.log(formattedDate);
      return formattedDate
    }
  }
  const findTodayMenu = () => {
    //console.log("Bugünün menüsünü bul fonksiyonu çalıştı.")
    // Bugünün tarihini alma
    const tarih = tarihAl("today")
    //console.log('Today\'s date:', tarih); // Bugünün gününü konsolda kontrol et
    // Bugünkü menüyü bulma
    const foundMenu = menu.find(menu => menu.date === tarih);
    //console.log('Today\'s menu:', foundMenu); // Bugünkü menüyü konsolda kontrol et

    //   // Bugünkü menüyü state'e ayarlama
    setTodayMenu(foundMenu);
  }
  const findTomorrowMenu = () => {
    //console.log("Bugünün menüsünü bul fonksiyonu çalıştı.")
    // Bugünün tarihini alma
    const tarih = tarihAl("tomorrow")
    //console.log('Today\'s date:', tarih); // Bugünün gününü konsolda kontrol et
    // Bugünkü menüyü bulma
    const foundMenu = menu.find(menu => menu.date === tarih);
    //console.log('Today\'s menu:', foundMenu); // Bugünkü menüyü konsolda kontrol et

    // Yarınki menüyü state'e ayarlama
    setTomorrowMenu(foundMenu);
  }
  const findMounthMenu = () => {

    //console.log('Today\'s date:', tarih); // Bugünün gününü konsolda kontrol et
    // Bugünkü menüyü bulma
    const foundMenu = menu
    //console.log('Today\'s menu:', foundMenu); // Bugünkü menüyü konsolda kontrol et

    // Yarınki menüyü state'e ayarlama
    setMounthMenu(foundMenu);
  }
  const handleTodayClick = () => {
    setShowToday(true);
    setShowTomorrow(false);
    setShowThisMonth(false);
    findTodayMenu()


  };

  const handleTomorrowClick = () => {
    setShowToday(false);
    setShowTomorrow(true);
    setShowThisMonth(false);
    findTomorrowMenu()


  };
  const handleThisMonthClick = () => {
    setShowToday(false);
    setShowTomorrow(false);
    setShowThisMonth(true);
    findMounthMenu()

  };
  return (
    <div className='container'>
      {/* HEADER START*/}
      <div className="container text-center">
        <div className='row'>

          <h1 className='mt-4 mb-2 display-2 '><strong style={{"font-weight":"900"}}>YurtYemek</strong><span style={{"font-weight":"100"}}>.com</span></h1>

            <div className='col-12 d-flex justify-content-center  ms-0 me-0 p-0'>

              <div className='ms-2 w-100 rounded-4  h-12 mb-3 bg-white d-flex justify-content-between align-items-center'>

                <button style={{backgroundColor:"#F31163" ,fontWeight:"bold"}} onClick={handleTodayClick} type="button" className="ms-2 rounded-4 btn-md btn text-white  ">Bugün</button>
                <button onClick={handleTomorrowClick} type="button" className="  rounded-4 btn-md text-dark  btn btn-white">Yarın</button>
                <button onClick={handleThisMonthClick} type="button" className="me-2  rounded-4 btn-md text-dark  btn btn-white">Bu Ay</button>


              </div>

            </div>

          



        </div>
      </div>
      {/* HEADER END */}

      {/* MAIN START */}
      {showToday && (<Card Menu={todayMenu} />)}
      {showTomorrow && (<Card Menu={tomorrowMenu} />)}
      {showThisMonth && menu.map((menuDay, index) => (

        <Card Menu={menuDay} aylik={true} />

      ))
      }
      {/* MAIN END  */}
      {/* FOOTER START */}
      {/* <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Yurt Yemek App. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="/about">Hakkımızda</a></li>
            <li><a href="/contact">Bize Ulaşın</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
      </footer> */}
      {/* FOOTER END  */}

    </div>
  )
}
export default App