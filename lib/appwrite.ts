import 'react-native-url-polyfill/auto';
import { Client, Account, Avatars } from 'react-native-appwrite';

export const client = new Client()
  .setEndpoint('https://fra.cloud.appwrite.io/v1')
  .setProject('6a86c5f9001041219326')
  .setPlatform('com.native.ninja');


export const account = new Account(client);

export const avatars = new Avatars(client);