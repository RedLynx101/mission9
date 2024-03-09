import React from 'react';

interface Team {
    tid: number;
    cid: number;
    did: number;
    school: string;
    name: string;
    abbrev: string;
    pop: number;
    city: string;
    state: string;
    latitude: number;
    longitude: number;
}

interface TeamCardProps {
    team: Team;
}

function TeamCard({ team }: TeamCardProps) {
    return (
        <div className="team-card">
            <h2>
                {team.school} {team.name}
            </h2>
            <p>
                {team.city}, {team.state}
            </p>
        </div>
    );
}

export default TeamCard;
