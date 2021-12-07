import './App.css';
import CommonBtn from './propsComponents/CommonBtn';
// import Contents from './propsComponents/Contents';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex justify-between w-6/12">
        <CommonBtn text="Submitted!!" child="submit" color="bg-pink-400"/>
        <CommonBtn text="Edited!!" child="edit" color="bg-green-400"/>
        <CommonBtn text="Deleted!!" child="delete" color="bg-yellow-300"/>
      </div>
    </div>
  );
}

export default App;
