import { CommonSchema } from "../../../common/schema.common";

class MailConsumerSchema extends CommonSchema{

    constructor() {
        super()
        this.ajv = super.getAjv()
    }

    private mailConsumerSchema = {
        type: 'object',
        additionalProperties: false,
        required: ['EMAILRECIPIENT', 'SUBJECT', 'BODY'],
        properties: {
            EMAILRECIPIENT: {
                type: 'string',
                format: 'email'
            },
            SUBJECT: {
                type: 'string'
            },
            BODY: {
                type: 'string'
            }
        }
    };

    
    public readonly mailConsumerSchemaValidate = this.ajv.compile(this.mailConsumerSchema)

}

export default new MailConsumerSchema();