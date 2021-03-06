import { gql } from "apollo-boost";

const trainsMalmo = gql`
  query($stationId: String) {
    trainsFromMalmo(stationId: $stationId) {
      AdvertisedTimeAtLocation
      EstimatedTimeAtLocation
      TrackAtLocation
      Deviation
      OtherInformation
      Canceled
    }
  }
`;

export default trainsMalmo;
