export default function() {
  this.post('/users');
  this.get('/rentals');
  this.post('/rentals');
  this.patch('/rentals/:id');
  this.post('/token', (schema, request) => {
    const username = request.requestBody.match(/username=([^&]*)/)[1];
    const password = request.requestBody.match(/password=([^&]*)/)[1];

    const user = schema.users.findBy({ username });

    if(user && user.password == password ) {
      return {
        access_token: '1122334455'
      };
    } else {
      return new Response(401, {}, { message: 'Invalid credentials' });
    }
  });
}
