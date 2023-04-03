import List from "./components/List";
import {useFirestoreContext} from "react-redux-firebase";
import { useAuthContext } from "../context/AuthContext";
import { useMemo } from "react";

const StockImages = () => {
    const { state } = useFirestoreContext();
    const { currentUser } = useAuthContext();
    
    const items = useMemo(() => {
        const filtered = state.items.filter(item => {
            const username = currentUser?.displayName.split(" ").join("")
            return item.user === username;
            
        })
             return currentUser ? filtered: []
        }, [state.items, currentUser])
        return(
            <>
             <h1>My Gallery</h1>
             <List items={[]}/>
            </>
        )
}
export default StockImages;