import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';

const App = () => {
  const url =
    'https://raw.githubusercontent.com/microsoft/tsiclient/master/package-lock.json';
  const [totalBytes, setTotalBytes] = useState(0);
  useEffect(() => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => blob.size)
      .then(bytes => {
        setTotalBytes(totalBytes + bytes);
      });
  });
  const totalBytesString = `${Math.round(totalBytes / (1024 * 1024))} MiB`;
  return (
    <SafeAreaView>
      <Text>{totalBytesString}</Text>
    </SafeAreaView>
  );
};

export default App;
