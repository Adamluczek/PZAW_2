function Greeter({age, name}){
  
  const who = name;
  if(age<30){

  
  return(
    <p>Witaj {name}!</p>
  );
}
else{
  return(
    <p>Dzień dobry {name}</p>
  )
}
}
function App(){
  return(
    <div>
      <Greeter name="Mario" age={1}/>
      <Greeter name="Luigi" age={31} />
    </div>
  )
}
export default App
