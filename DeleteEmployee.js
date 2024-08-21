import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
function DeleteEmployee()
{
const {id}=useParams();
const onDelete=()=>{
axios.delete(`http://localhost:3001/employees/${id}`).then(resp=>alert
("record deleted"));
} 
const element=
<>
<h1>Do you really wish to delete a record?</h1>
<Button onClick={onDelete}>Yes</Button>
<Button>No</Button>
</>
return element;
}
export default DeleteEmployee;