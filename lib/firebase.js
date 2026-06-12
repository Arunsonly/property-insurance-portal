// lib/firebase.js

import { initializeApp, getApps } from "firebase/app";

import { getDatabase }
from "firebase/database";

import { getStorage }
from "firebase/storage";

const firebaseConfig = {
  apiKey:
    "AIzaSyADTll3S3ic8HwDx0t28d-Ubh1g7oZ3_uk",

  authDomain:
    "property-insurance-portal.firebaseapp.com",

  databaseURL:
    "https://property-insurance-portal-default-rtdb.firebaseio.com",

  projectId:
    "property-insurance-portal",

  storageBucket:
    "property-insurance-portal.firebasestorage.app",

  messagingSenderId:
    "1015891958307",

  appId:
    "1:1015891958307:web:6628255e07ddeaf481ef96",
};

const app =
  getApps().length === 0
    ? initializeApp(firebaseConfig)
    : getApps()[0];

export const database =
  getDatabase(app);

export const storage =
  getStorage(app);

export default app;
