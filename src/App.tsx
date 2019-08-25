import React from "react";
import { ApolloProvider } from "@apollo/react-common";
import { Router } from "@reach/router";

import CreateChoreoRedirect from "./pages/CreateChoreoRedirect";
import ChoreoEditor from "./pages/ChoreoEditor";
import getGraphQLClient from "./graphqlClient";

import "./App.css";

const client = getGraphQLClient();

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h1>My Choreo</h1>
        </header>

        <Router>
          <CreateChoreoRedirect path="/" />
          <ChoreoEditor path="/choreo/:prefix/:id" />
        </Router>
      </div>
    </ApolloProvider>
  );
};

export default App;
