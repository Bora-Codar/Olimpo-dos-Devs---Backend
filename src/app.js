const express = require( 'express' )
const app = express()

const path = require( 'path' )
const routes = require( './routes.js' )

app.use( express.static( path.join( __dirname, '/../public' ) ) )

app.use( ( request , response ) =>{
  response.status(404).sendFile( path.join( __dirname , '/../public/pages/404-error.html' ) )  
} )

app.get( '/', routes )

module.exports = app
