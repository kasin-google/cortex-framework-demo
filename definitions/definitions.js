 const scd = require("dataform-scd");

 scd("customer_profile_scd", {
  uniqueKey: "ID",
  timestamp: "Updated_At", // A field that stores a timestamp or date of when the row was last changed.
  hash: "CheckHash", // OPTIONAL
  source: {
    schema: "dataform_us",     // The source table to build slowly changing dimensions from.
    name: "customer_profile_with_hash",
  },
  incrementalConfig: {        // Any configuration parameters to apply to the incremental table that will be created.
    bigquery: {
      partitionBy: "DATE(Updated_At)",
    },
  },
});