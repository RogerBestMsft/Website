using MapVisualization.Models;
using MapVisualization.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using SendGrid;
using Newtonsoft.Json;
using SendGrid.Helpers.Mail;
using System.Threading.Tasks;
using System.Net.Http;
using System.Net;
using Newtonsoft.Json.Linq;
using System;
using System.Text.Json;

namespace MapVisualization.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FormsController : ControllerBase
    {
        private readonly ILogger<DataController> logger;

        private readonly ICosmosDbService cosmosDbService;

        private readonly IConfiguration configuration;

        public FormsController(ILogger<DataController> logger, IConfiguration configuration)
        {
            this.logger = logger;
            this.configuration = configuration;
        }

        [HttpPost("subscribe")]
        public async Task<ActionResult<Dictionary<string, bool>>> Subscribe([FromBody] string data)
        {

            var email = data;
            var apiKey = configuration.GetSection("SENDGRID_API_KEY").Value;
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("info@corabot.org", "Project CORA");
            var to = new EmailAddress(email, "Example User 2");
            var templateId = "d-b3a547bacdf5498294cf0064dde9200f";
            // var dynamicTemplateData = JsonConvert.SerializeObject(new Dictionary<string, string>() { });
            var dynamicTemplateData = new Dictionary<string, string>() { };
            var msg = MailHelper.CreateSingleTemplateEmail(from, to, templateId, dynamicTemplateData);

            var response = await client.SendEmailAsync(msg);


            return new Dictionary<string, bool>() { { "subscribed", (response.StatusCode ==  HttpStatusCode.OK || response.StatusCode ==  HttpStatusCode.Created  ||
            response.StatusCode ==  HttpStatusCode.Accepted)} };
        }
    }
}
