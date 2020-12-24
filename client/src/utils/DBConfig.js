export const DBConfig = {
  name: "MyActivities",
  version: 1,
  objectStoresMeta: [
    {
      store: "activity",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "activity", keypath: "activity", options: { unique: false } },
        { name: "user", keypath: "user", options: { unique: false } },
        { name: "name", keypath: "name", options: { unique: false } },
        { name: "lat", keypath: "lat", options: { unique: false } },
        { name: "lon", keypath: "lon", options: { unique: false } },
        {
          name: "description",
          keypath: "description",
          options: { unique: false },
        },

        {
          name: "reservable",
          keypath: "reservable",
          options: { unique: false },
        },
        { name: "fee", keypath: "fee", options: { unique: false } },
        { name: "phone", keypath: "phone", options: { unique: false } },
        { name: "city", keypath: "city", options: { unique: false } },
        { name: "start", keypath: "start", options: { unique: false } },
        { name: "end", keypath: "end", options: { unique: false } },
        { name: "summary", keypath: "summary", options: { unique: false } },
        { name: "length", keypath: "length", options: { unique: false } },
        {
          name: "difficulty",
          keypath: "difficulty",
          options: { unique: false },
        },
        { name: "image", keypath: "image", options: { unique: false } },
        { name: "url", keypath: "url", options: { unique: false } },
        {
          name: "elevationChange",
          keypath: "elevationChange",
          options: { unique: false },
        },
        {
          name: "temperature",
          keypath: "temperature",
          options: { unique: false },
        },
        {
          name: "usgs_quadrangle",
          keypath: "usgs_quadrangle",
          options: { unique: false },
        },
      ],
    },
  ],
};
