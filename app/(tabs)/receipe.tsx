import {Text, View, StyleSheet} from 'react-native';

export default function About(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is about page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252525',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff'
    }
})