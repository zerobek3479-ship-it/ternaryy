import React, { useState } from 'react';
import "./left.css"
import icon from "../../assets/icons.png"
import vector from "../..//assets/vector.png"

const Left = ({data,second,tasks,datas}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDark, setIsDark] = useState(false);
  
    return (
<div className="wrapper">
    <div className={`wrapper ${isDark ? 'dark-mode' : 'light-mode'}`}>
      
    
      <div className={`container ${isOpen ? 'open' : 'collapsed'}`}>
        <div className="contain">
          <div className="header">
            <img src={icon} alt="sas" />
            {isOpen && <h2>EduWave</h2>} 
          </div>

          <div className="controls">
            <button className="btn " onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? " Yoping" : "Oching>"}
            </button>

            <button className="btn" onClick={() => setIsDark(!isDark)}>
              {isDark ? "🌞 Light" : "🌙 Dark"}
            </button>
          </div>

          <div className="bottom">
            {data.map((item, index) => (
              <div key={index} className="with">
                <p>{item.icon}</p>
               
                {isOpen && <h3>{item.title}</h3>}
              </div>
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="underbottom">
            <img src={vector} alt="assa" />
            <h3>Exclusive Community</h3>
            <p>Join to Premium for more functionality</p>
            <button className="join-btn">Join Now</button>
          </div>
        )}
      </div>

      
    </div>
<div className="containig">
         <header>
          <span><a className='logo' href="/">Dashboard</a></span>
            <nav>
              <ul className='navigator'>
                <li><a className='nav_links' href="#">home</a></li>
                <li><a className='nav_links' href="#">contact</a></li>
                <li><a className='nav_links' href="#">contact us</a></li>
                <li><a className='nav_links' href="#">services</a></li>
                <li><a className='nav_links' href="#">blog</a></li>
              </ul>
            </nav>
         </header>
         <div className="middle">
            <div className="carts">
              {
                second.map((second,index)=>{
                  return(
                    <div key={index} className="cart">
                      <img className='imge' src={second.url} alt="img" />
                      <h4>{second.title}</h4>
                      <p className='subtitue'>{second.subtitle}</p>
                      <div className="rightwards">
                        <p className='icons'>{second.icons}</p>
                        <button>{second.button}</button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
         </div> 
      
   <div className="tasks-wrap">
     <div className="tasks-container">
      <h2 style={{ marginBottom: '24px' }}>Tasks From The Teacher</h2>
      
      {tasks.map((task) => (
        <div 
          key={task.id} 
          className='task-card'
        >
          <div className="task-info">
            <h4>{task.title}</h4>
            <small>🕒 {task.date}</small>
          </div>
          <div className="arrow-icon">-</div>
        </div>
      ))}
    </div> 
     <div className="tasks-container">
      <h2 style={{ marginBottom: '24px' }}>Tasks From The Teacher</h2>
      
      {tasks.map((task) => (
        <div 
          key={task.id} 
          className='task-card'
        >
          <div className="info">
            <h4>{task.title}</h4>
            <small>🕒 {task.date}</small>
          </div>
          <div className="arrow-icon">-</div>
        </div>
      ))}
    </div> 
    </div> 
    <div className="exam-container">
      <h2 className="exam-title">Exam Schedule</h2>
      <table className="exam-table">
        <thead>
          <tr>
            <th>Date and time</th>
            <th>Start Time</th>
            <th>Subjects</th>
            <th>Exam Room</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.subject}</td>
              <td>{item.room}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  )
}


export default Left
