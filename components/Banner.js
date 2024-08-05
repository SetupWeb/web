import React from "react"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='We are looking forward to start a new project' /> <br />
            <TitleLogo title='Lets take your business to the next level!' />
          </div>
          <div>
            <button className='button-primary'>
           <a href='https://docs.google.com/forms/d/e/1FAIpQLSdzQwat6ncrKleyjRUWK6XkwWccq5xSuyEKJPwbh9xiqGVzGA/viewform?usp=sf_link' target="_blank" id="btn-text" class="btn-text">Get Touch With Us</a>
            </button>
          </div>
        </div>
        
      </section>
    </>
  )
}

export default Banner
