import React from 'react'
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className='contact_section'>
        <h1 className={`${styles.contact_heading}`}>CONTACT US</h1>
        <p className={`${styles.contact_para}`}>
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.{" "}
        </p>
    </div>
  )
}

export default Contact