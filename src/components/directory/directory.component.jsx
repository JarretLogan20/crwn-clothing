import React, { Component } from 'react';
import MenuItem from '../../components/menu-item/menu-item.component';
import './directory.styles.scss';
import SECTIONS_DATA from './directory.data';
class Directory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: SECTIONS_DATA
        };
    }

    render() {
      const {sections} = this.state;
        return (
            <div className='directory-menu'>
                {
                    sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;