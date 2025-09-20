const data = [
  {
    location: "London",
    latitude: 51.5073219,
    longitude: -0.1276474,
  },
  {
    location: "Kolkata",
    latitude: 22.5726723,
    longitude: 88.3638815,
  },
  {
    location: "Dhaka",
    latitude: 23.777176,
    longitude: 90.399452,
  },
  {
    location: "Singapore",
    latitude: 1.2899175,
    longitude: 103.8519072,
  },
  {
    location: "New York",
    latitude: 40.7127281,
    longitude: -74.0060152,
  },
  {
    location: "Toronto",
    latitude: 43.6534817,
    longitude: -79.3839347,
  },
  {
    location: "Tokyo",
    latitude: 35.6828387,
    longitude: 139.7594549,
  },
  {
    location: "Sydney",
    latitude: -33.8688197,
    longitude: 151.2092955,
  },
  {
    location: "Paris",
    latitude: 48.8566969,
    longitude: 2.3514616,
  },
  {
    location: "Dubai",
    latitude: 25.276987,
    longitude: 55.296249,
  },
];

const getAllLocations = () => {
  return data;
};

const getLocationByName = (locationName) => {
  return data.find(
    (loc) => loc.location.toLowerCase() === locationName.toLowerCase()
  );
};

export { getAllLocations, getLocationByName };
