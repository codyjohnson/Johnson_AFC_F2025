HTTP Request

1) Utilize an endpoint
2) Receive data
3) If good date, parse it
4) else, throw error
5) do something with parsed data
6) handle errors

1) Utilize an endpoint
    fetch(url)
2) Receive data
3) If good date, parse it
4) else, throw error
   .then(incomingData)
5) do something with parsed data
   .then(parsedData)
6) handle errors
   .catch(errors)
    .finally()
