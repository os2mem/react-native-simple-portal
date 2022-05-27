import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import { Portal, Host } from 'react-native-simple-portals';

const HostLocation = () => {
  return (
    <View style={[styles.box, styles.hostLocationContainer]}>
      <Text style={[styles.title]}>Host Location</Text>
      <View style={[styles.hostPortalContainer]}>
        <Host hostId="host-location" />
      </View>
    </View>
  );
};

const PortalLocation = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <View style={[styles.box, styles.portalContainer]}>
      <Text style={[styles.title]}>Portal Location</Text>
      <Portal hostId="host-location">
        <Text style={[styles.text]}>I'am rendering in other location</Text>
        <Button
          onPress={() => setCounter((prev) => prev + 1)}
          title="Press Counter"
        />
        <Text>Press counter {counter} times </Text>
      </Portal>
    </View>
  );
};

export default function App() {
  const [active, setActive] = React.useState(true);

  const togglePortal = React.useCallback(() => setActive((prev) => !prev), []);

  return (
    <View style={[styles.appContainer]}>
      <View style={styles.container}>
        <HostLocation />
        {active && <PortalLocation />}
      </View>
      <Button
        title={`${active ? 'Unmount' : 'Mount'} Portal`}
        onPress={togglePortal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
  },
  box: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  hostLocationContainer: {
    backgroundColor: '#6495ed',
  },
  portalContainer: {
    backgroundColor: '#dc143c',
  },
  hostPortalContainer: {
    padding: 8,
    backgroundColor: 'white',
    marginVertical: 16,
    borderRadius: 8,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
});
