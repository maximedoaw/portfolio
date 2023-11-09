import React from 'react'
import '../styles/School.css'
import { FaBootstrap, FaCss3, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component";
import { HiOutlineHome,HiOutlineAcademicCap, HiOutlineBookOpen} from "react-icons/hi";
import "react-vertical-timeline-component/style.min.css";
function School() {
  return (
    <div className='school'>
               <VerticalTimeline lineColor='#3E497A'>
          <VerticalTimelineElement className='vertical-timeline-element--education'
          date='2007-2009'
          iconStyle={{background:"rgb(253, 13, 13)",color:"#fff"}}
          icon={<HiOutlineHome/>}
          >
            <h4>Ecole maternelle</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element'
          date='2009-2010'
          iconStyle={{background:"blue",color:"#fff"}}
          icon={<HiOutlineBookOpen/>}
          >
           <h4> Ecole primaire "Le petit ecolier"</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element'
          date='2010-2015"'
          iconStyle={{background:"yellow",color:"#fff"}}
          icon={<HiOutlineBookOpen/>}

          >
            <h4>Ecole primaire "Les espoirs"</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element'
          date='2015-2018'
          iconStyle={{background:"rgb(5, 5, 54)",color:"blue"}}
          icon={<HiOutlineAcademicCap/>}
          >
           <h4> Lycee classique et moderne d'ebolowa </h4>
          </VerticalTimelineElement>
          

          <VerticalTimelineElement className='vertical-timeline-element'
          date='2018-2019'
          iconStyle={{background:"green",color:"#fff"}}
          icon={<HiOutlineBookOpen/>}
          >
           <h4> College bilingue Yondo </h4>
          </VerticalTimelineElement>
 
          <VerticalTimelineElement className='vertical-timeline-element'
          date='2019-2022'
          iconStyle={{background:"#fff",color:"purple"}}
          icon={<HiOutlineBookOpen/>}
          >
           <h4> Lycee bilingue d'ekounou </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement className='vertical-timeline-element'
          date='2022-...'
          iconStyle={{background:"#fff",color:"purple"}}
          icon={<HiOutlineAcademicCap/>}
          >
           <h4> Issam  </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default School
