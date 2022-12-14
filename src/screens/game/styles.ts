import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 32,
        marginTop: 28,
        justifyContent: 'space-between'
    },
    cover: {
        width: 311,
        height: 160,
        borderRadius: 8,
        marginTop: 32
    },
    right: {
        width: 20,
        height: 20,
    },
    containerList: {
        width: '100%',
    },
    contentList: {
        paddingLeft: 32,
        paddingRight: 64,
        alignItems: 'flex-start',
    },
    emptyListText: {
        color: THEME.COLORS.CAPTION_300,
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.REGULAR
    },
    emptyListContent: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    }
})