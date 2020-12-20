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
          name: "reservable",
          keypath: "reservable",
          options: { unique: false },
        },
        { name: "fee", keypath: "fee", options: { unique: false } },
        { name: "phone", keypath: "phone", options: { unique: false } },
      ],
    },
  ],
};
