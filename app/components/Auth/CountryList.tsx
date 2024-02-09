import {Text, View} from "react-native";
import {Button as RButton} from "react-native-elements";
import React, {JSX} from "react";
import countries from "../../countries/Countries";

interface CountryComponent {
    lang: string,
    country: string
    key: any
    onPress: any
}

export const countryComponent = (Button: any) => {
    return (props: CountryComponent) => {
        const {lang, country, onPress} = props
        const {name , code} = countries(lang, country)
        return (
            <Button
                onPress={onPress}
                containerStyle={{marginVertical: 1.5, minWidth: '100%', height: 40}}
                buttonStyle={{flex: 1, minWidth: '100%', minHeight: '100%', paddingHorizontal: 10, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'rgba(21, 34, 60, 1)', borderRadius: 10}}
                title={
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 16, color: 'white'}}>{name}</Text>
                        <Text style={{color: 'gray', paddingLeft: 10, fontWeight: '700', paddingTop: 2}}>{code}</Text>
                    </View>
            }
            >
            </Button>
        )
    }
}