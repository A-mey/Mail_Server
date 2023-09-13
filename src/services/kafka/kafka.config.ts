import { Kafka, KafkaConfig } from 'kafkajs';

export class KafkaJSClass {
    // private clientId = process.env.CLIENTID
    // private broker = `${process.env.BROKER_URL}:${process.env.BROKER_PORT}`
    private kafkaConfig: KafkaConfig = { clientId: process.env.CLIENTID, brokers: [`${process.env.BROKER_URL}:${process.env.BROKER_PORT}`] }
    protected readonly kafka: Kafka = new Kafka(this.kafkaConfig);
}