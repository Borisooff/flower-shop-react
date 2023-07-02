import { BrowserRouter as Router} from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { check } from "./http/userApi";
import { userChanged, userAuthed } from "./pages/loginPage/userSlice";

import AppFooter from "./components/appFooter/AppFooter";
import AppHeader from "./components/appHeader/AppHeader";
import AppRouter from "./AppRouter";

import Spinner from "./components/spinner/Spinner";

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check()
      .then(data => {
        dispatch(userChanged(data))
        dispatch(userAuthed(true))
      })
      .catch(e => console.log(e.message))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <Spinner />
    )
  }

  return (
    <Router>
      <AppHeader />
      <main>
        <AppRouter/>
      </main>
      <AppFooter />
    </Router>
  );
}

export default App;
