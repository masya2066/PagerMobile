import {
    Animated,
    Image,
    ImageBackground,
    Keyboard,
    KeyboardAvoidingView, Modal,
    Platform,
    Pressable,
    Text, TextInput, TouchableHighlight, TouchableHighlightBase, TouchableHighlightComponent,
    TouchableOpacity, TouchableOpacityBase,
    View
} from "react-native";
import authStyle from "../../styles/Auth/auth";
import {Button as RButton} from "react-native-elements";
import React, {JSX, useContext, useEffect, useState} from "react";
import {TextInputMask} from "react-native-masked-text";
import {LangContext} from "../../context/language/LanguageProvider";
import {lang} from "../../languages/languages";
import {Utils} from "../../utils/utils";
import {funcAuth} from "./functions/Auth";
import {CountriesContext} from "../../context/countries/Countries";
import countries from "../../countries/Countries";
import {SvgCloseButton, SvgDownArrow} from "../../components/Auth/Svg";
import ScrollView = Animated.ScrollView;
import {countryComponent} from "../../components/Auth/CountryList";
import {countriesRu} from "../../countries/countriesRu";
import {countriesEn} from "../../countries/countriesEn";


export default function Login({navigation}: any) {
    const { isLang, setLang } = useContext(LangContext);
    const [inputValue, setInputValue] = useState('');
    const [isCountry, setCountry] = useState(countries(isLang, 'russia'))
    const [isVisible, setVisible] = useState(false)

    const CountryButton = countryComponent(RButton)

    useEffect(() => {

    })

    const handleText = (text: string) => {
            const res = Utils.Numbers.checkOnlyNumbers(text)
        setInputValue(res)
    }

    function CountriesList() {
        let checkList
        isLang === "ru" ? checkList = countriesRu : checkList = countriesEn
        const list: string[] = []
        for (let i in checkList) {
            list.push(i)
        }
        return (
            list.map((val, index) => {
                return (
                    <CountryButton
                        key={index}
                        lang={isLang}
                        country={val}
                        onPress={() => {
                            setCountry(countries(isLang, val))
                            setVisible(false)
                        }}/>
                )
            })
        )
    }


    return (
        <ImageBackground source={require('../../../assets/img.png')} imageStyle={{flex: 1, maxWidth: "100%", minHeight: '100.7%'}}>
        <View style={{ width: '100%', height: '100%'}}>
            <Pressable
                style={authStyle.background}
                onPress={Keyboard.dismiss}
            >
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={isVisible}
                >
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
                        <View style={{ flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.33)', minWidth: '100%', maxHeight: '90%', paddingTop:10, paddingHorizontal: 20}}>
                            <View style={{flexDirection: 'row', maxWidth: '100%', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 20}}>
                                <TextInput
                                    style={{height: 32, width: 307, backgroundColor: 'rgba(155, 164, 199, 0.85)', borderRadius: 10, padding: 10}}
                                    placeholderTextColor={'white'}
                                    placeholder={lang(isLang, 'search')}
                                />
                                <TouchableOpacity
                                onPress={() => {
                                    setVisible(false)
                                }}>
                                    <SvgCloseButton />
                                </TouchableOpacity>
                            </View>
                            <ScrollView style={{flex: 1}}>
                                <CountriesList />
                            </ScrollView>
                        </View>
                        {/*<Image source={require('../../../assets/white.jpeg')}*/}
                        {/*       style={{flex: 1, backgroundColor: '#000', minWidth: '100%', maxHeight: '90%', resizeMode: 'cover'}}*/}
                        {/*       */}
                        {/*/>*/}

                        </View>
                </Modal>
                <View style={authStyle.logoContainer}>
                <View style={authStyle.langIcon}>
                <TouchableOpacity
                onPress={() => {
                    isLang === 'en' ?
                        setLang('ru')
                        :
                        setLang('en')}}
                >
                    <View style={{flex: 1, maxWidth: 52, maxHeight: 18, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    {isLang === 'en' ?
                        <Image
                            source={require('../../../assets/flags/ru.png')}
                            style={{width: 28.09, height: 18}}
                        />
                        :
                        <Image
                            source={require('../../../assets/flags/en.png')}
                            style={{width: 28.09, height: 18}}
                        />
                    }
                        {isLang === 'en' ?
                            <Text style={authStyle.languageTitle}>
                            RU
                            </Text> :
                            <Text style={authStyle.languageTitle}>
                                EN
                            </Text>}
                </View>
                </TouchableOpacity>
                </View>
                <View style={{flex: 1, minWidth: '100%', justifyContent: 'flex-end', alignItems: 'center'}}>
                    <Image
                    source={require('../../../assets/logo2.png')}
                    style={{flex: 1, maxWidth: 200, maxHeight: 130, marginBottom: 52}}
                    resizeMode={'contain'}
                    />
                </View>
                </View>
                <KeyboardAvoidingView
                    style={{alignItems: 'center', justifyContent: 'center'}}
                    behavior={Platform.OS == 'ios' ? 'padding' : undefined}
                    enabled>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={authStyle.authTitle}>
                            {lang(isLang, "auth_title")}
                        </Text>
                        <Text style={authStyle.authNumberDesc}>
                            {lang(isLang, "auth_number_description")}
                        </Text>
                        <View>
                            <Text style={authStyle.countryText}>
                                {lang(isLang, "country")}
                            </Text>
                            <View style={authStyle.svgDownArrowContainer}>
                                <SvgDownArrow />
                            </View>
                            <RButton
                                style={authStyle.countryContainer}
                                buttonStyle={authStyle.countryButton}
                                title={isCountry.name}
                                titleStyle={authStyle.countryTitle}
                                onPress={() => {
                                    setVisible(true)
                                }}
                            />
                        </View>
                        <View>
                            <Text style={authStyle.phoneNumberTitle}>
                                {lang(isLang, "phone_number")}
                            </Text>
                        <View style={authStyle.inputContainer}>
                            <View style={authStyle.numberCodeContainer}>
                                <Text style={authStyle.codeText}>
                                    {isCountry.code}
                                </Text>
                            </View>
                            <TextInputMask
                                style={authStyle.mask}
                                keyboardType={"numeric"}
                                value={inputValue}
                                onChangeText={handleText}
                                type={'only-numbers'}
                                placeholderTextColor={'#FFF'}
                                maxLength={20}
                            />
                        </View>
                            </View>
                    </View>
                </KeyboardAvoidingView>
            <RButton
                containerStyle={authStyle.authBtnContainer}
                buttonStyle={authStyle.authBtn}
                titleStyle={authStyle.titleStyle}
                title={lang(isLang, 'auth_button')}
                hitSlop={3}
                onPress={() => {
                    navigation.navigate('Verify')
                    funcAuth.Auth('asdkjaskd')
                }}
            />
            </Pressable>
        </View></ImageBackground>
    )
}