# Candys App
Image detection mobile app for Candies. The long term goal of the app is to become the 1st guide for good candies around the world.

## Why?

For the love of learning a new "language" (React Native) by building my 1st mobile application. The reason for choosing this language is because of the possibility to share code between the 2 biggest OS's for mobile phones, Android and iOS, and I would love to integrate with this app with a sort of a image analyzer module powered by an AI.
Also, to help identify _good_ candies and keep people safe.

## How to Contribute?

If you are coding in React Native for the 1st time (like I am), be aware that the environment setup requires installing several extra tools (like Android Studio or XCode if you are on Mac OS), so please read carefully through the Environment Setup section.
If this is not your first time developing on React Native and you have already a working environment for this, jump to the **Steps to run locally**

### Environment Setup

[This](https://reactnative.dev/docs/0.71/environment-setup) is the link to the official guide from React Native team, for version 0.71.8.
I am using Mac OS system and targetting to build for iOS, see the [Tech Stack](#tech-stack) section for the tools and its versions. I am **not using Expo** because I feel that the integration with an AI image analyzer _might_ require custom code Android or iOS.

Once you have the sample app up and running, scroll down to the [Steps to run locally](#steps-to-run-locally) section

### Tech Stack

* React Native 0.71.8
* Ruby 2.7.6 using Ruby RVM
* Node 18.12.1
* XCode

### Steps to run locally

1. Clone this repo
2. Install dependencies - the project uses `yarn`
3. `yarn start` - this will start Metro
4. Choose the platform you want to build for

### Goals - Roadmap

- [x] Initial setup (repo, app working in emulator, basic coding rules)
- [ ] Basic UI with 3 sections - (In Progress)
  - [ ] About
  - [ ] Candies List and Details - mock
  - [ ] Camera usage for AI Image Analyzer module
- [ ] Research and integrate an AI Image Analyzer

## License

This App has MIT License, following React Native License [here](https://github.com/facebook/react-native#-license)
