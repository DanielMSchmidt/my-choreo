import React from "react";
import { ApolloProvider } from "@apollo/react-common";
import { Router } from "@reach/router";

import CreateChoreoRedirect from "./pages/CreateChoreoRedirect";
import ChoreoEditor from "./pages/ChoreoEditor";
import ChoreoTest from "./pages/ChoreoTest";
import getGraphQLClient from "./graphqlClient";

import "./App.css";

const client = getGraphQLClient();

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <CreateChoreoRedirect path="/" />
          <ChoreoEditor path="/choreo/:prefix/:id" />
          <ChoreoTest path="/choreo/:prefix/:id/test" />
        </Router>
      </div>
    </ApolloProvider>
  );
};

export default App;
