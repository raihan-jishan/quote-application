
import Footer from '../components/Footer/Footer.jsx';
import Navbar from '../components/Nav/Navbar.jsx';
// eslint-disable-next-line react/prop-types
const AppLayout = ({children}) => {
  return (
    <div>
        <Navbar /> 
        {children}
        <Footer /> 
    </div>
  )
}

export default AppLayout;