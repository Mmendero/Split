import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Split from '../screens/split';
import Test from '../screens/test';

const screens = {
    Home:{
        screen: Split
    },
    Output:{
        screen: Test
    }
}

const AppStack = createStackNavigator(screens);

export default createAppContainer(AppStack);