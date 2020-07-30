const path = require( 'path' )

const controller = {
  renderHome( request, response ) {
    response.render( path.join(  __dirname + '/../../public/index.html' ) )
  }
}

module.exports = controller
