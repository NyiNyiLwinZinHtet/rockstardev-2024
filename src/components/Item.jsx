import{
    Card,
    CardContent,
} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';


export default function Item({ post, remove }){// call from app.jsx  post and remove
    return (
       <Card sx={{ mb:3 }}>
            <CardContent>
                {/* <a href="#" style={{ float: "right", color: "red"}} onClick={ () => remove(post.id) }><DeleteIcon />
                </a> */}
                <DeleteIcon
                    onClick={() => remove(post.id)} 
                    sx={{ float: "right", color: "red", cursor: "pointer" }} 
                    aria-label="Delete post"
                />
                    <b>{ post.user }</b>
                <div>{ post.content }</div>
            </CardContent>
       </Card>
            
    )
}