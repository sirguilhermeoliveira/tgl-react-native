import React, { Component } from 'react';
import {
  Platform,
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
        <ScrollView horizontal={true} style={styles.newBetRow}>
          <TouchableOpacity style={styles.newBetGames}>
            <Text style={styles.newBetText}>Lotofácil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newBetGames}>
            <Text style={styles.newBetText}>Mega-Sena</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newBetGames}>
            <Text style={styles.newBetText}>Lotomania</Text>
          </TouchableOpacity>
        </ScrollView>
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

  renderDrawer = () => {
    return (
      <View style={styles.drawerContainer}>
        <View style={styles.drawerRowXToEnd}>
          <Ionicons
            style={styles.drawerXToEnd}
            color={greenYellow}
            name='close-outline'
            size={30}
          />
        </View>
        <View style={styles.drawerRow}>
          <Ionicons
            style={styles.newBetX}
            color={greenYellow}
            name='cart-outline'
            size={35}
          />
          <Text style={styles.drawerCart}>cart</Text>
        </View>
        <ScrollView>
          <View style={styles.homeSideBar}>
            <Text style={styles.homeListGameNumbers}>
              01, 02, 04, 05, 06, 07, 09, 15, 17, 20, 21, 22, 23, 24, 25, 27,
              28, 29, 31, 36, 37, 38, 40, 42, 43, 44, 45, 46, 48, 50
            </Text>
            <View style={styles.newBetRow}>
              <Text style={styles.homeListGameData}>
                28/11/2020 - (R$ 2,50)
              </Text>
              <Ionicons
                style={styles.drawerBetX}
                color={gray}
                name='trash-outline'
                size={15}
              />
            </View>
            <Text style={styles.homeListGame}>Lotomania</Text>
          </View>
        </ScrollView>
        <View style={styles.drawerCartTotalBottom}>
          <Text style={styles.drawerCartTotalText}>
            <Text style={styles.drawerCartTotalTextBoldCart}>cart</Text> total:{' '}
          </Text>
          <Text style={styles.drawerCartTotalTextBoldCartPrice}>r$ 7,50</Text>
        </View>
        <View style={styles.drawerBottomSaveContainer}>
          <Text style={styles.drawerBottomSave}>Save</Text>
          <Ionicons
            style={styles.drawerBottomSaveArrow}
            color={greenYellow}
            name='arrow-forward-outline'
            size={35}
          />
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
