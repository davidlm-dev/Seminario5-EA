import mongoose from 'mongoose';

const uri = 'mongodb://localhost:27017/DB1'; // URI propia

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB conectado correctamente');
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
