import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import{brzycki1RM} from '../utils/RepMax';
import styles from '../styles/CalculationStyles';

export default function CalculationComponent ({weight, setWeight, reps, setReps}){
     // Calculate 1RM directly inside the component
    const oneRM = brzycki1RM(Number(weight), Number(reps));
    return (
        <View style={styles.container}>
            <Text>1RM Calculator</Text>

            <TextInput
                placeholder= "Weight (kg)"
                style={styles.input}
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
            />

            <TextInput
                placeholder='Reps'
                style = {styles.input}
                keyboardType='numeric'
                value={reps}
                onChangeText={setReps}
            />

            <Text style={styles.result}>
                Brzycki 1RM: {oneRM ? oneRM + ' kg' : '-'}
            </Text>
        </View>
    )
}