import React from 'react'
import "../styles/Project.css"
import video_player from "../assets/video_player.png";
import snake_game from "../assets/snake_game.png";
import tic_tac_toe from "../assets/tic_tac_toe.png";
import music_player from "../assets/music_player.png";
import memory_cards from "../assets/memory_cards.png";
import {projectList} from "../helpers/ProjectList";
import DetailProject from '../components/DetailProject';
function Projects() {
  return (
    <div className="projects">
      <h1>My personal Project</h1>
      <div className='projectList'>
        {projectList.map((project) =>{
          return <DetailProject  name={project.name} image={project.image} link={project.link}/>
        })}
      </div>
    </div>
  )
}
/**/
export default Projects
