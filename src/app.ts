import * as http from 'http';

import * as dotenv from "dotenv";
const dotenvResult = dotenv.config({ path: `.env.${process.env.DEPLOY_STAGE}` })
if (dotenvResult.error) {
    throw dotenvResult.error;
}
import { MailConsumer } from './services/mailer/consumer.mailer';

const PORT = parseInt(process.env.PORT!, 10) || 4000;
const topic = process.env.MAIL_TOPIC!

const runConsumer = async (): Promise<void> => {
    console.log(topic)
    let mailConsumer: MailConsumer = new MailConsumer(topic);
    await mailConsumer.connect();
}
  
runConsumer()
    .then(() => {
        console.log('Consumer is running...');
    })
    .catch((error) => {
        console.error('Failed to run kafka consumer', error);
    });

http.createServer(function (_req: any, _res: any) {}).listen(PORT, function(){
    console.log(`server start at port ${PORT}`);
});