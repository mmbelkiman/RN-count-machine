cd ..

react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

cd android

./gradlew assembleDebug

cd app
cd src
cd main
cd res

rm -r drawable-hdpi
rm -r drawable-mdpi
rm -r drawable-xhdpi
rm -r drawable-xxhdpi
rm -r drawable-xxxhdpi
rm -r raw
