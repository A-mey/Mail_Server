import nodemailer from 'nodemailer';

class Nodemailer {
  private static transporter: nodemailer.Transporter = nodemailer.createTransport({
    host: process.env.HOST, //"smtp.gmail.com"
    port: parseInt(process.env.PORT!, 10), //465
    secure: true,
    service: process.env.SERVICE, //"Gmail"

    auth: {
        user: process.env.EMAILID, //"a.may3pp@gmail.com"
        // pass: 'M1crobl0g',
        pass: process.env.PASSWORD //"pfyokviswhhbofap"
    }
});

  constructor() {}

  static async sendMail(to: string, subject: string, html: string): Promise<void> {
      try {
        const info = await this.transporter.sendMail({
          from: process.env.EMAILID, //'a.may3pp@gmail.com',
          to,
          subject,
          html
        })
		console.log("info", info.message);
		}
      catch(e: any) {
        console.log(e.message)
      }
	}
}

export default Nodemailer;