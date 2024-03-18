

export const EmailValidator=
    {
        required:   "email is required",
        minLength:  {
                value: 10,
                message: "email should be at least 10 characters"
        },
        pattern:    {
                value: /^[A-Z0-9._%+-]+@[gmail]+\.[com]{2,}$/i,
                message:"email should end with @gmail.com"
        },
        validate:   {
            emailCheck:
                    value=> value !== (("admin@gmail.com")) || "email cannot be admin@gmailcom",
            emailCheck2:
                    value=> value !== (("test@gmail.com")) || "email cannot be test@gmailcom"
        }
    }