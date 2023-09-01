import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const View = ()=>{
    const [data,setData]=useState([]);

    const deleteData = (id) =>{
        let ans =data.filter((v)=>{
            return v.id !== id
        })
        setData(ans);
        localStorage.setItem('crud',JSON.stringify(ans))
        alert("delete");
    }

    const clearData =()=>{
        let ans =data.filter((v)=>{
            return v.name.value
        })
        setData(ans);
        localStorage.setItem('crud',JSON.stringify(ans));
    }
    useEffect(()=>{
        let data= JSON.parse(localStorage.getItem('crud'));
        if(data === null){
            setData([])
        }else{
            setData(data);
        }
    },[])

    return(
        <center>
            <header>
                    <div className="container">
                        <h2>To Do Application</h2>
                    </div> 
            </header>
            <h1>Record  View</h1>
            <table border={1} cellPadding={5} width={800} className="tbl">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Task</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    data.map((v)=>{
                        const {id,name,description}=v;    
                        return(
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{description}</td>
                                <td>
                                    <button onClick={()=>deleteData(id)} className="btn">Delet</button>
                                    <button className="btn1"><Link to={`/edit/${id}`}>Edit</Link></button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
            <button className="glow-on-hover1" onClick={()=>clearData()}>Clear</button>
            <Link to='/'>Add</Link>
        </center>
    )
}
export default View;