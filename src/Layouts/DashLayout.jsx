 
import Sidebar from '../components/sidebar/Sidebar';

// eslint-disable-next-line react/prop-types
const DashLayout = ({children}) => {
  return (
    <div className="  text-gray-200   ">
      <Sidebar /> 
      {children}
    </div>
  )
}

export default DashLayout;