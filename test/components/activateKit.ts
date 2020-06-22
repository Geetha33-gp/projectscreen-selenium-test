import { $ } from '../types/wdio';

export function toActivateKit($: $) {
   const activateKitText = $('.Footnote');
   activateKitText.getText().should.equal('Add another kit? Order now');

   const clickToActivate = $('button[id="show-kit-activation"]');
   clickToActivate.click();
   browser.pause(2000);
}

export function activateYourKit($: $, firstName: any, lastName: any, dob: any, hkId: any, passportNum: any, hkReturnHomePermit: any, travelDocument: any, barcodeValue: any) {
   //PERSONAL INFO
   const personalDetailsText = $('//*[@id="root"]/div/div/div/div[2]/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/div/p');
   personalDetailsText.getText().should.equal('Personal details are required as this information will be used to cross check with your travel documents and help validate your identity.');

   const firstname = $('input[id="firstname"]');
   firstname.setValue(firstName);
   browser.pause(1000);

   const lastname = $('input[id="lastname"]');
   lastname.setValue(lastName);
   browser.pause(1000);

   const dateOfBirth = $('input[id="dob"]');
   dateOfBirth.setValue(dob);
   browser.pause(1000);

   const gender = $("select[id='gender']");
   browser.execute("arguments[0].setAttribute('style', 'background: #33FFA5;');", (gender as any));
   browser.pause(2000);
   gender.click();
   gender.selectByVisibleText('Female');
   browser.pause(2000);
   gender.click();

   const hongKongID = $('input[id="hkid"]');
   hongKongID.setValue(hkId);
   browser.pause(1000);

   const passport = $('input[id="passport"]');
   passport.setValue(passportNum);
   browser.pause(1000);

   const homeReturnPermit = $('input[id="hkreturnhomepermit"]');
   homeReturnPermit.setValue(hkReturnHomePermit);
   browser.pause(1000);

   const other = $('input[id="traveldocument"]');
   other.setValue(travelDocument);
   browser.pause(1000);

   const barcode = $('input[id="barcode"]');
   barcode.setValue(barcodeValue);
   browser.pause(1000);

   const activateKit = $('button[id="continue-to-severe-symptoms"]');
   activateKit.click();
   browser.pause(2000);

   // ANY SYMPTOMS ?
   const anySevereSymptoms = $('img[alt="Radiobutton - No"]');
   anySevereSymptoms.click();
   browser.pause(2000);

   const continueToNext = $('button[id="continue-to-questionnaire"]');
   continueToNext.click();
   browser.pause(2000);
   
   //SURVEY QUESTION
   const didYouContactAnybody = $('//*[@id="root"]/div/div/div/div[2]/div/div[2]/div/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/img');
   const didYouTravel = $('img[alt="Radiobutton - United States"]');
   const didYouWorkInClinic = $('//*[@id="root"]/div/div/div/div[2]/div/div[2]/div/div[1]/div[2]/div[2]/div/div[3]/div/div[2]/img');
   const anySymptoms = $('//*[@id="root"]/div/div/div/div[2]/div/div[2]/div/div[1]/div[2]/div[2]/div/div[4]/div/div[2]/img');
   const anyChronicConditions = $('//*[@id="root"]/div/div/div/div[2]/div/div[2]/div/div[1]/div[2]/div[2]/div/div[5]/div/div[2]/img');
   const currentlyPregnant = $('img[alt="Radiobutton - Does not apply to me"]');
   didYouContactAnybody.click();
   browser.pause(1000);
   didYouTravel.click();
   browser.pause(1000);
   didYouWorkInClinic.click();
   browser.pause(1000);
   anySymptoms.click();
   browser.pause(1000);
   anyChronicConditions.click();
   browser.pause(1000);
   currentlyPregnant.click();
   browser.pause(1000);

   const surveyQuestionText = $('h4');
   surveyQuestionText.getText().should.equal('Next, please tell us a little about your health situation.');

   const submit = $('button[id="submit-questionnaire"]');
   submit.click();
   browser.pause(2000);
}

export function scheduleReturn($: $, addressLine1: any, addressLine2: any) {
   const acknowledgeText = $('.single-pane > h4');
   acknowledgeText.getText().should.equal('Before you schedule your appointment, please read the below guidelines carefully.');

   const proceedToSchedule = $('button[id="proceed-to-schedule"]');
   proceedToSchedule.click();
   browser.pause(2000);

   const scheduleReturnText = $('.accordion-content h4');
   scheduleReturnText.getText().should.equal('Please provide your pick-up details and confirm your booking.');
   browser.pause(1000);

   const pickUpDate = $("select[id='pickupdate']");
   browser.execute("arguments[0].setAttribute('style', 'background: #33FFA5;');", (pickUpDate as any));
   browser.pause(2000);
   pickUpDate.click();
   pickUpDate.selectByIndex(1);
   browser.pause(2000);
   pickUpDate.click();

   const address1 = $("input[id='addressline1']");
   address1.setValue(addressLine1);
   browser.pause(1000);

   const address2 = $("input[id='addressline2']");
   address2.setValue(addressLine2);
   browser.pause(1000);

   const district = $("select[id='district']");
   browser.execute("arguments[0].setAttribute('style', 'background: #33FFA5;');", (district as any));
   browser.pause(2000);
   district.click();
   district.selectByVisibleText('Admiralty');
   browser.pause(2000);
   district.click();

   const clickCheckboxToConfirm = $("img[alt='Checkbox']");
   clickCheckboxToConfirm.click();
   browser.pause(1000);

   const submitPickupDetails = $("#book-pickup");
   submitPickupDetails.click();
   browser.pause(5000);
}

export function reScheduleOrCancel($: $) {
   const cancelAppoitment = $(".center > .standard-link");
   cancelAppoitment.click();
   browser.pause(4000);

   const proceedToRescheduleAgain = $('#proceed-to-schedule');
   proceedToRescheduleAgain.click();
   browser.pause(4000);

   const pickUpNewDate = $("select[id='pickupdate']");
   browser.execute("arguments[0].setAttribute('style', 'background: #33FFA5;');", (pickUpNewDate as any));
   browser.pause(2000);
   pickUpNewDate.click();
   pickUpNewDate.selectByIndex(2);
   browser.pause(4000);
   pickUpNewDate.click();

   const submitPickupDetails = $("#book-pickup");
   submitPickupDetails.click();
   browser.pause(5000);

   const confirmPickUpText = $('.accordion-content h4');
   confirmPickUpText.getText().should.equal('Thank you for scheduling your pick-up.');
   browser.pause(1000);

   const confirmPickUp = $("#finish-scheduling-pickup");
   confirmPickUp.click();
   browser.pause(6000);

   const cancelAppoitmentText = $('//*[@id="root"]/div/div/div/div[2]/div/div[2]/div/div[2]/div[2]/div[2]/p');
   cancelAppoitmentText.getText().should.equal('Need to make a change? Cancel your appointment');
}

export function collectSample($: $) {
   // const videoTitleText = $('.video-title');
   // videoTitleText.getText().should.equal('Please follow the instructions to collect your deep throat saliva sample.');

   // const watchTutorial = $("//*[@id='player_uid_978336262_1']/div[4]/button");
   // watchTutorial.click();

   const sampleCollectionText = $('.single-pane > h4 > span');
   sampleCollectionText.getText().should.equal('Please only collect your sample on the morning of your return date');

   const submitToSampleReturn = $("button[id='complete-step-3']");
   submitToSampleReturn.click();
   browser.pause(4000);
}

export function returnToPreviousStep($: $) {
   const returntoStep3 = $("//*[@id='root']/div/div/div/div[2]/div/div[2]/div/div[4]/div[2]/div[2]/p[1]/span");
   returntoStep3.click();
   browser.pause(4000);

   const submitToSampleReturn = $("button[id='complete-step-3']");
   submitToSampleReturn.click();
   browser.pause(4000);
   browser.execute("window.scrollBy(0,500)");
   browser.pause(4000);

   const returnToPreviousStepText = $('//*[@id="root"]/div/div/div/div[2]/div/div[2]/div/div[4]/div[2]/div[2]/p[1]');
   returnToPreviousStepText.getText().should.equal('Want to see sample collection instructions again? Return to Step 3.');
}

