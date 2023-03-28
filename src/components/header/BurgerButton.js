import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Burger from '../../assets/svg/burger.svg';

const BURGER_BUTTON_WIDTH = 18;
const BURGER_BUTTON_HEIGHT = 8;

export default function BurgerButton() {
  return (
    <TouchableOpacity>
      <Burger width={BURGER_BUTTON_WIDTH} height={BURGER_BUTTON_HEIGHT} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
