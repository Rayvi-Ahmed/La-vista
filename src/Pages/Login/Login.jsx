import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import AuthProvider, { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const captuaRef = useRef(null)
    const [disabled, setDisabled] = useState(true)

    const { signIn } = AuthContext(AuthProvider)

    useEffect(() => {
        loadCaptchaEnginge(6);
    })

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        form.reset()
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
    }
    const handleCaptuaValid = () => {
        const user_captha_value = captuaRef.current.value
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
                                <input name='captha' ref={captuaRef} type="text" placeholder="type the captha" className="input input-bordered" />
                                <button onClick={handleCaptuaValid} className="btn btn-outline btn-xs mt-3">Validate</button>


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disabled} className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login