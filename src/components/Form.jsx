import { useEffect, useState } from "react";
import "./Home.css"
import axios from "axios";
function Formm() {
    let [data, setdata] = useState({})
    let [category, setcategory] = useState([])


// useEffect(()=>{
//     categorydata() 
// },[])


    let ChangeInput = (e) => {
        let { name, value } = e.target;
        setdata({ ...data, [name]: value })
    }
    let submitData = async (e) => {
        e.preventDefault()
        console.log(data);
        let newdata = await axios.post("http://localhost:3000/blog", data)
        if (newdata.data) {
            alert("sucess")
            setdata({})
        }
        else {
            alert("something wrong")
        }


    }

    // let categorydata = async () => {
    //     let catdata = await axios.get("http://localhost:3000/categories")
    //     if (catdata.data) {
    //         setcategory(catdata.data ? catdata.data : [])
    //     }
    //     else {
    //         alert("not get")
    //     }

    // }
    return (
        <>
            <form action="" method="post" style={{ padding: "80px" }} onSubmit={(e) => submitData(e)}>
                <table align="center" className="table-sign-up">
                    <h3 style={{ textAlign: "center", marginBottom: "-20px", marginTop: "20px" }}>Bloging</h3>
                    <div style={{ paddingTop: "20px", textAlign: "center", padding: "50px 70px" }}>
                        <tr className="label-sign-up">Category</tr>
                        <tr><select name="category" className="sign-up-input" id="" onChange={(e) => ChangeInput(e)} style={{ textAlign: "center", fontSize: "18px" }} value={data.category ? data.category : ""}>
                            <option value="">--select category--</option>
                            
                            <option value="Entertainment">Entertainment</option>
                            <option value="Technology">Technology</option>
                            <option value="Sports">Sports</option>
                            <option value="Business">Business</option>
                            <option value="Health">Health</option>
                            <option value="Science">Science</option>

                        </select></tr>
                        {/* {error.name && <span style={{ color: "red" }}>{error.name}</span>} */}

                        <tr className="label-sign-up">Title</tr>
                        <tr><input type="text" className="sign-up-input" name="title" onChange={(e) => ChangeInput(e)} value={data.title ? data.title : ""} /></tr>
                        {/* {error.email && <span style={{ color: "red" }}>{error.email}</span>} */}


                        <tr className="label-sign-up">Blogger-Name</tr>
                        <tr><input type="text" className="sign-up-input" name="blogrname" onChange={(e) => ChangeInput(e)} value={data.blogername ? data.blogername : ""} /></tr>
                        {/* {error.password && <span style={{ color: "red" }}>{error.password}</span>} */}


                        <tr className="label-sign-up">Image</tr>
                        <tr><input type="text" className="sign-up-input" name="image" onChange={(e) => ChangeInput(e)} value={data.image ? data.image : ""} /></tr>
                        {/* {error.cpass && <span style={{ color: "red" }}>{error.cpass}</span>} */}

                        <tr className="label-sign-up">Descreption</tr>
                        <textarea name="description" id="" className="sign-up-input" onChange={(e) => ChangeInput(e)} value={data.description ? data.description : ""}></textarea>

                        <tr className="label-sign-up">Sub-description</tr>
                        <tr><input type="text" className="sign-up-input" name="sub" onChange={(e) => ChangeInput(e)} value={data.sub ? data.sub : ""} /></tr>


                        <tr><input type="submit" value={"Submit"} className="sign-Up-main" /></tr>



                    </div>
                </table>
            </form>

        </>
    )
}
export default Formm;