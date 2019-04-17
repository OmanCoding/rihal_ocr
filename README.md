# rihal OCR
demo https://omancoding.github.io/rihal_ocr/ (works in Chrome, Firefox)
<img width="982" alt="Screen Shot 2019-04-17 at 5 28 45 PM" src="https://user-images.githubusercontent.com/38236933/56291581-922c0f00-6136-11e9-99be-12f808fac5c6.png">

The tester can upload an image by drag and drop, the javascript will upload it to an endpoint which will return a text. The text is then fed to a function which will mainly use regex to create the rules that satisfies the specifications required. It will consult other services for certain information. For example, how does a word that start with capital letter will be identified  as a city or a name or a landmark? Thus the usage of endpoints that query databases, which can be built by time.
