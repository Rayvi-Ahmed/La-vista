
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignUp = () => {
        googleSignIn()
            .then(result => {
                const loggesUser = result.user;
                console.log(loggesUser)
                const saveUser = { name: loggesUser.displayName, email: loggesUser.email }
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            navigate(from, { replace: true })

                        }
                    })
            })

    }
    return (
        <div>
            <div className="divider"></div>
            <div className='text-center pb-3'>
                <button onClick={handleGoogleSignUp} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;