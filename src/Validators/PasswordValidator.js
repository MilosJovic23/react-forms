


export const PasswordValidator=
    {
        required:   "password is required",
        minLength:  {
            value:5,
            message:"password should be at least 5 characters"
        },
        maxLength:  {
            value:16,
            message:"password cannot be more then 16 characters"
        },
        pattern: {
            value: /[A-Z0-9-a-z]{3}/,
            message:"password should contain at least 1 uppercase letter"
        },
        validate:   {
            trimCheck:
                    value=>value.trim() !== "" || "password cannot be empty or spaces only",
            passCheck1:
                    value=> value !== ("admin") || "password cannot be admin or 123456",
            passCheck2:
                    value=> value !== ("123456") || "password cannot be admin or 123456",
        }
    }