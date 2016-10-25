About
-----

joggr.io is an application that tracks jogging times of users.

Features:
 - Create an account or log in with existing Google account 
 - When logged in, user can see, edit and delete his times he entered
 - Implement at least three roles with different permission levels: 
     - a regular user would only be able to CRUD on their owned records
     - a user manager would be able to CRUD users
     - an admin would be able to CRUD all records and users.
- Each time entry when entered has a date, distance, and time
- When displayed, each time entry has an average speed
- Filter by dates from-to
- Report on average speed & distance per week
- REST API. 
  - possible to perform all user actions via the API, including authentication.
  -  In any case you should be able to explain how a REST API works and demonstrate that by creating functional tests that use the REST Layer directly. Please be prepared to use REST clients like Postman, cURL, etc for this purpose.
All actions need to be done client side using AJAX, refreshing the page is not acceptable. (If a mobile app, disregard this)
Bonus: unit and e2e tests!
You will not be marked on graphic design, however, do try to keep it as tidy as possible.

Non features:
-------------

- [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) support.

Developer Notes
===============

Front End
---------

Back End
--------

The back-end is a [spring boot](https://spring.io/guides/gs/spring-boot/) application
using _RestControllers_. 

The persistence is dealt with using [spring-data](http://projects.spring.io/spring-data/).
This assures that the underlying data store can be easily changed going forward. 
The overall goal is to keep the application as independent as possible from the actual data store and access technology. 
This will assure us flexibility to pick the best solutions going forward as the project grows.
In addition [spring-data-rest](http://projects.spring.io/spring-data-rest/) provides implementations for CRUD APIs,
allowing us to show an initial demo sooner, and save on development cost without adding technical debt. 

Resources
---------

- [JWT and Spring](https://www.toptal.com/java/rest-security-with-jwt-spring-security-and-java) on Toptal blog.

TODO
----

http://projects.spring.io/spring-security/#quick-start
https://docs.stormpath.com/java/spring-boot-web/
https://www.isostech.com/blogs/software-development/adding-google-authentication-spring-security-application/
