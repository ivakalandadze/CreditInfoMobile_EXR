import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {selectType} from '../../../redux/reducers/registration/registration.selector';
import getAgreement from '../../../utils/getAgreement';
import RenderHtml from 'react-native-render-html';

export default function UserAgreementScreen({route}) {
  const [userAgreement, setUserAgreement] = useState('');
  const {access_token} = route.params;
  useEffect(() => {
    const getUserAgreement = async () => {
      try {
        const agreement = await getAgreement(access_token);
        console.log(agreement.data);
        let htmlString = agreement.data.content;
        let plainText = htmlString.replace(/['"]+/g, '');
        console.log(plainText);
        setUserAgreement({html: plainText});
      } catch (error) {
        console.log('arali agreement');
      }
    };
    getUserAgreement();
  }, []);

  const snapPoints = ['25%', '50%'];

  return (
    <View style={styles.userAgreementScreen}>
      <Text style={styles.userTypeHeader}>რეგისტრაცია</Text>
      <Text style={styles.userTypeText}>პირობები</Text>
      <View style={styles.policyBox}>
        <RenderHtml contentWidth={100} source={userAgreement} />
      </View>
      <BottomSheet index={1} snapPoints={snapPoints}>
        <View>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  userAgreementScreen: {
    flex: 1,
    alignItems: 'center',
  },
  userTypeHeader: {
    marginTop: 41,
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 27,
    textTransform: 'uppercase',
  },
  userTypeText: {
    marginTop: 12,
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 16,
  },
});
