
import { useForm } from "react-hook-form"
import { EmailValidator } from "../Validators/EmailValidator";
import { PasswordValidator } from "../Validators/PasswordValidator";

const LoginForm=()=>{

    const { register, handleSubmit,formState: { errors}} = useForm()
    const formSubmitted=data=>console.log(data);

    return(

            <>
                <form onSubmit={handleSubmit(formSubmitted)}>

                    <input type="text" name="email"  placeholder="unesite vas email"
                           {...register("email", EmailValidator )}/>
                    {errors.email && (<p>{errors.email.message}</p>)}

                    <input type="password" placeholder="unesite vasu lozinku"
                           {...register("password", PasswordValidator )}/>
                    {errors.password && (<p>{errors.password.message}</p>)}
                    <button type="submit">Login</button>

                </form>
            </>
        )
};

export default LoginForm;