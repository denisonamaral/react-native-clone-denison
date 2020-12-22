import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import CouponBadge from './badge/CouponBadge';
import dataBadge from './badge/dataBadge';

function Coupon(props) {
  return (
    <View style={style.Coupon}>
      <View style={style.CouponBox}>
        <Image
          style={style.CouponLogo}
          source={{
            uri: `${props.logoImg}`,
          }}
        />
        <View style={style.CouponContent}>
          <Text style={style.Title}>{props.title}</Text>
          <Text style={style.SecondTitle}>{props.titleSecond}</Text>
          <Text style={style.ThirdTitle}>{props.titleThird}</Text>
          <View style={style.Badges}>
            <CouponBadge name={props.badge} />
          </View>
        </View>
      </View>
    </View>
  );
}
const style = {
  Coupon: {
    marginTop: 11,
    marginLeft: 9,
    width: 300,
    height: 100,
    borderRadius: 3,
    overflow: 'hidden',
    borderWidth: 0.1,
    borderStyle: 'solid',
    borderColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  CouponContent: {
    marginLeft: 12,
  },
  CouponBox: {
    marginTop: 12,
    flexDirection: 'row',
    marginRight: 20,
    marginLeft: 12,
  },
  CouponLogo: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  Title: {
    width: 180,
    color: 'white',
    fontSize: 13,
    display: 'flex',
    flexWrap: 'wrap',
  },
  SecondTitle: {
    color: 'rgb(131, 131, 131)',
    fontSize: 12,
  },
  ThirdTitle: {
    color: 'rgb(131, 131, 131)',
    fontSize: 9,
  },
  Badges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
};
export default Coupon;
