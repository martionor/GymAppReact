import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import SetRepStyles from '../styles/SetRepStyles';
import { commonPercentages } from '../utils/RepMax';

export default function SetRepSelector ({options,selected, onSelect}){
    return (
        <View style={SetRepStyles.container}>
            {options.map((option) =>{
                const isSelected = selected === option;
                return (
                    <Pressable
                        key={option}
                        style={[SetRepStyles.button, isSelected && SetRepStyles.selectedButton]}
                        onPress={() => onSelect(option)}
                    >
                        <Text style={[SetRepStyles.text, isSelected && SetRepStyles.selectedText]}>
                            {option}
                        </Text>
                    </Pressable>
                )
            })}
        </View>
    )
}