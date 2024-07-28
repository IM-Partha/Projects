import { Field, Form, Formik , ErrorMessage } from 'formik'
import React from 'react'
import * as yup from 'yup'
const Homedata = () => {
    const validation = {
        name:'',
        email:'',
        phone:''
    }
    const defaultvalidation = yup.object().shape({
        name: yup.string().required("Please Enter Valid Name")
    })

    const handelick=(values)=>{
        console.log(values)
    }
  return (
    <div>
        
        <Formik initialValues={validation}
        validationSchema={defaultvalidation}
        onSubmit={handelick}
        >
            <Form className='text-center ' >
                <label>Name</label>
                <Field className='border' name='name' type='text'/>
                <p className='text-red-600'><ErrorMessage name='name' /></p>
                <br/>
                <label>email</label>
                <Field className='border' name='email' type='text'/>
                <br/>
                <label>phone</label>
                <Field className='border' name='pnone' type='text'/>
                <br/>
                <button className='bg-blue-500 p-2 rounded-md' type='submit'>Submit</button>
            </Form>
        </Formik>
    </div>
  )
}

export default Homedata