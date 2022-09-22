import {useForm} from "react-hook-form";
import {commentService} from "../../services";

const CommentForm=({setComments})=>{

    const {register, reset, handleSubmit, formState:{errors, isValid}} = useForm({
        mode:"all",
        defaultValues:{
        }
    });

    const submit=(obj)=>{
        commentService.createComment(obj).then(({data})=>setComments(comments=>[...comments, data]))
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" {...register("body")} placeholder="create a comment"/>
            {errors.comment && <span>{errors.comment.message}</span>}

            <button>Save comment</button>
        </form>
    )
}
export {
    CommentForm
};