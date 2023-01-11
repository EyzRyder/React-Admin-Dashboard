import { Widget } from '../../components/widget/Widget';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      
      <div className="widgets">
        <Widget type="user"/>
        <Widget type="order"/>
        <Widget type="earning"/>
        <Widget type="balance"/>
      </div>
      <div className="charts">
        
      </div>
    </div>
  )
}

export default Home