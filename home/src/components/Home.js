import React from 'react'
import p from "../assets/2.jpeg"
import { AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,} from "react-icons/ai"



const Home = () => {
  return (
    <>
    <div className="home" id="home">

    <main>
        <h1>FitCzar</h1>
        <p>WorkHard Gain Hard</p>
    </main>
    </div>

  <div className="home2nd">
   <img src={p} alt="photos"/>
   <div>
    <p>
    If you do not make time for exercise, you will probably have to make time for illness.
    </p>
   </div>
  </div>
  <div className="home3rd" id="about">
  <diV>
  <br></br>
  <br></br>
  <br></br>
     <h1> we are team Fitczar</h1>
     <p>
     FitCzar Project Introduction FitCzar is a planned Web application for assisting users as they pursue customized health and fitness goals. It will track progress, make recommendations, accept user choices and updates, and connect users with resources to support their health and fitness journey The following components are :
<br></br>
Web app(FitCzar fitness App) This application will allow each user to create and update a profile of their health and fitness data, and their personal goals. It will convey this information to the analysis program, receive and display recommendations made by the analysis program, report user choices and updates back to the analysis program, and remind users of actions required by their chosen regimen at appropriate times. Users will have full control over whether and when to receive these notifications. It will also have the capability to direct users to services advertised by certified trainers, nutritionists, fitness facilities, and other health professionals.
Analysis program This program, running on a hosting service, will be the brains of FitCzar. It will receive input from each user's Web app, analyze their data and their goals, and send back personalized recommendations for display and use by the app. For users of the free version, it will send advertisements for health and fitness products and services that align with each user's stated goals and projected needs. An optional paid version will instead provide a connection for users to consult with certified trainers, nutritionists, and other health and fitness professionals under contract to FitCzar.
Database The database, hosted on the same service as the analysis program, will store all data and recommendations for each user. Plan Kapil Parsodkar and Alan Clark will share responsibility for developing this component of the system. The back-end analysis program will be developed primarily by Kapil and Arun Rao Nayineni using Node.js The database will be developed using NoSQL( Mongoose) and Node.js. Development will follow the Scrum methodology with two-week sprints.
     </p>
     </diV>
  </div>

  <div className='home4th' id="brands">
  <div>
    <h1>
      Brands
    </h1>
    <article>
    <div>
      <AiFillGoogleCircle/>
      <p>Google</p>
      </div>


      <div>
      <AiFillAmazonCircle/>
      <p>Amazon</p>
      </div>

      <div>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
    </article>
   
  </div>

  </div>
    </>
  )
}

export default Home