import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";



const SocialLogin = () => {
    const navigate = useNavigate()
    const { user, googleLogin, githubLogin } = useContext(AuthContext);
    const location = useLocation();

    const handleSocialLogin = (media) => {
        media()
            .then(res => {
                toast.success('User logged in successfully');
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <>
            <div className="divider">continue with</div>
            <div className="flex justify-around">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="btn btn-neutral btn-sm">Google</button>
                <button
                    onClick={() => handleSocialLogin(githubLogin)}
                    className="btn btn-neutral btn-sm">Github</button>

            </div>
        </>
    );
};

export default SocialLogin;