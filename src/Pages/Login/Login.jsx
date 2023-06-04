import { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Swal from 'sweetalert2'
import SocialLogin from '../../SocialLogon/SocialLogin';

const Login = () => {
    const [disabled, setDisabled] = useState(true)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const { SignIn } = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(6);
    })

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        SignIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                Swal.fire({
                    title: 'User Login Successfull',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }

                })
                navigate(from, { replace: true })
            })
    }
    const handleCaptuaValid = (e) => {
        const user_captha_value = e.target.value
        if (validateCaptcha(user_captha_value)) {
            setDisabled(false)
            alert('Captha is valid')
        } else {
            alert('Invalid Captha')
        }
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="text" placeholder="password" className="input input-bordered" />
                                <LoadCanvasTemplate />
                                <input onBlur={handleCaptuaValid} name='captha' type="text" placeholder="type the captha" className="input input-bordered" />

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disabled} className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className='text-center p-4 my-3'><small>Are you new this website <Link className='forn-bold' to={'/signUp'}>please sign up now </Link> </small></p>
                        <div>
                            <SocialLogin></SocialLogin>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    );
};

export default Login