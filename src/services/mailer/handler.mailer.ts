import { KafkaMessage } from 'kafkajs';
import Nodemailer from './service.mailer';
import MailConsumerSchemaValidator from './schema/validation.mailer'


export async function mailHelper(message: KafkaMessage) {
    let mailBody: any = JSON.parse(message.value!.toString());
    console.log(typeof mailBody)
    console.log('Received message from topic :' +  mailBody);
    console.log("EMAILRECIPIENT", mailBody.EMAILRECIPIENT)
    console.log("SUBJECT", mailBody.SUBJECT)
    console.log("BODY", mailBody.BODY)
    let validEmailBody = await MailConsumerSchemaValidator.checkSchema(mailBody)
    if (validEmailBody) {
      await Nodemailer.sendMail(mailBody['EMAILRECIPIENT'], mailBody['SUBJECT'] , mailBody['BODY'] )
    }
  }