# react-native-simple-portal

React native simple portal.

Teleport your components to other dimensions 👽

## Installation

```sh
 npm i @os2mem/react-native-portal
```

## Usage

To begin with, add a Host component where you want to place a container for teleport the components inside and asign an unique hostId

```js
import { Host } from 'react-native-simple-portal';

// ...

const Screen = () => {
  return (
    <View>
      ....
      <Host hostId="unique-host-id" />
      ....
    </View>
  );
};
```

Lastly wrap the content that you want to teleport with a Portal.
The hostId has to be the same that you definee in the Host Component

```js
import { Portal } from 'react-native-simple-portal';

// ...

const OtherScreen = () => {
  return (
    <View>
      ...
      <Portal hostId="unique-host-id">
        <Text>I'am rendering in other component</Text>
      </Portal>
      ...
    </View>
  );
};
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License
