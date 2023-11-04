# Onboarding Page Navigation

![Onboarding](/Onboarding-cover.jpg)

[Visit My Project on Netlify](https://nenorvalls-onboarding.netlify.app/)


This JavaScript code provides page navigation functionality for an onboarding process with "Skip" and "Next" buttons. It's designed to control the flow between multiple pages, allowing users to navigate through the onboarding steps.

## How It Works

1. When the DOM content is fully loaded, the JavaScript code runs to set up the onboarding functionality.

2. It selects all the pages with the class "page" and stores them in an array.

3. The `showPage` function is used to display the page corresponding to the specified page number. It hides all other pages.

4. The `goToNextPage` function increments the current page number and displays the next page.

5. The `goToPreviousPage` function decrements the current page number and displays the previous page.

6. The initial page (Page 1) is displayed when the script is loaded using `showPage(0)`.

7. Event listeners are added to the "Skip" and "Next" buttons to handle navigation:

   - For "Skip" buttons, a click event listener does nothing (as requested in your requirements).
   - For "Next" buttons, a click event listener calls the `goToNextPage` function to navigate to the next page.

8. The "Get Started" button, when clicked, uses an event listener to navigate back to the first page (Page 1) using `showPage(0)`.

## Usage

You can use this code by including it in your HTML file and referencing it using a script tag. Ensure that you also have the necessary HTML structure with pages, buttons, and appropriate class names.

```html
<script src="index.js"></script>
