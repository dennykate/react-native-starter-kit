import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import OrderList from "../pages/OrderList";
import Calculation from "../pages/Calculation";
import PrevOrders from "../pages/PrevOrders";
import Cart from "../pages/Cart";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      labeled={false}
      activeColor="#DD1818"
      inactiveColor="#837B7B"
      barStyle={{ backgroundColor: "#ffffff" }}
    >
      <Tab.Screen
        name="OrderList"
        component={OrderList}
        options={{
          tabBarBadge: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="list-status"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PrevOrders"
        component={PrevOrders}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-list" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cart-variant"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calculation"
        component={Calculation}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calculator" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
