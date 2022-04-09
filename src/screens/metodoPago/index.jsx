import React, { useContext, useEffect, useRef, useState } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { metodosContext } from '../../contexts/metodos/index'
import TextInput from '../Form/TextInput/index'
import styles from './styles'

const Form = () => {
  const bodyTextInput = useRef()
  const metodoPagoId = useRoute().params
  const { goBack } = useNavigation()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const { metodos, createMetodoPago, updateMetodoPago } = useContext(metodosContext)
  const [img, setImg] = useState('')

  const handleSaveProducto = () => {
    const metodo = { id: metodoPagoId, title, body, img }

    if (metodoPagoId) {
      updateMetodoPago(metodo)
    } else {
      createMetodoPago(metodo)
    }
    goBack()
  }

  useEffect(() => {
    if (metodoPagoId) {
      const { body, title } = metodos.find(({ id }) => metodoPagoId === id) // eslint-disable-line no-shadow

      setTitle(title)
      setBody(body)
    }
  }, [metodoPagoId])

  return (
    <SafeAreaView style={styles.formScreen}>
      <If condition={title || body}>
        <RectButton style={styles.okButton} onPress={handleSaveProducto}>
          <Feather name="check" size={40} color="white" />
        </RectButton>
      </If>

      <BorderlessButton style={styles.cancelButton} onPress={goBack}>
        <Feather name="x" size={30} color="white" />
      </BorderlessButton>

      <TextInput
        size={32}
        placeholder="Nombre Del metodo"
        onSubmitEditing={() => bodyTextInput.current.focus()}
        onChangeText={setTitle}
        value={title}
        autoFocus={!metodoPagoId}
        blurOnSubmit={false}
      />
      <View style={styles.separator} />
      <ScrollView style={styles.bodyContainer}>
        <TextInput
          size={20}
          ref={bodyTextInput}
          placeholder="Descripción Del metodo"
          onChangeText={setBody}
          value={body}
          multiline
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Form
