import { Consumer, EachMessagePayload } from 'kafkajs';
import { KafkaJSClass } from "./kafka.config";
import { SimpleConsumer } from '../../interfaces/SimpleConsumer.interfaces';

export abstract class KafkaConsumer extends KafkaJSClass implements SimpleConsumer {
    protected readonly consumer: Consumer = this.kafka.consumer({ groupId: process.env.GROUPID! });
    protected topic: string;

    constructor(topic: string) {
        super();
        this.topic = topic;
        console.log(topic)
        console.log("constructor called")
    }

    async connect(): Promise<void> {
        await this.consumer.connect();
        await this.consumer.subscribe({ topic: this.topic });
        await this.consumer.run({ eachMessage: payload => this.handle(payload) })

    }

    abstract handle({ topic, partition, message }: EachMessagePayload) : Promise<void>

    disconnect(): Promise<void> {
    return this.consumer.disconnect()
        .catch(e => console.log(`Error on disconnect ${e}`));
    }
}