<?php
$url = 'https://graph.facebook.com/v2.6/me/thread_settings?access_token=[YOUR TOKEN]';
$ch = curl_init($url);
$jsonData = '{
"setting_type":"call_to_actions",
"thread_state":"existing_thread",
"call_to_actions":[{
"type":"postback",
"title":"Help",
"payload":"help"
},
{
"type":"postback",
"title":"Feedback",
"payload":"feedback"
}
]
}';
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($ch);
echo $result;
?>
