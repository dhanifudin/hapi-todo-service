const proxy = (endpoint) => {
  return {
    proxy: {
      mapUri: (request) => {
        const { credentials } = request.auth
        const { headers } = request
        if (credentials) {
          delete headers.authorization
          headers.user = credentials.id
        }
        headers.host = endpoint
        console.log(headers)
        const uri = `${endpoint}${request.path}${request.url.search || ''}`
        return { uri, headers }
      }
    }
  }
}

module.exports = (endpoint, routes) => {
  return routes.map(route => {
    route.handler = proxy(endpoint)
    return route
  })
}
