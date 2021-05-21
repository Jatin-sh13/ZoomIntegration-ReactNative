import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import ZoomUs from 'react-native-zoom-us';
const App = () => {
  const [meetingid, setMeetingid] = useState('')
  const [password, setPassword] = useState('')
  const ZoomInit = async () => {
    const a = await ZoomUs.initialize({
      clientKey: '', //Enter client id here.
      clientSecret: '', // Enter client secret here.
      domain: 'zoom.us'
    }, {
      disableShowVideoPreviewWhenJoinMeeting: true
    })
    console.log(a)
  }
  const JoinMeeting = async () => {
    ZoomInit()
    if (meetingid === "" && password === "") {
      alert("Please Enter Input Fields")
    }
    else {
      try {
        console.log('start meeting')
        const b = await ZoomUs.joinMeeting({
          userName: '',
          meetingNumber: `${meetingid}`,
          password: `${password}`,
          participantID: 'our-unique-id',
          noAudio: true,
          noVideo: true,
        })
        console.log(b)
      } catch (err) {
        alert("Please check your details")
      }
    }
  }
  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter Meeting Id" style={styles.inputs} onChangeText={text => setMeetingid(text)} />
      <TextInput placeholder="Enter Password" style={styles.inputs} onChangeText={text => setPassword(text)} />
      <TouchableOpacity style={styles.btn} onPress={JoinMeeting}>
        <Text style={styles.btn_text}>Join Meeting</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputs: {
    marginBottom: 30,
    borderColor: 'black',
    color: '#2DCC30',
    fontWeight: '600',
    borderWidth: 0,
    borderRadius: 5,
    padding: 12,
    width: 320,
    fontSize: 20,
    shadowColor: 'black',
    shadowOpacity: 0.20,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 20,
    elevation: 10,
    backgroundColor: 'white',
    fontFamily: 'cochin'
  },
  btn: {
    backgroundColor: 'blue',
    width: 300,
    padding: 10
  },
  btn_text: {
    textAlign: 'center',
    color: 'white'
  }
})
export default App
