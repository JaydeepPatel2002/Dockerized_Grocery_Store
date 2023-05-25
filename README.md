                    Mission Statement:

• Daft Goods is a grocery store looking for to rebuild their entire e-commerce platform using 
Docker and Docker Compose. They’ve hired you to complete this work.

• You must produce an e-commerce website for Daft Goods that meets the following criteria:

◦ A dockerized instance of a database of your choice

◦ A dockerized instance of a web-application that you will build over the next few weeks

• This should include basic user authentication, the ability to create items, update items, and 
“buy” items (buying should basically delete the item)

• To receive marks for your work you MUST have a Dockerfile for your own code, and a 
docker-compose.yml file for your other services (database, etc).


API Specifications:
Your application must have the following end-points (taking and returning only JSON):
• GET /items – Should list all items for sale
• POST /items – Should add a new item to the database
• DELETE /items/:id – Should delete an item at a given id
• POST /login – Should log the user in
• GET /user – Should return the logged in user

Recommended Stacks:

The following are technology stacks that I have experience with so I can provide the best support for 
you. If you decide to use technology not listed here that is okay too!

Ruby on Rails (Ruby), PostgreSQL
Laravel (PHP), MySQL


Express.js (JavaScript), MongoDB  : <- I am Using this*******************


Play Framework (Scala), PostgreSQL
Spring Boot (Java), PostgreSQL
Django (Python), PostgreSQL
Dotnet (C#), PostgreSQL


Help + Support

I’ll be able to help teams with Docker configurations and with general things. It is important though 
that this still be treated as a team or individual project.

Benchmarking:

After the project is finished, on the last day of class we will have a performance benchmark-off. This 
will involve deploying your applications to a real web-server and seeing how they perform under 
various load conditions, etc
