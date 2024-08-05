import { Title, TitleSm } from "@/components/common/Title"
import { send } from "emailjs-com"
import { useForm } from "react-hook-form"
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { FiHelpCircle, FiInbox, FiMail } from "react-icons/fi"
import { IoAccessibilityOutline } from "react-icons/io5"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


const Contact = () => {
  const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
      send(
          "service_vh926ra", // Service ID
          "template_r23vaeb", // Template ID
          data,
          "lmafqQ3ayd3cOKMMC" 
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        formSuccess();
    })
    .catch((err) => {
        console.log("FAILED...", err);
    });
  };

  const formSuccess = () => {
    toast("Thank You We will Contact You Soon Team Setupweb!");
    document.getElementById("queryForm").reset();
};


  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' /> <br />
            <br />
            <Title title="Let's Talk About Ideas" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <a href="https://drive.google.com/file/d/1AKdPwN3wrYlzY2a3pVwc76zVIee_s8Ys/view?usp=sharing" target="_blank">
                  <h3>DOWNLOAD BROCHURE</h3>
                  </a>
                  <span>Contact Us</span>
                </div>
                <div className='box'>
                  <IoAccessibilityOutline size={30} className='icons' />
                  <a href='https://docs.google.com/forms/d/e/1FAIpQLSdzQwat6ncrKleyjRUWK6XkwWccq5xSuyEKJPwbh9xiqGVzGA/viewform?usp=sf_link' target="_blank">
                  <h3>Fill Contact Form</h3>
                  <span>Fill Our Form</span>
                  </a>
                </div>
                <div className='box'>
                  <FiMail size={30} className='icons' />
                  <a href="mailto:setupweb01@gmail.com">
                  <h3>setupweb01@gmail.com</h3>
                  </a>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className='box'>
                  <FiInbox size={30} className='icons' />
                  <a href="https://wa.me//+918877435290?text=Welcome to SetupWeb" target="_blank">
                  <h3>+91 8877435290</h3>
                  </a>
                  <span>Send Your Ideas</span>
                </div>
              </div>
              <ul>
                <li className='icon'>
                <a href="https://www.facebook.com/profile.php?id=61556665491116&mibextid=LQQJ4d" target="_blank">
                  <BsFacebook size={25} />
                  </a>
                </li>
                <li className='icon'>
                <a href="https://x.com/SetupWeb01?t=GHGISPCRV994dzfE7DpRVw&s=09" target="_blank">
                  <AiFillTwitterCircle size={25} />
                  </a>

                </li>
                <li className='icon'>
                <a href="https://www.instagram.com/setupweb_in?igsh=MTE4bzg0MWZ4bzFiMg%3D%3D&utm_source=qr" target="_blank">
                  <AiFillInstagram size={25} />
                  </a>
                </li>
                <li className='icon'>
                  <a href="https://youtube.com/@setupweb_in?si=x4LfVOi0iw18BksZ" target="_blank">
                  <AiFillYoutube size={25} />
                  </a>

                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Make an online enquiry' />
              <p className='desc-p'>Got questions? Ideas? Fill out the form below to get our proposal. </p>
              <ToastContainer />
              <form id="queryForm" onSubmit={handleSubmit(onSubmit)}>
                <div className='grid-2'>
                  <div className="inputs">
                  <span>Name</span>
                    <input type='text'
                    name="user_name"
                    placeholder="Name"
                    {...register("user_name", {
                      required: "Name is required",
                  })} />
                    {errors.user_name?.message && (
                        <p className="error">{errors.user_name?.message}</p>
                    )}
                </div>

                  <div className='inputs'>
                    <span>Email</span>
                    <input type='text'
                          name="user_email" 
                          placeholder="example@gmail.com"
                    {...register("user_email", {
                      required: "Eamil is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid Email address",
                    },
                  })} />
                    {errors.user_email?.message && (
                        <p className="error">{errors.user_email?.message}</p>
                    )}
                  
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>your budget</span>
                    <input type='text'
                    placeholder="Your Budget"
                    name="user_budget" 
                    {...register("user_budget", {
                      required: "Budget is required",
                      
                  })} />
                    {errors.user_budget?.message && (
                        <p className="error">{errors.user_budget?.message}</p>
                    )}
                  </div>
                  <div className='inputs'>
                    <span>phone number</span>
                    <input type='text'
                    name="user_number"
                    placeholder="+91 123456789"
                    {...register("user_number", {
                      required: "Phone number is required",
                    
                      minLength: {
                          value: 8,
                          message: "Phone number is not valid",
                      },
                  })} />
                    {errors.user_number?.message && (
                        <p className="error">{errors.user_number?.message}</p>
                    )}
                  </div>
                </div>
                <div className='inputs'>
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea cols='30' rows='10'
                  name="message"
                  placeholder="TELL US A BIT ABOUT YOUR PROJECT"
                  {...register("message", {
                    required: "About of Your Project is required",
              
                    minLength: {
                      value: 5,
                      message: "Minimum 5 characters required",
                  },
                  maxLength: {
                      value: 500,
                      message: "Maximum 500 characters allowed",
                  },
                })} >
                  {errors.message?.message && (
                      <p className="error">{errors.message?.message}</p>
                  )}
                  </textarea>
                </div>
                <button  className='button-primary' type="submit">Submit</button>
              </form>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
