/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar, ImageBackground } from 'react-native';
import IconText from '../components/IconText';

const City = () => {
    const { imageLayout, userPredictionWrapper, container, cityName, cityText, countryName, populationText, populationWrapper, riseSetText, riseSetWrapper, rowLayout } = styles;
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/city-background.jpg')}
                style={imageLayout}>
                <Text style={[cityName, cityText]}>Bafang</Text>
                <Text style={[countryName, cityText]}>Cameroon</Text>
                <View style={userPredictionWrapper}>
                    <View style={populationWrapper}>
                        <IconText
                            iconName={'user'}
                            iconColor={'whitesmoke'}
                            bodyText={'8000'}
                            bodyTextStyles={populationText}
                        />
                    </View>
                    <View style={[riseSetWrapper, rowLayout]}>
                        <IconText iconName={'sunrise'} iconColor={'rgb(220,220,237)'} bodyText={'10 : 45 : 34 am'} bodyTextStyles={riseSetText} />
                        <IconText iconName={'sunset'} iconColor={'rgb(220,220,237)'} bodyText={'16 : 32 : 12 pm'} bodyTextStyles={riseSetText} />
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    imageLayout: {
        flex: 1,
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'rgb(220,220,237)',
        fontWeight: 'bold',
    },
    userPredictionWrapper: {
        marginVertical: 10,
        borderRadius: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30,
        borderRadius: 50,
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'rgb(255,2,100)',
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30,
        paddingTop: 5,
        paddingBottom: 20,
    },
    riseSetText: {
        fontSize: 20,
        color: 'rgb(230,230,230)',
        marginTop: 10,
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
export default City;
