import {StyleSheet} from "react-native";


const authStyle = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: 'flex-end',
        minWidth: '100%',
        minHeight: '100%'
    },
    logoContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    authTitle: {
        textAlign: 'center',
        flex: 1,
        maxWidth: 267,
        maxHeight: 34,
        fontSize: 19,
        color: 'white',
        fontWeight: '400'
    },
    authNumberDesc: {
        textAlign: 'center',
        flex: 1,
        maxWidth: 267,
        maxHeight: 34,
        fontSize: 14,
        color: 'white',
        fontWeight: '400',
        marginBottom: 53
    },
    authBtnContainer: {
        marginTop: 110,
        minWidth: 250,
        height: 45,
        marginBottom: 115,
    },
    authBtn: {
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
        borderStyle: 'solid',
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 10,
    },
    titleStyle: {
        color: '#E0E0E0',
        fontWeight: '600',
        fontSize: 20
    },

    countryContainer: {
        zIndex: -2,
        marginBottom: 4,
        width: 198,
        height: 40,
        marginTop: 9,
        alignItems: 'flex-start',
        borderStyle: 'solid',
        borderColor: '#787D9F',
        borderWidth: 1,
        borderRadius: 10,
    },

    countryButton: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'flex-start'
    },

    countryTitle: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 17,
        fontWeight: '400',
        textAlign: "justify",
        marginLeft: 10,
        letterSpacing: 1
    },

    countryText: {
        zIndex: 1,
        position: 'absolute',
        left: 19,
        fontSize: 14,
        color: '#B8BCC3',
        backgroundColor: "#15223C",
        paddingHorizontal: 3
    },

    svgDownArrowContainer: {
        zIndex: -100,
        position: 'absolute',
        left: 170,
        top: 27
    },

    inputContainer: {
        zIndex: -1,
        flexDirection: 'row',
        paddingHorizontal: 22,
        marginBottom: 4,
        width: 198,
        height: 40,
        marginTop: 9,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: '#787D9F',
        borderWidth: 1,
        borderRadius: 10,
    },
    phoneNumberTitle: {
        position: 'absolute',
        left: 19,
        fontSize: 14,
        color: '#B8BCC3',
        backgroundColor: "#15223C",
        paddingHorizontal: 3
    },
    numberCodeContainer: {
        borderRightColor: 'white',
        borderRightWidth: 1,
        paddingRight: 10,
        marginRight: 10
    },
    codeText: {
        fontSize: 17,
        color: '#FFF',
        borderRightColor: 'white',
        borderRightWidth: 1
    },
    mask: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: '#FFFF',
        fontSize: 17,
        fontWeight: '400',
    },
    langIcon: {
        zIndex: 50,
        minWidth: '100%',
        minHeight: '15%',
        paddingRight: 20,
        paddingTop: 52,
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    },
    languageTitle: {
        width: 23.26,
        height: 12,
        fontSize: 10,
        fontWeight: '400',
        color: '#fff',
        paddingHorizontal: 8
    }
});

export default authStyle;