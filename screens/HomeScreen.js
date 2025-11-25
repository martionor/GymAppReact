import {Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../styles/Styles';
import CalculationComponent from '../components/CalculationComponent';
import SetRepSelector from '../components/SetRepSelector';
import { brzycki1RM, percentageOf1RM } from '../utils/RepMax';

export default function HomeScreen(){
    const [selectedScheme, setSelectedScheme] = useState(null);
    const [weight, setWeight]= useState('');
    const [reps, setReps]=useState('');
    const [oneRM, setOneRM] = useState('');
    const [schemeWeight, setSchemeWeight] = useState('');


     // Map schemes to reps and desired % of 1RM
    const schemeInfo = {
        '5x5': 70,
        '4x8': 65,
        '3x5': 75,
        '3x3': 80,
    };

     // Calculate 1RM whenever weight or reps change
    useEffect(() => {
        if (weight && reps) {
        const calculated1RM = brzycki1RM(Number(weight), Number(reps));
        setOneRM(calculated1RM);

        // Also recalc schemeWeight if a scheme is selected
        if (selectedScheme) {
            setSchemeWeight(percentageOf1RM(calculated1RM, schemeInfo[selectedScheme]));
        }
        } else {
        setOneRM('');
        setSchemeWeight('');
        }
    }, [weight, reps, selectedScheme]);

    // Update schemeWeight when scheme changes
    useEffect(() => {
        if (oneRM && selectedScheme) {
        setSchemeWeight(percentageOf1RM(oneRM, schemeInfo[selectedScheme]));
        }
    }, [selectedScheme]);
    
    return(
         <ScrollView contentContainerStyle={{ padding: 20 }}>

            <Text style={styles.title}>GymFriend01</Text>

            <SetRepSelector
            options={Object.keys(schemeInfo)}
            selected={selectedScheme}
            onSelect={setSelectedScheme}
            />

            
            <CalculationComponent
                weight={weight}
                setWeight={setWeight}
                reps={reps}
                setReps={setReps}
                oneRM={oneRM}
            />

            {selectedScheme && schemeWeight && (
                <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    {selectedScheme} → {schemeWeight} kg ({schemeInfo[selectedScheme]}% of 1RM)
                </Text>
                </View>
            )}
        </ScrollView>     
    )
}