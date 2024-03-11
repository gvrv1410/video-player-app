import React from 'react';
import {StyleSheet, View} from 'react-native';
import VideoPlayer from 'react-native-video-player';
import {SafeAreaView, Text} from '@gluestack-ui/themed';
import {useNavigation, useRoute} from '@react-navigation/native';
import {height, width} from '../../../utils/permission';
import colors from '../../../utils/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const VideoPreviewScreen = () => {
  const route: any = useRoute();
  const navigation = useNavigation();
  const uri = route?.params?.item?.path;

  return (
    <SafeAreaView style={styles.container}>
      {uri ? (
        <View style={{marginBottom: 10}}>
          <VideoPlayer
            autoplay
            endWithThumbnail
            video={{uri: uri}}
            videoWidth={width}
            thumbnail={{uri: uri}}
            videoHeight={height - 60}
          />
          <AntDesign
            size={30}
            name="back"
            onPress={navigation.goBack}
            style={styles.backButtonStyle}
          />
        </View>
      ) : (
        <Text>No Video Found</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backButtonStyle: {
    margin: 10,
    position: 'absolute',
    padding: 10,
    borderRadius: 25,
    borderStartColor: colors.white,
    borderWidth: 0.1,
  },
});

export default VideoPreviewScreen;
