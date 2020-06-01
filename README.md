# FrankUnderwood
An Mobile Web App that uses csv data to allocate supply prices based on neighborhood zip code to optimize buyer and seller experience, essentially prototyping the economic bundle of goods and producing a positive effect on GDP per capita. 

Install XCode:
- app store

Coocapods
- sudo gem install cocoapods

Be sure to delete react-native-cli if you have it globally
- npm uninstall react-native-cli

Initialize Native
- npx react-native init baskets
This will install the most recent stable version




npm install:
- react-native
- react-native-cli
- react-csv-parse


- node
- watchman
- axios



Folder Structure:
- baskets : the react native director
- BasketPots : IOS XCode Simulator

Running IOS 13.4 Simulator

Concurrently Run:
In baskets folder:
- npx react-native start
- npx react-native run-ios

Why react-native-cli over Expo-cli:
- more control over builds
- smaller bundle size
- able to alter native modules



