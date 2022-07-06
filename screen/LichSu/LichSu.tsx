import React from 'react';
import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';
import {
  SceneMap,
  TabBar,
  TabBarIndicator,
  TabView,
} from 'react-native-tab-view';
import NapHang from './component/NapHang/NapHang';
import RutTien from './component/RutTien';
import SuaLoi from './component/SuaLoi';

const initialLayout = {width: Dimensions.get('window').width};
const initialLayoutHeight = {height: 80};

const renderScene = SceneMap({
  first: NapHang,
  second: RutTien,
  third: SuaLoi,
});

const LichSu = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Nạp hàng'},
    {key: 'second', title: 'Rút tiền'},
    {key: 'third', title: 'Sửa lỗi'},
  ]);
  const TAB_MARGIN = 24;
  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      activeColor={'#FFFFFF'}
      inactiveColor={'rgba(255, 255, 255, 0.6)'}
      style={{backgroundColor: '#00DAD4', height: 44}}
      renderLabel={({route, focused, color}) => (
        <Text
          style={[
            focused
              ? {color, fontSize: 14, fontWeight: '600'}
              : {color, fontSize: 14, fontWeight: '400'},
          ]}>
          {route.title}
        </Text>
      )}
      renderIndicator={indicatorProps => {
        const width = indicatorProps.getTabWidth(index) - TAB_MARGIN;
        return <TabBarIndicator {...indicatorProps} width={width} />;
      }}
      indicatorStyle={{
        backgroundColor: '#FFFFFF',
        height: 4,
        left: TAB_MARGIN / 2,
      }}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.viewTop}>
        <Text style={styles.textTitle}>Lịch sử</Text>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        style={styles.scene}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00DAD4',
  },
  viewTop: {
    height: 48,
    backgroundColor: '#00DAD4',
    alignItems: 'center',
  },
  textTitle: {
    height: 27,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 11,
  },
  scene: {
    flex: 1,
  },
});

export default LichSu;
