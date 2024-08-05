import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT AGENCY' /> <br />
            <br />
            <Title title='We Are What You Need' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Turning your business ideas into smart digital products' />
              <p className='desc-p'>Turning business ideas into smart digital products involves a systematic approach and understanding of the target audience, market trends, and technology capabilities.
              Idea Generation and Market Research,
              Define Product Requirements,
              Design User Experience(UX),
              Technical Feasibility Assessment,
              Development and Testing,
              Iterative Refinement,
              Launch and Marketing and,
              Post-launch Support and Updates.
              The success of your digital product depends on understanding your users, delivering value, and staying responsive to their evolving needs. Continuous improvement and adaptability are key to thriving in the digital marketplace.

              </p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>1+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>2+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/setupweblogo.png' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/setuplogo.png' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our mission' />
              <br />
              <p className='misson-p'>The vision of a SetupWeb encompasses its aspirations and goals for the future. While each agency may have its own unique vision, here are some common elements that are often included. Innovation and Creativity, Client Success, Cutting-Edge Technology, Collaboration and Expertise, Thought Leadership and Industry Influence and Ethical and Sustainable Practices.</p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
