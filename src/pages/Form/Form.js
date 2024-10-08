import React from 'react';
import style from "./form.module.css";

function Form() {
  return (
    <>
     <div className={style.form}>
     <div className={`container-fluid mt-5 ${style.background}`}>
        <div className='row justify-content-center'>
          <div className='col-12 col-sm-10 col-md-8 col-lg-4'>
            <div className={`${style.card} mt-3 mb-3 card`}>
              <div className='card-body form-bg'>
                <form>
                  <div className='mb-3'>
                    <label className='form-label text-light' htmlFor="name">First Name</label>
                    <input className={`${style.formcontrol} form-control text-light`} id="name" placeholder='Enter your name' type="text" />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label text-light' htmlFor="email">Email</label>
                    <input className={`${style.formcontrol} form-control text-light`} id="email" placeholder='Enter your email' type="email" />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label text-light' htmlFor="age">Age</label>
                    <input className={`${style.formcontrol} form-control text-light`} id="age" placeholder='Enter your age' type="number" />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label text-light' htmlFor="phone">Phone Number</label>
                    <input className={`${style.formcontrol} form-control text-light`} id="phone" placeholder='Enter your phone number' type="tel" />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label text-light' htmlFor="dob">Date of Birth</label>
                    <input className={`${style.formcontrol} form-control text-light`} id="dob" placeholder='Enter your date of birth' type="date" />
                  </div>
                  <div className='text-center'>
                    <button className='btn btn-outline-light'>SUBMIT</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  );
}

export default Form;
