import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Card from './components/shared/Card';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from './pages/About';
import { FeedbackProvider } from './context/FeedbackContext';

import AboutIconLink from './components/AboutIconLink';


const App = () => {

  return(
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }>
            </Route>
            <Route path='/about' element={<About />} />
          </Routes>
          <Card>
            <NavLink to='/' activeclassname='active'>
              Home
            </NavLink>
            
            <NavLink to='/about' activeclassname='active'>
              About
            </NavLink>

          </Card>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App;
