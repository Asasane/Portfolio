const firebaseConfig = {
    apiKey: "AIzaSyD1dbmNrExkCIjInx5_0XHZTW__w6UAPsQ",
    authDomain: "contactform-8f433.firebaseapp.com",
    databaseURL: "https://contactform-8f433-default-rtdb.firebaseio.com",
    projectId: "contactform-8f433",
    storageBucket: "contactform-8f433.appspot.com",
    messagingSenderId: "973775030404",
    appId: "1:973775030404:web:ecf89ccf23ebcde8479ad1",
    measurementId: "G-J3ENFTVT7Y"
  };
  //initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};