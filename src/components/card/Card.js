import './Card.css'
const Card = ({ Menu, aylik }) => {

  const breakfastItems = Menu ? Menu.meals.breakfast : []
  const dinnerItems = Menu ? Menu.meals.dinner : []

  const tarih = Menu ? Menu.date : []
  //console.log(tarih)

  const mealkeys = Menu ? Object.keys(Menu.meals) : []
  console.log(mealkeys)
  const mealkeys1 = Menu ? Object.keys(Menu) : []
  console.log(mealkeys1[0])
  const gosterAy = aylik

  return (
    
      <div className='container mt-2 mb-4'>



        
        
        <div className='row d-flex justify-content-center '>

       

          <div className='col-6 ms-0 me-0 p-0  col-md-6'>

            {/* KART BASLANGIC */}

            <div className="card m-0 p-0 hover-shadow rounded-5">
              <div className='baslikKahvalti meal-shadow mt-0 h-10 rounded-5  text-white d-flex justify-content-left align-items-center'>
                <h2 className='ms-3' style={{ "font-style": "italic" }}>
                  {gosterAy && <div>{tarih}</div>}

                  <a href="#" className='text-white'>
                    {mealkeys[0] === 'breakfast' && "Kahvaltı"}
                  </a>
                </h2>
              </div>
              <div className="card-body position-relative">
                <ul className='bold-list-items li text-left'>
                {
                                                breakfastItems.map((items, index) => (
                                                    <>
                                                        <li key={index}>{items.name}</li>
                                                    </>
                                                ))
                                            }
                </ul>
              </div>
            </div>

            {/* KART SON  */}

          </div>

          <div className='col-6 w-41  ms-0 me-0 p-0     col-md-6   '>

            {/* KART BASLANGIC */}

            <div className="card hover-shadow rounded-5">
              <div className='baslikAksam meal-shadow custom-shadow mt-0 h-10 rounded-5 text-white d-flex justify-content-left align-items-center'>
                <h2 className='ms-3' style={{"font-style":"italic"}}>
                  {gosterAy && <div>{tarih}</div>}
                  <a href="http://www.fostrap.com/2016/02/awesome-material-design-responsive-menu.html">{mealkeys[2] === 'dinner' && "Akşam"}
                  </a>
                </h2>
              </div>
              <div className="card-body position-relative">
                <ul className='bold-list-items li text-left'>
                {
                                                dinnerItems.map((items, index) => (
                                                    <>
                                                        <li key={index}>{items.name}</li>
                                                    </>
                                                ))
                                            }
                </ul>
              </div>
            </div>

            {/* KART SON  */}





          </div>
        </div>

      </div>
    
  );

}
export default Card 