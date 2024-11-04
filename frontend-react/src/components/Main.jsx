import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
    
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className="text-light">Stock Prediction Portal</h1>
                <p className='text-light lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio earum nesciunt doloribus sapiente voluptas eius animi quibusdam quidem a similique libero facilis, quisquam molestiae quasi commodi alias laboriosam, doloremque deleniti. Ducimus fugiat molestias cumque temporibus aliquam suscipit fuga id voluptatibus?</p>
                <Button text="Login" class="btn-outline-info" />
            </div>
        </div>
      
    </>
  )
}

export default Main