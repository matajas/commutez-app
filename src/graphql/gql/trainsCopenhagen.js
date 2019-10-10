import { gql } from "apollo-boost";

const trainsCopenhagen = gql`
  {
    trainsFromCopenhagen {
      time
      rtTime
      finalStop
      track
      rtTrack
    }
  }
`;

export default trainsCopenhagen;
