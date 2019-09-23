import React from 'react';
import propTypes from 'prop-types';
class SharedButton extends React.Component{

    submitEvent(){
        if(this.props.emitEvent){
            console.log('sumbmit event')
            this.props.emitEvent();
        }
    }
    render()
    {
        const {buttonText} = this.props;
        return(
            <div>
               <button data-test="buttonComponent" onClick={()=>this.submitEvent()}>
                {buttonText}
               </button> 
            </div>
        );
    }
}

SharedButton.propTypes ={
    buttonText:propTypes.string,
    emitEvent:propTypes.func
}

export default SharedButton;