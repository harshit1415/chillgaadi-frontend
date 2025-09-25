import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import SignInScreen from '../screens/SignInScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import MenuScreen from '../screens/MenuScreen'
import CartScreen from '../screens/CartScreen'
import ReserveScreen from '../screens/ReserveScreen'
import ProfileScreen from '../screens/ProfileScreen'
import OtpScreen from '../screens/OtpScreen'
import CustomTabBar from '../components/CustomTabBar'
import RewardScreen from '../screens/RewardScreen'
import AboutReward from '../screens/AboutReward'


const BottomStack = createBottomTabNavigator()
function BottomBar() {
return(
    <BottomStack.Navigator initialRouteName='Profile' tabBar={props => <CustomTabBar {...props} /> }>
    <BottomStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
    <BottomStack.Screen name="Menu" component={MenuScreen} options={{headerShown:false}}/>
    <BottomStack.Screen name="Cart" component={CartScreen} options={{headerShown:false}}/>
    <BottomStack.Screen name="Reserve" component={ReserveScreen} options={{headerShown:false}}/>
    <BottomStack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
    
  </BottomStack.Navigator>
)
}

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName='BottomBar'>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown:false}}/>
      <Stack.Screen name="BottomBar" component={BottomBar} options={{headerShown:false}}/>
      <Stack.Screen name="VerifyOtp" component={OtpScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Reward" component={RewardScreen} options={{headerShown:false}}/>
      <Stack.Screen name="AboutReward" component={AboutReward} options={{headerShown:false}}/>
       
        
    </Stack.Navigator>
      </NavigationContainer>
   
  );
}

export default Navigation 