import { useState, useEffect, memo } from 'react'
import Menu from "../menu/Menu"
import Card from "../card/Card"

const Home = () => {

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
    })

    const [menu, setMenu] = useState([])
    const [todayMenu,setTodayMenu]=useState()

    const [showToday, setShowToday] = useState(true);
    const [showTomorrow, setShowTomorrow] = useState(false);
    const [showThisMonth, setShowThisMonth] = useState(false)

    
    const tarihAl = () => {
        const today = new Date();

        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Aylar 0'dan başlar, bu yüzden 1 ekliyoruz
        const day = String(today.getDate()).padStart(2, '0'); // Gün bilgisini iki haneli hale getiriyoruz

        const formattedDate = `${year}-${month}-${day}`;

        console.log(formattedDate);
        return formattedDate

    }
    const findTodayMenu = () => {
        console.log("Bugünün menüsünü bul fonksiyonu çalıştı.")
        // Bugünün tarihini alma
        const tarih = tarihAl()
        console.log('Today\'s date:', tarih); // Bugünün gününü konsolda kontrol et
        // Bugünkü menüyü bulma
        const foundMenu = menu.find(menu => menu.date === tarih);
        console.log('Today\'s menu:', foundMenu); // Bugünkü menüyü konsolda kontrol et

        //   // Bugünkü menüyü state'e ayarlama
        //setTodayMenu(foundMenu);
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
    };
    const handleThisMonthClick = () => {
        setShowToday(false);
        setShowTomorrow(false);
        setShowThisMonth(true);
    };


    return (
        <>
            {/* HEADER START*/}
            <div className="container text-center">
                <div className='row'>
                    <h1 className='mt-4 display-1'>YurtYemek.com</h1>
                    <div className='rounded-4 content-center mb-3 bg-white d-flex justify-content-center align-items-center'>
                        <div className="w-100 mt-4 mb-4 btn-group" role="" aria-label="Basic example">
                            <button onClick={handleTodayClick} type="button" className="rounded-start-pill btn-lg text-white rounded-4 me-2 btn btn-secondary">Bugün</button>
                            <button onClick={handleTomorrowClick} type="button" className="btn-lg text-white  me-2 btn btn-secondary">Yarın</button>
                            <button onClick={handleThisMonthClick}  type="button" className=" rounded-end-pill btn-lg text-white rounded-4 me-2 btn btn-secondary">Bu Ay</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* HEADER END */}

            {/* MAIN START */}
            {showToday && (<Card />)}

            {showTomorrow && (
                <Card />

            )}

            {showThisMonth && (
                <Card />
            )}

            {/* MAIN END  */}


        </>
    )
}
export default Home