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

In order to achieve the intent of converting viewers of the website to join and start the journey of astrology exploration, the website aims to portray a mystical feel and hope it will appeal users to uncover and continue this journey. It uses a mystical background and colours to invoke feelings of space and a dreamy place far away for users to probe into. A five-colour palette scheme consisting of mostly cool colours was maintained throughout the whole website design. The website strives to represent a certain degree of professionalism by keeping information displayed clear and concise. Design theme is consistent and is evident through the initial sketching of the wireframe. A copy of the sketch may be viewed [here](https://drive.google.com/file/d/1ATZ9VVzVksHhqBNzuDIiaaciW4HLD4UN/view?usp=sharing).

Besides the look, the website also ensure that it is user-friendly and interactive. When a user first enter the website, they will be greeted by a captivating animated graphic, quote followed by a button. This will induce the user to look at the graphic and quote before they officially enter to the main section of this single-page website.

By bringing the users directly to the main section, it guides them immediately to find out about the agenda of the website. In there, users will be greeted with an interactive feature to find out their horoscope sign after they enter their birthdate. On activating the feature, it will display : You are a Capricorn (Horoscope Sign). Using this, I hope to create a light-hearted and welcoming interaction on the page. Right after, they will be able to select their horoscope and read about their personality and even conveniently select compatible horoscope signs by simply clicking on it to bring them to read about their introduction as well.

Another important agenda of the website is to let users read about horoscope predictions. It is illustrated in three sections on the page, 1) Daily, 2) Today-Yesterday-Tomorrow and 3) Week-Month-Year.
For Daily, it is well-illustrated by having 12 horoscope sign images displayed. On click, a modal component will be presented with the daily predictions readings. For both Today-Yesterday-Tomorrow and Week-Month-Year, the user will be able to select their horoscope and which day(s) they would like to read about their predictions. As the API for the Week-Month-Year takes a slightly longer time to load and display the content, a loading animation was added upon user's selection and will hide when information is displayed. This feature allow the user to recognise that the option selected is valid and website is actually responding to their selections.
 
Last but not least, I hope to finally establish a contact with the user of the website. To keep the users, I hope to keep it simple by establishing a clear and painless contact form for them to fill in. The fields were made required so the company will be able to follow up with them by providing a personalised astrology report for them.

## Features

* Left Logo, Sticky-top Navigation Bar - Easy access and is mobile responsive
* [Landing Section](https://deniseleechewwoon.github.io/project-2-thetwelvegates/) 
    1. Animated graphics that is appropriate for the theme of the webpage - Brings some life to the static page.
    2. Mobile responsive graphic.
* [Horoscope Personality Section](https://deniseleechewwoon.github.io/project-2-thetwelvegates/#horoscope-personality) 
    1. Interactive Feature javascript to generate Horoscope Sign based on data entered using Javascript.
    2. Interactive Feature using javascript to generate Horoscope Personality readings based on selection.
    3. Click on compatible horoscope to display their Personality readings as well.
* [Horoscope Predictions - Daily](https://deniseleechewwoon.github.io/project-2-thetwelvegates/#pick-your-horoscope)
    1. Responsive icons on hover for each horoscope sign.
    2. Mobile responsive modal will be displayed upon click using css and javascript to fetch API.

* [Horoscope Predictions - Today-Tomorrow-Yesterday](https://deniseleechewwoon.github.io/project-2-thetwelvegates/#horoscope-predictions)
    1. Animated Graphic with css displayed before selection
    2. Interactive Feature using javascript to fetch api and generate Horoscope Pridiction readings based on selection.

* [Horoscope Predictions - Week-Month-Year](https://deniseleechewwoon.github.io/project-2-thetwelvegates/#horoscope-predictions2)
    1. Animated Graphic with css displayed before selection
    2. Interactive Feature using javascript to fetch api and generate Horoscope Prediction readings based on selection.
    3. As the api takes longer to be fetched, an loading animation using css was added to allow user to be aware that option selected is responding to their call.

* [Contact Section](https://deniseleechewwoon.github.io/project-2-thetwelvegates/#contact-us)
    1. Required fields and form validator for options in form.

### Features Left to Implement
* To add in Horoscope Compatibility Data and Features to compare Horoscopes
* To add in a depository for the contact us page - make the form workable

## Technologies Used

* [HTML](https://www.w3schools.com/html/) - standard markup language for creating web pages
    - HTML is basically used throughout the whole document to construct the various segments and putting things together

* [CSS](https://www.w3schools.com/css/) - describes the style of the HTML document
    - CSS is important to maintain the look, style and feel of the website

* [Bootstrap 4.4](https://getbootstrap.com/docs/4.4/getting-started/introduction/) - popular framework for building responsive, mobile-first sites
    - Bootstrap framework makes things easier to have basic features and minimised the use of css styling with bootstrap features

* [Javascript](https://www.youtube.com/watch?v=gnDOjWUSHks)
    - Javascript is used to create a responsive lightbox - modal image gallery

* [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.

* [AJAX](https://www.w3schools.com/xml/ajax_intro.asp)
    - A browser built-in XMLHttpRequest object (to request data from a web server) JavaScript and HTML DOM (to display or use the data)

* [APIs]
    - [Horoscope API 1](https://github.com/anujsinghwd/horoscope_API#get-httpsraashiphalherokuappcomtypemonthsunsignsunsign)
    - [Horoscope API 2](https://github.com/sameerkumar18/aztro)

## Testing

The site is manually tested on a macbook pro, windows laptop, andriod mobile device (Samsung note 9) and ipad to ensure the responsiveness and that all the links work well.

* Page content fits device width and is responsive on all devices
* Text on the page is readable
* Links and tap targets are sufficiently large and touch-friendly
* The navbar to access all the Sections (Home > Horoscope Personality > Horoscope Predictions(with dropdown) > Contact) is tested to ensure it works well

On all platforms, the following were tested

1. Landing Section
    - The animated graphics in effect of the page works well with every refresh
    - The button is able to bring the users to the main section works well
2. Horoscope Personality Section
    - All the different dates for the twelve horoscope were entered to test that the javascript will return and reflect the right horoscope sign on the page
    - All twelve horoscopes were selected from the dropdown to ensure that the respective data is reflected upon selection
    - Clicked on all compatible horoscope signs and ensure that they were linked to the correct horoscope to display data
    - The button is able to bring the users to the next section works well
3. Horoscope Predictions (Daily) Section
    - There is a image hover effect on all the twelve horoscope signs and it is tested to work well
    - On larger screens, the icons were set to display as a four-column so that it is not cluttered, tested to display well on larger screens
    - On smaller screens, the icons were set to display as a two-column to ensure visibility of the icons, tested to display well on smaller screens
    - All the twelve horoscope signs were clicked and tested to work well
    - On click on respective graphic for each sign, the modal component managed to pop up in the middle of the page. It was tested to work well on a mobile screen as well.
    - The button is able to bring the users to the next section works well
4. Horoscope Predictions (Today-Tomorrow-Yesterday) Section
    - All twelve horoscopes and corresponding day were selected from the dropdown to ensure that the respective data is reflected upon selection
    - There is a clock function and clock works well with every refresh
    - The button is able to bring the users to the next section works well
5. Horoscope Predictions (Week-Month-Year) Section
    - All twelve horoscopes and corresponding period were selected from the dropdown to ensure that the respective data is reflected upon selection
    - There is a loading animation upon selection of data and is tested to work well with every refresh
6. Contact Us Section
    - Try to submit an empty form and verify that an error message about the required fields appears
    - Try to submit the form with an invalid email address and verify that a relevant error message appears

The site was manually tested on different browsers (Chrome, Safari, Morzilla Firefox and Internet Explorer).
The site works well on all browsers.

The site was also tested using online platform [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) and results show that page is mobile friendly and easy to use on a mobile device.

## Deployment

This site is hosted on Github Pages and directly deployed from the master branch.
A repository was firstly created using github and commits were pushed to the master branch. Materials are pushed to the GitHub repository with git add, git commit, and git push.
Eventually, the deployed site will be updated automatically upon any new commits. 

The landing page of the site is named index.html.
There are 3 folders, namely js, cc and img to place the various Javascript files, css stylesheet and images on the website respectively. 


## Credits

### Content
- The text for the various sections were taken and modified from the following websites
  * [GaneshaSpeaks](https://www.ganeshaspeaks.com/horoscopes/yearly-horoscope/)
  * [Yearly Horoscopes](https://www.yearly-horoscope.org/2020-horoscopes/)
  * [wikiHow Horoscope](https://www.wikihow.com/Know-Your-Horoscope)
  * [Thought Catalog Quotes By Jessica Winters](https://thoughtcatalog.com/jessica-winters/2016/11/33-classic-quotes-that-reveal-the-timeless-wisdom-of-astrology/)
- Specifically, the text for the Horosocope Personality were all taken from [Thought Catalog Article By Gianna Fazzini](https://thoughtcatalog.com/gianna-fazzini/2018/03/everything-you-need-to-know-about-each-of-the-12-zodiac-personalities/).

- For the Horoscope Predictions, data were retrieved from the following API 
    * [Horoscope API 1](https://github.com/anujsinghwd/horoscope_API#get-httpsraashiphalherokuappcomtypemonthsunsignsunsign)
    * [Horoscope API 2](https://github.com/sameerkumar18/aztro)

### Media
- The photos used in this site were all obtained from [freepik](https://www.freepik.com/home) - a stock image library. Please refer to the full credits and link for each image [here](https://drive.google.com/open?id=1RW7ISUwm2yo8boamNulaxKoPbtTykVB8).

- Some of the graphics were edited using [Photoshop](https://www.adobe.com/sea/products/photoshop.html?gclid=EAIaIQobChMI_rXt5v2c6AIVWq6WCh3BSwRuEAAYASAAEgIzIPD_BwE&sdid=YP7XGDLR&mv=search&ef_id=EAIaIQobChMI_rXt5v2c6AIVWq6WCh3BSwRuEAAYASAAEgIzIPD_BwE:G:s&s_kwcid=AL!3085!3!400503272159!e!!g!!photoshop) by myself.

### Acknowledgements

- CSS Styling by [Bootstrap4](https://getbootstrap.com/).
- All fonts used for this site are obtained from [google fonts](https://fonts.google.com/).
- The landing section star icon is obtained from [Font Awesome](https://fontawesome.com/).
- The Javascript to identify Horoscope is edited from [CourseWeb.net](https://coursesweb.net/javascript/zodiac-signs_cs).
- The Time clock javascript is inspired from [here](https://www.ntu.edu.sg/home/ehchua/programming/webprogramming/JavaScript_Examples.html)
- The loading animation is inspired and obtained from [CSS Loaders](https://freefrontend.com/css-loaders/).
- The spinning image animation is inspired and obtained from [Sololearn](https://code.sololearn.com/WX6x1c56OFb5/#html).

### This website created is for educational use.
