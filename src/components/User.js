import css from "./User.module.css";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";


import {saveUser} from "../services/user.api.service";
import {userValidator} from "../validators";






function User() {
    const {register, handleSubmit, formState:{errors, isValid}, setValue} = useForm({
        resolver:joiResolver(userValidator),
        mode:'all'});
    const onSubmit=(data)=>{
        console.log(data);
        saveUser(data).then(({data})=> console.log(data));
    }

    const submit=async (user)=>{
        const {data} = await saveUser.create(user);
        console.log(data);
    }

        return (

    <div className={css.User}>
        <form onSubmit={handleSubmit(onSubmit)} onChange={()=>console.log(errors)}>
            <input type="text" {...register("name", {required:true})} placeholder="name"/>
            {errors.name &&<span>{errors.user.message}</span>}
            <input type="text" {...register("username", {required:true})} placeholder="username"/>
            {errors.username &&<span>{errors.username.message}</span>}
            <input type="text" {...register("email")} placeholder="email"/>
            {errors.email &&<span>{errors.email.message}</span>}
            <div className={css.tools}>
                <button disabled={!isValid}>save user</button>
            </div>
        </form>
    </div>
    );
}

export {User};