import cors from 'cors';

const corsOptions = {
  origin: 'localhost:5000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

export default cors(corsOptions);
