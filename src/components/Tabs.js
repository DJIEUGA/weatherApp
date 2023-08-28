/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import City from '../screens/City';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();
const Tabs = props => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'rgb(255,2,100)',
                tabBarInactiveTintColor: 'grey',
                tabBarStyle: {
                    backgroundColor: 'whitesmoke',
                },
                headerStyle: {
                    backgroundColor: 'whitesmoke',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: 'rgb(255,2,100)',
                },
            }}
        >
            {
                <Tab.Screen
                    name={'Current'}
                    component={CurrentWeather}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Feather
                                name={'droplet'}
                                size={25}
                                color={focused ? 'rgb(255,2,100)' : 'black'}
                            />
                        ),
                    }}
                />
            }
            <Tab.Screen
                name={'Upcoming'}
                component={UpcomingWeather}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'clock'}
                            size={25}
                            color={focused ? 'rgb(255,2,100)' : 'black'}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={'City'}
                component={City}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'home'}
                            size={25}
                            color={focused ? 'rgb(255,2,100)' : 'black'}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
