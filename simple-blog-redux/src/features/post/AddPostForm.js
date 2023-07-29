import { useState } from "react";
import { useDispatch} from "react-redux";

import { postAdded } from "./postSlice";

import { Box, Button, FormControl, TextField, Typography } from "@mui/material";


const AddPostForm = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const [authorName, setAuthorName] = useState('')


    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setAuthorName(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content, authorName)
            )
            setTitle('')
            setContent('')
            setAuthorName('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) 

  

    return (
       <Box>
            
            <Typography variant="h2" gutterBottom sx={{padding:'30px 0px'}}>Add a New Post</Typography>
            <Box sx={{backgroundColor:'#AED8E6',width:{lg:'36%',md:'60%',xs:"80%"} , margin:'auto',
            display:'flex',justifyContent:'center',alignItems:'center',gap:'20px',
            borderRadius:'10px',padding:'30px'}}>
            <FormControl sx={{display:"flex",gap:'20px',width:'90%'}}>
           
               
                
                <TextField id="postTitle" label="Title" color="success"  variant="outlined"   name="postTitle"
                    value={title}
                    onChange={onTitleChanged}   />


               
                <TextField id="postContent" label="Content" color="success"  variant="outlined"  value={content}
                    onChange={onContentChanged}  multiline
                    rows={4} />
    

         <TextField id="postAuthor" label="Author" color="success"  variant="outlined"   value={authorName}
                    onChange={onAuthorChanged} />


            <Button variant="contained" color="success"
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Save Post</Button>
     </FormControl>
     </Box>
            </Box>
    )
}
export default AddPostForm