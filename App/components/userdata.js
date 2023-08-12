import react from 'react';
import {
    View,
    Text,
    StyleSheet
    
} from 'react-native';

     export const UserData = (props) => {
        const item = props.item;
        return (
            <View style={stylein.box}>
                <Text style={stylein.item}>{item.Name}</Text>
                <Text style={stylein.item}>{item.Email}</Text>
            </View>
        )
    }


export default stylein = StyleSheet.create({
    item: {
        fontSize: 30,
        padding: 5,
        color: 'red',
        flex: 1,
        margin: 2,
        textAlign: 'center',
    },
    box: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 2
    }
}

)


