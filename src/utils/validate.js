export const checkvaliddate =(name,email,password) =>{
    const emailvalid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordvalid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    
    if(!emailvalid) return "Invalid Email ID found!"
    if(!passwordvalid) return "Invalid Password found!"

    if(name !== null){
        const namevalid=/^(?=.{6,}$)[A-Za-z]+(?: [A-Za-z]+){0,2}$/.test(name.value);
        if(!namevalid) return "Invalid Name found!"
    }
    

    return null
}