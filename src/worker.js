addEventListener('message', (event) => {
  postMessage(event.data + ' This was handled on a separate thread!');
});
