import axios from 'axios';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';


function SingleDetails() {
    let [Blog, setBlog] = useState({})
    let singleblog = useParams()
    // console.log(singleblog.id);

    useEffect(() => {
        setTimeout(() => {
            singledata()
        }, 2000);
    }, [setBlog])

    let singledata = async () => {
        console.log(singleblog.id);

        let blogdata = await axios.get("http://localhost:3000/blog/" + singleblog.id)
        // console.log(blogdata);

        if (blogdata.data) {
            setBlog(blogdata.data)
        }
        else {
            alert("something wrong")
        }
        console.log(blogdata.data);

    }

    return (
        <>
            <div style={{width:"1500px",margin:"0px auto"}}>

                <div className="row-custom" style={{alignItems:"center"}}>
                    <div className="image-main" style={{ width: "39%" }}>
                        <img src={Blog.image} alt="" style={{width:"95%",height:"600px"}}/>
                    </div>
                    <div className="content-main" style={{ width: "59%",marginLeft:"20px" }}>
                        <h2>{Blog.title}</h2>
                        <h5 style={{color:"gray", fontSize:"22px",textAlign:"right"}}>-{Blog.blogrname}</h5>
                        <p style={{fontSize:"18px", color:"gray", wordSpacing:"5px",marginTop:"20px"}}>{Blog.description}</p>
                        <br></br>
                        <p style={{fontSize:"18px", color:"gray", wordSpacing:"5px",marginTop:"20px"}}>{Blog.sub}</p>


                    </div>
                </div>
            </div>
        </>
    )
}
export default SingleDetails