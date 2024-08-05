import { showcase } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const ShowCase = () => {
  return (
    <>
      <section className='showcase bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='SHOWCASE' /> <br />
            <br />
            <Title title='Fresh ideas. Bold design. Smart realisation.' className='title-bg' />
          </div>
          <br />
          <br />
          <div className='grid-3'>
            {showcase.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>
          <div className='py btn'>
            <a href="https://drive.google.com/file/d/1AKdPwN3wrYlzY2a3pVwc76zVIee_s8Ys/view?usp=sharing" target="_blank">
            <button className='secondary-button'>DOWNLOAD BROCHURE</button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShowCase
