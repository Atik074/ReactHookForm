import FiledSet from "../components/FiledSet";
import Field from "../components/Field.jsx"
import { useForm } from "react-hook-form";

const LoginForm = () => {
    const {
        register,
        handleSubmit ,
        formState: { errors } ,
        setError
    } = useForm()

    const formSubmit =(formData)=>{
        console.log(formData)

        const user ={email:'x@gmail.com' , password:'123456789'}

       const found =  formData.email === user.email && formData.password === user.password 
       if(!found){
          setError("root.random" ,{   
            message : `user email with ${formData.email} does not match`,
            type:"random"
          })
       }
    }

    return (
        <div className="flex flex-col mt-10 justify-center items-center bg-white shadow-lg rounded w-1/2 h-full mx-auto ">
         <form onSubmit={handleSubmit(formSubmit)}>
                <FiledSet label="Enter Login Details">
                    <Field label="Email:" error={errors.email}>
                        <input
                      {...register("email",{required:"email is required"})}
                      className={`p-2  border box-border   w-[400px] rounded-md 
                        focus:outline-none  ${errors.email ? 'border-red-600' :'border-amber-400 focus:ring-2 focus:ring-amber-500'  }`}
                        type="email"
                        id="email" 
                        name="email"
                        placeholder="Enter Email address"
                        />
                         
                    </Field>
                    <Field label="Password:" error={errors.password}>
                        <input
                        {...register("password" , {
                            required:"password is required" ,maxLength:{
                                value:16 ,
                                message:"password is too large"
                            } ,minLength:{
                                   value:8 ,
                                message:"password at least 8 characters"
                            }})
                           }
                           className={`p-2  border box-border   w-[400px] rounded-md 
                            focus:outline-none  ${errors.password ? 'border-red-600' :'border-amber-400 focus:ring-2 focus:ring-amber-500'  }`}
                        type="password"
                        id="password" 
                        name="password"
                        placeholder="Enter password"
                        />
                    </Field>
                  
                </FiledSet>
                  <div className="text-red-400 mb-1 text-[18px]">{errors?.root?.random?.message}</div>
                <Field>
                      <button  className="p-3 cursor-pointer rounded text-xl bg-amber-600 text-white w-32 mx-auto">Login</button>
                    </Field>
            </form>
        </div>
    );
};


export default LoginForm;