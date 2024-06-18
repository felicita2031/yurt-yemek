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
        <section class="wrapper">
            <div class="container-fostrap">
                {/* <div>
            <img src="https://4.bp.blogspot.com/-7OHSFmygfYQ/VtLSb1xe8kI/AAAAAAAABjI/FxaRp5xW2JQ/s320/logo.png" class="fostrap-logo"/>
            <h1 class="heading">
                Bootstrap Card Responsive 
            </h1>
        </div> */}
                <div class="content">
                    <div class="container-fluid">
                        <div class="row text-center">

                            <div class="ms-0 me-0 p-1 col-6 col-md-6  ">
                                <div class="rounded-5 card">
                                    <a class="img-card" href="#">
                                        <div style={{  width: '50%',height: '100px' }} className='bg-danger w-100 d-flex justify-content-center align-items-center '>
                                            <h4 class="card-title">

                                                {gosterAy && <div>{tarih}</div>}

                                                <a href="#" className='text-white'>
                                                    {mealkeys[0] === 'breakfast' && "Kahvaltı"}
                                                </a>
                                            </h4>

                                        </div>
                                        {/* <img src="https://static.ticimax.cloud/54989/uploads/urunresimleri/buyuk/kahvalti-tabagi-3-83e4.jpg" /> */}
                                    </a>
                                    <div class="card-content">
                                        <h4 class="card-title">

                                            {gosterAy && <div>{tarih}</div>}

                                            {/* <a href="#">
                                                {mealkeys[0] === 'breakfast' && "Kahvaltı"}
                                            </a> */}
                                        </h4>
                                        <ul>
                                            {
                                                breakfastItems.map((items, index) => (
                                                    <>
                                                        <li key={index}>{items.name}</li>
                                                    </>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    {/* <div class="card-read-more">
                                <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html" class="btn btn-link btn-block">
                                    Read More
                                </a>
                            </div> */}
                                </div>
                            </div>
                            <div class="ms-0 me-0 p-1 col-6 col-md-6  ">
                                <div class="rounded-5 card">
                                    <a class="img-card" href="#">
                                        <div style={{ width: '100%', height: '100px' }} className='bg-primary'></div>
                                        {/* <img src="https://www.aytenusta.com.tr/storage/images/85a4a2aaca884d2bb20886375bbee07a.jpg" /> */}
                                    </a>
                                    <div class="card-content">
                                        <h4 class="card-title">
                                            {gosterAy && <div>{tarih}</div>}
                                            <a href="http://www.fostrap.com/2016/02/awesome-material-design-responsive-menu.html">{mealkeys[2] === 'dinner' && "Akşam"}
                                            </a>
                                        </h4>
                                        <ul>
                                            {
                                                dinnerItems.map((items, index) => (
                                                    <>
                                                        <li key={index}>{items.name}</li>
                                                    </>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    {/* <div class="card-read-more">
                                <a href="https://codepen.io/wisnust10/full/ZWERZK/" class="btn btn-link btn-block">
                                    Read More
                                </a>
                            </div> */}
                                </div>
                            </div>

                            {/* <div class="col-xs-12 col-sm-4">
                        <div class="card">
                            <a class="img-card" href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">
                            <img src="https://4.bp.blogspot.com/-TDIJ17DfCco/Vtneyc-0t4I/AAAAAAAABmk/aa4AjmCvRck/s1600/cover.jpg" />
                          </a>
                            <div class="card-content">
                                <h4 class="card-title">
                                    <a href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">5  Button Hover Animation Effects
                                  </a>
                                </h4>
                                <p class="">
                                    tutorials button hover animation, although very much a hover button is very beauti...
                                </p>
                            </div>
                            <div class="card-read-more">
                                <a href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html" class="btn btn-link btn-block">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Card 