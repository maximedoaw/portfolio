import React from 'react'
import "../styles/experience.css";
import { FaBootstrap, FaCss3, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function Experiences() {
  return (
    <div className="experience">
     
        <VerticalTimeline lineColor='#3E497A'>
          <VerticalTimelineElement className='vertical-timeline-element--education'
          date='2019-2020'
          iconStyle={{background:"rgb(253, 13, 13)",color:"#fff"}}
          icon={<FaHtml5/>}
          >
            <h4>My first steps with HTML</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element'
          date='2020-2021'
          iconStyle={{background:"blue",color:"#fff"}}
          icon={<FaCss3/>}
          >
           <h4> My first steps with CSS</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element'
          date='2021-..."'
          iconStyle={{background:"yellow",color:"#fff"}}
          icon={<FaJsSquare/>}
          >
            <h4>I was started to learn my first programming language</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element'
          date='2023'
          iconStyle={{background:"rgb(5, 5, 54)",color:"blue"}}
          icon={<FaReact/>}
          >
           <h4> Actually  i learn the framework react js and my portfolio use this library</h4>
          </VerticalTimelineElement>
          

          <VerticalTimelineElement className='vertical-timeline-element'
          date='2023'
          iconStyle={{background:"green",color:"#fff"}}
          icon={<FaBootstrap/>}
          >
           <h4> Bootstrap is a framework for CSS </h4>
          </VerticalTimelineElement>
 
          <VerticalTimelineElement className='vertical-timeline-element'
          date='2023'
          iconStyle={{background:"#fff",color:"purple"}}
          icon={<SiRedux/>}
          >
           <h4> I wish to learn  redux for improve my react application </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Experiences
