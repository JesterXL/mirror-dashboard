const restify = require('restify');
const request = require('request');

const server = restify.createServer();

server.use(restify.CORS({}));

server.get('/api/ping', (req, res)=>
{
    res.send(200, {result: true, data: 'pong'});
});

server.get('/api/proxy', (req, res)=>
{
    request('https://j56ld3za2f.execute-api.us-east-1.amazonaws.com/prod/loadDataForMirrorDashboard', (error, response, body)=>
    {
        if(!error && response.statusCode == 200)
        {
            return res.send(JSON.parse(body));
        }
        else
        {
            return res.send(500);
        }
    });
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});