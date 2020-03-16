# insta_study
Google velog로 올려진 React Native Instagram은 구버전이라서, Navigation할 때 오류투성이.. 따라서! 내가 공문따라 해봄.  

1일차 - 기초설치  
  1. npm install @react-navigation.native  
  2. expo install react-native-gesture-handler react-native-reanimated  react-native-screens react-native-safe-area-context @react-native-community/masked-view  
  3. 해당 모듈 import  
    + ```import { NavigationContainer } from '@react-navigation/native'```;  
    + ```import { createStackNavigator } from '@react-navigation/stack'```;  
  4. NavigationContainer는 기존 Router태그와 같은 용도같음
  5. const Stack = createStackNavigator() 로 Stack 객체를 받아옴
  6. Stack.Navigator 안에, Stack.Screen으로 컴포넌트를 연동시켜줌.
  7. AppTabNavigator.  
    + AppTabNavigator(createBottomTabNavigator사용)는 NavigationContainer 안에 있어야 함. 마치 WEB의 Route과 비슷한듯.  
    + Tab.Navigator는 여러가지 props를 보낼 수 있는데, screenOptions로 보내지는것을 보면, 객체를 보내며, 그 객체에는 현재 출력되고 있는 component의 설정된 name이 있음. 그것을 활용하여, 어떤것이 클릭되었는지 체크 할 수 있음. (pathname과 같은역활)  
    + TabBarIcon은 Tab.screen의 속성이지만, 유지보수를 위해 Tab.Navigator의 screenOptions의 속성으로도 설정할 수 있다.  
  8. 탭을 클릭했을 때, swipe기능을 사용하려면, createMaterialTopTabNavigator를 사용해야한다. const로 호출되는 메소드명이 바뀌고, 새로운 속성들을 사용할 수 있다.(showIcon 기본 true였는데, 바꾸고 입력필수항목이 되었음)  
  9. native-base를 통해 ios, Android의 native환경을 좀 더 효율적으로 만들 수 있도록 여러 API를 제공한다. <- 근데 이거 확인좀해야함 오류 좆나많음