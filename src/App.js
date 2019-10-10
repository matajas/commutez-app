import React from "react";
import "./App.css";
import client from "./graphql/client";
import { ApolloProvider } from "@apollo/react-hooks";
import MalmoTrainBoard from "./components/TrainBoard/MalmoTrainBoard";
import CopenhagenTrainBoard from "./components/TrainBoard/CopenhagenTrainBoard";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <MalmoTrainBoard />
        <CopenhagenTrainBoard />
      </div>
    </ApolloProvider>
  );
}

export default App;
