import {Document, Page, StyleSheet, Text, View} from "@react-pdf/renderer";
import {LinesSvg} from "./LinesSvg.tsx";

const styles = StyleSheet.create({
    cover: {
        backgroundColor: "#1E2327",
    },
    page: {
        flexDirection: 'row'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    main: {
      flexBasis: "80vw",
        flexGrow: 0,
        flexShrink: 0,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 24,
        paddingRight: 24,
        backgroundColor: '#FFF'
    },
    title: {
      fontSize: 24,
      fontWeight: 700,
    },
    text: {
        fontSize: 12,
        fontWeight: 400,
    },
    aside: {
        flexBasis: "0",
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#E4E4E4'
    },
});

// Create Document Component
export const MyDocument = () => (
    <Document>
        <Page size="A4" style={[styles.cover, styles.page]} orientation={"landscape"}>
            <LinesSvg />
        </Page>
        <Page size="A4" style={styles.page} orientation={"landscape"}>
            <View style={styles.main}>
                <Text style={styles.title}>This is the Main title</Text>
                <Text style={styles.text}>This is the body of the Main, and I'm going to try to give it a little flesh, just to test it out! I wonder, if I make the text even longer will it break appropriately? Or will it spill into the Aside, just because maybe that's something it does...</Text>
            </View>
            <View style={styles.aside}>
                <Text style={styles.title}>This is the Aside title</Text>
                <Text style={styles.text}>This is the body of the Aside</Text>
            </View>
        </Page>
    </Document>
);