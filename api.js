
const fetch = require("node-fetch");
const express = require('express')
var bodyParser = require('body-parser')

const app = express()
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000

const MAPQUEST_KEY = process.env.MAPQUEST_KEY || 'rG5ow8mhemQhOZgkAHwiyeb4LZgCKkDq'

const MAPQUEST_URL = 'http://www.mapquestapi.com/geocoding/v1/address?key=' + MAPQUEST_KEY + '&location='
const SUN_URI = 'https://api.sunrise-sunset.org/json'

app.get('/', (req, res) => res.send('Use of api for sunrise-sunset time!'))

app.get('/cities/:city', async (req, res) => {

    try {
            //console.log(url)
            const mapq_response = await fetch(MAPQUEST_URL+req.param.city, {
                headers: {
                    'Accept' : 'application/json',
                }
            })
            const mapq_json = await mapq_response.json()
            latlon = mapq_json.results[0].locations[0].latLng
            //console.log('\nlatlon in asynch ', latlon)

            const sun_response = await fetch(SUN_URI+'?lat=' + latlon.lat+ '&lng=' +latlon.lng, {
                headers: {
                    'Accept' : 'application/json',
                }
            })
            const sun_json = await sun_response.json()

            res.status(200)
            res.send(sun_json.results)
        } catch (error) {
            res.sendstatus(500)
            console.log('\n\nerror', error)

        }
})


app.listen(PORT, () => console.log('Example app listening on port '+ PORT))


function concatenateStrings(a, b){
	return a+b
}
module.exports={conc: concatenateStrings}
