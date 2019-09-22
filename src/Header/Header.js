import React from 'react'

export default class Header extends React.Component{
    render()
    {
        return(<div className="headerComponent" data-test="headerComponent">
            <h1>This is the Header</h1>
        </div>);
    }
}