import React from 'react';
// import logo from './logo.svg';
// import { Button, ButtonGroup, useToast  } from "@chakra-ui/core";
// import { Alert, Button } from "shards-react";


// import "bootstrap/dist/css/bootstrap.min.css";
// import "shards-ui/dist/css/shards.min.css"
import './App.css';

const buttonStyle = {
  marginTop: 20,
  // fontFamily: 'Arial'
}

function App() {

  // const toast = useToast()
  
  return (
    <div className="App" style={buttonStyle}>
      {/* <Button style={buttonStyle} colorScheme="teal">Button</Button> */}

      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Take the Shot!</button>

      {/* <Button
      onClick={() =>
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button> */}
    </div>
  );
}

export default App;
