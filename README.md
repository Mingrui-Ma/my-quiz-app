#### General Information

My-Quiz-App is a quiz taking app that downloads trivia questions from an online database and includes extra features such as timed answers and keyboard hotkeys. It is built with ReactJS, with functional components utilizing React Hooks. It is hosted on Netlify ([link](my-quiz-app-by-mingrui.netlify.app)) and continuously integrates with this repo.

#### Data Fetching

My-Quiz-App uses the [Open Trivia Database](https://opentdb.com), which provides the ability to generate a quiz in JSON format and returns it in an URL. After configuring the quiz in `StartScreen` and clicking "start quiz" an Axios GET request is sent to the appropriate URL to download and store the quiz locally. This is done  only once per `StartScreen` render by providing an empty dependency to `useEffect()`.

#### Answering Mechanism 

The `Question` component, which is embedded in the `MainScreen` component, tracks the answer currently chosen by the user. When submit is clicked (or the timer runs out if it is turned on), the chosen answer is compared with the correct answer to determine if the chosen answer was correct, incrementing a number if it is. A state variable for the question number then increments to trigger a re-render of `MainScreen` for the next question.

#### Extra Features

1. **Score history**: The starting screen shows the score history in the current session. The bullet point is either a thumb-up or thumb-down emoticon, depending on the score the user got.
2. **Answer notification**: After submitting a question, a notification tells the user whether that question was answered correctly. This can be turned off in the settings menu, and the amount of time the notification is visible for can also be tweaked. 
3. **Timed answer**: Gives the user limited time to answer the question. When the time runs out the quiz continues with the currently chosen answer. This can be turned off in the settings menu and the amount of time allotted to answering the question can also be tweaked.
4. **Quality of life features**: 3 font sizes; tooltip pop-ups; auto focus on the input field when clicking on its label; keyboard hotkeys.

#### Activity Diagram
![](https://imgur.com/FoCMhLP.jpg)
