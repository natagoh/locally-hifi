# locally-hifi

npx react-native run-android
to debug, open `http://localhost:8081/debugger-ui/` in chrome

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
