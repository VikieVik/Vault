// EDITING STARTS HERE (you dont need to edit anything above this line)
// https://pouchdb.com/getting-started.html

// 👇 SETUP LOCAL AND REMOTE DB 👇
//  🐦 Define DB here

import PouchDB from "pouchdb";
var db = new PouchDB("bluebirdDB");

db.info().then(function (info) {
  console.log("We have a database: " + JSON.stringify(info));
});

var remoteDB = "http://admin:admin@127.0.0.1:5984/stackswan";
// go to http://127.0.0.1:5984/_utils/# for couchdb admin panel
//var remoteDB = ("https://2b03ffe4-13ee-4754-80b0-9f8ef4495771-bluemix:81817ab384476c891c6589b442b48645782dccafdef6432ac914c4375c0856a2@2b03ffe4-13ee-4754-80b0-9f8ef4495771-bluemix.cloudantnosqldb.appdomain.cloud/bluebird_db");

// 🐦 If remoteDB defined sync
if (remoteDB) {
  sync();
}

// 👇 SETUP SYNC 👇
// 🐦 sync - replicate to or from remote DB to local\

function sync() {
  console.log("in-sync()");
  db.sync(remoteDB, {
    live: true,
    retry: true,
  })
    .on("change", function (change) {
      console.log("sync-change");
      // yo, something changed!
    })
    .on("paused", function (info) {
      console.log("sync-paused");
      // replication was paused, usually because of a lost connection
    })
    .on("active", function (info) {
      console.log("sync-active");
      // replication was resumed
    })
    .on("error", function (err) {
      console.log("sync-error");
      // totally unhandled error (shouldn't happen)
    });
}

// 🐦  If new changes made to DB, display
db.changes({
  since: "now",
  live: true,
}).on("change", showPayload);

// 👇 SAVE TO DB 👇
// 🐦 addPayload - adds incoming data from BLE Device to PouchDB
// called in handleChangedValue()
function addPayload(data) {
  // bluebirdPayload - doc/row in DB
  var bluebirdPayload = {
    _id: new Date().toISOString(),
    title: data,
  };

  db.put(bluebirdPayload, function callback(err, result) {
    if (!err) {
      console.log(
        "Successfully added payload to DB: " + JSON.stringify(bluebirdPayload)
      );
    }
  });
}

// 🐦 showPayload - Shows Payload
// For now shows the payload via Console
// Comment console.log if it's distracting
function showPayload() {
  db.allDocs(
    {
      include_docs: true,
      descending: true,
    },
    function (err, doc) {
      //console.log(doc.rows);
    }
  );
}

export default db;
export { addPayload, showPayload };
