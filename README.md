# Redux Toolkit Cart (React.js - Redux Toolkit)

> This web application is a very simple imitation of an online shopping cart. The user can select books from the dummy data list, put them in the cart and change the quantity of the selected items. All cart data connected to Firebase via http requests.

## The goals of creating this application:

The main goals for me as a web developer were to improve my skills in working with:

- implementing asynchronous http requests (fetching and posting cart data) using Redux Toolkit and action creator thunks;
- the React-Redux hooks: useDispatch(), useSelector();
- the React hooks: useEffect();
- creating custom reusable components (e.g. Notification.js, Card,js);
- the React props (data transfer from parents to children);
- JavaScript logic and methods (filter(), find(), map(), fetch(), async-await, try-catch, json(), JSON.stringify(), etc);
- CSS modules;

## To start the app on your machine:

1. Clone the project to your machine by running:

```
git clone https://github.com/SharinLana/react-redux-httpRequests.git
```

2. To install the project dependencies, run:

```
npm install
```

3. When the installation is complete, run the following command to start the app:

```
npm start
```

## Languages, frameworks, libraries, packages, tools and technologies:

- React.js
- Redux Toolkit
- React Redux
- JavaScript
- CSS modules
- Firebase

## Functionalities:

- fetching the cart data from Firebase Realtime Database asynchronously on the first load of the page and displaying it in the cart component;
- informing users about http request status dynamically;
- adding selected products (books) to the cart;
- dynamic display of the number of selected items in the cart;
- dynamic change in the cost of the order as some items are added or removed from the cart;
- adding and removing items directly in the cart;
- sending the cart data (book titles, quantity, price) to Firebase and store it there ('PUT' method, which re-write the stored data each time when the cart states change);
- displaying components conditionally (e.g. hide/reveal the cart on a button click);
- responsive design (mobile adaptation);
