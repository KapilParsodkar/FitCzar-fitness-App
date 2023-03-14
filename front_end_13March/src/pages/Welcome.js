import { useState } from "react"
import { useNavigate } from "react-router-dom";
// For fielding data passed from Login or Profile
import { useLocation } from "react-router-dom"

export default function Welcome() {
    // To capture data from Login or Profile
    const location = useLocation();
    // And to go places
    const navigate = useNavigate();

    const user = location.state['user_id']



    // Render the Welcome page
    return (

        <div className="welcome">

            <h3 className="welcome">Welcome!</h3>

            <form className='goals'>
                <h3 className='goals'>Your current goals</h3>
                <div className='goals'>
                    <textarea
                        className='goals'
                        placeholder='Goals to be selected and updated here'>


                    </textarea>
                </div>
            </form>

            <form className='exercises'>
                <h3>Current activities</h3>
                <div className='exercises'>
                    <textarea 
                        className='exercises'
                        placeholder='Links to exercises and other activities to be displayed here'>


                    </textarea>
                </div>
            </form>

        </div>
        
    )
}
