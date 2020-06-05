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

- node
- watchman

- react-csv-parse
- csvtojson
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

Data:
- Data is read from csv file uploaded daily for prices, inventory stock
- data.csv
- specials.csv : contains items out of stock or discounted

Design:

- since the data is updated frequenty like prices/zipcode, we value consistency and atomicity, so we are going to use SQl over noSQL,
- postgreSQL is how we stored data and make updated on a fetch using axios and creating relevant api, 
- updated csv files will update server and props passed to client and the availability of the items based on the zipcode entered by the user

- on a purchase by the client, database is updated
- we can cache a client's current basket stock before they hit the pay button, and later add analytics



Querying:

getAll

query {
  items {
    id
    name
  }
}

getById

query{
  item(id: "1") {
    id
    text
  }
}
