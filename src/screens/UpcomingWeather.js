/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground } from 'react-native';
import ListItem from '../components/ListItem';

const DATA = [
    {
        dt_txt: '2023-08-23 12:00:00',
        main: {
            temp_max: 8.44,
            temp_min: 7.44,
        },
        weather: [
            {
                main: 'Clear',
            },
        ],
    },
    {
        dt_txt: '2023-08-23 15:00:00',
        main: {
            temp_max: 8.44,
            temp_min: 7.44,
        },
        weather: [
            {
                main: 'Clouds',
            },
        ],
    },
    {
        dt_txt: '2023-08-23 18:00:00',
        main: {
            temp_max: 8.44,
            temp_min: 7.44,
        },
        weather: [
            {
                main: 'Rain',
            },
        ],
    },
];

const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <ListItem
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    );
    const { container, image } = styles;
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/upcoming-background.png')} style={image} >
                <Text style={{
                    color: 'white',
                    fontSize: 25,
                    fontWeight: '600',
                    marginTop: 35,
                    alignSelf: 'center',
                }}
                >
                    Upcoming Weather</Text>
                <FlatList style={{marginVertical: 50}} data={DATA} renderItem={renderItem} keyExtractor={(item) => item.dt_txt} />
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'royalblue',
        marginTop: StatusBar.currentHeight || 0,
    },
    image: {
        flex: 1,
    },
});

export default UpcomingWeather;

