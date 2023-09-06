import React from 'react'
import { useParams } from "react-router-dom";
import { projectList } from '../helpers/ProjectList';
import { FaGithub } from "react-icons/fa";
import "../styles/ProjectDisplay.css"
function DisplayDetail() {
  const { id } = useParams()
  const project = projectList[id]
  console.log(project);
  return (
    <div className='project'>
      dffdf
      <h1>{project.name}</h1>
      <img src={project.image}/>
      <p>
        <b>Skills:</b>{project.skills}
      </p>
      <FaGithub/>

    </div>
  )
}

export default DisplayDetail
