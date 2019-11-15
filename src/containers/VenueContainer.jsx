import React, { useEffect } from 'react';
import VenueDetails from '../components/VenueDetails.jsx';
import WaitTimesDisplay from '../components/WaitTimesDisplay.jsx';
import MessageBoard from '../components/MessageBoard.jsx';
import '../css/VenuePage.css'
import VenueMap from '../components/VenueMap.jsx'
import Button from 'react-bootstrap/Button';
// const yelp = require('yelp-fusion');
const yelpAPI = require('yelp-api')
// const client = yelp.client('eRxKmGj27YLORDOGy6EYIyECcViswJMborZf40yUgKOrrYIEexc2vmioWAa9-enerVRZOVdInpNqgxM3j1deCuRnbh9iHb9F8gol79USiFzNu0nRyW8J-IISFaXNXXYx')


const VenueContainer = (props) => {
  const YELP_API = '0asdq3RZT2Kcg24r5KLnY49GRgND03gI53KjmnXTaFEsPoe8YaSyyhVNciXqh2GGLrV1i7X79sBWjkWw_NhhMeG9GSOOylFrRXxnFSZuLxQvDj-5bOzL1JsZ-UbGXXYx'
  let yelp = new yelpAPI(YELP_API)
  yelp.query(`business/search${props.venueId}`, [{locale: 'en_US'}])
  .then(data =>{
    console.log(data)
  })






  
  // render map and wait times
  console.log('props in venucontainer', props.venueId)
  return (
    <div>
      <section className="search-bar">

        {/* <img id="logo-pic-venue" src="https://image.flaticon.com/icons/png/512/876/876569.png"/> */}
        <input type="input" id="searchInput" placeholder="Business or Category" onChange={props.setSearchInput} />
        <input type="input" id="location" placeholder="Location" onChange={props.setLocation} />
        <input type="button" id="searchButton" onClick={props.search} />
      </section>
      <div id="venue-page">
        <div id="venue-details-column">
          <VenueDetails
            venueName={props.venueName}
            venueUrl={props.venueUrl}
            venueImage={props.venueImage}
            venueLocation={props.venueLocation}
            venuePhone={props.venuePhone}
            venueId={props.venueId}
          />

          <WaitTimesDisplay 
            venueId = { props.venueId }
            venueWaitTimeList = { props.venueWaitTimeList }
            addWaitTime = { props.addWaitTime }
            setWaitTime = { props.setWaitTime }
            updateWaitList = {props.updateWaitList}

          />
        </div>

        <div id="map">
          <VenueMap 
            StoresInfo = {props.searchResults}
            latitude={props.latitude} 
            longitude={props.longitude}
          />
        </div>

        <br />
        <MessageBoard venue={props.venueId} />
      </div>
    </div>
  )
}

export default VenueContainer;