import React from 'react';
import './Mainpage.css'
import Carousel from 'react-bootstrap/Carousel';
import men from './images/men.jpg'
import women from './images/women.jpg'
import kids from './images/kids.jpg'
import beauty from './images/beauty.jpg'
import mobile from './images/mobile.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function MainPage() {
  return (
    <div>


      {/* Carousel Section */}


      <Carousel className='w-3 my-4 mx-4 px-2'>

        <Carousel.Item  >

          <img
            className=" d-block w-100"
            src={men}
            alt="First slide"
          />


          <div style={{ position: "absolute", left: "100px", top: "10px", float: "right" }}>
            <hr />
            <h4 >Top<br />
              Men's Wear
            </h4>
            <hr />
            <h5 >Collection Starting from <br />
              <span className='price'>699/-</span>only</h5>
            <hr />
            <h5>Up To <span style={{ color: "red" }}>50%</span>off</h5>
            <hr />
            <Button className='btn ' style={{ marginLeft: "60px" }}>Explore Now +</Button>
          </div>


        </Carousel.Item>

        <Carousel.Item>

          <div className='women' style={{ position: "absolute", top: "10px", float: "right", left: "15%" }}>
            <hr />
            <h1 style={{ color: "black" }}>Top<br />
              Women's Wear
            </h1>
            <hr />
            <h2>Collection Starting from <br />
              <span style={{ color: "blue" }}>699/-</span>only</h2>
            <hr />
            <h2>Up To <span style={{ color: "red" }}>50%</span>off</h2>
            <Button className='p-2' >Explore Now+</Button>
          </div>
          <img
            className="d-block w-100"
            src={women}
            alt="Second slide"
          />



        </Carousel.Item>
        <Carousel.Item>

          <img
            className="d-block w-80 "
            src={kids}
            alt="Third slide"
          />
          <div style={{ position: "absolute", left: "10px", top: "10px", float: "right", left: "70%" }}>
            <hr />
            <h1 style={{ color: "#BA21B0" }}>Top<br />
              Kids's Wear
            </h1>
            <hr />
            <h2 style={{ color: "#BA21B0" }}>Collection Starting from <br />
              <span style={{ color: "blue" }}>699/-</span>only</h2>
            <hr />
            <h2 style={{ color: "#BA21B0" }}>Up To <span style={{ color: "red" }}>50%</span>off</h2>
            <Button className='p-2'>Explore Now+</Button>
          </div>


        </Carousel.Item>


        <Carousel.Item>

          <img
            className="d-block w-100 "
            src={beauty}
            alt="Third slide"
          />
          <div className='p-5 w-30' style={{ position: "absolute", left: "10px", top: "10px", float: "right", left: "70%" }}>
            <hr />
            <h1 style={{ color: "#6136F6" }}>Best<br />
              Cosmetic
            </h1>
            <hr />
            <h2 style={{ color: "#6136F6" }}>Collection Starting from <br />
              <span style={{ color: "blue" }}>699/-</span>only</h2>
            <hr />
            <h2 style={{ color: "#6136F6" }}>Up To <span style={{ color: "red" }}>50%</span>off</h2>
            <Button className='p-2'>Explore Now+</Button>
          </div>


        </Carousel.Item>
        <Carousel.Item>

          <div className='p-5 ' style={{ position: "absolute", left: "10px", float: "right", left: "70%" }}>

            <h1 style={{ color: "white" }}>Best<br />
              Offer's on mobiles
            </h1>
            <hr />
            <h2 style={{ color: "white" }}>Collection Starting from <br />
              <span style={{ color: "blue" }}>29999/-</span>only</h2>
            <hr />
            <h2 style={{ color: "white" }}>Up To <span style={{ color: "red" }}>50%</span>off</h2>

            <Button className='p-2'>Explore Now+</Button>
          </div>
          <img
            className="d-block w-100"
            src={mobile}
            alt="Third slide"
          />


        </Carousel.Item>
      </Carousel>
      <hr />

      {/* Deals Section */}
      <section>
        <h2 className='heading'>Deal of the day</h2>
       
        <div className='cards'>
          
          <Card className='card-body' >
            <Card.Img variant="top" height="350px" src="https://th.bing.com/th/id/OIP.qPB2ZcCcfouU7VLXGgBxGAHaJX?w=201&h=254&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
            <hr/>
            <Card.Body>
              <Card.Title>Women's Tops</Card.Title>
              <Card.Text>
              starting upto 199/- only
              </Card.Text>
              <Button variant="primary">View more</Button>
            </Card.Body>
          </Card>

          <Card className='card-body' style={{ width: '15rem' }}>
            <Card.Img variant="top" height="350px" src="https://th.bing.com/th/id/OIP.TA8KiMx_I6aeEk87I9y81AHaJo?w=201&h=262&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
            <hr/>
            <Card.Body>
              <Card.Title>Mens shirt</Card.Title>
              <Card.Text>
              starting upto 299/- only
              </Card.Text>
              <Button variant="primary">view more</Button>
            </Card.Body>
          </Card>

          <Card className='card-body' >
            <Card.Img className='py-4' height="350px" variant="top" src="https://th.bing.com/th/id/OIP.QrlPhOy9Lo29pHehohsYLAHaHa?w=192&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
            <hr/>
            <Card.Body>
              <Card.Title>Kid's Toys</Card.Title>
              <Card.Text>
                starting upto 199/- only
              </Card.Text>
              <Button variant="primary">view more</Button>
            </Card.Body>
          </Card>
          <Card className='card-body' >
            <Card.Img variant="top" height="350px" src="https://th.bing.com/th?id=OIP.YuWqXPMGu_u1HHVVuI1VcgHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
            <hr/>
            <Card.Body>
              <Card.Title>kid's fashion</Card.Title>
              <Card.Text>
              starting upto 199/- only
              </Card.Text>
              <Button variant="primary">view more</Button>
            </Card.Body>
          </Card>
          <Card className='card-body' style={{ width: '15rem' }}>
            <Card.Img variant="top" height="350px" src="https://www.mobilepriceall.com/wp-content/uploads/2021/08/Realme-GT-Neo2-Image-1024x1024.jpg" />
            <hr/>
            <Card.Body>
              <Card.Title>Mobile </Card.Title>
              <Card.Text>
                
              </Card.Text>
              <Button variant="primary">view more</Button>
            </Card.Body>
          </Card>
        </div>
      </section>
      <hr/>

      <hr />

{/* Offer Section */}
<section>
  <h2 className='heading'>Offer</h2>
 
  <div className='cards'>
    
    <Card className='card-body' >
      <Card.Img variant="top" height="350px" src="https://th.bing.com/th/id/OPA.xQ1f8R6rfNHDAw474C474?w=165&h=220&rs=1&o=5&dpr=1.3&pid=21.1" />
      <hr/>
      <Card.Body>
        <Card.Title>Women's Tops</Card.Title>
        <Card.Text>
        starting upto 199/- only
        </Card.Text>
        <Button variant="primary">View more</Button>
      </Card.Body>
    </Card>

    <Card className='card-body' style={{ width: '15rem' }}>
      <Card.Img variant="top" height="350px" src="https://th.bing.com/th/id/R.dc5ad04d3a86518d035066d051a3842c?rik=sMGf2Q9uYV%2fxEg&riu=http%3a%2f%2fwww.fashiontrends.pk%2fwp-content%2fuploads%2f2012%2f02%2fCasual-Dresses-For-Men-05.jpg&ehk=1Ox46luoES7ZSS4zDScEka35kO4Nvz8UpXZ2%2fA1D3lE%3d&risl=&pid=ImgRaw&r=0" />
      <hr/>
      <Card.Body>
        <Card.Title>Mens shirt</Card.Title>
        <Card.Text>
        starting upto 299/- only
        </Card.Text>
        <Button variant="primary">view more</Button>
      </Card.Body>
    </Card>

    <Card className='card-body' >
      <Card.Img className='py-4' height="350px" variant="top" src="https://th.bing.com/th/id/OIP.HS0Hzgo6jMYRMc0H7RmNhAHaKz?pid=ImgDet&rs=1" />
      <hr/>
      <Card.Body>
        <Card.Title>Kid's Toys</Card.Title>
        <Card.Text>
          starting upto 199/- only
        </Card.Text>
        <Button variant="primary">view more</Button>
      </Card.Body>
    </Card>
    <Card className='card-body' >
      <Card.Img variant="top" height="350px" src="https://th.bing.com/th/id/OIP.-2mXLElA-nOMyA6t2Ac6TQHaHa?pid=ImgDet&w=800&h=800&rs=1" />
      <hr/>
      <Card.Body>
        <Card.Title>laptop</Card.Title>
        <Card.Text>
        starting upto 39999/- only
        </Card.Text>
        <Button variant="primary">view more</Button>
      </Card.Body>
    </Card>
    <Card className='card-body' style={{ width: '15rem' }}>
      <Card.Img variant="top" height="350px" src="https://cdn.shopify.com/s/files/1/0390/2985/products/01137_1024x1024.jpg?v=1661752933" />
      <hr/>
      <Card.Body>
        <Card.Title>lipstick</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary">view more</Button>
      </Card.Body>
    </Card>
  </div>
</section>
<hr/>


    </div>
  )

}

export default MainPage;
