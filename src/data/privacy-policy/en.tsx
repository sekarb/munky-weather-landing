import { CONTACT_EMAIL, LAST_UPDATED } from '@/lib/constants';

export default (
  <>
    <h1>Privacy Policy for Munky Weather</h1>
    <p>
      <strong>Last Updated:</strong> {LAST_UPDATED}
    </p>

    <h2>1. Introduction</h2>
    <p>Thank you for using Munky Weather.</p>
    <p>
      The app provides current weather conditions and 10 day forecast for any location on earth. This goes beyond just cities. You can search for places like lakes, campgrounds etc.
    </p>
    <p>
      The app uses the Google Places search. So any place you can search for and find on Google Maps are available to get weather for.
    </p>
    <p>
      By using this app, you expressly consent to the collection, processing, and use of your data as described in this privacy policy.
    </p>

    <h2>2. Information We Collect</h2>
    <p>We collect your device's location to:</p>
    <ul>
      <li>
        Provide weather information for your current location by sending coordinates, country code of the current location and the time zone of the current location to the Apple WeatherKit REST API.
      </li>
      <li>
        Send coordinates to the rater REST API for reverse geocoding to determine the name of your location.
      </li>
      <li>
        Send coordinates to the Google Elevation REST API to determine the altitude of the forecast location.
      </li>
      <li>
        Send coordinates to the Google Timezone REST API to obtain the time zone of your location.
      </li>
      <li>
        Send coordinates to the Google Air quality REST API to obtain the air quality of your location.
      </li>
    </ul>
    <p>
      Additionally, we utilize the Google Places Autocomplete SDK to aid in autocompleting place names during your searches for locations.
    </p>
    <p>
      We only pass the search string that you type in the location search box to the Google Places Autocomplete API.
    </p>
    <p>
      We also use the Radar API to reverse geocode location coordinates to a human-readable location name. By doing so, you are also agreeing to the privacy policy of radar. We only send the current location coordinates to the Radar API.
    </p>
    <p>
      <strong>How long the location data is stored:</strong> The location collected is only used to retrieve the weather data as mentioned in the points above. The location information stays in device memory as long as the app is running. Once the app is terminated, it is cleaned from memory.
    </p>
    <p>
      We also store the count of how many times weather information has been retrieved only to request a review after the app has been used to a certain extent. This information does not leave your device and not sent anywhere. This is also not linked to any other personally identifiable information.
    </p>

    <h2>3. How We Collect the Information</h2>
    <ul>
      <li>Location data is not collected continuously</li>
      <li>
        The location information is retrieved when the app is brought to the foreground [if the 'Load current location on open' option is enabled in the settings] or when you select 'Current location' on the location search screen.
      </li>
    </ul>

    <h2>4. How We Use Your Information</h2>
    <ul>
      <li>Deliver real-time, localized weather details.</li>
      <li>Display 10 day weather information for chosen locations.</li>
      <li>Convert geographic coordinates into a human-readable location name using a REST API.</li>
      <li>Determine the altitude of specific locations using the Google Elevation REST API.</li>
      <li>Determine the time zone for given locations using the Google Timezone REST API or Apple.</li>
      <li>
        Provide autocomplete functionality when searching for places using the Google Places Autocomplete SDK.
      </li>
    </ul>
    <p>We do not use the data for marketing or advertising purposes.</p>

    <h2>5. Third-party Integrations</h2>
    <p>While we don't use analytics or display ads, we do rely on third-party services for specific functionalities:</p>
    <ul>
      <li>
        <strong>Google Elevation REST API:</strong> To obtain altitude data for given coordinates. We only send the current location coordinates to the Google API.
      </li>
      <li>
        <strong>Google Places Autocomplete SDK:</strong> To facilitate autocomplete functionality when users search for places. We only send the search string you type in the location search box to the Google API.
      </li>
      <li>
        <strong>Google Timezone REST API:</strong> To obtain the time zone of the forecast location.
      </li>
      <li>
        <strong>Radar API for reverse geocoding and getting a human-readable location name:</strong> By using this, you are also agreeing to the privacy policy of radar. We only send the current location coordinates to the Radar API.
      </li>
      <li>
        <strong>Google Air quality API for getting Air quality:</strong> To obtain air quality information for given coordinates. We only send the current location coordinates to the Google API.
      </li>
    </ul>

    <h3>Privacy policies of the third party integrations:</h3>
    <p>
      By using the Google services mentioned above, you are also agreeing to the terms and privacy policy of Google.
    </p>
    <p>
      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
        Google Privacy Policy
      </a>
    </p>
    <p>
      By using the Radar API service mentioned above, you are also agreeing to the terms and privacy policy of Radar.
    </p>
    <p>
      <a href="https://radar.com/privacy" target="_blank" rel="noopener noreferrer">
        Radar Privacy Policy
      </a>
    </p>

    <h2>6. Your Choices</h2>
    <p>
      When you first install and open the app, it will ask for location permissions. You can deny it at that time.
    </p>
    <p>
      You also have the option to deny location access to the app through your device settings.
    </p>
    <p>
      If you deny location permissions, some app features may not work like automatically loading forecast for the current location on start or choosing current location option on the search screen. But you can still search for places and obtain weather.
    </p>
    <p>
      You can opt-out of using Google Elevation REST API integration by turning off the 'Display Altitude' setting on the settings screen. If you choose to opt-out this way, you will not see the altitude information for the forecast locations.
    </p>
    <p>
      You can opt-out of using Google Air quality REST API integration by turning off the 'Display Air Quality' setting on the settings screen. If you choose to opt-out this way, you will not see the Air quality information for the forecast locations.
    </p>
    <p>
      Opting out of any of the other third-party integrations mentioned above is not possible, as they are crucial to the core functionality of the app.
    </p>

    <h2>7. Changes to This Policy</h2>
    <p>
      We might update our Privacy Policy occasionally. Should any changes occur, we will promptly post the new policy on this page. It is advised to revisit this Privacy Policy periodically to stay informed about our commitment to your privacy.
    </p>

    <h2>8. Contact Us</h2>
    <p>
      For questions, comments, or concerns regarding this Privacy Policy, please get in touch with us at:{' '}
      <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
    </p>
  </>
);
