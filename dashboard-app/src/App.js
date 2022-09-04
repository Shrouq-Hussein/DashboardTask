import logo from './logo.svg';
import './App.css';
import SocialMediaDashboard from "./pages/socialMediaDashboard/socialMediaDashboard"
import { themeContext } from "./context"
import React ,{useState} from 'react';
function App() {
  const [theme,setTheme] = useState("light")
  return (
    <themeContext.Provider value={{theme,setTheme}}>
      <SocialMediaDashboard />
    </themeContext.Provider>

  );
}

export default App;

