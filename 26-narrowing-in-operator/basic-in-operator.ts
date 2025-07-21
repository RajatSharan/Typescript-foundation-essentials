type EmailNotification ={
    email:string
}
type SMSNotification={

    phoneNumber:string
}

function sendNotification(n:EmailNotification|SMSNotification){
      if ("email" in n) {
    console.log(`Sending Email to ${n.email}`);
  } else {
    console.log(`Sending SMS to ${n.phoneNumber}`);
  }
}


