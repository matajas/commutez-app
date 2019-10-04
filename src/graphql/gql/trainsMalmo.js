import { gql } from "apollo-boost";

const trainsMalmo = gql`
  {
    trainsFromMalmo {
      AdvertisedTimeAtLocation
      EstimatedTimeAtLocation
      TimeAtLocation
      Deviation
      OtherInformation
      Canceled
    }
  }
`;

export default trainsMalmo;
