# twitter-phishing

### Adding localhost.crt to Keychain Access on Mac
1. Open the Keychain Access application. You can find it by searching for "Keychain Access" in Spotlight or by navigating to /Applications/Utilities/Keychain Access.app.

2. In the Keychain Access application, select "System" from the "Keychains" list in the upper-left corner of the window.

3. Unlock the System keychain by clicking the padlock icon in the top-left corner of the window, and enter your admin password when prompted.

4. Drag and drop the localhost.crt file into the "Certificates" category in the "System" keychain.

5. Find the newly imported certificate (it should have a name like "localhost") and double-click it to open the certificate information window.

6. Expand the "Trust" section by clicking the disclosure triangle next to "Trust."

7. Change the "When using this certificate:" option to "Always Trust."

8. Close the certificate information window, and you will be prompted to enter your admin password again to save the changes.

9. Lock the System keychain again by clicking the padlock icon.