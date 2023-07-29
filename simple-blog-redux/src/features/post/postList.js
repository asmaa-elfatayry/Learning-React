import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
// import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionsButton";
import { Box, Typography } from "@mui/material";

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <Box key={post.id} sx={{border:"2px solid #fff",textAlign:'left',padding:'15px 20px',borderRadius:'7px',margin:"15px 0"}}>
             <Typography variant="h3" gutterBottom>{post.title}</Typography>
             <Typography variant="body1" gutterBottom>
  {post.content ? post.content.substring(0, 100) : "No content available"}
</Typography>


             <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <Typography variant="body1" gutterBottom>Published By: {post.authorName || "Unknown author"}  </Typography>
                <TimeAgo timestamp={post.date} />
            </Box>
            <ReactionButtons post={post} />
        </Box>
    ))

    return (
        <Box sx={{width:{lg:'40%',md:'65%',xs:'86%'},margin:'20px auto'}}>
           <Typography variant="h2" sx={{textAlign:'left'}} gutterBottom>Posts:</Typography>
            {renderedPosts}
        </Box>
    )
}
export default PostsList