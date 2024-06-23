import React from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { StackedBarChart, PieChart } from 'react-native-chart-kit';
import { styles } from '../../styles/(tabs)/AccountCharts'

export default function AccountCharts() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'], // Añade más etiquetas de mes según sea necesario
    legend: ['Necessity', 'House Bills', 'Gustos', 'Otro'],
    data: [
      [150, 50, 70, 30], // Data for Jan
      [120, 80, 90, 20], // Data for Feb
      [140, 20, 33, 0], // Data for Mar
      [20, 20, 20, 20], // Data for Apr
    ],
    barColors: ['#ff6f61', '#6b5b95', '#88b04b', '#f7cac9'],
  };

  const chartConfig = {
    backgroundColor: '#fff',
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  const currentMonthData = data.data[data.data.length - 1];
  const pieData = currentMonthData.map((value, index) => ({
    name: data.legend[index],
    amount: value,
    color: data.barColors[index],
    legendFontColor: '#7F7F7F',
    legendFontSize: 12,
  }));

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Money Spent by Month</Text>
      <View style={styles.chartContainer}>
        <StackedBarChart
          data={data}
          width={Dimensions.get('window').width - 80} // Adjust width for padding
          height={220}
          chartConfig={chartConfig}
          yAxisLabel="$"
          yAxisSuffix=""
          fromZero
          hideLegend={true}
        />

        <View style={styles.legend}>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#ff6f61' }]} />
            <Text style={styles.legendText}>Necessity</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#6b5b95' }]} />
            <Text style={styles.legendText}>House Bills</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#88b04b' }]} />
            <Text style={styles.legendText}>Gustos</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: '#f7cac9' }]} />
            <Text style={styles.legendText}>Otro</Text>
          </View>
        </View>
      </View>

      <Text style={styles.title}>Current Month Spending</Text>
      <View style={styles.chartContainer}>
        <PieChart
          data={pieData}
          width={Dimensions.get('window').width - 80}
          height={220}
          chartConfig={chartConfig}
          accessor={'amount'}
          backgroundColor={'transparent'}
          paddingLeft={'15'}
          absolute
        />
      </View>
    </ScrollView>
  );
}
