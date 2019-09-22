import React from 'react';
import propTypes from 'prop-types';


export default class HeaderLine extends React.Component{
    render()
    {
        const {header,desc,tempArray} = this.props;
        if( !header )
        {
            return null;
        }
        return(
            <div data-test="headerComponent">
              <h1 data-test="headerTitle">{header}</h1>
              <h3 data-test="headerDescription">{desc}</h3>
            </div>
        );
    }
}
HeaderLine.propTypes = {
    header:propTypes.string,
    desc : propTypes.string,
    tempArray:propTypes.arrayOf(propTypes.shape({
        fName:propTypes.string,
        lName:propTypes.string,
        email:propTypes.string,
        age:propTypes.number,
        onLineStatus:propTypes.bool
    }))
}