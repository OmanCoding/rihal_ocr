# rihal OCR
demo https://omancoding.github.io/rihal_ocr/ (works in Chrome and Safari)

<img width="982" alt="Screen Shot 2019-04-17 at 5 28 45 PM" src="https://user-images.githubusercontent.com/38236933/56291581-922c0f00-6136-11e9-99be-12f808fac5c6.png">

The tester can upload an image by drag and drop, the javascript will upload it to an endpoint which will return a text. The text is then fed to a function which will mainly use regex to create the rules that satisfies the specifications required. It will consult other services for certain information. For example, how does a word that start with capital letter will be identified  as a city or a name or a landmark? Thus the usage of endpoints that query databases, which can be built by time.


Test images

<img width="800" alt="Screen Shot 2019-04-17 at 6 00 11 PM" src="https://user-images.githubusercontent.com/38236933/56293762-ca355100-613a-11e9-8b29-059bf4105f8a.png">


<img width="743" alt="Screen Shot 2019-04-18 at 8 34 16 AM" src="https://user-images.githubusercontent.com/38236933/56337161-e249b680-61b4-11e9-815e-11127d2ae263.png">
