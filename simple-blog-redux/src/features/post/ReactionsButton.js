import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";
import { Button } from "@mui/material";

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '🥹',
    heart: '❤️',
    rocket: '🙃',
    coffee: '☕',
    coffee: '😢'
}

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <Button variant="text" 
                key={name}
                type="button"
                className="reactionButton"
                onClick={() =>
                    dispatch(reactionAdded({ postId: post.id, reaction: name }))
                }
            >
                {emoji} {post.reactions[name]}
            </Button>
        )
    })

    return <div>{reactionButtons}</div>
}
export default ReactionButtons