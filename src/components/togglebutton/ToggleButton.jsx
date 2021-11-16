import React from 'react'
import "./ToggleButton.scss"
const ToggleButton = ({theme,  toggleTheme }) => {
    return (
        <div className="switch_mode">
            <input type="checkbox" name="swtich" id="switch" onChange={toggleTheme}></input>
            <label htmlFor="switch"></label>
        </div>
    )
}

export default ToggleButton
