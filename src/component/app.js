import Language from "./language";
import Battle from "./battle";

import React from "react";

import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <Language />
                </Route>
                <Route path="/battle">
                    <Battle />
                </Route>
            </Switch>
        </>
    )
}

export default App;