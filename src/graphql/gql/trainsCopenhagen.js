import { gql } from "apollo-boost";

const trainsCopenhagen = gql`
  query($stationId: String) {
    trainsFromCopenhagen(stationId: $stationId) {
      time
      rtTime
      finalStop
      track
      rtTrack
    }
    bourbonPrice
  }
`;

export default trainsCopenhagen;
