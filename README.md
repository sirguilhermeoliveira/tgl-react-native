# Content

#TGL frontend in React Native

#Non-Functional Requirements

     RNF01. Follow the prototype

     RNF02. Use EXPO to create the application

     RNF03. Use Typescript

#Functional Requirements

     RF01. Validate the email at registration, login and reset password

     RF02. Authentication

     RF03. Complete Game: to randomly complete the numbers

     RF04. Clear game: clear all selected numbers

     RF05. Add to cart: add numbers to cart

     RF06. Delete: delete an item from the cart

     RF07. Save: add games on redux (above R$ 30.00)

     RF08. List the games after registered

     RF09. Create filter for listing and creating games.

     RF10. Integrate the application with the API developed in the Adonis module!

# 📋 Requirements for running project without Docker

Node 14.18.0+

Clone the repository

In terminal use: yarn && yarn start

# ✔️ Running with Docker

Install docker

docker build -t tgl-react-native

docker run -p 3000:19000 -d tgl-react-native

docker-compose up -d

After that process you can use only "docker-compose up" to open the project.
