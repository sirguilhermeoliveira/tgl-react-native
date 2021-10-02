import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Animated,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import createStyles from './styles';
import { DrawerLayout } from 'react-native-gesture-handler';
import useTheme from '../../theme/index';
import { Ionicons } from '@expo/vector-icons';
const styles = createStyles();
const TYPES = ['front', 'back', 'back', 'slide'];
const PARALLAX = [false, false, true, false];
const {
  colors: {
    gray,
    lightGray,
    greenYellow,
    white,
    black,
    borderGray,
    smoothGray,
    silverWhite,
    ghostGray,
    almostGray,
  },
  fontSizes: { xxs, xs, sm, md, lg, xg, xl, xxg, xxl, lxs, hg, hl },
  margins: { baseMargin },
  paddings: { basePadding },
} = useTheme();

const Page = ({ openDrawer }: any) => (
  <ScrollView>
    <View style={styles.container}>
      <View style={styles.homeRow}>
        <Text style={styles.homeTitle}>TGL</Text>
        <View style={styles.homeRowIcons}>
          <TouchableOpacity onPress={openDrawer}>
            <Ionicons color={greenYellow} name='cart-outline' size={35} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              style={styles.homeArrow}
              color={ghostGray}
              name='arrow-forward'
              size={35}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.newBetPadding}>
        <Text style={styles.newBetTitle}>new bet for lotomania</Text>
        <Text style={styles.newBetChooseGame}>Choose a game</Text>
        <View style={styles.newBetRowNumbers}>
          <TouchableOpacity style={styles.newBetNumbersMin}>
            <Text style={styles.newBetNumbersNumber}>01</Text>
            <Ionicons
              style={styles.newBetX}
              color={white}
              name='close-outline'
              size={12}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.newBetButtonsContainer}>
          <TouchableOpacity style={styles.newBetButtonsLeft}>
            <Text style={styles.newBetButtons}>Complete game</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newBetButtonsLeft}>
            <Text style={styles.newBetButtons}>Clear game</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.newBetButtonsCart}>
              <Ionicons color={white} name='cart-outline' size={18} />
              <Text style={styles.newBetButtonsAddCart}>Add to cart</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.newBetRow}>
          <TouchableOpacity style={styles.newBetGames}>
            <Text style={styles.newBetText}>Lotofácil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newBetGames}>
            <Text style={styles.newBetText}>Mega-Sena</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newBetGames}>
            <Text style={styles.newBetText}>Lotomania</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.newBetFill}>Fill your bet</Text>
        <Text style={styles.newBetFillDescription}>
          Mark as{' '}
          <Text style={styles.newBetFillDescriptionBold}>many numbers</Text> as
          you want up to a{' '}
          <Text style={styles.newBetFillDescriptionBold}>maximum of 50</Text>
        </Text>
        <Text style={styles.newBetFillDescription}>
          Win by hitting{' '}
          <Text style={styles.newBetFillDescriptionBold}>
            15, 16, 17, 18, 19, 20
          </Text>{' '}
          or <Text style={styles.newBetFillDescriptionBold}>none</Text> of the{' '}
          <Text style={styles.newBetFillDescriptionBold}>
            20 numbers drawn.
          </Text>
        </Text>
        <View style={styles.newBetBottomLineCenter}>
          <View style={styles.newBetBottomLine}></View>
        </View>
        <View style={styles.newBetRowNumbers}>
          <Text style={styles.newBetNumbers}>01</Text>
          <Text style={styles.newBetNumbers}>02</Text>
          <Text style={styles.newBetNumbers}>03</Text>
          <Text style={styles.newBetNumbers}>04</Text>
          <Text style={styles.newBetNumbers}>05</Text>
          <Text style={styles.newBetNumbers}>06</Text>
          <Text style={styles.newBetNumbers}>07</Text>
          <Text style={styles.newBetNumbers}>08</Text>
          <Text style={styles.newBetNumbers}>09</Text>
          <Text style={styles.newBetNumbers}>10</Text>
        </View>
      </View>
    </View>
  </ScrollView>
);

export default class Example extends Component {
  state = { fromLeft: true, type: 0 };
  drawer: any;
  renderParallaxDrawer = (progressValue: {
    interpolate: (arg0: { inputRange: number[]; outputRange: number[] }) => any;
  }) => {
    const parallax = progressValue.interpolate({
      inputRange: [0, 1],
      outputRange: [this.state.fromLeft ? -50 : 50, 0],
    });
    const animatedStyles = {
      transform: [{ translateX: parallax }],
    };
    return (
      <Animated.View style={[styles.drawerContainer, animatedStyles]}>
        <Text style={styles.drawerText}>I am in the drawer!</Text>
        <Text style={styles.drawerText}>
          Watch parallax animation while you pull the drawer!
        </Text>
      </Animated.View>
    );
  };

  renderDrawer = () => {
    return (
      <View style={styles.drawerContainer}>
        <Text>X Ionicons</Text>
        <View>
          <Text>Cart Ionicons</Text>
          <Text>cart</Text>
        </View>
        <View>
          <Text>
            01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25, 27, 28,
            29, 31, 36, 37, 38, 40, 42, 43, 44, 45, 46, 48, 50
          </Text>
          <View>
            <Text>28/11/2020 - (R$ 2,50)</Text>
            <Text>Trash Can Ionicons</Text>
          </View>
          <Text>Lotomania</Text>
        </View>
        <View>
          <Text>cart total: </Text>
          <Text>r$ 7,50</Text>
        </View>
        <View>
          <Text>Save</Text>
          <Text>ArrowRight</Text>
        </View>
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
          renderNavigationView={this.renderDrawer}
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
          <Page
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
