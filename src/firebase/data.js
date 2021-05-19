var db = require("./index");

var information = [
  "PHU",
  "active",
  "address",
  "appointments",
  "city",
  "drive_through",
  "latitude",
  "location_id",
  "location_name",
  "longitude",
  "operated_by",
  "phone",
  "phu_id",
  "postal_code",
  "province",
  "walk_ins",
  "website",
];
//all the arrays from firebase

var phu = [];
var active = [];
var address = [];
var appointments = [];
var city = [];
var drive_through = [];
var latitude = [];
var location_id = [];
var location_name = [];
var longitude = [];
var operated_by = [];
var phone = [];
var phu_id = [];
var postal_code = [];
var province = [];
var walk_ins = [];
var website = [];

phuData(phu);
function phuData(phu) {
  var ref = db.ref(information[0]);
  // Attach an asynchronous callback to read the data at our posts reference
  ref.on("value", function (snapshot) {
    //console.log(snapshot.val());
    snapshot.forEach(function (element) {
      phu[phu.length] = element.val();
    });
    console.log(phu);
  });
}

/*
activeData(active);
function activeData(active) {
  var ref = db.ref(information[1]);
  // Attach an asynchronous callback to read the data at our posts reference

  ref.on("value", function (snapshot) {
    //console.log(snapshot.val());
    snapshot.forEach(function (element) {
      active[active.length] = element.val();
    });
    //console.log(active.length);
  });
}

addressData(address);
function addressData(address) {
  var ref = db.ref(information[2]);
  // Attach an asynchronous callback to read the data at our posts reference
  ref.on("value", function (snapshot) {
    //console.log(snapshot.val());
    snapshot.forEach(function (element) {
      address[address.length] = element.val();
    });
    //console.log(address);
  });
}

appointmentsData(appointments);
function appointmentsData(appointments) {
  var ref = db.ref(information[3]);
  // Attach an asynchronous callback to read the data at our posts reference
  ref.on("value", function (snapshot) {
    //console.log(snapshot.val());
    snapshot.forEach(function (element) {
      appointments[appointments.length] = element.val();
    });

    //console.log(appointments);
  });
}

cityData(city);
function cityData(city) {
  var ref = db.ref(information[4]);
  // Attach an asynchronous callback to read the data at our posts reference
  ref.on("value", function (snapshot) {
    //console.log(snapshot.val());
    snapshot.forEach(function (element) {
      city[city.length] = element.val();
    });
    //console.log(city);
  });
}

drive_throughData(drive_through);
function drive_throughData(drive_through) {
  var ref = db.ref(information[5]);
  // Attach an asynchronous callback to read the data at our posts reference
  ref.on("value", function (snapshot) {
    //console.log(snapshot.val());
    snapshot.forEach(function (element) {
      drive_through[drive_through.length] = element.val();
    });
    //console.log(drive_through);
  });
}

latitudeData(latitude);
function latitudeData(latitude) {
  var ref = db.ref(information[6]);
  // Attach an asynchronous callback to read the data at our posts reference
  ref.on("value", function (snapshot) {
    //console.log(snapshot.val());
    snapshot.forEach(function (element) {
      latitude[latitude.length] = element.val();
    });
    //console.log(latitude);
  });
}

locationIDData(location_id);
function locationIDData(location_id) {
  var ref = db.ref(information[7]);
  // Attach an asynchronous callback to read the data at our posts reference
  ref.on("value", function (snapshot) {
    //console.log(snapshot.val());
    snapshot.forEach(function (element) {
      location_id[location_id.length] = element.val();
    });
    // console.log(location_id);
  });
}

locationNameData(location_name);
function locationNameData(location_name) {
  var ref = db.ref(information[8]);
  // Attach an asynchronous callback to read the data at our posts reference
  ref.on("value", function (snapshot) {
    //console.log(snapshot.val());
    snapshot.forEach(function (element) {
      location_name[location_name.length] = element.val();
    });
    // console.log(location_name);
  });
}

longitudeData(longitude);
function longitudeData(longitude) {
  var ref = db.ref(information[9]);
  // Attach an asynchronous callback to read the data at our posts reference
  ref.on("value", function (snapshot) {
    //console.log(snapshot.val());
    snapshot.forEach(function (element) {
      longitude[longitude.length] = element.val();
    });
    // console.log(longitude);
  });
}

operated_byData(operated_by);
function operated_byData(operated_by) {
  var ref = db.ref(information[10]);
  // Attach an asynchronous callback to read the data at our posts reference
  ref.on("value", function (snapshot) {
    //console.log(snapshot.val());
    snapshot.forEach(function (element) {
      operated_by[operated_by.length] = element.val();
    });
    // console.log(operated_by);
  });
}

phoneData(phone);
function phoneData(phone) {
  var ref = db.ref(information[11]);
  // Attach an asynchronous callback to read the data at our posts reference
  ref.on("value", function (snapshot) {
    //console.log(snapshot.val());
    snapshot.forEach(function (element) {
      phone[phone.length] = element.val();
    });
    // console.log(phone);
  });
}

phuIDData(phu_id);
function phuIDData(phu_id) {
  var ref = db.ref(information[12]);
  // Attach an asynchronous callback to read the data at our posts reference
  ref.on("value", function (snapshot) {
    //console.log(snapshot.val());
    snapshot.forEach(function (element) {
      phu_id[phu_id.length] = element.val();
    });
    //  console.log(phu_id);
  });
}

postalData(postal_code);
function postalData(postal_code) {
  var ref = db.ref(information[13]);
  // Attach an asynchronous callback to read the data at our posts reference
  ref.on("value", function (snapshot) {
    //console.log(snapshot.val());
    snapshot.forEach(function (element) {
      postal_code[postal_code.length] = element.val();
    });
    // console.log(postal_code);
  });
}

provinceData(province);
function provinceData(province) {
  var ref = db.ref(information[14]);
  // Attach an asynchronous callback to read the data at our posts reference
  ref.on("value", function (snapshot) {
    //console.log(snapshot.val());
    snapshot.forEach(function (element) {
      province[province.length] = element.val();
    });
    // console.log(province);
  });
}

Walk_inData(walk_ins);
function Walk_inData(walk_ins) {
  var ref = db.ref(information[15]);
  // Attach an asynchronous callback to read the data at our posts reference
  ref.on("value", function (snapshot) {
    //console.log(snapshot.val());
    snapshot.forEach(function (element) {
      walk_ins[walk_ins.length] = element.val();
    });
    //  console.log(walk_ins);
  });
}

websiteData(website);
function websiteData(website) {
  var ref = db.ref(information[16]);
  // Attach an asynchronous callback to read the data at our posts reference
  ref.on("value", function (snapshot) {
    //console.log(snapshot.val());
    snapshot.forEach(function (element) {
      website[website.length] = element.val();
    });
    // console.log(website);
  });
}
*/
