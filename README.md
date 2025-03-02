🍓 Strawberry Skies Band Website 🍓

⭐ Created by: Skyler Futrell ⭐

📌 Project Overview: This project is an e-commerce website created for a hypothetical indie band called Strawberry Skies. The site showcases upcoming tour dates and an About page. The online store features music, merchandise, and an integrated Stripe payment system.

🚀 Features:

✅ Home Page: Introduction to the band and their latest album, with interactive buttons and media features.

✅ Store Page: Display of the band's merchandise, where visitors can view, add items to their cart, and proceed to checkout with Stripe integration.

✅ About Page: Information about the band, their music, and their journey.

✅ Tour Page: A list of the band's upcoming tour dates and locations with options to buy tickets or RSVP.

✅ Responsive Design: The website is fully responsive, ensuring it looks great on desktops, tablets, and mobile devices.

📁 Key Files:

1. server.js
   - The main server file for the Node.js application. It initializes the HTTP server, handles routing for the website’s pages, and manages the integration with Stripe for processing payments. 
     It includes routes for rendering the pages (home, store, about) and a Stripe checkout session for the store.
2. store.js
   - A separate JavaScript file that manages the store functionality. It handles actions related to adding items to the cart, calculating the total price, and submitting the order for payment processing via Stripe. It communicates with the server to create a checkout session.
3. store.ejs
   - The dynamic store page that displays products for sale. This EJS template receives data from the server (like product information) and renders it on the front-end. It also includes Stripe integration for handling payments using the Stripe.js library.
4. index.html, about.html
   - index.html: The homepage introducing the band and providing links to other pages.
   - about.html: The about page with a description of the band and their journey.
5. styles.css
   - The main CSS file for styling the website, ensuring it is visually appealing and responsive across devices. It defines the layout and appearance of the pages, including typography, colors, and spacing.
6. .env
   - This file contains sensitive environment variables, such as your Stripe public and secret API keys. Ensure this file is added to .gitignore to avoid exposing private keys to the public.
7. .gitignore
   - Ensures that sensitive files (like .env) and other unnecessary files (e.g., node_modules) are not pushed to the Git repository.

⚒️ Technologies Used:

✅ Node.js (HTTP Module): Used for creating the server and handling requests.

✅ Stripe API: Payment gateway for processing payments securely.

✅ CSS: Styling for a responsive and modern design.

✅ HTML5: Structure of the website’s content.

✅ JavaScript: For client-side functionality like cart management and payment processing.

✅ Git: Version control for managing code.

🏁 Getting Started:

Prerequisites:
- A modern web browser.
- Node.js: The runtime environment to run JavaScript on the server side. You can download it from here.
- npm: The Node.js package manager, which comes bundled with Node.js. It is used to install project dependencies.
- Stripe Account: You’ll need a Stripe account to manage payments. Sign up at Stripe.
- Git: A version control tool for managing your project code. You can download it from here.

Installation & Usage:

1. Clone the respository to your local machine:
   
       git clone https://github.com/your-username/your-repository-name.git
   
3. Navigate into the project directory:
   
       cd your-repository-name
   
5. Install the necessary dependencies:
   
       npm install
   
7. Set up your .env file with your Stripe keys (Stripe public and secret keys):
   
       STRIPE_PUBLIC_KEY=your-public-key
       STRIPE_SECRET_KEY=your-secret-key
   
9. Start the server:
    
       npm start
   
11. Visit http://localhost:3000 in your browser to see the application in action.

Development:
To run the development server with live reloading, you may need to use a tool like nodemon or restart the server manually.

      npm install -g nodemon
      nodemon server.js

Testing:
This project includes a simple frontend with interactive cart functionality and secure payment processing. You can test adding items to the cart and simulating a checkout process using Stripe’s test mode.
- Stripe Test Mode: Use Stripe’s test card numbers to simulate various payment scenarios. A list of test card numbers can be found in Stripe's documentation.

📝 What I Learned:

🧠 Node.js and Express: I learned how to set up a server using Node.js and Express, handling HTTP requests and responses effectively. This experience deepened my understanding of server-side JavaScript and API integration.

🧠 Stripe Integration: I successfully integrated Stripe for handling payments, learning how to create a payment flow, manage payment intents, and securely process credit card transactions.
    This involved working with Stripe's API to handle front-end and back-end interactions, such as creating payment intents and confirming payments.

🧠 EJS Templating: I used EJS to dynamically render data on the client side, such as displaying product details and cart contents. This approach enabled me to build an interactive and dynamic e-commerce experience while maintaining clean and readable code.

🧠 Building a Simple E-Commerce Website: I built a full-stack e-commerce website from scratch, featuring product listings, a shopping cart, and payment functionality.
    This process involved creating reusable components, managing state between client and server, and ensuring a seamless checkout experience for users.

🧠 Version Control with Git and GitHub: I worked with Git for version control, learning how to efficiently manage project versions, track changes, and collaborate through GitHub.
    This process taught me the importance of writing meaningful commit messages and maintaining a clean repository structure.

🧠 Handling Sensitive Data Securely: I learned the importance of securing sensitive information, such as API keys, by using environment variables and .env files. I also learned how to safely manage these files in a public repository using .gitignore.

🧠 Responsive Web Design: I gained experience with CSS and responsive design principles to ensure that the website looks great on various screen sizes and devices. This included implementing flexible layouts and ensuring smooth user interactions.

🧠 Debugging and Error Handling: I improved my debugging skills by resolving issues during development, particularly related to payment processing, ensuring that error messages are clear and providing feedback to users when necessary.

🧠 Creating and Managing RESTful Routes: I deepened my undestanding of how to structure RESTful routes for handling various functionalities, such as adding items to the cart, creating payment intents, and completing purchases.

🧠 Building a Full-Stack Web Application: This project was a great exercise in building a complete full-stack web application, where I applied both front-end and back-end skills to create a working product.

🎯 Future Improvements:

As Stripe and web development continue to evolve, there are several improvements and updates that can be made to keep the project aligned with the latest standards and best practices.

Some of these potential improvements include:

1. Updating to the Latest Stripe API Version: The Stripe API is frequently updated, and it's important to keep the integration up-to-date to ensure compatibility with new features and security improvements.
   In 2025, Stripe may introduce new payment methods, features, or deprecate older ones. The integration should be updated to use the latest API version and take advantage of any new tools or services Stripe offers.
   
2. Using Stripe Elements for a Seamless Checkout Experience: While the current implementation uses a basic method for handling card payments, a more polished approach would involve using Stripe Elements for building custom payment forms.
   This provides better flexibility, security, and an improved user experience. Stripe Elements offers pre-built UI components that are fully customizable and comply with the latest security standards.

3. Integration of Payment Methods Beyond Credit/Debit Cards: To meet modern user expectations, consider adding support for other payment methods, such as Apple Pay, Google Pay, Stripe Checkout, or even Buy Now, Pay Later (BNPL) solutions.
   This would enhance user convenience and provide more flexibility during checkout.

4. Webhooks for Payment Confirmation: Implementing Stripe Webhooks can ensure more reliable payment confirmation and transaction updates.
   Webhooks notify the backend when a payment is successful, failed, or requires additional verification, reducing the risk of missed updates or delays in payment processing.

5. Handling Payment Failures Gracefully: Improve error handling by adding more detailed feedback for users when their payment fails.
   Currently, the error handling is basic, but more comprehensive checks and user-friendly messages will help users understand why their payment did not go through, and how they can fix it.

6. Security Enhancements: As security is paramount in handling financial transactions, future improvements should ensure the latest security practices are followed.
   This includes regularly reviewing and updating dependencies, ensuring PCI compliance, and leveraging tools such as Stripe Radar for fraud detection.

7. Customer Portal for Subscription Management: If the project eventually introduces a subscription model, integrating Stripe's customer portal would allow users to manage their subscriptions, view payment history, update payment methods, and more.

8. Incorporating Payment Retry Logic: Adding functionality that automatically retries payments when they fail due to issues like network instability or temporary declines could improve the user experience and reduce cart abandonment.

🎨 Customization:

To customize the website or its functionality, you'll primarily need to modify the following files:

1. index.html, about.html, store.ejs:
    - Modify the structure and content of these pages to adjust text, images, or layout. These files control the main sections of the website, such as the home page, about page, and store page.

2. styles.css:
    - Update the site's visual design, including colors, fonts, layout, and responsive design. Customizing this file allows you to change the look and feel of the website.

3. server.js:
    - Modify server-side behavior, such as routes, server configurations, and Stripe API integration. This file controls the core functionality and handles requests from the client-side.

4. store.js:
   - Edit the logic for the store page, including managing product data, handling the shopping cart, and Stripe payment handling.

5. .env:
   - Update the environment variables for your Stripe keys and other sensitive data. Ensure this file is kept secure and excluded from version control.

Screenshots:

License:

    This project is open-source and available under the MIT License. Feel free to use, modify, and distribute it.
    Copyright (c) [2024] [Skyler Futrell]

Connect With Me:

Website:

LinkedIn::
