import React from 'react';

export default class HeaderLine extends React.Component{
    render()
    {
        const {header,desc} = this.props;
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