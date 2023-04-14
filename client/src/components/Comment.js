import React from 'react'
import "../style/comments.css"
import photo from '../images/Logo.png'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Comment = () => {
    return (
        <>
            <div className='container' >
                <div className='comments' >
                    <div className='comment-arrow' >
                        <IoIosArrowBack />
                    </div>
                    <div className='comments-img' >
                        <img src={photo} alt='img' /><br />
                        <span>By: Durgesh Chaudhry</span>
                    </div>
                    <div>
                        <span>
                            Hii, Your Services are show good. I am well satisfied <br /> and also talk the best about your Services
                            Hii, Your Services <br /> are show good. I  am well satisfied and also talk <br /> the best about your Services
                        </span>
                    </div>

                    <div className='comment-arrow'>
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comment
