import React, { useContext } from 'react';
import { ThemeContext } from "../context/theme-context";

// class ToggleTheme extends Component {
//     static contextType = ThemeContext;
//     render() { 
//         const { toggleTheme } = this.context;
//         return ( 
//             <button onClick={toggleTheme}>Toggle the button</button>
//         );
//     }
// }

const ToggleTheme = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return(
        <div>
            <button onClick={toggleTheme}>Toggle the button</button>
        </div>
    )
}
 
export default ToggleTheme;