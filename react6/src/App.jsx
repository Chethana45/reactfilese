import UserGreeting from "./UserGreeting"


function App() {
  
  return(
    <>
      <UserGreeting isLoggedIn={true} username="Naveen"/>
      <UserGreeting isLoggedIn={true}/>
    </>
  );
}

export default App
