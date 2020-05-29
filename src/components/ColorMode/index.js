import React, {useEffect, useState} from "react";
import './ColorMode.scss'

export default () => {


    const [themeLight, changeTheme] = useState(false)

    useEffect(() => {
        const currentThemeColor = localStorage.getItem('theme-color')

        if (currentThemeColor === 'theme-light') {
            changeTheme(false)
            changeColors(lightMode)
        } else {
            changeTheme(true)
            changeColors(initialColors)
        }

    }, [])


    const html = document.querySelector("html")
    
    const getStyle = (element, style) => 
        window
            .getComputedStyle(element)
            .getPropertyValue(style)
    
    
    const initialColors = {
        bg: getStyle(html, "--bg"),
        bgHeader: getStyle(html, "--bg-header"),
        bgDetails: getStyle(html, "--bg-Details"),
        shadowLogo: getStyle(html, "--bg-Details"),
        color: getStyle(html, "--color"),
        card: getStyle(html, "--card"),
        cardMixblend: getStyle(html, "--card-mixBlend")
    }
    
    const lightMode = {
        bg: "#e9ebee",
        bgHeader: "#f9f9f9",
        bgDetails: "#ffffff",
        shadowLogo: "#f1d3b8",
        color: "#1b1b1b",
        card: "#f9f9f9",
        cardMixblend: "initial"
    }
    
    const transformKey = key => 
        "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()
    
    
    const changeColors = (colors) => {
        console.log(colors)
        Object.keys(colors).map(key => 
            html.style.setProperty(transformKey(key), colors[key]) 
        )
    }
    
    const switchTheme = () =>{
        if(themeLight) {
            localStorage.setItem('theme-color', 'theme-light')
            changeTheme(false)
            changeColors(lightMode)
            // document.body.classList.add('theme--light');
        } else {
            localStorage.setItem('theme-color', 'theme-dark')
            html.removeAttribute('style')
            changeTheme(true)
        }
    }


    return (
        <div className="toggle-theme">
            {/* <button onClick={switchTheme}>
                {themeLight ? 'black' : 'light'}
            </button> */}
            <input
                type="checkbox"
                id="toggle"
                className={`toggle-theme__input ${!themeLight ? 'active' : ''}`}
                onClick={switchTheme}
            /> 
            <label
                htmlFor="toggle"
                className="toggle-theme__label">
            </label>
            <p className="toggle-theme__name">tema {themeLight ? 'black' : 'light'}</p>
        </div>
    )
}