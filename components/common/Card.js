import Link from "next/link"
import { HiOutlineArrowRight } from "react-icons/hi"
import { TitleSm } from "./Title"

export const Card = ({ data, caption, show, path }) => {
  return (
    <>
      <div className='card'>
        <div className='card-img'>
          <img src={data.cover} alt={data.title} />
        </div>
        <div className='card-details'>
          <Link href="https://www.behance.net/setupweb-in" target="_blank" className='title-link'>
            <TitleSm title={data.title} />
          </Link>
          {caption && (
            <Link href="/#">
              {caption} <HiOutlineArrowRight className='link-icon' />
            </Link>
          )}
          <div className='flex'>
            <span> {data.catgeory} </span> {data.date && <span> / {data.date}</span>}
          </div>

          {show && (
            <ul>
              {data.desc.map((text, i) => (
                <li key={i}> - {text.text}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}
