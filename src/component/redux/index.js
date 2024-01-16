/**
 * @format
 */
//import 'react-native-gesture-handler';
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import App from "../../../App";
import store from "./store";
import {name as appName} from '../../../app.json';

const AppRedux = ()=>(
    <Provider store={store}>
        <App />
    </Provider>
)
AppRegistry.registerComponent(appName , ()=>AppRedux);