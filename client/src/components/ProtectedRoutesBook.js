import { useSelector } from "react-redux";
import { useNavigate,Navigate,Outlet } from 'react-router-dom';

const ProtectedRoutesBook = ({children})=>{
    // const navigate = useNavigate();
    const { bookItem } = useSelector((state) => state.book)
    return(
       
        bookItem[0] ? children : <Navigate to="/"/>
    
    )
}

export default ProtectedRoutesBook