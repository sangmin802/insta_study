# insta_study
Google velog로 올려진 React Native Instagram은 구버전이라서, Navigation할 때 오류투성이.. 따라서! 내가 공문따라 해봄.  

1일차 - 기초설치  
  1. npm install @react-navigation.native  
  2. expo install react-native-gesture-handler react-native-reanimated  react-native-screens react-native-safe-area-context @react-native-community/masked-view  
  3. 해당 모듈 import
    * import { NavigationContainer } from '@react-navigation/native';
    * import { createStackNavigator } from '@react-navigation/stack';
  4. NavigationContainer는 기존 Router태그와 같은 용도같음
  5. const Stack = createStackNavigator() 로 Stack 객체를 받아옴
  6. Stack.Navigator 안에, Stack.Screen으로 컴포넌트를 연동시켜줌.
  7. AppTabNavigator해야함. 근데 BottomTab으로 바뀐듯함. 모듈은 깔았음.