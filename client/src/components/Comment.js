import React, { useContext, useEffect, useState } from 'react'
import "../style/comments.css"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ImgName from './ImgName';


const Comment = () => {
    const commenthost = "http://localhost:5000/comment"
    var [a, seta] = useState(0);
    const [comment, setComments] = useState([]);

    const handleIncrease = () => {
        if (a < comment.length - 1) {
            a = a + 1;
            seta(a);
        }
    }
    const handledecrease = () => {
        if (a <= comment.length - 1 && a > 0) {
            a = a - 1;
            seta(a);
        }
    }
    const Comments = async () => {
        const resd = await fetch(`${commenthost}/allcomments`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const resp = await resd.json();
        setComments(resp.data)
        // resp.data.forEach(async (element) => {
        //     let name = await handleUserDetails(element.userId);
        // });
    }


    useEffect(() => {
        Comments();
    }, [])

    return (
        <>
            <div className='container' >
                <div className='comments' >
                    <div onClick={handledecrease} className='comment-arrow' >
                        <IoIosArrowBack />
                    </div>

                    {comment?.map((item, index) => {
                        return (
                            <>
                                {a === index ?
                                    <>
                                        <div className='comments-img' >
                                            <ImgName data={item.userId} />
                                        </div>
                                        <div className='comments-text' >
                                            <span key={index}>{item.desc} </span>
                                        </div>
                                    </> : ""}
                            </>
                        )
                      })
                    }

                    <div onClick={handleIncrease} className='comment-arrow'>
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comment
