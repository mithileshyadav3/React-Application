import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import {TbMessageSearch} from 'react-icons/tb'
import { MdPhoneEnabled} from 'react-icons/md'
import { IoMdMail } from "react-icons/io";
const ContactForm = () => {
  const submitHandler=()=>{
    console.log("Hello")
  }
  return (
    <section className={` ${styles.container} `}>
      <div className={` ${styles.formContainer}`}> 
<div className={`${styles.Buttondiv}`}>
<Button text={"VIA SUPPORT CHAT"} icons={<TbMessageSearch />}/>
<Button text={"VIA CALL"} icons={<MdPhoneEnabled  />}/>
</div>
<div className={`${styles.secondary_btn}`}>
<Button 
isOutline={true}
text={"VIA EMAIL FORM"} icons={<IoMdMail />}/>
</div>
<form action="">
  <div className={` ${styles.form_control}`}>
    <label htmlFor="name">Name</label>
    <input type="text" />
    
  </div>
  <div className={` ${styles.form_control}`}>
    <label htmlFor="email">Email</label>
    <input type="text" />
    
  </div>
  <div className={` ${styles.form_control}`}>
    <label htmlFor="textarea"></label>
    <textarea type="text"  rows='12' placeholder='please write something' />
    </div>
  <div className= {styles.click_btn}>
    <Button  onClick={submitHandler} text={"SUBMIT BUTTON"} />
</div>
</form>
</div>
<div className={styles.image1_container}>
<img src="/images/contact.svg" alt="" />
</div>
    </section>
  )
}

export default ContactForm