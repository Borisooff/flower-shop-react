import { BrowserRouter as Router} from "react-router-dom";

import AppFooter from "./components/appFooter/AppFooter";
import AppHeader from "./components/appHeader/AppHeader";
import AppRouter from "./AppRouter";

function App() {
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
