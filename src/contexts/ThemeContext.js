import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();
//create context jsx and it has provider to wrap the elements you need to pass props
class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    }

    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme })
    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;