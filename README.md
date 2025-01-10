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
git clone https://github.com/agapekala/tournament-bracket.git
cd tournament-bracket
```

## 2. Install dependencies

```bash
npm install
```

## 3. Run the Development Server

Install all required dependencies:

```bash
npm run dev
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
