import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
    static contextType = ThemeContext;
    //this is one way to consume conext in class component,by setting static contextType=Context
    // then we can access context in this.context
    render() {
        const { isLightTheme, dark, light } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className='book-list' style={{ background: theme.bg, color: theme.syntax }}>
                <ul>
                    <li style={{ background: theme.ui }}>One piece</li>
                    <li style={{ background: theme.ui }}>Naruto</li>
                    <li style={{ background: theme.ui }}>Bleach</li>
                </ul>
            </div>
        );
    }
}

export default BookList;