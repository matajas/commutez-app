import { gql } from "apollo-boost";

const trainsMalmo = gql`
  {
    trainsFromMalmo {
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
