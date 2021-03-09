import React from 'react';

const User = (props) => {
    const familiar=props.familiar;
    return (
        <div>
           <div>
            <h1>Greetings</h1>   
            {
                familiar? <p>Welcome,my friend</p> : <p>Who the hell are you?</p>
            }
            </div> 
            <div>
            <h1>Food</h1>   
            {
                familiar? <p>I will buy food for you.</p> : <p>Lets eat his his whose whose?</p>
            }
            </div> 
            <div>
            <h1>Connection</h1>   
            {
                familiar? <p>Let's join my facebook</p> : <p>I don't add stranger?</p>
            }
            </div> 
        </div>
    );
};

export default User;