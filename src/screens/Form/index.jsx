import React, { useContext, useEffect, useRef, useState } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { ProductosContext } from '../../contexts'
import TextInput from './TextInput'
import styles from './styles'

const Form = () => {
  const bodyTextInput = useRef()
  const productoId = useRoute().params
  const { goBack } = useNavigation()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const { productos, createProducto, updateProducto } = useContext(ProductosContext)
  const [img, setImg] = useState('')

  const handleSaveProducto = () => {
    const producto = { id: productoId, title, body, img }

    if (productoId) {
      updateProducto(producto)
    } else {
      createProducto(producto)
    }
    goBack()
  }

  useEffect(() => {
    if (productoId) {
      const { body, title } = productos.find(({ id }) => productoId === id) // eslint-disable-line no-shadow

      setTitle(title)
      setBody(body)
    }
  }, [productoId])

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
        placeholder="Nombre Del Producto"
        onSubmitEditing={() => bodyTextInput.current.focus()}
        onChangeText={setTitle}
        value={title}
        autoFocus={!productoId}
        blurOnSubmit={false}
      />
      <View style={styles.separator} />
      <ScrollView style={styles.bodyContainer}>
        <TextInput
          size={20}
          ref={bodyTextInput}
          placeholder="Descripción Del Producto"
          onChangeText={setBody}
          value={body}
          multiline
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Form
