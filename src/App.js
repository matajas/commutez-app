import React from "react";
import "./App.css";
import client from "./graphql/client";
import { ApolloProvider } from "@apollo/react-hooks";
import MalmoTrainBoard from "./components/MalmoTrainBoard/MalmoTrainBoard";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <MalmoTrainBoard />
      </div>
    </ApolloProvider>
  );
}

export default App;
