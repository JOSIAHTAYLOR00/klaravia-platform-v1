exports.handler = async (event) => {

  const webhook = JSON.parse(event.body);

  console.log('webhook from event::', webhook);
}