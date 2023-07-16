import React from 'react';
import {View, Button} from 'react-native';

const Home = ({navigation}: any) => {
  const onButtonPress = () => {
    navigation.navigate('VideoCall');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title={'Lets,Make Video Call!!'} onPress={onButtonPress} />
    </View>
  );
};

export default Home;
