import * as React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import Icon from 'react-native-vector-icons/Feather';

import theme from './../theme.style';

export default function CardTier({tier = 'bronze', tierProgress = 0.1}) {
  const [progressWidth, setProgressWidth] = useState(0);
  return (
    <View style={styles.container}>
      <View
        style={styles.textContainer}
        onLayout={(event) => {
          let {width} = event.nativeEvent.layout;
          // subtract horizontal padding
          setProgressWidth(width - 2 * theme.SPACING_SMALL);
        }}>
        {/* <View styles={styles.textContainer}> */}
        <Icon
          size={theme.FONT_SIZE_SMALL}
          color={theme[tier.toUpperCase()]}
          name="award"
        />
        <Text
          style={[
            styles.text,
            {color: theme[tier.toUpperCase()]},
          ]}>{`${tier} - ${tierProgress * 100}%`}</Text>
        {/* </View> */}
      </View>
      <ProgressBar
        styleAttr="Horizontal"
        indeterminate={false}
        progress={tierProgress}
        color={theme[tier.toUpperCase()]}
        style={{width: progressWidth}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'flex-start',

    marginVertical: theme.SPACING_SMALL,
    padding: theme.SPACING_SMALL,

    // for now hardcode bronze background
    backgroundColor: '#6A38050A',
  },
  textContainer: {
    // flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',

    borderRadius: 5,
  },
  text: {
    fontFamily: 'Lato',
    fontSize: theme.FONT_SIZE_SMALL,
    marginLeft: theme.SPACING_SMALL,
  },
});
