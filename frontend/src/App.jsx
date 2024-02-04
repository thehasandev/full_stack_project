import React, { useState } from 'react'
import axios from "axios"
import singUpImg from "./assets/login_img.jpg"
import { Button, Checkbox, Form, Input } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const onFinish = async (values) => {
   
    const { username, useremail, password } = values

    let data = await axios.post("http://localhost:8000/api/v1/aouth/ragestration", {
      userName: username,
      userEmail: useremail,
      userPassword: password
    })


toast.error(data.data.errorEmail)
toast.success(data.data.sucess)
toast.error(data.data.emailvalid)
toast.error(data.data.passvalidation)

};


  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <section className='singup'>
      <div className='contianer'>
        <div className="box">
          <div className='part_one'>
          <h1 style={{textAlign:"center",marginBottom:"20px"}}>Sing Up</h1>
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >

              <p>User Name*</p>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input placeholder='Enter Your User Name'/>
              </Form.Item>

              <p>Email*</p>
              <Form.Item
                name="useremail"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Email!',
                  },
                ]}
              >
                <Input placeholder='Enter Your Email'/>
              </Form.Item>

              <p>Password</p>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password placeholder='Enter Your Password'/>
              </Form.Item><br/>


              <Form.Item>
                <Button  type="primary" htmlType="submit" block>
                  Sing Up
                </Button>

              </Form.Item>
            </Form>
          
          </div>
          <div className='part_two'>
          <img src={singUpImg} alt="" />

          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    </section>
  )
}

export default App