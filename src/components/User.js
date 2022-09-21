
import {useForm} from "react-hook-form";
import {saveUser} from "../services/user.api.service";


function App() {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const onSubmit=(data)=>{
        console.log(data);
        saveUser(data).then(({data})=> console.log(data));
    }



    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", {required:true})}/>
                <input {...register("username", {required:true})}/>
                {errors.title &&<span>заповніть поле</span>}
                <input {...register("email")}/>
                <input type="submit" value={'save user'}/>
            </form>
        </div>
    );
}

export default App;