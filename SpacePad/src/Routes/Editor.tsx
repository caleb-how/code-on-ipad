import React from 'react';
import {View, Text, Card, Button, BaseInput} from 'react-native-ui-lib';
import {WebView} from 'react-native-webview';

export const Editor = () => {
  const [url, setUrl] = React.useState('');
  const [uiState, setUiState] = React.useState<'startup' | 'editing'>(
    'startup',
  );
  const onStart = () => {
    setUiState('editing');
  };
  if (uiState === 'startup') {
    return <StartEditor url={url} setUrl={setUrl} onStart={onStart} />;
  } else {
    return <WebView source={{uri: url}} />;
  }
};

export const StartEditor: React.FC<{
  url: string;
  setUrl: (e: string) => void;
  onStart: () => void;
}> = ({url, setUrl, onStart}) => {
  return (
    <View>
      <Card>
        <Text>Editor</Text>
        <BaseInput
          value={url}
          onChange={e => setUrl(e.nativeEvent.text)}
          placeholder="Type URL"
        />
        <Button label="Start" onPress={onStart} />
      </Card>
    </View>
  );
};
