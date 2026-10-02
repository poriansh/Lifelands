export default interface Game {
  _id: string;
  title: string;
  description: string;
  image: string;
  companyName: string;
  score: number;
  rating: number;
  runCount: number;
  seenCount: number;
  like: number;
  category: {
    title: string;
  };
  vitrinThirdPartyVendors: string[];
}
