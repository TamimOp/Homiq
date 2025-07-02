export interface Property {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  location: [number, number];
  tags: string[];
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Seaside Serenity Villa",
    description:
      "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
    image: "/assets/project1.png",
    price: "$550,000",
    location: [47.672, -122.121],
    tags: ["4-bedroom", "3-bathroom", "Villa"],
  },
  {
    id: 2,
    title: "Metropolitan Haven",
    description:
      "A chic and fully-furnished 2-bedroom apartment with panoramic city views.",
    image: "/assets/project2.png",
    price: "$550,000",
    location: [47.673, -122.118],
    tags: ["2-bedroom", "2-bathroom", "Villa"],
  },
  {
    id: 3,
    title: "Rustic Retreat Cottage",
    description:
      "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community.",
    image: "/assets/appartment1.png",
    price: "$550,000",
    location: [47.674, -122.124],
    tags: ["3-bedroom", "3-bathroom", "Villa"],
  },
];
