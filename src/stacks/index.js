import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from "react-navigation";
import TabStack from './TabStack';

const MainStack = createStackNavigator({
    TabStack:{screen:TabStack}
},{
    headerMode: "none",
    initialRouteName: "TabStack"
})

export default createAppContainer(MainStack)