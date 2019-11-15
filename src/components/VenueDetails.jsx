import React from 'react';

const VenueDetails = (props) => {
    console.log('props in venuedetailssss', props.venueId)


    function fetchImages(props) {
      return 'hihihihi'
    }
    





  return (
    <div>
      <h2 className="venue-name">
        {props.venueName}
      </h2>
      <img className="specific-venue-image" src={props.venueImage} />
      <div id="specific-venue-details">
        {props.venueLocation.address1}<br />
        {props.venueLocation.city}, {props.venueLocation.state} {props.venueLocation.zip_code}<br />
        {props.venuePhone}<br />
        {props.venueUrl}
      </div>
    </div>
  );
}

export default VenueDetails;