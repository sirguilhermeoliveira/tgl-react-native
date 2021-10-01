import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { DrawerLayout } from 'react-native-gesture-handler';

const TYPES = ['front', 'back', 'back', 'slide'];
const PARALLAX = [false, false, true, false];

const NewBet = ({ openDrawer }: any) => (
  <View>
    <Text onPress={openDrawer}>Open drawer</Text>
  </View>
);

export default class Example extends Component {
  state = { fromLeft: true, type: 0 };
  drawer: any;
  renderParallaxDrawer: any;
  renderDrawer = () => {
    return (
      <View>
        <Text>I am in the drawer!</Text>
      </View>
    );
  };

  render() {
    const drawerType = TYPES[this.state.type];
    const parallax = PARALLAX[this.state.type];
    return (
      <View style={styles.container}>
        <DrawerLayout
          ref={(drawer) => {
            this.drawer = drawer;
          }}
          drawerWidth={200}
          keyboardDismissMode='on-drag'
          drawerPosition='right'
          drawerType='slide'
          drawerBackgroundColor='#ddd'
          overlayColor='front'
          renderNavigationView={
            parallax ? this.renderParallaxDrawer : this.renderDrawer
          }
          contentContainerStyle={
            drawerType === 'front'
              ? {}
              : Platform.select({
                  ios: {
                    shadowColor: '#000',
                    shadowOpacity: 0.5,
                    shadowOffset: { width: 0, height: 2 },
                    shadowRadius: 60,
                  },
                  android: {
                    elevation: 100,
                    backgroundColor: '#000',
                  },
                })
          }
        >
          <Text>Gangster's Paradise</Text>
          <NewBet
            type={drawerType}
            fromLeft={this.state.fromLeft}
            parallaxOn={parallax}
            flipSide={() => this.setState({ fromLeft: !this.state.fromLeft })}
            nextType={() =>
              this.setState({ type: (this.state.type + 1) % TYPES.length })
            }
            openDrawer={() => this.drawer.openDrawer()}
          />
        </DrawerLayout>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: 'gray',
  },
  pageText: {
    fontSize: 21,
    color: 'white',
  },
  rectButton: {
    height: 60,
    padding: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'white',
  },
  rectButtonText: {
    backgroundColor: 'transparent',
  },
  drawerContainer: {
    flex: 1,
    paddingTop: 10,
  },
  pageInput: {
    height: 60,
    padding: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#eee',
  },
  drawerText: {
    margin: 10,
    fontSize: 15,
    textAlign: 'left',
  },
});
