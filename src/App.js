import './App.css';
import Random from './Components/Random';
import Tag from './Components/Tag';

function App() {
  return (
    <div className="w-full h-screen  flex flex-col background relative overflow-x-hidden items-center">
      <h1 className="rounded-lg  bg-white w-11/12 text-center mt-[40px] 
       px-10 py-10 text-4xl font-bold ">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
