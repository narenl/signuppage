import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import COLORS from '../consts/color';
import STYLES from '../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SignUpScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.textView}>
          <Text style={styles.logoOne}>Y</Text>
          <Text style={[styles.logoOne, {color: COLORS.secondary}]}>HEKIM</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.welcome}>Welcome Back,</Text>
          <Text style={([styles.welcome], {color: COLORS.light})}>
            Sign up to Continue
          </Text>
        </View>
        <View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="person-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="Name" style={STYLES.input} />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="Email" style={STYLES.input} />
          </View>

          <View style={STYLES.inputContainer}>
            <Icon
              name="lock-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="Password" style={STYLES.input} />
          </View>
        </View>

        <View style={STYLES.btnPrimary}>
          <Text style={STYLES.buttonText}>Sign Up</Text>
        </View>

        <View style={styles.orline}>
          <View style={STYLES.line}></View>
          <Text style={{marginHorizontal: 5, fontWeight: 'bold'}}>OR</Text>
          <View style={STYLES.line}></View>
        </View>

        <View
          style={{
            marginHorizontal: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={STYLES.btnSecondary}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Sign up with</Text>
            <Image
              style={STYLES.btnImage}
              source={require('../assets/facebook.png')}
            />
          </View>
          <View style={{width: 10}}></View>
          <View style={STYLES.btnSecondary}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Sign up with</Text>
            <Image
              style={STYLES.btnImage}
              source={require('../assets/google.png')}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 5,
            marginBottom: 20,
          }}>
          <Text style={{color: COLORS.light, fontWeight: 'bold'}}>
            Already have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={{color: COLORS.pink, fontWeight: 'bold'}}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingHorizantal: 20,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  textView: {
    flexDirection: 'row',
    marginTop: 40,
    marginStart: 30,
  },
  logoOne: {
    lineHeight: 30,
    color: COLORS.dark,
    fontSize: 22,
    fontWeight: 'bold',
  },
  title: {
    marginTop: 40,
    marginStart: 30,
  },
  welcome: {
    fontSize: 27,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  orline: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 20,
  },
});

export default SignUpScreen;
