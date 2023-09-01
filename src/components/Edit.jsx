import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Edit = ()=>{
        let navigate =useNavigate();
        const {id} = useParams();
        const [input,setInput]=useState({
            name:'',description:'',
        })
        const getrecord =()=>{
             let all = JSON.parse(localStorage.getItem('crud'));
            if(all===null){
                return [];
            }else{
                return all;
            }
        }
        const [record,setRecord]=useState(getrecord);
        const handleChange = (e)=>{
            const {name,value}=e.target;
            setInput({
                ...input,[name] : value
            })
        }
    
        const handleSubmit =()=>{
            const{name,description}=input;
            let data = record.map((v)=>{
                if(v.id == parseInt(id)){
                    return{
                        ...v,
                        name:name,
                        description:description,
                    }
                }
                return v
            })
            setRecord(data);
            localStorage.setItem('crud',JSON.stringify(data));
            navigate('/viewdata');
            setInput({
                name:'',description:''
            })
    
        }
        useEffect(()=>{
           let ans = record.filter((v)=>{
            return v.id == id
           })
           setInput(ans[0])
        },[])
        return(
           <>
            <center>
                <header> 
                    <div className="container">
                        <h2>To Do Application</h2>
                    </div>
                </header>   
                <h1>Record Edit</h1>
                <table>
                    <tr>
                        <td><input type="text" name="name" onChange={handleChange} value={input.name}/></td>
                    </tr>
                    <tr>
                        <td><input type="text" name="description" onChange={handleChange} value={input.description}/></td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={()=>handleSubmit()}  className="glow-on-hover">Edit</button>
                        </td>
                    </tr>
                </table>
            </center>
           </>
        )
    }

export default Edit;