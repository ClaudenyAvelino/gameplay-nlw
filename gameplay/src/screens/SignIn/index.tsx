import React, { useState } from "react";
import { View, Text, TextInput } from 'react-native';

import { styles } from './styles';

export function SignIn() {
    const [text, setText] = useState('Claudeny');

    return (
        <View style={styles.container}>
            <Text style={styles.input} >Ola mundo!! NLW together </Text>
            <TextInput style={styles.input} />
            <Text>
                Você digitou {text}
            </Text>
        </View>
    );
}