import React,{ Component } from 'react';
import Neutralizor from '.../Neutralizor.png';

class RewardsBadge extends Component {
    render(){
        return(
            <div className="badgePage">
             <p>
                Congratulations  
                Thanks for being a Neutralizor
             </p>
                
             <img src={Neutralizor}></img>

            </div>
        )
    }
}
export default RewardsBadge;