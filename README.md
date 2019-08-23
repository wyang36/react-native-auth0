# react-native-auth0

## Getting started

`$ npm install react-native-auth0 --save`

### Mostly automatic installation

`$ react-native link react-native-auth0`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-auth0` and add `Auth0.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libAuth0.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.auth0.react.Auth0Package;` to the imports at the top of the file
  - Add `new Auth0Package()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-auth0'
  	project(':react-native-auth0').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-auth0/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-auth0')
  	```


## Usage
```javascript
import Auth0 from 'react-native-auth0';

// TODO: What to do with the module?
Auth0;
```
