import React from 'react'
import { Text, TouchableNativeFeedback, View, Image, StyleSheet } from 'react-native'
import { RectButton, Swipeable } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import styles from './styles'


const style = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 100,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,

  },
});

const rippleEffect = TouchableNativeFeedback.Ripple(null, false)

const MetodoPagoItem = ({ metodoPago, onDelete, onPress }) => {
  const SwipeAction = () => (
    <RectButton style={styles.action} onPress={onDelete}>
      <Feather name="trash-2" size={26} color="white" />
      <Text style={styles.actionText}>Eliminar</Text>
    </RectButton>
  )

  return (
    <Swipeable
      friction={2}
      overshootLeft={false}
      overshootRight={false}
      renderLeftActions={SwipeAction}
      renderRightActions={SwipeAction}
    >
      <TouchableNativeFeedback onPress={onPress} background={rippleEffect}>
        <View style={styles.itemWrapper}>
          {/* <Image
            style={style.logo}
            source={{
              uri: metodoPago.img
            }}
          /> */}
          <Text style={styles.itemTitle}>{metodoPago.title}</Text>
          <Text style={styles.itemDate}>
            Editado en la fecha {metodoPago.modifiedAt.getDate()}/{metodoPago.modifiedAt.getMonth() + 1}/{metodoPago.modifiedAt.getFullYear()}  Hora: {metodoPago.modifiedAt.getHours()}:{metodoPago.modifiedAt.getMinutes()}
          </Text>
        </View>

      </TouchableNativeFeedback>
    </Swipeable>
  )
}

export default MetodoPagoItem
