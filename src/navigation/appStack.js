import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Split from '../screens/split';
import SplitResult from '../screens/split-result';

const screens = {
    Home:{
        screen: Split
    },
    Output:{
        screen: SplitResult
    }
}

const AppStack = createStackNavigator(screens);

export default createAppContainer(AppStack);