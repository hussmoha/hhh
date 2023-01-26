import './App.css'; 
import { Route, Routes} from "react-router-dom";
import NavBar from './components/NavBar' 
import SignIn from './components/SignIn';
import { Box } from "@mui/material";
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  return ( 
    <GoogleOAuthProvider clientId="851970879521-al6kfvd8os51knkbtg9sljvbl35eii1d.apps.googleusercontent.com">
        <div className="App">
        <NavBar />
        <Routes> 
          <Route path="/SignIn" element={<SignIn/>}/>
        </Routes>
    </div>
    </GoogleOAuthProvider>
  );
} 

export default App;
