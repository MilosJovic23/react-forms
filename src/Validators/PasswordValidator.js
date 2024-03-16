


export const PasswordValidator={
    required:   "password is required",
    minLength:  {value:3,message:"password should be at least 3 characters"},
    validate:{
        trimCheck:  value=>value.trim() !== "" || "password cannot be empty or spaces only"
    }
}