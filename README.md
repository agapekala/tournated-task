# Tournament Bracket Component

A responsive and customizable [Next.js](https://nextjs.org) component for generating tournament brackets based on player and match data. It includes a slider to select the number of players and adapts seamlessly to different screen sizes.

## Features

- **Player Slider**: Dynamically adjust the number of players in the bracket.
- **Responsive Design**: Automatically switches to a single-column view for smaller screens.
- **Flexible Data**: Bracket generation based on provided match data.

## Props

| Name                 | Type     | Description                                                                   | Default          |
| -------------------- | -------- | ----------------------------------------------------------------------------- | ---------------- |
| `matchData`          | `array`  | Match data to generate the tournament bracket.                                | **Required**     |
| `viewPortBreakPoint` | `number` | Screen width (in pixels) below which the bracket uses a single-column layout. | `768px`          |
| `maxSliderValue`     | `number` | Maximum slider value (controls the max number of players).                    | `5` (32 players) |

## Usage Example

A complete example is available in the `/example` directory. Here's a quick implementation:

```jsx
import TournamentBracket from "./components/TournamentBracket";

const matchData = [
  {
    id: 0,
    teams: [
      {
        id: 1,
        name: "Team A",
        location: {
          type: LocationType.CLUB,
          name: "Club name",
        },
        flag: "PL",
        scores: [6, 4, 6],
        qualificationTag: QualificationTag.Q,
      },
      {
        id: 2,
        name: "Team B",
        location: {
          type: LocationType.CITY,
          name: "City",
        },
        flag: "US",
        scores: [4, 6, 4],
      },
    ],
    date: "January 1, 2025, 16.30",
    location: "Court 1",
  },
  // Additional matches...
];

function App() {
  return (
    <TournamentBracket
      viewPortBreakPoint={1024}
      matchData={matchData}
      maxSliderValue={6} // 64 players
    />
  );
}

export default App;
```

# Setup Guide

## 1. Clone the Repository

```bash
git clone https://github.com/agapekala/tournated-task.git
cd tournated-task
```

## 2. Install dependencies

```bash
npm install
```

## 3. Run the Development Server

Start the development server locally:

```bash
npm run dev
```

The application will be available at:

```bash
http://localhost:3000
```

## 4. Explore the Example

An example implementation is available in the /example directory.

# Next Steps

Here are some ideas for extending and improving the component in future iterations:

## 1. Enhanced Customization

Add support for additional styles and themes to provide better customization options. For example, allowing users to pass custom CSS classes or style overrides to fit the component into different design systems.

## 2. Event Handling

Implement event handling for interactions such as clicking on a match or a player's name. This could trigger actions like opening detailed information or navigating to a new view.
Add features like player search to quickly locate a specific player in the bracket.
Highlight the path for a specific player, making it easier to trace their progression through the matches.

## 3. Swipeable Views

Add support for "swipeable views," enabling users to navigate through the brackets using touch gestures or mouse drags, in addition to scrolling.

## 4. Accessibility Improvements

Add ARIA roles and other accessibility features to make the component more inclusive and usable for all users, including those using screen readers.
Testing and Documentation:

## 5. Testing and Documentation

Provide a suite of unit and integration tests to ensure the component works reliably in various scenarios.
