# Microfrontend

Testing microfrontend solutions

---

### Current tests
- ejs templating: call fragments on the backend and inject then in ejs templates
- tailor: [https://github.com/zalando/tailor](https://github.com/zalando/tailor)

to switch between solution change the `app build` in docker-compose to point to the correct directory

### Notes

- Using a fork of next.js which allows to modify the the id of the root element [https://github.com/alexsyo/next.js](https://github.com/alexsyo/next.js)
- Investigating on problems related to next.js, there seems to be issues with loading multiple javascript

---

### Run

```
  docker-compose up
```