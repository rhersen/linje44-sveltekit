export default interface TrainAnnouncement {
  AdvertisedTimeAtLocation: string;
  AdvertisedTrainIdent: string;
  Canceled: boolean;
  LocationSignature: string;
  ProductInformation: Description[];
  TimeAtLocation: string;
  ToLocation: Location[];
}

interface Location {
  LocationName: string;
  Priority: number;
  Order: number;
}

export interface Description {
  Code: string;
  Description: string;
}
