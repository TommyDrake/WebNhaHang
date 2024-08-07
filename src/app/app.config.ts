import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'vinhsangitss',
        appId: '1:442626014865:web:733880bba0b602cc9ac930',
        storageBucket: 'vinhsangitss.appspot.com',
        apiKey: 'AIzaSyBRs8P4gf3cIqxaE3CWp9P0kVqXH6z0rDI',
        authDomain: 'vinhsangitss.firebaseapp.com',
        messagingSenderId: '442626014865',
      }),
    ),
    provideAuth(() => getAuth()),
  ],
};
