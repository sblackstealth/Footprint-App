import React,{ Component } from 'react';

chooseBadge=(badge)=>{
    return badge
}
class RewardsBadge extends Component {
    render(){
        return(
            <div className="badgePage">
             <p>
                Congratulations  
                Thanks for being a {chooseBadge()}
             </p>
                
             <img src={chooseBadge()}></img>

            </div>
        )
    }
}
export default RewardsBadge;