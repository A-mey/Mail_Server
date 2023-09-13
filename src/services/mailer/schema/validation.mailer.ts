import MailConsumerSchema from './schema.mailer'

class MailConsumerSchemaValidator {
    checkSchema = async (body: object) => {
        console.log(body, "body")
        const errorRes =  await MailConsumerSchema.mailConsumerSchemaValidate(body);
        if (!errorRes) {
            console.log(await MailConsumerSchema.mailConsumerSchemaValidate.errors)
        }
        return errorRes;
    }
}

export default new MailConsumerSchemaValidator()