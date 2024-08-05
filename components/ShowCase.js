import React from "react"
import { Title } from "./common/Title"
import { showcase } from "@/assets/data/dummydata"
import { Card } from "./common/Card"
import Link from "next/link"
import { HiOutlineArrowRight } from "react-icons/hi"

const ShowCase = () => {
  return (
    <>
      <section className='showcase'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Selected cases' />
          </div>
          <div className='hero-content grid-3 py'>
            {showcase.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </div>
          <div className='card links'>
            <Link href="https://drive.google.com/file/d/1AKdPwN3wrYlzY2a3pVwc76zVIee_s8Ys/view?usp=sharing" target="_blank">
            {/* <a href={Brocuher} download> */}
              DOWNLOAD BROCHURE <HiOutlineArrowRight className='link-icon' />
              {/* </a> */}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShowCase
