import React from 'react';
import './App.css';
import teamsData from './CollegeBasketballTeams.json';
import TeamCard from './TeamCard';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>College Basketball Teams</h1>
                <p>
                    Welcome to the ultimate guide for college basketball
                    enthusiasts! As March Madness approaches, dive into the rich
                    tapestry of NCAA college basketball teams. Discover the
                    heroes of the hardwood from across the nation - from storied
                    programs with a legacy of success to rising squads looking
                    to make their mark. Whether you&apos;re a die-hard fan, an
                    alumni, or just love the game, this site offers an
                    interactive way to explore teams, learn about their
                    histories, and get excited for the greatest spectacle in
                    college basketball.
                </p>
            </header>
            <div className="teams-container">
                {teamsData.teams.map((team) => (
                    <TeamCard key={team.tid} team={team} />
                ))}
            </div>
        </div>
    );
}

export default App;
