import { useState } from "react";
import Alert from "./Alert";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Routes,
  
  Route
} from "react-router-dom"

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Navbar
            title="myApp"
            about="About Us"
            mode={mode}
            toggleMode={toggleMode}
          />
          <Alert alert={alert} />
          <div className="container my-3">
          
              <Route
                exact
                path="/about
      "
                component={About}
              />
              <Route path="/">
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze"
                  mode={mode}
                />
              </Route>
          </div>
        </Routes>
      </BrowserRouter> */}

<>
      <Router>
        <Navbar   mode={mode} title="TextUtils" aboutText="About" toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3" >
          <Routes>
            <Route path="/about" element={<About />}/>
            <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze below"/>}/>
          </Routes>
        </div>
      </Router>  
    </>
    </>
  );
}

export default App;
