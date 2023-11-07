
# Optimized Settings for PC Games

Welcome to my project, where you can find the best settings for any game! Finding the right settings for your favorites games can be a daunting task, so I have created an interactive platform that will help you optimize your gaming experience. 

This project used data from [RAWG API](https://rawg.io/) to showcase the information in an easy-to-understand format. 

I have also included images and videos to each game for a better experience overhaul. This project is user-friendly and easy to navigate. 

I hope that my project will help you optimize your gaming experience and improve your performance in your favorite games. Don't hesitate to contact me if you have any questions or suggestions. 

Happy gaming!


## Features

- View the best settings for your games for a smooth experience
- Submit your settings
- Dark and light theme
- Cross platform

## Example

https://github.com/AbdourahmaneGadio/Optimized-settings-for-PC-Games/assets/91066652/59e4e414-4a93-4ec4-a4d5-b278f009b902

## Installation

### Web

Visit this website : [Optimized Settings for PC Games - Web version](https://abdourahmanegadio.github.io/Optimized-settings-for-PC-Games/)

### Mobile devices

You can install the latest version either by :

---

#### Android Only
- Downloading the apk from the releases: [Optimized Settings for PC Games with APK](https://github.com/AbdourahmaneGadio/Optimized-settings-for-PC-Games/releases/latest/download/optimized-settings-for-pc-games.apk)

#### Android and iOS

- Installing Expo go on your mobile, then go to this link : [Optimized Settings for PC Games - Expo Version](https://expo.dev/@guer7_jdhf/optimized-setttings-for-pc-games) and scan the QR Code

---

## Want to contribute ?

Either add your settings directly from the website (to be released...), or create a json file in the appropriate directory. 

It must start with the first letter of the game you want to add.

---
### Example: 

If you want to add the settings for Marvel's Spider-Man Miles Morales, you need to add them into the folder "M".

Then, your json file MUST be named as required by the naming convention (Enter your game's name here : [Name to slug converter](https://slugify.online/))

After you used this converter, "**Marvel's Spider-Man Miles Morales**" should become "**marvels-spider-man-miles-morales**".

So, your file MUST be named "**marvels-spider-man-miles-morales**.json".

Otherwise, your settings will not be recognized.

Then, write your settings in your json file like this template :

```json
{
  "Game": "Game's name",
  "Settings One": "What ever value",
  "Settings Two": "Another value",
  ...
}
```

With Marvel's Spider-Man Miles Morales, we have :

```json
{
  "Game": "Marvel's Spider-Man: Miles Morales",
  "Anti-Aliasing": "TAA or DLAA if you have a NVIDIA GPU",
  "Texture Filtering": "8x",
  "Shadow Quality": "Medium or High",
  "Ambient Occlusion": "SSAO",
  "Screen Space Reflection": "On",
  "RT Reflection": "High Resolution / High Geometry",
  "RT Shadows": "Off",
  "Level of Detail": "High",
  "Traffic Density": "Very low",
  "Crowd Density": "Very low",
  "Hair Quality": "Medium",
  "Weather Particle Quality": "Medium"
}
```

### Games with Remastered Version and/or DLC

If you see the same game with an other title because it contains DLCs, AND do not differ in settings (example: Marvel's Spider-Man and Marvel's Spider-Man Remastered), you need you create another json file who is named after the new game's version.

For this case, you will have two files : "**Marvel's Spider-Man**".json and "**Marvel's Spider-Man Remastered**".json, containing the exact settings.

In the case where the Remastered version and/or DLC need other settings because of the game's demands (example: **Cyberpunk 2077** and **Cyberpunk 2077: Phantom Liberty**), you need to enter for both of the json files their specific settings.

---

## Author

- [@AbdourahmaneGadio](https://github.com/AbdourahmaneGadio)


## License

RAWG SDK GO is released under the [MIT License](https://choosealicense.com/licenses/mit/).

