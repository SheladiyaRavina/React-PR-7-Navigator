import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = ()=>{
    let navigate =useNavigate();
    const [input,setInput]=useState({
        name:'',
        description:'',
    })
    const [record,setRecord]=useState([]);
    const handleChange = (e)=>{
        const {name,value}=e.target;
        setInput({
            ...input,[name] : value
        })
    }

    const handleSubmit =()=>{
        const {name,description}=input;
        let obj ={
            id:Math.floor(Math.random()*1000),
            name:name,
            description:description,
        }
        let data =[...record,obj];
        setRecord(data);
        localStorage.setItem('crud',JSON.stringify(data));
        navigate('/viewdata');
        setInput({
            name:'',description:''
        })

    }
    useEffect(()=>{
        let all = JSON.parse(localStorage.getItem('crud'));
        if(all===null){
            setRecord([]);
        }else{
            setRecord(all)
        }
    })
    return(
       <>
        <center>
            <header>
            <header>  
                <div className="container">
                    <h2>To Do Application</h2>
                </div>
            </header>
            </header>
            <h1>Record Add</h1>
            <table>
                <tr>
                    <td><input type="text" name="name" placeholder="Title" onChange={handleChange}/></td> 
                </tr>
                <tr>
                    <td><input type="text" name="description" placeholder="Description" onChange={handleChange}/></td> 
                </tr>
                <tr>
                <td>
                    <button onClick={()=>handleSubmit()} className="glow-on-hover">Create Todo</button>
                </td>
                </tr>
            </table>
            <Link to='/viewdata'><a href="">Viewdata</a></Link>
        </center>
     </>
    )
}
export default Add;