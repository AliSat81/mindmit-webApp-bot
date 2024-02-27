import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.tsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {Telegram} from "@twa-dev/types";
import {EncryptionManagerProvider} from "./managers/encryption.tsx";

// TODO : Lazy Load []




import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import {StorageManagerProvider} from "./managers/storage.tsx";

import "./global.css";
import {SettingsManagerProvider} from "./managers/settings.tsx";
// import PasswordSetup from "./pages/PasswordSetup.tsx";

declare global {
    interface Window {
        Telegram: Telegram;
    }
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
        <Route path="/login" element={<Root />}></Route>
            {/* <Route path="settings" element={<Settings />} /> */}
            {/* <Route path="changePassword" element={<PasswordSetup change/>} /> */}
        </Route>
    ),
    {
        basename: import.meta.env.BASE_URL,
    },
);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <SettingsManagerProvider>
          <EncryptionManagerProvider>
              <StorageManagerProvider>
                  <RouterProvider router={router}/>
              </StorageManagerProvider>
          </EncryptionManagerProvider>
      </SettingsManagerProvider>
  </React.StrictMode>,
)
