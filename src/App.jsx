import Card from "./components/Card";

function App() {
  // console.log(props)
  let myObj = {
    username: "utkarsh",
    class: "graduate",
  };

  return (
    <div className="text-white bg-black w-full h-screen flex justify-center items-center">
      <Card someObj={myObj} name="The Coldest Sunset" obj={myObj} tag="travel" />
    </div>
  );
}

export default App;
