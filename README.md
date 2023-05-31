# Trello Clone

A minimal web application similar to Trello with React.

## Technologies and Libraries Used

- React
- TypeScript
- Jest and Testing Library
- uuid

### Quick Start

```bash
# after download, change directory
cd trello-clone

# install dependencies
npm install

# start server
npm start

# start testing
npm run test
```

### Decisions

- I utilized an atomic design pattern to create a scalable architecture that is easy to understand. 
- To effectively manage data without relying on third-party state management libraries, I implemented a hooks-based solution using useReducer and React context as a provider component.
- Additionally, I integrated a hook for local storage to enable data persistence.
- When passing data through components, I opted to use indexes instead of passing the entire data array, as it allows for easier manipulation of the data through operations like adding, deleting, or updating.
- To generate unique identifiers, I utilized the widely-used utility package called uuid.
- For organizing CSS, I employed CSS modules to maintain a structured and manageable styling approach.
- Finally, I conducted unit and integration tests to ensure the functionality is working as intended.



### Key Features

I've implemented a minimal set of features, including having cards and lists system with one active board, to mimic Trello's functionality. Additionally, I've added drag and drop functionality to enhance the usability of the task management application.

- Ability to add, edit, and delete lists with a title.
- Capability to add cards with titles, and edit or delete their titles.
- Drag and drop functionality for moving cards between columns or within a column.
- Easy movement of lists using arrow icons, eliminating the need for drag and drop.



### Areas for Improvement

- Implement drag and drop functionality for the lists by developing a custom hook specifically designed for drag and drop operations.
- Expand the information captured in cards by adding fields for due dates, descriptions, and comments.
- Improve the structure of the List component by breaking it down into more atomic components, such as ListHeader or ListFooter.
- Enhance test coverage to ensure comprehensive functionality testing.
- Incorporate hooks for user interactions, such as detecting clicks outside elements, to improve usability.
- Add support for multiple boards to allow users to manage different sets of tasks.
- Enhance the appearance of buttons and other elements at the top of the list for better visual appeal and user experience.
- Consider using options like SCSS, styled components, or even Storybook to enhance CSS organization and maintainability.
- Ensure responsiveness across different devices and screen sizes for a seamless user experience.
