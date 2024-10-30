import axios from "axios";
import { useState } from "react";

function CategoryForm()
{
    let [category,setCategory]=useState({})
    let [list,setList]=useState([])


    let ChangeInput=(e)=>{
        let {name,value}=e.target;
        setCategory({...category,[name]:value})
    }
    let submitData= async(e)=>{
        e.preventDefault()

        let categoryData=await axios.post("http://localhost:3000/categories",category)
        if(categoryData.data)
        {
            setList(categoryData.data)
            alert("sucessfully add")
        }
        else{
            alert("something wrong")
        }
    }
    return(
        <>
         <form action="" method="post" style={{ padding: "80px" }} onSubmit={(e) => submitData(e)}>
                <table align="center" className="table-sign-up">
                    <h3 style={{ textAlign: "center", marginBottom: "-20px", marginTop: "20px" }}>Bloging</h3>
                    <div style={{ paddingTop: "20px", textAlign: "center", padding: "50px 70px" }}>
                        <tr className="label-sign-up">Category</tr>
                        <tr><select name="category" className="sign-up-input" id="" onChange={(e) => ChangeInput(e)} style={{fontSize:"18px"}} >
                            <option value="">--select category--</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Technology">Technology</option>
                            <option value="Sports">Sports</option>
                            <option value="Business">Business</option>
                            <option value="Health">Health</option>
                            <option value="Science">Science</option>
                            <option value="Politics">Politics</option>


                            </select></tr>
                        {/* {error.name && <span style={{ color: "red" }}>{error.name}</span>} */}


                        <tr><input type="submit" value={"Submit"} className="sign-Up-main"  /></tr>



                    </div>
                </table>
            </form>
        </>
    )
}
export default CategoryForm;