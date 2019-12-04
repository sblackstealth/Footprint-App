import React,{ Component } from 'react';
import Slider from '../components/Slider'
import Neutralizor from '.../Neutralizor.png';
import Sustainilizer from '.../Sustainilizor.png';

chooseBadge=(<Slider/>)=>{
    let slider= <Slider/>
    if{ slider.value >=124 return Neutralizor}else{ return Sustainilizer}
}
class RewardsBadge extends Component {
    render(){
        return(
            <div className="badgePage">
             <p>
                Congratulations  
                Thanks for being a Sustainilizor
             </p>
                
             <img src={chooseBadge()}></img>

            </div>
        )
    }
}
export default RewardsBadge;