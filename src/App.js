import React from "react";
import client from "./graphql/client";
import { ApolloProvider } from "@apollo/react-hooks";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Main />
      </div>
    </ApolloProvider>
  );
}

export default App;
