# The Twelve Gates - Website for Astrology Predictions 
##  Code Institute - Interactive Frontend Development Milestone Project (2)
##  Student Name: Denise Lee Chew Woon

For this Project, a website was created for users to understand the world of astrology readings and how they may plan for their lives with their horoscope signs predictions. This was built from the point of view of a fictitious astrology company.

<a href="https://ibb.co/6wDnDj4"><a href="https://ibb.co/6wDnDj4"><img src="https://i.ibb.co/r0575DZ/thetwelvegates-browser.png"  width="400" alt="thetwelvegates-browser" border="0"></a>

The site may be viewed [here](https://deniseleechewwoon.github.io/project-2-thetwelvegates/index.html).

This website is created to cater to astrology enthusiasts and bring them 
through the journey of self-exploration by astrology analysis and predictions. Eventually, the website aims to entice users to join the community in astrology exploration. From the company name- The Twelve Gates to the chosen colour scheme to the website design concept, the objective is to provide a mystical touch to the website and retain target audience with interactive and relevant content.

## UX

The target audience for the website will be
* Consumers looking for professional astrology analysis
* Astrology enthusiasts

In order to achieve the intent of converting viewers of the website to join and start the journey of astrology exploration, the website aims to portray a mystical feel such that it will appeal users to uncover and continue this journey. It uses a mystical background and colours to invoke feelings of space and a dreamy place far away for users to probe into. A five-colour palette scheme consisting of mostly cool colours was maintained throughout the whole website design. The website strives to represent a certain degree of professionalism by keeping information displayed clear and concise. Design theme is consistent and is evident through the initial sketching of the wireframe. A copy of the sketch may be viewed [here](https://drive.google.com/file/d/1ATZ9VVzVksHhqBNzuDIiaaciW4HLD4UN/view?usp=sharing).

Besides the look, the website also ensure that it is user-friendly and interactive. When a user first enter the website, they will be greeted by a captivating animated graphic, quote followed by a button. This will induce the user to look at the graphic and quote before they officially enter to the main section of this single-page website.

By bringing the users directly to the main section, it guides them immediately to find out about the agenda of the website. In there, users will be greeted with an interactive feature to find out their horoscope sign after they enter their birthdate. On activating the feature, it will display : You are a Capricorn (Horoscope Sign). Using this, I hope to create a light-hearted and welcoming interaction on the page. Right after, they will be able to select their horoscope and read about their personality and even conveniently select compatible horoscope signs by simply clicking on it to bring them to read about their introduction as well.

Another important agenda of the website is to let users read about horoscope predictions. It is illustrated in three sections on the page, 1) Daily, 2) Today-Yesterday-Tomorrow and 3) Week-Month-Year.
For Daily, it is well-illustrated by having 12 horoscope sign images displayed. On click, a modal component will be presented with the daily predictions readings. For both Today-Yesterday-Tomorrow and Week-Month-Year, the user will be able to select their horoscope and which day(s) they would like to read about their predictions. As the API for the Week-Month-Year takes a slightly longer time to load and display the content, a loading animation was added upon user's selection and will hide when information is displayed. This feature allow the user to recognise that the option selcted is valid and website is actually responding to their selections.
 
Last but not least, I hope to finally establish a contact with the user of the website. To keep the users, I hope to keep it simple by establishing a clear and painless contact form for them to fill in. The fields were made required so the company will be able to follow up with them by providing a personalisedstrology report for them.

## Features

* Left Logo, Sticky-top Navigation Bar - Easy access and is mobile responsive
* [Landing Section](https://deniseleechewwoon.github.io/project-2-thetwelvegates/) 
    1. Animated graphics that is appropriate for the theme of the webpage - Brings some life to the static page.
    2. Mobile responsive graphic.
* [Horoscope Personality Section](https://deniseleechewwoon.github.io/project-2-thetwelvegates/#horoscope-personality) 
    1. Interactive Feature javascript to generate Horoscope Sign based on data entered using Javascript.
    2. Interative Feature using javascript to generate Horoscope Personality readings based on selection.
    3. Click on compatible horoscope to display their Personality readings as well.
* [Horoscope Predictions - Daily](https://deniseleechewwoon.github.io/project-2-thetwelvegates/#pick-your-horoscope)
    1. Responsive icons on hover for each hroroscope sign.
    2. Mobile responsive modal will be displayed upon click using css and javascript to fetch API.

* [Horoscope Predictions - Today-Tomorrow-Yesterday](https://deniseleechewwoon.github.io/project-2-thetwelvegates/#horoscope-predictions)
    1. Animated Graphic with css displayed before selection
    2. Interative Feature using javascript to fetch api and generate Horoscope Pridiction readings based on selection.

* [Horoscope Predictions - Week-Month-Year](https://deniseleechewwoon.github.io/project-2-thetwelvegates/#horoscope-predictions2)
    1. Animated Graphic with css displayed before selection
    2. Interative Feature using javascript to fetch api and generate Horoscope Pridiction readings based on selection.
    3. As the api takes longer to be fetched, an loading animation using css was added to allow user to be aware that option selected is responding to their call.

* [Contact Section](https://deniseleechewwoon.github.io/project-2-thetwelvegates/#contact-us)
    1. Required fields and form validator for options in form.
    
 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing

Page content fits device width
Text on the page is readable
Links and tap targets are sufficiently large and touch-friendly

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X