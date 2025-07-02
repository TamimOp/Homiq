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
    price: "$420,000",
    location: [47.673, -122.118],
    tags: ["2-bedroom", "2-bathroom", "Apartment"],
  },
  {
    id: 3,
    title: "Rustic Retreat Cottage",
    description:
      "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community.",
    image: "/assets/appartment1.png",
    price: "$390,000",
    location: [47.674, -122.124],
    tags: ["3-bedroom", "2.5-bathroom", "Townhouse"],
  },
  {
    id: 4,
    title: "Modern Downtown Loft",
    description: "Stylish 1-bedroom loft in the heart of downtown.",
    image: "/assets/project1.png",
    price: "$350,000",
    location: [47.675, -122.12],
    tags: ["1-bedroom", "1-bathroom", "Loft"],
  },
  {
    id: 5,
    title: "Luxury Penthouse Suite",
    description: "Stunning 3-bedroom penthouse in central location.",
    image: "/assets/project2.png",
    price: "$850,000",
    location: [47.678, -122.125],
    tags: ["3-bedroom", "2-bathroom", "Penthouse"],
  },
  {
    id: 6,
    title: "Cozy Studio Apartment",
    description: "Perfect starter home in quiet neighborhood.",
    image: "/assets/appartment1.png",
    price: "$225,000",
    location: [47.68, -122.13],
    tags: ["Studio", "1-bathroom", "Apartment"],
  },
  {
    id: 7,
    title: "Family Friendly Home",
    description: "Spacious 5-bedroom house with a large backyard.",
    image: "/assets/project1.png",
    price: "$670,000",
    location: [47.681, -122.127],
    tags: ["5-bedroom", "3-bathroom", "House"],
  },
  {
    id: 8,
    title: "Urban Chic Condo",
    description: "2-bedroom condo with modern amenities and city views.",
    image: "/assets/project2.png",
    price: "$480,000",
    location: [47.682, -122.119],
    tags: ["2-bedroom", "2-bathroom", "Condo"],
  },
  {
    id: 9,
    title: "Countryside Escape",
    description: "Charming 3-bedroom cottage surrounded by nature.",
    image: "/assets/appartment1.png",
    price: "$310,000",
    location: [47.683, -122.122],
    tags: ["3-bedroom", "2-bathroom", "Cottage"],
  },
  {
    id: 10,
    title: "Executive City Flat",
    description: "Luxury 2-bedroom flat in the business district.",
    image: "/assets/project1.png",
    price: "$530,000",
    location: [47.684, -122.121],
    tags: ["2-bedroom", "2-bathroom", "Flat"],
  },
];
