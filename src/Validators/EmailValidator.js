

export const EmailValidator=
    {
        required:"email is required",
        pattern:{
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message:"email is not valid"}
    }