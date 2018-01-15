# Konwersacja

```js
let express = require('express');
let app = express();

... (app configuration, sessions, body parser, templating, etc.)

var bookCar = newConversation('/book-car')
    .step('pickup-location', (req, res, conversation) => { })
    .step('car-selection', (req, res, conversation) => { })
    .step('rent-date', (req, res, conversation) => { })
    .step('leaving-location', (req, res, conversation) => { })
    .step('accept', (req, res, conversation) => {
        // add new booking to session store
        req.session.bookings.push({
            car: conversation['car-selection'].car,
            pickup: conversation['pickup-location']['pickup-place'],
            from: conversation['rent-date'].from,
            to: conversation['rent-date'].to,
            leaving: conversation['leaving-location']['leaving-place']
        });
    });


bookCar.mount(app);
```

```
  Conversation
  - id
  - step
  - expirationTime
  - data
```

# ToDo:

1. Ekspirowanie konwersacji (proste)
2. Walidacja tokenu konwersacji (`conversationId`) (trudność z użyciem bazowej ścieżki routera)
3. Zapis i odczyt danych z ekranu kroku
4. Handler zakończenia obsługi konwersacji (kiedy wszystkie kroki konwersacji zostaną wykonane)
  - Usunięcie danych konwersacji
5. Autogenerowane menu do chodzenia po kolejnych ekranach konwersacji
