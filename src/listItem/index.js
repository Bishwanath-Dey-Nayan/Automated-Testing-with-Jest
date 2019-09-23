import React,{Component} from 'react';
import propTypes from 'prop-types';

class ListItem extends Component{
    render()
    {
        const {title,desc} = this.props;
        return(
            <div data-test="listComponent">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        );
    }
}

ListItem.propTypes={
    title:propTypes.string,
    desc:propTypes.string
}

export default ListItem;