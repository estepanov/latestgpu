exports.MONGO_URI = "mongodb://localhost:27017";
exports.MONGO_HOST = "localhost:27017";
// [ ** WARNING: PRODUCTION REPLICA LINK - ONLY USE FOR GETTING LIVE DATA IN './MongoLiveData.js' ** ] //
exports.MONGO_HOST_PROD = (check) => {
  if (check) return "ds035716-a1.mlab.com:35716";
  return undefined;
};
exports.PROD_DB = "winit_production";
exports.PROD_USER = "winit";
exports.PROD_PASS = "zB8m6cvyb6xLvOlX";
exports.PROD_CONNECTIONSTRING =
  "mongodb://winit:zB8m6cvyb6xLvOlX@winit-shard-00-00.vk8fi.mongodb.net:27017,winit-shard-00-01.vk8fi.mongodb.net:27017,winit-shard-00-02.vk8fi.mongodb.net:27017/winit_production?ssl=true&replicaSet=atlas-ajmm6o-shard-0&authSource=admin&retryWrites=true&w=majority";
// [ ** DO NOT UPDATE DOCUMENTS - ONLY QUERY & EXPORT ** ] //
