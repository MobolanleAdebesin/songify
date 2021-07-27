const client_id = process.env.CLIENT_ID; 
const client_secret = process.env.CLIENT_SECRET; 
 

const axios = require('axios').default;



module.exports = { 
    index:  async (req, res) => {
    
        console.log(req);
        let tokenRequest = await axios({
            url: 'https://accounts.spotify.com/api/token',
            method: 'post', 
            params: {
                grant_type: 'client_credentials'
            }, 
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/x-www-form-urlencoded'
            }, 
            auth: {
                username: client_id, 
                password: client_secret
            }
        })

        try {
            let token = tokenRequest.data.access_token;
        
                let rawSongData = await axios({
                    url: `${req.query.title}&type=track&market=US&include_external=audio`, 
                    baseURL: 'https://api.spotify.com/v1/search?q=',
                    method: 'get', 
                    headers: {
                        'Authorization': 'Bearer ' + token
    
                    }, 
                })
                

                let songListData = await rawSongData.data.tracks.items
                let trackData = await songListData.map((track) => ({song: track.name, artist: track.artists[0].name}));
                res.send(trackData)    
                
        }
        catch (error) {
            console.log(`error: ${error}`);
        }

    },
    indexPost:  async (req, res) => {

        let tokenRequest = await axios({
            url: 'https://accounts.spotify.com/api/token',
            method: 'post', 
            params: {
                grant_type: 'client_credentials'
            }, 
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/x-www-form-urlencoded'
            }, 
            auth: {
                username: client_id, 
                password: client_secret
            }
        })

        try {
            let token = tokenRequest.data.access_token;

                let rawSongData = await axios({
                    url: `${req.body.title}&type=track&market=US&include_external=audio`, 
                    baseURL: 'https://api.spotify.com/v1/search?q=',
                    method: 'get', 
                    headers: {
                        'Authorization': 'Bearer ' + token
    
                    }, 
                })
                

                let songListData = await rawSongData.data.tracks.items
                let trackData = await songListData.map((track) => ({song: track.name, artist: track.artists[0].name, id: track.id}));
                res.send(trackData)    
                
        }
        catch (error) {
            console.log(`error: ${error}`);
        }

    }
}