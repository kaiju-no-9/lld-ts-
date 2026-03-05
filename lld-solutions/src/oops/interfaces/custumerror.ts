//Let's apply interfaces to a different domain. Imagine you're building an alerting system for a DevOps platform. 
//When something goes wrong (server down, high CPU, disk full), the system needs to send notifications. 
//Some teams prefer email, others use Slack, and some have custom webhook integrations.
//The alerting service shouldn't know or care which channel is being used. 
//It just sends the notification through whatever channel was configured.
//Here's the class diagram for this design:

//Sol
interface NotificationService{
    send(recpint :string , message :string):void;
}

class SlackNotifer implements NotificationService{
     send(recpint :string , message :string){
        console.log(`recinr :${recpint}, message:${message}`)
     }
}
class EmailNotifer implements NotificationService{
     send(recpint :string , message :string){
        console.log(`recinr :${recpint}, message:${message}`)
     }
}
class WebHookNotifer implements NotificationService{
     send(recpint :string , message :string){
        console.log(`recinr :${recpint}, message:${message}`)
     }
}

class  AlertSerive {
    private notifer : NotificationService
    constructor(notifer:NotificationService){
        this.notifer = notifer
        
    }
    alertTrigger(recipent:string, issue:string):void{
            const alert  = `Alert ${issue}`;
            this.notifer.send(recipent, alert)

        }


}
// Usage
const emailAlerts = new AlertSerive(new EmailNotifer());
emailAlerts.alertTrigger("ops@company.com", "CPU usage at 95%");

const slackAlerts = new AlertSerive(new SlackNotifer());
slackAlerts.alertTrigger("#incidents", "Database connection pool exhausted");

const webhookAlerts = new AlertSerive(new WebHookNotifer());
webhookAlerts.alertTrigger("https://hooks.example.com/alerts", "Disk usage at 90%");