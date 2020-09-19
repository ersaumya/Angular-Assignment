Develop a SPA for the below requirements using Angular 
Submit the code back. If possible, share a demo link that can be tested


Requirements :

Assume a JSON file with array of Questions with below fields
    id
    Question Text
    Answer Options
    Correct Answer
    Author
    Stats - Last Asked Date,Asked Count, percent of users who answered correctly

Login Screen
    Show simple form username/password & submit
    Mock the Password Validation at clientside by using hardcoded array of users which can be
    easily replaced with server API later on

Search Screen
    Shows a search box & submit button
    Clicking on submit should search for given keyword in the questionText
    Display the search result - show ID & questiontext
    Clicking on one of the result should take to next screen

Question screen
    It should show the complete details of the selected question
    If at all user refreshes the browser while at this screen, it should show the same details
    Ensure if user tries to visit any of the inner screen without login, he should be redirected to
    login screen & then taken to the requested screen on successful login