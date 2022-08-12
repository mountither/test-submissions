import React from 'react';
import { ActivityIndicator } from 'react-native';
import { SCREEN_HEIGHT } from '../utils/dimensions';


const ScreenLoader = () => {
    return (
        <ActivityIndicator
            size={"large"}
            style={{
                position: "absolute",
                top: SCREEN_HEIGHT / 3,
                alignSelf: "center"
            }}
        />
    )
}

export default ScreenLoader