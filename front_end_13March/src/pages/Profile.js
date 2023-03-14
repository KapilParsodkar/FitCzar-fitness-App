import { useState } from "react"
import { useNavigate } from "react-router-dom";
// For fielding data passed from Login
import { useLocation } from "react-router-dom"


export default function Profile() {
    // To capture data from Login
    const location = useLocation();
    // And to go places
    const navigate = useNavigate();

    // Data set on this page
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [height_units, setHeightUnits] = useState('cm');
    const [weight, setWeight] = useState('');
    const [weight_units, setWeightUnits] = useState('kg');
    const [phone, setPhone] = useState('');


    // Pressing a button in a form fires the Submit event for that form.
    // Therefore, this runs when the user clicks the Enter button.
    const updateBiometrics = (e) => {
        // Prevent page refresh (that's the default action)
        e.preventDefault();
         // The biometrics
        const biometrics = {"user_id": location.state['user_id'],
                            "password": location.state['password'],
                            "phone": phone,
                            "age": age,
                            "height": height,
                            "height-units": height_units,
                            "weight": weight,
                            "weight-units": weight_units}
        // Add them to the account
        fetch('http://localhost:8000/users', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(biometrics)
        })
        // Go to the Welcome page, passing along the user ID
        navigate('/welcome', {
            state: {
            user_id: location.state['user_id'],
            },
        });
    }


    // Render the Profile page
    return (
        <div>

            <p>Please provide your physiological profile.  Be honest, now – your results will be best if this information is accurate.</p>
            <p>You’ll be able to change this information later.</p>

            <form className='profile'>

                <div className="profile">

                    <div className="age">
                        <label>Age:</label>
                        <input
                            required
                            value={ age }
                            type="integer"
                            onChange={(e) => setAge(e.target.value)}
                            placeholder='years'
                        />
                    </div>

                    <div className="height">
                        <label>Height:</label>
                        <input
                            required
                            value={ height }
                            type="integer"
                            onChange={(e) => setHeight(e.target.value)}
                        />
                        <select onChange={(e) => setHeightUnits(e.target.value)}>
                            <option value='cm'>cm</option>
                            <option value='in'>inches</option>
                        </select>
                    </div>

                    <div className="weight">
                        <label>Weight:</label>
                        <input
                            required
                            value={ weight }
                            type="integer"
                            onChange={(e) => setWeight(e.target.value)}
                        />
                        <select onChange={(e) => setWeightUnits(e.target.value)}>
                            <option value='kg'>kg</option>
                            <option value='lbs'>pounds</option>
                        </select>
                    </div>

                </div>
            </form>

            <div className="phone">
                        <input
                            value={ phone }
                            type="string"
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder='mobile phone (optional)'
                        />
            </div>

            <form className="profile" onSubmit={updateBiometrics}>
                <button className="set-profile">Enter</button>
            </form>
            
        </div>
    )
}
