import React, {useState} from 'react';

import {
  View,
  Linking,
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import {SafeAreaView, Text} from '@gluestack-ui/themed';

import {
  height,
  requestStoragePermission,
  width,
} from '../../../utils/permission';
import {addVideo, deleteVideo} from '../../../redux/actions/videoActions';
import colors from '../../../utils/colors';
import {ScreenName} from '../../../utils/screenConstants';
import {TouchableOpacity} from 'react-native';
import DeleteIcon from '../../../assets/svg/DeleteIcon';
import {Divider} from '../../../components';
import PlayIcon from '../../../assets/svg/PlayIcon';
import {icons} from '../../../utils/icons';
import {generateRandomString} from '../../../utils/string';

const VideoListScreen = () => {
  const dispatch: any = useDispatch();
  const videoListData: any = useSelector(
    (state: any) => state.video.videoListData,
  );
  const navigation: any = useNavigation();

  const onAddVideoPress = async () => {
    try {
      const granted = await requestStoragePermission();
      if (granted) {
        ImagePicker.openPicker({
          mediaType: 'video',
        })
          .then(res => {
            dispatch(
              addVideo([
                ...videoListData,
                {...res, id: generateRandomString(6)},
              ]),
            );
          })
          .catch(err => {
            return err;
          });
      } else {
        openAppSettings();
      }
    } catch (err) {
      return err;
    }
  };

  const openAppSettings = () => {
    if (Platform.OS === 'android') {
      Linking.openSettings();
    }
  };

  const deleteVideoFromList = (selectedVideId: string) => {
    const videos = videoListData.filter(
      (video: any) => video?.id !== selectedVideId,
    );
    dispatch(deleteVideo(videos));
  };

  const onPressVideo = (item: any) => {
    navigation.navigate(ScreenName.VIDEO_PREVIEW, {
      item: item,
    });
  };

  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <View key={index} style={styles.renderViewStyle}>
        <ImageBackground
          resizeMode="cover"
          alt={'Thumbnail Image Loading...'}
          style={styles.renderThumbnail}
          source={{uri: item?.path}}>
          <PlayIcon height={45} width={45} onPress={() => onPressVideo(item)} />
        </ImageBackground>
        <TouchableOpacity
          style={styles.deleteViewStyle}
          onPress={() => deleteVideoFromList(item?.id)}>
          <DeleteIcon
            height={12}
            width={12}
            color={colors.red}
            style={styles.deleteIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
      <View style={[styles.container, {marginTop: 15}]}>
        {videoListData?.length ? (
          <FlatList
            numColumns={2}
            data={videoListData}
            renderItem={renderItem}
            ListHeaderComponent={Divider}
            ListFooterComponent={Divider}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={Divider}
            columnWrapperStyle={styles.columnStyle}
          />
        ) : (
          <View style={styles.subContainerView}>
            <Text style={styles.noVideoData}>{'No Video available.'}</Text>
          </View>
        )}
        <SafeAreaView style={styles.subContainerView}>
          <TouchableOpacity
            style={styles.addVideoIcon}
            onPress={onAddVideoPress}>
            <Image source={icons.ic_addVideo} style={{height: 40, width: 40}} />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subContainerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  columnStyle: {
    marginHorizontal: 12,
    justifyContent: 'space-between',
  },
  noVideoData: {
    opacity: 0.6,
    color: colors.black,
  },
  renderViewStyle: {
    flex: 1,
    maxWidth: width / 2 - 16,
    height: width / 3,
  },
  renderThumbnail: {
    flex: 1,
    maxHeight: '100%',
    maxWidth: '100%',
    borderColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  deleteIcon: {
    position: 'absolute',
  },
  addVideoIcon: {
    bottom: 0,
    marginBottom: 10,
    position: 'absolute',
    backgroundColor: colors.white,
    shadowColor: colors.black,
    height: 80,
    width: 80,
    borderRadius: 150 / 2,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteViewStyle: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    backgroundColor: '#4e4e50',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: -5,
    top: -5,
  },
});

export default VideoListScreen;
