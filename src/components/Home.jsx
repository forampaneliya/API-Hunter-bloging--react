import axios from "axios"
import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";


function Home(){
    let [list,setList]=useState([])
    let [categorylist,setcategoryList]=useState([])
    useEffect(()=>{
        setTimeout(() => {
            showdata() 
            categoryGet()
        }, 1000);
    },[])

let showdata=async()=>{
   let alldata= await axios.get("http://localhost:3000/blog")
   if(alldata.data)
   {
    setList(alldata.data?alldata.data:[])
   }
   else{
    alert("something wrong")
   }
   console.log(alldata.data,"huiuhuihuh");
   
}

let categoryGet=async()=>{
    let get=await axios.get("http://localhost:3000/categories")
    if(get.data)
    {
        // alert("get sucess")
        setcategoryList(get.data?get.data:[])
    }
    else{
        alert("error")
        console.log(get.data);
        
    }
}

    let getDataCategoryWise = async (cat)=>{
        console.log(cat)
        let get=await axios.get("http://localhost:3000/blog/?category="+cat)
        if(get.data)
        {
            console.log(get.data)
            // alert("get sucess")
            setList(get.data?get.data:[])
        }
        else{
            alert("error")
            console.log(get.data);
            
        }
    }


    return(
        <>

        <Container style={{marginTop:"30px",justifyContent:"center",display:"flex"}}>
<div style={{display:"flex",borderRadius:"10px"}}>
{categorylist.map((v,i)=>{
                return(
                    <>
                    <img src={v.image} height={50} width={50} alt="" />
                    <button onClick={()=>getDataCategoryWise(v.category)} style={{backgroundColor:"black", color:"white", padding:"7px 10px", marginRight:"50px",fontSize:"18px",borderRadius:"5px"}}>{v.category}</button>
                    </>
                )
            })}
</div>
           
        </Container>

<Container>
    <div className="row-custom">
        
{
    list.map((v,i)=>{
        return(<>

        <Card style={{ width: '26rem',marginRight:"10px" }}  >
      <Card.Img  src={v.image} height={450} style={{padding:"10px"}} />
      <Card.Body>
        <Card.Title>{v.title}</Card.Title>
        <h6 style={{color:"gray",textAlign:"right"}}>-{v.blogrname}</h6>
        <Card.Text>
         {v.description}...
        </Card.Text>
       <Link to={"/singledetail/"+v.id}> <Button variant="primary">Read More</Button></Link>
      </Card.Body>
    </Card>

        </>)
    })
}
</div>
   </Container> 

        </>
    )
}
export default Home