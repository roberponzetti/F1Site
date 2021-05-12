import React from 'react'
import withLoader from '../HOC/withLoader'
import TeamCard from '../Molecules/TeamCard'

const TeamGrid = ({teams}) =>(
    <div>
        {teams.map (t => (
            <TeamCard
              name={t.name}
              nationality={t.nationality}
            />
          ))
        }
    </div>
)

export default withLoader("teams")(TeamGrid)