import React from "react";
import { NavigationContainer } from "@react-navigation/native"


import {InicialStackNavigator} from "./src/navigations/stack"


 const App = () => {
  return (
    <NavigationContainer>
      <InicialStackNavigator/>
    </NavigationContainer>
  )
}
export default App