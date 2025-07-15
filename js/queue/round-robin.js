// Each of the request should go to another instance

function test(requests, servers) {
  // Each request should go to a specific server in a round ribbon fashion

  for (let i = 0; i < requests.length; i++) {}
}

test(['Hello', 'World', 'This', 'That'], [{ name: 'server-1' }, { name: 'server-2' }, { name: 'server-3' }]);
