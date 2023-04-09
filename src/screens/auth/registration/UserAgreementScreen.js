import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import getAgreement from '../../../utils/getAgreement';
import RenderHtml from 'react-native-render-html';
import {ScrollView} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import LineIcon from '../../../assets/svg/Rectangle 3472.svg';
import CheckBox from '../../../components/registration/CheckBox';
import BaseButton from '../../../components/BaseButton';
import {useNavigation} from '@react-navigation/native';
import {setStep} from '../../../redux/reducers/steps/steps.actions';
import {selectAuth} from '../../../redux/reducers/auth/auth.selector';
import refreshTokenRequest from '../../../utils/refreshTokenRequest';
import {updateToken} from '../../../redux/reducers/auth/auth.actions';

export default function UserAgreementScreen({route}) {
  const [userAgreement, setUserAgreement] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [userAgreementChecked, setUserAgreementChecked] = useState(false);
  const [comerceAgreementChecked, setComerceAgreementChecked] = useState(false);
  const {accessToken, refreshToken} = useSelector(selectAuth);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserAgreement = async () => {
      try {
        const agreement = await getAgreement(accessToken);
        let htmlString = agreement.data.content;
        let plainText = htmlString.replace(/['"]+/g, '');
        setUserAgreement({html: plainText});
      } catch (error) {}
    };
    getUserAgreement();
  }, []);
  useEffect(() => {
    dispatch(setStep(4));
  }, []);

  const handleUserAgreementConfirm = async () => {
    const resp = await refreshTokenRequest(refreshToken);
    console.log(resp.data);
    dispatch(updateToken(accessToken, refreshToken));
    navigation.navigate('RegistrationScreen5');
  };
  return (
    <View style={styles.userAgreementScreen}>
      <Text style={styles.userTypeHeader}>რეგისტრაცია</Text>
      <Text style={styles.userTypeText}>პირობები</Text>
      <View style={styles.policyBox}>
        <ScrollView style={styles.scrollBox}>
          <RenderHtml contentWidth={100} source={userAgreement} />
          {/* <Text>
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkjasdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
            asdhadadkadahsfajfkjasfjkajkfakjfjkskfaksfkakfjjkafkj
          </Text> */}
        </ScrollView>
      </View>
      <View style={styles.agreement}>
        <CheckBox
          isChecked={userAgreementChecked}
          setIsChecked={setUserAgreementChecked}
        />
        <Text style={styles.agreementText}>
          ვადასტურებ, რომ გავეცანი და ვეთანხმები წესებს და პირობებს
        </Text>
      </View>
      <View style={styles.agreement}>
        <CheckBox
          isChecked={comerceAgreementChecked}
          setIsChecked={setComerceAgreementChecked}
        />
        <Text style={styles.agreementText}>
          ვადასტურებ, რომ გავეცანი და ვეთანხმები{' '}
          <Text
            onPress={() => setModalVisible(true)}
            style={{color: 'rgba(0, 118, 255, 1)'}}>
            სარეკლამო პირობებს{' '}
          </Text>
          (არასავალდებულო)
        </Text>
      </View>
      <Modal
        isVisible={modalVisible}
        hasBackdrop={true}
        backdropOpacity={0.3}
        swipeDirection="down"
        onBackdropPress={() => setModalVisible(false)}
        style={styles.modal}>
        <View style={styles.modalView}>
          <LineIcon width={51} height={5} style={styles.closingLine} />
          <Text>hae haeeee</Text>
        </View>
      </Modal>
      <BaseButton
        isDisabled={!userAgreementChecked || !comerceAgreementChecked}
        onPress={handleUserAgreementConfirm}>
        ავტორიზაცია
      </BaseButton>
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
  policyBox: {
    marginTop: 22,
    width: 345,
    height: 349,
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 15,
  },
  modal: {
    margin: 0,
    height: 400,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  modalView: {
    height: '85%',
    alignSelf: 'flex-start',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    position: 'relative',
    alignItems: 'center',
  },
  closingLine: {
    position: 'absolute',
    marginTop: -12,
  },
  agreement: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: 325,
  },
  agreementText: {
    marginLeft: 12,
    width: 295,
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
  },
});
