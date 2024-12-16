import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";
const FormLogin = () => {
    return (
        <form action="">
            <InputForm 
              title="Email"         
              name="email"         
              placeholder="Enter your email"                    
              type="email"
            />
            <InputForm 
              title="Password" 
              name="password" 
              placeholder="Enter your password" 
              type="password"
            />
            <Button classname="text-[#fffff0] bg-blue-600 w-full">Masuk</Button>
        </form>
    )
}

export default FormLogin