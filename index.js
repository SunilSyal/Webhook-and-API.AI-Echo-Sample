'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/echo', function(req, res) {
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-echo-sample'
    });
});

restService.post('/slack-test', function(req, res) {

    var slack_message = {
        "text": "Some text for speech.",
        "attachments": [{
            "title": "Title goes here",
            "title_link": "http://www.google.com",
            "color": "#36a64f",

            "fields": [{
                "title": "Condition",
                "value": "50",
                "short": "false"
            }, {
                "title": "Wind",
                "value": "Speed: 20, direction: 30",
                "short": "true"
            }, {
                "title": "Atmosphere",
                "value": "Humidity 78, pressure 56",
                "short": "true"
            }],

            "thumb_url": "https://stiltsoft.com/blog/wp-content/uploads/2016/01/5.jira_.png"
        }]
    }
    return res.json({
        speech: "speech",
        displayText: "speech",
        source: 'webhook-echo-sample',
        data: {
            "slack": slack_message
        }
    });
});




restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
