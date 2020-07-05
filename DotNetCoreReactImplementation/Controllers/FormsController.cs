using MapVisualization.Models;
using MapVisualization.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using SendGrid;
using Newtonsoft.Json;
using SendGrid.Helpers.Mail;
using System.Threading.Tasks;
using System.Net;
using Newtonsoft.Json.Linq;

namespace MapVisualization.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FormsController : ControllerBase
    {
        private readonly ILogger<DataController> logger;

        // will maybe use in the future to store form responses
        //private readonly ICosmosDbService cosmosDbService;

        private readonly IConfiguration configuration;

        public FormsController(ILogger<DataController> logger, IConfiguration configuration)
        {
            this.logger = logger;
            this.configuration = configuration;
        }

        [HttpPost("subscribe")]
        public async Task<ActionResult<Dictionary<string, bool>>> Subscribe(JObject payload)
        {
            var data = JsonConvert.DeserializeObject<Subscribe>(payload.ToString());

            var email = data.Email;
            var apiKey = configuration.GetSection("SENDGRID_API_KEY").Value;
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("info@corabot.org", "Project CORA");
            var to = new EmailAddress(email, "Example User 2");
            var templateId = "d-b3a547bacdf5498294cf0064dde9200f";
            var msg = MailHelper.CreateSingleTemplateEmail(from, to, templateId, data);

            var response = await client.SendEmailAsync(msg);


            return new Dictionary<string, bool>() { { "subscribed", (response.StatusCode ==  HttpStatusCode.OK || response.StatusCode ==  HttpStatusCode.Created  ||
            response.StatusCode ==  HttpStatusCode.Accepted)} };
        }

        [HttpPost("contact")]
        public async Task<ActionResult<Dictionary<string, bool>>> Contact(JObject payload)
        {
            var data = JsonConvert.DeserializeObject<Contact>(payload.ToString());
            var email = data.Email;

            var apiKey = configuration.GetSection("SENDGRID_API_KEY").Value;
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("info@corabot.org", "Project CORA");

            var templateId = "d-26476c338b914af2b0d85f223acb8904";
            var msg = MailHelper.CreateSingleTemplateEmail(from, from, templateId, data);

            var response = await client.SendEmailAsync(msg);

            return new Dictionary<string, bool>() { { "contacted", (response.StatusCode ==  HttpStatusCode.OK || response.StatusCode ==  HttpStatusCode.Created  ||
            response.StatusCode ==  HttpStatusCode.Accepted)}
           };
        }

        [HttpPost("partner")]
        public async Task<ActionResult<Dictionary<string, bool>>> Partner(JObject payload)

        {
            var data = JsonConvert.DeserializeObject<Partner>(payload.ToString());

            var email = data.Email;

            var apiKey = configuration.GetSection("SENDGRID_API_KEY").Value;
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("info@corabot.org", "Project CORA");
            var to = new EmailAddress(email);
            // welcome email to partner
            var templateId1 = "d-b3a547bacdf5498294cf0064dde9200f";
            var msg1 = MailHelper.CreateSingleTemplateEmail(from, to, templateId1, data);
            //eamail data to cora team
            var templateId2 = "d-942b1b931faf409f8589b611e57e64e6";
            var response = await client.SendEmailAsync(msg1);
            var msg2 = MailHelper.CreateSingleTemplateEmail(from, from, templateId2, data);

            return new Dictionary<string, bool>() { { "partnered", (response.StatusCode ==  HttpStatusCode.OK || response.StatusCode ==  HttpStatusCode.Created  ||
             response.StatusCode ==  HttpStatusCode.Accepted)} };
        }
    }
}
