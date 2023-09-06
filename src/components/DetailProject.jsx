import { useNavigate,Link } from "react-router-dom";
 function DetailProject({image,name,link}) {
  //const navigate = useNavigate()
  return (
    <div className='projectItem' onClick={() =>{
     // navigate('/project/' + id)
    } }>
           <a href={link} > 
      <div style={{backgroundImage :`url(${image})`}} className="bgImage" />
  <h1>{name}</h1></a>
    </div>
  )
}

export default DetailProject