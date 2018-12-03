import React from 'react'

function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cumque, nulla, inventore aut placeat provident magnam ipsum itaque, saepe reprehenderit soluta iusto repellat distinctio illum iure dolore amet quo. Blanditiis!</p>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted By Tyler</div>
            <div>Date Posted</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
