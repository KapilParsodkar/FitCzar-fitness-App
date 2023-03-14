import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login() {
    // Page state to receive login data
    const [email, setUserID] = useState('');
    const [pwd, setPassword] = useState('');
    // And to go places
    const navigate = useNavigate();

    // Will create code to change these placeholders in response to events, once I work out how.
    const email_placeholder = 'Enter e-mail address';
    const pwd_placeholder = 'Enter password';


    // Pressing a button in a form fires the Submit event for that form.
    // Therefore, this runs when the user clicks the "Create New Account" button.
    // New user requesting to join
    const handleNewUser = (e) => {
        // Prevent page refresh (that's the default action)
        e.preventDefault();

        // Need to actually validate whatever the user has entered for e-mail,
        // not just check that it's non-empty.  This will do for now.
        if (email !== '')
        {
            // WILL HAVE TO REPLACE THIS WITH A REAL DBASE CHECK
            // The retrieved 'findresponse' is an array of the contents of users.json.
            // Filter for an existing user with an e-mail matching the user's input.
            // If it exists, report an error.  Otherwise, create that user account.
            fetch('http://localhost:8000/users')
            .then(response => response.json())
            .then((findresponse) => {
                const new_user = findresponse.filter(user => user.user_id === email);
                //console.log('Existing user is ' + new_user[0]['user_id'])
                if (new_user.length === 0)
                {
                    // Go to the Profile page to finish account setup
                    navigate('/profile', {
                        state: {
                        user_id: email,
                        password: pwd,
                        },
                    });
                }
                else
                {
                    // That e-mail address is already a registered user.
                    // Inform the attempted user.
                    console.log('Error:  User account ' + {email} + ' already exists!')
                }
            })
        }
        
    }  // end of handleNewUser


    // This runs when the user clicks the "Log In" button.
    const handleLogin = (e) => {
        // Prevent page refresh (that's the default action)
        e.preventDefault();

        // WILL HAVE TO REPLACE THIS WITH REAL DBASE CHECK
        // The retrieved 'findresponse' is the entire contents of users.json.
        // Filter for an existing user with an e-mail matching the user's input.
        // If there is one, user_match contains that registered user's data.
        // Check the password.  If it's valid, go to Welcome.
        fetch('http://localhost:8000/users')
        .then(response => response.json())
        .then((findresponse) => {
            const reg_user = findresponse.filter(user => user.user_id === email);

            // There's probably a better way to do this
            if (reg_user.length !== 0)
            {
                // Found the user
                if (reg_user[0].password === pwd)
                {
                    navigate('/welcome', {
                        state: {
                        user_id: email,
                        },
                    });
                }
                else
                {
                    // The login information was incorrect
                    console.log('ERROR:  Login data was incorrect')
                }
            }

        })
    }  // end of handleLogin


    // Render the Login page
    return (
        <div className='start'>

            <form>
                <div>
                <input className="email"
                    required
                    value={ email }
                    type="text"
                    placeholder={ email_placeholder }
                    onChange={(e) => setUserID(e.target.value)}
                />
                </div>
            </form>

            <form onSubmit={handleLogin}>
                <div>
                    <input
                    required
                    value={ pwd }
                    type="text"
                    placeholder={ pwd_placeholder }
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <button>Log In</button>
                </div>
            </form>

            <form onSubmit={handleNewUser}>
                <div>
                    <button className='new-account'>Create New Account</button>
                </div>
            </form>
        </div>
    )
}
