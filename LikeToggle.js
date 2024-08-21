import {useState} from 'react';
function LikeToggle()
{
const [likeVariable,updateLikeVariable]=useState(false);
const onToggle=()=>{
if(likeVariable==true)
{
updateLikeVariable(false);
}
else
{
updateLikeVariable(true);
}
}
const element=
<>
<h1> This is a state demo</h1>
{likeVariable==true ? <h2> this post is liked</h2> : <h2>This is not 
liked</h2>}
<button onClick={onToggle}>Toggle Me</button>
</>
return element;
}
export default LikeToggle;
