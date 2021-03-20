# locally-hifi

## building app

```
npx react-native run-android
```

## debug

open `http://localhost:8081/debugger-ui/` in chrome

## fake data generator format

```
[
  '{{repeat(5, 7)}}',
  {
    _id: '{{objectId()}}',
    company: '{{company()}}',
    rating: '{{floating(2, 5)}}',
    numRatings: '{{integer(100,1000)}}',
    friendsWhoTrust: '{{integer(10, 100)}}',
    img: 'http://placehold.it/32x32',
    phone: '+1 {{phone()}}',
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    values: [
      '{{repeat(7)}}',
      '{{lorem(1, "words")}}'
    ],
  }
]
```

## generate apk

`https://medium.com/@hasangi/making-a-signed-apk-for-your-react-native-application-98e8529678db`

create a private signing key

```
"C:\Program Files\Java\jdk1.8.0_191\bin\keytool.exe" -genkey -v -keystore your_key_name.keystore -alias your_key_alias -keyalg RSA -keysize 2048 -validity 10000
```

Next, place the created keystore file under the `android/app directory` in your react native project folder.

Add the following lines to `android\app\build.gradle`

```
android {
...
signingConfigs {
    release {
        if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
            storeFile file(MYAPP_RELEASE_STORE_FILE)
            storePassword MYAPP_RELEASE_STORE_PASSWORD
            keyAlias MYAPP_RELEASE_KEY_ALIAS
            keyPassword MYAPP_RELEASE_KEY_PASSWORD
        }
    }
}
buildTypes {
    release {
        ......
        signingConfig signingConfigs.release
    }
}
...
}
```

Add the following lines to gradle.properties

```
MYAPP_RELEASE_STORE_FILE=my-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=******
MYAPP_RELEASE_KEY_PASSWORD=*******
```

Go to android directory

```
cd android
```

run

```
.\gradlew assembleRelease
```

Finished! apk located at

```
android/app/build/outputs/apk/app-release.apk
```
