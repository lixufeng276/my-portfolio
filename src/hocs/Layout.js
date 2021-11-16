import React from 'react';
import NavBar from '../components/navbar/NavBar';
import './Layout.style.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToggleButton from "../components/togglebutton/ToggleButton";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import  {useDarkMode} from "../components/colormodes/useDarkMode"
import Toggle from "../components/colormodes/Toggler"
import { GlobalStyles } from "../components/colormodes/GlobalStyles";
import { lightTheme, darkTheme } from "../components/colormodes/Theme";

const LayoutComponent = (props) => {
    // const [theme, setTheme] = useState('light');
    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    // const themeToggler = () => {
    //   theme === 'light' ? setTheme('dark') : setTheme('light')
    // }
    return (
        <ThemeProvider theme={themeMode}>
            <div className="parent-container">
                <div className="navbar">
                    <Router>
                        <NavBar />
                        
                        <Routes>
                            <Route path="/" />
                        </Routes>
                        
                    </Router>
                    
                </div>
                
                
                <div className="main-content">
                    {props.children}
                    <h1>This is App.js</h1>
                    <Toggle theme={theme} toggleTheme={themeToggler} />

                </div>
                
                <ToggleButton theme={theme} toggleTheme={themeToggler}/>
                <div className="footer">Copyright © 2021 Xufeng Li. All Rights Reserved</div>
            </div>
            <GlobalStyles/>

        </ThemeProvider>
    );
};

export default LayoutComponent;