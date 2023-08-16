import { premiumActions } from "./premium";
import axios from "axios";
export const fetchPremiumLeaderboardData = (tokenId) => {
    return async(dispatch) => {
       
        try {
            const response = await axios.get(`http://localhost:4000/premium/showLeaderBoard`, { headers: {"Authorization" : tokenId } });
            console.log(response)
            dispatch(premiumActions.replaceItems({
                items: response.data || []
            }))
            
        }
    catch(error) {
                console.log(error)
            
        };
    };
}