import React, { useState } from "react";
import TapSwitch from './TabSwitch.css'

const TabSwitch=()=>{
    const [show , setshow]=useState(1);

    const handlechange=(e)=>{
        setshow(e);
    }
    return(
        <>
        <div>
            <div className="button-container">
              <button onClick={()=> handlechange(1)}>Tab-1</button>
              <button onClick={()=> handlechange(2)}>Tab-2</button>
              <button onClick={()=> handlechange(3)}>Tab-3</button>
              <button onClick={()=> handlechange(4)}>Tab-4</button>
           </div>

           <br></br>
           <div>
        
        
            <p className={show == 1 ? 'my-tab' : 'my-tab-temp'}> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)Ipsum isLorem simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuriesIpsum isLorem simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuriesIpsum isLorem simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </p>
            <p className={show == 2 ? 'my-tab' : 'my-tab-temp'}>Ipsum isLorem simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <p className={show == 3 ? 'my-tab' : 'my-tab-temp'}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered </p>
            <p className={show == 4 ? 'my-tab' : 'my-tab-temp'}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
           </div>

        </div>
           
        </>
    )
}

export default TabSwitch;