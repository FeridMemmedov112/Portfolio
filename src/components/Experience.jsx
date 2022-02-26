import React from 'react'
/** 
googleda axtarirsan neyi:
fetch
****how to fetch local jsondata in js
async await in js (asynchrooms function) 
**/
const experience = () => {
    return (
        <div className='experience'>
          <div className='d-flex justify-content-center my-5'>
            <h1>Experience</h1>
            </div>
        
        
            <div className='container experience-wrapper'>



          

       {/*experience -1*/}
       <div className='timeline-block timeline-block-rigt'>
                <div className='marker'></div>
                <div className='timeline-content'>
                    <h3>2009-2020</h3>
                    <p>I went to high school</p>
                </div>
            </div>



            {/** experience-2 **/}

            <div className='timeline-block timeline-block-left'>
                <div className='marker'></div>
                <div className='timeline-content'>
                    <h3>2021-2022</h3>
                    <p>I received a Front-End Developer degree from the IT Brains Training Center and a Microsoft Technology Associate degree.</p>
                </div>
            </div>

              {/*experience -1*/}
       <div className='timeline-block timeline-block-rigt'>
                <div className='marker'></div>
                <div className='timeline-content'>
                    <h3>2020-2024</h3>
                    <p>I was admitted to the Azerbaijan State University of Oil and Industry and am currently studying</p>
                   
                </div>
            </div>



            
          </div>
        </div>

    )
}

export default experience
