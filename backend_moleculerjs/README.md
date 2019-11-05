Micro services that split an order in the list of parcels according weight and quantity

Stack:
- Docker `https://www.docker.com`  container
- Moleculer `https://moleculer.services` micro services
- Nats `https://nats.io` transport 
- Traefik `https://traefik.io/` router


Stack in action
----------------
Docker must be installed first

```
npm install
npm run dc:up
```
then in a browser `http://localhost:3000`

Traefik dashboard is accessible at `http://localhost:3001`

Getting started
---------------
- `npm run dev`: Start development mode
- `npm run start`: Start production mode
- `npm test`: Run tests
- `npm run dc:up`: Start the stack with Docker Compose
- `npm run dc:down`: Stop the stack with Docker Compose

Check https://github.com/appshore/OrdersToParcels to see the same services running as Nodejs command line
