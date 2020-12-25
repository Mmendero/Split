import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Split from '../screens/split';
import EvenResult from '../screens/even-result';

//Define all screens within app
const screens = {
    Home:{
        screen: Split
    },
    EvenOutput:{
        screen: EvenResult
    }
}

const AppStack = createStackNavigator(screens);

export default createAppContainer(AppStack);