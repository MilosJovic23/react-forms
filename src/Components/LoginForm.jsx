
import { useForm } from "react-hook-form"

const LoginForm=()=>{

    const { register, handleSubmit,formState: { errors}} = useForm()
    const formSubmitted=data=>console.log(data);

    return(

            <>
                <form onSubmit={handleSubmit(formSubmitted)}>

                    <input type="text" name="email"  placeholder="unesite vas email"
                           {...register("email",
                        {
                            required:"email is required",
                            pattern:{
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message:"email is not valid"
                            }
                        })}/>
                    {errors.email && (<p>{errors.email.message}</p>)}
                    <input type="password" placeholder="unesite vasu lozinku"
                           {...register("password",
                        {
                            required:"password is required",
                            minLength:{value:3,message:"password should be at least 3 characters"},
                            validate:{
                                trimCheck:value=>value.trim() !== "" || "password cannot be empty or spaces only"}

                            })}/>
                    {errors.password && (<p>{errors.password.message}</p>)}
                    <button type="submit">Login</button>
                </form>
            </>
    )
};

export default LoginForm;