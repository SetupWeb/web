import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"


  const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Our expertise' />
            <p>SetupWeb are Professional service providers that specialize in helping businesses navigate the digital landscape and achieve their marketing goals.</p>
          </div>
          <div className='hero-content grid-4'>
            {expertise.map((item) => (
            <Card data={item} key={item.id} />
              
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
