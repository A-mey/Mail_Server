import { EachMessagePayload } from 'kafkajs';


import { KafkaConsumer } from "../kafka/kafka.consumer";
import {mailHelper} from './handler.mailer'

export class MailConsumer extends KafkaConsumer {

    constructor(topic: string) {
        super(topic);

    }

    async connect() {
        super.connect();
    }

    async handle({ topic, partition, message }: EachMessagePayload): Promise<void> {
        await mailHelper(message)

    }
    
}