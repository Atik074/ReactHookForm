import FiledSet from "../components/FiledSet";
import Field from "../components/Field.jsx"

const LoginForm = () => {
    return (
        <div>
         <form>
                <FiledSet label="Enter Login Details">
                    <Field label="Email:">
                        <input
                        className="p-2 border-amber-400 border box-border  w-[300px] rounded-md 
                        focus:ring-2 focus:ring-amber-600
                        focus:outline-none  
                        
                        "
                        type="email"
                        id="email" 
                        name="email"
                        placeholder="Enter Email address"
                        />
                    </Field>
                </FiledSet>
            </form>
        </div>
    );
};


export default LoginForm;