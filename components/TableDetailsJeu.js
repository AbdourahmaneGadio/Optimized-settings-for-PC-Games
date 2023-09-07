import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-reanimated-table';

export default function TableDetailsJeu() {

    const testTableData = {
        tableTitle: ['Jeu', 'Textures'],
        tableData: ['Psychonauts 2', 'High'],
    }
    return (
        <View>
            <Table style={{ flexDirection: 'row' }} borderStyle={{ borderWidth: 1, }}>
                <TableWrapper style={{ width: 500 }}>
                    <TableWrapper style={{ flexDirection: 'row' }}>
                        <Col data={testTableData.tableTitle} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.titleText} />
                        
                        <Col data={testTableData.tableData} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.titleText} />
                        
                    </TableWrapper></TableWrapper>
            </Table>
        </View>
    )
}

const styles = StyleSheet.create({
    title: { flex: 2, backgroundColor: '#f6f8fa' },
    titleText: { textAlign: 'center' },
});